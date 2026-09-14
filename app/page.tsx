import Link from 'next/link'
import { site, ciudades } from './lib/site'
import { guias } from './lib/guias'
import { JsonLd, faqSchema } from './lib/schema'
import Header from './components/Header'
import Footer from './components/Footer'
import StickyWhatsApp from './components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from './components/WhatsAppCTA'

const faqs = [
  {
    pregunta: '¿De verdad la primera asesoría es gratis?',
    respuesta:
      'Sí, de verdad. Me escribes por WhatsApp, me cuentas qué te pasa y te oriento sin cobrarte un peso. Las dudas son gratis. Si decides que yo me encargue de resolver el problema, ahí sí te paso una cotización clara antes de empezar, y tú decides si seguimos.',
  },
  {
    pregunta: '¿Cuánto cuesta que me resuelvas el problema?',
    respuesta:
      'Depende de qué necesites, y prefiero no inventarte un precio por adelantado. Primero te escucho, entiendo bien qué está pasando, y después te cotizo. Nada de sorpresas ni de cobros que aparecen al final.',
  },
  {
    pregunta: '¿En qué ciudades atiendes?',
    respuesta:
      'Voy a domicilio en Barranquilla, Cartagena y Santa Marta. En Montería, Valledupar y Sincelejo atiendo de forma remota. Si estás en otra parte de la Costa, escríbeme igual y miramos si te puedo ayudar.',
  },
  {
    pregunta: '¿Qué tipo de equipos y problemas resuelves?',
    respuesta:
      'Computadores y portátiles lentos, virus, formateo, cambio de disco o memoria, redes Wi-Fi que no llegan a toda la casa, respaldo de información, correo, impresoras, celulares con líos de software y asesoría para que compres bien. Para empresas, también redes, infraestructura y soporte a varios equipos.',
  },
  {
    pregunta: '¿Por qué por WhatsApp y no por llamada?',
    respuesta:
      'Porque por escrito quedamos claros los dos y tú tienes registro de todo lo que acordamos: qué te dije, qué te cobré y qué quedó pendiente. Además puedes mandarme fotos o videos del problema, que muchas veces me ahorra media hora de preguntas.',
  },
  {
    pregunta: '¿Puedo confiar en que no me vas a vender de más?',
    respuesta: `Llevo más de ${site.yearsOfExperience} años en esto y trabajo con una regla sencilla: no te vendo lo que no necesitas. Si tu equipo se arregla con algo simple, te lo digo aunque signifique cobrarte menos. Y si no vale la pena arreglarlo, también te lo digo.`,
  },
]

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#F77F00] font-medium mb-4">{site.tagline}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ¿Problemas con tu tecnología? Tranquilo, Alfred Soluciona.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Soy ingeniero con más de {site.yearsOfExperience} años de experiencia. Ayudo a
                hogares, estudiantes y empresas de la Costa a que su tecnología funcione sin
                estrés. Cuéntame tu duda por WhatsApp: esa parte no te cuesta nada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <WhatsAppCTA location="hero">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Escríbeme (la primera asesoría es gratis)
                </WhatsAppCTA>
                <Link
                  href="#servicios"
                  className="inline-flex items-center justify-center border-2 border-[#0077B6] text-[#0077B6] px-8 py-4 rounded-lg hover:bg-[#0077B6] hover:text-white transition-colors text-lg font-medium"
                >
                  Ver qué resuelvo
                </Link>
              </div>

              <ul className="space-y-3 text-gray-700">
                {[
                  'Las dudas son gratis. Solo se cobra resolver el problema.',
                  'Cotización clara antes de tocar nada.',
                  'A domicilio o remoto, en toda la Costa Atlántica.',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#0077B6] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sobre mí — clave para E-E-A-T: Google premia saber quién responde */}
        <section id="sobre-mi" className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              No soy un robot, soy Alfred.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Después de {site.yearsOfExperience} años trabajando en tecnología me di cuenta de
              algo: la gente no quiere palabras raras ni diagnósticos complicados; quiere
              soluciones en las que pueda confiar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ya sea que necesites armar un PC, mejorar el Wi-Fi de tu casa o digitalizar tu
              empresa, aquí estoy para guiarte. Y si lo que necesitas no es lo mío, te lo digo de
              frente y te ahorro la vuelta.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qué resuelvo</h2>
            <p className="text-lg text-gray-700 mb-12">
              Tres formas de trabajar, según quién seas y qué necesites.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Para el hogar y estudiantes</h3>
                <p className="text-gray-700">
                  Computadores lentos, virus, formateo, Wi-Fi que no llega al cuarto, instalación
                  de programas y asesoría para que compres bien la primera vez.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Para profesionales independientes
                </h3>
                <p className="text-gray-700">
                  Respaldo de tu información, seguridad de tus datos y montaje de tu oficina en
                  casa, para que trabajes tranquilo y sin sustos.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Para empresas y negocios</h3>
                <p className="text-gray-700">
                  Cotización de equipos, soporte técnico a varios computadores, infraestructura de
                  redes y consultoría en proyectos de tecnología.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-600 italic">
              Si hay que comprar un repuesto, te lo digo en la cotización. Sin sorpresas.
            </p>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-es" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  n: 1,
                  t: 'Me escribes por WhatsApp',
                  d: 'Me cuentas la duda o el problema. Esta parte es gratis, en serio.',
                },
                {
                  n: 2,
                  t: 'Te doy mi asesoría',
                  d: 'Te explico qué está pasando y cuál es el camino, sin palabras raras.',
                },
                {
                  n: 3,
                  t: 'Tú decides si sigo',
                  d: 'Si quieres que yo lo resuelva, te cotizo claro y arrancamos.',
                },
              ].map((p) => (
                <div key={p.n} className="text-center">
                  <div className="w-16 h-16 bg-[#F77F00] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {p.n}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.t}</h3>
                  <p className="text-gray-700">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ciudades: enlaces internos a las páginas locales */}
        <section id="zona" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dónde atiendo</h2>
            <p className="text-lg text-gray-700 mb-12">
              Toda la Costa Atlántica. A domicilio en Barranquilla, Cartagena y Santa Marta;
              remoto en el resto.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ciudades.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="flex items-center justify-between bg-blue-50 rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{c.nombre}</h3>
                    <p className="text-sm text-gray-600">
                      {c.presencial ? 'A domicilio + remoto' : 'Remoto'}
                    </p>
                  </div>
                  <span className="text-[#0077B6] font-medium">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guías */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guías gratis</h2>
            <p className="text-lg text-gray-700 mb-12">
              Cosas que puedes resolver tú mismo antes de llamar a nadie.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {guias.slice(0, 3).map((g) => (
                <Link
                  key={g.slug}
                  href={`/guia/${g.slug}`}
                  className="flex flex-col bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{g.titulo}</h3>
                  <p className="text-gray-700 text-sm mb-4 flex-1">{g.resumen}</p>
                  <span className="text-[#0077B6] font-medium text-sm">Leer guía →</span>
                </Link>
              ))}
            </div>

            <Link
              href="/guias"
              className="inline-block mt-8 text-[#0077B6] font-medium hover:underline"
            >
              Ver todas las guías →
            </Link>
          </div>
        </section>

        {/* Por qué yo */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Por qué yo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  t: 'Te hablo claro',
                  d: 'Sin vueltas ni palabras técnicas que confunden.',
                },
                {
                  t: 'Todo en un solo chat',
                  d: 'Por WhatsApp, con registro de lo que acordamos.',
                },
                {
                  t: 'Casa, estudio o negocio',
                  d: 'Te atiendo igual si es tu PC o el de tu empresa.',
                },
                {
                  t: 'No te vendo de más',
                  d: 'Si se arregla con algo simple, te lo digo.',
                },
              ].map((b) => (
                <div key={b.t} className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{b.t}</h3>
                  <p className="text-gray-700 text-sm">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿El equipo no prende, el Wi-Fi falla o no sabes qué comprar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cuéntamelo por WhatsApp. Preguntar no cuesta nada.
            </p>
            <WhatsAppCTA location="cta-final">
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Hablemos por WhatsApp
            </WhatsAppCTA>
            <p className="mt-4 text-sm opacity-75">{site.phone}</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="preguntas" className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Preguntas</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <details key={f.pregunta} className="group border-b border-gray-200 pb-6">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                    {f.pregunta}
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{f.respuesta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <StickyWhatsApp />
      <Footer />
    </>
  )
}
