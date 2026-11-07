import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { posts, activeCategories } from "@/content/blog";

export const SITE_URL = "https://www.arrlink.com";

export type RouteMeta = {
  title: string;
  description: string;
  noindex?: boolean;
  /** Open Graph type; defaults to "website". */
  type?: "website" | "article";
  /** Last content change (YYYY-MM-DD) for the sitemap; defaults to the build date. */
  lastmod?: string;
};

/** Single source of truth for per-route meta — used at runtime and by the prerender script. */
export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: "AI Development Company | Custom Software & SaaS | ArrLink",
    description:
      "ArrLink is an AI development company building custom software, AI agents, generative AI apps, SaaS products and MVPs — production-ready in weeks.",
  },
  "/about": {
    title: "About ArrLink | AI-Accelerated Software Development",
    description:
      "Meet ArrLink: an AI development company engineering custom software, generative AI and SaaS platforms on deliberate architecture built to scale.",
  },
  "/contact": {
    title: "Contact ArrLink | Free AI & Software Strategy Call",
    description:
      "Tell us what you're building. Get a free strategy call and a tailored proposal for your custom software, AI agent or SaaS project within 24 hours.",
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
    title: "AI & Software Development Services | ArrLink",
    description:
      "Explore ArrLink's AI and software development services: AI agent development, AI MVP development, generative AI, custom software and SaaS development.",
  },
  ...Object.fromEntries(
    services.map((s) => [`/services/${s.slug}`, { title: s.metaTitle, description: s.metaDescription }]),
  ),
  "/industries": {
    title: "Industries We Serve | AI & Software Solutions | ArrLink",
    description:
      "AI and custom software development for healthcare, finance & fintech, e-commerce, logistics, education and manufacturing.",
  },
  ...Object.fromEntries(
    industries.map((i) => [`/industries/${i.slug}`, { title: i.metaTitle, description: i.metaDescription }]),
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
