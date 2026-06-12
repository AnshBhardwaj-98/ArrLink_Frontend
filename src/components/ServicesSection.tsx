import { Sparkles, Code2, Cloud, Building2, Database, Smartphone, ArrowUpRight } from "lucide-react";
import AmbientFloor from "./AmbientFloor";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Sparkles,
    title: "AI Solutions",
    tag: "Intelligence",
    description: "Cutting-edge machine learning models and cognitive automation systems designed to optimize decision-making and business intelligence.",
  },
  {
    icon: Code2,
    title: "Software Development",
    tag: "Craft",
    description: "Bespoke high-performance software engineering using modern stacks to build robust, scalable, and secure digital infrastructure.",
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    tag: "Scale",
    description: "Multi-tenant cloud architectures engineered for rapid scaling, seamless integration, and exceptional user experience.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    tag: "Systems",
    description: "Complex system integrations and digital transformation strategies for large-scale organizations seeking operational excellence.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    tag: "Foundations",
    description: "Robust data pipelines and warehousing solutions that transform raw data into actionable insights with high availability and integrity.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    tag: "Native",
    description: "Premium cross-platform and native mobile applications crafted with precision, focus on performance and intuitive design.",
  },
];

const ServiceCard = ({ s, index }: { s: typeof services[number]; index: number }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="reveal group relative p-7 md:p-8 bg-surface-container/40 border border-foreground/10
                 rounded-2xl flex flex-col items-start
                 hover:bg-surface-container/70 hover:border-foreground/25
                 transition-all duration-500"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="relative w-full flex items-start justify-between mb-7">
        <div className="p-3 bg-background rounded-xl border border-foreground/10
                        group-hover:border-foreground/25 transition-all duration-500">
          <s.icon className="w-5 h-5 text-foreground/65 group-hover:text-foreground transition-colors duration-500" strokeWidth={1.25} />
        </div>
        <span className="text-[9px] tracking-[0.3em] uppercase font-medium text-foreground/40">
          §{String(index + 1).padStart(2, "0")} · {s.tag}
        </span>
      </div>

      <h3 className="relative text-xl md:text-2xl text-foreground font-display font-bold mb-3 tracking-tight">
        {s.title}
      </h3>

      <p className="relative text-foreground/60 leading-relaxed text-sm font-sans font-normal mb-7 max-w-[95%]">
        {s.description}
      </p>

      <div className="relative mt-auto flex items-center gap-1.5 text-foreground/55 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Learn more</span>
        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-32 px-6 bg-background overflow-hidden">
      <AmbientFloor />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="reveal mb-16 max-w-3xl">
          <div className="section-marker mb-6">
            <span className="h-px w-6 bg-foreground/40" />
            <span>§ 02 · Core Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-5 tracking-tighter">
            Engineering across the{" "}
            <span className="font-serif font-normal text-[1.08em]">digital stack.</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl">
            Six disciplines, one studio. We pair the rigor of architecture with the speed of modern delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
