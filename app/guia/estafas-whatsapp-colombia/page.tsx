import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '../../lib/site'
import { getGuia, otrasGuias } from '../../lib/guias'
import { JsonLd, articuloSchema, breadcrumbSchema, faqSchema } from '../../lib/schema'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StickyWhatsApp from '../../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../../components/WhatsAppCTA'

const SLUG = 'estafas-whatsapp-colombia'
const guia = getGuia(SLUG)!
const mensajeWA = 'Hola Alfred, creo que fui víctima de una estafa por WhatsApp. Te cuento qué pasó:'

export const metadata: Metadata = {
  title: 'Estafas por WhatsApp: cómo reconocerlas y qué hacer si caíste',
  description:
    'Las estafas de WhatsApp que más circulan en Colombia, la configuración que sí te protege y cómo recuperar tu cuenta si te la robaron. Guía gratis de un ingeniero con 15 años de experiencia.',
  alternates: { canonical: `/guia/${SLUG}` },
  openGraph: {
    title: 'Estafas por WhatsApp: cómo reconocerlas y qué hacer si caíste',
    description:
      'El código de 6 dígitos, el falso familiar que cambió de número, y la única configuración que de verdad protege tu cuenta.',
    type: 'article',
    locale: site.locale,
    url: `${site.url}/guia/${SLUG}`,
  },
}

const faqs = [
  {
    pregunta: '¿Cómo recupero mi WhatsApp si me robaron la cuenta?',
    respuesta:
      'Vuelve a instalar WhatsApp y registra tu número otra vez. Cuando escribas el código de 6 dígitos que te llega por mensaje de texto, quien esté usando tu cuenta queda desconectado automáticamente. Eso pasa tengas o no verificación en dos pasos. Si el ladrón alcanzó a poner un PIN, vas a tener que esperar 7 días para entrar sin él, pero la cuenta sigue siendo tuya y la recuperas.',
  },
  {
    pregunta: '¿Por qué no debo pasar nunca el código de 6 dígitos?',
    respuesta:
      'Porque ese código es la llave de tu cuenta. Quien lo tenga puede registrar tu WhatsApp en su celular y sacarte a ti. Por eso la estafa más común es alguien escribiéndote que "le llegó un código por error" y pidiéndote que se lo reenvíes. WhatsApp nunca te va a pedir ese código por chat, y ningún conocido de verdad lo necesita.',
  },
  {
    pregunta: 'Me escribió un familiar diciendo que cambió de número y necesita plata, ¿es estafa?',
    respuesta:
      'Casi siempre sí, y es la estafa que más plata mueve en Colombia. La regla es simple: nunca confirmes por el chat nuevo. Llama al número viejo que ya tienes guardado, o llámalo a la casa. Si de verdad cambió de número, no le molesta que lo verifiques; si es un estafador, ahí se cae el cuento.',
  },
  {
    pregunta: '¿La verificación en dos pasos de WhatsApp sirve de algo?',
    respuesta:
      'Es lo único que de verdad te protege, y se activa en un minuto. Es un PIN de 6 dígitos que WhatsApp te pide además del código por mensaje. Aunque alguien te robe el código de registro, sin tu PIN no puede entrar. Es la configuración más importante de esta guía.',
  },
  {
    pregunta: '¿Denunciar sirve para algo si ya me estafaron?',
    respuesta:
      'Sí, denuncia siempre. Aunque recuperar la plata es difícil, la denuncia deja constancia, que te sirve con el banco y para que el caso entre en las estadísticas que llevan a desmontar estas redes. Si fue una transferencia, avísale al banco de inmediato: mientras más rápido, más posibilidades hay de frenarla.',
  },
]

