export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Primary keyword this page targets. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  /** H1 is `h1` followed by the serif-styled `h1Accent`. */
  h1: string;
  h1Accent: string;
  summary: string;
  intro: string[];
  deliverables: { title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  stack: string[];
  whyUs: { title: string; desc: string }[];
  projectIds: string[];
  industrySlugs: string[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "ai-agent-development",
    name: "AI Agent Development",
    keyword: "AI agent development company",
    metaTitle: "AI Agent Development Company | Custom AI Agents | ArrLink",
    metaDescription:
      "AI agent development company building custom AI agents, chatbots and voice agents that automate support, sales and operations. Serving India & global clients.",
    h1: "AI agent development company for",
    h1Accent: "real operations.",
    summary:
      "Custom AI agents, chatbots and voice agents that do real work inside your business — integrated with your CRM, WhatsApp, databases and internal tools.",
    intro: [
      "Most businesses don't need another chatbot that answers FAQs. They need AI agents that actually complete work: qualifying leads, resolving support tickets, updating records, booking appointments, reconciling invoices and escalating to a human only when it matters.",
      "ArrLink is an AI agent development company that designs, builds and runs production AI agents for startups and enterprises in India, the US and worldwide. We connect large language models to your real systems through secure tool calling, give them the context they need through retrieval (RAG), and wrap them in the guardrails, evaluation and monitoring that make them safe to put in front of customers.",
      "The result is an agent that behaves like a reliable team member: it follows your policies, knows your data, logs every action and gets measurably better over time.",
    ],
    deliverables: [
      {
        title: "Customer support agents",
        desc: "Agents that resolve tickets end-to-end across chat, email and WhatsApp, pull order and account data, and hand off to your team with full context.",
      },
      {
        title: "Sales & lead qualification agents",
        desc: "Agents that respond to inbound leads in seconds, qualify them against your criteria, update your CRM and book meetings on your calendar.",
      },
      {
        title: "Voice AI agents",
        desc: "Low-latency phone agents for inbound and outbound calls — appointment booking, reminders, surveys and first-line support in multiple languages.",
      },
      {
        title: "Back-office & workflow agents",
        desc: "Agents that process documents, extract data, reconcile records and trigger downstream workflows across your ERP, CRM and spreadsheets.",
      },
      {
        title: "Internal knowledge assistants",
        desc: "Secure assistants that answer employee questions from your docs, wikis and tickets with source citations and role-based access.",
      },
      {
        title: "Multi-agent systems",
        desc: "Coordinated agents that plan, delegate and verify each other's work for complex, multi-step processes that a single prompt can't handle.",
      },
    ],
    useCases: [
      { title: "E-commerce", desc: "Order tracking, returns and refunds handled automatically across WhatsApp and web chat." },
      { title: "Healthcare", desc: "Appointment scheduling, intake forms and insurance pre-checks with HIPAA-aware data handling." },
      { title: "Finance", desc: "KYC document checks, collections reminders and customer queries with full audit trails." },
      { title: "Logistics", desc: "Shipment status, exception handling and driver coordination without manual follow-ups." },
    ],
    process: [
      { title: "Workflow mapping", desc: "We map the exact process the agent will own, the systems it touches and where a human must stay in the loop." },
      { title: "Prototype in days", desc: "A working agent on your real data within the first sprint, so you can judge quality before committing further." },
      { title: "Evaluation & guardrails", desc: "Test suites of real conversations, policy checks, PII redaction and fallback rules — measured before launch, not after." },
      { title: "Integration & launch", desc: "Secure connections to your CRM, helpdesk, WhatsApp Business API, telephony and databases, rolled out gradually." },
      { title: "Monitor & improve", desc: "Dashboards for resolution rate, cost per task and escalations, with continuous prompt and retrieval tuning." },
    ],
    stack: ["Claude", "GPT", "Gemini", "Llama & open-source LLMs", "LangGraph", "OpenAI Agents SDK", "MCP", "Pinecone / pgvector", "Twilio & WhatsApp Business API", "Python", "Node.js", "AWS / GCP / Azure"],
    whyUs: [
      { title: "Production, not demos", desc: "We've shipped AI into regulated domains like healthcare — guardrails, evaluation and monitoring are built in from day one." },
      { title: "Model-agnostic", desc: "We pick the right model for accuracy, latency and cost — including private, self-hosted models when your data can't leave your infrastructure." },
      { title: "You own everything", desc: "Source code, prompts, evaluation sets and infrastructure are yours. No per-seat licensing, no lock-in." },
    ],
    projectIds: ["conectdesk", "imagine-bo", "krinos-ai"],
    industrySlugs: ["ecommerce", "healthcare", "finance", "logistics"],
    faqs: [
      {
        q: "What is an AI agent and how is it different from a chatbot?",
        a: "A chatbot answers questions. An AI agent takes actions: it can look up data, call APIs, update records and complete multi-step tasks on its own, while following rules you define and escalating to a human when needed.",
      },
      {
        q: "How long does it take to build a custom AI agent?",
        a: "A focused first agent typically takes 3–6 weeks from kickoff to production, including integrations and evaluation. We usually have a working prototype on your real data within the first one to two weeks.",
      },
      {
        q: "How much does AI agent development cost?",
        a: "Cost depends on the number of workflows, integrations and channels (chat, WhatsApp, voice). Every engagement is scoped individually — after a free strategy call we send a fixed proposal with timeline and cost.",
      },
      {
        q: "Can the AI agent integrate with our CRM and WhatsApp?",
        a: "Yes. We regularly integrate agents with CRMs like HubSpot, Salesforce and Zoho, helpdesks like Zendesk and Freshdesk, the WhatsApp Business API, telephony providers and custom internal APIs.",
      },
      {
        q: "How do you stop AI agents from making mistakes?",
        a: "We combine retrieval from your verified data, strict tool permissions, policy checks, confidence thresholds with human handoff, and automated evaluation on real conversations before and after every release.",
      },
    ],
  },
  {
    slug: "ai-mvp-development",
    name: "AI MVP Development",
    keyword: "AI MVP development company",
    metaTitle: "AI MVP Development Company for Startups | ArrLink",
    metaDescription:
      "Launch your AI MVP in 4–8 weeks. ArrLink is an MVP development company for startups: strategy, design, AI and engineering in one senior team.",
    h1: "AI MVP development for founders who",
    h1Accent: "need to ship.",
    summary:
      "From idea to a production-ready AI MVP in 4–8 weeks — scoped tightly, built on architecture that scales, and ready for real users and investors.",
    intro: [
      "An MVP has one job: prove that real users want what you're building, as fast and cheaply as possible, without creating a codebase you'll have to throw away. Most founders get either speed or quality. We're built to give you both.",
      "ArrLink is an MVP development company for startups and new product lines inside established businesses. Our senior team handles product scoping, UX design, AI and full-stack engineering together, and we use AI throughout our own delivery process — which is how we ship production MVPs in weeks instead of months.",
      "Whether your product is AI-native (a copilot, an agent, a generative tool) or a SaaS app with AI features, you get a launched product, analytics to learn from real usage, and clean architecture you can keep building on.",
    ],
    deliverables: [
      { title: "Product scoping workshop", desc: "We cut your idea down to the smallest product that tests your riskiest assumption, with a clear feature list and success metrics." },
      { title: "UX & UI design", desc: "Clickable prototypes and a polished interface designed for activation — the moment new users first get value." },
      { title: "AI features that work", desc: "LLM-powered features, RAG, agents or custom models — evaluated for quality and cost, not just wired up." },
      { title: "Full-stack build", desc: "Web app, APIs, database, authentication, payments and admin panel on a modern, scalable stack." },
      { title: "Launch & analytics", desc: "Production deployment, error monitoring and product analytics so you learn from day one." },
      { title: "Post-launch iteration", desc: "Fast iteration cycles based on user feedback, and a clear path from MVP to a scalable product." },
    ],
    useCases: [
      { title: "AI-native startups", desc: "Copilots, agents and generative tools where the AI is the product." },
      { title: "SaaS founders", desc: "Subscription products with onboarding, billing and multi-user workspaces from day one." },
      { title: "Corporate innovation", desc: "New product lines validated outside the main engineering roadmap." },
      { title: "Pre-seed & seed rounds", desc: "A live product with real usage data to show investors instead of a slide deck." },
    ],
    process: [
      { title: "Week 1 — Scope", desc: "Workshop, user flows, feature cut and technical plan. You get a fixed scope and timeline." },
      { title: "Weeks 1–2 — Design", desc: "Wireframes to high-fidelity UI, validated with you before engineering starts." },
      { title: "Weeks 2–6 — Build", desc: "Weekly demos of working software. AI features are evaluated against real examples as they're built." },
      { title: "Weeks 6–8 — Launch", desc: "QA, security checks, production deployment, analytics and handover documentation." },
      { title: "After launch — Learn", desc: "We help you read the data and prioritize what to build next — or hand over to your in-house team." },
    ],
    stack: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Supabase", "Stripe & Razorpay", "Claude / GPT / Gemini APIs", "Vercel", "AWS", "PostHog", "Sentry"],
    whyUs: [
      { title: "We've built AI products ourselves", desc: "Including Imagine.bo, a platform that turns a prompt into a deployed application — we know what it takes to ship AI to real users." },
      { title: "Senior team, no hand-offs", desc: "The people who scope your MVP are the people who build it. No junior bench, no telephone game." },
      { title: "Built to keep, not to rewrite", desc: "Clean architecture and documentation mean your MVP becomes version 1, not a throwaway prototype." },
    ],
    projectIds: ["imagine-bo", "mythyaverse-ecg"],
    industrySlugs: ["healthcare", "education", "ecommerce"],
    faqs: [
      {
        q: "How long does it take to build an MVP?",
        a: "Most of our MVPs go from kickoff to production launch in 4–8 weeks. Simple AI tools can be faster; products with complex integrations or compliance needs take a little longer. You get a fixed timeline after the scoping week.",
      },
      {
        q: "How much does MVP development cost?",
        a: "MVP cost depends mainly on scope — the number of user roles, integrations and AI features. We scope every MVP individually and send a fixed proposal after a free strategy call, so there are no surprises.",
      },
      {
        q: "Do I own the code and IP of my MVP?",
        a: "Yes. You own 100% of the source code, designs and intellectual property, and everything is in your own repositories and cloud accounts.",
      },
      {
        q: "Can you build an MVP for a non-technical founder?",
        a: "Absolutely — many of our clients are non-technical founders. We act as your product and engineering team, explain trade-offs in plain language and help you plan hiring when you're ready.",
      },
      {
        q: "What happens after the MVP launches?",
        a: "You can continue with us on an iteration retainer, scale up to a dedicated build pod, or take the codebase in-house. We provide documentation and a handover either way.",
      },
    ],
  },
  {
    slug: "generative-ai-development",
    name: "Generative AI Development",
    keyword: "generative AI development services",
    metaTitle: "Generative AI Development Services | LLM & RAG | ArrLink",
    metaDescription:
      "Generative AI development services: custom LLM apps, RAG copilots, fine-tuning and private AI deployments built for accuracy and scale.",
    h1: "Generative AI development services built for",
    h1Accent: "accuracy.",
    summary:
      "Custom LLM applications, RAG copilots, fine-tuned models and private AI deployments — engineered to be accurate, secure and affordable at production scale.",
    intro: [
      "Generative AI is easy to demo and hard to run in production. Answers drift, costs spike, sensitive data leaks into prompts, and a prototype that impressed the board falls apart with real users. Closing that gap is what we do.",
      "ArrLink provides generative AI development services for companies that want GenAI to deliver measurable outcomes — faster support, faster document processing, better search, new AI-powered products. We build on leading models like Claude, GPT and Gemini as well as open-source models you can host privately, and we ground every application in your own data.",
      "Every system we ship comes with evaluation datasets, guardrails, cost controls and monitoring, so you know how accurate it is, what it costs per request and how it behaves when something unexpected happens.",
    ],
    deliverables: [
      { title: "RAG copilots & AI search", desc: "Assistants that answer from your documents, databases and tickets with citations — and say 'I don't know' instead of guessing." },
      { title: "Custom LLM applications", desc: "Purpose-built GenAI products: content generation, summarization, extraction, classification and analysis tools." },
      { title: "Document intelligence", desc: "Extract structured data from contracts, invoices, medical records and forms with human review where it matters." },
      { title: "Fine-tuning & model customization", desc: "Fine-tuned and distilled models for domain language, tone or cost reduction when prompting isn't enough." },
      { title: "Private & on-premise AI", desc: "Open-source models deployed in your cloud or data center for data sovereignty and regulatory compliance." },
      { title: "GenAI strategy & audits", desc: "Use-case prioritization, build-vs-buy analysis and audits of existing GenAI systems for accuracy, cost and risk." },
    ],
    useCases: [
      { title: "Legal & compliance", desc: "Contract review, clause extraction and policy Q&A with traceable sources." },
      { title: "Healthcare", desc: "Clinical documentation, medical record summarization and diagnostic support tools." },
      { title: "Customer experience", desc: "Copilots that draft accurate replies for support teams from your knowledge base." },
      { title: "Internal knowledge", desc: "One search box across Drive, Notion, Confluence, Slack and your databases." },
    ],
    process: [
      { title: "Use-case & data review", desc: "We assess where GenAI will pay off, what data is available and what accuracy is required." },
      { title: "Evaluation first", desc: "We build a test set of real questions and expected answers before writing the application, so quality is measurable." },
      { title: "Build & iterate", desc: "Retrieval pipelines, prompts, tools and UI developed in weekly cycles against the evaluation set." },
      { title: "Harden for production", desc: "Guardrails, PII handling, caching, rate limits, cost controls and access controls." },
      { title: "Deploy & monitor", desc: "Observability for quality, latency and spend, with regular re-evaluation as models and data change." },
    ],
    stack: ["Claude", "GPT", "Gemini", "Llama", "Mistral", "LangChain", "LlamaIndex", "pgvector", "Pinecone", "Weaviate", "Hugging Face", "vLLM", "AWS Bedrock", "Azure OpenAI", "Vertex AI"],
    whyUs: [
      { title: "Clinical-grade experience", desc: "We've delivered AI for diagnostics and ECG analysis, where accuracy isn't optional — the same discipline goes into every project." },
      { title: "Measured, not guessed", desc: "Every release is scored against an evaluation set, so you see accuracy and cost numbers instead of anecdotes." },
      { title: "Your data stays yours", desc: "Private deployments, no training on your data, and architecture designed around your compliance requirements." },
    ],
    projectIds: ["conectdesk", "imagine-bo", "krinos-ai", "mythyaverse-ecg"],
    industrySlugs: ["healthcare", "finance", "education"],
    faqs: [
      {
        q: "What are generative AI development services?",
        a: "They cover designing, building and running applications powered by large language models and other generative models — for example RAG copilots, document processing, content generation and AI-powered product features — including the data, evaluation and infrastructure around them.",
      },
      {
        q: "What is RAG and why does it matter?",
        a: "Retrieval-augmented generation (RAG) lets an LLM answer using your own documents and data instead of only its training data. It makes answers more accurate and current, and it allows the AI to cite its sources.",
      },
      {
        q: "Can generative AI run on our own servers?",
        a: "Yes. We deploy open-source models such as Llama and Mistral in your own cloud account or on-premise infrastructure when data residency, privacy or cost requires it.",
      },
      {
        q: "Which LLM is best for our use case?",
        a: "It depends on accuracy, latency, cost and privacy needs. We benchmark candidate models on your own evaluation set and recommend the best fit — often a mix of models for different tasks.",
      },
      {
        q: "How do you reduce hallucinations?",
        a: "By grounding answers in retrieved data, constraining outputs, requiring citations, adding verification steps and measuring hallucination rates on an evaluation set before every release.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    keyword: "custom software development company",
    metaTitle: "Custom Software Development Company | ArrLink",
    metaDescription:
      "Custom software development company building web platforms, internal tools and enterprise systems around your workflow, at the speed of packaged software.",
    h1: "Custom software development company for",
    h1Accent: "hard problems.",
    summary:
      "Bespoke web platforms, internal tools and enterprise systems engineered around exactly how your business operates — delivered faster with AI-accelerated engineering.",
    intro: [
      "Off-the-shelf software makes you change the way you work to fit the tool. For the workflows that make your business different — the ones held together by spreadsheets, manual hand-offs and workarounds — that compromise gets expensive.",
      "ArrLink is a custom software development company that builds software around your operations instead. We design and engineer web platforms, internal tools, customer portals and system integrations for growing companies and enterprises in India and worldwide.",
      "Because our engineers use AI across design, coding, testing and documentation, custom software is no longer a year-long, budget-breaking project. We deliver in focused increments, with working software every week, on deliberate architecture built to last.",
      "Every engagement starts with the outcome, not the feature list: hours of manual work removed, errors eliminated, faster turnaround for your customers. We measure the software we ship against those outcomes, and we design it so your own team can understand, extend and operate it long after launch.",
    ],
    deliverables: [
      { title: "Web platforms & portals", desc: "Customer portals, marketplaces, booking systems and B2B platforms built for performance and scale." },
      { title: "Internal tools & dashboards", desc: "Operations software that replaces spreadsheets and manual processes with fast, reliable workflows." },
      { title: "Enterprise system integration", desc: "Connect ERPs, CRMs, payment systems and legacy software through clean, well-documented APIs." },
      { title: "Legacy modernization", desc: "Re-platform ageing systems incrementally without disrupting the business that runs on them." },
      { title: "APIs & backend systems", desc: "Secure, scalable backends and APIs designed for longevity and high availability." },
      { title: "AI-enhanced workflows", desc: "Add automation, AI agents and intelligent search to the software you already depend on." },
    ],
    useCases: [
      { title: "Operations-heavy businesses", desc: "Replace spreadsheet-driven processes with purpose-built tools." },
      { title: "Logistics & supply chain", desc: "Tracking, dispatch and warehouse systems that match your real-world flow." },
      { title: "Financial services", desc: "Secure transaction, reporting and compliance platforms." },
      { title: "Education", desc: "Learning management, assessment and administration systems." },
    ],
    process: [
      { title: "Discovery", desc: "We map your workflows, constraints and integrations, and define outcomes the software must achieve." },
      { title: "Architecture", desc: "Data model, API contracts and system design built for the scale and change you expect." },
      { title: "Iterative engineering", desc: "Working software every week, with demos and feedback loops instead of big-bang releases." },
      { title: "Validation", desc: "Automated tests, load testing and security review before anything reaches production." },
      { title: "Launch & evolve", desc: "Zero-downtime rollout, monitoring and an ongoing roadmap as your business grows." },
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS / GCP / Azure", "Terraform"],
    whyUs: [
      { title: "Fit of custom, speed of packaged", desc: "AI-accelerated engineering brings custom software close to the cost and timeline of off-the-shelf tools." },
      { title: "Architecture first", desc: "Every system starts with a deliberate data model and APIs designed to evolve without breaking." },
      { title: "No lock-in", desc: "You own the code and infrastructure, with documentation your team can work from." },
    ],
    projectIds: ["vnytros", "conectdesk", "krinos-ai", "sharda-fake-reviews"],
    industrySlugs: ["logistics", "finance", "manufacturing", "education"],
    faqs: [
      {
        q: "What is custom software development?",
        a: "It's the design and engineering of software built specifically for your business's workflows, users and systems — rather than adapting your processes to a generic product.",
      },
      {
        q: "How long does custom software development take?",
        a: "A first production release typically ships in 6–12 weeks, followed by regular increments. Larger enterprise systems are delivered in phases so you get value early.",
      },
      {
        q: "How much does custom software cost?",
        a: "Cost depends on scope, integrations and compliance needs. We scope each project individually and provide a fixed proposal after a free strategy call. AI-accelerated delivery typically makes custom software far more affordable than traditional development.",
      },
      {
        q: "Should we build custom software or buy SaaS?",
        a: "Buy when a product fits your workflow well. Build when the workflow is a competitive advantage, when you're paying for many tools that almost fit, or when integrations and per-seat costs are getting out of hand. We'll give you an honest recommendation.",
      },
      {
        q: "Do you provide maintenance after launch?",
        a: "Yes. We offer ongoing support, monitoring and feature development, or a structured handover to your in-house team.",
      },
      {
        q: "Do you work with clients outside India?",
        a: "Yes. We build custom software for clients in India, the United States, Europe and the Middle East, with overlapping working hours, weekly demos and a dedicated point of contact.",
      },
      {
        q: "Can you work with our existing development team?",
        a: "Yes. We can lead a project end-to-end or work alongside your engineers — sharing code reviews, architecture decisions and documentation so knowledge stays in your organization.",
      },
    ],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    keyword: "SaaS development company",
    metaTitle: "SaaS Development Company & Product Services | ArrLink",
    metaDescription:
      "ArrLink is a SaaS development company building multi-tenant SaaS products with billing, auth, analytics and AI features — from MVP to scale. Free strategy call.",
    h1: "SaaS development company for products",
    h1Accent: "built to scale.",
    summary:
      "Multi-tenant SaaS products with subscriptions, authentication, analytics and AI features — architected to go from first customer to thousands without a rewrite.",
    intro: [
      "Building a SaaS product means building two things at once: the features your customers pay for, and the platform underneath — tenancy, billing, permissions, onboarding, analytics, security and uptime. Getting the platform wrong is what forces painful rewrites later.",
      "ArrLink is a SaaS development company that builds both. We take SaaS products from MVP to scale for founders and for businesses turning internal tools into products, with architecture designed for the growth you're planning.",
      "We also build AI into SaaS products where it creates real value — AI assistants, automation and generative features — with the cost controls that keep your margins healthy as usage grows.",
      "Our SaaS product development services cover the full lifecycle: product and pricing strategy, UX design, engineering, cloud infrastructure, security and ongoing feature development. You get one accountable team instead of coordinating separate designers, developers and DevOps contractors.",
    ],
    deliverables: [
      { title: "Multi-tenant architecture", desc: "Secure data isolation, tenant-aware APIs and infrastructure that scales with your customer base." },
      { title: "Subscriptions & billing", desc: "Plans, trials, usage-based billing, invoicing and dunning with Stripe, Razorpay or Paddle." },
      { title: "Auth, roles & SSO", desc: "Team workspaces, role-based permissions, SSO and audit logs that enterprise buyers expect." },
      { title: "Onboarding & analytics", desc: "Activation-focused onboarding and product analytics to understand what drives retention." },
      { title: "AI-powered features", desc: "Assistants, automation and generative features with per-tenant usage limits and cost tracking." },
      { title: "SaaS modernization", desc: "Re-architect an existing product for performance, scale or a move to multi-tenancy." },
    ],
    useCases: [
      { title: "B2B SaaS", desc: "Workflow, analytics and vertical SaaS products sold to teams." },
      { title: "AI SaaS", desc: "Products where generative AI is the core value, with usage-based pricing." },
      { title: "Internal tool to product", desc: "Turn software you built for yourself into a product others pay for." },
      { title: "Marketplaces & platforms", desc: "Two-sided platforms with payments, onboarding and trust features." },
    ],
    process: [
      { title: "Product & platform plan", desc: "Define the core product, pricing model and platform requirements together." },
      { title: "MVP", desc: "Launch the smallest sellable version with billing and onboarding in place." },
      { title: "Scale the platform", desc: "Harden tenancy, performance, security and observability as customers arrive." },
      { title: "Enterprise readiness", desc: "SSO, audit logs, data residency and compliance features that unlock larger deals." },
      { title: "Grow", desc: "Ongoing feature development guided by usage data and customer feedback." },
    ],
    stack: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Redis", "Stripe", "Razorpay", "Auth0 / Clerk", "AWS", "Vercel", "Docker", "PostHog"],
    whyUs: [
      { title: "We've built SaaS platforms", desc: "Including Imagine.bo — a SaaS platform that generates and deploys complete applications from a prompt." },
      { title: "Platform done right early", desc: "Tenancy, billing and permissions designed up front, so growth doesn't force a rewrite." },
      { title: "AI with healthy margins", desc: "We design AI features with caching, model routing and usage limits so they stay profitable." },
    ],
    projectIds: ["conectdesk", "vnytros", "imagine-bo", "krinos-ai"],
    industrySlugs: ["education", "ecommerce", "finance"],
    faqs: [
      {
        q: "What does a SaaS development company do?",
        a: "A SaaS development company designs and builds subscription software products — the customer-facing features plus the platform underneath, such as multi-tenancy, billing, authentication, analytics and infrastructure.",
      },
      {
        q: "How long does it take to build a SaaS product?",
        a: "A SaaS MVP with billing and onboarding typically launches in 6–10 weeks. We then scale the platform in phases as your customer base grows.",
      },
      {
        q: "How much does SaaS development cost?",
        a: "Cost depends on the feature set, integrations and enterprise requirements. We scope each product individually and send a fixed proposal after a free strategy call.",
      },
      {
        q: "Can you add AI features to our existing SaaS product?",
        a: "Yes. We regularly add AI assistants, automation and generative features to existing SaaS products, integrated with your current stack and designed with cost controls per tenant.",
      },
      {
        q: "Which payment gateways do you integrate?",
        a: "We integrate Stripe, Razorpay, Paddle and others, including subscriptions, usage-based billing, GST/VAT handling and invoicing.",
      },
      {
        q: "Single-tenant or multi-tenant — which is right for our SaaS?",
        a: "Most SaaS products start multi-tenant for lower cost and simpler operations. We add isolated or single-tenant deployments for enterprise customers that require dedicated infrastructure or data residency.",
      },
      {
        q: "How do you keep a SaaS product secure?",
        a: "Tenant data isolation, encryption, role-based access, audit logs, dependency scanning and regular security reviews are built in from the first release, along with backups and monitoring.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
