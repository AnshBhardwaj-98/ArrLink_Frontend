import { Link } from "react-router-dom";
import GridBackground from "./GridBackground";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-16">
    <GridBackground />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[1.1] mb-8">
        Engineering Business Software
        <br />
        <span className="text-primary">That Actually Scales.</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
        Custom backend systems, SaaS platforms, and distributed architectures built with precision.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/contact"
          className="bg-foreground text-background px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary transition-colors"
        >
          Book a Consultation
        </Link>
        <a
          href="#case-study"
          className="border border-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
        >
          View Case Study
        </a>
        <Link
          to="/contact"
          className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          Request Proposal
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
