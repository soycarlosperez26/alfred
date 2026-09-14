import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '../../lib/site'
import { getGuia, otrasGuias } from '../../lib/guias'
import { JsonLd, articuloSchema, breadcrumbSchema, faqSchema } from '../../lib/schema'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StickyWhatsApp from '../../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../../components/WhatsAppCTA'

const SLUG = 'comprar-computador-usado-costa'
const guia = getGuia(SLUG)!

export const metadata: Metadata = {
  title: 'Comprar un computador usado en la Costa: 5 revisiones antes de pagar',
  description:
    'Antes de entregar la plata por un computador usado en Barranquilla, Cartagena o Santa Marta, revisa estas 5 cosas. Guía gratis de un ingeniero con 15 años de experiencia.',
  alternates: { canonical: `/guia/${SLUG}` },
  openGraph: {
    title: 'Comprar un computador usado en la Costa: 5 revisiones antes de pagar',
    description:
      'Lo que tienes que mirar sí o sí antes de pagar, para que no te vendan un problema.',
    type: 'article',
    locale: site.locale,
    url: `${site.url}/guia/${SLUG}`,
  },
}

const faqs = [
  {
    pregunta: '¿Vale la pena comprar un computador usado?',
    respuesta:
      'Sí, si sabes qué estás comprando. Un equipo usado bien elegido te puede dar varios años de vida útil por la mitad del precio de uno nuevo. El problema no es que sea usado: el problema es comprarlo a ciegas, sin revisar nada y sin saber si lo que pides es lo que necesitas.',
  },
  {
    pregunta: '¿Cómo sé si un computador usado es robado?',
    respuesta:
      'Pide el número de serie antes de encontrarte con el vendedor y pídele también la factura original o la caja. Un vendedor honesto no tiene problema en dártelos. Si se pone esquivo con el serial, si te apura para cerrar rápido o si quiere verse en un sitio raro, déjalo pasar: no vale la pena el ahorro.',
  },
  {
    pregunta: '¿Qué es más importante, el procesador o el disco?',
    respuesta:
      'Para el uso normal (navegar, ofimática, clases, trabajo de oficina), el disco pesa más de lo que la gente cree. Un equipo con procesador modesto pero con disco de estado sólido se siente mucho más rápido que uno con buen procesador y disco mecánico viejo. Si el equipo que te ofrecen todavía tiene disco mecánico, cuenta el costo de cambiarlo dentro del precio.',
  },
  {
    pregunta: '¿Me puedes ayudar a revisar un equipo antes de comprarlo?',
    respuesta:
      'Claro, y esa asesoría es gratis. Mándame por WhatsApp las fotos del equipo, lo que te está pidiendo el vendedor y para qué lo vas a usar. Te digo si el precio es razonable y qué revisar en persona. Si quieres que lo revise yo contigo de forma remota antes de que pagues, eso ya lo cotizamos.',
  },
]

