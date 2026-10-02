import { HeartPulse, Rocket, ShieldCheck, Star, Stethoscope, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";

type Testimonial = {
  text: string;
  author: string;
  company: string;
  role: string;
  rating: number;
  initials: string;
  project: string;
  icon: LucideIcon;
  /** Optional headshot; initials are shown when it's missing. */
  photo?: string;
};

const testimonials: Testimonial[] = [
  {
    text: "ArrLink built Imagine.bo into exactly what we envisioned — a platform that turns a single prompt into a fully deployed, production-ready application. Their engineering depth and speed of execution is unmatched.",
    author: "Sushil Kumar",
    company: "Synergylabs",
    role: "CEO",
    rating: 5,
    initials: "SK",
    project: "Built Imagine.bo, a prompt-to-production platform",
    icon: Rocket,
  },
  {
    text: "Krinos AI is redefining dental diagnostics — and ArrLink has been instrumental in building the AI backbone that powers our HIPAA-compliant platform. From CBCT analysis to automated insurance claims, their precision engineering is setting a new benchmark for oral healthcare.",
    author: "Krishna Gupta",
    company: "Krinos AI",
    role: "CEO",
    rating: 5,
    initials: "KG",
    project: "AI-powered dental diagnostics platform",
    icon: Stethoscope,
  },
  {
    text: "The ECG arrhythmia prediction model ArrLink delivered for Mythyaverse was clinically precise and production-ready. They translated complex medical requirements into an AI system that genuinely saves lives.",
    author: "Anmol Gupta",
    company: "Mythyaverse",
    role: "CEO",
    rating: 5,
    initials: "AG",
    project: "ECG arrhythmia prediction model",
    icon: HeartPulse,
  },
  {
    text: "Working with ArrLink on our ML-driven cybersecurity research was exceptional. They built a robust fake review detection system based on network traffic analysis that exceeded our academic benchmarks.",
    author: "Saptadeepa Kalita",
    company: "Sharda University",
    role: "Assistant Professor",
    rating: 5,
    initials: "SK",
    project: "ML cybersecurity & fake-review detection",
    icon: ShieldCheck,
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-2.5" aria-label={`Rated ${rating} out of 5`}>
    <div className="flex gap-1" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 md:h-5 md:w-5 ${i < rating ? "fill-primary text-primary" : "text-foreground/15"}`}
        />
      ))}
    </div>
    <span className="text-sm font-medium tabular-nums text-foreground/80">{rating.toFixed(1)}</span>
  </div>
);

const TestimonialCard = ({ t, index }: { t: Testimonial; index: number }) => {
  const ref = useReveal<HTMLElement>({ threshold: 0.2 });
  return (
    <figure
      ref={ref}
      className="reveal group relative rounded-2xl p-px bg-gradient-to-b from-primary/60 via-primary/15 to-primary/45
                 shadow-[0_0_60px_-24px_hsl(var(--primary)/0.7)] hover:shadow-[0_0_70px_-18px_hsl(var(--primary)/0.85)]
                 transition-shadow duration-500"
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div className="flex h-full flex-col rounded-[calc(1rem-1px)] bg-gradient-to-b from-[hsl(248_45%_9%)] to-[hsl(248_50%_5%)] p-6 sm:p-8 md:p-10">
        <div className="mb-7 flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
          <div className="flex items-center gap-4">
            <div className="shrink-0 rounded-full bg-gradient-to-br from-primary to-primary-container p-[2px]">
              {t.photo ? (
                <img src={t.photo} alt="" loading="lazy" className="h-14 w-14 rounded-full object-cover md:h-16 md:w-16" />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(248_45%_8%)] md:h-16 md:w-16">
                  <span className="font-display text-base font-bold tracking-tight text-foreground md:text-lg">{t.initials}</span>
                </div>
              )}
            </div>
            <figcaption>
              <p className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">{t.author}</p>
              <p className="mt-0.5 text-sm text-foreground/55">
                {t.role}, {t.company}
              </p>
            </figcaption>
          </div>
          <Stars rating={t.rating} />
        </div>

        <blockquote className="flex gap-4">
          <span aria-hidden className="-mt-1 shrink-0 font-serif text-5xl leading-none text-primary md:text-6xl">
            &ldquo;
          </span>
          <p className="text-base leading-relaxed text-foreground/85 md:text-lg">{t.text}&rdquo;</p>
        </blockquote>

        <div className="mt-auto flex items-center gap-3 pt-8">
          <t.icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/55 md:text-xs">
            {t.project}
          </span>
        </div>
      </div>
    </figure>
  );
};

const TestimonialsSection = () => {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="relative overflow-hidden border-y border-foreground/10 bg-surface-container-low px-6 py-28">
      <AmbientFloor />
      {/* Horizon glow echoing the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,hsl(var(--primary)/0.16),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div ref={headerRef} className="reveal mb-16 flex flex-col items-center text-center">
          <div className="section-marker mb-6 justify-center">
            <span className="h-px w-6 bg-foreground/40" />
            <span>Client Reviews</span>
            <span className="h-px w-6 bg-foreground/40" />
          </div>
          <h2 className="mb-5 text-balance font-display text-3xl font-bold tracking-tighter md:text-5xl">
            Trusted by teams building{" "}
            <span className="font-serif text-[1.08em] font-normal">at scale.</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/55 md:text-base">
            Fifty-plus organizations across Asia rely on our engineering. A glimpse of the work in
            their words.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
