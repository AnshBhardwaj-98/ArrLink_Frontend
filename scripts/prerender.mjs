// Prerenders every route to static HTML after `vite build` + `vite build --ssr`.
// Crawlers and social previews get full content and per-page meta; the client hydrates on load.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, routeMeta, SITE_URL } = await import(
  path.join(root, "dist-server", "entry-server.js")
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// `pattern` is a string or RegExp; the replacer is a function so "$" in page content is never special.
const replaceOrFail = (html, pattern, replacer, label) => {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: could not find ${label} in index.html`);
  return html.replace(pattern, replacer);
};

const setMeta = (html, attr, key, value) =>
  replaceOrFail(
    html,
    new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`),
    (_, open, close) => `${open}${escape(value)}${close}`,
    `${attr}="${key}"`,
  );

const pageHtml = (route) => {
  const { title, description, noindex } = routeMeta[route];
  const url = `${SITE_URL}${route}`;
  let html = template;
  html = replaceOrFail(html, /<title>[\s\S]*?<\/title>/, () => `<title>${escape(title)}</title>`, "<title>");
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "name", "robots", noindex ? "noindex, follow" : "index, follow");
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  html = replaceOrFail(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    // A noindex page (404) shouldn't declare a canonical URL.
    () => (noindex ? "" : `<link rel="canonical" href="${url}" />`),
    "canonical link",
  );
  return replaceOrFail(
    html,
    '<div id="root"></div>',
    () => `<div id="root">${render(route)}</div>`,
    "#root",
  );
};

for (const route of Object.keys(routeMeta)) {
  // "/404" becomes dist/404.html, which Vercel serves (with a 404 status) for unknown paths.
  const out =
    route === "/"
      ? path.join(dist, "index.html")
      : route === "/404"
        ? path.join(dist, "404.html")
        : path.join(dist, route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, pageHtml(route));
  console.log(`prerendered ${route} -> ${path.relative(root, out)}`);
}

// Sitemap is generated from the same route list, so new pages can never be missed.
const today = new Date().toISOString().slice(0, 10);
const urls = Object.entries(routeMeta)
  .filter(([, meta]) => !meta.noindex)
  .map(([route]) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${urls.length} urls`);
