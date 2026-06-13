import { Quote, Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";

const feedback = [
  {
    text: "Aethernetics built Imagine.bo into exactly what we envisioned — a platform that turns a single prompt into a fully deployed, production-ready application. Their engineering depth and speed of execution is unmatched.",
    author: "Sushil Kumar",
    company: "Synergylabs",
    role: "CEO",
    rating: 5,
    initials: "SK",
    project: "Imagine.bo",
  },
  {
    text: "Working with Aethernetics on our ML-driven cybersecurity research was exceptional. They built a robust fake review detection system based on network traffic analysis that exceeded our academic benchmarks.",
    author: "Saptadeepa Kalita",
    company: "Sharda University",
    role: "Assistant Professor",
    rating: 5,
    initials: "SK",
    project: "ML Cybersecurity & Fake Review Detection",
  },
  {
    text: "The ECG arrhythmia prediction model Aethernetics delivered for Mythyaverse was clinically precise and production-ready. They translated complex medical requirements into an AI system that genuinely saves lives.",
    author: "Anmol Gupta",
    company: "Mythyaverse",
    role: "CEO",
    rating: 5,
    initials: "AG",
    project: "ECG Arrhythmia Prediction",
  },
  {
    text: "Krinos AI is redefining dental diagnostics — and Aethernetics has been instrumental in building the AI backbone that powers our HIPAA-compliant platform. From CBCT analysis to automated insurance claims, their precision engineering is setting a new benchmark for oral healthcare.",
    author: "Krishna Gupta",
    company: "Krinos AI",
    role: "CEO",
    rating: 5,
    initials: "KG",
    project: "AI-Powered Dental Diagnostics Platform",
  },
];

const FeedbackMarquee = () => {
  const headerRef = useReveal<HTMLDivElement>();

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating
              ? "fill-foreground/70 text-foreground/70"
              : "text-foreground/15"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="relative py-28 bg-surface-container-low overflow-hidden border-y border-foreground/10">
      <AmbientFloor />

      <div
        ref={headerRef}
        className="reveal container px-4 mb-16 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="section-marker mb-6 justify-center">
            <span className="h-px w-6 bg-foreground/40" />
            <span>Industry Recognition</span>
            <span className="h-px w-6 bg-foreground/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 tracking-tighter text-balance">
            Trusted by teams building{" "}
            <span className="font-serif font-normal text-[1.08em]">
              at scale.
            </span>
          </h2>
          <p className="text-foreground/55 max-w-2xl text-sm md:text-base leading-relaxed">
            Fifty-plus organizations across Asia rely on our engineering. A
            glimpse of the work in their words.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-10">
        {/* First line: Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-10 hover:[animation-play-state:paused]">
            {[...feedback, ...feedback].map((item, i) => (
              <div
                key={i}
                className="relative w-[360px] p-4 rounded-xl bg-background border border-foreground/10 hover:border-foreground/25 flex flex-col items-start gap-3 transition-all duration-500"
              >
                {/* Header with stars and quote */}
                <div className="flex justify-between items-start w-full gap-1.5">
                  <div className="p-1 bg-foreground/5 rounded-lg flex-shrink-0">
                    <Quote
                      className="w-3.5 h-3.5 text-foreground/50"
                      strokeWidth={1.5}
                    />
                  </div>
                  {renderStars(item.rating)}
                </div>

                {/* Review text */}
                <p className="text-foreground/75 text-xs leading-snug whitespace-normal font-normal line-clamp-3">
                  "{item.text}"
                </p>

                {/* Divider */}
                <div className="w-full h-[0.5px] bg-border/10" />

                {/* Author info */}
                <div className="flex items-center gap-2.5 w-full">
                  <div className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center border border-foreground/15 flex-shrink-0">
                    <span className="text-[9px] font-bold text-foreground/70">
                      {item.initials}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.25 flex-1">
                    <span className="text-[11px] font-bold text-foreground leading-tight">
                      {item.author}
                    </span>
                    <span className="text-[9px] text-foreground/60 font-medium leading-tight">
                      {item.role}
                    </span>
                    <span className="text-[8px] text-foreground/50 uppercase tracking-tight leading-tight">
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second line: Right to Left */}
      </div>
    </section>
  );
};

export default FeedbackMarquee;
