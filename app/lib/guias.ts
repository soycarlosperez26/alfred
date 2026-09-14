/**
 * Registro de guías.
 *
 * Fuente única para el índice /guias, el sitemap y los enlaces "sigue leyendo".
 * Al agregar una guía nueva, súmala aquí y aparece sola en los tres lados.
 *
 * Estrategia: cada guía ataca una BÚSQUEDA DE SÍNTOMA, o sea lo que la persona
 * escribe en Google cuando ya tiene el problema encima ("mi pc se apaga solo").
 * Ese tráfico convierte muchísimo mejor que el genérico, porque llega alguien
 * con un dolor concreto y ganas de preguntar — que es justo el modelo de Alfred:
 * la duda es gratis, resolver el problema se cobra.
 */

export type Guia = {
  slug: string
  titulo: string
  /** Gancho corto para las tarjetas del índice */
  resumen: string
  /** La búsqueda principal que intenta capturar */
  keyword: string
  /** ISO 8601, para el schema de Article y el sitemap */
  publicada: string
  actualizada?: string
  ciudad?: string
}

export const guias: Guia[] = [
  {
    slug: 'pc-lento-barranquilla',
    titulo: 'PC lento en Barranquilla: qué hacer antes de formatear',
    resumen:
      'Antes de formatear o comprar equipo nuevo, revisa estas cosas. Muchas veces el arreglo es más barato de lo que crees.',
    keyword: 'pc lento barranquilla',
    publicada: '2026-08-01',
    ciudad: 'Barranquilla',
  },
  {
    slug: 'wifi-lento-cartagena',
    titulo: 'Wi-Fi lento en Cartagena: 3 cosas que sí funcionan',
    resumen:
      'Internet que se traba, videos que se cortan. No siempre es el operador, y a veces lo arreglas tú mismo.',
    keyword: 'wifi lento cartagena',
    publicada: '2026-08-01',
    ciudad: 'Cartagena',
  },
  {
    slug: 'soporte-tecnico-a-domicilio-barranquilla-cartagena',
    titulo: 'Soporte técnico a domicilio o remoto: cómo trabajo',
    resumen:
      'Cuándo conviene una visita, cuándo sale mejor resolverlo remoto, y qué esperar de cada opción.',
    keyword: 'soporte tecnico a domicilio barranquilla',
    publicada: '2026-08-01',
  },
  {
    slug: 'comprar-computador-usado-costa',
    titulo: 'Comprar un computador usado en la Costa: 5 revisiones antes de pagar',
    resumen:
      'Lo que tienes que mirar sí o sí antes de entregar la plata, para que no te vendan un problema.',
    keyword: 'comprar computador usado colombia',
    publicada: '2026-09-14',
  },
  {
    slug: 'recuperar-cuenta-google',
    titulo: 'Cómo recuperar tu cuenta de Google o Gmail paso a paso',
    resumen:
      'Perdiste el acceso a tu correo. Qué hacer, en qué orden, y por qué el equipo desde el que lo intentas cambia tus posibilidades.',
    keyword: 'recuperar cuenta de google',
    publicada: '2026-09-14',
  },
  {
    slug: 'respaldo-datos-empresa',
    titulo: 'Si se daña el disco duro, ¿pierdes tu empresa? Cómo respaldar bien',
    resumen:
      'La regla 3-2-1 explicada sin tecnicismos, y cuánto cuesta realmente perder la información.',
    keyword: 'respaldo de datos empresa colombia',
    publicada: '2026-09-14',
  },
]

export function getGuia(slug: string): Guia | undefined {
  return guias.find((g) => g.slug === slug)
}

/** Otras guías, para los bloques de "sigue leyendo" */
export function otrasGuias(slugActual: string, limite = 3): Guia[] {
  return guias.filter((g) => g.slug !== slugActual).slice(0, limite)
}
