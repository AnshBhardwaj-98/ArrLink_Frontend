const steps = [
  { label: "Discovery", desc: "Understand constraints, data flows, and business logic." },
  { label: "System Design", desc: "Define boundaries, interfaces, and failure modes." },
  { label: "Architecture Blueprint", desc: "Document services, APIs, and infrastructure topology." },
  { label: "Development", desc: "Build iteratively with continuous integration and review." },
  { label: "Deployment", desc: "Containerized, reproducible, zero-downtime releases." },
  { label: "Long-Term Optimization", desc: "Monitor, profile, and evolve the system over time." },
];

const ProcessSection = () => (
  <section id="process" className="py-32 px-6 bg-secondary/50">
    <div className="max-w-6xl mx-auto">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Process</p>
      <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-16">
        From discovery to long-term operation.
      </h2>
      <div className="grid md:grid-cols-6 gap-px">
        {steps.map((s, i) => (
          <div key={s.label} className="relative p-6">
            <span className="text-xs font-mono text-primary tracking-wider">0{i + 1}</span>
            <h3 className="text-sm font-light tracking-wide mt-2 mb-2">{s.label}</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 right-0 w-px h-8 bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
