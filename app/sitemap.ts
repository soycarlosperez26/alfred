import { MetadataRoute } from 'next'
import { site, ciudades } from './lib/site'
import { guias } from './lib/guias'

/**
 * Sitemap generado a partir de los registros de ciudades y guías.
 * Al agregar una ciudad en lib/site.ts o una guía en lib/guias.ts, entra sola
 * aquí: no hay que acordarse de actualizar este archivo a mano (que es justo
 * como se terminan quedando páginas sin indexar).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url
  const ahora = new Date()

  return [
    {
      url: baseUrl,
      lastModified: ahora,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/cobertura`,
      lastModified: ahora,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guias`,
      lastModified: ahora,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Páginas locales: son las que capturan "servicio + ciudad"
    ...ciudades.map((c) => ({
      url: `${baseUrl}/${c.slug}`,
      lastModified: ahora,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Guías: el motor de tráfico de búsquedas de síntoma
    ...guias.map((g) => ({
      url: `${baseUrl}/guia/${g.slug}`,
      lastModified: new Date(g.actualizada || g.publicada),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    {
      url: `${baseUrl}/privacidad`,
      lastModified: ahora,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
