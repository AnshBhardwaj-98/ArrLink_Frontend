# ArrLink SEO Strategy

Goal: rank arrlink.com on Google (and get cited by AI search) for high-intent queries from companies looking to hire an AI / software development partner. Markets: India first, then the US and global.

## 1. Keyword map

One page per search intent. Each page's title, H1, first paragraph and FAQ target its primary keyword.

| URL | Primary keyword | Secondary keywords |
|---|---|---|
| `/` | AI development company | AI-accelerated software development, AI software development company India |
| `/services` | AI & software development services | AI development services |
| `/services/ai-agent-development` | AI agent development company | AI agent development services, custom AI agents, AI chatbot development, voice AI agents, WhatsApp AI agent |
| `/services/ai-mvp-development` | AI MVP development company | MVP development company for startups, MVP development services India, launch MVP in weeks |
| `/services/generative-ai-development` | generative AI development services | LLM development company, RAG development, generative AI company India, private LLM deployment |
| `/services/custom-software-development` | custom software development company | bespoke software development, custom software development India, enterprise software development |
| `/services/saas-development` | SaaS development company | SaaS product development services, multi-tenant SaaS development, AI SaaS development |
| `/industries/healthcare` | healthcare AI software development | HIPAA-compliant software development, medical AI development |
| `/industries/finance` | fintech software development company | AI for fintech, KYC automation, fraud detection AI |
| `/industries/ecommerce` | ecommerce AI development | AI shopping assistant, WhatsApp commerce bot |
| `/industries/logistics` | logistics software development company | supply chain software development, route optimization software |
| `/industries/education` | edtech software development company | AI tutor development, custom LMS development |
| `/industries/manufacturing` | manufacturing AI software development | predictive maintenance software, computer vision quality inspection |

**Realistic expectations.** Head terms ("AI development company", "custom software development company") are dominated by sites with years of authority (LeewayHertz, ScienceSoft, N-iX, Clutch listicles). We rank for the long-tail and location variants first ("AI agent development company India", "AI MVP development for startups"), then grow into head terms as domain authority builds.

## 2. Competitors

| Competitor | Why they rank | What we borrow |
|---|---|---|
| synlabs.io | Broad service list, industry pages, blog, 10+ years of domain age | Industry pages, service breadth |
| continuumcore.io | Sharp positioning, case studies with hard metrics, FAQ | "Why now" narrative, results-led case studies, FAQ |
| leewayhertz.com, scnsoft.com | One deep page per service, huge blog, strong backlinks | Dedicated service pages, long-form content |
| Clutch / GoodFirms listicles | Directory authority | **Get listed** — these pages rank for every head term |

## 3. What's implemented (technical foundation)

- Every route prerendered to static HTML at build time (`scripts/prerender.mjs`) with its own title, description, canonical and Open Graph tags. Single source of truth: `src/seo/routes.ts`.
- `sitemap.xml` generated automatically from the route list on every build.
- Structured data: Organization, ProfessionalService, WebSite (all pages); Service + BreadcrumbList + FAQPage (service and industry pages); ItemList (hub pages).
- `robots.txt` allows search and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended); `llms.txt` summarises the site for AI search.
- Internal linking: nav → hubs; footer → every service and industry page; homepage cards → service and industry pages; each service ↔ related industries ↔ related case studies.
- Unknown URLs serve a real 404 (`404.html`), deep links work on Vercel (`vercel.json`).

**Adding a new service or industry page:** add an entry to `src/content/services.ts` or `src/content/industries.ts`. The route, meta tags, prerendered HTML, sitemap entry, footer link and structured data are all generated from it.

## 4. Roadmap

### Phase 1 — Foundation (weeks 1–4) · *done in code, actions below are yours*
- [x] Service pages, industry pages, hubs, schema, sitemap, prerendering
- [ ] Verify the domain in **Google Search Console**, submit `https://www.arrlink.com/sitemap.xml`, request indexing for `/` and each `/services/*` page
- [ ] Verify in **Bing Webmaster Tools** (feeds ChatGPT search and Copilot) and submit the sitemap
- [ ] Add analytics (GA4 or Plausible) and mark contact-form submissions as a conversion
- [ ] Create a **Google Business Profile** (helps "near me" / India-city searches)

### Phase 2 — Authority quick wins (weeks 2–8)
- [ ] Create **Clutch**, **GoodFirms**, **DesignRush** and **G2 (services)** profiles with the same name, description, email and links everywhere
- [ ] Ask the four testimonial clients (Synergylabs, Krinos AI, Mythyaverse, Sharda University) for reviews on Clutch — reviews are what get you into "Top AI companies" listicles
- [ ] Add client logos (with permission) and **real metrics** to each case study (time saved, accuracy, users, cost) — the single biggest trust and ranking upgrade
- [ ] Add a founder/team section on `/about` with names, photos, LinkedIn links (E-E-A-T)

### Phase 3 — Content engine (months 2–6)
Move the blog from `blog.arrlink.com` to `arrlink.com/blog` (subfolders pass authority to the main site; subdomains mostly don't). Publish **2 articles per week**, each linking to its matching service page:

| Month | Articles (target keyword) | Links to |
|---|---|---|
| 2 | "How much does it cost to build an AI agent in 2026?" · "AI agent vs chatbot: what's the difference?" | AI agent development |
| 2 | "How to build an AI MVP in 6 weeks" · "MVP development cost in India" | AI MVP development |
| 3 | "RAG vs fine-tuning: which should you choose?" · "How to reduce LLM hallucinations in production" | Generative AI development |
| 3 | "Build vs buy software: a decision framework" · "Custom software development cost in India" | Custom software development |
| 4 | "How to build a multi-tenant SaaS" · "SaaS development cost breakdown" | SaaS development |
| 4 | "WhatsApp AI agent for e-commerce: setup guide" · "HIPAA-compliant AI: what developers must know" | Agents · Healthcare |
| 5–6 | "Best AI development companies in India" (honest comparison, include yourself) · "ArrLink vs hiring in-house" · one case-study deep dive per month | Services hub |

### Phase 4 — Scale (months 6–12)
- [ ] Full case-study pages (`/work/<client>`) with problem → approach → results → testimonial, 1,000+ words each
- [ ] Location pages only where you can serve clients for real (e.g. `/ai-development-company-bangalore`, `/ai-development-company-usa`), each with unique content
- [ ] Digital PR: guest posts on AI/dev publications, founder podcasts, launch posts on Product Hunt / Hacker News for open-source tools
- [ ] Monitor AI citations (ChatGPT, Perplexity, Google AI Overviews) for "AI agent development company India"

## 5. KPI targets

| Metric | Baseline (Oct 2026) | 3 months | 6 months | 12 months |
|---|---|---|---|---|
| Indexed pages | Unknown — check GSC (deep links returned 404) | 18+ | 40+ (with blog) | 80+ |
| Keywords in top 100 | — | 50+ | 200+ | 500+ |
| Long-tail keywords in top 10 | 0 | 5–10 | 25+ | 60+ |
| Organic visits / month | — | 200+ | 1,000+ | 4,000+ |
| Referring domains | — | 15+ (directories) | 40+ | 100+ |
| Organic leads / month | — | 1–3 | 5–10 | 15+ |

Track these in Google Search Console (impressions, clicks, positions per page) and your analytics tool (contact-form conversions from organic).
