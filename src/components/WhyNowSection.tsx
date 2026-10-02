import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";

const comparison = [
  { label: "Time to first release", before: "6–12 months", after: "4–8 weeks" },
  { label: "Team required", before: "10+ engineers", after: "A focused senior pod" },
  { label: "Fit to your workflow", before: "Bend to packaged software", after: "Built around how you operate" },
  { label: "Ownership", before: "Vendor lock-in, per-seat fees", after: "Your code, your IP" },
];

const WhyNowSection = () => {
  const headerRef = useReveal<HTMLDivElement>();
  const tableRef = useReveal<HTMLDivElement>();

  return (
    <section id="why-arrlink" className="relative py-32 px-6 bg-background overflow-hidden">
      <AmbientFloor />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-20 items-start">
        <div ref={headerRef} className="reveal">
          <div className="section-marker mb-6">
            <span className="h-px w-6 bg-foreground/40" />
            <span>Why Now</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-6 tracking-tighter text-balance">
            AI makes custom software{" "}
            <span className="font-serif font-normal text-[1.08em]">possible</span> for every business.
          </h2>
          <div className="space-y-5 text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Custom software used to be reserved for companies with big budgets and long
              timelines. Everyone else stitched together SaaS tools that almost fit.
            </p>
            <p>
              AI-accelerated development changes the math. Our engineers use AI across design,
              code, testing and documentation — so you get software built for your exact
              workflow, at close to the cost and speed of off-the-shelf tools.
            </p>
          </div>
        </div>

        <div
          ref={tableRef}
          className="reveal rounded-2xl border border-foreground/10 overflow-hidden bg-surface-container/30"
          style={{ transitionDelay: "120ms" }}
        >
          <div className="grid grid-cols-[1.1fr_1fr_1fr] text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-medium text-foreground/45 border-b border-foreground/10">
            <span className="px-4 md:px-6 py-4" />
            <span className="px-4 md:px-6 py-4">Traditional build</span>
            <span className="px-4 md:px-6 py-4 text-foreground bg-primary/[0.06]">With ArrLink</span>
          </div>
          {comparison.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.1fr_1fr_1fr] border-b last:border-b-0 border-foreground/[0.07] text-sm"
            >
              <span className="px-4 md:px-6 py-5 font-medium text-foreground/80">{row.label}</span>
              <span className="px-4 md:px-6 py-5 text-foreground/45">{row.before}</span>
              <span className="px-4 md:px-6 py-5 font-medium text-foreground bg-primary/[0.06]">{row.after}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
