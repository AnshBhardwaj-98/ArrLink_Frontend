import { Link } from "react-router-dom";
import GridBackground from "./GridBackground";

const CTASection = () => (
  <section id="cta" className="relative py-32 px-6 bg-[#1A1A1A] overflow-hidden">
    {/* Subtle Grid for texture on dark background */}
    <div className="absolute inset-0 opacity-10">
      <GridBackground />
    </div>
    
    {/* Gold Glow effect */}
    <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[60vh] w-[60%] bg-[#D4AF37]/10 blur-[120px] rounded-full" />
    <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[60vh] w-[60%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />

    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 font-semibold text-[#D4AF37]">
        Ready to Begin?
      </p>
      
      <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif mb-10 leading-tight">
        Let's Engineer Your <br />
        <span className="italic font-medium text-[#D4AF37]">Digital Legacy.</span>
      </h2>
      
      <p className="text-gray-400 text-lg md:text-xl font-light mb-14 max-w-2xl mx-auto font-sans">
        Whether you are scaling a startup or transforming an enterprise, we build the robust foundations your business deserves.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link
          to="/contact"
          className="
            bg-[#D4AF37] text-[#1A1A1A]
            px-12 py-5 text-xs tracking-[0.2em] uppercase font-bold
            hover:bg-white hover:text-[#1A1A1A]
            transition-all duration-500 rounded-full shadow-xl shadow-[#D4AF37]/10
          "
        >
          Start a Conversation
        </Link>
        
        <Link
          to="/about"
          className="
            text-white border border-white/20
            px-12 py-5 text-xs tracking-[0.2em] uppercase font-bold
            hover:bg-white/10 hover:border-white/40
            transition-all duration-500 rounded-full
          "
        >
          Learn Our Philosophy
        </Link>
      </div>
      
      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-1">Response Time</p>
          <p className="text-sm text-white font-light">Within 24 Hours</p>
        </div>
        <div className="hidden md:block w-px h-8 bg-white/10" />
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-1">Engagement Model</p>
          <p className="text-sm text-white font-light">Flexible & Strategic</p>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
