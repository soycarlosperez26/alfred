import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '../../lib/site'
import { getGuia, otrasGuias } from '../../lib/guias'
import { JsonLd, articuloSchema, breadcrumbSchema, faqSchema } from '../../lib/schema'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StickyWhatsApp from '../../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../../components/WhatsAppCTA'

const SLUG = 'pc-lento-barranquilla'
const guia = getGuia(SLUG)!
const mensajeWA = 'Hola Alfred, mi computador está lento. Te cuento qué le pasa:'

export const metadata: Metadata = {
  title: 'PC lento en Barranquilla: qué hacer antes de formatear',
  description:
    'Si tu computador va lento en Barranquilla, revisa el disco, el arranque y la limpieza antes de formatear. Guía gratis + asesoría por WhatsApp sin costo.',
  alternates: { canonical: `/guia/${SLUG}` },
  openGraph: {
    title: 'PC lento en Barranquilla: qué hacer antes de formatear',
    description: 'Antes de formatear o comprar equipo nuevo, revisa estas cinco cosas.',
    type: 'article',
    locale: site.locale,
    url: `${site.url}/guia/${SLUG}`,
  },
}

const faqs = [
  {
    pregunta: '¿Formatear arregla un PC lento?',
    respuesta:
      'A veces sí, cuando el problema es de software o hay virus. Pero si lo que está mal es el disco o la memoria, formatear no cambia nada y pierdes el día entero. Por eso conviene revisarlo primero y después decidir.',
  },
  {
    pregunta: '¿Lo puedes ver de forma remota desde Barranquilla?',
    respuesta:
      'Sí. Si tienes internet, me conecto y lo reviso sin ir a tu casa: es más rápido y te sale más económico. Si al revisarlo veo que hay que abrir el equipo, te lo digo y coordinamos la visita aquí en Barranquilla.',
  },
  {
    pregunta: '¿También atiendes en Cartagena y el resto de la Costa?',
    respuesta:
      'Sí. Voy a domicilio en Barranquilla, Cartagena y Santa Marta, y atiendo de forma remota en Montería, Valledupar y Sincelejo. Escríbeme y vemos qué te sirve mejor.',
  },
  {
    pregunta: '¿Cuánto sale arreglar un PC lento?',
    respuesta:
      'Depende de qué haya que hacerle. Una limpieza de software o una configuración remota es una cosa; cambiar disco o memoria es otra. La asesoría inicial es gratis y después te cotizo claro, sin sorpresas.',
  },
]

export default function PCLentoBarranquilla() {
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
          { nombre: 'PC lento en Barranquilla', url: `/guia/${SLUG}` },
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

            <p className="text-[#F77F00] font-medium mb-4">Guía gratis · Barranquilla</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tu PC lento en Barranquilla no siempre está viejo
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Mucha gente formatea o sale a comprar equipo nuevo cuando lo único que hacía falta era
              un chequeo. Antes de gastar plata, revisa estas cosas.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Los síntomas de siempre</h2>
          <p className="text-gray-700 mb-4">Sabes que tu PC está lento cuando:</p>
          <ul className="space-y-2 text-gray-700 mb-8 ml-4">
            <li>• Se demora un mundo en encender</li>
            <li>• Los programas tardan en abrir</li>
            <li>• El ventilador suena como un avión</li>
            <li>• Se traba cuando tienes varias cosas abiertas</li>
            <li>• Internet parece lento, pero los demás equipos de la casa andan bien</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            5 chequeos que puedes hacer en casa
          </h2>

          <div className="space-y-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Mira cómo está el disco</h3>
              <p className="text-gray-700">
                Si el disco está lleno (más del 80 o 90 por ciento), el equipo se pone lento sí o
                sí. Borra lo que ya no uses y vacía la papelera. Si te da miedo borrar algo
                importante, escríbeme y te ayudo a mover esos archivos a otro lado primero.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Revisa qué arranca solo</h3>
              <p className="text-gray-700">
                Muchos programas se abren solos apenas enciendes el computador, y cada uno le quita
                un pedacito de velocidad. Te puedo ayudar a ver cuáles necesitas de verdad y cuáles
                se pueden desactivar sin riesgo.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Deja que termine de actualizar</h3>
              <p className="text-gray-700">
                A veces Windows está actualizándose por detrás y por eso se siente pesado. Puede ser
                cuestión de dejarlo conectado y tranquilo una noche entera para que termine.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Limpieza física</h3>
              <p className="text-gray-700">
                Aquí en Barranquilla esta es la que más veo. El polvo tapa los ventiladores, el
                equipo se calienta y se frena solo para protegerse. Si suena mucho el ventilador o
                se siente caliente, probablemente haya que abrirlo, limpiarlo por dentro y cambiarle
                la pasta térmica. Eso te lo puedo hacer yo.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Memoria RAM y disco sólido</h3>
              <p className="text-gray-700">
                Si el equipo tiene poca memoria o todavía usa disco mecánico, ahí sí un repuesto
                pequeño puede cambiarlo por completo. Pasar a disco de estado sólido suele ser la
                mejora que más se nota por lo que cuesta. Te digo con franqueza si vale la pena o
                si mejor te quedas como estás.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cuándo llamar a un técnico</h2>
          <p className="text-gray-700 mb-4">
            Si ya miraste todo esto y sigue lento, o si no te sientes cómodo tocando nada,
            escríbeme. Lo puedo ver de forma remota desde Barranquilla (me conectas por internet y
            lo reviso sin ir a tu casa), o si prefieres voy a domicilio.
          </p>
          <p className="text-gray-700 mb-8">
            <strong>Te hablo claro:</strong> si el equipo está tan viejo que arreglarlo sale más
            caro que conseguir uno usado mejor, te lo digo. No te vendo algo que no necesitas.
          </p>

          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
            <h2 className="text-2xl font-bold mb-4">¿Tu PC sigue lento?</h2>
            <p className="mb-6 text-lg">
              Escríbeme y te doy mi asesoría gratis por WhatsApp. Te digo qué revisar, o si conviene
              que lo veamos remoto o en persona aquí en Barranquilla.
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
              <Link
                href="/barranquilla"
                className="block text-[#0077B6] hover:text-[#023E8A] font-medium"
              >
                → Soporte técnico a domicilio en Barranquilla
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
