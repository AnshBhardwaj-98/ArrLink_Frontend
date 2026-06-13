import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Activity, Cpu, Sparkles, Zap } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const HeroSection = () => {
  const eyebrowRef = useReveal<HTMLDivElement>({ threshold: 0 });
  const headlineRef = useReveal<HTMLHeadingElement>({ threshold: 0 });
  const subRef = useReveal<HTMLParagraphElement>({ threshold: 0 });
  const ctaRef = useReveal<HTMLDivElement>({ threshold: 0 });
  const cardRef = useReveal<HTMLDivElement>({ threshold: 0 });

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-background overflow-hidden">
      {/* Soft warm vignette */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background via-surface-container-lowest to-background"
      />

      {/* Single quiet indigo wash on horizon — barely there */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2
                   h-[22vh] w-[100%] blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(238 54% 50% / 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Perspective floor grid — receding into the horizon line */}
      <div
        aria-hidden
        className="perspective-floor absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
      >
        <div className="floor-grid" />
      </div>

      {/* Hairline horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-[55%] h-px
                   bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />

      {/* Subtle paper grain */}
      <div className="noise-overlay" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Left column — copy */}
        <div className="text-center lg:text-left">
          <div
            ref={eyebrowRef}
            className="reveal inline-flex items-center gap-2.5 mb-8"
          >
            <span className="h-px w-6 bg-foreground/40" />
            <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium text-foreground/55">
              Engineering Atelier 
            </p>
          </div>

          <h1
            ref={headlineRef}
            className="reveal text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tighter mb-7
                       text-foreground font-display font-bold text-balance"
            style={{ transitionDelay: "80ms" }}
          >
            Engineering
            <br />
            the operating layer
            <br />
            of{" "}
            <span className="font-serif font-normal text-[1.08em] leading-none">
              tomorrow&apos;s
            </span>{" "}
            enterprise.
          </h1>

          <p
            ref={subRef}
            className="reveal text-foreground/60 text-sm md:text-lg max-w-xl mx-auto lg:mx-0 mb-10
                       leading-relaxed font-normal font-sans text-balance"
            style={{ transitionDelay: "200ms" }}
          >
            We design and ship high-fidelity AI and software systems for teams who measure their work in milliseconds, uptime, and revenue.
          </p>

          <div
            ref={ctaRef}
            className="reveal flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            style={{ transitionDelay: "320ms" }}
          >
            <Link
              to="/contact"
              className="group relative w-full sm:w-auto px-7 py-4 rounded-md
                         bg-foreground text-background
                         text-xs tracking-[0.2em] uppercase font-bold
                         hover:bg-foreground/85 hover:-translate-y-0.5
                         transition-all duration-300
                         inline-flex items-center justify-center gap-2"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="group relative w-full sm:w-auto px-7 py-4 rounded-md
                         border border-foreground/20 text-foreground
                         text-xs tracking-[0.2em] uppercase font-bold
                         hover:border-foreground/50 hover:bg-foreground/[0.04]
                         transition-all duration-300
                         inline-flex items-center justify-center gap-2"
            >
              <span>Explore the Atelier</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Right column — schematic core */}
        <div
          ref={cardRef}
          className="reveal hidden lg:flex justify-center items-center relative h-[540px]"
          style={{ transitionDelay: "440ms" }}
        >
          <OrbitalCore />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <span className="text-[9px] tracking-[0.4em] uppercase text-foreground/40 font-medium">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-foreground/50 animate-scroll-cue" strokeWidth={1.5} />
      </div>
    </section>
  );
};

/**
 * OrbitalCore — redesigned as a precision engineering schematic on cream.
 * Hairline rings, dashed equatorial, fixed callouts pointing at metric pins,
 * and a single indigo dot at center. One traveling magenta marker — the
 * only saturated color in the composition.
 */
