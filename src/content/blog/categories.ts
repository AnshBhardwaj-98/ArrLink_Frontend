/**
 * Blog categories. Each one maps to the service or industry page its posts support, so every
 * article passes authority (internal links) to a money page.
 *
 * Kept free of "@/" imports: the Markdown build plugin (scripts/blog-markdown.ts) imports this
 * file from vite.config.ts to validate each post's `category`.
 */
export type BlogCategory = {
  slug: string;
  name: string;
  /** Meta description and intro for /blog/category/<slug>. */
  description: string;
  /** The page every post in this category links to in its call-to-action. */
  link: { to: string; label: string };
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "ai-agents",
    name: "AI Agents",
    description:
      "Guides on building, pricing and running AI agents, chatbots and voice agents that do real work — from tool calling and RAG to guardrails and evaluation.",
    link: { to: "/services/ai-agent-development", label: "AI agent development" },
  },
  {
    slug: "generative-ai",
    name: "Generative AI",
    description:
      "Practical generative AI engineering: LLM apps, RAG, fine-tuning, private model deployment, cost control and taking GenAI from pilot to production.",
    link: { to: "/services/generative-ai-development", label: "Generative AI development" },
  },
  {
    slug: "mvp",
    name: "MVP & Startups",
    description:
      "How to scope, build, price and launch an AI MVP in weeks — for founders and product teams validating a new idea.",
    link: { to: "/services/ai-mvp-development", label: "AI MVP development" },
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    description:
      "Build vs buy, architecture, integrations and cost of custom software — how companies replace spreadsheets and legacy tools with software that fits.",
    link: { to: "/services/custom-software-development", label: "Custom software development" },
  },
  {
    slug: "saas",
    name: "SaaS",
    description:
      "Building SaaS products: multi-tenancy, billing, permissions, AI features with healthy margins and scaling without a rewrite.",
    link: { to: "/services/saas-development", label: "SaaS development" },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Manufacturing data ontologies, ERP integration, T&A automation, traceability and AI on the factory floor.",
    link: { to: "/services/custom-software-development", label: "Custom software development" },
  },
];

export const blogCategoryBySlug = (slug: string) => blogCategories.find((c) => c.slug === slug);
