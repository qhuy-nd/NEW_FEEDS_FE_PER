#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const METHOD_ORDER = ["GET", "POST", "PUT", "PATCH", "DELETE"];
const HTTP_METHODS = new Set(METHOD_ORDER.map((method) => method.toLowerCase()));

const args = parseArgs(process.argv.slice(2));
const inputPath = path.resolve(args.input ?? "mge-swagger.json");
const outDir = path.resolve(args.out ?? "src/services");
const selectedTag = args.tag;
const dryRun = Boolean(args["dry-run"]);
const overwrite = Boolean(args.overwrite);

if (!fs.existsSync(inputPath)) {
  fail(`OpenAPI file not found: ${inputPath}`);
}

const spec = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const operationsByTag = collectOperations(spec, selectedTag);
const plannedFiles = [];
const skippedFiles = [];

for (const [tag, operations] of operationsByTag) {
  const tagDir = path.join(outDir, toKebab(tag));
  const routerName = routerConstName(tag);
  const prefixName = `PREFIX_${toConstName(tag)}`;
  const router = buildRouterFile(tag, operations, routerName, prefixName);

  pushFile(path.join(tagDir, "router.ts"), router);

  for (const operation of operations) {
    const operationDir = path.join(tagDir, operation.slug);
    const typeFile = buildTypeFile(spec, operation);
    const svcFile = buildServiceFile(operation, tag, routerName);

    pushFile(path.join(operationDir, `${operation.slug}.type.ts`), typeFile);
    pushFile(path.join(operationDir, `${operation.slug}.svc.ts`), svcFile);
  }
}

if (!dryRun) {
  for (const file of plannedFiles) {
    fs.mkdirSync(path.dirname(file.path), { recursive: true });
    fs.writeFileSync(file.path, file.content);
  }
}

printSummary();

function parseArgs(argv) {
  const parsed = {};

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (!arg.startsWith("--")) {
      fail(`Unexpected argument: ${arg}`);
    }

    const key = arg.slice(2);
    const next = argv[index + 1];

    if (!next || next.startsWith("--")) {
      parsed[key] = true;
    } else {
      parsed[key] = next;
      index += 1;
    }
  }

  return parsed;
}

function collectOperations(openapi, tagFilter) {
  const groups = new Map();

  for (const [endpoint, pathItem] of Object.entries(openapi.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem ?? {})) {
      if (!HTTP_METHODS.has(method)) continue;

      const tag = operation.tags?.[0] ?? firstPathSegment(endpoint) ?? "api";
      if (tagFilter && tag !== tagFilter) continue;

      const name = getOperationName(operation, method, endpoint);
      const slug = uniqueSlug(groups.get(tag) ?? [], toKebab(name));
      const uniqueName = slug;
      const serviceName = getServiceName(tag, uniqueName);

      const normalizedOperation = {
        endpoint,
        method: method.toUpperCase(),
        key: toConstName(uniqueName),
        className: `${toPascal(serviceName)}SvcCaller`,
        callerName: `${toCamel(serviceName)}SvcCaller`,
        requestType: `I${toPascal(uniqueName)}Request`,
        responseType: `I${toPascal(uniqueName)}Response`,
        slug,
        operation,
      };

      if (!groups.has(tag)) groups.set(tag, []);
      groups.get(tag).push(normalizedOperation);
    }
  }

  return [...groups.entries()].sort(([left], [right]) => left.localeCompare(right));
}

function pushFile(filePath, content) {
  if (fs.existsSync(filePath) && !overwrite) {
    skippedFiles.push(filePath);
    return;
  }

  plannedFiles.push({ path: filePath, content });
}

