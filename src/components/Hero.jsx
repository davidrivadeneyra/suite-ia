import { useLanguage } from "../i18n/LanguageProvider";
import React, { useRef, useLayoutEffect } from "react";
import CornerFrame from "./CornersFrame";
import ButtonLink from "./ButtonLink";
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
		<main className="max-h-full pt-24 md:pt-0">
			<section
				ref={heroRef}
				className="flex flex-col lg:flex-row gap-14 mb-12"
			>
				<div className="w-full">
					<h1 ref={titleRef} className="title-bigger pb-4">
						{t("hero.title")}
					</h1>

					<p ref={subtitleRef} className="descriptions mb-6">
						{t("hero.subtitle")}
					</p>

					{/* Buttons */}
					<div
						ref={buttonsRef}
						className="flex flex-col md:flex-row gap-4"
					>
						<ButtonLink
							href="#form"
							copy={t("hero.demo")}
							variant="dark"
						/>
						<ButtonLink
							href="#how-it-works"
							copy={t("hero.how")}
							variant="white"
						/>
					</div>
				</div>

				<div className="w-full flex gap-4 items-stretch">
					<div
						ref={imageRef}
						className="relative flex-1 rounded-lg overflow-hidden"
					>
						<img
							className="absolute inset-0 w-full h-full object-cover"
							src="/assets/imgh.png"
							alt="Hombre identificado robando"
						/>
					</div>

					<div
						ref={statsRef}
						className="w-fit lg:h-full h-96 self-start flex flex-col justify-between p-6 bg-white rounded-lg relative items-end"
					>
						<Cctv
							className="text-green-600 mb-2 scale-x-[-1]"
							size={56}
						/>
						<div className="flex flex-col items-start gap-4">
							<p className="text-6xl font-semibold font-title mt-4">
								+12
							</p>
							<p className="descriptions-sm whitespace-nowrap">
								{t("hero.clients_desc")}
							</p>
							<CornerFrame className="absolute inset-0 fill-green-800 bg-transparent" />
						</div>
					</div>
				</div>
			</section>

			{/* VIDEO */}
			<video
				ref={videoRef}
				className="block w-full h-full object-cover mb-16 rounded-lg"
				autoPlay
				loop
				muted
				playsInline
				controls={false}
				preload="auto"
				poster="/assets/video/atelopus-poster.jpg"
				aria-hidden="true"
			>
				<source src="/assets/video/atelopus.mp4" type="video/mp4" />
				{/* <source src="/assets/video/atelopus.webm" type="video/webm" /> */}
			</video>
		</main>
	);
}
