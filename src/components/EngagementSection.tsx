import { Link } from "react-router-dom";
import { ArrowUpRight, Rocket, Layers, Workflow, Users } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";

const engagements = [
  {
    icon: Rocket,
    title: "Idea to MVP",
    fit: "Founders & new product lines",
    description:
      "Validate fast. We scope, design and ship a production-grade MVP — ready for real users and investors in weeks.",
  },
  {
    icon: Workflow,
    title: "Hard operational problems",
    fit: "Ops-heavy businesses",
    description:
      "Workflows no SaaS tool fits. We build custom systems and AI agents that remove manual work at the source.",
  },
  {
    icon: Layers,
    title: "Pilot to production",
    fit: "Teams with a stalled AI pilot",
    description:
      "Your AI proof-of-concept works in a demo but not at scale. We harden, integrate and take it live.",
  },
  {
    icon: Users,
    title: "Dedicated build pod",
    fit: "Scaling product teams",
    description:
      "A senior engineering pod that plugs into your roadmap — faster than hiring, accountable like an in-house team.",
  },
];

const EngagementCard = ({ e, index }: { e: typeof engagements[number]; index: number }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="reveal group relative p-7 md:p-8 rounded-2xl border border-foreground/10 bg-surface-container/40
                 hover:bg-surface-container/70 hover:border-foreground/25 transition-all duration-500 flex flex-col"
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-7">
        <div className="p-3 bg-background rounded-xl border border-foreground/10 group-hover:border-foreground/25 transition-all duration-500">
          <e.icon className="w-5 h-5 text-foreground/65 group-hover:text-foreground transition-colors duration-500" strokeWidth={1.25} />
        </div>
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-foreground/35 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tight mb-2">
        {e.title}
      </h3>
      <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-primary mb-4">{e.fit}</p>
      <p className="text-foreground/60 text-sm leading-relaxed">{e.description}</p>
    </div>
  );
};

const EngagementSection = () => {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="engagements" className="relative py-32 px-6 bg-background overflow-hidden">
      <AmbientFloor />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="reveal mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <div className="section-marker mb-6">
              <span className="h-px w-6 bg-foreground/40" />
              <span>Where We Help</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-5 tracking-tighter text-balance">
              Engagements shaped around{" "}
              <span className="font-serif font-normal text-[1.08em]">your stage.</span>
            </h2>
            <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl">
              Every engagement is scoped to your goals, not a fixed package. Tell us where
              you are — we&apos;ll propose the fastest path to production.
            </p>
          </div>
          <Link
            to="/contact"
            className="group shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md
                       bg-foreground text-background text-xs tracking-[0.2em] uppercase font-bold
                       hover:bg-foreground/85 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Get a Tailored Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((e, i) => (
            <EngagementCard key={e.title} e={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
