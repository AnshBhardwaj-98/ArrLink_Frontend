const steps = [
  { 
    label: "Strategic Discovery", 
    desc: "We begin by deconstructing your goals, identifying core constraints, and mapping the path to technical excellence." 
  },
  { 
    label: "Conceptual Architecture", 
    desc: "A rigorous blueprinting phase where we define the logic, data flows, and structural integrity of the solution." 
  },
  { 
    label: "Iterative Engineering", 
    desc: "Our precision-led development phase focuses on building robust, scalable modules with continuous feedback loops." 
  },
  { 
    label: "Rigorous Validation", 
    desc: "Every system undergoes exhaustive testing to ensure uncompromising performance, security, and reliability." 
  },
  { 
    label: "Seamless Integration", 
    desc: "We execute a controlled deployment, ensuring the new solution aligns perfectly with your existing ecosystem." 
  },
  { 
    label: "Continuous Evolution", 
    desc: "Post-launch, we monitor and optimize, ensuring your digital assets grow and adapt alongside your business." 
  },
];

const ProcessSection = () => (
  <section id="process" className="relative py-24 px-6 bg-surface-lowest overflow-hidden">
    <div className="max-w-4xl mx-auto px-4">
      <div className="mb-16">
        <p className="text-[9px] md:text-xs tracking-[0.4em] uppercase mb-3 font-bold text-primary">
          The Atelier Way
        </p>
        <h2 className="text-3xl md:text-5xl text-on-surface font-display font-bold">
          Methodology
        </h2>
      </div>

      <div className="relative space-y-12 pl-8 border-l border-border/10">
        {steps.map((s, i) => (
          <div key={s.label} className="relative group">
            {/* Timeline Circle */}
            <div className={`absolute -left-[37px] top-0 w-4 h-4 rounded-md border-2 ${i === 0 ? 'bg-primary border-primary' : 'bg-surface-lowest border-border/40'} z-10`} />
            
            <div className="flex flex-col gap-1">
              <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-primary">Phase 0{i + 1}</span>
              <h3 className="text-xl font-display font-bold text-on-surface group-hover:text-primary transition-colors duration-300">
                {s.label}
              </h3>
              <p className="text-on-surface/60 text-base leading-relaxed font-sans font-normal max-w-xl">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
