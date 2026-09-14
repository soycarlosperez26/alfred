import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '../../lib/site'
import { getGuia, otrasGuias } from '../../lib/guias'
import { JsonLd, articuloSchema, breadcrumbSchema, faqSchema } from '../../lib/schema'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StickyWhatsApp from '../../components/StickyWhatsApp'
import WhatsAppCTA, { WhatsAppIcon } from '../../components/WhatsAppCTA'

const SLUG = 'liberar-espacio-celular'
const guia = getGuia(SLUG)!
const mensajeWA = 'Hola Alfred, mi celular no tiene espacio y no sé qué borrar. Te cuento:'

export const metadata: Metadata = {
  title: 'El celular no tiene espacio: cómo liberarlo sin borrar tus fotos',
  description:
    'Qué ocupa el espacio de verdad en tu celular, en qué orden liberarlo y por qué borrar fotos casi nunca es la solución. Guía gratis, sin apps limpiadoras.',
  alternates: { canonical: `/guia/${SLUG}` },
  openGraph: {
    title: 'El celular no tiene espacio: cómo liberarlo sin borrar tus fotos',
    description:
      'El culpable casi siempre es el mismo, y no son tus fotos. Cómo arreglarlo de raíz en diez minutos.',
    type: 'article',
    locale: site.locale,
    url: `${site.url}/guia/${SLUG}`,
  },
}

const faqs = [
  {
    pregunta: '¿Sirven las aplicaciones que prometen limpiar el celular?',
    respuesta:
      'No, y varias hacen daño. Casi todas se limitan a borrar caché, que es algo que tu celular ya hace solo, y a cambio se quedan corriendo de fondo, te llenan de publicidad, piden permisos que no necesitan y a veces gastan más batería y espacio de lo que liberan. Todo lo que hacen de útil lo puedes hacer tú desde los ajustes en cinco minutos.',
  },
  {
    pregunta: '¿Por qué mi celular dice que está lleno si tengo pocas fotos?',
    respuesta:
      'Porque casi nunca son las fotos. En Colombia el culpable número uno es WhatsApp: los videos y audios que se descargan solos de los grupos ocupan muchísimo más que tu galería. Mira el detalle del almacenamiento en los ajustes y casi siempre WhatsApp está de primero en la lista.',
  },
  {
    pregunta: '¿Si borro las fotos de la galería se borran de la nube también?',
    respuesta:
      'Depende de qué opción uses, y aquí es donde la gente pierde sus recuerdos. Si usas la función de "liberar espacio" de la aplicación de fotos, se borran solo del celular y quedan en la nube. Pero si las borras a mano desde la galería estando sincronizado, se pueden borrar de los dos lados. Antes de borrar cualquier cosa, confirma que ya subieron.',
  },
  {
    pregunta: '¿Qué es el espacio que aparece como "otros" o "sistema"?',
    respuesta:
      'Son archivos temporales, actualizaciones y datos internos del sistema. No se borran manualmente y no deberías intentar forzarlo. Muchas veces se reduce solo al reiniciar el celular y dejarlo un rato conectado al wifi. Si ocupa una cantidad exagerada, ahí sí conviene revisarlo con calma.',
  },
  {
    pregunta: 'Ya borré todo y sigue lleno, ¿qué hago?',
    respuesta:
      'Puede ser que el equipo simplemente se quedó corto para lo que haces hoy, o que haya algo mal configurado que está duplicando archivos. Escríbeme y lo miramos: en la mayoría de los casos se soluciona sin comprar nada, y si de verdad toca cambiar de equipo, te lo digo con franqueza en vez de hacerte gastar en un arreglo que no vale la pena.',
  },
]

