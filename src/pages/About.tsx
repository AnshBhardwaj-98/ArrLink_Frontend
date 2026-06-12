import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientFloor from "@/components/AmbientFloor";
import { Sparkles, Code2, Cloud, Building2, Database, Smartphone, ArrowUpRight } from "lucide-react";

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
        <AmbientFloor />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-24">
            <div className="section-marker mb-6 justify-center">
              <span className="h-px w-6 bg-foreground/40" />
              <span>§ 01 · The Firm</span>
              <span className="h-px w-6 bg-foreground/40" />
            </div>
            <h1 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-6 tracking-tighter">
              About{" "}
              <span className="font-serif font-normal text-[1.08em]">ArrLink</span>
            </h1>
            <div className="w-16 h-px bg-foreground/20 mx-auto mb-10" />
            <p className="text-foreground text-xl md:text-3xl font-display leading-relaxed max-w-3xl mx-auto font-medium">
              "ArrLink builds high-performance software systems for businesses that depend on operational precision."
            </p>
          </div>

          {/* Core Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-[10px] tracking-[0.3em] uppercase font-medium text-foreground/45">The Approach</h2>
                <p className="text-foreground text-3xl leading-snug font-display font-bold tracking-tight">
                  We eliminate inefficiencies at their source through structural clarity.
                </p>
              </div>
              <div className="space-y-6 text-foreground/60 font-normal leading-relaxed">
                <p>
                  Most software projects fail not because of bad interfaces — but because of weak foundations. Poor architecture. Fragile integrations. Systems that cannot scale under real-world usage.
                </p>
                <p>
                  At ArrLink, we build differently. Every solution begins with a deliberate data model and an API designed for longevity. We engineer around real operational constraints to ensure stability as your complexity compounds.
                </p>
              </div>
            </div>
            <div className="bg-surface-container/40 backdrop-blur-md border border-foreground/10 p-10 md:p-14 rounded-3xl">
              <h2 className="text-[10px] tracking-[0.3em] uppercase font-medium text-foreground/45 mb-8">Engineering Principles</h2>
              <ul className="space-y-6">
                {[
                  { title: "Deliberate Data Models", desc: "Structured for integrity and high-speed retrieval." },
                  { title: "API Longevity", desc: "Designed to evolve without breaking critical dependencies." },
                  { title: "Operational Constraints", desc: "Built to perform within the reality of your business." }
                ].map((item, i) => (
                  <li key={i} className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-foreground/40 font-bold">/</span>
                      <span className="text-foreground font-bold text-sm uppercase tracking-wider">{item.title}</span>
                    </div>
                    <p className="text-foreground/60 text-sm pl-5 font-normal">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialization Section - Matching Service Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-[10px] tracking-[0.4em] uppercase font-bold text-foreground/40 mb-4">Core Specializations</h2>
              <p className="text-foreground font-display text-2xl font-bold">Systems engineering across the digital stack.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((spec, i) => (
                <div key={i} className="group p-8 bg-surface-container/40 border border-foreground/5 rounded-2xl hover:bg-surface-container/70 hover:border-foreground/15 transition-all duration-500">
                  <div className="mb-6 inline-block p-3 bg-foreground/[0.03] rounded-xl border border-foreground/5 group-hover:border-foreground/15 transition-colors">
                    <spec.icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-foreground text-lg font-display font-bold mb-3 transition-colors">{spec.title}</h3>
                  <p className="text-foreground/60 text-sm font-normal leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Philosophy Section */}
          <div className="text-center py-24 border-y border-foreground/10 bg-surface-container/20 rounded-3xl">
            <div className="inline-flex items-center gap-2.5 mb-10">
              <span className="h-px w-6 bg-foreground/30" />
              <p className="text-[10px] tracking-[0.35em] uppercase font-medium text-foreground/45">Our Philosophy</p>
              <span className="h-px w-6 bg-foreground/30" />
            </div>
            <div className="space-y-6 mb-16">
              <p className="text-2xl md:text-5xl text-foreground font-display font-bold tracking-tighter">Technology should reduce friction, not introduce it.</p>
              <p className="text-2xl md:text-5xl text-foreground font-display font-bold tracking-tighter opacity-65">Infrastructure should scale quietly.</p>
              <p className="text-2xl md:text-5xl text-foreground font-display font-bold tracking-tighter opacity-35">Engineering should be invisible but undeniable.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-foreground/60 text-lg font-normal leading-relaxed mb-10">
                ArrLink exists to build software that businesses can rely on — not just launch. We transform complexity into competitive advantage.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-md text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-300"
              >
                Inquire About a Project
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
