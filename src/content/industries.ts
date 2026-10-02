import type { FAQ } from "./services";

export type Industry = {
  slug: string;
  name: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  summary: string;
  intro: string[];
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  serviceSlugs: string[];
  projectIds: string[];
  faqs: FAQ[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    keyword: "healthcare AI software development",
    metaTitle: "Healthcare AI & Software Development | ArrLink",
    metaDescription:
      "Healthcare AI and software development: diagnostic AI, clinical ML models and patient platforms built with HIPAA-aware engineering.",
    h1: "Healthcare AI & software development,",
    h1Accent: "clinically precise.",
    summary:
      "Diagnostic AI, clinical prediction models and patient-facing platforms engineered for accuracy, privacy and regulatory compliance.",
    intro: [
      "Healthcare is where AI can do the most good and where mistakes cost the most. Models must be validated against clinical requirements, patient data must be protected end-to-end, and software has to fit into the real workflows of clinicians and administrators.",
      "ArrLink has built AI for healthcare in production: the AI backbone of Krinos AI's HIPAA-compliant dental diagnostics platform, from CBCT scan analysis to automated insurance claims, and a clinically precise ECG arrhythmia prediction model for Mythyaverse. We bring that experience to hospitals, clinics, health-tech startups and diagnostics companies.",
      "Our healthcare engineering process puts safety first: we involve clinicians early, validate models against representative patient data, keep a human in the loop for clinical decisions, and document data flows so your compliance team can sign off with confidence. Whether you are a health-tech startup building your first product or a provider modernizing operations, we help you move fast without cutting corners on patient safety.",
    ],
    challenges: [
      { title: "Clinical accuracy", desc: "Models must be validated against medical benchmarks, not just general accuracy metrics." },
      { title: "Data privacy & HIPAA", desc: "Protected health information requires encryption, access control, audit trails and careful vendor choices." },
      { title: "Administrative burden", desc: "Clinicians spend hours on documentation, scheduling and insurance paperwork." },
      { title: "Legacy systems", desc: "EHRs, PACS and practice-management software rarely talk to each other cleanly." },
    ],
    solutions: [
      { title: "Diagnostic & imaging AI", desc: "Computer vision for scans and images, with clinician-in-the-loop review." },
      { title: "Clinical prediction models", desc: "Signal and tabular models — like ECG arrhythmia detection — validated for production use." },
      { title: "Insurance & claims automation", desc: "Automated claim preparation, eligibility checks and document extraction." },
      { title: "Patient-facing agents", desc: "Scheduling, intake and follow-up agents over chat, WhatsApp and voice." },
      { title: "Clinical documentation AI", desc: "Summarization and structured note generation that saves clinicians time." },
      { title: "Health-tech platforms", desc: "Secure patient portals, telehealth and practice-management software." },
    ],
    serviceSlugs: ["generative-ai-development", "ai-agent-development", "custom-software-development"],
    projectIds: ["krinos-ai", "mythyaverse-ecg"],
    faqs: [
      { q: "Do you build HIPAA-compliant healthcare software?", a: "Yes. We engineer healthcare systems with HIPAA-aware architecture — encryption in transit and at rest, role-based access, audit logging, BAAs with infrastructure providers and private model deployments where needed." },
      { q: "Can AI be used for medical diagnostics?", a: "AI can support diagnostics — for example analyzing scans or ECG signals — with clinicians reviewing results. We've delivered dental imaging AI and ECG arrhythmia prediction models built against strict clinical requirements." },
      { q: "Can you integrate with our EHR or practice-management system?", a: "Yes. We integrate through standard interfaces such as HL7 and FHIR where available, and through custom APIs or secure data pipelines for other systems." },
      { q: "How long does it take to build a healthcare AI product?", a: "A focused first release — for example an AI-assisted workflow or a patient-facing agent — typically takes 6–10 weeks. Products involving new clinical models take longer because of data preparation and validation." },
      { q: "Do you work with health-tech startups?", a: "Yes. We work with both health-tech startups and established healthcare providers, from MVPs to production platforms." },
    ],
  },
  {
    slug: "finance",
    name: "Finance & Fintech",
    keyword: "fintech software development company",
    metaTitle: "Fintech Software & AI Development Company | ArrLink",
    metaDescription:
      "Fintech software and AI development: fraud detection, KYC automation, AI agents and secure transaction platforms for banks, NBFCs, lenders and fintech startups.",
    h1: "Fintech software & AI development,",
    h1Accent: "secure by design.",
    summary:
      "Fraud detection, compliance automation, AI agents and secure transaction platforms for banks, lenders, insurers and fintech startups.",
    intro: [
      "Financial services run on trust, speed and compliance. Customers expect instant onboarding and answers; regulators expect audit trails and data protection; and fraud teams need to stay ahead of increasingly sophisticated attacks.",
      "ArrLink builds fintech software and AI systems that meet all three. We design secure platforms, automate KYC and document-heavy processes, and deploy AI agents and machine learning models with the logging, explainability and controls financial institutions require.",
      "We build for the realities of regulated finance: segregated environments, maker-checker workflows, explainable model outputs and complete audit trails. That lets your teams adopt AI and automation with confidence — reducing manual review, speeding up onboarding and improving fraud detection while staying ready for audits.",
    ],
    challenges: [
      { title: "Fraud & risk", desc: "Fraud patterns evolve faster than static rules can keep up." },
      { title: "Manual compliance", desc: "KYC, AML checks and reporting consume large operations teams." },
      { title: "Customer expectations", desc: "Users expect instant onboarding and 24/7 support across channels." },
      { title: "Security & audit", desc: "Every action must be secure, logged and explainable to regulators." },
    ],
    solutions: [
      { title: "Fraud & anomaly detection", desc: "ML models that flag suspicious transactions and behavior in real time." },
      { title: "KYC & document automation", desc: "AI extraction and verification of identity and financial documents." },
      { title: "Collections & support agents", desc: "AI agents for reminders, queries and first-line support with full audit trails." },
      { title: "Lending & payments platforms", desc: "Secure loan-origination, payment and reconciliation systems." },
      { title: "Risk & reporting dashboards", desc: "Real-time data pipelines and dashboards for risk and regulatory reporting." },
      { title: "Private AI deployments", desc: "Self-hosted models so sensitive financial data never leaves your infrastructure." },
    ],
    serviceSlugs: ["ai-agent-development", "custom-software-development", "generative-ai-development"],
    projectIds: ["sharda-fake-reviews"],
    faqs: [
      { q: "How do you keep financial data secure?", a: "We use encryption, strict access controls, audit logging, secure SDLC practices and — where required — private AI models deployed inside your own infrastructure so data never reaches third-party APIs." },
      { q: "Can AI help with KYC and compliance?", a: "Yes. AI can extract and verify data from identity and financial documents, flag inconsistencies and route edge cases to human reviewers, significantly reducing manual effort." },
      { q: "Do you work with banks and NBFCs in India?", a: "Yes. We work with financial institutions and fintech startups in India and internationally, and design systems around the relevant regulatory requirements." },
      { q: "Can you build a lending or loan-management platform?", a: "Yes. We build loan origination, underwriting workflows, repayment tracking and collections systems, integrated with credit bureaus, payment gateways and your core systems." },
      { q: "Are AI decisions explainable?", a: "We design models and agents to log the data and reasoning behind each decision, and keep humans in control of high-impact outcomes, so results can be explained to customers and regulators." },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce & Retail",
    keyword: "ecommerce AI development",
    metaTitle: "E-Commerce AI & Software Development | ArrLink",
    metaDescription:
      "E-commerce AI and software development: AI shopping assistants, WhatsApp commerce agents, personalization and marketplace platforms that increase conversion.",
    h1: "E-commerce AI & software that",
    h1Accent: "converts.",
    summary:
      "AI shopping assistants, WhatsApp commerce agents, personalization engines and marketplace platforms built to grow revenue.",
    intro: [
      "In e-commerce, every second of delay and every unanswered question costs sales. Shoppers expect instant answers, relevant recommendations and easy returns — and operations teams are buried in order queries, catalog updates and support tickets.",
      "ArrLink builds AI and software for online retailers, D2C brands and marketplaces: AI agents that sell and support across web chat and WhatsApp, personalization that lifts conversion, and platforms that scale through peak season.",
      "Our approach starts with your numbers: conversion rate, average order value, support cost per order and repeat purchase rate. We prioritize the AI and software improvements most likely to move those metrics, launch them quickly and measure the impact — so every build is tied to revenue or cost savings, not just new features.",
    ],
    challenges: [
      { title: "Support volume", desc: "'Where is my order?' and returns queries overwhelm support teams." },
      { title: "Low conversion", desc: "Generic storefronts fail to guide shoppers to the right product." },
      { title: "Catalog operations", desc: "Writing and updating product content at scale is slow and manual." },
      { title: "Peak-season scale", desc: "Traffic spikes expose performance and inventory problems." },
    ],
    solutions: [
      { title: "AI shopping assistants", desc: "Conversational product discovery and recommendations on site and in WhatsApp." },
      { title: "Order & returns agents", desc: "Automated order tracking, returns and refunds integrated with your OMS." },
      { title: "Personalization engines", desc: "Recommendations and search ranking based on behavior and intent." },
      { title: "Generative catalog content", desc: "Product descriptions, attributes and SEO content generated and reviewed at scale." },
      { title: "Marketplace platforms", desc: "Multi-vendor marketplaces with onboarding, payouts and trust features." },
      { title: "Demand & inventory analytics", desc: "Forecasting and dashboards that reduce stock-outs and overstock." },
    ],
    serviceSlugs: ["ai-agent-development", "saas-development", "ai-mvp-development"],
    projectIds: ["sharda-fake-reviews", "imagine-bo"],
    faqs: [
      { q: "Can an AI agent handle e-commerce customer support?", a: "Yes. AI agents can resolve order tracking, returns, refunds and product questions end-to-end by connecting to your store, OMS and helpdesk, escalating complex cases to your team." },
      { q: "Do you build WhatsApp commerce bots?", a: "Yes. We build AI agents on the WhatsApp Business API for product discovery, order updates, abandoned-cart recovery and support." },
      { q: "Which e-commerce platforms do you integrate with?", a: "We integrate with Shopify, WooCommerce, Magento and custom storefronts, as well as payment gateways, logistics providers and CRMs." },
      { q: "Can AI write our product descriptions?", a: "Yes. We build generative content pipelines that create product descriptions, attributes and SEO copy in your brand voice, with human review before publishing." },
      { q: "Do you build custom marketplaces?", a: "Yes. We build multi-vendor marketplaces with seller onboarding, catalog management, payments, payouts, reviews and dispute handling." },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    keyword: "logistics software development company",
    metaTitle: "Logistics Software & AI Development | ArrLink",
    metaDescription:
      "Logistics and supply chain software development: route optimization, real-time tracking, warehouse automation, forecasting and AI agents.",
    h1: "Logistics software & AI for",
    h1Accent: "moving fast.",
    summary:
      "Route optimization, real-time tracking, warehouse automation and AI agents that remove manual coordination from your operations.",
    intro: [
      "Logistics margins are won and lost in coordination: dispatching the right vehicle, catching exceptions early, keeping customers informed and making sure inventory is where it needs to be. Too often that coordination lives in phone calls, spreadsheets and disconnected tools.",
      "ArrLink builds custom logistics and supply chain software — and the AI layered on top — that matches how your operation actually runs, from first mile to last mile.",
      "We start by mapping how goods, information and decisions actually move through your operation — including the workarounds. Then we build software that removes the manual steps with the highest cost, integrates with the carriers, telematics and ERPs you already use, and gives every team the same real-time picture. AI is added where it clearly pays off, such as forecasting, routing and exception handling.",
    ],
    challenges: [
      { title: "Visibility gaps", desc: "Shipments go dark between systems, carriers and hand-offs." },
      { title: "Manual coordination", desc: "Dispatch, exceptions and customer updates handled by phone and spreadsheet." },
      { title: "Inefficient routes", desc: "Static routing wastes fuel, time and driver capacity." },
      { title: "Forecasting", desc: "Demand swings cause stock-outs, overstock and idle capacity." },
    ],
    solutions: [
      { title: "Real-time tracking platforms", desc: "Unified shipment visibility across carriers, vehicles and warehouses." },
      { title: "Route optimization", desc: "Algorithms that plan routes around time windows, capacity and traffic." },
      { title: "Operations AI agents", desc: "Agents that handle exceptions, driver coordination and customer updates." },
      { title: "Warehouse management", desc: "Custom WMS features for receiving, picking, packing and inventory control." },
      { title: "Demand forecasting", desc: "ML forecasting for inventory and capacity planning." },
      { title: "Document automation", desc: "AI extraction from invoices, bills of lading and proof-of-delivery documents." },
    ],
    serviceSlugs: ["custom-software-development", "ai-agent-development", "generative-ai-development"],
    projectIds: [],
    faqs: [
      { q: "Can you integrate with our existing TMS or WMS?", a: "Yes. We integrate with existing transport and warehouse systems, carrier APIs, telematics and ERPs, or build custom modules where off-the-shelf tools fall short." },
      { q: "How can AI help logistics operations?", a: "AI can forecast demand, optimize routes, extract data from shipping documents and run agents that handle exceptions and customer updates automatically." },
      { q: "Do you build driver and field apps?", a: "Yes. We build cross-platform mobile apps for drivers and field teams with offline support, proof of delivery and real-time updates." },
      { q: "How quickly can we see results?", a: "Most logistics projects deliver a first production release in 6–10 weeks, usually starting with the workflow that causes the most manual effort or delays." },
      { q: "Can you build real-time tracking for our customers?", a: "Yes. We build customer-facing tracking pages and notifications over SMS, email and WhatsApp, fed by your vehicles, carriers and warehouse systems." },
    ],
  },
  {
    slug: "education",
    name: "Education & EdTech",
    keyword: "edtech software development company",
    metaTitle: "EdTech Software & AI Development Company | ArrLink",
    metaDescription:
      "EdTech software and AI development: learning platforms, AI tutors, assessment tools and LMS for schools, universities, coaching institutes and edtech startups.",
    h1: "EdTech software & AI that",
    h1Accent: "teaches.",
    summary:
      "Learning platforms, AI tutors, assessment tools and administration systems for schools, universities, coaching institutes and edtech startups.",
    intro: [
      "Education is being reshaped by AI: personalized tutoring, instant feedback and automated assessment are now possible at a scale no institution could staff. But learning products must be accurate, safe for students and genuinely effective.",
      "ArrLink builds edtech platforms and AI learning tools for institutions and startups, and has delivered machine-learning research systems with Sharda University. We combine sound learning design with production-grade engineering.",
      "We design education products around learning outcomes and the people who use them every day — students, teachers and administrators. That means accessible interfaces, reliable performance during peak periods, safe and age-appropriate AI behavior, and analytics that show whether learners are actually improving.",
    ],
    challenges: [
      { title: "One-size-fits-all learning", desc: "Students learn at different paces but get the same content." },
      { title: "Teacher workload", desc: "Grading, feedback and admin consume time that should go to teaching." },
      { title: "Fragmented tools", desc: "LMS, assessments, payments and communication live in separate systems." },
      { title: "Scale & reliability", desc: "Exam days and enrollment peaks demand platforms that don't go down." },
    ],
    solutions: [
      { title: "AI tutors & study assistants", desc: "Personalized, curriculum-grounded tutoring with safety guardrails." },
      { title: "Automated assessment", desc: "AI-assisted grading and feedback with teacher review." },
      { title: "Learning platforms & LMS", desc: "Courses, live classes, progress tracking and certification." },
      { title: "Content generation", desc: "Question banks, explanations and course material generated and reviewed at scale." },
      { title: "Institution management", desc: "Admissions, fees, attendance and communication in one system." },
      { title: "Research & analytics", desc: "ML research tooling and learning analytics dashboards." },
    ],
    serviceSlugs: ["saas-development", "generative-ai-development", "ai-mvp-development"],
    projectIds: ["sharda-fake-reviews"],
    faqs: [
      { q: "Can you build an AI tutor for our curriculum?", a: "Yes. We build AI tutors grounded in your own curriculum and materials, with guardrails for age-appropriate, accurate responses and analytics for teachers." },
      { q: "Do you build custom LMS platforms?", a: "Yes. We build custom learning platforms or extend existing ones with live classes, assessments, payments, certificates and AI features." },
      { q: "Do you work with universities on research projects?", a: "Yes. We've delivered ML research systems with Sharda University and can support research teams with data pipelines, models and tooling." },
      { q: "Can AI grade assignments?", a: "AI can grade objective questions automatically and draft feedback for written work against your rubric, with teachers reviewing and approving the final result." },
      { q: "Do you build mobile learning apps?", a: "Yes. We build cross-platform mobile apps for iOS and Android with offline access, video lessons, quizzes and progress tracking." },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    keyword: "manufacturing AI software development",
    metaTitle: "Manufacturing AI & Software Development | ArrLink",
    metaDescription:
      "Manufacturing AI and software development: predictive maintenance, computer-vision quality inspection, production analytics and custom factory software.",
    h1: "Manufacturing AI & software for",
    h1Accent: "the factory floor.",
    summary:
      "Predictive maintenance, computer-vision quality inspection, production analytics and custom software for manufacturers.",
    intro: [
      "Manufacturers sit on enormous amounts of data — from machines, sensors, quality checks and ERP systems — but most of it is never used to make decisions. Unplanned downtime, quality escapes and manual reporting quietly erode margins.",
      "ArrLink builds AI and custom software for manufacturers that turns that data into action: predicting failures before they happen, catching defects automatically and giving managers real-time visibility into production.",
      "Our manufacturing projects start small and practical: one line, one machine group or one quality check, with a clear baseline to measure against. Once the value is proven, we scale the solution across lines and plants on a data platform designed for it — so AI becomes part of daily operations rather than a pilot that never leaves the lab.",
    ],
    challenges: [
      { title: "Unplanned downtime", desc: "Equipment failures halt production and cost far more than planned maintenance." },
      { title: "Quality escapes", desc: "Manual inspection misses defects and doesn't scale with volume." },
      { title: "Data silos", desc: "Machine, MES and ERP data rarely come together in one view." },
      { title: "Manual reporting", desc: "Production reports are compiled by hand, often days late." },
    ],
    solutions: [
      { title: "Predictive maintenance", desc: "ML models on sensor data that forecast failures and schedule maintenance." },
      { title: "Vision quality inspection", desc: "Computer vision that detects defects on the line in real time." },
      { title: "Production dashboards", desc: "Real-time OEE, throughput and quality analytics from unified data." },
      { title: "Industrial data pipelines", desc: "Connect PLCs, sensors, MES and ERP into a single data platform." },
      { title: "Document & SOP assistants", desc: "AI assistants that answer operator questions from manuals and SOPs." },
      { title: "Custom factory software", desc: "Scheduling, traceability and inventory tools built for your process." },
    ],
    serviceSlugs: ["custom-software-development", "generative-ai-development", "ai-agent-development"],
    projectIds: [],
    faqs: [
      { q: "What data is needed for predictive maintenance?", a: "Typically sensor data such as vibration, temperature or current, plus maintenance history. We assess what you already collect and recommend the minimum additional instrumentation." },
      { q: "Can computer vision replace manual quality inspection?", a: "It can automate most routine inspection and flag uncertain cases for human review, improving consistency and catching defects that are easy to miss by eye." },
      { q: "Can you connect to our existing ERP and MES?", a: "Yes. We build data pipelines and integrations with common ERP and MES systems as well as direct machine and sensor connections." },
      { q: "Do you build software for small and mid-sized manufacturers?", a: "Yes. We work with manufacturers of all sizes and scope projects to deliver measurable value quickly, without requiring large upfront investments in new infrastructure." },
      { q: "Can AI run on the factory floor without the cloud?", a: "Yes. We deploy models on edge devices and on-premise servers when connectivity, latency or data policies require it." },
    ],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
