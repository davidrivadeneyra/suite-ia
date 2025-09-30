import { useLanguage } from "../i18n/LanguageProvider";
import React, { useRef, useLayoutEffect } from "react";
import ButtonLink from "./ButtonLink";
import OrbitAnimation from "./OrbitAnimation";
import { Cctv } from "lucide-react";
import { usePageAnimations } from "../anim/usePageAnimations";
import { gsap } from "../anim/gsapSetup";

export default function Hero() {
	const { t } = useLanguage();

	// Refs
	const heroRef = useRef(null);
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);
	const buttonsRef = useRef(null);
	const imageRef = useRef(null);
	const statsRef = useRef(null);
	const videoRef = useRef(null);

	useLayoutEffect(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
			return;

		// Limita todo al subtree de heroRef y limpia seguro en StrictMode
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: { ease: "power2.out", duration: 0.6 },
			});

			// Añade al timeline solo si el nodo existe
			const add = (el, vars, pos) => {
				if (!el) return;
				tl.from(el, vars, pos);
			};

			add(titleRef.current, { y: 24, opacity: 0 });
			add(subtitleRef.current, { y: 16, opacity: 0 }, "-=0.35");

			if (buttonsRef.current?.children?.length) {
				const kids = Array.from(buttonsRef.current.children);
				tl.from(kids, { y: 12, opacity: 0, stagger: 0.08 }, "-=0.30");
			}

			add(imageRef.current, { scale: 0.98, opacity: 0 }, "-=0.20");
			add(statsRef.current, { y: 20, opacity: 0 }, "-=0.20");

			// Reveal del VIDEO cuando entra al viewport (solo si existe)
			if (videoRef.current) {
				gsap.from(videoRef.current, {
					opacity: 0,
					y: 24,
					duration: 0.6,
					ease: "power2.out",
					scrollTrigger: {
						trigger: videoRef.current,
						start: "top 85%",
						once: true,
					},
				});
			}
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<main className="w-full bg-gradient-dark hero-height flex flex-col justify-end">
			<div className="absolute top-0 w-full h-full overflow-hidden">
				<div className="section-max-width">
					<OrbitAnimation
						className="absolute inset-0 w-full -translate-y-1/2 scale-50 lg:scale-50"
						enableScrollSpeed={true}
						speed={1.2}
						baseSpeed={1.2}
						maxBoostDown={0.8} // acelera hasta ~2.0 bajando
						maxBoostUp={0.6} // puede bajar hasta ~0.6 subiendo
						responsiveness={8000} // se necesitan scrolls largos para llegar al máximo
						decayDelay={0} // espera un poquito más antes de volver
						decayDuration={1} // regresa lento y fluido al valor base
					/>
				</div>
			</div>
			<div className="relative section-max-width flex gap-6 pb-16 ">
				<div ref={heroRef} className="flex flex-col justify-end">
					<h4 className="subtitle-dark subtitle-uppercase pb-6">
						{t("section.1")}
					</h4>
					<h1 ref={titleRef} className="title-bigger title-dark">
						{t("hero.title")}
					</h1>
				</div>
				<div
					ref={buttonsRef}
					className="w-full flex flex-col justify-end"
				>
					<div>
						<p
							ref={subtitleRef}
							className="description-dark descriptions-base mb-6"
						>
							{t("hero.desc")}
						</p>

						<div className="w-full flex flex-col sm:flex-row gap-4">
							<ButtonLink
								href="#form"
								copy={t("hero.cta.primary")}
								variant="brand"
							/>
							<ButtonLink
								href="#how-it-works"
								copy={t("hero.cta.secondary")}
								variant="ghostDark"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
