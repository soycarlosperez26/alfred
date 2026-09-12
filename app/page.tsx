'use client'

import Image from "next/image";
import Link from "next/link";
import { trackWhatsAppClick } from "./analytics";

export default function Home() {
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
              <a href="#servicios" className="text-gray-700 hover:text-[#0077B6] transition-colors">Qué arreglo</a>
              <a href="#como-es" className="text-gray-700 hover:text-[#0077B6] transition-colors">Cómo es</a>
              <a href="#zona" className="text-gray-700 hover:text-[#0077B6] transition-colors">Zona</a>
              <a href="#preguntas" className="text-gray-700 hover:text-[#0077B6] transition-colors">Preguntas</a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('header')}
                className="bg-[#F77F00] text-white px-4 py-2 rounded-lg hover:bg-[#e67300] transition-colors font-medium"
              >
                Escribime por WhatsApp
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('nav')}
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#F77F00] font-medium mb-4">Tu técnico de confianza en la Costa</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ¿Se te trabó el PC, el Wi‑Fi o el celular? Yo te ayudo.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Soy Alfred — tu técnico de confianza en Barranquilla y Cartagena. Te escucho 15 minutos gratis por WhatsApp y te digo claro qué toca y cuánto, antes de tocar nada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('hero')}
                  className="inline-flex items-center justify-center bg-[#F77F00] text-white px-8 py-4 rounded-lg hover:bg-[#e67300] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Pedime una mano
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center border-2 border-[#0077B6] text-[#0077B6] px-8 py-4 rounded-lg hover:bg-[#0077B6] hover:text-white transition-colors text-lg font-medium"
                >
                  Qué puedo arreglar
                </a>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#0077B6] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Remoto, te visito, o lo vemos en taller</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#0077B6] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cotización clara antes de empezar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#0077B6] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>BQ, CTG y por aquí cerca</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qué arreglo</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 rounded-xl p-6 md:p-8">
                <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Computadores y portátiles</h3>
                <p className="text-gray-700">
                  Lentos, virus, formateo, actualizaciones, disco, memoria, pasta térmica, sacar copia de tus cosas.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 md:p-8">
                <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Redes y Wi‑Fi</h3>
                <p className="text-gray-700">
                  Internet que patea, router, cables, compartir impresora, oficina en la casa.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 md:p-8">
                <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Celulares</h3>
                <p className="text-gray-700">
                  Configurar, respaldar, actualizar, líos de software (si es pantalla/batería, lo vemos en persona).
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 md:p-8">
                <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Programas y cuentas</h3>
                <p className="text-gray-700">
                  Instalar lo que necesitás, correo, impresora, antivirus de verdad, ayuda remota segura.
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-600 italic">
              Si hay que comprar un repuesto, te lo digo en la cotización. Sin sorpresas.
            </p>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="como-es" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Cómo es</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F77F00] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Me escribís por WhatsApp</h3>
                <p className="text-gray-700">15 min gratis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F77F00] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vemos cómo</h3>
                <p className="text-gray-700">Remoto, te visito, o taller</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F77F00] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Te cotizo y seguimos</h3>
                <p className="text-gray-700">Solo si te late</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zone Section */}
        <section id="zona" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Zona</h2>
            <p className="text-xl text-gray-700">
              Barranquilla, Cartagena y alrededores; remoto / visita / taller.
            </p>
          </div>
        </section>

        {/* Guides Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Guías</h2>
            <p className="text-xl text-gray-700 mb-8">
              Tips que te pueden servir antes de llamar a un técnico
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/guia/pc-lento-barranquilla" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">PC lento en Barranquilla</h3>
                <p className="text-gray-700 text-sm mb-4">Qué hacer antes de formatear o cambiar nada</p>
                <span className="text-[#0077B6] font-medium text-sm">Leer guía →</span>
              </Link>
              <Link href="/guia/wifi-lento-cartagena" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Wi‑Fi lento en Cartagena</h3>
                <p className="text-gray-700 text-sm mb-4">3 tips que sí ayudan con internet que patea</p>
                <span className="text-[#0077B6] font-medium text-sm">Leer guía →</span>
              </Link>
              <Link href="/guia/soporte-tecnico-a-domicilio-barranquilla-cartagena" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Soporte a domicilio o remoto</h3>
                <p className="text-gray-700 text-sm mb-4">Cómo trabajo en Barranquilla y Cartagena</p>
                <span className="text-[#0077B6] font-medium text-sm">Leer guía →</span>
              </Link>
              <Link href="/guia/mantenimiento-computadores-barranquilla" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Mantenimiento de computadores</h3>
                <p className="text-gray-700 text-sm mb-4">Antes de que se muera de calor en Barranquilla</p>
                <span className="text-[#0077B6] font-medium text-sm">Leer guía →</span>
              </Link>
              <Link href="/guia/mantenimiento-preventivo-computador-cartagena" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Mantenimiento preventivo</h3>
                <p className="text-gray-700 text-sm mb-4">Menos calor, menos sustos en Cartagena</p>
                <span className="text-[#0077B6] font-medium text-sm">Leer guía →</span>
              </Link>
              <Link href="/guia/limpieza-portatil-barranquilla" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Limpieza de portátil</h3>
                <p className="text-gray-700 text-sm mb-4">El polvo gana si vos no en Barranquilla</p>
                <span className="text-[#0077B6] font-medium text-sm">Leer guía →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Me Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Por qué yo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Te hablo claro</h3>
                <p className="text-gray-700 text-sm">Sin vueltas ni palabras técnicas que confunden.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Un solo chat WhatsApp</h3>
                <p className="text-gray-700 text-sm">Todo por un lado, sin perderte en llamadas.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Casa y negocito</h3>
                <p className="text-gray-700 text-sm">Te atiendo igual si es tu PC o el de la tienda.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">No te vendo lo que no necesitás</h3>
                <p className="text-gray-700 text-sm">Si se arregla, se arregla. Si no, te digo.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm md:col-span-2 lg:col-span-2">
                <h3 className="font-bold text-gray-900 mb-2">Pronto: lo que dice la gente que ya me escribió</h3>
                <p className="text-gray-700 text-sm italic">Testimonios reales próximamente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿El equipo no prende, el Wi‑Fi falla o el celular se puso loco?
            </h2>
            <p className="text-xl mb-8 opacity-90">Escribime y te ayudo</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('final')}
              className="inline-flex items-center justify-center bg-[#F77F00] text-white px-8 py-4 rounded-lg hover:bg-[#e67300] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Hablemos por WhatsApp
            </a>
            <p className="mt-4 text-sm opacity-75">{phoneNumber}</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="preguntas" className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Preguntas</h2>
            <div className="space-y-6">
              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Cuánto cuesta?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Depende de qué necesitás. Te cotizo después de escucharte 15 minutos gratis por WhatsApp. Nada de sorpresas.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Puedo llamarte por teléfono?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Mejor escribime por WhatsApp así quedamos claros desde el principio y tenés el registro de todo. Es más cómodo para los dos.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Atendés solo Barranquilla y Cartagena?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Principalmente BQ y CTG, pero si estás cerca o es remoto, hablemos. Si puedo ayudarte, te digo; si no, también.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Qué tipo de equipos arreglás?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  PC, portátiles, celulares (software principalmente), redes, Wi-Fi, programas, cuentas. Si es otro aparato, preguntame.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿Vas a mi casa o tengo que ir donde vos?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Como te venga mejor: remoto, te visito, o lo miramos en taller. Lo decidimos después de hablar.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 list-none">
                  ¿De verdad son 15 minutos gratis?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí, de verdad. Te escucho, entiendo qué pasa y te doy una idea del camino. Si seguimos, te cotizo claro y arrancamos.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('sticky')}
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
                onClick={() => trackWhatsAppClick('footer')}
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
