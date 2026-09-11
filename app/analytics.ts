'use client'

export function trackWhatsAppClick(location: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_whatsapp_click', {
      location: location
    })
  }
}

export function trackCallClick(location: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_call_click', {
      location: location
    })
  }
}
