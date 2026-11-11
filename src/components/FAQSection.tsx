import { Plus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import JsonLd from "./JsonLd";
import type { FAQ } from "@/content/services";

const FAQSection = ({ faqs }: { faqs: FAQ[] }) => {
  const headerRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative py-32 px-6 bg-background overflow-hidden">

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
