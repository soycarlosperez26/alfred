import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '../../lib/site'
import { getGuia, otrasGuias } from '../../lib/guias'
import { JsonLd, articuloSchema, breadcrumbSchema, faqSchema } from '../../lib/schema'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StickyWhatsApp from '../../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../../components/WhatsAppCTA'

const SLUG = 'recuperar-cuenta-google'
const guia = getGuia(SLUG)!
const mensajeWA = 'Hola Alfred, perdí el acceso a mi cuenta de Google y necesito ayuda. Te cuento:'

export const metadata: Metadata = {
  title: 'Cómo recuperar tu cuenta de Google o Gmail paso a paso',
  description:
    'Olvidaste la contraseña, perdiste el número de recuperación o te hackearon el Gmail. Los pasos oficiales de Google, los errores que te dejan por fuera y cómo evitar las estafas.',
  alternates: { canonical: `/guia/${SLUG}` },
  openGraph: {
    title: 'Cómo recuperar tu cuenta de Google o Gmail paso a paso',
    description:
      'Por qué el equipo desde el que lo intentas cambia tus posibilidades, y el dato que casi nadie sabe sobre las respuestas incorrectas.',
    type: 'article',
    locale: site.locale,
    url: `${site.url}/guia/${SLUG}`,
  },
}

const faqs = [
  {
    pregunta: '¿Se puede recuperar una cuenta de Gmail sin número de teléfono?',
    respuesta:
      'Sí, se puede, aunque es más difícil. Google no depende solo del teléfono: también usa el correo de recuperación, la fecha aproximada en que creaste la cuenta, contraseñas anteriores y si estás entrando desde un dispositivo y un lugar que ya conoce. Por eso, cuando no tienes el número, lo más importante es hacer el intento desde el computador o el celular donde la cuenta estaba abierta antes.',
  },
  {
    pregunta: '¿Cuántas veces puedo intentar recuperar mi cuenta?',
    respuesta:
      'Las que necesites. Google dice expresamente que no hay límite de intentos y que responder mal no te saca del proceso de recuperación. Mucha gente abandona después de dos intentos creyendo que se va a bloquear sola, y eso es justamente lo que no hay que hacer.',
  },
  {
    pregunta: '¿Qué hago si no me acuerdo de ninguna contraseña anterior?',
    respuesta:
      'Adivina. Suena raro, pero es lo que recomienda Google: pon la que más se parezca a lo que usabas en esa época, aunque no estés seguro. Es mejor responder con una aproximación que saltarse la pregunta, porque cada respuesta suma señales a tu favor y una equivocada no te descalifica.',
  },
  {
    pregunta: '¿Alguien puede recuperarme la cuenta por mí si le pago?',
    respuesta:
      'No, y esto es importante: Google no ofrece recuperación de cuentas por teléfono ni por servicios de terceros, y lo advierte en su propia documentación. Quien te prometa "recuperar tu cuenta hackeada" a cambio de un pago te está estafando, y muchas veces lo que busca es que le entregues datos para robarte otras cuentas. Yo tampoco puedo entrar a tu cuenta: lo que sí puedo es acompañarte en el proceso oficial y ayudarte con todo lo que quedó alrededor.',
  },
  {
    pregunta: 'Cambié mi correo de recuperación y no me funcionó, ¿qué pasó?',
    respuesta:
      'Los cambios en la información de recuperación pueden tardar hasta 7 días en tomar efecto. Es una medida de seguridad de Google, para que alguien que entre a tu cuenta no pueda bloquearte de inmediato. Si acabas de cambiar esos datos, espera unos días y vuelve a intentarlo.',
  },
  {
    pregunta: 'Perdí la cuenta y ahí estaba todo mi negocio, ¿qué hago?',
    respuesta:
      'Actúa en dos frentes al tiempo. Uno, sigue intentando la recuperación oficial desde tu equipo de siempre. Dos, asegura todo lo que dependía de ese correo: bancos, redes sociales, facturación electrónica. El correo es la llave de las demás cuentas, así que mientras está en riesgo, lo demás también. Escríbeme y ordenamos eso juntos.',
  },
]

