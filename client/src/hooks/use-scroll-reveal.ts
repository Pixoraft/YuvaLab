import { useEffect, useRef } from "react";

export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealTargets = (targets: NodeListOf<Element>) => {
      targets.forEach((t) => {
        const rect = t.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          t.classList.add("revealed");
        } else {
          observer.observe(t);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px", ...options }
    );

    const targets = el.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .count-animate"
    );
    revealTargets(targets);

    return () => observer.disconnect();
  }, []);

  return ref;
}
