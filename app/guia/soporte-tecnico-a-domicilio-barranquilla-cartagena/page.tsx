import type { Metadata } from 'next'
import Link from 'next/link'
import { site, ciudades } from '../../lib/site'
import { getGuia, otrasGuias } from '../../lib/guias'
import { JsonLd, articuloSchema, breadcrumbSchema, faqSchema } from '../../lib/schema'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StickyWhatsApp from '../../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../../components/WhatsAppCTA'

const SLUG = 'soporte-tecnico-a-domicilio-barranquilla-cartagena'
const guia = getGuia(SLUG)!
const mensajeWA = 'Hola Alfred, necesito soporte técnico. Te cuento qué me pasa:'

export const metadata: Metadata = {
  title: 'Soporte técnico a domicilio o remoto: cómo trabajo',
  description:
    'Cuándo conviene una visita a domicilio, cuándo sale mejor resolverlo remoto y cuándo hay que llevarlo a taller. Cobertura en toda la Costa Atlántica y primera asesoría gratis.',
  alternates: { canonical: `/guia/${SLUG}` },
  openGraph: {
    title: 'Soporte técnico a domicilio o remoto: cómo trabajo',
    description: 'Las tres formas de trabajar y cuál te conviene según tu caso.',
    type: 'article',
    locale: site.locale,
    url: `${site.url}/guia/${SLUG}`,
  },
}

const faqs = [
  {
    pregunta: '¿Siempre hay que ir a domicilio?',
    respuesta:
      'No, y de hecho la mayoría de las veces no hace falta. Muchísimo se resuelve remoto, que es más rápido y te sale más económico. Solo voy en persona cuando hay que tocar algo físico: cables, limpieza interna o cambio de piezas. Eso lo decidimos después de que me cuentes qué pasa.',
  },
  {
    pregunta: '¿Cuánto cuesta?',
    respuesta:
      'Depende de qué necesites: remoto, visita, taller o repuestos. No pongo precios a ciegas porque cada caso es distinto. Primero te escucho sin cobrarte, entiendo bien el problema, y después te cotizo claro.',
  },
  {
    pregunta: '¿Es seguro darte acceso remoto a mi computador?',
    respuesta:
      'Sí, y te explico cómo funciona para que estés tranquilo: uso herramientas que requieren que tú me des permiso expresamente, ves mi cursor todo el tiempo y puedes cortar la conexión cuando quieras. Yo no quedo con acceso después de terminar. Si algo no te da confianza, me lo dices y buscamos otra forma.',
  },
  {
    pregunta: '¿En qué ciudades vas a domicilio?',
    respuesta:
      'Voy a domicilio en Barranquilla, Cartagena y Santa Marta, con sus alrededores (Soledad, Malambo, Puerto Colombia, Turbaco y zonas cercanas). En Montería, Valledupar y Sincelejo atiendo de forma remota.',
  },
]

export default function SoporteTecnicoDomicilio() {
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
          { nombre: 'Soporte a domicilio o remoto', url: `/guia/${SLUG}` },
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
              Soporte técnico a domicilio o remoto: cómo trabajo
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Si tu computador, tu Wi-Fi o tu celular está fallando, hay tres formas de resolverlo y
              cada una sirve para cosas distintas. Aquí te explico cuál te conviene, para que no
              pagues una visita que no necesitabas.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Las tres formas de trabajar</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remoto, desde donde estés</h3>
              <p className="text-gray-700 mb-3">
                Me conectas por internet y veo tu equipo en vivo, como si estuviera al lado tuyo.
                Sirve para:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Computador lento, virus, actualizaciones</li>
                <li>• Configurar programas, correo y cuentas</li>
                <li>• Revisar la configuración del router y la red Wi-Fi</li>
                <li>• Formatear y reinstalar Windows</li>
                <li>• Respaldar tu información</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>La ventaja:</strong> es más rápido y más económico, porque no tengo que
                desplazarme. Por eso es lo primero que propongo casi siempre.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visita a tu casa u oficina</h3>
              <p className="text-gray-700 mb-3">Voy en persona cuando hay que ver algo físico:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Revisar o instalar redes y cableado</li>
                <li>• Limpiar el polvo por dentro del equipo</li>
                <li>• Cambiar pasta térmica, disco o memoria</li>
                <li>• Instalar impresoras, router o repetidor</li>
                <li>• Dejar varios equipos conectados en red (casa o negocio)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>Dónde:</strong> Barranquilla, Cartagena y Santa Marta, más sus alrededores
                cercanos.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Taller</h3>
              <p className="text-gray-700 mb-3">
                Cuando el equipo necesita algo que lleva más tiempo o herramientas especiales
                (limpieza a fondo, cambio de piezas, reparaciones más complicadas), me lo llevas o
                lo recojo, lo trabajo con calma y te lo devuelvo funcionando.
              </p>
              <p className="text-gray-700">
                <strong>Y te aviso antes</strong> si veo que el arreglo no vale la pena, para que no
                gastes de más en un equipo que ya cumplió.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo es el proceso</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                n: 1,
                t: 'Me escribes por WhatsApp',
                d: 'Me cuentas qué pasa. Te escucho y te oriento sin cobrarte.',
              },
              {
                n: 2,
                t: 'Te digo cómo lo vemos',
                d: 'Si conviene remoto, visita o taller. Y te cotizo claro.',
              },
              {
                n: 3,
                t: 'Seguimos si te sirve',
                d: 'Coordinamos día y hora, y lo dejamos funcionando.',
              },
            ].map((p) => (
              <div key={p.n} className="text-center">
                <div className="w-16 h-16 bg-[#F77F00] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {p.n}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.t}</h3>
                <p className="text-gray-700 text-sm">{p.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dónde atiendo en la Costa</h2>
          <p className="text-gray-700 mb-6">
            Voy a domicilio en Barranquilla, Cartagena y Santa Marta, incluyendo alrededores como
            Soledad, Malambo, Puerto Colombia y Turbaco. En el resto de la Costa trabajo de forma
            remota.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {ciudades.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3 hover:shadow-sm transition-shadow"
                >
                  <span className="font-medium text-gray-900">{c.nombre}</span>
                  <span className="text-sm text-gray-600">
                    {c.presencial ? 'A domicilio + remoto' : 'Remoto'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas soporte técnico ya?</h2>
            <p className="mb-6 text-lg">
              Escríbeme y te doy mi asesoría gratis por WhatsApp. Te digo si lo vemos remoto, si voy
              a tu casa o si conviene taller. Sin compromiso.
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
              <Link href="/cobertura" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                → Ver toda la cobertura en la Costa
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
