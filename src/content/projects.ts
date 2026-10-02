export type Project = {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  /** Live product link, when the work is public. */
  href?: string;
  hrefLabel?: string;
};

export const projects: Project[] = [
  {
    id: "imagine-bo",
    client: "Synergylabs",
    title: "Imagine.bo — prompt-to-production app builder",
    category: "Generative AI · SaaS",
    description:
      "An AI platform that turns a single prompt into a fully deployed, production-ready application — from generated code to hosting.",
    stack: ["LLM orchestration", "Code generation", "Cloud deployment"],
  },
  {
    id: "conectdesk",
    client: "ArrLink product",
    title: "ConectDesk — AI omnichannel support desk",
    category: "AI Agents · SaaS",
    description:
      "A multi-tenant support desk that puts WhatsApp, Instagram, Messenger, Telegram, email, live chat and phone calls in one inbox — with an AI assistant that summarises calls, fills in lead details and replies in the customer's Hinglish.",
    stack: ["Go", "Vue 3", "WhatsApp Cloud API", "Exotel voice", "Multi-tenant"],
    href: "https://desk.arrlink.com",
    hrefLabel: "desk.arrlink.com",
  },
  {
    id: "vnytros",
    client: "ArrLink product",
    title: "Vnytros — DNS & email deliverability automation",
    category: "Developer Platform · AI tools",
    description:
      "Diagnoses broken SPF, DKIM and DMARC records and writes the fix straight into DNS through the registrar. One engine serves a REST API, free tool pages and 25 MCP tools for AI agents, across 693 Domain Connect provider templates.",
    stack: ["Go", "Domain Connect", "MCP server", "Cloudflare Workers"],
    href: "https://vnytros.dev",
    hrefLabel: "vnytros.dev",
  },
  {
    id: "krinos-ai",
    client: "Krinos AI",
    title: "AI-powered dental diagnostics platform",
    category: "Healthcare AI",
    description:
      "The AI backbone of a HIPAA-compliant oral-healthcare platform, spanning CBCT scan analysis through to automated insurance claims.",
    stack: ["Computer vision", "HIPAA compliance", "Claims automation"],
  },
  {
    id: "mythyaverse-ecg",
    client: "Mythyaverse",
    title: "ECG arrhythmia prediction",
    category: "Clinical ML",
    description:
      "A clinically precise, production-ready model that detects cardiac arrhythmias from ECG signals, built against strict medical requirements.",
    stack: ["Signal processing", "Deep learning", "Model validation"],
  },
  {
    id: "sharda-fake-reviews",
    client: "Sharda University",
    title: "ML fake-review detection",
    category: "Cybersecurity ML",
    description:
      "A fake-review detection system driven by network-traffic analysis that exceeded the research team's academic benchmarks.",
    stack: ["Traffic analysis", "Classification", "Research tooling"],
  },
];

export const projectById = (id: string) => projects.find((p) => p.id === id);
