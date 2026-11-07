---
name: blog-post
description: Research and write an SEO blog post for arrlink.com/blog as a Markdown file in src/content/blog/posts/. Use when asked to write, draft, plan or refresh a blog post or article for the ArrLink site, for a keyword or a category (ai-agents, generative-ai, mvp, custom-software, saas, manufacturing).
---

# Write an ArrLink blog post

Posts are Markdown files in `src/content/blog/posts/<slug>.md`. The build turns each one into a prerendered page
with meta tags, sitemap entry, RSS item and BlogPosting + FAQPage structured data. `src/content/blog/posts/_template.md`
shows every front-matter field. The build (scripts/blog-markdown.ts) rejects posts that break the rules below.

Audience: founders, CTOs and operations leaders — **primarily in the United States** — deciding whether to hire
a partner to build AI or software. Every post should earn their trust and point them to a service page.

## 1. Pick the keyword and category

- If the user gave a keyword, use it. Otherwise pick one from the backlog at the end of this file and confirm it.
- One post = one primary keyword = one search intent. Check `src/content/blog/posts/` so you don't write a second
  post for a keyword that is already covered (update that one instead, and set `updated:`).
- Category must be one of the slugs in `src/content/blog/categories.ts`.

## 2. Research before writing

- Run WebSearch on the keyword (and 1–2 variants) to see what currently ranks: the format (guide, list, cost
  breakdown, comparison), the sub-questions every top result answers, and what they all miss.
- Read `src/content/services.ts`, `src/content/industries.ts` and `src/content/projects.ts` for ArrLink's real
  services and project experience. First-hand experience is the edge over generic agency blogs — use it.
- For the manufacturing category, the real platform lives in `~/Documents/work/manufactoring/` (ontology docs in
  `manufacturing_ontology/ontology/MANUFACTURING_ONTOLOGY.md`). Never name its clients.

## 3. Write

Front matter:
- `title` — the H1, primary keyword near the start, under 80 characters. `<title>` becomes `title | ArrLink` and
  must be ≤ 70 characters; add a shorter `metaTitle` if needed.
- `description` — 120–160 characters, contains the keyword, says what the reader gets.
- `keyword`, `category`, `date` (today), `tags`, and **`draft: true`** — the user publishes by removing it.

Body:
- No `# ` heading (the title is the H1). Use `## ` for sections (they form the table of contents) and `### ` below.
- First paragraph answers the query directly in 2–3 sentences with the keyword in bold once. Search engines and AI
  answers quote this paragraph.
- 1,200–2,000 words for guides. Short paragraphs, lists and tables where readers compare options.
- US English, USD for prices, US examples where natural.
- At least one link to the category's service or industry page (see `categories.ts`), plus links to related posts
  that exist. Internal links are root-relative (`/services/ai-agent-development`). Descriptive anchor text, never
  "click here".
- External sources: link the original source for any statistic or price. Prefer primary sources.
- End with `## Frequently asked questions` containing 3–6 `### Question?` headings, each answered in 2–4 sentences.
  This section becomes the FAQ accordion and FAQPage structured data automatically.

## 4. Honesty rules (do not break)

- Never invent statistics, prices, client names, case-study results, quotes or certifications. If a number isn't
  from a cited source or from ArrLink's own content files, leave it out or ask the user.
- Price ranges must come from cited sources and be described as ranges that vary with scope.
- Don't name clients beyond those already public in `src/content/projects.ts`.
- Don't disparage named competitors.

## 5. Check and hand over

1. `npm test` — checks every internal link in every post points to a real page.
2. `npm run build` — validates front matter, lengths and headings, and prerenders the page.
3. Tell the user the file path, the URL it will have (`/blog/<slug>`), the keyword, the word count, and anything
   they should verify (prices, claims about their own work). Preview with `npm run dev`; drafts are visible there.
4. To publish: remove `draft: true`, build, deploy, then request indexing for the URL in Google Search Console.

## Keyword backlog (US buyers, from research Nov 2026 — verify volumes in Google Keyword Planner)

| Category | Keyword | Angle |
| --- | --- | --- |
| ai-agents | how much does it cost to build an AI agent | Cost drivers, ranges by complexity, US vs offshore |
| ai-agents | AI agent vs chatbot | When each fits; what makes an agent |
| ai-agents | AI voice agent for small business | Clinics, real estate, restaurants; build vs platform |
| ai-agents | WhatsApp AI chatbot for business | Setup, use cases, costs |
| generative-ai | RAG vs fine-tuning | Decision framework |
| generative-ai | how to reduce LLM hallucinations in production | Evaluation, grounding, guardrails |
| generative-ai | LLM integration for SaaS products | Architecture, cost control, model routing |
| mvp | AI MVP development cost | Scope tiers, timeline, what to cut |
| mvp | how to build an AI MVP in 6 weeks | Week-by-week plan |
| custom-software | build vs buy software | Decision framework |
| custom-software | hire offshore developers vs in-house (US) | Total cost, risks, how to manage |
| saas | how to build a multi-tenant SaaS | Tenancy models, data isolation |
| saas | SaaS development cost | Breakdown by stage |
| manufacturing | time and action calendar software | T&A for apparel/textile exporters, automation |
| manufacturing | ERP integration for manufacturers | Overlay vs replacement, sync ownership |
| manufacturing | AI in manufacturing use cases | Grounded in real data foundations |
