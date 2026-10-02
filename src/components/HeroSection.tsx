import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";

/**
 * Scroll-scrubbed hero. A 120-frame image sequence (public/frames/hero, generated with
 * Veo) is drawn to a canvas as the visitor scrolls through a tall section with a sticky
 * viewport. Portrait screens get a center-cropped mobile set. The first frame ships as a
 * plain <img> in the prerendered HTML, so the hero paints before any JS runs.
 */
const FRAME_COUNT = 120;

type FrameSet = "desktop" | "mobile";
const frameSrc = (set: FrameSet, i: number) =>
  `/frames/hero/${set}/frame_${String(i + 1).padStart(4, "0")}.webp`;
const pickSet = (): FrameSet => (window.innerWidth < window.innerHeight ? "mobile" : "desktop");

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
/** Maps progress `p` within [start, end] to 0..1. */
const ramp = (p: number, start: number, end: number) => clamp01((p - start) / (end - start));

const stats = [
  { value: "4–8 wks", label: "Idea to production release" },
  { value: "50+", label: "Clients served" },
  { value: "100%", label: "Code & IP ownership" },
];

// React 18 doesn't know the camelCase prop yet; the lowercase attribute passes straight through.
const highPriority = { fetchpriority: "high" } as Record<string, string>;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!section || !canvas || !ctx) return;

    let set = pickSet();
    let frames: (HTMLImageElement | undefined)[] = [];
    let drawn = -1;
    let raf = 0;
    let cancelled = false;

    const progress = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      return scrollable > 0 ? clamp01(-rect.top / scrollable) : 0;
    };

    // Nearest loaded frame to the target, so scrolling ahead of the download never blanks.
    const nearestLoaded = (target: number) => {
      for (let d = 0; d < FRAME_COUNT; d++) {
        if (frames[target - d]) return target - d;
        if (frames[target + d]) return target + d;
      }
      return -1;
    };

    const render = (force = false) => {
      const p = progress();
      const idx = nearestLoaded(Math.round(p * (FRAME_COUNT - 1)));
      if (idx !== -1 && (force || idx !== drawn)) {
        const img = frames[idx]!;
        // object-fit: cover
        const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
        const w = img.naturalWidth * scale;
        const h = img.naturalHeight * scale;
        ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
        drawn = idx;
        canvas.style.opacity = "1";
      }

      // Copy choreography: the intro lifts away as the light rises, the outro settles in at the end.
      const intro = 1 - ramp(p, 0.08, 0.38);
      const outro = ramp(p, 0.58, 0.85);
      if (introRef.current) {
        introRef.current.style.opacity = String(intro);
        introRef.current.style.transform = `translate3d(0, ${(1 - intro) * -48}px, 0)`;
        introRef.current.style.pointerEvents = intro < 0.1 ? "none" : "auto";
      }
      if (outroRef.current) {
        outroRef.current.style.opacity = String(outro);
        outroRef.current.style.transform = `translate3d(0, ${(1 - outro) * 32}px, 0)`;
      }
      if (cueRef.current) cueRef.current.style.opacity = String(1 - ramp(p, 0, 0.06));
    };

    // Frames load in order with limited concurrency, so the early ones arrive first.
    const load = (target: FrameSet) => {
      frames = new Array(FRAME_COUNT);
      let next = 0;
      const pump = () => {
        if (cancelled || target !== set || next >= FRAME_COUNT) return;
        const i = next++;
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          if (target !== set) return;
          frames[i] = img;
          render(true);
          pump();
        };
        img.onerror = pump;
        img.src = frameSrc(target, i);
      };
      for (let k = 0; k < 6; k++) pump();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      const nextSet = pickSet();
      if (nextSet !== set) {
        set = nextSet;
        drawn = -1;
        load(set);
      }
      render(true);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => render());
    };

    // Defer the sequence until the page has loaded, so it never competes with the
    // poster image, fonts and JS. Until then the poster <img> covers frame 1.
    const start = () => load(set);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    resize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("load", start);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  // Reduced motion: a single static viewport on the final frame, no scroll scrubbing.
  const poster = reducedMotion ? FRAME_COUNT - 1 : 0;

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className={`relative bg-[hsl(var(--inverse-bg))] ${reducedMotion ? "" : "h-[220vh] md:h-[260vh]"}`}
    >
      <div className="sticky top-0 h-[100svh] min-h-[600px] w-full overflow-hidden">
        <picture aria-hidden>
          <source media="(max-aspect-ratio: 1/1)" srcSet={frameSrc("mobile", poster)} />
          <img
            src={frameSrc("desktop", poster)}
            alt=""
            decoding="async"
            {...highPriority}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        {!reducedMotion && (
          <canvas
            ref={canvasRef}
            aria-hidden
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300"
          />
        )}

        {/* Legibility: darken behind the nav and copy, then fade into the next section */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-[hsl(var(--inverse-bg)/0.85)] to-transparent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />

        {/* Intro — the H1 and primary CTAs */}
        <div
          ref={introRef}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center will-change-transform sm:pt-32 lg:pt-[max(7rem,14vh)]"
        >
          {/* Soft scrim so copy stays readable where it crosses the horizon glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -inset-y-10 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_55%,hsl(var(--inverse-bg)/0.7),transparent_75%)]"
          />
          <div className="mb-6 inline-flex items-center gap-2.5 md:mb-8">
            <span className="hidden h-px w-6 bg-white/40 sm:block" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 min-[400px]:tracking-[0.3em] md:text-xs md:tracking-[0.35em]">
              AI-Accelerated Software Development
            </p>
            <span className="hidden h-px w-6 bg-white/40 sm:block" />
          </div>

          <h1 className="mb-6 text-balance font-display text-[2.2rem] font-bold leading-[1.03] min-[400px]:text-[2.5rem] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5rem]">
            Custom software &amp; AI, built at the{" "}
            <span className="font-serif text-[1.08em] font-normal text-[hsl(var(--primary))]">speed</span> of
            your business.
          </h1>

          <p className="mb-9 max-w-2xl text-balance text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
            ArrLink is an AI development company that turns hard operating problems into
            production-ready software — generative AI apps, AI agents, SaaS platforms and MVPs,
            delivered in weeks at a fraction of traditional cost.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] sm:px-7 sm:tracking-[0.2em] text-[hsl(var(--background))] shadow-[0_0_40px_-8px_hsl(var(--primary)/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/25 bg-white/[0.03] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] sm:px-7 sm:tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/[0.07] sm:w-auto"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-white/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Outro — appears once the eclipse has fully risen */}
        {!reducedMotion && (
          <div
            ref={outroRef}
            className="pointer-events-none absolute inset-x-0 top-0 z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center opacity-0 sm:pt-32 lg:pt-[max(7rem,14vh)]"
          >
            <p className="mb-8 text-balance font-display text-[2rem] font-bold leading-[1.08] tracking-tighter text-white sm:text-5xl md:text-6xl">
              From first prompt to{" "}
              <span className="font-serif text-[1.08em] font-normal text-[hsl(var(--primary-container))]">production.</span>
            </p>
            <div className="grid w-full max-w-3xl grid-cols-3 gap-2.5 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-4 backdrop-blur-md sm:px-5 sm:py-5">
                  <p className="font-display text-lg font-bold tabular-nums text-white sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-[10px] leading-snug text-white/55 sm:text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!reducedMotion && (
          <div ref={cueRef} aria-hidden className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/50">Scroll</span>
            <ArrowDown className="h-3.5 w-3.5 animate-scroll-cue text-white/60" strokeWidth={1.5} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
