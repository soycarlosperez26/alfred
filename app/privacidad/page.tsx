import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | Alfred",
  description: "Política de privacidad de Alfred - Soporte técnico Barranquilla y Cartagena",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Alfred - Soporte técnico Barranquilla y Cartagena"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de privacidad</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-6">
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que recopilamos</h2>
              <p className="text-gray-700 mb-4">
                Cuando te ponés en contacto conmigo por WhatsApp, recopilo la información que vos me das: 
                tu nombre, número de teléfono y detalles del problema técnico que tenés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo uso tu información</h2>
              <p className="text-gray-700 mb-4">
                Uso tu información solo para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Darte el soporte técnico que necesitás</li>
                <li>Coordinar visitas o asistencia remota</li>
                <li>Enviarte cotizaciones y seguimiento del servicio</li>
                <li>Mejorar mi servicio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Protección de tu información</h2>
              <p className="text-gray-700 mb-4">
                Tu información está segura. No la comparto con nadie más y solo la uso para prestarte el servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tus derechos</h2>
              <p className="text-gray-700 mb-4">
                Podés pedirme en cualquier momento que borre tu información. Escribime por WhatsApp y listo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tenés alguna pregunta sobre esta política, escribime por WhatsApp al +57 304 477 5117.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center text-[#0077B6] hover:text-[#023E8A] font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Alfred. Soporte técnico Barranquilla y Cartagena.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
