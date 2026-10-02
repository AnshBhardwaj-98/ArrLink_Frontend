import { Sparkles, Bot, Code2, Cloud, Database, Smartphone } from "lucide-react";
import AmbientFloor from "./AmbientFloor";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Sparkles,
    title: "Generative AI Development",
    tag: "Gen AI",
    description: "LLM-powered applications, RAG copilots and custom-trained models that plug into your data and workflows — built for accuracy, privacy and real production load.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    tag: "Agents",
    description: "Autonomous AI agents, chatbots and voice bots that handle support, sales and back-office operations — integrated with your CRM, WhatsApp and internal tools.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    tag: "Craft",
    description: "Bespoke web platforms, internal tools and enterprise systems engineered around your exact workflow — the fit of custom software at the speed of packaged software.",
  },
  {
    icon: Cloud,
    title: "SaaS & MVP Development",
    tag: "Scale",
    description: "From idea to launched MVP in weeks, then to a multi-tenant SaaS product with billing, auth, analytics and the architecture to scale.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    tag: "Foundations",
    description: "Data pipelines, warehouses and dashboards that turn scattered operational data into real-time insight and the foundation your AI needs.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    tag: "Native",
    description: "High-performance websites and cross-platform iOS and Android apps — fast, accessible, SEO-ready and designed to convert.",
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
          {s.tag}
        </span>
      </div>

      <h3 className="relative text-xl md:text-2xl text-foreground font-display font-bold mb-3 tracking-tight">
        {s.title}
      </h3>

      <p className="relative text-foreground/60 leading-relaxed text-sm font-sans font-normal max-w-[95%]">
        {s.description}
      </p>
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
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-5 tracking-tighter">
            AI &amp; software development{" "}
            <span className="font-serif font-normal text-[1.08em]">services.</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl">
            Six disciplines, one team. Enterprise-grade engineering paired with AI-native delivery — so you get production software, not a prototype that stalls.
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
