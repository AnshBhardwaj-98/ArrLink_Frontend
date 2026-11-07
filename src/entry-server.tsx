import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { registerPostBodies } from "./content/blog";

// Server render has every post body available synchronously; the browser lazy-loads them.
registerPostBodies(
  import.meta.glob<string>(["./content/blog/posts/*.md", "!./content/blog/posts/_*.md"], { eager: true, import: "html" }),
);

export { routeMeta, SITE_URL } from "./seo/routes";
export { posts } from "./content/blog";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
