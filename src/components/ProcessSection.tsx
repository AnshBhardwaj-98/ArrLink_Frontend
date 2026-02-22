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
  <section id="process" className="relative py-32 px-6 bg-[#FDFCFB] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
        <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 font-semibold text-[#888]">
          Methodology
        </p>
        <h2 className="text-4xl md:text-6xl text-[#1A1A1A] font-serif mb-8">
          A Refined <span className="italic font-medium text-[#D4AF37]">Approach</span>
        </h2>
        <div className="w-16 h-px bg-[#D4AF37]/40 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {steps.map((s, i) => (
          <div key={s.label} className="relative group">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-serif italic text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-500">0{i + 1}</span>
              <div className="h-px flex-1 bg-gray-100 group-hover:bg-[#D4AF37]/20 transition-colors" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
              {s.label}
            </h3>
            <p className="text-[#666] leading-relaxed font-sans font-light">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