function buildRouterFile(tag, operations, routerName, prefixName) {
  const prefix = `/${firstPathSegment(operations[0]?.endpoint ?? tag)}`;
  const grouped = new Map();

  for (const method of METHOD_ORDER) grouped.set(method, []);

  for (const operation of operations) {
    grouped.get(operation.method)?.push(operation);
  }

  const blocks = METHOD_ORDER
    .filter((method) => grouped.get(method)?.length)
    .map((method) => {
      const lines = grouped
        .get(method)
        .sort((left, right) => left.key.localeCompare(right.key))
        .map((operation) => {
          const value = operation.endpoint.startsWith(prefix)
            ? "`${" + prefixName + "}" + operation.endpoint.slice(prefix.length) + "`"
            : JSON.stringify(operation.endpoint);

          return `    ${operation.key}: ${value},`;
        })
        .join("\n");

      return `  ${method}: {\n${lines}\n  },`;
    })
    .join("\n");

  return `const ${prefixName} = ${JSON.stringify(prefix)};\n\nexport const ${routerName} = {\n${blocks}\n};\n`;
}

function buildTypeFile(openapi, operation) {
  const requestType = buildRequestType(openapi, operation);
  const responseSchema = getResponseSchema(operation.operation);
  const responseType = schemaToType(openapi, responseSchema, 0);

  return `${requestType}\n\nexport type ${operation.responseType} = ${responseType};\n`;
}

function buildRequestType(openapi, operation) {
  const params = [
    ...(operation.operation.parameters ?? []),
    ...((operation.pathItem?.parameters) ?? []),
  ];
  const properties = [];
  const required = new Set();

  for (const parameter of params) {
    const resolved = resolveRef(openapi, parameter);
    if (!resolved || resolved.in === "header") continue;

    if (resolved.required) required.add(resolved.name);
    properties.push({
      name: resolved.name,
      optional: !resolved.required,
      type: schemaToType(openapi, resolved.schema, 1),
    });
  }

  const bodySchema = getRequestBodySchema(operation.operation);
  const resolvedBodySchema = bodySchema ? resolveRef(openapi, bodySchema) : undefined;

  if (resolvedBodySchema?.type === "object" && resolvedBodySchema.properties) {
    for (const [name, schema] of Object.entries(resolvedBodySchema.properties)) {
      properties.push({
        name,
        optional: !(resolvedBodySchema.required ?? []).includes(name),
        type: schemaToType(openapi, schema, 1),
      });
    }
  } else if (resolvedBodySchema) {
    properties.push({
      name: "body",
      optional: false,
      type: schemaToType(openapi, resolvedBodySchema, 1),
    });
  }

  if (!properties.length) {
    return `export type ${operation.requestType} = undefined;`;
  }

  const lines = properties
    .map((property) => `  ${quoteProperty(property.name)}${property.optional ? "?" : ""}: ${property.type};`)
    .join("\n");

  return `export interface ${operation.requestType} {\n${lines}\n}`;
}

function buildServiceFile(operation, tag, routerName) {
  const routerPath = "../router";
  const typePath = `./${operation.slug}.type`;
  const typeArgs = [
    `${operation.responseType}["data"]`,
    operation.requestType,
    operation.responseType,
  ].join(",\n  ");

  return `import { RxAxiosCaller } from "../../api.svc";\nimport { ${routerName} } from "${routerPath}";\nimport type { ${operation.requestType}, ${operation.responseType} } from "${typePath}";\n\nclass ${operation.className} extends RxAxiosCaller<\n  ${typeArgs}\n> {\n  constructor() {\n    super(${routerName}.${operation.method}.${operation.key}, "${operation.method}", (raw) => raw.data);\n  }\n}\n\nexport const ${operation.callerName} = new ${operation.className}();\n`;
}

function schemaToType(openapi, schema, depth) {
  const resolved = resolveRef(openapi, schema);

  if (!resolved) return "unknown";

  if (resolved.oneOf || resolved.anyOf) {
    return joinUnion(openapi, resolved.oneOf ?? resolved.anyOf, depth, resolved.nullable);
  }

  if (resolved.allOf) {
    const parts = resolved.allOf.map((item) => schemaToType(openapi, item, depth));
    return parts.join(" & ");
  }

  if (resolved.enum) {
    const enumType = resolved.enum.map((value) => JSON.stringify(value)).join(" | ");
    return resolved.nullable ? `${enumType} | null` : enumType;
  }

  const type = Array.isArray(resolved.type) ? resolved.type.find((item) => item !== "null") : resolved.type;
  let output;

  switch (type) {
    case "string":
      output = "string";
      break;
    case "integer":
    case "number":
      output = "number";
      break;
    case "boolean":
      output = "boolean";
      break;
    case "array":
      output = `${schemaToType(openapi, resolved.items, depth)}[]`;
      break;
    case "object":
      output = objectSchemaToType(openapi, resolved, depth);
      break;
    default:
      output = resolved.properties ? objectSchemaToType(openapi, resolved, depth) : "unknown";
  }

  return resolved.nullable || (Array.isArray(resolved.type) && resolved.type.includes("null"))
    ? `${output} | null`
    : output;
}

