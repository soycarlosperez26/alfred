import type { Metadata } from 'next'
import Link from 'next/link'
import { guias } from '../lib/guias'
import { site } from '../lib/site'
import { JsonLd, breadcrumbSchema } from '../lib/schema'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyWhatsApp from '../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../components/WhatsAppCTA'

export const metadata: Metadata = {
  title: 'Guías gratis de tecnología para la Costa',
  description:
    'Guías claras y sin tecnicismos para resolver problemas de computadores, Wi-Fi y datos. Escritas por un ingeniero con 15 años de experiencia en la Costa Atlántica.',
  alternates: { canonical: '/guias' },
  openGraph: {
    title: `Guías gratis de tecnología | ${site.name}`,
    description:
      'Resuelve tú mismo lo que se puede resolver. Y si no, escríbeme: la primera asesoría es gratis.',
    type: 'website',
    locale: site.locale,
    url: `${site.url}/guias`,
  },
}

export default function GuiasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { nombre: 'Inicio', url: '/' },
          { nombre: 'Guías', url: '/guias' },
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
              <span className="text-gray-900">Guías</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Guías gratis, sin tecnicismos
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Hay cosas que puedes resolver tú mismo sin pagarle a nadie, y prefiero
              enseñártelas. Si después de leer sigues atascado, me escribes y lo vemos juntos.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {guias.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guia/${g.slug}`}
                  className="flex flex-col bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  {g.ciudad && (
                    <span className="text-xs font-semibold text-[#F77F00] mb-2 uppercase tracking-wide">
                      {g.ciudad}
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{g.titulo}</h2>
                  <p className="text-gray-700 mb-4 flex-1">{g.resumen}</p>
                  <span className="text-[#0077B6] font-medium">Leer guía →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu caso no está en ninguna guía?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cuéntame qué te pasa. Las dudas no se cobran.
            </p>
            <WhatsAppCTA
              location="cta-guias"
              mensaje="Hola Alfred, leí tus guías y tengo una duda sobre"
            >
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Preguntarle a Alfred
            </WhatsAppCTA>
          </div>
        </section>
      </main>

      <StickyWhatsApp />
      <Footer />
    </>
  )
}
