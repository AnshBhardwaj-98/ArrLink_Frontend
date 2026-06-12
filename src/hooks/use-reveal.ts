import { useEffect, useRef } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>(opts: Options = {}) {
  const ref = useRef<T | null>(null);
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
