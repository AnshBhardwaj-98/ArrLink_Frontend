import { services } from "@/content/services";
import { posts, activeCategories } from "@/content/blog";

export const SITE_URL = "https://www.arrlink.com";

export type RouteMeta = {
  title: string;
  description: string;
  noindex?: boolean;
  /** Open Graph type; defaults to "website". */
  type?: "website" | "article";
  /** Last content change (YYYY-MM-DD) for the sitemap; omitted when unknown. */
  lastmod?: string;
};

/** Single source of truth for per-route meta — used at runtime and by the prerender script. */
export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Custom Software Development Company | ArrLink",
    description:
      "ArrLink builds custom software, web applications, SaaS products and AI solutions. A collaborative development partner from your first idea to launch and beyond.",
  },
  "/about": {
    title: "About ArrLink | Your Software Development Partner",
    description:
      "Meet ArrLink, your software development partner for custom applications, SaaS products and AI solutions. Thoughtful engineering and clear communication.",
  },
  "/contact": {
    title: "Contact ArrLink | Let’s Build Your Next Product",
    description:
      "Tell us about your idea, existing product or business challenge. Talk to ArrLink about custom software, SaaS development and AI automation.",
  },
  "/privacy": {
    title: "Privacy Policy | ArrLink",
    description: "How ArrLink collects, uses and protects your information.",
  },
  "/terms": {
    title: "Terms of Service | ArrLink",
    description: "Terms governing the use of the ArrLink website and services.",
  },
  "/services": {
    title: "Custom Software, SaaS & AI Development Services | ArrLink",
    description:
      "Explore ArrLink's AI and software development services: AI agent development, AI MVP development, generative AI, custom software and SaaS development.",
  },
  ...Object.fromEntries(
    services.map((s) => [`/services/${s.slug}`, { title: s.metaTitle, description: s.metaDescription }]),
  ),
  "/blog": {
    title: "Blog | AI, Software & SaaS Engineering Insights | ArrLink",
    description:
      "Practical guides on AI agents, generative AI, MVPs, custom software, SaaS and manufacturing software — costs, architecture and lessons from real projects.",
    lastmod: posts[0]?.updated ?? posts[0]?.date,
  },
  ...Object.fromEntries(
    activeCategories().map((c) => [
      `/blog/category/${c.slug}`,
      { title: `${c.name} Articles & Guides | ArrLink Blog`, description: c.description },
    ]),
  ),
  ...Object.fromEntries(
    posts.map((p) => [
      `/blog/${p.slug}`,
      { title: p.metaTitle, description: p.description, type: "article" as const, lastmod: p.updated ?? p.date },
    ]),
  ),
  "/404": {
    title: "Page Not Found | ArrLink",
    description: "The page you are looking for does not exist.",
    noindex: true,
  },
};
