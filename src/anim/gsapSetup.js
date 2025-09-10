// /src/anim/gsapSetup.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let registered = false;

/**
 * Registro perezoso y seguro para SSR/HMR.
 * Devuelve gsap + plugins ya registrados (solo en cliente).
 */
export function getGSAP() {
  if (typeof window === "undefined") {
    // Si se ejecuta en SSR, evita crashear
    return { gsap: null, ScrollTrigger: null, ScrollToPlugin: null };
  }
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    registered = true;
  }
  return { gsap, ScrollTrigger, ScrollToPlugin };
}

// Exportamos también por si necesitas tipos/autocompletado en otros módulos
export { gsap, ScrollTrigger, ScrollToPlugin };
