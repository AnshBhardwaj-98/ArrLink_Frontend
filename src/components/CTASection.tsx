import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const CTASection = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 px-6 overflow-hidden bg-[hsl(var(--inverse-bg))] text-white"
    >
      {/* Bookend: the hero's final eclipse frame, dimmed so the copy stays readable */}
      <picture aria-hidden>
        <source media="(max-aspect-ratio: 1/1)" srcSet="/frames/hero/mobile/frame_0120.webp" />
        <img
          src="/frames/hero/desktop/frame_0120.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-bottom opacity-80"
        />
      </picture>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--background)/0.55)] to-transparent"
      />

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto text-center pb-16 md:pb-24">
        <div className="inline-flex items-center gap-2.5 mb-7">
          <span className="h-px w-6 bg-white/40" />
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium text-white/60">
            Free Strategy Call
          </p>
          <span className="h-px w-6 bg-white/40" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-7xl text-white font-display font-bold
                       mb-7 leading-[1.05] tracking-tighter text-balance">
          Have a problem worth{" "}
          <span className="font-serif font-normal text-[1.08em]">solving?</span>
          <br />
          Let&apos;s build it.
        </h2>

        <p className="text-white/70 text-sm md:text-base font-normal mb-10 max-w-2xl mx-auto font-sans text-balance">
          Tell us what you're trying to build. In one 30-minute call we'll map the scope, the fastest path to production and a tailored proposal — no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group w-full sm:w-auto px-7 py-4 rounded-md
                       bg-white text-[hsl(var(--background))]
                       text-xs tracking-[0.2em] uppercase font-bold
                       hover:bg-white/90 hover:-translate-y-0.5
                       transition-all duration-300
                       inline-flex items-center justify-center gap-2"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
          <a
            href="mailto:info@arrlink.com"
            className="group w-full sm:w-auto px-7 py-4 rounded-md
                       border border-white/30 text-white
                       text-xs tracking-[0.2em] uppercase font-bold
                       hover:border-white/60 hover:bg-white/5
                       transition-all duration-300
                       inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-white/70" strokeWidth={1.5} />
            <span>info@arrlink.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
