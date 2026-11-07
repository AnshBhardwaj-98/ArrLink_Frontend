/**
 * Vite plugin: turns blog posts (src/content/blog/posts/*.md) into JS modules at build time,
 * so no Markdown parser ships to the browser.
 *
 *   import { meta } from "./post.md?meta"   → front matter + derived fields (small; used by lists)
 *   import { html, meta } from "./post.md"  → rendered article body (lazy-loaded per post)
 *
 * Two different module ids keep each post body in its own chunk instead of the main bundle.
 * Every post is validated here, so a malformed or SEO-incomplete post fails the build with a
 * message that says what to fix.
 */
import path from "node:path";
import { Marked, type Tokens } from "marked";
import { parse as parseYaml } from "yaml";
import type { Plugin } from "vite";
import { blogCategories } from "../src/content/blog/categories";

const POSTS_DIR = `${path.sep}src${path.sep}content${path.sep}blog${path.sep}posts${path.sep}`;
const WORDS_PER_MINUTE = 230;

export type PostFaq = { q: string; a: string };
export type PostHeading = { id: string; text: string };
export type PostMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keyword: string;
  category: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  draft: boolean;
  /** Plain-text first paragraph, used as the card excerpt. */
  excerpt: string;
  wordCount: number;
  readingMinutes: number;
  headings: PostHeading[];
  faqs: PostFaq[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const stripMarkdown = (s: string) =>
  s
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[*_`>#|]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const escapeAttr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const isoDate = (v: unknown, field: string, file: string) => {
  const s = v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s) || Number.isNaN(Date.parse(s))) {
    throw new Error(`${file}: "${field}" must be a date like 2026-11-07 (got "${s}")`);
  }
  return s;
};

const FAQ_SECTION = /^##\s+(?:FAQs?|Frequently asked questions)\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im;

/**
 * Pulls `### Question` + answer pairs out of the "## FAQ" / "## Frequently asked questions" section.
 * The page renders them once, in the site's FAQ accordion with FAQPage structured data.
 */
const extractFaqs = (body: string): PostFaq[] => {
  const section = body.match(FAQ_SECTION);
  if (!section) return [];
  return section[1]
    .split(/^###\s+/m)
    .slice(1)
    .map((block) => {
      const [q, ...rest] = block.split("\n");
      return { q: stripMarkdown(q), a: stripMarkdown(rest.join(" ")) };
    })
    .filter((f) => f.q && f.a);
};

export function compilePost(source: string, file: string): { meta: PostMeta; html: string } {
  const name = path.basename(file, ".md");
  const fail = (msg: string): never => {
    throw new Error(`Blog post ${name}.md: ${msg}`);
  };

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
    fail("file name becomes the URL — use lowercase words separated by hyphens, e.g. ai-agent-cost.md");
  }

  const fm = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!fm) fail("missing front matter block (--- … ---) at the top of the file");
  const data = (parseYaml(fm![1]) ?? {}) as Record<string, unknown>;
  const body = fm![2].trim();

  const str = (key: string, required = true) => {
    const v = data[key];
    if (v === undefined || v === null || String(v).trim() === "") {
      if (required) fail(`front matter "${key}" is required`);
      return undefined;
    }
    return String(v).trim();
  };

  const title = str("title")!;
  const description = str("description")!;
  const keyword = str("keyword")!;
  const category = str("category")!;
  const metaTitle = str("metaTitle", false) ?? `${title} | ArrLink`;

  if (title.length > 80) fail(`"title" is ${title.length} characters; keep it under 80`);
  if (metaTitle.length > 70) {
    fail(`page title "${metaTitle}" is ${metaTitle.length} characters; Google cuts off around 60–70. Shorten "title" or add a shorter "metaTitle"`);
  }
  if (description.length < 70 || description.length > 165) {
    fail(`"description" is ${description.length} characters; write 120–160 for the search snippet`);
  }
  if (!blogCategories.some((c) => c.slug === category)) {
    fail(`unknown category "${category}". Use one of: ${blogCategories.map((c) => c.slug).join(", ")}`);
  }
  if (/^#\s/m.test(body)) fail("don't use a top-level '# ' heading — the title is the page's H1. Start sections with '## '");
  if (!/^##\s/m.test(body)) fail("add '## ' section headings so readers and Google can scan the article");

  const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];

  // Rendering: anchored H2/H3 for the table of contents, safe external links, lazy images.
  const headings: PostHeading[] = [];
  const usedIds = new Set<string>();
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, { tokens, depth }: Tokens.Heading) {
        const inner = this.parser.parseInline(tokens);
        let id = slugify(inner) || "section";
        while (usedIds.has(id)) id += "-x";
        usedIds.add(id);
        if (depth === 2) headings.push({ id, text: stripMarkdown(inner.replace(/<[^>]+>/g, "")) });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      link(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, { href, title: t, tokens }: Tokens.Link) {
        const inner = this.parser.parseInline(tokens);
        const titleAttr = t ? ` title="${escapeAttr(t)}"` : "";
        const external = /^https?:\/\//.test(href) && !/^https?:\/\/(www\.)?arrlink\.com/.test(href);
        return external
          ? `<a href="${escapeAttr(href)}"${titleAttr} target="_blank" rel="noopener noreferrer">${inner}</a>`
          : `<a href="${escapeAttr(href.replace(/^https?:\/\/(www\.)?arrlink\.com/, "") || "/")}"${titleAttr}>${inner}</a>`;
      },
      image({ href, title: t, text }: Tokens.Image) {
        if (!text) fail(`image ${href} needs alt text: ![describe the image](${href})`);
        const titleAttr = t ? ` title="${escapeAttr(t)}"` : "";
        return `<img src="${escapeAttr(href)}" alt="${escapeAttr(text)}"${titleAttr} loading="lazy" decoding="async" />`;
      },
    },
  });
  const faqs = extractFaqs(body);
  const html = marked.parse(body.replace(FAQ_SECTION, "").trim(), { async: false }) as string;

  const plain = stripMarkdown(body.replace(/^#+\s.*$/gm, ""));
  const wordCount = plain.split(" ").filter(Boolean).length;
  if (wordCount < 300) fail(`only ${wordCount} words — thin pages rarely rank. Aim for 1,200+ for a guide`);

  const firstParagraph = body.split(/\n\s*\n/).find((p) => p.trim() && !/^(#|!|\||-|\*|\d+\.|>|```)/.test(p.trim())) ?? "";
  const excerpt = stripMarkdown(firstParagraph).slice(0, 220);

  return {
    meta: {
      slug: name,
      title,
      metaTitle,
      description,
      keyword,
      category,
      date: isoDate(data.date, "date", name),
      updated: data.updated ? isoDate(data.updated, "updated", name) : undefined,
      author: str("author", false) ?? "ArrLink Team",
      tags,
      draft: data.draft === true,
      excerpt,
      wordCount,
      readingMinutes: Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE)),
      headings,
      faqs,
    },
    html,
  };
}

export default function blogMarkdown(): Plugin {
  return {
    name: "arrlink-blog-markdown",
    enforce: "pre",
    transform(source, id) {
      const [file, query = ""] = id.split("?");
      if (!file.endsWith(".md") || !file.includes(POSTS_DIR)) return null;
      const { meta, html } = compilePost(source, file);
      const metaOnly = new URLSearchParams(query).has("meta");
      const code = metaOnly
        ? `export const meta = ${JSON.stringify(meta)};`
        : `export const meta = ${JSON.stringify(meta)};\nexport const html = ${JSON.stringify(html)};`;
      return { code, map: null };
    },
  };
}
