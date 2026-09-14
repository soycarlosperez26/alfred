import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '../../lib/site'
import { getGuia, otrasGuias } from '../../lib/guias'
import { JsonLd, articuloSchema, breadcrumbSchema, faqSchema } from '../../lib/schema'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StickyWhatsApp from '../../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../../components/WhatsAppCTA'

const SLUG = 'wifi-lento-cartagena'
const guia = getGuia(SLUG)!
const mensajeWA = 'Hola Alfred, mi Wi-Fi en Cartagena anda mal. Te cuento:'

export const metadata: Metadata = {
  title: 'Wi-Fi lento en Cartagena: 3 cosas que sí funcionan',
  description:
    'Si tu internet se traba en Cartagena, revisa la ubicación del router, reinícialo bien y mira los canales. Guía gratis + asesoría por WhatsApp sin costo.',
  alternates: { canonical: `/guia/${SLUG}` },
  openGraph: {
    title: 'Wi-Fi lento en Cartagena: 3 cosas que sí funcionan',
    description: 'No siempre es el operador. A veces lo arreglas tú mismo en diez minutos.',
    type: 'article',
    locale: site.locale,
    url: `${site.url}/guia/${SLUG}`,
  },
}

const faqs = [
  {
    pregunta: '¿Es culpa del operador?',
    respuesta:
      'Puede ser, o puede ser tu red interna. Conecta un cable directo del router al computador y prueba. Si por cable anda bien, el problema es tu Wi-Fi, no el operador. Si por cable también está lento, reclámale al operador.',
  },
  {
    pregunta: '¿Vas a domicilio en Cartagena?',
    respuesta:
      'Sí, voy a domicilio en Cartagena cuando hace falta revisar el cableado, la ubicación del router o instalar algo. Si es solo configuración, a lo mejor lo resolvemos remoto y te ahorras la visita.',
  },
  {
    pregunta: '¿Necesito comprar un repetidor?',
    respuesta:
      'Depende. Si tu casa es grande o de dos pisos, probablemente sí. Si el problema es solo dónde está puesto el router, no necesitas comprar nada. Hablamos y vemos: no te voy a vender algo que no necesitas.',
  },
  {
    pregunta: '¿Cuánto cuesta?',
    respuesta:
      'Depende de qué haya que hacer: remoto, visita o repuesto. La asesoría inicial es gratis; después te cotizo claro y tú decides.',
  },
]

export default function WifiLentoCartagena() {
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
          { nombre: 'Wi-Fi lento en Cartagena', url: `/guia/${SLUG}` },
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

            <p className="text-[#F77F00] font-medium mb-4">Guía gratis · Cartagena</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              El Wi-Fi de tu casa en Cartagena no es brujería
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Internet que se traba, videos que se cortan, llamadas que se caen. No siempre es el
              operador. Muchas veces es dónde está puesto el router, las paredes de la casa o cosas
              que puedes arreglar tú mismo en diez minutos.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3 cosas que sí funcionan</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Dónde está el router</h3>
              <p className="text-gray-700 mb-3">
                El router metido en un rincón, detrás del mueble o en el cuarto del fondo no sirve.
                Ponlo así:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Lo más al centro de la casa que puedas</li>
                <li>• Alto, no en el piso</li>
                <li>• Sin paredes gruesas entre el router y donde usas internet</li>
                <li>• Lejos del microondas y de otros electrodomésticos</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Si el cable del operador no llega hasta ahí, escríbeme y miramos si se puede pasar un
                cable o poner un repetidor bien ubicado.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Reinicio completo</h3>
              <p className="text-gray-700 mb-3">
                Parece bobo, pero funciona. Desconecta el router de la corriente, espera 30 segundos
                y vuélvelo a conectar. Muchas veces con eso solo ya mejora.
              </p>
              <p className="text-gray-700">
                Si tienes módem y router (dos aparatos), desconecta los dos. Después conecta primero
                el módem, espera a que encienda bien del todo, y solo entonces conecta el router.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Obstáculos y vecinos</h3>
              <p className="text-gray-700 mb-3">
                Las paredes de concreto y los pisos frenan el Wi-Fi. Si tu cuarto queda lejos o el
                piso de arriba no agarra señal, es posible que necesites un repetidor o un cable
                directo.
              </p>
              <p className="text-gray-700">
                En los edificios de Cartagena, donde todo el mundo tiene Wi-Fi, las redes de los
                vecinos se pisan entre ellas. Ahí se puede cambiar el canal del router para que
                trabaje más tranquilo.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuándo es el operador y cuándo no</h2>
          <p className="text-gray-700 mb-4">
            Conecta un cable directo del router al computador y prueba. Si por cable{' '}
            <strong>también</strong> anda mal, el problema es del operador: llama y reclama.
          </p>
          <p className="text-gray-700 mb-4">
            Si por cable anda bien pero por Wi-Fi se traba, el problema está en tu red interna
            (router, ubicación, configuración). Ahí sí te puedo ayudar yo.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Cuándo llamar a soporte técnico
          </h2>
          <p className="text-gray-700 mb-4">
            Si ya probaste esto y sigue igual, o si no te sientes cómodo haciéndolo, escríbeme.
            Puedo:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8 ml-4">
            <li>• Revisar tu red de forma remota y ver la configuración contigo</li>
            <li>• Ir a tu casa en Cartagena y revisar cableado, ubicación y aparatos</li>
            <li>• Ayudarte a instalar un repetidor o pasar cable si hace falta</li>
            <li>• Configurar el router para que rinda mejor y quede más seguro</li>
          </ul>

          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
            <h2 className="text-2xl font-bold mb-4">¿Tu Wi-Fi sigue mal?</h2>
            <p className="mb-6 text-lg">
              Escríbeme y te doy mi asesoría gratis por WhatsApp. Te ayudo a saber si es el
              operador, el router o la ubicación en tu casa en Cartagena.
            </p>
            <WhatsAppCTA location={`guia-${SLUG}`} mensaje={mensajeWA}>
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Hablemos por WhatsApp
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
              <Link href="/cartagena" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                → Soporte técnico a domicilio en Cartagena
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StickyWhatsApp mensaje={mensajeWA} />
      <Footer />
    </>
  )
}
