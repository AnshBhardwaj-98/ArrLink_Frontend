const blocks = [
  {
    number: "01",
    title: "Monolith-first thinking breaks at scale.",
    body: "Starting monolithic is fine — staying monolithic isn't. Systems that can't decompose cleanly will bottleneck every team that touches them. We design for separation from the start, so scaling is a deployment decision, not a rewrite.",
  },
  {
    number: "02",
    title: "Distributed systems require intentional design.",
    body: "You can't bolt on distribution after the fact. Network boundaries, failure modes, consistency guarantees, and observability must be first-class concerns from architecture phase — not afterthoughts patched in production.",
  },
  {
    number: "03",
    title: "Backend architecture matters more than UI polish.",
    body: "A beautiful interface on a brittle backend is a liability. We prioritize the systems underneath: data flow, concurrency models, API contracts, and operational resilience. The UI can always be refined. The architecture cannot.",
  },
];

const PhilosophySection = () => (
  <section id="philosophy" className="py-32 px-6 bg-secondary/50">
    <div className="max-w-4xl mx-auto">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Engineering Philosophy</p>
      <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-16">
        How we think about systems.
      </h2>
      <div className="space-y-16">
        {blocks.map((b) => (
          <div key={b.number} className="border-l-2 border-primary pl-8">
            <span className="text-xs tracking-[0.3em] text-primary font-mono">{b.number}</span>
            <h3 className="text-xl font-light tracking-wide mt-2 mb-4">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-2xl">{b.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PhilosophySection;