export default function LiberarEspacioCelular() {
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
          { nombre: 'Liberar espacio en el celular', url: `/guia/${SLUG}` },
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

            <p className="text-[#F77F00] font-medium mb-4">Guía gratis · Celulares</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              El celular dice que no tiene espacio
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Lo primero que hace todo el mundo es empezar a borrar fotos, y es justo lo que menos
              sirve. El espacio casi siempre se lo está comiendo otra cosa, y una vez la encuentras,
              recuperas varios gigas en diez minutos sin perder un solo recuerdo.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Paso cero: mira qué está ocupando el espacio
          </h2>
          <p className="text-gray-700 mb-4">
            No borres nada todavía. Entra a los ajustes de tu celular y busca la sección de
            almacenamiento. Ahí te aparece la lista de qué ocupa cuánto, ordenada de mayor a menor.
          </p>
          <p className="text-gray-700 mb-12">
            Esa lista es toda la guía. Nueve de cada diez veces que reviso un celular en la Costa, el
            primer lugar lo tiene el mismo sospechoso.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            El culpable número uno: WhatsApp
          </h2>
          <p className="text-gray-700 mb-4">
            No son tus conversaciones, que pesan casi nada. Son los <strong>videos, audios y fotos
            que se descargan solos</strong> de los grupos: la cadena de la familia, el grupo del
            colegio, el de la cuadra. Cada video que alguien reenvía se guarda en tu celular aunque
            nunca lo hayas abierto.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Arréglalo de raíz (30 segundos)</h3>
            <p className="text-gray-700 mb-3">
              En los ajustes de WhatsApp, entra a la sección de almacenamiento y datos, y{' '}
              <strong>desactiva la descarga automática</strong> de fotos, audios, videos y
              documentos. Deja todo en manual.
            </p>
            <p className="text-gray-700">
              A partir de ahí, solo se descarga lo que tú toques. Este es el cambio que evita que el
              problema vuelva dentro de dos meses.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Y ahora limpia lo acumulado</h3>
            <p className="text-gray-700">
              En esa misma sección, WhatsApp tiene una herramienta que te muestra{' '}
              <strong>los archivos más pesados y los que fueron reenviados muchas veces</strong>,
              ordenados por tamaño. Ahí puedes borrar de una los videos grandes que nunca te
              interesaron, sin perder ninguna conversación. Es donde más espacio se recupera de
              golpe.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Las fotos: sube primero, borra después
          </h2>
          <p className="text-gray-700 mb-4">
            Si después de WhatsApp todavía te falta espacio, ahí sí llegó el turno de las fotos. Pero
            con cuidado, porque aquí es donde la gente pierde sus recuerdos para siempre.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Primero confirma que ya están respaldadas en la nube.</strong> No asumas que
            subieron: ábrelo y verifica que la copia de seguridad esté al día y terminada.
          </p>
          <p className="text-gray-700 mb-12">
            Y usa la opción de <strong>&ldquo;liberar espacio&rdquo;</strong> de la propia aplicación
            de fotos, que borra del celular lo que ya está a salvo en la nube. Si en cambio las
            borras a mano desde la galería estando sincronizado, se pueden borrar de los dos lados y
            no hay vuelta atrás.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lo que sigue en la lista</h2>
          <ul className="space-y-3 text-gray-700 ml-4 mb-12">
            <li>
              • <strong>Aplicaciones que no usas.</strong> Mira la lista por tamaño y sé honesto:
              esa app que abriste dos veces en un año ocupa espacio todos los días.
            </li>
            <li>
              • <strong>El caché de las apps grandes.</strong> Las de video y redes sociales guardan
              lo que ya viste. Borrar su caché desde los ajustes no te desconecta ni te borra nada
              tuyo, y suele liberar bastante.
            </li>
            <li>
              • <strong>Descargas viejas.</strong> La carpeta de descargas acumula PDF, recibos e
              imágenes que bajaste una vez y nunca volviste a abrir.
            </li>
            <li>
              • <strong>Música y podcasts descargados</strong> para oír sin internet. Ocupan mucho y
              casi siempre se pueden volver a bajar cuando los necesites.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Lo que no debes hacer: las apps limpiadoras
          </h2>
          <p className="text-gray-700 mb-4">
            Te lo digo derecho porque me lo preguntan todas las semanas: esas aplicaciones que
            prometen limpiar y acelerar tu celular no sirven, y varias empeoran las cosas.
          </p>
          <p className="text-gray-700 mb-4">
            Lo único que hacen de verdad es borrar caché, que es algo que tu celular ya administra
            solo. A cambio se quedan corriendo de fondo, te llenan de publicidad, piden permisos que
            no tienen por qué pedir y terminan gastando batería y espacio.
          </p>
          <p className="text-gray-700 mb-12">
            Todo lo que hacen de útil lo acabas de hacer tú, gratis y sin instalar nada.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Si aun así sigue lleno</h2>
          <p className="text-gray-700 mb-4">
            Reinicia el celular y déjalo un rato conectado al wifi: parte del espacio que aparece
            como &ldquo;otros&rdquo; o &ldquo;sistema&rdquo; se acomoda solo después de reiniciar.
          </p>
          <p className="text-gray-700 mb-12">
            Si después de todo esto el equipo sigue ahogado, puede ser que simplemente se quedó corto
            para lo que haces hoy, o que algo esté mal configurado y te esté duplicando archivos. Eso
            ya toca mirarlo caso por caso.
          </p>

          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-8 text-white my-12">
            <h2 className="text-2xl font-bold mb-4">¿Hiciste todo y sigue sin espacio?</h2>
            <p className="mb-6 text-lg">
              Mándame una foto de la pantalla de almacenamiento de tu celular y te digo qué está
              pasando. Si se arregla configurando, te explico cómo y listo; si de verdad el equipo se
              quedó corto, te lo digo de frente en vez de hacerte gastar en vano.
            </p>
            <WhatsAppCTA location={`guia-${SLUG}`} mensaje={mensajeWA}>
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Mandarle la foto a Alfred
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