const OrbitalCore = () => {
  const SIZE = 460;
  const C = SIZE / 2;
  const RX = 200;
  const RY = 70;

  return (
    <div className="relative animate-float-y" style={{ width: SIZE, height: SIZE }}>
      {/* Wash behind the diagram — very faint indigo to suggest light source */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, hsl(238 54% 50% / 0.14) 0%, transparent 65%)",
        }}
      />

      {/* Annotation labels — fixed positions, pointing into the diagram with hairline rules */}
      <Annotation
        className="top-[2%] left-1/2 -translate-x-1/2 text-center"
        value="Throughput"
        meta="1.24M req/s"
        line="bottom"
      />
      <Annotation
        className="top-1/2 -translate-y-1/2 right-0 text-right"
        value="P99 latency"
        meta="24ms"
        line="left"
      />
      <Annotation
        className="bottom-[2%] left-1/2 -translate-x-1/2 text-center"
        value="Accuracy"
        meta="94.2%"
        line="top"
      />
      <Annotation
        className="top-1/2 -translate-y-1/2 left-0 text-left"
        value="Uptime"
        meta="99.99%"
        line="right"
      />

      {/* SVG schematic */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0"
        aria-hidden
      >
        <defs>
          <linearGradient id="ring-indigo" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="hsl(238 54% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(238 54% 50%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(238 54% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer reference circle — dashed */}
        <circle
          cx={C}
          cy={C}
          r={RX + 10}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.1"
          strokeWidth="1"
          strokeDasharray="1 6"
        />

        {/* Indigo signature ring */}
        <ellipse
          cx={C}
          cy={C}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="url(#ring-indigo)"
          strokeWidth="1.4"
          className="animate-ring-a"
          style={{ transformOrigin: `${C}px ${C}px` }}
        />
        {/* Two darker hairlines */}
        <ellipse
          cx={C}
          cy={C}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.2"
          strokeWidth="0.8"
          className="animate-ring-b"
          style={{ transformOrigin: `${C}px ${C}px` }}
        />
        <ellipse
          cx={C}
          cy={C}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="0.8"
          className="animate-ring-c"
          style={{ transformOrigin: `${C}px ${C}px` }}
        />

        {/* Equatorial dashed line */}
        <circle
          cx={C}
          cy={C}
          r={RX}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="2 5"
        />

        {/* Crosshair through center */}
        <g stroke="hsl(var(--foreground))" strokeOpacity="0.2" strokeWidth="0.8">
          <line x1={C - 22} y1={C} x2={C + 22} y2={C} />
          <line x1={C} y1={C - 22} x2={C} y2={C + 22} />
        </g>

        {/* Traveling nodes */}
        <g className="animate-ring-a" style={{ transformOrigin: `${C}px ${C}px` }}>
          <circle cx={C + RX} cy={C} r="6" fill="hsl(307 61% 63%)" opacity="0.2" />
          <circle cx={C + RX} cy={C} r="2.5" fill="hsl(307 61% 63%)" />
        </g>
        <g className="animate-ring-b" style={{ transformOrigin: `${C}px ${C}px` }}>
          <circle cx={C + RX} cy={C} r="2" fill="hsl(var(--foreground))" opacity="0.5" />
        </g>
      </svg>

      {/* Center mark — solid indigo dot, hairline ring */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 w-7 h-7 rounded-full animate-core-pulse"
        style={{
          background: "hsl(238 54% 50%)",
          boxShadow: "0 0 0 1px hsl(238 54% 50% / 0.15), 0 0 0 10px hsl(238 54% 50% / 0.06)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-[calc(50%-3px)] top-[calc(50%-3px)] w-1.5 h-1.5 rounded-full bg-background"
      />
    </div>
  );
};

const Annotation = ({
  className,
  value,
  meta,
  line,
}: {
  className?: string;
  value: string;
  meta: string;
  line: "top" | "bottom" | "left" | "right";
}) => {
  const lineMap = {
    top: "absolute -top-3 left-1/2 -translate-x-1/2 h-3 w-px bg-foreground/20",
    bottom: "absolute -bottom-3 left-1/2 -translate-x-1/2 h-3 w-px bg-foreground/20",
    left: "absolute top-1/2 -translate-y-1/2 -left-3 w-3 h-px bg-foreground/20",
    right: "absolute top-1/2 -translate-y-1/2 -right-3 w-3 h-px bg-foreground/20",
  } as const;

  return (
    <div className={`absolute z-10 ${className ?? ""}`}>
      <div className="relative inline-block">
        <span className={lineMap[line]} />
        <p className="text-[10px] tracking-[0.15em] uppercase font-bold text-foreground/55">
          {value}
        </p>
        <p className="text-base font-display font-bold text-foreground tabular-nums">
          {meta}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
