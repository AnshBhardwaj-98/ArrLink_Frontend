import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const CTASection = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="cta"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "hsl(238 54% 38%)", color: "hsl(0 0% 100%)" }}
    >
      {/* Subtle inner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   h-[60vh] w-[80%] blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(307 61% 63% / 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Hairline grid texture on indigo — barely visible */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(0 0% 100% / 0.06) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 100% / 0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2.5 mb-7">
          <span className="h-px w-6 bg-white/40" />
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium text-white/60">
            Synthesis Session
          </p>
          <span className="h-px w-6 bg-white/40" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-7xl text-white font-display font-bold
                       mb-7 leading-[1.05] tracking-tighter text-balance">
          Ready to{" "}
          <span className="font-serif font-normal text-[1.08em]">redefine</span>
          <br />
          your digital core?
        </h2>

        <p className="text-white/70 text-sm md:text-base font-normal mb-10 max-w-2xl mx-auto font-sans text-balance">
          Join the vanguard of engineering excellence. Schedule your initial synthesis session today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group w-full sm:w-auto px-7 py-4 rounded-md
                       bg-white text-foreground
                       text-xs tracking-[0.2em] uppercase font-bold
                       hover:bg-white/90 hover:-translate-y-0.5
                       transition-all duration-300
                       inline-flex items-center justify-center gap-2"
          >
            <span>Begin Consultation</span>
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
