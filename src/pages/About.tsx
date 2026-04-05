import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import { Sparkles, Code2, Cloud, Building2, Database, Smartphone } from "lucide-react";

const specializations = [
  {
    icon: Sparkles,
    title: "AI Solutions",
    description: "Machine learning models and cognitive automation designed for operational intelligence.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Bespoke high-performance engineering using modern, scalable tech stacks.",
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Multi-tenant cloud architectures engineered for rapid scaling and reliability.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Complex system integrations for large-scale organizational excellence.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines that transform raw data into high-integrity insights.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Premium cross-platform and native applications crafted for performance.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-surface to-surface-lowest opacity-95" />
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 h-[50vh] w-[80%] bg-gradient-to-b from-primary/10 to-transparent blur-[120px] opacity-40" />
        <GridBackground />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-24">
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 font-bold text-primary">
              The Firm
            </p>
            <h1 className="text-4xl md:text-6xl text-on-surface font-display font-bold mb-6 tracking-tighter">
              About <span className="text-primary">Aethernetics</span>
            </h1>
            <div className="w-16 h-px bg-primary/20 mx-auto mb-10" />
            <p className="text-on-surface text-xl md:text-3xl font-display leading-relaxed max-w-3xl mx-auto font-medium">
              "Aethernetics builds high-performance software systems for businesses that depend on operational precision."
            </p>
          </div>

          {/* Core Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary">The Approach</h2>
                <p className="text-on-surface text-3xl leading-snug font-display font-bold tracking-tight">
                  We eliminate inefficiencies at their source through structural clarity.
                </p>
              </div>
              <div className="space-y-6 text-on-surface/60 font-normal leading-relaxed">
                <p>
                  Most software projects fail not because of bad interfaces — but because of weak foundations. Poor architecture. Fragile integrations. Systems that cannot scale under real-world usage.
                </p>
                <p>
                  At Aethernetics, we build differently. Every solution begins with a deliberate data model and an API designed for longevity. We engineer around real operational constraints to ensure stability as your complexity compounds.
                </p>
              </div>
            </div>
            <div className="bg-surface-container/40 backdrop-blur-md border border-border/10 p-10 md:p-14 rounded-3xl ambient-shadow">
              <h2 className="text-[10px] tracking-[0.3em] uppercase font-bold text-on-surface mb-8">Engineering Principles</h2>
              <ul className="space-y-6">
                {[
                  { title: "Deliberate Data Models", desc: "Structured for integrity and high-speed retrieval." },
                  { title: "API Longevity", desc: "Designed to evolve without breaking critical dependencies." },
                  { title: "Operational Constraints", desc: "Built to perform within the reality of your business." }
                ].map((item, i) => (
                  <li key={i} className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold">/</span>
                      <span className="text-on-surface font-bold text-sm uppercase tracking-wider">{item.title}</span>
                    </div>
                    <p className="text-on-surface/60 text-sm pl-5 font-normal">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialization Section - Matching Service Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-[10px] tracking-[0.4em] uppercase font-bold text-on-surface/40 mb-4">Core Specializations</h2>
              <p className="text-on-surface font-display text-2xl font-bold">Systems engineering across the digital stack.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((spec, i) => (
                <div key={i} className="group p-8 bg-surface-container border border-border/5 rounded-2xl hover:bg-surface-container-high hover:ambient-shadow transition-all duration-500">
                  <div className="mb-6 inline-block p-3 bg-surface-container-highest/40 rounded-xl group-hover:bg-primary/10 transition-colors">
                    <spec.icon className="w-6 h-6 text-on-surface/70 group-hover:text-primary transition-colors" strokeWidth={1} />
                  </div>
                  <h3 className="text-on-surface text-lg font-display font-bold mb-3 group-hover:text-primary transition-colors">{spec.title}</h3>
                  <p className="text-on-surface/60 text-sm font-normal leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Philosophy Section */}
          <div className="text-center py-24 border-y border-border/10 bg-surface-container/20 rounded-3xl">
            <h2 className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary mb-10">Our Philosophy</h2>
            <div className="space-y-6 mb-16">
              <p className="text-2xl md:text-5xl text-on-surface font-display font-bold tracking-tighter">Technology should reduce friction, not introduce it.</p>
              <p className="text-2xl md:text-5xl text-on-surface font-display font-bold tracking-tighter opacity-70">Infrastructure should scale quietly.</p>
              <p className="text-2xl md:text-5xl text-on-surface font-display font-bold tracking-tighter opacity-40">Engineering should be invisible but undeniable.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-on-surface/60 text-lg font-normal leading-relaxed mb-10">
                Aethernetics exists to build software that businesses can rely on — not just launch. We transform complexity into competitive advantage.
              </p>
              <a 
                href="/contact" 
                className="inline-block gradient-primary text-on-primary px-10 py-5 rounded-md text-[10px] tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-all shadow-xl"
              >
                Inquire About a Project
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
