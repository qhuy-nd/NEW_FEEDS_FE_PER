import { NextRequest } from "next/server";

const upstreamBaseUrl =
  process.env.API_BASE_URL ??
  process.env.AUTH_BACKEND_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL;

const METHODS_WITHOUT_BODY = new Set(["GET", "HEAD"]);
const FORWARDED_REQUEST_HEADERS = [
  "accept",
  "authorization",
  "content-type",
  "x-tenant-id",
];
const FORWARDED_RESPONSE_HEADERS = [
  "cache-control",
  "content-disposition",
  "content-type",
];

type RouteContext = {
  params: Promise<{ path?: string[] }>;
}

const getPath = async (context: RouteContext) => {
  const params = await context.params;
  return params.path?.join("/") ?? "";
}

const buildUpstreamUrl = async (request: NextRequest, context: RouteContext) => {
  if (!upstreamBaseUrl) {
    throw new Error("Missing API base URL");
  }

  const requestUrl = new URL(request.url);
  const pathname = await getPath(context);
  const upstreamUrl = new URL(
    pathname,
    upstreamBaseUrl.endsWith("/") ? upstreamBaseUrl : `${upstreamBaseUrl}/`,
  );
  upstreamUrl.search = requestUrl.search;

  return upstreamUrl;
}

const buildRequestHeaders = (request: NextRequest) => {
  const headers = new Headers();

  FORWARDED_REQUEST_HEADERS.forEach((name) => {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  });

  if (!headers.has("x-tenant-id") && process.env.NEXT_PUBLIC_TENANT_ID) {
    headers.set("x-tenant-id", process.env.NEXT_PUBLIC_TENANT_ID);
  }

  return headers;
}

const buildResponseHeaders = (response: Response) => {
  const headers = new Headers();

  FORWARDED_RESPONSE_HEADERS.forEach((name) => {
    const value = response.headers.get(name);
    if (value) headers.set(name, value);
  });

  return headers;
}

async function proxy(request: NextRequest, context: RouteContext) {
  try {
    const method = request.method.toUpperCase();
    const upstreamUrl = await buildUpstreamUrl(request, context);
    const upstreamResponse = await fetch(upstreamUrl, {
      method,
      headers: buildRequestHeaders(request),
      body: METHODS_WITHOUT_BODY.has(method) ? undefined : await request.arrayBuffer(),
      cache: "no-store",
    });

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: buildResponseHeaders(upstreamResponse),
    });
  } catch (error) {
    return Response.json(
      { message: error instanceof Error ? error.message : "Proxy request failed" },
      { status: 500 },
    );
  }
}

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;
