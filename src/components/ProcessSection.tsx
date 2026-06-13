import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";

const steps = [
  {
    label: "Strategic Discovery",
    desc: "We begin by deconstructing your goals, identifying core constraints, and mapping the path to technical excellence.",
    pillars: ["Stakeholder mapping", "Constraint surfacing", "Outcome modeling"],
  },
  {
    label: "Conceptual Architecture",
    desc: "A rigorous blueprinting phase where we define the logic, data flows, and structural integrity of the solution.",
    pillars: ["Data modeling", "API contracts", "System topology"],
  },
  {
    label: "Iterative Engineering",
    desc: "Our precision-led development phase focuses on building robust, scalable modules with continuous feedback loops.",
    pillars: ["Module isolation", "Reviewable increments", "Continuous demos"],
  },
  {
    label: "Rigorous Validation",
    desc: "Every system undergoes exhaustive testing to ensure uncompromising performance, security, and reliability.",
    pillars: ["Load testing", "Security audit", "Failure rehearsal"],
  },
  {
    label: "Seamless Integration",
    desc: "We execute a controlled deployment, ensuring the new solution aligns perfectly with your existing ecosystem.",
    pillars: ["Zero-downtime cutover", "Observability", "Rollback strategy"],
  },
  {
    label: "Continuous Evolution",
    desc: "Post-launch, we monitor and optimize, ensuring your digital assets grow and adapt alongside your business.",
    pillars: ["Telemetry-led tuning", "Capacity planning", "Adaptive roadmap"],
  },
];

const ProcessSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const headerRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        // Among cards currently crossing the trigger band, pick whichever
        // sits closest to the band's center — this stays correct whether
        // the user is scrolling up or down.
        const viewportCenter = window.innerHeight / 2;
        let nearestIdx: number | null = null;
        let nearestDistance = Infinity;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          const rect = entry.target.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - viewportCenter);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIdx = idx;
          }
        });

        if (nearestIdx !== null) setActive(nearestIdx);
      },
      {
        // Thin trigger band ~10% tall in the vertical middle of the viewport.
        // threshold:0 fires the moment any part of a card enters that band.
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const progress = ((active + 1) / steps.length) * 100;

  return (
    <section
      id="process"
      className="relative py-32 px-6 bg-surface-container-low"
    >
      {/* Background visuals — clipped here so the section itself doesn't
          have overflow-hidden as an ancestor of the sticky column. */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <AmbientFloor />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-20 text-center">
          <div className="section-marker mb-6 justify-center">
            <span className="h-px w-6 bg-foreground/40" />
            <span>The Atelier Way</span>
            <span className="h-px w-6 bg-foreground/40" />
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold tracking-tighter">
            A <span className="font-serif font-normal text-[1.08em]">methodical</span> path
            <br />
            from intent to operation.
          </h2>
        </div>

        {/* Sticky narrative */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
          {/* Sticky left — phase indicator */}
          <div className="md:sticky md:top-32 md:self-start">
            <div className="space-y-8">
              <div className="flex items-baseline gap-3">
                <span
                  key={active}
                  className="text-[6rem] md:text-[8rem] leading-none font-display font-bold text-foreground tabular-nums"
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground/25 text-2xl font-display font-medium tabular-nums">
                  / {String(steps.length).padStart(2, "0")}
                </span>
              </div>

              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase font-medium text-foreground/40 mb-3">
                  Phase {String(active + 1).padStart(2, "0")}
                </p>
                <h3
                  key={`title-${active}`}
                  className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight"
                >
                  {steps[active].label}
                </h3>
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="h-px w-full bg-foreground/10 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-foreground transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] tracking-[0.3em] uppercase text-foreground/40 font-medium">
                  <span>Inception</span>
                  <span>Evolution</span>
                </div>
              </div>

              {/* Phase pills */}
              <div className="hidden md:flex flex-wrap gap-2 pt-2">
                {steps.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => {
                      cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`text-[10px] tracking-[0.2em] uppercase font-medium px-2.5 py-1.5 rounded transition-all duration-300 ${
                      i === active
                        ? "bg-foreground text-background"
                        : "text-foreground/40 border border-foreground/10 hover:border-foreground/30 hover:text-foreground/70"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable right — phase cards */}
          <div className="space-y-16">
            {steps.map((s, i) => (
              <div
                key={s.label}
                ref={(el) => (cardRefs.current[i] = el)}
                data-idx={i}
                className={`group relative p-8 md:p-10 rounded-2xl border transition-all duration-500
                            ${
                              i === active
                                ? "bg-surface-container/70 border-foreground/15"
                                : "bg-surface-container/20 border-foreground/5"
                            }`}
              >
                <div
                  aria-hidden
                  className={`absolute -left-3 top-10 w-px h-12 transition-all duration-500
                              ${i === active ? "bg-foreground" : "bg-foreground/15"}`}
                />

                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-foreground/40">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-foreground/10" />
                </div>

                <h4
                  className={`text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight transition-colors duration-500
                              ${i === active ? "text-foreground" : "text-foreground/55"}`}
                >
                  {s.label}
                </h4>

                <p className="text-foreground/55 leading-relaxed font-sans font-normal mb-6 max-w-xl">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {s.pillars.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/40 flex items-center gap-2"
                    >
                      <span className="h-px w-2 bg-foreground/30" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
