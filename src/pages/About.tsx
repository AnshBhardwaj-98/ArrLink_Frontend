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
    <div className="min-h-screen bg-[#FDFCFB] font-sans">
      <Navbar />
      <main className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDFCFB] to-[#F5F2EE] opacity-95" />
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 h-[50vh] w-[80%] bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-[120px] opacity-40" />
        <GridBackground />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-24">
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 font-semibold text-[#888]">
              The Firm
            </p>
            <h1 className="text-4xl md:text-6xl text-[#1A1A1A] font-serif mb-6">
              About <span className="italic font-medium text-[#D4AF37]">Aethernetics</span>
            </h1>
            <div className="w-16 h-px bg-[#D4AF37]/40 mx-auto mb-10" />
            <p className="text-[#1A1A1A] text-xl md:text-2xl font-serif leading-relaxed max-w-3xl mx-auto italic">
              "Aethernetics builds high-performance software systems for businesses that depend on operational precision."
            </p>
          </div>

          {/* Core Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4AF37]">The Approach</h2>
                <p className="text-[#1A1A1A] text-2xl leading-snug font-serif">
                  We eliminate inefficiencies at their source through structural clarity.
                </p>
              </div>
              <div className="space-y-6 text-[#555] font-light leading-relaxed">
                <p>
                  Most software projects fail not because of bad interfaces — but because of weak foundations. Poor architecture. Fragile integrations. Systems that cannot scale under real-world usage.
                </p>
                <p>
                  At Aethernetics, we build differently. Every solution begins with a deliberate data model and an API designed for longevity. We engineer around real operational constraints to ensure stability as your complexity compounds.
                </p>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-md border border-gray-100 p-10 md:p-14 rounded-3xl shadow-xl shadow-black/[0.02]">
              <h2 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#1A1A1A] mb-8">Engineering Principles</h2>
              <ul className="space-y-6">
                {[
                  { title: "Deliberate Data Models", desc: "Structured for integrity and high-speed retrieval." },
                  { title: "API Longevity", desc: "Designed to evolve without breaking critical dependencies." },
                  { title: "Operational Constraints", desc: "Built to perform within the reality of your business." }
                ].map((item, i) => (
                  <li key={i} className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[#D4AF37] font-bold">/</span>
                      <span className="text-[#1A1A1A] font-medium text-sm uppercase tracking-wider">{item.title}</span>
                    </div>
                    <p className="text-[#666] text-sm pl-5 font-light">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialization Section - Matching Service Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#888] mb-4">Core Specializations</h2>
              <p className="text-[#1A1A1A] font-serif text-2xl italic">Systems engineering across the digital stack.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((spec, i) => (
                <div key={i} className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#D4AF37]/20 transition-all duration-500">
                  <div className="mb-6 inline-block p-3 bg-gray-50 rounded-xl group-hover:bg-[#D4AF37]/10 transition-colors">
                    <spec.icon className="w-6 h-6 text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#1A1A1A] text-lg font-serif font-bold mb-3">{spec.title}</h3>
                  <p className="text-[#666] text-sm font-light leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Philosophy Section */}
          <div className="text-center py-24 border-y border-gray-100 bg-white/20 rounded-3xl">
            <h2 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#D4AF37] mb-10">Our Philosophy</h2>
            <div className="space-y-6 mb-16">
              <p className="text-2xl md:text-4xl text-[#1A1A1A] font-serif">Technology should reduce friction, not introduce it.</p>
              <p className="text-2xl md:text-4xl text-[#1A1A1A] font-serif opacity-70">Infrastructure should scale quietly.</p>
              <p className="text-2xl md:text-4xl text-[#1A1A1A] font-serif opacity-40">Engineering should be invisible but undeniable.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-[#555] text-lg font-light leading-relaxed mb-10">
                Aethernetics exists to build software that businesses can rely on — not just launch. We transform complexity into competitive advantage.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-[#1A1A1A] text-white px-10 py-4 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#D4AF37] transition-all"
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
