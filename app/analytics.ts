'use client'

/**
 * Eventos de GA4.
 *
 * El evento que importa es `cta_whatsapp_click`: como todo el negocio pasa por
 * WhatsApp, ese clic es la conversión real del sitio. El parámetro `location`
 * dice desde qué CTA se hizo (hero, sticky, ciudad, guía...), que es lo que
 * permite saber qué página y qué botón están trayendo clientes.
 */

type GtagFn = (
  command: 'event',
  eventName: string,
  params?: Record<string, unknown>
) => void

function gtag(): GtagFn | undefined {
  if (typeof window === 'undefined') return undefined
  return (window as unknown as { gtag?: GtagFn }).gtag
}

export function trackWhatsAppClick(location: string) {
  gtag()?.('event', 'cta_whatsapp_click', { location })
}

export function trackCallClick(location: string) {
  gtag()?.('event', 'cta_call_click', { location })
}
