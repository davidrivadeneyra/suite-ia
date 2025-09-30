// src/components/BenefitCard.jsx
export default function BenefitCard({
	title = "50% (MAR-IA).",
	description = "Ventas más rápidas reduce ciclos hasta un",
	icon3d = "/assets/ias/cel-ia.webp",
	emoji = "/assets/icons3D/bank.webp",
	className = "",
}) {
	return (
		<section
			className={`relative overflow-hidden rounded-[28px] p-6 md:p-8 
                  bg-white/5 backdrop-blur-xl ring-1 ring-white/10
                  text-white ${className} w-full`}
		>
			{/* Contenido */}
			<div className="flex items-center gap-6 md:gap-10">
				{/* Columna izquierda: emoji + textos */}
				<div className="flex-1 min-w-0">
					<div className="text-5xl md:text-6xl leading-none mb-6 select-none">
						<img
							src={emoji}
							alt="Icono 3D"
							className="h-20 w-auto pointer-events-none"
							draggable={false}
						/>
					</div>

					<p className="description-base description-dark pb-2">
						{description}
					</p>

					<h3 className="title-regular title-dark">
						{title}
					</h3>
				</div>

				{/* Columna derecha: icono 3D */}
				<div className="shrink-0 relative">
					<img
						src={icon3d}
						alt="Icono 3D"
						className="h-44 w-auto select-none pointer-events-none"
						draggable={false}
					/>
				</div>
			</div>

			{/* Sutileza: borde interior suave */}
			<div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
		</section>
	);
}