export default function EstafasWhatsApp() {
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
          { nombre: 'Estafas por WhatsApp', url: `/guia/${SLUG}` },
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

            <p className="text-[#F77F00] font-medium mb-4">Guía gratis · Cuentas y seguridad</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Estafas por WhatsApp: cómo reconocerlas y qué hacer si caíste
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Estas estafas no funcionan porque la gente sea boba. Funcionan porque están diseñadas
              para agarrarte con afán, con susto o con ilusión, que es cuando todos bajamos la
              guardia. Aquí te muestro las que más circulan, cómo se ven por dentro, y la única
              configuración que de verdad te protege.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Lo más accionable va primero: si solo lee esto, ya salió ganando */}
          <div className="border-l-4 border-[#0077B6] bg-blue-50 p-6 rounded-r-lg mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Si solo vas a hacer una cosa, haz esta
            </h2>
            <p className="text-gray-700 mb-3">
              Activa la <strong>verificación en dos pasos</strong> de WhatsApp. Es un PIN de 6
              dígitos que se te pide además del código que llega por mensaje. Se activa en un minuto
              desde los ajustes de la aplicación, en la sección de cuenta.
            </p>
            <p className="text-gray-700">
              Con eso, aunque un estafador consiga el código de registro, sin tu PIN no entra. Es la
              diferencia entre un susto y perder la cuenta.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Las 5 que más veo</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. &ldquo;Me llegó un código por error, ¿me lo pasas?&rdquo;
              </h3>
              <p className="text-gray-700 mb-3">
                La más peligrosa de todas, porque suele llegarte desde la cuenta de alguien que
                conoces (a quien ya le robaron la suya). Te dicen que se equivocaron de número y te
                piden que les reenvíes un código de 6 dígitos.
              </p>
              <p className="text-gray-700">
                <strong>Ese código es la llave de tu cuenta.</strong> Si lo entregas, registran tu
                WhatsApp en su celular y te sacan a ti. Después les escriben a todos tus contactos
                haciéndose pasar por ti. Ni WhatsApp ni ningún conocido de verdad te va a pedir ese
                código.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. &ldquo;Hola mamá, cambié de número&rdquo;
              </h3>
              <p className="text-gray-700 mb-3">
                Un número desconocido te escribe diciendo ser tu hijo, tu hermana o tu mamá, que
                perdió el celular y está escribiendo desde otro número. Al rato viene lo que
                buscaban: una transferencia urgente, un favor con Nequi, una consignación.
              </p>
              <p className="text-gray-700">
                <strong>La regla:</strong> nunca verifiques por el chat nuevo. Llama al número viejo
                que tienes guardado, o llama a la casa. Un familiar de verdad no se ofende porque lo
                confirmes; un estafador desaparece.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. El trabajo desde casa</h3>
              <p className="text-gray-700 mb-3">
                Te llega una oferta de empleo que no solicitaste, con un sueldo demasiado bueno y
                tareas ridículamente fáciles: dar likes, calificar hoteles, mover paquetes. Al
                principio hasta te pagan, poquito, para que confíes.
              </p>
              <p className="text-gray-700">
                Después viene el gancho: te piden que &ldquo;recargues&rdquo; o
                &ldquo;deposites&rdquo; algo para desbloquear una comisión mayor. Ahí es donde se
                llevan todo. Ningún trabajo legítimo te pide plata para poder trabajar.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                4. El link del banco o de la app de pagos
              </h3>
              <p className="text-gray-700 mb-3">
                Un mensaje que parece de tu banco o de tu billetera digital: que tienes un bloqueo,
                un premio, una transferencia pendiente. El enlace lleva a una página idéntica a la
                real, y ahí escribes tu clave con tus propias manos.
              </p>
              <p className="text-gray-700">
                <strong>Nunca entres al banco por un link que te llegó.</strong> Cierra el mensaje y
                abre la aplicación del banco directamente. Si de verdad hay algo pendiente, ahí va a
                aparecer.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5. El número equivocado que se vuelve amistad
              </h3>
              <p className="text-gray-700 mb-3">
                Empieza como un mensaje que &ldquo;no era para ti&rdquo;. La persona es amable, la
                conversación sigue, y durante semanas se construye una relación. En algún momento
                aparece una oportunidad de inversión, casi siempre en criptomonedas, con una
                plataforma que hasta te deja ver ganancias falsas.
              </p>
              <p className="text-gray-700">
                Esta es la más cruel porque es paciente. Si un desconocido de internet termina
                hablándote de invertir, ahí se acabó la conversación.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            El patrón: si tiene estas tres cosas, es estafa
          </h2>
          <p className="text-gray-700 mb-4">
            No hace falta conocer cada modalidad nueva. Casi todas comparten la misma estructura:
          </p>
          <ul className="space-y-3 text-gray-700 ml-4 mb-12">
            <li>
              • <strong>Urgencia.</strong> Hay que hacerlo ya, ahora, antes de que se venza. La
              prisa existe para que no pienses ni consultes con nadie.
            </li>
            <li>
              • <strong>Un canal que no puedes verificar.</strong> Un número nuevo, un link, una
              página que no es la oficial.
            </li>
            <li>
              • <strong>Plata o un código.</strong> Al final siempre te piden una de las dos cosas.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Si ya te robaron la cuenta</h2>
          <p className="text-gray-700 mb-4">
            Tranquilo, la cuenta sigue siendo tuya y se recupera. Haz esto en orden:
          </p>
          <ol className="space-y-3 text-gray-700 ml-4 mb-6">
            <li>
              <strong>1. Vuelve a registrar tu número en WhatsApp.</strong> Instala la aplicación y
              registra tu número otra vez. Apenas escribas el código de 6 dígitos que te llega por
              mensaje, <strong>quien esté usando tu cuenta queda desconectado automáticamente</strong>.
              Esto funciona tenga o no tenga PIN puesto.
            </li>
            <li>
              <strong>2. Si el ladrón puso un PIN</strong>, vas a tener que esperar 7 días para
              entrar sin él. Es molesto, pero es una protección: durante ese tiempo él tampoco puede
              hacer nada nuevo.
            </li>
            <li>
              <strong>3. Avísales a tus contactos por otro medio.</strong> Llamada, redes, el grupo
              de la familia. Mientras tengan tu cuenta, van a escribirles pidiéndoles plata en tu
              nombre.
            </li>
            <li>
              <strong>4. Activa la verificación en dos pasos</strong> apenas recuperes el acceso,
              para que no se repita.
            </li>
            <li>
              <strong>5. Si hubo plata de por medio, llama al banco de inmediato</strong> y pon la
              denuncia. Entre más rápido, más posibilidades hay de frenar la transferencia.
            </li>
          </ol>
          <p className="text-gray-700 mb-12">
            Y algo que quiero decirte con claridad: si caíste, no fue por bobo. Estas cosas están
            diseñadas por gente que hace esto todo el día, y le pasa a profesionales, a ingenieros y
            a personas que se creían inmunes. Lo importante ahora es actuar rápido, no castigarte.
          </p>

          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
            <h2 className="text-2xl font-bold mb-4">¿Te pasó y no sabes por dónde empezar?</h2>
            <p className="mb-6 text-lg">
              Escríbeme y vemos juntos qué está comprometido y en qué orden asegurarlo. Si es solo
              orientación, no te cobro nada: estas cosas se resuelven mejor rápido que tarde.
            </p>
            <WhatsAppCTA location={`guia-${SLUG}`} mensaje={mensajeWA}>
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Cuéntame qué pasó
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

      <StickyWhatsApp mensaje={mensajeWA} />
      <Footer />
    </>
  )
}
