'use client'

import Image from "next/image";
import Link from "next/link";
import { trackWhatsAppClick } from "../../analytics";

export default function MantenimientoPreventivoCartagena() {
  const whatsappLink = "https://wa.me/573044775117?text=Hola%20Alfred%2C%20necesito%20una%20mano%20con";
  const phoneNumber = "+57 304 477 5117";

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Alfred - Soporte técnico Barranquilla y Cartagena"
                width={120}
                height={48}
                priority
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <Link href="/#servicios" className="text-gray-700 hover:text-[#0077B6] transition-colors">Qué arreglo</Link>
              <Link href="/#como-es" className="text-gray-700 hover:text-[#0077B6] transition-colors">Cómo es</Link>
              <Link href="/#zona" className="text-gray-700 hover:text-[#0077B6] transition-colors">Zona</Link>
              <Link href="/#preguntas" className="text-gray-700 hover:text-[#0077B6] transition-colors">Preguntas</Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('guia-mantenimiento-cartagena-header')}
                className="bg-[#F77F00] text-white px-4 py-2 rounded-lg hover:bg-[#e67300] transition-colors font-medium"
              >
                Escribime por WhatsApp
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('guia-mantenimiento-cartagena-nav')}
              className="md:hidden bg-[#F77F00] text-white px-4 py-2 rounded-lg hover:bg-[#e67300] transition-colors text-sm font-medium"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#F77F00] font-medium mb-4">Guía Alfred</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mantenimiento preventivo en Cartagena: menos calor, menos sustos
            </h1>
            <div className="bg-[#F77F00] bg-opacity-10 border-l-4 border-[#F77F00] p-4 mb-6 rounded">
              <p className="text-lg text-gray-900 font-medium">
                💡 Si el ventilador suena a avión en Bocagrande, no es "así es el portátil". Si suena a licuadora, es polvo.
              </p>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Limpieza, temperaturas y optimización para que tu PC aguante el clima de Cartagena. El mantenimiento preventivo evita que un equipo que anda bien se convierta en un dolor de cabeza.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Qué es el mantenimiento preventivo</h2>
            <p className="text-gray-700 mb-8">
              Es revisar y limpiar el equipo <strong>antes</strong> de que falle. En Cartagena, donde el calor y la humedad aceleran el desgaste, el preventivo te ahorra disgustos.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🧹 Limpieza física interna</h3>
                <p className="text-gray-700">
                  Abrir el PC o portátil, sacar el polvo del ventilador, disipador y ranuras. El polvo bloquea el aire y el equipo se recalienta. En Cartagena esto es crítico.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌡️ Control de temperatura</h3>
                <p className="text-gray-700">
                  Cambio de pasta térmica si hace falta, revisión de ventiladores. El objetivo es que el equipo no se cocine por dentro con el clima de Cartagena.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💾 Optimización del sistema</h3>
                <p className="text-gray-700">
                  Limpieza de archivos basura, actualizaciones, chequeo de programas que se abren solos, antivirus. Que el equipo arranque rápido y no se trabe.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 Diagnóstico de componentes</h3>
                <p className="text-gray-700">
                  Reviso disco duro, memoria, conexiones. Si algo está por fallar, te aviso y vemos si lo cambiamos o seguimos así un poco más.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cada cuánto hacerlo en Cartagena</h2>
            <p className="text-gray-700 mb-4">
              <strong>Recomendación general:</strong> cada 6–12 meses.
            </p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-4">
              <li>• Si el equipo está en casa sin aire o en oficina con polvo: cada 6 meses</li>
              <li>• Si está en ambiente con aire acondicionado y limpio: cada 12 meses</li>
              <li>• Si ya el ventilador hace ruido o el equipo se calienta mucho: hacelo ya</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cuándo saber que ya le toca?</h2>
            <p className="text-gray-700 mb-4">
              Señales de que tu PC necesita mantenimiento:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-4">
              <li>• El ventilador suena fuerte (como avión o licuadora)</li>
              <li>• El equipo está caliente al tacto</li>
              <li>• Se apaga solo o se reinicia de la nada</li>
              <li>• Arranca lento o se traba más que antes</li>
            </ul>

            <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu PC necesita mantenimiento en Cartagena?</h3>
              <p className="mb-6 text-lg">
                Escribime y te doy 15 minutos gratis de asesoría por WhatsApp. Te digo si le toca mantenimiento, qué incluye, y te cotizo claro.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('guia-mantenimiento-cartagena')}
                className="inline-flex items-center justify-center bg-[#F77F00] text-white px-8 py-4 rounded-lg hover:bg-[#e67300] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hablemos por WhatsApp
              </a>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Preguntas frecuentes</h2>
            
            <div className="space-y-6">
              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Cada cuánto le hago mantenimiento en Cartagena?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Cada 6–12 meses. Si tu equipo está en ambiente con polvo o sin aire, mejor cada 6. Si está en aire acondicionado, aguanta 12 meses.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿El mantenimiento alarga la vida del PC?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí. Evitar sobrecalentamiento y mantener el sistema limpio puede sumarle años al equipo. En Cartagena, donde el calor es constante, el mantenimiento es clave.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Vas a domicilio en Cartagena?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí, voy a domicilio en Cartagena y alrededores. También podés llevarme el equipo a taller si preferís. Lo que te quede más cómodo.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Cuánto cuesta?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Depende de qué incluya (limpieza física, pasta térmica, optimización). Te cotizo después de escucharte 15 minutos gratis por WhatsApp.
                </p>
              </details>
            </div>

            <div className="mt-16 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sigue leyendo</h3>
              <div className="space-y-4">
                <Link href="/guia/mantenimiento-computadores-barranquilla" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                  → Mantenimiento de computadores en Barranquilla
                </Link>
                <Link href="/guia/limpieza-portatil-barranquilla" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                  → Limpieza de portátil en Barranquilla
                </Link>
                <Link href="/guia/wifi-lento-cartagena" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                  → Wi‑Fi lento en Cartagena: 3 tips que sí ayudan
                </Link>
                <Link href="/guia/soporte-tecnico-a-domicilio-barranquilla-cartagena" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                  → Soporte técnico a domicilio en Barranquilla y Cartagena
                </Link>
                <Link href="/" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                  → Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('guia-mantenimiento-cartagena-sticky')}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/logo.svg"
                alt="Alfred"
                width={120}
                height={48}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm">Tu técnico de confianza en la Costa.</p>
              <p className="text-sm mt-2">Barranquilla y Cartagena</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contacto</h3>
              <p className="text-sm mb-2">WhatsApp: {phoneNumber}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('guia-mantenimiento-cartagena-footer')}
                className="text-[#F77F00] hover:text-[#e67300] text-sm"
              >
                Escribime →
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Alfred. Soporte técnico Barranquilla y Cartagena.</p>
            <Link href="/privacidad" className="text-[#F77F00] hover:text-[#e67300] mt-2 inline-block">
              Política de privacidad
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