function objectSchemaToType(openapi, schema, depth) {
  if (!schema.properties && schema.additionalProperties) {
    return `Record<string, ${schemaToType(openapi, schema.additionalProperties, depth + 1)}>`;
  }

  if (!schema.properties) return "Record<string, unknown>";

  const indent = "  ".repeat(depth);
  const childIndent = "  ".repeat(depth + 1);
  const required = new Set(schema.required ?? []);
  const props = Object.entries(schema.properties)
    .map(([name, value]) => `${childIndent}${quoteProperty(name)}${required.has(name) ? "" : "?"}: ${schemaToType(openapi, value, depth + 1)};`)
    .join("\n");

  return `{\n${props}\n${indent}}`;
}

function getRequestBodySchema(operation) {
  return operation.requestBody?.content?.["application/json"]?.schema
    ?? operation.requestBody?.content?.["multipart/form-data"]?.schema
    ?? operation.requestBody?.content?.["application/x-www-form-urlencoded"]?.schema;
}

function getResponseSchema(operation) {
  const responses = operation.responses ?? {};
  const response = responses["200"] ?? responses["201"] ?? responses["default"] ?? Object.values(responses)[0];

  return response?.content?.["application/json"]?.schema;
}

function resolveRef(openapi, value) {
  if (!value?.$ref) return value;

  const parts = value.$ref.replace(/^#\//, "").split("/");
  return parts.reduce((current, key) => current?.[key], openapi);
}

function joinUnion(openapi, schemas, depth, nullable) {
  const joined = schemas.map((item) => schemaToType(openapi, item, depth)).join(" | ");
  return nullable ? `${joined} | null` : joined;
}

function getOperationName(operation, method, endpoint) {
  const operationId = operation.operationId?.replace(/^[^_]+__/, "");
  if (operationId) return operationId;

  const segments = endpoint.split("/").filter(Boolean).filter((segment) => !segment.startsWith("{"));
  return `${method}-${segments.slice(-2).join("-")}`;
}

function getServiceName(tag, operationSlug) {
  const resourceSlug = toKebab(tag);
  const actionSlug = operationSlug.startsWith(`${resourceSlug}-`)
    ? operationSlug.slice(resourceSlug.length + 1)
    : operationSlug;

  return `${resourceSlug}-${actionSlug}`;
}

function firstPathSegment(endpoint) {
  return endpoint.split("/").filter(Boolean)[0];
}

function uniqueSlug(existingOperations, slug) {
  const existing = new Set(existingOperations.map((operation) => operation.slug));
  if (!existing.has(slug)) return slug;

  let index = 2;
  while (existing.has(`${slug}-${index}`)) index += 1;
  return `${slug}-${index}`;
}

function toKebab(value) {
  return String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function toPascal(value) {
  return toKebab(value)
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function toCamel(value) {
  const pascal = toPascal(value);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function toConstName(value) {
  return toKebab(value).replace(/-/g, "_").toUpperCase();
}

function routerConstName(tag) {
  return `API_${toConstName(tag)}_ROUTERS`;
}

function quoteProperty(name) {
  return /^[a-zA-Z_$][\w$]*$/.test(name) ? name : JSON.stringify(name);
}

function printSummary() {
  const action = dryRun ? "Would write" : "Wrote";
  console.log(`${action} ${plannedFiles.length} file(s).`);

  for (const file of plannedFiles) {
    console.log(`  ${path.relative(process.cwd(), file.path)}`);
  }

  if (skippedFiles.length) {
    console.log(`Skipped ${skippedFiles.length} existing file(s). Use --overwrite to replace them.`);
    for (const file of skippedFiles) {
      console.log(`  ${path.relative(process.cwd(), file)}`);
    }
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
