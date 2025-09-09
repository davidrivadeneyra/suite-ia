import React, { useCallback } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import CornerFrame from "./CornersFrame";

export default function ContactForm() {
	// Cambia este correo al de tu equipo/comercial
	const { t } = useLanguage();
	const MAIL_TO = "hello@atelopus.ai";

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);

		const nombre = (fd.get("nombre") || "").toString().trim();
		const empresa = (fd.get("empresa") || "").toString().trim();
		const pais = (fd.get("pais") || "").toString().trim();
		const email = (fd.get("email") || "").toString().trim();
		const telefono = (fd.get("telefono") || "").toString().trim();
		const mensaje = (fd.get("mensaje") || "").toString().trim();

		const subject = `Demo request – ${nombre} (${empresa})`;
		const body = [
			`Name/Nombre: ${nombre}`,
			`Company/Empresa: ${empresa}`,
			`Country/País: ${pais}`,
			`Email: ${email}`,
			`Phone/Teléfono: ${telefono}`,
			"",
			"Message/Mensaje:",
			mensaje,
		].join("\n");

		const mailto = `mailto:${MAIL_TO}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto; // abre el UI de correo del dispositivo
	}, []);

	return (
		<form
			onSubmit={handleSubmit}
			className="grid grid-cols-1 md:grid-cols-2 gap-5"
		>
			{/* Nombre */}
			<div className="md:col-span-2">
				<label className="descriptions-sm mb-2 block">
					{t("form.name")}
				</label>
				<input
					type="text"
					name="nombre"
					placeholder="Jon Doe"
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
				/>
			</div>

			{/* Empresa / País */}
			<div>
				<label className="descriptions-sm mb-2 block">
					{t("form.company")}
				</label>
				<input
					type="text"
					name="empresa"
					placeholder="Transmira INC"
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
				/>
			</div>

			<div>
				<label className="descriptions-sm mb-2 block">
					{t("form.country")}
				</label>
				<input
					type="text"
					name="pais"
					placeholder="Panamá"
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
				/>
			</div>

			{/* Email / Teléfono */}
			<div>
				<label className="descriptions-sm mb-2 block">
					{t("form.email")}
				</label>
				<input
					type="email"
					name="email"
					placeholder="jon@mail.com"
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
				/>
			</div>

			<div>
				<label className="descriptions-sm mb-2 block">
					{t("form.phone")}
				</label>
				<input
					type="tel"
					name="telefono"
					placeholder="88 999 000 888"
					required
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
				/>
			</div>

			{/* Mensaje */}
			<div className="md:col-span-2">
				<label className="descriptions-sm mb-2 block">
					{t("form.message")}
				</label>
				<textarea
					name="mensaje"
					placeholder={t("form.placeholder")}
					required
					rows="4"
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-none"
				></textarea>
			</div>

			{/* Botón */}
			<button
				type="submit"
				className="btn-text-regular btn-dark relative"
			>
				{t("hero.demo")}
				<CornerFrame
					className="text-green-500"
					strokeColor="currentColor"
				/>
			</button>
		</form>
	);
}