export default function ComprarComputadorUsado() {
  return (
    <>
      <JsonLd
        data={articuloSchema({
          titulo: guia.titulo,
          descripcion: guia.resumen,
          url: `/guia/${SLUG}`,
          fechaPublicacion: guia.publicada,
          fechaModificacion: guia.actualizada,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Guías', url: '/guias' },
          { nombre: 'Comprar computador usado', url: `/guia/${SLUG}` },
        ])}
      />

      <Header />

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Migas de pan" className="text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-[#0077B6]">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <Link href="/guias" className="hover:text-[#0077B6]">
                Guías
              </Link>
            </nav>

            <p className="text-[#F77F00] font-medium mb-4">Guía gratis</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprar un computador usado en la Costa: 5 revisiones antes de pagar
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Un usado bien comprado es un negocio buenísimo. Un usado mal comprado es un dolor de
              cabeza que te sale más caro que haber comprado nuevo. La diferencia está en estas
              cinco revisiones, y todas las puedes hacer tú mismo antes de entregar la plata.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                1. El número de serie, antes de salir de tu casa
              </h2>
              <p className="text-gray-700 mb-3">
                Pídele al vendedor el número de serie por chat, antes de cuadrar el encuentro.
                Pídele también la factura o la caja original.
              </p>
              <p className="text-gray-700">
                Un vendedor honesto te los manda sin problema. Si se pone evasivo, si te dice que
                &ldquo;lo tiene guardado&rdquo;, o si te apura para cerrar rápido, ahí ya tienes la
                respuesta. El ahorro nunca compensa comprar un equipo de dudosa procedencia.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                2. Qué disco tiene y cuánto ha trabajado
              </h2>
              <p className="text-gray-700 mb-3">
                Esta es la revisión que más plata te ahorra y la que casi nadie hace. Hay dos tipos
                de disco:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4 mb-3">
                <li>
                  • <strong>Estado sólido (SSD):</strong> rápido, silencioso, aguanta mejor los
                  golpes. Es lo que quieres.
                </li>
                <li>
                  • <strong>Mecánico (HDD):</strong> más lento y con partes que se mueven, así que
                  se desgasta. Un equipo con disco mecánico se siente lento aunque todo lo demás
                  esté bien.
                </li>
              </ul>
              <p className="text-gray-700">
                Si el equipo todavía tiene disco mecánico, no lo descartes: súmale al precio lo que
                cuesta cambiarlo por uno sólido y compara. Muchas veces sigue conviniendo, pero ya
                sabes el costo real y puedes negociar con ese argumento.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                3. La batería, si es portátil
              </h2>
              <p className="text-gray-700 mb-3">
                La batería es la pieza que más se gasta y la que más se disimula en una venta. Pide
                que te lo muestren funcionando <strong>desconectado del cargador</strong> durante un
                rato largo, no dos minutos.
              </p>
              <p className="text-gray-700">
                Si se apaga de una cuando le quitan el cable, la batería está muerta. No es el fin
                del mundo, pero es un repuesto que cuesta y que tienes que descontar del precio.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                4. Pruébalo en caliente, no dos minutos
              </h2>
              <p className="text-gray-700 mb-3">
                Esta es especialmente importante aquí en la Costa. Con nuestro calor, un equipo que
                arranca bien en frío puede empezar a fallar a los quince o veinte minutos de uso: se
                traba, se reinicia solo o se apaga.
              </p>
              <p className="text-gray-700">
                Llega, enciéndelo y déjalo trabajando mientras revisas todo lo demás. Abre varias
                cosas al tiempo, pon un video, navega. Si el ventilador empieza a sonar como un
                avión o el equipo se calienta demasiado al tacto, probablemente necesita
                mantenimiento y cambio de pasta térmica. Eso también se descuenta del precio.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                5. Que el equipo quede realmente tuyo
              </h2>
              <p className="text-gray-700 mb-3">
                Revisa que el sistema operativo esté activado de verdad y, sobre todo, que el equipo
                no quede amarrado a la cuenta del dueño anterior. Pide que cierren su sesión y
                borren sus cuentas delante de ti.
              </p>
              <p className="text-gray-700">
                Me ha llegado gente que compró un equipo y no lo podía usar porque seguía bloqueado
                con el usuario del vendedor, y el vendedor ya no contestaba. Eso a veces no tiene
                arreglo fácil.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Antes de todo esto: ¿qué necesitas de verdad?
          </h2>
          <p className="text-gray-700 mb-4">
            El error más caro que veo no es comprar un equipo malo. Es comprar un equipo que no
            corresponde con lo que la persona hace.
          </p>
          <p className="text-gray-700 mb-4">
            Gente que paga de más por un equipo potentísimo para escribir en Word y navegar. Y gente
            que compra el más barato de todos para editar video o para diseñar, y después sufre
            todos los días.
          </p>
          <p className="text-gray-700 mb-8">
            Antes de mirar precios, ten claro para qué lo vas a usar y cuántos años esperas que te
            dure. Si no lo tienes claro, pregúntame: esa asesoría no te cuesta nada y te puede
            ahorrar bastante.
          </p>

          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
            <h2 className="text-2xl font-bold mb-4">¿Te ofrecieron un equipo y no sabes si conviene?</h2>
            <p className="mb-6 text-lg">
              Mándame las fotos, el precio que te piden y para qué lo necesitas. Te digo con
              franqueza si vale la pena o si te están viendo la cara. Esa asesoría es gratis.
            </p>
            <WhatsAppCTA
              location={`guia-${SLUG}`}
              mensaje="Hola Alfred, me ofrecieron un computador usado y quiero saber si me conviene. Te paso los datos:"
            >
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Preguntarle a Alfred
            </WhatsAppCTA>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Preguntas frecuentes</h2>
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

          <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sigue leyendo</h2>
            <div className="space-y-4">
              {otrasGuias(SLUG).map((g) => (
                <Link
                  key={g.slug}
                  href={`/guia/${g.slug}`}
                  className="block text-[#0077B6] hover:text-[#023E8A] font-medium"
                >
                  → {g.titulo}
                </Link>
              ))}
              <Link href="/guias" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                → Ver todas las guías
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StickyWhatsApp />
      <Footer />
    </>
  )
}
