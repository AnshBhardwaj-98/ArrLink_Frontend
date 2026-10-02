import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";
import { projects, type Project } from "@/content/projects";

export const ProjectCard = ({ p, index }: { p: Project; index: number }) => {
  const ref = useReveal<HTMLElement>({ threshold: 0.2 });
  return (
    <article
      ref={ref}
      className="reveal group relative p-7 md:p-9 rounded-2xl border border-foreground/10 bg-surface-container/40
                 hover:bg-surface-container/70 hover:border-foreground/25 transition-all duration-500 flex flex-col"
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <div className="flex items-center justify-between gap-4 mb-8">
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-primary">{p.category}</span>
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-foreground/35 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="text-xs tracking-[0.2em] uppercase font-bold text-foreground/50 mb-2">{p.client}</p>
      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mb-4 text-balance">
        {p.title}
      </h3>
      <p className="text-foreground/60 leading-relaxed mb-8">{p.description}</p>
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/40 flex items-center gap-2"
          >
            <span className="h-px w-2 bg-foreground/30" />
            {s}
          </span>
        ))}
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="relative py-32 px-6 bg-surface-container-low overflow-hidden">
      <AmbientFloor />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="reveal mb-16 max-w-3xl">
          <div className="section-marker mb-6">
            <span className="h-px w-6 bg-foreground/40" />
            <span>Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-5 tracking-tighter text-balance">
            AI systems running in{" "}
            <span className="font-serif font-normal text-[1.08em]">production.</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl">
            From generative AI platforms to clinical-grade machine learning — a few of the
            systems we&apos;ve designed, built and shipped for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
