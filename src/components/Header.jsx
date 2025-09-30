// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import TranslateSwitch from "./TranslateSwitch";
import { useLanguage } from "../i18n/LanguageProvider";
import { Menu, X } from "lucide-react";

export default function Header() {
	const { t } = useLanguage();
	return (
		<>
			<header className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md shadow-sm">
				<div className="section-max-width flex justify-between items-center py-3 px-12 md:px-12 bg-transparent">
					<div className="flex flex-row gap-10 ">
						<a href="/">
							<div className="flex items-center gap-2">
								<img
									src="/assets/brand/logo.svg"
									alt="Logo"
									className="max-h-9"
								/>
							</div>
						</a>

						<TranslateSwitch />
					</div>
					<nav>
						<ul className="flex flex-row items-end gap-6 ">
							<li>
								<a href="#about" className="nav-link">
									{t("nav.about")}
								</a>
							</li>
							<li>
								<a href="#how-it-works" className="nav-link">
									{t("nav.features")}
								</a>
							</li>
							<li>
								<a href="#benefits" className="nav-link">
									{t("nav.benefits")}
								</a>
							</li>
							<li>
								<a href="#contact" className="nav-link">
									{t("nav.contact")}
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}
