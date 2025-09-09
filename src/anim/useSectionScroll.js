// src/anim/useSectionScroll.js
import { useCallback } from "react";
import { gsap } from "./gsapSetup";

export function useSectionScroll(defaultOffset = 0, defaultDuration = 0.8) {
  const scrollToId = useCallback(
    (id, opts = {}) => {
      const el = document.getElementById(id);
      if (!el) return;

      const offset = opts.offset ?? defaultOffset;
      const duration = opts.duration ?? defaultDuration;

      // GSAP “nice” scroll
      if (gsap?.to) {
        gsap.to(window, {
          duration,
          ease: "power2.out",
          scrollTo: { y: el, offsetY: offset },
        });
        return;
      }

      // Fallback nativo
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (offset) {
        // Compensa el offset tras el scrollIntoView
        window.scrollBy({ top: -offset, behavior: "smooth" });
      }
    },
    [defaultOffset, defaultDuration]
  );

  return { scrollToId };
}
