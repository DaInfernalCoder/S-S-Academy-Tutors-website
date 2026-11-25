// Cloudflare entry: OpenNext's Worker, plus files over the 25 MiB static-asset limit
// served from R2 (bucket snsacademy-media) at their original URLs, with Range support
// so video seeking works the same as before.
import openNext from "./.open-next/worker.js";

const LARGE_FILES = new Set(["/images/testimonial/IMG_3319.mp4"]);

async function serveLarge(request, env, key) {
  const range = request.headers.get("range");
  const obj = await env.MEDIA.get(key, range ? { range: request.headers } : {});
  if (!obj) return new Response("Not Found", { status: 404 });
  const headers = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set("etag", obj.httpEtag);
  headers.set("accept-ranges", "bytes");
  if (range && obj.range) {
    const { offset = 0, length = obj.size - offset } = obj.range;
    headers.set("content-range", `bytes ${offset}-${offset + length - 1}/${obj.size}`);
    headers.set("content-length", String(length));
    return new Response(request.method === "HEAD" ? null : obj.body, { status: 206, headers });
  }
  headers.set("content-length", String(obj.size));
  return new Response(request.method === "HEAD" ? null : obj.body, { status: 200, headers });
}

export default {
  ...openNext,
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    if ((request.method === "GET" || request.method === "HEAD") && LARGE_FILES.has(pathname)) {
      return serveLarge(request, env, pathname.slice(1));
    }
    return openNext.fetch(request, env, ctx);
  },
};
