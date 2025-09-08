import React, { useEffect, useRef, useState } from "react";

export default function CornerFrame({
	className = "",
	color = "#22C55E",
	strokeColor,
	pathClassName = "",
	strokeWidth = 2,
	radius = 2,
	cornerSize = 8,
	/** Controla si el componente reacciona a hover del contenedor. */
	hover = true,
	/** Opcional: CSS selector para enganchar el hover a un ancestro específico.
	 *  Si no se provee, usa el padre directo del CornerFrame.
	 */
	hoverTargetSelector,
}) {
	const [isHover, setIsHover] = useState(false);
	const wrapperRef = useRef(null);

	useEffect(() => {
		// Si hover está desactivado, no agregamos listeners y forzamos estado "no hover"
		if (!hover) {
			setIsHover(false);
			return;
		}

		const root = wrapperRef.current;
		if (!root) return;

		const target =
			(hoverTargetSelector
				? root.closest(hoverTargetSelector)
				: root.parentElement) || root.parentElement;

		if (!target) return;

		const onEnter = () => setIsHover(true);
		const onLeave = () => setIsHover(false);

		target.addEventListener("pointerenter", onEnter, { passive: true });
		target.addEventListener("pointerleave", onLeave, { passive: true });

		return () => {
			target.removeEventListener("pointerenter", onEnter);
			target.removeEventListener("pointerleave", onLeave);
		};
	}, [hover, hoverTargetSelector]);

	const s = strokeWidth / 2;
	const r = radius;
	const inner = r + s;
	const d = `M ${
		cornerSize - s
	} ${s} H ${inner} A ${r} ${r} 0 0 0 ${s} ${inner} V ${cornerSize - s}`;

	const commonSvg = {
		width: cornerSize,
		height: cornerSize,
		viewBox: `0 0 ${cornerSize} ${cornerSize}`,
		fill: "none",
		"aria-hidden": true,
	};

	const resolvedStroke = strokeColor ?? color;

	const pathProps = {
		d,
		stroke: resolvedStroke,
		strokeWidth,
		vectorEffect: "non-scaling-stroke",
		strokeLinecap: "butt",
		strokeLinejoin: "round",
		className: pathClassName,
	};

	const posBase =
		"absolute transition-all duration-200 ease-in-out will-change:transform";

	// Solo “hoverea” si hover=true y el estado lo indica
	const hovered = hover && isHover;

	const tl = `${hovered ? "top-[8px] left-[8px]" : "top-[6px] left-[6px]"}`;
	const tr = `${hovered ? "top-[8px] right-[8px]" : "top-[6px] right-[6px]"}`;
	const bl = `${
		hovered ? "bottom-[8px] left-[8px]" : "bottom-[6px] left-[6px]"
	}`;
	const br = `${
		hovered ? "bottom-[8px] right-[8px]" : "bottom-[6px] right-[6px]"
	}`;

	return (
		<div
			ref={wrapperRef}
			className={`pointer-events-none select-none ${className} absolute top-0 right-0 bottom-0 left-0`}
		>
			<span className={`${posBase} ${tl}`}>
				<svg {...commonSvg}>
					<path {...pathProps} />
				</svg>
			</span>

			<span className={`${posBase} ${tr}`}>
				<svg {...commonSvg}>
					<g transform={`scale(-1,1) translate(-${cornerSize} 0)`}>
						<path {...pathProps} />
					</g>
				</svg>
			</span>

			<span className={`${posBase} ${bl}`}>
				<svg {...commonSvg}>
					<g transform={`scale(1,-1) translate(0 -${cornerSize})`}>
						<path {...pathProps} />
					</g>
				</svg>
			</span>

			<span className={`${posBase} ${br}`}>
				<svg {...commonSvg}>
					<g
						transform={`scale(-1,-1) translate(-${cornerSize} -${cornerSize})`}
					>
						<path {...pathProps} />
					</g>
				</svg>
			</span>
		</div>
	);
}
