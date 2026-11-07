import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { blogCategories, posts } from "@/content/blog";
import { compilePost } from "../../../scripts/blog-markdown";
import { routeMeta } from "@/seo/routes";

const postsDir = path.resolve(__dirname, "posts");
const files = readdirSync(postsDir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));

describe("blog", () => {
  it("every category links to a real page", () => {
    for (const c of blogCategories) expect(routeMeta[c.link.to], c.link.to).toBeDefined();
  });

  it("publishes every non-draft post with its own route", () => {
    for (const p of posts.filter((x) => !x.draft)) {
      expect(routeMeta[`/blog/${p.slug}`]?.type).toBe("article");
    }
  });

  it.each(files)("%s only links to pages that exist", (file) => {
    const { html, meta } = compilePost(readFileSync(path.join(postsDir, file), "utf8"), path.join(postsDir, file));
    const internal = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);
    for (const href of internal) {
      const target = href.replace(/\/$/, "") || "/";
      const isDraftPost = posts.some((p) => p.draft && `/blog/${p.slug}` === target);
      expect(routeMeta[target] !== undefined || isDraftPost, `${meta.slug} links to missing page ${href}`).toBe(true);
    }
  });
});
