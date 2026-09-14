/**
 * Datos estructurados (JSON-LD) para Google.
 *
 * Esto es lo que le permite a Google entender que Alfred Soluciona es un
 * negocio real, de servicio local, con una zona de cobertura concreta.
 * Sin esto el sitio es solo texto; con esto puede aparecer en el paquete
 * de mapas y con resultados enriquecidos.
 *
 * Referencia: https://schema.org/LocalBusiness
 */

import { site, ciudades, type Ciudad } from './site'

/** @id estable: permite que los distintos bloques JSON-LD se referencien entre sí */
const BUSINESS_ID = `${site.url}/#business`
const PERSON_ID = `${site.url}/#alfred`

/**
 * El negocio. Va una sola vez, en el layout raíz.
 *
 * Nota: es un "service area business" (negocio de área de servicio). No
 * declaramos una dirección física porque Alfred atiende a domicilio y remoto;
 * lo que importa es `areaServed`. Declarar una dirección falsa o imprecisa es
 * la forma más rápida de que Google desconfíe de la ficha.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: site.name,
    alternateName: 'Alfred',
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    priceRange: site.priceRange,
    image: `${site.url}/logo.svg`,
    logo: `${site.url}/logo.svg`,
    founder: { '@id': PERSON_ID },
    areaServed: ciudades.map((c) => ({
      '@type': 'City',
      name: c.nombre,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${c.departamento}, Colombia`,
      },
    })),
    knowsAbout: [
      'Reparación de computadores',
      'Mantenimiento de PC y portátiles',
      'Redes Wi-Fi y routers',
      'Respaldo y recuperación de datos',
      'Soporte técnico remoto',
      'Asesoría de compra de equipos',
      'Consultoría tecnológica para pymes',
    ],
    availableLanguage: { '@type': 'Language', name: 'Spanish' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: site.phoneE164,
      areaServed: 'CO',
      availableLanguage: 'Spanish',
    },
    /**
     * La consulta gratis declarada como oferta a precio 0.
     * Es el gancho comercial y conviene que Google lo entienda literalmente.
     */
    makesOffer: {
      '@type': 'Offer',
      name: 'Primera asesoría tecnológica gratis por WhatsApp',
      description:
        'Cuéntame tu problema o tu duda por WhatsApp y te oriento sin costo. Si decides que yo lo resuelva, te paso la cotización antes de empezar.',
      price: '0',
      priceCurrency: 'COP',
      availability: 'https://schema.org/InStock',
    },
  }
}

/**
 * Alfred como persona.
 *
 * Google valora la experiencia demostrable (E-E-A-T). En un negocio de una
 * sola persona, dejar claro QUIÉN responde y con cuánta trayectoria es una
 * ventaja frente a los talleres anónimos con los que compites.
 */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.founder,
    jobTitle: 'Ingeniero y consultor tecnológico',
    description: `Ingeniero con más de ${site.yearsOfExperience} años de experiencia en soporte técnico, redes e infraestructura, dedicado a hogares, estudiantes y empresas de la Costa Atlántica.`,
    url: site.url,
    telephone: site.phoneE164,
    worksFor: { '@id': BUSINESS_ID },
    knowsLanguage: 'es-CO',
  }
}

/** Preguntas frecuentes. Puede ganar el bloque desplegable en los resultados. */
export function faqSchema(faqs: { pregunta: string; respuesta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  }
}

/**
 * Un servicio ofrecido en una ciudad concreta.
 * Es lo que conecta "qué hago" con "dónde lo hago", que es exactamente
 * la consulta que hace la gente: servicio + ciudad.
 */
export function servicioEnCiudadSchema(ciudad: Ciudad) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Soporte técnico y asesoría tecnológica en ${ciudad.nombre}`,
    description: `Reparación de computadores, redes Wi-Fi, respaldo de datos y asesoría tecnológica en ${ciudad.nombre}, ${ciudad.departamento}. Primera consulta gratis por WhatsApp.`,
    serviceType: 'Soporte técnico informático',
    provider: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'City',
      name: ciudad.nombre,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${ciudad.departamento}, Colombia`,
      },
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${site.url}/${ciudad.slug}`,
      servicePhone: site.phoneE164,
      ...(ciudad.presencial
        ? {}
        : { serviceLocation: { '@type': 'VirtualLocation', url: site.url } }),
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'COP',
      description: 'Primera asesoría gratis por WhatsApp',
    },
  }
}

/** Migas de pan: le muestran a Google la jerarquía del sitio. */
export function breadcrumbSchema(items: { nombre: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.nombre,
      item: `${site.url}${item.url}`,
    })),
  }
}

/** Artículo de guía, con Alfred como autor (señal de autoría real). */
export function articuloSchema(opts: {
  titulo: string
  descripcion: string
  url: string
  fechaPublicacion: string
  fechaModificacion?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.titulo,
    description: opts.descripcion,
    url: `${site.url}${opts.url}`,
    datePublished: opts.fechaPublicacion,
    dateModified: opts.fechaModificacion || opts.fechaPublicacion,
    author: { '@id': PERSON_ID },
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'es-CO',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}${opts.url}` },
  }
}

/**
 * Helper para inyectar JSON-LD en una página.
 * Uso: <JsonLd data={localBusinessSchema()} />
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
