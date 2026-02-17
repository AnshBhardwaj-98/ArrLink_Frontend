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
  <section id="services" className="relative py-32 px-6 bg-[#FDFCFB] overflow-hidden">
    {/* Refined background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDFCFB] to-[#F5F2EE] opacity-70" />
    <GridBackground />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 font-semibold text-[#888]">
          Our Expertise & Services
        </p>
        <h2 className="text-4xl md:text-6xl text-[#1A1A1A] font-serif mb-8">
          Elevating <span className="italic font-medium text-[#D4AF37]">Digital</span> Standards
        </h2>
        <div className="w-16 h-px bg-[#D4AF37]/40 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div 
            key={s.title} 
            className="group relative p-10 bg-white border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-700 rounded-2xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] flex flex-col items-start"
          >
            <div className="mb-8 p-3 bg-gray-50 rounded-xl group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
              <s.icon className="w-7 h-7 text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl text-[#1A1A1A] font-serif font-semibold mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">
              {s.title}
            </h3>
            <p className="text-[#666] leading-relaxed text-[15px] font-sans font-light">
              {s.description}
            </p>
            <div className="mt-8 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              Learn More <span className="text-[#D4AF37]">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
