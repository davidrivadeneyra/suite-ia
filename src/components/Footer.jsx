import React from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { SocialIcon } from "react-social-icons";

export default function Footer({ className = "" }) {
  const { t } = useLanguage();

  // Año dinámico
  const currentYear = new Date().getFullYear();

  // Teléfono y email
  const phoneText = t("footer.contact.phone");
  const phoneHref = phoneText.replace(/[^\d+]/g, "");
  const mailTo = t("footer.contact.email");
  const mailToLink = `mailto:${mailTo}`;

  // Reemplaza cualquier año de 4 dígitos dentro del copy por el año actual
  // Ej: "© 2025 ATELOPUS. All rights reserved." -> "© 2026 ATELOPUS. All rights reserved."
  const copyRaw = t("footer.copy");
  const copyText = copyRaw.replace(/\b(19|20)\d{2}\b/g, String(currentYear));

  return (
    <>
      <footer
       
        className={`bg-white flex flex-col lg:flex-row p-6 md:p-16  mb-4 gap-28 rounded-lg ${className} relative`}
      >

        {/* Marca */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 pb-8">
            <div className="flex items-center gap-2">
              <img src="../assets/logo.svg" alt="Logo" className="max-h-9" />
              <span className="title-smaller">Atelopus</span>
            </div>
            <p className="descriptions-sm">{copyText}</p>
          </div>

          {/* Redes */}
          <div className="flex gap-4">
            <SocialIcon
              fallback="X"
              url="https://x.com/darivadeneyra"
              bgColor="#171717"
              fgColor="#FFFFFF"
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              fallback="Linkedin"
              url="https://linkedin.com/in/davidrivadeneyra/"
              bgColor="#171717"
              fgColor="#FFFFFF"
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              fallback="Instagram"
              url="https://www.instagram.com/darivadeneyra"
              bgColor="#171717"
              fgColor="#FFFFFF"
              style={{ height: 32, width: 32 }}
            />
          </div>
        </div>

        {/* Columnas */}
        <div className="flex flex-col md:flex-row gap-14">
          {/* Producto */}
          {/* <div className="py-3">
            <h2 className="title-tiny pb-6">{t("footer.product.title")}</h2>
            <div className="flex flex-col gap-2">
              <p className="descriptions-sm">{t("footer.product.about")}</p>
              <p className="descriptions-sm">{t("footer.product.features")}</p>
              <p className="descriptions-sm">{t("footer.product.benefits")}</p>
              <p className="descriptions-sm">{t("footer.product.contact")}</p>
            </div>
          </div> */}

          {/* Contacto */}
          <div className="py-3">
            <h2 className="title-tiny pb-6">{t("footer.contact.title")}</h2>
            <div className="flex flex-col gap-2">
              <a className="descriptions-sm hover:underline" href={mailToLink}>
                {t("footer.contact.email")}
              </a>
              <a href={`tel:${phoneHref}`} className="hover:underline descriptions-sm">
                {phoneText}
              </a>
              <address className="descriptions-sm not-italic">
                {t("footer.contact.address")}
              </address>
            </div>
          </div>

          {/* Legal */}
          <div className="py-3">
            <h2 className="title-tiny pb-6">{t("footer.legal.title")}</h2>
            <div className="flex flex-col gap-2">
              <p className="descriptions-sm">{t("footer.legal.terms")}</p>
              <p className="descriptions-sm">{t("footer.legal.privacy")}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Barra inferior centrada: usa el mismo copy dinámico */}
      <div className="flex justify-center">
        <p className="descriptions-sm text-neutral-400">{copyText}</p>
      </div>
    </>
  );
}
