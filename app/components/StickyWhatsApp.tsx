'use client'

import WhatsAppCTA, { WhatsAppIcon } from './WhatsAppCTA'

/**
 * Botón flotante de WhatsApp.
 * En móvil (que es de donde llega la mayoría del tráfico en la Costa) es el
 * CTA que más convierte, porque está siempre visible sin tener que buscarlo.
 */
export default function StickyWhatsApp({ mensaje }: { mensaje?: string }) {
  return (
    <WhatsAppCTA
      location="sticky"
      mensaje={mensaje}
      variant="link"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:text-white transition-all z-50"
    >
      <span className="sr-only">Escribir por WhatsApp</span>
      <WhatsAppIcon className="w-8 h-8" />
    </WhatsAppCTA>
  )
}
