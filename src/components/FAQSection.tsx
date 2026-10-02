import { Plus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";
import JsonLd from "./JsonLd";
import type { FAQ } from "@/content/services";

const homeFaqs: FAQ[] = [
  {
    q: "What does ArrLink do?",
    a: "ArrLink is an AI-accelerated software development company. We design, build and run custom software, generative AI applications, AI agents, SaaS products and mobile apps for startups and enterprises.",
  },
  {
    q: "How fast can you build an MVP?",
    a: "Most MVPs go from kickoff to a production release in 4–8 weeks. Because our engineers use AI across design, coding and testing, we ship faster than traditional agencies without cutting corners on architecture or security.",
  },
  {
    q: "How much does custom software or AI development cost?",
    a: "Every engagement is scoped to your goals, so there's no fixed price list. After a free strategy call we send a tailored proposal with timeline and cost. AI-accelerated delivery typically brings custom software close to the cost of packaged SaaS.",
  },
  {
    q: "Can you take our AI pilot or prototype to production?",
    a: "Yes. A large part of our work is hardening AI proofs-of-concept — adding evaluation, guardrails, integrations, monitoring and scalable infrastructure — so they work reliably for real users.",
  },
  {
    q: "Which AI models and technologies do you work with?",
    a: "We work with leading LLMs including Claude, GPT and Gemini, as well as open-source models that can run privately on your own infrastructure. Our stack spans React, Node.js, Python, cloud platforms (AWS, GCP, Azure) and modern data tooling.",
  },
  {
    q: "Do we own the code and IP?",
    a: "Yes. You own 100% of the source code, models and intellectual property we build for you. No lock-in and no per-seat licensing.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients worldwide and run engagements remotely with overlapping working hours, weekly demos and a dedicated point of contact.",
  },
];


const FAQSection = ({ faqs = homeFaqs }: { faqs?: FAQ[] }) => {
  const headerRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative py-32 px-6 bg-background overflow-hidden">
      <AmbientFloor />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 items-start">
        <div ref={headerRef} className="reveal lg:sticky lg:top-32">
          <div className="section-marker mb-6">
            <span className="h-px w-6 bg-foreground/40" />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-5 tracking-tighter text-balance">
            Questions,{" "}
            <span className="font-serif font-normal text-[1.08em]">answered.</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-md">
            Can&apos;t find what you need? Email{" "}
            <a href="mailto:info@arrlink.com" className="text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground">
              info@arrlink.com
            </a>
            .
          </p>
        </div>

        <div ref={listRef} className="reveal border-t border-foreground/10">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-foreground/10">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground tracking-tight">
                  {f.q}
                </h3>
                <Plus
                  className="mt-1 h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.5}
                />
              </summary>
              <p className="pb-6 pr-10 text-foreground/60 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
