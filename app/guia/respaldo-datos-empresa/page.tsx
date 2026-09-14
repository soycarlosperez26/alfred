import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '../../lib/site'
import { getGuia, otrasGuias } from '../../lib/guias'
import { JsonLd, articuloSchema, breadcrumbSchema, faqSchema } from '../../lib/schema'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StickyWhatsApp from '../../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../../components/WhatsAppCTA'

const SLUG = 'respaldo-datos-empresa'
const guia = getGuia(SLUG)!

export const metadata: Metadata = {
  title: 'Si se daña el disco duro, ¿pierdes tu empresa? Cómo respaldar bien',
  description:
    'Cómo proteger la información de tu negocio con la regla 3-2-1, explicada sin tecnicismos. Guía gratis para empresas y profesionales de la Costa Atlántica.',
  alternates: { canonical: `/guia/${SLUG}` },
  openGraph: {
    title: 'Si se daña el disco duro, ¿pierdes tu empresa? Cómo respaldar bien',
    description: 'La regla 3-2-1 explicada en cristiano, y los errores que veo todo el tiempo.',
    type: 'article',
    locale: site.locale,
    url: `${site.url}/guia/${SLUG}`,
  },
}

const faqs = [
  {
    pregunta: '¿Cada cuánto debo hacer copia de seguridad?',
    respuesta:
      'La pregunta correcta es otra: ¿cuánto trabajo estás dispuesto a rehacer si mañana pierdes todo? Si la respuesta es "un día", tu respaldo tiene que ser diario. Si es "una semana", semanal. Para la mayoría de los negocios pequeños que atiendo, diario y automático es lo que tiene sentido, porque lo que no es automático se olvida.',
  },
  {
    pregunta: '¿Guardar todo en la nube es suficiente?',
    respuesta:
      'Ayuda mucho, pero ojo con una trampa: los servicios de sincronización copian también los errores. Si un virus daña tus archivos o alguien borra una carpeta por accidente, eso se sincroniza a la nube en segundos y el daño queda replicado. Por eso la nube tiene que acompañarse de una copia que no se sincronice sola.',
  },
  {
    pregunta: '¿Se puede recuperar la información de un disco dañado?',
    respuesta:
      'A veces sí y a veces no, y no se sabe hasta que se intenta. Cuando sí se puede, la recuperación profesional cuesta bastante más que haber tenido un respaldo funcionando. Y cuando no se puede, no hay plata que lo arregle. Por eso insisto tanto: respaldar es barato comparado con recuperar.',
  },
  {
    pregunta: '¿Esto aplica si soy independiente y no tengo empresa?',
    respuesta:
      'Aplica igual, y a veces más. Un profesional independiente suele tener un solo equipo con todo adentro: sus trabajos, su contabilidad, sus contactos. Si ese equipo falla, se para el negocio completo. Montar un respaldo decente en un caso así es rápido y no es caro.',
  },
]

export default function RespaldoDatosEmpresa() {
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
          { nombre: 'Respaldo de datos', url: `/guia/${SLUG}` },
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

            <p className="text-[#F77F00] font-medium mb-4">Guía gratis · Empresas</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Si se daña el disco duro, ¿pierdes tu empresa?
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Los discos duros no avisan. Un día prenden y al otro no. La pregunta que le hago a
              todo negocio que atiendo es la misma: si mañana ese equipo no enciende, ¿qué se
              pierde? Casi siempre la respuesta incomoda.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            El error que veo una y otra vez
          </h2>
          <p className="text-gray-700 mb-4">
            La mayoría de los negocios pequeños que atiendo en la Costa creen que están
            respaldados. Y cuando reviso, encuentro casi siempre lo mismo:
          </p>
          <ul className="space-y-3 text-gray-700 ml-4 mb-8">
            <li>
              • <strong>La copia está en el mismo computador</strong>, en otra carpeta o en otra
              partición. Si el disco falla, se van las dos al tiempo.
            </li>
            <li>
              • <strong>Hay un disco externo</strong>, pero vive conectado permanentemente. Un virus
              que cifre el equipo se lleva también el externo.
            </li>
            <li>
              • <strong>Alguien hace la copia a mano</strong> cuando se acuerda. Y llevaba cuatro
              meses sin acordarse.
            </li>
            <li>
              • <strong>Nunca han probado restaurar.</strong> Este es el peor, porque la gente
              descubre que su respaldo no servía justo el día que lo necesita.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            La regla 3-2-1, en cristiano
          </h2>
          <p className="text-gray-700 mb-6">
            Es el estándar que usamos en el mundo técnico, y lo bueno es que se entiende en treinta
            segundos:
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3 copias de tu información</h3>
              <p className="text-gray-700">
                La que usas todos los días, más dos copias de respaldo. No una: dos. Porque un
                respaldo también se puede dañar, y si era el único, quedaste igual que al principio.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2 tipos de almacenamiento distintos
              </h3>
              <p className="text-gray-700">
                Por ejemplo: el disco del computador y un disco externo. O el computador y la nube.
                La idea es no poner todo en el mismo tipo de aparato, porque los aparatos del mismo
                tipo tienden a fallar por las mismas razones.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1 copia fuera del sitio</h3>
              <p className="text-gray-700">
                Fuera de la oficina. Esta es la que salva cuando el problema no es el equipo sino el
                lugar: un robo, un incendio, una inundación, un daño eléctrico que se lleva todo lo
                que estaba conectado. Aquí en la Costa, con las tormentas eléctricas y los cortes de
                luz, esto no es paranoia: es lo que hay.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Lo que nadie hace y es lo más importante
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Probar que el respaldo sirve.</strong> Un respaldo que nunca has restaurado no
            es un respaldo, es una suposición.
          </p>
          <p className="text-gray-700 mb-8">
            Una vez al mes, agarra un archivo cualquiera de la copia e intenta abrirlo desde cero.
            Si se abre bien, tu sistema funciona. Si no, mejor enterarte hoy que el día que se dañe
            todo.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Cuánto cuesta esto realmente
          </h2>
          <p className="text-gray-700 mb-4">
            Montar un respaldo automático y bien pensado para un negocio pequeño es de las cosas más
            baratas que puedes hacer en tecnología. Se hace una vez, queda funcionando solo y casi
            no hay que tocarlo.
          </p>
          <p className="text-gray-700 mb-8">
            Intentar recuperar información de un disco dañado, en cambio, es de las cosas más caras
            que existen, y ni siquiera garantiza resultado. La cuenta se hace sola.
          </p>

          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
            <h2 className="text-2xl font-bold mb-4">
              ¿Quieres saber qué tan expuesto estás?
            </h2>
            <p className="mb-6 text-lg">
              Cuéntame cómo guardas hoy la información de tu negocio y te digo sin costo dónde está
              el hueco. Si quieres que yo te monte el respaldo funcionando, eso sí lo cotizamos, pero
              el diagnóstico es gratis.
            </p>
            <WhatsAppCTA
              location={`guia-${SLUG}`}
              mensaje="Hola Alfred, quiero revisar cómo tengo respaldada la información de mi negocio."
            >
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Pedir el diagnóstico gratis
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
