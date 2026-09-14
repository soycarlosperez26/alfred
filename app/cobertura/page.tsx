import type { Metadata } from 'next'
import Link from 'next/link'
import { ciudades, site } from '../lib/site'
import { JsonLd, breadcrumbSchema, faqSchema } from '../lib/schema'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyWhatsApp from '../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../components/WhatsAppCTA'

export const metadata: Metadata = {
  title: 'Dónde atiendo: soporte técnico en la Costa Atlántica',
  description:
    'Atiendo Barranquilla, Cartagena, Santa Marta, Montería, Valledupar y Sincelejo. Visita a domicilio en las tres primeras y soporte remoto en toda la Costa. Primera asesoría gratis.',
  alternates: { canonical: '/cobertura' },
  openGraph: {
    title: `Dónde atiendo | ${site.name}`,
    description:
      'Soporte técnico y asesoría tecnológica en toda la Costa Atlántica. Primera asesoría gratis por WhatsApp.',
    type: 'website',
    locale: site.locale,
    url: `${site.url}/cobertura`,
  },
}

const faqs = [
  {
    pregunta: '¿En qué ciudades atiendes a domicilio?',
    respuesta:
      'Voy a domicilio en Barranquilla, Cartagena y Santa Marta, más sus alrededores. En Montería, Valledupar y Sincelejo trabajo de forma remota, que para la mayoría de los problemas funciona igual de bien.',
  },
  {
    pregunta: '¿Qué tan bien funciona el soporte remoto?',
    respuesta:
      'Mejor de lo que la gente espera. Me conecto a tu computador con tu permiso, lo reviso contigo en vivo y vas viendo todo lo que hago. Sirve para equipos lentos, virus, configuración, programas, correo y respaldo. Lo único que no se puede hacer a distancia es cambiar una pieza física.',
  },
  {
    pregunta: 'Mi ciudad no está en la lista, ¿me puedes ayudar igual?',
    respuesta:
      'Escríbeme y vemos. Si tu problema se resuelve remoto, la ciudad da lo mismo. Y si necesitas a alguien en persona y yo no llego, te oriento gratis sobre qué pedir y qué precio es razonable, para que no te cobren de más.',
  },
]

export default function CoberturaPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Cobertura', url: '/cobertura' },
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
              <span className="text-gray-900">Cobertura</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Dónde atiendo en la Costa Atlántica
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Soy de aquí y trabajo para la gente de aquí. En unas ciudades voy en persona, en
              otras nos conectamos de forma remota. En todas, la primera asesoría es gratis.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {ciudades.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="block bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-baseline justify-between mb-2 gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">{c.nombre}</h2>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                        c.presencial
                          ? 'bg-[#0077B6] text-white'
                          : 'bg-white text-[#0077B6] border border-[#0077B6]'
                      }`}
                    >
                      {c.presencial ? 'A domicilio + remoto' : 'Remoto'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{c.departamento}</p>
                  <p className="text-gray-700 mb-4">{c.intro}</p>
                  <span className="text-[#0077B6] font-medium">Ver detalles de {c.nombre} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Preguntas sobre cobertura</h2>
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

        <section className="py-16 md:py-24 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No sabes si te puedo ayudar?</h2>
            <p className="text-xl mb-8 opacity-90">
              Pregúntame, que no cuesta nada. Si no es lo mío, te lo digo de frente.
            </p>
            <WhatsAppCTA location="cta-cobertura">
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Escríbeme por WhatsApp
            </WhatsAppCTA>
          </div>
        </section>
      </main>

      <StickyWhatsApp />
      <Footer />
    </>
  )
}
