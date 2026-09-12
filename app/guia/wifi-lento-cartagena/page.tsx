'use client'

import Image from "next/image";
import Link from "next/link";
import { trackWhatsAppClick } from "../../analytics";

export default function WifiLentoCartagena() {
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
                onClick={() => trackWhatsAppClick('guia-wifi-lento-cartagena-header')}
                className="bg-[#F77F00] text-white px-4 py-2 rounded-lg hover:bg-[#e67300] transition-colors font-medium"
              >
                Escribime por WhatsApp
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('guia-wifi-lento-cartagena-nav')}
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
              El Wi‑Fi de la casa en Cartagena no es brujería
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Internet que patea, videos que se traban, llamadas que se cortan. No siempre es el operador. A veces es la ubicación del router, las paredes o cosas que podés arreglar vos mismo en Cartagena.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3 tips que sí ayudan</h2>
            
            <div className="space-y-8 mb-12">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Ubicación del router</h3>
                <p className="text-gray-700 mb-3">
                  El router en el rincón, detrás del mueble o en el cuarto del fondo no sirve. Poné el router:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Lo más al centro de la casa que puedas</li>
                  <li>• Alto, no en el piso</li>
                  <li>• Sin paredes gruesas entre el router y donde usás internet</li>
                  <li>• Alejado del microondas y otros electrodomésticos</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Si el cable del operador no llega hasta ahí, hablame y vemos si podemos pasar un cable o usar un repetidor bien puesto.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Reinicio completo</h3>
                <p className="text-gray-700 mb-3">
                  Parece bobo, pero sirve. Apagá el router (desenchufalo), esperá 30 segundos, volvelo a enchufar. A veces eso solo ya mejora.
                </p>
                <p className="text-gray-700">
                  Si tenés módem + router (dos aparatos), desenchufalos los dos, esperá, y prendé primero el módem, esperá que prenda bien, y después el router.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Obstáculos y vecinos</h3>
                <p className="text-gray-700 mb-3">
                  Las paredes de concreto y los pisos frenan el Wi‑Fi. Si tu cuarto está lejos o el piso de arriba no agarra, capaz necesitás un repetidor o cable directo.
                </p>
                <p className="text-gray-700">
                  En edificios de Cartagena donde todos tienen Wi‑Fi, a veces las redes de los vecinos se pisan. Ahí podemos cambiar el canal del router para que funcione mejor.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuándo es el operador y cuándo no</h2>
            <p className="text-gray-700 mb-4">
              Si el internet anda mal <strong>por cable directo</strong> también, es el operador. Llamá y reclamá.
            </p>
            <p className="text-gray-700 mb-4">
              Si por cable anda bien pero por Wi‑Fi patea, el problema es tu red interna (router, ubicación, configuración). Ahí sí te puedo ayudar.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cuándo llamar a soporte técnico</h2>
            <p className="text-gray-700 mb-4">
              Si probaste esos tips y sigue igual, o si no sabés cómo hacerlo, escribime. Puedo:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8 ml-4">
              <li>• Revisar tu red remoto (te conecto y veo la configuración)</li>
              <li>• Ir a tu casa en Cartagena y ver el cableado, la ubicación, los aparatos</li>
              <li>• Ayudarte a poner un repetidor o pasar cable si hace falta</li>
              <li>• Configurar tu router para que funcione mejor (cambiar canal, mejorar seguridad, etc.)</li>
            </ul>

            <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu Wi‑Fi sigue pateando?</h3>
              <p className="mb-6 text-lg">
                Escribime y te doy 15 minutos gratis de asesoría por WhatsApp. Te ayudo a ver si es el operador, el router, o la ubicación en tu casa en Cartagena.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('guia-wifi-lento-cartagena')}
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
                  ¿Es culpa del operador?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Puede ser, o puede ser tu red interna. Conectá un cable directo del router al PC y probá. Si por cable anda bien, es tu Wi‑Fi, no el operador. Si por cable también está lento, reclamá al operador.
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
                  Sí, voy a domicilio en Cartagena si hace falta ver el cableado, la ubicación del router, o instalar algo. Si es solo configuración, capaz lo resolvemos remoto y te ahorrás la visita.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Necesito comprar un repetidor?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Depende. Si tu casa es grande o de dos pisos, capaz sí. Si es solo ubicación del router, no hace falta comprar nada. Hablamos y vemos. No te vendo algo que no necesitás.
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
                  Depende de qué haya que hacer (remoto, visita, repuesto). Después de los 15 minutos gratis te cotizo claro y vos decidís.
                </p>
              </details>
            </div>

            <div className="mt-16 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sigue leyendo</h3>
              <div className="space-y-4">
                <Link href="/guia/mantenimiento-preventivo-computador-cartagena" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                  → Mantenimiento preventivo de PC en Cartagena
                </Link>
                <Link href="/guia/pc-lento-barranquilla" className="block text-[#0077B6] hover:text-[#023E8A] font-medium">
                  → PC lento en Barranquilla: qué hacer antes de formatear
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
        onClick={() => trackWhatsAppClick('guia-wifi-lento-cartagena-sticky')}
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
                onClick={() => trackWhatsAppClick('guia-wifi-lento-cartagena-footer')}
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
