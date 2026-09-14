/**
 * Fuente única de verdad del negocio.
 *
 * Importante para SEO local: el nombre, el teléfono y la zona deben ser
 * IDÉNTICOS aquí, en Google Business Profile y en cualquier directorio.
 * A eso se le llama consistencia NAP (Name, Address, Phone) y es una de las
 * señales que usa Google para confiar en que el negocio existe de verdad.
 * Si cambias el teléfono o el nombre, cámbialo SOLO aquí.
 */

export const site = {
  name: 'Alfred Soluciona',
  legalName: 'Alfred Soluciona',
  tagline: 'Soporte técnico y consultoría tecnológica en la Costa Atlántica',
  description:
    'Asesoría tecnológica honesta con 15 años de experiencia. La primera consulta por WhatsApp es gratis. Computadores, redes Wi-Fi, celulares y soporte para empresas en la Costa Atlántica.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alfredtech.online',
  phone: '+57 304 477 5117',
  /** Formato E.164, sin espacios: el que exige schema.org y wa.me */
  phoneE164: '+573044775117',
  whatsappNumber: '573044775117',
  email: '',
  founder: 'Alfred',
  yearsOfExperience: 15,
  locale: 'es_CO',
  priceRange: '$$',
} as const

/**
 * Arma el link de WhatsApp con un mensaje pre-escrito.
 * El mensaje pre-cargado sube la tasa de respuesta: la persona no tiene que
 * pensar qué escribir, y a ti te llega el contexto de qué página venía.
 */
