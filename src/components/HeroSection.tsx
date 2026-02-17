import { Link } from "react-router-dom";
import GridBackground from "./GridBackground";

const HeroSection = () => (
  <section
    className="
      relative min-h-screen flex items-center justify-center pt-20
      bg-[#FDFCFB]
      overflow-hidden
    "
  >
    {/* Refined Luxury Gradient */}
    <div className="absolute inset-0 bg-gradient-to-b 
        from-[#FDFCFB] via-white to-[#F5F2EE] opacity-95" />

    {/* Subtle Gold Glow */}
    <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 
        h-[60vh] w-[90%] 
        bg-gradient-to-b from-[#D4AF37]/20 to-transparent 
        blur-[140px] opacity-50" />

    <GridBackground />

    <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">

      {/* Top Label */}
      <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8 font-semibold text-[#888]">
        AI-Powered Enterprise Innovation
      </p>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8 text-[#1A1A1A] font-serif">
        Transforming Businesses
        <br />
        <span className="italic text-[#D4AF37] font-medium">
          With Intelligence.
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-[#555] text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-light font-sans">
        We architect high-performance AI systems and scalable digital infrastructure 
        designed for organizations that demand operational excellence.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link
          to="/contact"
          className="
            bg-[#1A1A1A] text-white
            px-12 py-4 text-xs tracking-[0.2em] uppercase font-bold
            hover:bg-[#D4AF37] hover:text-white
            transition-all duration-500 rounded-full
          "
        >
          Schedule Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
