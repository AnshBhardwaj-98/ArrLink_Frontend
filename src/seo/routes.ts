export const SITE_URL = "https://www.arrlink.com";

export type RouteMeta = {
  title: string;
  description: string;
  noindex?: boolean;
};

/** Single source of truth for per-route meta — used at runtime and by the prerender script. */
export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: "ArrLink — AI Development Company | Custom Software, AI Agents & SaaS Development",
    description:
      "ArrLink is an AI-accelerated software development company. We build custom software, generative AI apps, AI agents, SaaS products and MVPs — production-ready in weeks, not months.",
  },
  "/about": {
    title: "About ArrLink — AI-Accelerated Custom Software Development Company",
    description:
      "Meet ArrLink: an AI development company engineering custom software, generative AI and SaaS platforms on deliberate architecture built to scale.",
  },
  "/contact": {
    title: "Contact ArrLink — Book a Free AI & Software Strategy Call",
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
  "/404": {
    title: "Page Not Found | ArrLink",
    description: "The page you are looking for does not exist.",
    noindex: true,
  },
};
