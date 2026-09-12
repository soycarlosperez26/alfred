import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PC lento en Barranquilla: qué hacer antes de formatear | Alfred',
  description: 'Si tu PC o portátil va lento en Barranquilla, revisá almacenamiento y arranque antes de formatear. Tips claros + ayuda por WhatsApp.',
  keywords: 'PC lento Barranquilla, computador lento, formatear PC, técnico Barranquilla, soporte remoto',
  openGraph: {
    title: 'PC lento en Barranquilla: qué hacer antes de formatear | Alfred',
    description: 'Si tu PC o portátil va lento en Barranquilla, revisá almacenamiento y arranque antes de formatear. Tips claros + ayuda por WhatsApp.',
    type: 'article',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PCLentoBarranquillaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Formatear arregla un PC lento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A veces sí, si el problema es software o virus. Pero si el disco o la RAM están mal, formatear no va a ayudar. Por eso es mejor que lo miremos primero, para no perder tiempo formateando al pedo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Lo podés ver remoto desde Barranquilla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, si tenés internet puedo conectarme y revisarlo sin ir a tu casa. Es más rápido y más barato. Si veo que hay que abrirlo físicamente, te digo y coordinamos una visita en Barranquilla."
        }
      },
      {
        "@type": "Question",
        "name": "¿También Cartagena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, también atiendo Cartagena, tanto remoto como visita a domicilio. Escribime y vemos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto sale arreglar un PC lento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de qué haya que hacer. Si es limpieza de software o configuración remota, es una cosa. Si hay que cambiar disco o RAM, es otra. Después de los 15 minutos gratis te cotizo claro, sin sorpresas."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
