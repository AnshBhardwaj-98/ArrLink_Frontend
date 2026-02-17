import { Database, Server, GitBranch, Workflow } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Custom Business Software",
    description:
      "Internal tools, CRMs, and operational platforms engineered for your exact workflow. No off-the-shelf compromises.",
  },
  {
    icon: Server,
    title: "SaaS Platform Development",
    description:
      "Golang-focused, multi-tenant SaaS systems built for throughput, isolation, and horizontal scalability from day one.",
  },
  {
    icon: GitBranch,
    title: "Microservices & System Architecture",
    description:
      "Service decomposition, event-driven design, and inter-service communication patterns that don't collapse under load.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation & Optimization",
    description:
      "Route planning, scheduling engines, and data pipelines that replace manual processes with deterministic systems.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Services</p>
      <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-16">
        Four pillars of systems engineering.
      </h2>
      <div className="grid md:grid-cols-2 gap-px bg-border">
        {services.map((s) => (
          <div key={s.title} className="bg-background p-10 group">
            <s.icon className="w-5 h-5 text-primary mb-6" strokeWidth={1.5} />
            <h3 className="text-lg font-light tracking-wide mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
