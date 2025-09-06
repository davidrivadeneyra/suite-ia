import { useLanguage } from "../i18n/LanguageProvider"
import CornerFrame from "./CornersFrame";



export default function Hero() {

    const { t } = useLanguage();
    return (
	<main className="max-h-full">
			<section className="flex flex-col lg:flex-row gap-14 mb-12">
				<div className="w-full">
					<h1 className="title-bigger pb-4">{t('hero.title')}</h1>
					<p className="descriptions mb-6">{t('hero.subtitle')}</p>	

                    {/* buttons */}
					<div className="flex flex-col md:flex-row gap-4">
						<button className="btn-text-regular btn-dark relative">
							Solicitar demo
                            <CornerFrame className="absolute inset-0 fill-green-500 bg-transparent" />
						</button>
						<button className="btn-text-regular btn-white relative">
							Ver cómo funciona
                            <CornerFrame className="absolute inset-0 fill-green-800 bg-transparent" />
						</button>
					</div>
				</div>

               <div className="w-full flex gap-4 items-stretch">
                    <div className="relative flex-1 rounded-lg overflow-hidden">
                        <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/assets/imgh.png"
                        alt="Hombre identificado robando"
                        />
                    </div>
                    <div className="flex-none w-fit lg:h-full h-96 self-start flex flex-col p-6 bg-white rounded-lg justify-end relative">
                        <p className="text-6xl font-semibold font-title mt-4">+12</p>
                        <p className="descriptions whitespace-nowrap">Clientes satisfechos</p>
                        <CornerFrame className="absolute inset-0 fill-green-800 bg-transparent" />
                    </div>
                </div>

                
				
			</section>
			{/**VIDEO */}
            <video
                className="block w-full h-full object-cover mb-16 rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="auto"
                poster="/assets/video/atelopus-poster.jpg"   // opcional
                aria-hidden="true"                           // opcional si es decorativo
                >
                <source src="/assets/video/atelopus.mp4" type="video/mp4" />
                {/* <source src="/assets/video/atelopus.webm" type="video/webm" /> */}
            </video>
		</main>
    )
}