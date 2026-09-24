---
name: swagger-svc-generator
description: Generate TypeScript API service callers and type files from an OpenAPI/Swagger JSON file for this repository's src/services pattern.
---

# Swagger Svc Generator

Use this skill when the user asks to generate, refresh, or scaffold API services from a Swagger/OpenAPI document into the project's service layer.

## Project conventions

- Default Swagger input: `mge-swagger.json` at the repository root, unless the user provides another file.
- Default output folder: `src/services`. If the user says `svc`, confirm whether they mean this repo's `src/services` folder or a different folder named `svc`.
- Generated files should follow the existing project shape:
  - shared API caller: `src/services/api.svc.ts`
  - shared API types: `src/services/type.ts`
  - feature router: `src/services/<tag>/router.ts`
  - operation files: `src/services/<tag>/<operation>/<operation>.type.ts` and `src/services/<tag>/<operation>/<operation>.svc.ts`
- Service callers should extend `RxAxiosCaller<TData, TVariables, TRawResponse>` and parse the response with `(raw) => raw.data` when the OpenAPI response envelope contains `data`.
- Service caller names should include the resource and action to avoid duplicates across folders: `TweetGetSvcCaller` for the class and `tweetGetSvcCaller` for the exported instance.
- Keep manually customized services intact. If a generated target already exists, inspect it before overwriting and preserve custom logic such as NextAuth, token refresh, or hand-written parsers.

## Generator script

Prefer the local script for first-pass scaffolding:

```bash
node .agents/skills/swagger-svc-generator/scripts/generate-svc-from-openapi.mjs --input mge-swagger.json --out src/services
```

Useful options:

```bash
node .agents/skills/swagger-svc-generator/scripts/generate-svc-from-openapi.mjs --input mge-swagger.json --out src/services --tag courses
node .agents/skills/swagger-svc-generator/scripts/generate-svc-from-openapi.mjs --input mge-swagger.json --out src/services --dry-run
node .agents/skills/swagger-svc-generator/scripts/generate-svc-from-openapi.mjs --input mge-swagger.json --out svc
```

After generation:

1. Review the changed files and any skipped existing files.
2. Compare generated request variables against path/query/header/body parameters. Header parameters such as `X-Tenant-ID`, `x_course_id`, and `x_group_id` may need per-call `config.headers` if they are not globally configured.
3. Run `npm run lint` and the relevant TypeScript/build command when practical.
4. Update feature code to import the generated callers only after the service files are reviewed.
