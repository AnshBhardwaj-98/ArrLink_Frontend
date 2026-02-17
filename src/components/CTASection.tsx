import { Link } from "react-router-dom";

const CTASection = () => (
  <section id="contact" className="py-32 px-6 bg-foreground text-background">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-8">
        Let's Engineer Your System Properly.
      </h2>
      <p className="text-sm opacity-60 font-light mb-12 max-w-xl mx-auto">
        Whether you need a new platform, a migration strategy, or a performance audit — we build systems that last.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/contact"
          className="border border-background px-8 py-3 text-sm tracking-widest uppercase hover:bg-background hover:text-foreground transition-colors"
        >
          Book Consultation
        </Link>
        <Link
          to="/contact"
          className="border border-background/40 px-8 py-3 text-sm tracking-widest uppercase hover:border-background hover:bg-background hover:text-foreground transition-colors"
        >
          Start a Project
        </Link>
        <Link
          to="/contact"
          className="text-sm tracking-widest uppercase opacity-60 hover:opacity-100 underline underline-offset-4 transition-opacity"
        >
          Schedule Technical Discussion
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
