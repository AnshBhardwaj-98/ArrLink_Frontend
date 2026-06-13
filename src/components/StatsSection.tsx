import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";

const stats = [
  { value: 50, suffix: "+", label: "Enterprise clients", caption: "across Asia" },
  { value: 94, suffix: "%", label: "Predictive accuracy", caption: "on ML deployments" },
  { value: 1, suffix: "M+", label: "Daily requests", caption: "served per gateway" },
  { value: 0, suffix: "", label: "Downtime cutovers", caption: "since 2019" },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(end);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(end * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setValue(end);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  const display = end >= 1 ? Math.round(value) : value.toFixed(0);
  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-28 px-6 bg-background overflow-hidden border-y border-foreground/10">
      <AmbientFloor />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal mb-16 max-w-3xl">
          <div className="section-marker mb-6">
            <span className="h-px w-6 bg-foreground/40" />
            <span>Outcomes in Numbers</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-foreground font-display font-bold tracking-tighter text-balance">
            Measured by the systems we put{" "}
            <span className="font-serif font-normal text-[1.08em]">into production.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10">
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ s, index }: { s: typeof stats[number]; index: number }) => {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="reveal group relative bg-background px-6 md:px-8 py-10 md:py-14
                 hover:bg-surface-container-low transition-colors duration-500"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-foreground/40"
      />
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-none">
          <CountUp end={s.value} suffix={s.suffix} />
        </span>
      </div>
      <p className="text-foreground text-sm md:text-base font-bold mb-1 tracking-tight">{s.label}</p>
      <p className="text-foreground/50 text-xs md:text-sm font-normal">{s.caption}</p>
    </div>
  );
};

export default StatsSection;
