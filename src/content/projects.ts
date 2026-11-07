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
    id: "manufacturing-platform",
    client: "Manufacturing client",
    title: "Manufacturing data ontology & ERP overlay platform",
    category: "Manufacturing · AI Agents",
    description:
      "A multi-tenant platform built on a 300+ table manufacturing data ontology that runs alongside the client's ERP — two-way sync with field-level ownership, AI that turns buyer e-mails into T&A updates, and full traceability from buyer PO to shipment.",
    stack: ["PostgreSQL", "Go", "Next.js", "Claude", "ERP sync"],
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
