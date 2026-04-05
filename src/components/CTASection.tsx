import { Link } from "react-router-dom";
import GridBackground from "./GridBackground";

const CTASection = () => (
  <section id="cta" className="relative py-32 px-6 bg-surface-lowest overflow-hidden">
    {/* Subtle Grid for texture on dark background */}
    <div className="absolute inset-0 opacity-10">
      <GridBackground />
    </div>
    
    {/* Gold Glow effect */}
    <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[60vh] w-[60%] bg-primary/10 blur-[120px] rounded-full" />
    <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[60vh] w-[60%] bg-primary/5 blur-[120px] rounded-full" />

    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl lg:text-8xl text-on-surface font-display font-bold mb-10 leading-tight tracking-tighter">
        Ready to redefine your digital core?
      </h2>
      
      <p className="text-on-surface/60 text-lg md:text-xl font-normal mb-14 max-w-3xl mx-auto font-sans">
        Join the vanguard of engineering excellence. Schedule your initial synthesis session today.
      </p>
      
      <div className="flex justify-center">
        <Link
          to="/contact"
          className="
            gradient-primary text-on-primary
            w-full sm:w-[400px] py-6 text-xs tracking-[0.2em] uppercase font-bold
            hover:opacity-90
            transition-all duration-500 rounded-md shadow-xl
          "
        >
          Begin Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
