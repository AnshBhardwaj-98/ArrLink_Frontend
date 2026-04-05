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
  <section id="services" className="relative py-32 px-6 bg-surface overflow-hidden">
    {/* Refined background */}
    <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-surface to-surface-lowest opacity-70" />
    <GridBackground />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl text-on-surface font-display font-bold mb-4">
          Core Intelligence
        </h2>
        <div className="w-24 h-1.5 bg-primary" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div 
            key={s.title} 
            className="group relative p-10 bg-surface-container border border-border/5 hover:bg-surface-container-high transition-all duration-700 rounded-2xl overflow-hidden flex flex-col items-start"
          >
            <div className="mb-8 p-3 bg-surface-container-highest/40 rounded-xl group-hover:bg-primary/10 transition-colors duration-500">
              <s.icon className="w-7 h-7 text-primary" strokeWidth={1} />
            </div>
            <h3 className="text-2xl text-on-surface font-display font-bold mb-4 group-hover:text-primary transition-colors duration-500">
              {s.title}
            </h3>
            <p className="text-on-surface/60 leading-relaxed text-base font-sans font-normal max-w-[80%]">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
