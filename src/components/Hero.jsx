import { useLanguage } from "../i18n/LanguageProvider"



export default function Hero() {

    const { t } = useLanguage();
    return (
	<hero className="max-h-full mb-16 ">
			<section className="grid grid-cols-1 grid-rows-[2fr_1.3_1fr] md:grid-cols-[1.8fr_1fr] md:grid-rows-[.5fr_1fr] lg:grid-cols-[2fr_1.3fr_1fr] lg:grid-rows-1 items-stretch mb-9 gap-4">{/** EN CELULAR 1 COLUMNA-EN TABLET 2 ROWS 2 COLS(PERO SOLO UN OBJETO EN LA PRIMERA COL) EN DESK 3 COLS*/}
				<div className="flex flex-col h-full md:col-span-2 md:col-start-1 md:row-start-1 lg:col-span-1 mb-9 pr-0 md:pr-0 lg:pr-5">
					<h1 className="font-title text-6xl font-semibold leading-none flex justify-start mb-7">{t('hero.title')}</h1>
					<p className="descriptions mb-6">{t('hero.subtitle')}</p>	
					<div className="flex flex-col md:flex-row gap-4">
						{/**BOTONES */}
						<button className="btn-text-regular btn-dark">
							Solicitar demo
						</button>
						<button className="btn-text-regular btn-white">
							Ver cómo funciona
						</button>
					</div>
				</div>
				{/**Imagen */}
				<div className="md:row-start-2 lg:row-start-auto mb-9">
					<img src="/assets/imgh.png" alt="Hombre identificado robando" className="rounded-lg shadow-lg max-w-full max-h-full"/>
				</div>{/**CLIENTES SATISFECHOS */}
				<div className="bg-white rounded-lg shadow-md pl-6 pb-6 flex flex-col justify-end item-start border md:row-start-2 lg:row-start-auto mb-9">
					<p className="text-6xl font-semibold font-title mt-4">+12</p>
					<p className="font-descriptions">Clientes satifechos</p>
				</div>
			</section>
			{/**VIDEO */}
			<img src="assets/vidh.png"className=" hidden lg:block w-full h-full object-cover mb-16"/>
		</hero>
    )
}