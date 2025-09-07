import AccordionItem from "./components/AccordionItem";
import { useLanguage } from './i18n/LanguageProvider';
import Header from "./components/Header";
import Hero from "./components/Hero";
import GridOverlay from "./components/GridOverlay";

function App() {
  const { t } = useLanguage();

  return (
    <>
      <div className=" px-4 pt-4 md:px-12 md:pt-12 max-w-[1350px] mx-auto relative">
        <GridOverlay/>

        <Header />
        <Hero />

        <main>
          {/* ABOUT */}
          <section id="about" className=" flex gap-11 max-h-max flex-col lg:flex-row mb-16">
            <div className="bg-black p-6 md:p-16 rounded-lg border-2 flex flex-col gap-6 lg:flex-[2.1]">
              <h2 className="title-big font-semibold text-white">¿Qué es Atelopus?</h2>
              <p className="descriptions text-white max-w-2xl">
                Un framework modular de analítica de video con IA en tiempo real.
                Funciona sobre tus cámaras observándolas 24/7 y te envía alertas 
                claras con video cuando detecta movimientos o comportamientos sospechosos
                (por ejemplo: ocultar productos, merodeo, acceso no autorizado). 
                Funciona con tus cámaras actuales y puedes usarla en tu local o en la nube.
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 p-6 md:p-16 flex flex-col justify-end items-start lg:flex-[1] gap-3">
              <img src="/assets/logo.svg" alt="LOGO" className="max-h-20"/>
              <h2 className="title-small font-semibold">¿Cómo te ayuda?</h2>
              <p className="descriptions">
                Reduce pérdidas, mejora la seguridad y ahorra horas de revisión manual 
                al convertir video en acciones.
              </p>
            </div>
          </section>

          {/* MÓDULOS CLAVE */}
          <section className="flex flex-col gap-20 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-white mb-16">
            <div className="flex flex-col lg:w-1/2 gap-10">
              <h2 className="title-regular">Módulos clave</h2>
              <img src="assets/vidh.png" className="w-full max-h-[463px] rounded-lg"/>
            </div>

            <div className="lg:w-1/2">
              <AccordionItem title="Robos en Tiendas (Retail Theft)">
                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Qué hace:</h3>
                </div>
                <p className="descriptions mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video.</p>

                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Alertas Típicas:</h3>
                </div>
                <p className="descriptions mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>

                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Impacto:</h3>
                </div>
                <p className="descriptions mb-4">Menos merma y menos horas revisando grabaciones.</p>
              </AccordionItem>

              <AccordionItem title="Reconocimiento facial (IA)">
                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Qué hace:</h3>
                </div>
                <p className="descriptions mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video.</p>

                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Alertas Típicas:</h3>
                </div>
                <p className="descriptions mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>
              </AccordionItem>

              <AccordionItem title="PH / Accesos y Perímetro">
                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Qué hace:</h3>
                </div>
                <p className="descriptions mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video.</p>

                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Alertas Típicas:</h3>
                </div>
                <p className="descriptions mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>
              </AccordionItem>

              <AccordionItem title="Merodeo (Loitering) en áreas sensibles">
                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Qué hace:</h3>
                </div>
                <p className="descriptions mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video.</p>

                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Alertas Típicas:</h3>
                </div>
                <p className="descriptions mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>
              </AccordionItem>

              <AccordionItem title="LPR – Placas y Control de Vehículos">
                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Qué hace:</h3>
                </div>
                <p className="descriptions mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video.</p>

                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-semibold">Alertas Típicas:</h3>
                </div>
                <p className="descriptions mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>
              </AccordionItem>
            </div>
          </section>

          {/* CÓMO FUNCIONA */}
          <section id="features" className="space-y-11 mb-16">
            <div className="flex flex-col ml-6 md:ml-16 box-border md:w-[443px] ">
              <h2 className="title-big font-semibold mb-4">Cómo funciona</h2>
              <span className="descriptions mb-6">Breve descripción de la herramienta va aquí</span>
              <div className="flex flex-col gap-4 md:flex-row ">
                <button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
                  Solicitar demo
                </button>
                <button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
                  Ver cómo funciona
                </button>
              </div>
            </div>

            {/* GRID CÓMO FUNCIONA */}
            <div className="grid grid-cols-1 grid-rows-1 gap-y-8 md:grid-cols-2 md:grid-rows-3 md:gap-y-12 md:gap-x-12 
                lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-12 lg:gap-x-12 [&>*]:m-0 px-6 md:px-16 pb-16">
              {/* Tarjeta 1 */}
              <div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
                <div className="flex justify-between">
                  <div className="p-7">
                    <img src="assets/icon1.svg" alt="" />
                  </div>
                  <div className="relative w-16 h-16 flex items-center justify-center m-7">
                    <img src="assets/esquinas.svg" alt="marco" className="absolute inset-0 w-full h-full"/>
                    <span>1</span>
                  </div>
                </div>
                <h3 className="title-smaller px-7 pb-7 w-4/5">Conecta tus cámaras</h3>
              </div>

              {/* Tarjeta 2 */}
              <div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
                <div className="flex justify-between">
                  <div className="p-7">
                    <img src="assets/icon2.svg" alt="" />
                  </div>
                  <div className="relative w-16 h-16 flex items-center justify-center m-7">
                    <img src="assets/esquinas.svg" alt="marco" className="absolute inset-0 w-full h-full"/>
                    <span>2</span>
                  </div>
                </div>
                <h3 className="title-smaller px-7 pb-7 w-4/5">Edge analiza en tiempo real</h3>
              </div>

              {/* Tarjeta 3 */}
              <div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
                <div className="flex justify-between">
                  <div className="p-7">
                    <img src="assets/icon3.svg" alt="" />
                  </div>
                  <div className="relative w-16 h-16 flex items-center justify-center m-7">
                    <img src="assets/esquinas.svg" alt="marco" className="absolute inset-0 w-full h-full"/>
                    <span>3</span>
                  </div>
                </div>
                <h3 className="title-smaller px-7 pb-7 w-4/5">Reglas y listas</h3>
              </div>

              {/* Tarjeta 4 */}
              <div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
                <div className="flex justify-between">
                  <div className="p-7">
                    <img src="assets/icon4.svg" alt="" />
                  </div>
                  <div className="relative w-16 h-16 flex items-center justify-center m-7">
                    <img src="assets/esquinas.svg" alt="marco" className="absolute inset-0 w-full h-full"/>
                    <span>4</span>
                  </div>
                </div>
                <h3 className="title-smaller px-7 pb-7 w-4/5">Métricas &amp; reportes</h3>
              </div>

              {/* Tarjeta 5 */}
              <div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
                <div className="flex justify-between">
                  <div className="p-7">
                    <img src="assets/icon5.svg" alt="" />
                  </div>
                  <div className="relative w-16 h-16 flex items-center justify-center m-7">
                    <img src="assets/esquinas.svg" alt="marco" className="absolute inset-0 w-full h-full"/>
                    <span>5</span>
                  </div>
                </div>
                <h3 className="title-smaller px-7 pb-7 w-4/5">Automatización (puertas/radio)</h3>
              </div>

              {/* Tarjeta 6 */}
              <div className=" w-full lg:min-w-80 lg:h-48 md:min-w-72 md:h-48 bg-white rounded-lg border-green-700 border-2 ">
                <div className="flex justify-between">
                  <div className="p-7">
                    <img src="assets/icon6.svg" alt="" />
                  </div>
                  <div className="relative w-16 h-16 flex items-center justify-center m-7">
                    <img src="assets/esquinas.svg" alt="marco" className="absolute inset-0 w-full h-full"/>
                    <span>6</span>
                  </div>
                </div>
                <h3 className="title-smaller px-7 pb-7 w-4/5">Métricas &amp; reportes</h3>
              </div>
            </div>
          </section>

          {/* BENEFICIOS */}
          <section id="benefits" className=" bg-black rounded-lg mb-16">
            <div className="flex flex-col mx-6 md:ml-16 pt-6 md:pt-16 md:w-[443px] ">
              <h2 className="title-big font-semibold text-white mb-4">Beneficios</h2>
              <span className="descriptions text-white mb-6">Breve descripción de la herramienta va aquí</span>
              <div className="flex flex-col gap-4 md:flex-row mb-10">
                <button className="bg-green-600 text-white py-2 px-2 font-bold rounded-lg border-green-600 border-2 md:flex-[1.2]">
                  Solicitar demo
                </button>
                <button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
                  Ver cómo funciona
                </button>
              </div>
            </div>

            {/* GRID BENEFICIOS */}
            <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 px-6 md:px-16 pb-16 mx-auto gap-4">
              <div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
                <span className="px-7">1</span>
                <h3 className="title-small p-7 w-4/5">No cambias cámaras</h3>
              </div>
              <div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
                <span className="px-7">2</span>
                <h3 className="title-small p-7 w-4/5">Alertas en segundos</h3>
              </div>
              <div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
                <span className="px-7">3</span>
                <h3 className="title-small p-7 w-4/5">Fácil de instalar e integrar con tus sistemas</h3>
              </div>
              <div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
                <span className="px-7">4</span>
                <h3 className="title-small p-7 w-4/5">Confiable y eficiente, probado en múltiples sectores</h3>
              </div>
              <div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
                <span className="px-7">5</span>
                <h3 className="title-small p-7 w-4/5">Se adapta a distintos tipos de negocio y sedes</h3>
              </div>
              <div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
                <span className="px-7">6</span>
                <h3 className="title-small p-7 w-4/5">Usuarios ilimitados con roles por equipo</h3>
              </div>
              <div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
                <span className="px-7">7</span>
                <h3 className="title-small p-7 w-4/5">App iOS / Android / Web para alertas y seguimiento</h3>
              </div>
              <div className="bg-green-500 min-h-[200px] lg:min-h-[288px] flex flex-col justify-end rounded-lg">
                <span className="px-7">8</span>
                <h3 className="title-small p-7 w-4/5">Dashboard para ver impacto y ROI</h3>
              </div>
            </div>
          </section>

          {/* VERSIONES / FUNCIONAMIENTO */}
          <section className="bg-white flex flex-col items-center mb-16 rounded-lg p-6 md:p-16">
            <div className="flex flex-col max-w-[443px]">
              <h2 className="title-big font-semibold mb-4 text-center">Versiones y opciones de funcionamiento</h2>
              <span className="descriptions mb-6 text-center">Breve descripción de la herramienta va aquí</span>
              <div className="flex flex-col gap-4 md:flex-row mb-10">
                <button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
                  Solicitar demo
                </button>
                <button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
                  Ver cómo funciona
                </button>
              </div>
            </div>

            {/* TABLA */}
            <div>
              <table className="border-separate border-spacing-0 rounded-lg bg-black table-fixed">
                <thead>
                  <tr>
                    <th className="bg-green-100 border-2 border-black rounded-lg w-52 title-tiny text-green-600">Opción</th>
                    <th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24 title-tiny text-green-600">Dónde corre</th>
                    <th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24 title-tiny text-green-600">Video fuera del sitio</th>
                    <th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24 title-tiny text-green-600">Gestión multi-sede</th>
                    <th className="bg-green-100 border-2 border-black rounded-lg border-l-0 w-52 h-24 title-tiny text-green-600">Ideal para</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 descriptions font-semibold">Local (On-Prem)</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Todo en Edge/Datacenter del cliente</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">No (opcional solo metadatos)</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Vía panel en sitio / VPN</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Compliance estricto, casinos, gobierno</td>
                  </tr>
                  <tr>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 descriptions font-semibold">Híbrido</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Detección en Edge + gestión en nube</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Mínimo (clips/eventos)</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Sí</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Retail y PH multi-sede</td>
                  </tr>
                  <tr>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 descriptions font-semibold">SaaS (Cloud)</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Procesamiento principalmente en nube</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Sí</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Sí</td>
                    <td className="bg-white border-2 border-black rounded-lg border-t-0 border-l-0 descriptions">Clientes con menor restricción y rápida escalabilidad</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* INDUSTRIAS */}
          <section className="flex flex-col-reverse gap-20 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-black mb-16">
            <div className="lg:w-1/2">
              <AccordionItem title="Robos en Tiendas (Retail Theft)" titleTextColor="text-white" buttonColor="text-white">
                <div className="flex justify-start gap-1">
                  <span className="text-white">ICON</span>
                  <h3 className="title-small text-white font-bold">Qué hace:</h3>
                </div>
                <p className="descriptions text-white mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video.</p>

                <div className="flex justify-start gap-1">
                  <span className="text-white">ICON</span>
                  <h3 className="title-small text-white font-bold">Alertas Típicas:</h3>
                </div>
                <p className="descriptions text-white mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>

                <div className="flex justify-start gap-1">
                  <span className="text-white">ICON</span>
                  <h3 className="title-small text-white font-bold">Impacto:</h3>
                </div>
                <p className="descriptions text-white mb-4">Menos merma y menos horas revisando grabaciones.</p>
              </AccordionItem>

              <AccordionItem title="Reconocimiento facial (IA)" titleTextColor="text-white" buttonColor="text-white">
                <p className="descriptions text-white">Detecta rostros y los compara con bases de datos autorizadas.</p>
              </AccordionItem>

              <AccordionItem title="PH / Accesos y Perímetro" titleTextColor="text-white" buttonColor="text-white">
                <p className="descriptions text-white">Control de accesos y monitoreo de perímetro con alertas en tiempo real.</p>
              </AccordionItem>

              <AccordionItem title="Merodeo (Loitering) en áreas sensibles" titleTextColor="text-white" buttonColor="text-white">
                <p className="descriptions text-white">Detecta presencia prolongada en áreas críticas.</p>
              </AccordionItem>

              <AccordionItem title="LPR – Placas y Control de Vehículos" titleTextColor="text-white" buttonColor="text-white">
                <p className="descriptions text-white">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>
            </div>

            <div className="flex flex-col lg:1/2">
              <h2 className="title-big text-white font-semibold mb-4">Industrias</h2>
              <p className="descriptions text-white mb-6">Breve descripción</p>
              <div className="flex flex-col gap-4 md:flex-row mb-10">
                <button className="bg-green-600 text-white py-2 px-2 font-bold rounded-lg border-green-600 border-2 md:flex-[1.2]">
                  Solicitar demo
                </button>
                <button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
                  Ver cómo funciona
                </button>
              </div>
              <img src="assets/vidh.png" className="w-full max-h-[463px] rounded-lg"/>
            </div>
          </section>

          {/* MÉTRICAS */}
          <section className="flex flex-col items-center p-16 mb-16">
            <div className="flex flex-col min-w-[443px] mb-10">
              <h2 className="title-big font-semibold mb-4 text-center">Métricas de impacto</h2>
              <span className="descriptions mb-6 text-center">Breve descripción de la herramienta va aquí</span>
              <div className="flex flex-col gap-4 md:flex-row ">
                <button className="bg-black text-white py-2 px-2 font-bold rounded-lg border-2 md:flex-[1.2]">
                  Solicitar demo
                </button>
                <button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
                  Ver cómo funciona
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col justify-end bg-black p-8 rounded-lg h-64">
                  <h3 className="title-big text-white">1.82%</h3>
                  <p className="descriptions text-white">Tasa global de merma sobre ventas minoristas. (Global Shrink Index - Sensormatic)</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="flex flex-col gap-14 lg:flex-row lg:justify-between p-6 md:p-16 rounded-lg bg-white mb-16">
            <div className="flex flex-col lg:w-1/2 gap-10">
              <h2 className="title-regular">Preguntas frecuentes</h2>
              <img src="/assets/vidh.png" alt="Imagen" className="w-full max-h-[463px] rounded-lg"/>
            </div>

            <div className="lg:w-1/2">
              <AccordionItem title="1. ¿Qué es exactamente esta plataforma?">
                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-bold">Qué hace:</h3>
                </div>
                <p className="descriptions mb-4">Detecta comportamientos de hurto en piso y caja y notifica con video.</p>

                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-bold">Alertas Típicas:</h3>
                </div>
                <p className="descriptions mb-4">“Ocultamiento de producto”, “Salida sin pago”, “Intercambio de etiquetas”.</p>

                <div className="flex justify-start gap-1">
                  <span>ICON</span>
                  <h3 className="title-small font-bold">Impacto:</h3>
                </div>
                <p className="descriptions mb-4">Menos merma y menos horas revisando grabaciones.</p>
              </AccordionItem>

              <AccordionItem title="2. ¿Necesito cambiar mis cámaras?">
                <p className="descriptions">Detecta rostros y los compara con bases de datos autorizadas.</p>
              </AccordionItem>

              <AccordionItem title="3. ¿Cómo recibo las alertas?">
                <p className="descriptions">Control de accesos y monitoreo de perímetro con alertas en tiempo real.</p>
              </AccordionItem>

              <AccordionItem title="4. ¿Qué pasa si se cae Internet?">
                <p className="descriptions">Detecta presencia prolongada en áreas críticas.</p>
              </AccordionItem>

              <AccordionItem title="5. ¿Qué tan precisa es? ¿Y los falsos positivos?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>

              <AccordionItem title="6. ¿Se integra con mis sistemas actuales?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>

              <AccordionItem title="7. ¿Cómo cuidan la privacidad?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>

              <AccordionItem title="8. ¿Puedo usarlo en cualquier país?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>

              <AccordionItem title="9. ¿Cuánto tarda la instalación?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>

              <AccordionItem title="10. ¿Qué opciones de uso tienen (nube o local)?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>

              <AccordionItem title="11. ¿Cuánto cuesta?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>

              <AccordionItem title="12. ¿Qué necesito para empezar?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>

              <AccordionItem title="13. ¿Quién atiende y capacita a mi equipo?">
                <p className="descriptions">Reconoce placas vehiculares y gestiona entradas/salidas.</p>
              </AccordionItem>
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="bg-black rounded-lg mb-16 flex justify-center p-16 ">
            <div className="flex flex-col max-w-[443px]">
              <h2 className="title-big text-white font-semibold mb-14 text-center">¿Listo para prevenir pérdidas y automatizar tu seguridad?</h2>
              <div className="flex flex-col gap-4 md:flex-row ">
                <button className="bg-green-600 text-black py-2 px-2 font-bold rounded-lg border-2 border-black md:flex-[1.2]">
                  Solicitar demo
                </button>
                <button className="bg-white text-black py-2 px-2 font-bold rounded-lg border-2 md:flex-[1]">
                  Ver cómo funciona
                </button>
              </div>
            </div>
          </section>

          {/* FORMULARIO DEMO */}
          <section className="bg-transparent rounded-lg flex flex-col lg:flex-row justify-between p-16 mb-16">
            <div className=" max-w-2xl w-full">
              <div className="mb-8">
                <h1 className="title-big font-bold mb-2">Solicita una demo</h1>
                <p className="descriptions">Breve descripción de la herramienta va aquí</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Nombre */}
              <div className="md:col-span-2">
                <label className="descriptions-sm mb-2 block">Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Jon Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 
                    focus:border-transparent outline-none transition-all"/>
              </div>

              {/* Empresa / País */}
              <div>
                <label className="descriptions-sm mb-2 block">Empresa *</label>
                <input
                  type="text"
                  name="empresa"
                  placeholder="Transmira INC"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 
                    focus:border-transparent outline-none transition-all"/>
              </div>

              <div>
                <label className="descriptions-sm mb-2 block">País *</label>
                <input
                  type="text"
                  name="pais"
                  placeholder="Panamá"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 
                    focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email / Teléfono */}
              <div>
                <label className="descriptions-sm mb-2 block">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jon@mail.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 
                    focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="descriptions-sm mb-2 block">Teléfono *</label>
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
                <label className="descriptions-sm mb-2 block">Mensaje *</label>
                <textarea
                  name="mensaje"
                  placeholder="Aquí va tu mensaje"
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Botón */}
              <button
                type="button"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium text-lg"
              >
                Solicitar demo
              </button>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer id="contact" className="bg-white flex flex-col lg:flex-row p-16 mb-16 gap-28 rounded-lg">
          <div>
            <h1 className="title-tiny font-semibold">Atelopus</h1>
            <p className="descriptions">© 2025 ATELOPUS. Todos los derechos reservados.</p>
          </div>

          <div className="flex gap-14">
            <div>
              <h1 className="title-tiny font-semibold">Producto</h1>
              <p className="descriptions">About</p>
              <p className="descriptions">Features</p>
              <p className="descriptions">Benefits</p>
              <p className="descriptions">Contact</p>
            </div>

            <div>
              <h1 className="title-tiny font-semibold">Contacto</h1>
              <p className="descriptions">info@hypernovalabs.com</p>
              <p className="descriptions">(+507) 202-4098/99</p>
              <p className="descriptions">Edificio Frontenac, piso 1, Calle 50, Ciudad de Panamá</p>
            </div>

            <div>
              <h1 className="title-tiny font-semibold">Legal</h1>
              <p className="descriptions">Términos de Servicio</p>
              <p className="descriptions">Política de Privacidad</p>
            </div>	
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;