import { HeartPulse, Landmark, ShoppingBag, Truck, GraduationCap, Factory } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-aware diagnostic AI, clinical prediction models and patient-facing platforms.",
  },
  {
    icon: Landmark,
    title: "Finance & Fintech",
    description: "Fraud detection, compliance automation, voice agents and secure transaction platforms.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description: "Personalization engines, AI shopping assistants and marketplaces built to scale.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Route optimization, real-time tracking, demand forecasting and warehouse automation.",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description: "Learning platforms, AI tutors and assessment tools for schools, universities and creators.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Predictive maintenance, quality inspection with computer vision and production analytics.",
  },
];

const IndustryCard = ({ item, index }: { item: typeof industries[number]; index: number }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="reveal group bg-background p-7 md:p-8 hover:bg-surface-container-low transition-colors duration-500"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <item.icon
        className="w-5 h-5 mb-6 text-foreground/55 group-hover:text-foreground transition-colors duration-500"
        strokeWidth={1.25}
      />
      <h3 className="text-lg md:text-xl font-display font-bold text-foreground tracking-tight mb-2">
        {item.title}
      </h3>
      <p className="text-foreground/55 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};

const IndustriesSection = () => {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="industries" className="relative py-32 px-6 bg-surface-container-low overflow-hidden">
      <AmbientFloor />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="reveal mb-16 text-center max-w-2xl mx-auto">
          <div className="section-marker mb-6 justify-center">
            <span className="h-px w-6 bg-foreground/40" />
            <span>Industries We Serve</span>
            <span className="h-px w-6 bg-foreground/40" />
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-5 tracking-tighter text-balance">
            Domain depth where it{" "}
            <span className="font-serif font-normal text-[1.08em]">matters.</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg leading-relaxed">
            We&apos;ve shipped AI and software systems into regulated, high-volume and
            operations-heavy industries — and we bring those patterns to yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10">
          {industries.map((item, i) => (
            <IndustryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
