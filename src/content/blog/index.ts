import type { PostMeta } from "../../../scripts/blog-markdown";
import { blogCategories } from "./categories";

export type { PostMeta, PostFaq, PostHeading } from "../../../scripts/blog-markdown";
export { blogCategories, blogCategoryBySlug } from "./categories";

// Files starting with "_" (like _template.md) are never published.
const metaModules = import.meta.glob<PostMeta>(["./posts/*.md", "!./posts/_*.md"], {
  eager: true,
  query: "?meta",
  import: "meta",
});

/** Lazy loaders for article bodies — each post body is its own small chunk. */
const bodyLoaders = import.meta.glob<string>(["./posts/*.md", "!./posts/_*.md"], { import: "html" });

/** Drafts show up in `npm run dev` so you can preview them, and are left out of production builds. */
export const posts: PostMeta[] = Object.values(metaModules)
  .filter((p) => !p.draft || import.meta.env.DEV)
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export const formatPostDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const postsInCategory = (category: string) => posts.filter((p) => p.category === category);

/** Categories that have at least one published post (empty ones get no page, so no thin pages). */
export const activeCategories = () => blogCategories.filter((c) => posts.some((p) => p.category === c.slug));

/** Related reading: same category first, then the newest of the rest. */
export const relatedPosts = (post: PostMeta, count = 3) =>
  [...posts.filter((p) => p.slug !== post.slug && p.category === post.category), ...posts.filter((p) => p.category !== post.category)].slice(0, count);

// The prerender step registers every body up front so pages render fully on the server.
const preloaded: Record<string, string> = {};
export const registerPostBodies = (modules: Record<string, string>) => {
  for (const [file, html] of Object.entries(modules)) {
    preloaded[file.split("/").pop()!.replace(/\.md$/, "")] = html;
  }
};
export const preloadedBody = (slug: string): string | undefined => preloaded[slug];

export const loadPostBody = async (slug: string): Promise<string | undefined> => {
  const loader = bodyLoaders[`./posts/${slug}.md`];
  return loader ? loader() : undefined;
};
