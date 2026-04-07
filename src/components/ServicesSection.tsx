import { Sparkles, Code2, Cloud, Building2, Database, Smartphone } from "lucide-react";
import GridBackground from "./GridBackground";

const services = [
  {
    icon: Sparkles,
    title: "AI Solutions",
    description: "Cutting-edge machine learning models and cognitive automation systems designed to optimize decision-making and business intelligence.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Bespoke high-performance software engineering using modern stacks to build robust, scalable, and secure digital infrastructure.",
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Multi-tenant cloud architectures engineered for rapid scaling, seamless integration, and exceptional user experience.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Complex system integrations and digital transformation strategies for large-scale organizations seeking operational excellence.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines and warehousing solutions that transform raw data into actionable insights with high availability and integrity.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Premium cross-platform and native mobile applications crafted with precision, focus on performance and intuitive design.",
  },
];

const ServicesSection = () => (
  <section id="services" className="relative py-16 px-6 bg-surface overflow-hidden">
    {/* Refined background */}
    <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-surface to-surface-lowest opacity-70" />
    <GridBackground />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl text-on-surface font-display font-bold mb-3">
          Core Intelligence
        </h2>
        <div className="w-16 h-1 bg-primary" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div 
            key={s.title} 
            className="group relative p-6 bg-surface-container border border-border/5 hover:bg-surface-container-high transition-all duration-700 rounded-xl overflow-hidden flex flex-col items-start"
          >
            <div className="mb-6 p-2 bg-surface-container-highest/40 rounded-lg group-hover:bg-primary/10 transition-colors duration-500">
              <s.icon className="w-5 h-5 text-primary" strokeWidth={1} />
            </div>
            <h3 className="text-lg text-on-surface font-display font-bold mb-3 group-hover:text-primary transition-colors duration-500">
              {s.title}
            </h3>
            <p className="text-on-surface/60 leading-relaxed text-sm font-sans font-normal max-w-[90%]">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