export function whatsappLink(mensaje?: string): string {
  const texto = mensaje || 'Hola Alfred, necesito una mano con'
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(texto)}`
}

export type Ciudad = {
  slug: string
  nombre: string
  /** Gentilicio, para que el texto suene local y no a plantilla */
  gentilicio: string
  departamento: string
  /** true = atiendo a domicilio; false = remoto (no inventamos cobertura que no existe) */
  presencial: boolean
  /** Barrios y zonas reales: le dan relevancia local a la página */
  zonas: string[]
  /** Frase de apertura propia de la ciudad (nunca repetir texto entre ciudades) */
  intro: string
  /** Dolor tecnológico característico de esa ciudad */
  contextoLocal: string
}

/**
 * Las 6 ciudades de la Costa Atlántica que cubre Alfred.
 *
 * Ojo: cada ciudad necesita texto ÚNICO. Google penaliza las "doorway pages"
 * (páginas clonadas cambiando solo el nombre de la ciudad). Por eso cada una
 * trae su propia intro, sus zonas y su contexto.
 */
export const ciudades: Ciudad[] = [
  {
    slug: 'barranquilla',
    nombre: 'Barranquilla',
    gentilicio: 'barranquillero',
    departamento: 'Atlántico',
    presencial: true,
    zonas: [
      'El Prado',
      'Alto Prado',
      'Villa Country',
      'Riomar',
      'El Golf',
      'Boston',
      'Ciudad Jardín',
      'Soledad',
      'Puerto Colombia',
    ],
    intro:
      'Barranquilla es mi casa y donde más trabajo. Si tu computador está lento, el Wi-Fi no llega al cuarto o tu negocio necesita que la tecnología deje de dar problemas, escríbeme y hablamos.',
    contextoLocal:
      'Con el calor y la humedad de Barranquilla, los equipos sufren más de lo que la gente cree: el polvo se pega, los ventiladores se saturan y el computador empieza a apagarse solo. Muchas veces no hay que comprar nada nuevo, solo hacerle un mantenimiento bien hecho.',
  },
  {
    slug: 'cartagena',
    nombre: 'Cartagena',
    gentilicio: 'cartagenero',
    departamento: 'Bolívar',
    presencial: true,
    zonas: [
      'Bocagrande',
      'Castillogrande',
      'Manga',
      'Pie de la Popa',
      'El Laguito',
      'Crespo',
      'Centro Histórico',
      'La Boquilla',
      'Turbaco',
    ],
    intro:
      'Atiendo Cartagena de forma presencial y remota. Desde el computador de la casa hasta la red del hotel o el restaurante, si tiene que ver con tecnología, cuéntame qué está pasando.',
    contextoLocal:
      'En Cartagena la brisa del mar trae salitre, y el salitre se come los equipos por dentro. A eso súmale que muchos negocios del sector turístico dependen de un Wi-Fi que tiene que aguantar decenas de huéspedes conectados al tiempo. Son dos problemas muy de aquí, y los dos tienen solución.',
  },
  {
    slug: 'santa-marta',
    nombre: 'Santa Marta',
    gentilicio: 'samario',
    departamento: 'Magdalena',
    presencial: true,
    zonas: [
      'El Rodadero',
      'Bello Horizonte',
      'Gaira',
      'Centro Histórico',
      'Taganga',
      'Mamatoco',
      'Pozos Colorados',
    ],
    intro:
      'Atiendo Santa Marta con visita a domicilio y también de forma remota. Si necesitas arreglo de computadores, mejorar tu red o montar la tecnología de tu negocio, escríbeme sin compromiso.',
    contextoLocal:
      'Santa Marta mezcla hogares, estudiantes y mucho negocio turístico pequeño: hostales, tours, restaurantes. Casi todos funcionan con un computador y un router, y cuando uno de los dos falla se para la operación completa. Por eso lo primero que reviso siempre es qué tan frágil es tu punto más importante.',
  },
  {
    slug: 'monteria',
    nombre: 'Montería',
    gentilicio: 'monteriano',
    departamento: 'Córdoba',
    presencial: false,
    zonas: [
      'La Castellana',
      'El Recreo',
      'Buenavista',
      'Centro',
      'Mocarí',
      'Cantaclaro',
    ],
    intro:
      'A Montería la atiendo de forma remota, y funciona mejor de lo que la gente espera: me conecto a tu equipo, veo el problema en vivo y lo resolvemos el mismo día, sin que tengas que mover nada de tu casa.',
    contextoLocal:
      'En Montería el problema más común que me llega no es el equipo dañado, sino el equipo mal comprado: gente que pagó de más por un computador que no necesitaba, o que compró uno barato que no le sirve para lo que hace. Por eso la asesoría de compra es gratis: prefiero que aciertes antes de gastar.',
  },
  {
    slug: 'valledupar',
    nombre: 'Valledupar',
    gentilicio: 'vallenato',
    departamento: 'Cesar',
    presencial: false,
    zonas: [
      'Novalito',
      'Los Músicos',
      'Garupal',
      'Centro',
      'La Nevada',
      'Panamá',
    ],
    intro:
      'Atiendo Valledupar de forma remota. Nos conectamos por WhatsApp, me cuentas qué está pasando, y si se puede resolver a distancia lo resolvemos ahí mismo.',
    contextoLocal:
      'En Valledupar veo mucho estudiante y mucho profesional independiente trabajando desde casa con un solo equipo y sin ninguna copia de seguridad. Ese es el riesgo real: no es que el computador se dañe, es que se lleve por delante años de trabajo. Respaldar bien cuesta mucho menos que recuperar.',
  },
  {
    slug: 'sincelejo',
    nombre: 'Sincelejo',
    gentilicio: 'sincelejano',
    departamento: 'Sucre',
    presencial: false,
    zonas: [
      'La Ford',
      'Venecia',
      'Centro',
      'Majagual',
      'El Cortijo',
      'Los Alpes',
    ],
    intro:
      'Sincelejo lo atiendo de forma remota. Escríbeme por WhatsApp, cuéntame el problema y te digo de una si se puede solucionar a distancia o si te conviene buscar a alguien en persona.',
    contextoLocal:
      'En Sincelejo me escriben sobre todo negocios pequeños: la tienda, el consultorio, la oficina de tres personas. Todos tienen el mismo lío, que la tecnología creció sin orden y ya nadie sabe dónde está qué. Ordenar eso una vez bien hecho te ahorra plata todos los meses.',
  },
]

export function getCiudad(slug: string): Ciudad | undefined {
  return ciudades.find((c) => c.slug === slug)
}

/** Las ciudades donde hay visita a domicilio, para los textos de cobertura */
export const ciudadesPresenciales = ciudades.filter((c) => c.presencial)
