const RELEASE =
  "https://github.com/Guyu23/when-off/releases/latest/download/OffWorkCountdown.exe";

function unavailable() {
  return new Response("Download temporarily unavailable.", {
    status: 502,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Stable download URL. GitHub's latest asset is cached at the edge.
    if (url.pathname === "/download/OffWorkCountdown.exe") {
      const cache = caches.default;
      // cache.put rejects any method other than GET.
      const cacheKey = new Request(url.toString(), {
        method: "GET",
        headers: request.headers,
      });
      let response = await cache.match(cacheKey);

      if (!response) {
        let upstream;
        try {
          upstream = await fetch(RELEASE, {
            redirect: "follow",
            cf: { cacheEverything: true, cacheTtl: 3600 },
          });
        } catch {
          return unavailable();
        }

        if (!upstream.ok) {
          return unavailable();
        }

        const headers = new Headers(upstream.headers);
        headers.set("content-type", "application/octet-stream");
        headers.set(
          "content-disposition",
          'attachment; filename="OffWorkCountdown.exe"',
        );
        headers.set("cache-control", "public, max-age=3600");

        response = new Response(upstream.body, {
          status: 200,
          headers,
        });
        ctx.waitUntil(cache.put(cacheKey, response.clone()));
      }

      if (request.method === "HEAD") {
        await response.body?.cancel();
        return new Response(null, {
          status: response.status,
          headers: response.headers,
        });
      }

      return response;
    }

    return env.ASSETS.fetch(request);
  },
};
