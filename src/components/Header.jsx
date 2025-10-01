// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import TranslateSwitch from "./TranslateSwitch";
import { useLanguage } from "../i18n/LanguageProvider";
import { Menu, X } from "lucide-react";

// ids:
// what
// problem
// value
// call
// agents
// how
// demo video
// integrated
// global
// testimonials
// footer

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
								<a href="#what" className="nav-link">
									{t("nav.what")}
								</a>
							</li>
							<li>
								<a href="#how" className="nav-link">
									{t("nav.agents")}
								</a>
							</li>
							<li>
								<a href="#global" className="nav-link">
									{t("nav.how")}
								</a>
							</li>
							<li>
								<a href="#testimonials" className="nav-link">
									{t("nav.testimonials")}
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}
