import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ciudades, getCiudad, site, type Ciudad } from '../lib/site'
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  servicioEnCiudadSchema,
} from '../lib/schema'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyWhatsApp from '../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../components/WhatsAppCTA'

/** Solo se generan las 6 ciudades reales. Cualquier otra URL da 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return ciudades.map((c) => ({ ciudad: c.slug }))
}

/**
 * El H1 y el title cambian según la modalidad.
 * No prometemos visita a domicilio donde solo atendemos remoto: además de
 * ser honesto, evita reseñas malas que sí afectan el posicionamiento local.
 */
function titular(c: Ciudad) {
  return c.presencial
    ? `Soporte técnico a domicilio en ${c.nombre}`
    : `Soporte técnico remoto en ${c.nombre}`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ciudad: string }>
}): Promise<Metadata> {
  const { ciudad } = await params
  const c = getCiudad(ciudad)
  if (!c) return {}

  /*
   * Title corto a propósito: el layout raíz le añade "| Alfred Soluciona" con
   * su template, y Google corta el título alrededor de los 60 caracteres.
   */
  const title = titular(c)
  const description = c.presencial
    ? `Técnico de computadores y redes en ${c.nombre}, ${c.departamento}. Voy a tu casa u oficina, o lo vemos remoto. ${site.yearsOfExperience} años de experiencia y la primera asesoría gratis por WhatsApp.`
    : `Soporte técnico y asesoría tecnológica en ${c.nombre}, ${c.departamento}, atendido de forma remota. ${site.yearsOfExperience} años de experiencia y la primera asesoría gratis por WhatsApp.`

  return {
    title,
    description,
    alternates: { canonical: `/${c.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      type: 'website',
      locale: site.locale,
      url: `${site.url}/${c.slug}`,
    },
  }
}

function faqsDeCiudad(c: Ciudad) {
  return [
    {
      pregunta: c.presencial
        ? `¿Vas a domicilio en ${c.nombre}?`
        : `¿Atiendes en ${c.nombre} de forma presencial?`,
      respuesta: c.presencial
        ? `Sí. Voy a tu casa u oficina en ${c.nombre} y alrededores. También podemos verlo remoto si el problema es de software, que casi siempre sale más rápido y más económico. Lo decidimos después de que me cuentes qué está pasando.`
        : `En ${c.nombre} trabajo de forma remota: me conecto a tu equipo y lo reviso contigo en vivo. Si resulta que hay que abrir el equipo físicamente, te lo digo con franqueza y te oriento sobre qué pedirle a un técnico de tu ciudad para que no te cobren de más.`,
    },
    {
      pregunta: `¿De verdad la primera asesoría es gratis?`,
      respuesta: `Sí, de verdad. Me escribes por WhatsApp, me cuentas la duda o el problema y te oriento sin cobrarte nada. Las dudas son gratis. Si decides que yo me encargue de resolverlo, ahí sí te paso una cotización clara antes de empezar, y tú decides.`,
    },
    {
      pregunta: `¿Cuánto cuesta arreglar un computador en ${c.nombre}?`,
      respuesta: `Depende de qué tenga. No es lo mismo una limpieza de software que cambiar un disco. Por eso no te doy un precio inventado por adelantado: primero lo revisamos en los minutos gratis, y después te digo el costo exacto. Si no vale la pena arreglarlo, también te lo digo.`,
    },
    {
      pregunta: `¿Qué tipo de problemas resuelves?`,
      respuesta: `Computadores y portátiles lentos, virus, formateos, cambio de disco o memoria, redes Wi-Fi que no llegan a toda la casa, respaldo de información, configuración de correo e impresoras, y asesoría de compra para que no gastes de más. Para empresas también hago infraestructura de red y soporte a varios equipos.`,
    },
    {
      pregunta: `¿Por qué debería confiar en ti?`,
      respuesta: `Llevo más de ${site.yearsOfExperience} años en tecnología y trabajo con una regla simple: no te vendo lo que no necesitas. Si tu equipo se arregla con algo sencillo, te lo digo aunque signifique cobrarte menos. Prefiero que vuelvas y que me recomiendes.`,
    },
  ]
}

export default async function CiudadPage({
  params,
}: {
  params: Promise<{ ciudad: string }>
}) {
  const { ciudad } = await params
  const c = getCiudad(ciudad)
  if (!c) notFound()

  const faqs = faqsDeCiudad(c)
  const mensajeWA = `Hola Alfred, te escribo desde ${c.nombre}. Necesito una mano con`

  return (
    <>
      <JsonLd data={servicioEnCiudadSchema(c)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: c.nombre, url: `/${c.slug}` },
        ])}
      />

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Migas de pan visibles: ayudan al usuario y refuerzan la jerarquía */}
            <nav aria-label="Migas de pan" className="text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-[#0077B6]">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{c.nombre}</span>
            </nav>

            <div className="max-w-3xl">
              <p className="text-[#F77F00] font-medium mb-4">
                {c.nombre}, {c.departamento}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {titular(c)}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">{c.intro}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <WhatsAppCTA location={`hero-${c.slug}`} mensaje={mensajeWA}>
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Cuéntame tu problema (gratis)
                </WhatsAppCTA>
                <Link
                  href="/#servicios"
                  className="inline-flex items-center justify-center border-2 border-[#0077B6] text-[#0077B6] px-8 py-4 rounded-lg hover:bg-[#0077B6] hover:text-white transition-colors text-lg font-medium"
                >
                  Ver qué resuelvo
                </Link>
              </div>

              <ul className="space-y-3 text-gray-700">
                {[
                  c.presencial
                    ? `Voy a tu casa u oficina en ${c.nombre}, o lo vemos remoto`
                    : `Atención remota el mismo día, sin que muevas el equipo`,
                  'Cotización clara antes de tocar nada',
                  `${site.yearsOfExperience} años de experiencia, hablándote sin tecnicismos`,
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

        {/* Contexto local: el texto que hace única a esta página */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lo que más veo en {c.nombre}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{c.contextoLocal}</p>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 md:py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              En qué te puedo ayudar en {c.nombre}
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Para tu casa, para ti que estudias o trabajas solo, y para tu empresa.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Para el hogar y estudiantes</h3>
                <p className="text-gray-700">
                  Computadores lentos, virus, formateo, Wi-Fi que no llega al cuarto, instalación
                  de programas y asesoría para que compres bien la primera vez.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Para profesionales independientes
                </h3>
                <p className="text-gray-700">
                  Respaldo de tu información, seguridad de tus datos y montaje de tu oficina en
                  casa para que trabajes sin sustos.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Para empresas y negocios</h3>
                <p className="text-gray-700">
                  Cotización de equipos, soporte a varios computadores, redes e infraestructura, y
                  acompañamiento en proyectos de tecnología.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zonas: relevancia local concreta */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {c.presencial ? `Zonas de ${c.nombre} donde atiendo` : `Zonas de ${c.nombre} que atiendo remoto`}
            </h2>
            <p className="text-gray-700 mb-6">
              {c.presencial
                ? `Me muevo por toda la ciudad. Si tu barrio no está en la lista, escríbeme igual y miramos cómo hacerlo.`
                : `La atención remota funciona en cualquier barrio con internet. Estos son los que más me escriben:`}
            </p>
            <ul className="flex flex-wrap gap-3">
              {c.zonas.map((z) => (
                <li
                  key={z}
                  className="bg-blue-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {z}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: 1, t: 'Me escribes por WhatsApp', d: 'Me cuentas qué pasa. Esta parte no te cuesta nada.' },
                {
                  n: 2,
                  t: 'Vemos cómo resolverlo',
                  d: c.presencial ? 'Remoto, visita a tu casa, o taller.' : 'Nos conectamos y lo revisamos juntos en vivo.',
                },
                { n: 3, t: 'Te cotizo y decides tú', d: 'Precio claro antes de empezar. Sin sorpresas.' },
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

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tienes un lío de tecnología en {c.nombre}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cuéntamelo por WhatsApp. La primera asesoría es gratis, en serio.
            </p>
            <WhatsAppCTA location={`cta-final-${c.slug}`} mensaje={mensajeWA}>
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Hablemos por WhatsApp
            </WhatsAppCTA>
            <p className="mt-4 text-sm opacity-75">{site.phone}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Preguntas de gente de {c.nombre}
            </h2>
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

        {/* Enlaces a otras ciudades: reparte autoridad interna */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">También atiendo en</h2>
            <ul className="flex flex-wrap gap-4">
              {ciudades
                .filter((o) => o.slug !== c.slug)
                .map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/${o.slug}`}
                      className="text-[#0077B6] hover:underline font-medium"
                    >
                      {titular(o)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </main>

      <StickyWhatsApp mensaje={mensajeWA} />
      <Footer />
    </>
  )
}
