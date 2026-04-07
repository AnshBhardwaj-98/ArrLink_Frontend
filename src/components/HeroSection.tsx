import { Link } from "react-router-dom";
import GridBackground from "./GridBackground";

const HeroSection = () => (
  <section
    className="
      relative min-h-screen flex items-center justify-center pt-20
      bg-surface-lowest
      overflow-hidden
    "
  >
    {/* Refined Luxury Gradient */}
    <div className="absolute inset-0 bg-gradient-to-b 
        from-surface-lowest via-surface to-surface-lowest opacity-95" />

    {/* Subtle Gold Glow */}
    <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 
        h-[60vh] w-[90%] 
        bg-gradient-to-b from-primary/10 to-transparent 
        blur-[140px] opacity-30" />

    <GridBackground />

    <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">

      {/* Top Label */}
      <div className="inline-block px-3 py-1.5 rounded-lg border border-primary/20 bg-primary/5 mb-6">
        <p className="text-[9px] md:text-xs tracking-[0.4em] uppercase font-bold text-primary">
          Engineering Atelier
        </p>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tighter mb-4 text-on-surface font-display font-bold">
        Transforming
        <br />
        Businesses 
        <br />
        <span className="text-primary italic font-medium">
          with Intelligence
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-on-surface/60 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed font-normal font-sans">
        Architecting the future of enterprise through high-fidelity artificial 
        intelligence and bespoke digital engineering.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link
          to="/contact"
          className="
            gradient-primary text-on-primary
            w-full sm:w-[280px] py-5 text-xs tracking-[0.2em] uppercase font-bold
            hover:opacity-90
            transition-all duration-500 rounded-sm shadow-xl
          "
        >
          Schedule Consultation
        </Link>
        <Link
          to="/portfolio"
          className="
            glass text-on-surface border border-border/20
            w-full sm:w-[280px] py-5 text-xs tracking-[0.2em] uppercase font-bold
            hover:bg-surface-container-high
            transition-all duration-500 rounded-sm
          "
        >
          View Portfolio
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