export default function RecuperarCuentaGoogle() {
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
          { nombre: 'Recuperar cuenta de Google', url: `/guia/${SLUG}` },
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
              Cómo recuperar tu cuenta de Google o Gmail
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Perder el acceso al correo asusta, porque ahí está todo: las fotos, los documentos, el
              acceso al banco y a las redes. La buena noticia es que se recupera más seguido de lo
              que la gente cree. La mala es que casi todos lo intentan mal la primera vez y se
              rinden antes de tiempo.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aviso de estafa arriba del todo: es lo más urgente y lo que más confianza genera */}
          <div className="border-l-4 border-[#F77F00] bg-orange-50 p-6 rounded-r-lg mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Antes que nada: cuidado con quien te ofrezca recuperártela
            </h2>
            <p className="text-gray-700 mb-3">
              Google <strong>no recupera cuentas por teléfono</strong> y advierte expresamente que
              no uses servicios de terceros para esto. Nadie externo puede devolverte tu cuenta: ni
              un &ldquo;hacker&rdquo; de Facebook, ni una página que cobra por el trámite, ni yo.
            </p>
            <p className="text-gray-700">
              Si alguien te promete recuperarla a cambio de un pago, te está estafando. Y muchas
              veces lo que en realidad busca es que le entregues información para robarte las demás
              cuentas. El único camino real es el proceso oficial de Google, que es gratis y lo
              haces tú mismo.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            El error número uno: intentarlo desde el equipo equivocado
          </h2>
          <p className="text-gray-700 mb-4">
            Esto es lo que más veo y lo que más cambia el resultado. Cuando Google decide si te
            devuelve la cuenta, no solo mira si acertaste la contraseña: mira <em>desde dónde</em>{' '}
            estás preguntando.
          </p>
          <p className="text-gray-700 mb-4">
            Si intentas recuperarla desde el computador de un amigo, desde un café internet o
            conectado a una red que nunca usaste, para Google eres un desconocido y desconfía. Si lo
            haces desde el celular o el computador donde esa cuenta estuvo abierta durante años,
            conectado al wifi de tu casa, ya reconoce algo tuyo y te lo pone más fácil.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 mb-12">
            <p className="text-gray-800 font-semibold mb-3">Hazlo así:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Desde el celular o computador que usabas normalmente con esa cuenta</li>
              <li>• Conectado al wifi de tu casa o tu oficina, no a una red ajena</li>
              <li>• Con el navegador de siempre (el mismo Chrome, el mismo Safari)</li>
              <li>• Sin modo incógnito y sin VPN</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            El dato que casi nadie sabe: equivocarte no te descalifica
          </h2>
          <p className="text-gray-700 mb-4">
            La mayoría de la gente se salta las preguntas que no sabe, por miedo a que una respuesta
            mala arruine el intento. Es exactamente al revés.
          </p>
          <p className="text-gray-700 mb-4">
            Google dice de forma explícita que <strong>no hay límite de intentos</strong> y que las
            respuestas incorrectas no te sacan del proceso. Su propia recomendación es no saltarse
            ninguna pregunta: si no estás seguro, pon tu mejor aproximación.
          </p>
          <p className="text-gray-700 mb-12">
            Así que cuando te pregunte por una contraseña anterior y no recuerdes ninguna, escribe
            la que más se parezca a lo que usabas en esa época. Cada respuesta razonable suma; una
            pregunta en blanco no suma nada.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Los tres casos más comunes</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Caso 1: Olvidaste la contraseña, pero tienes tu celular
              </h3>
              <p className="text-gray-700 mb-3">
                Este es el escenario fácil y se resuelve en minutos. Entra a la página oficial de
                recuperación de Google, escribe tu correo y pide recuperar el acceso.
              </p>
              <p className="text-gray-700">
                Google te va a mandar un aviso al celular donde la cuenta ya estaba abierta, o un
                código por mensaje al número que tengas registrado. Confirmas, creas una contraseña
                nueva y listo. Si tienes verificación en dos pasos, aquí es donde sirven los códigos
                de respaldo que te dieron cuando la activaste.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Caso 2: No tienes el número ni el correo de recuperación
              </h3>
              <p className="text-gray-700 mb-3">
                Pasa muchísimo: cambiaste de número hace años, perdiste el chip, o el correo de
                recuperación era uno viejo que ya no existe. Aquí toca el camino largo, pero se
                puede.
              </p>
              <p className="text-gray-700 mb-3">
                Google te va a hacer preguntas para comprobar que la cuenta es tuya: contraseñas
                anteriores, más o menos cuándo la creaste, correos con los que solías escribirte.
                Responde todas, aunque sea aproximando.
              </p>
              <p className="text-gray-700">
                Y aquí aplica con más fuerza lo del equipo de siempre: cuando no tienes ni teléfono
                ni correo alterno, las señales del dispositivo y la ubicación pasan a ser tu
                argumento más fuerte.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Caso 3: Alguien entró y te cambió los datos
              </h3>
              <p className="text-gray-700 mb-3">
                Si sospechas que te hackearon, hay algo que juega a tu favor: los cambios en la
                información de recuperación <strong>tardan hasta 7 días en tomar efecto</strong>.
                Google lo hace justamente para que quien entre a tu cuenta no pueda bloquearte de
                una. Si actúas rápido, todavía puedes recibir el código en tu número viejo.
              </p>
              <p className="text-gray-700">
                En paralelo, y esto es lo urgente: cambia de inmediato las contraseñas de todo lo
                que usaba ese correo como respaldo. Bancos, redes sociales, facturación. El correo
                es la llave maestra, y mientras esté comprometido, lo demás también lo está.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Si Google definitivamente dice que no
          </h2>
          <p className="text-gray-700 mb-4">
            Hay casos en los que no se logra, y prefiero decírtelo de frente en vez de darte falsas
            esperanzas. Cuando pasa, lo que queda es ordenar el daño:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4 mb-12">
            <li>
              • Rescatar lo que esté guardado localmente: fotos en el celular, documentos que
              alcanzaron a sincronizarse en el computador
            </li>
            <li>• Crear una cuenta nueva y avisarles a tus contactos importantes</li>
            <li>• Cambiar el correo de respaldo en el banco, la DIAN, las redes y los servicios</li>
            <li>• Dejar la cuenta nueva bien configurada para que esto no se repita</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cómo evitar que te vuelva a pasar
          </h2>
          <p className="text-gray-700 mb-4">
            Diez minutos hoy te ahorran semanas de angustia después. Revisa estas cuatro cosas en tu
            cuenta:
          </p>
          <ul className="space-y-3 text-gray-700 ml-4 mb-12">
            <li>
              • <strong>Que el número registrado sea el que usas hoy.</strong> Este es el que más se
              desactualiza, porque la gente cambia de número y no se acuerda de avisarle a Google.
            </li>
            <li>
              • <strong>Que tengas un correo de recuperación vivo</strong>, de otro proveedor y al
              que sí entres de vez en cuando.
            </li>
            <li>
              • <strong>Activa la verificación en dos pasos</strong> y guarda los códigos de respaldo
              en papel, en un cajón. No en el mismo correo que estás protegiendo.
            </li>
            <li>
              • <strong>No uses la misma contraseña</strong> del correo en ningún otro lado. Si se
              filtra en otra página, se llevan tu correo y con él todo lo demás.
            </li>
          </ul>

          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
            <h2 className="text-2xl font-bold mb-4">¿Estás atascado en la recuperación?</h2>
            <p className="mb-6 text-lg">
              No puedo entrar a tu cuenta (nadie puede), pero sí puedo acompañarte en el proceso
              oficial para que no cometas los errores que te dejan por fuera, ayudarte a rescatar lo
              que quedó en tus equipos y asegurar el resto de tus cuentas. Cuéntame tu caso, que esa
              asesoría es gratis.
            </p>
            <WhatsAppCTA location={`guia-${SLUG}`} mensaje={mensajeWA}>
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Cuéntame qué te pasó
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
