import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "./gsapSetup";

export function usePageAnimations({ headerRef, heroRef, videoRef }) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Respeta reduce-motion
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Scope seguro para React (evita dobles en StrictMode)
    const ctx = gsap.context(() => {
      // Intro: Header → Hero → Video
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
      });

      tl.from(headerRef.current, { y: -20, opacity: 0 })
        .from(heroRef.current,   { y:  20, opacity: 0 }, ">-0.1")
        .from(videoRef.current,  { scale: 0.98, opacity: 0 }, ">-0.1");

      // On-scroll: revela en batch cualquier .reveal-y
      ScrollTrigger.batch(".reveal-y", {
        start: "top 80%",
        once: true, // anima solo una vez
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 24, opacity: 0 },
            {
              y: 0, opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              stagger: { each: 0.08 },
            }
          ),
      });

      // Alternativa para “fade-in” simple
      ScrollTrigger.batch(".reveal-fade", {
        start: "top 85%",
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power1.out", stagger: 0.06 }
          ),
      });
    });

    return () => ctx.revert();
  }, [headerRef, heroRef, videoRef]);
}
