import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wi‑Fi lento en Cartagena: 3 tips que sí ayudan | Alfred',
  description: 'Internet que patea en Cartagena: ubicación del router, reinicio y obstáculos. Cuándo pedir soporte técnico.',
  keywords: 'Wi-Fi lento Cartagena, internet lento, router, red wifi, técnico redes Cartagena',
  openGraph: {
    title: 'Wi‑Fi lento en Cartagena: 3 tips que sí ayudan | Alfred',
    description: 'Internet que patea en Cartagena: ubicación del router, reinicio y obstáculos. Cuándo pedir soporte técnico.',
    type: 'article',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WifiLentoCartagenaLayout({
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
        "name": "¿Es culpa del operador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puede ser, o puede ser tu red interna. Conectá un cable directo del router al PC y probá. Si por cable anda bien, es tu Wi‑Fi, no el operador. Si por cable también está lento, reclamá al operador."
        }
      },
      {
        "@type": "Question",
        "name": "¿Vas a domicilio en Cartagena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, voy a domicilio en Cartagena si hace falta ver el cableado, la ubicación del router, o instalar algo. Si es solo configuración, capaz lo resolvemos remoto y te ahorrás la visita."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito comprar un repetidor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende. Si tu casa es grande o de dos pisos, capaz sí. Si es solo ubicación del router, no hace falta comprar nada. Hablamos y vemos. No te vendo algo que no necesitás."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de qué haya que hacer (remoto, visita, repuesto). Después de los 15 minutos gratis te cotizo claro y vos decidís."
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
