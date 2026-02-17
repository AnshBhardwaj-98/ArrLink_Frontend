const techs = [
  { name: "Golang", desc: "High-performance compiled backend" },
  { name: "PostgreSQL", desc: "Relational data at scale" },
  { name: "Docker", desc: "Containerized deployments" },
  { name: "Microservices", desc: "Service-oriented architecture" },
  { name: "REST APIs", desc: "Clean interface contracts" },
  { name: "Cloud-Native", desc: "Infrastructure as code" },
];

const TechStackSection = () => (
  <section id="stack" className="py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Technology Stack</p>
      <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-16">
        Built on proven infrastructure.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
        {techs.map((t) => (
          <div key={t.name} className="bg-background p-8 text-center">
            <span className="text-sm font-mono tracking-wider">{t.name}</span>
            <p className="text-xs text-muted-foreground font-light mt-2">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
