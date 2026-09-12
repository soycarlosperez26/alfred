import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Limpieza de portátil en Barranquilla | Alfred',
  description: 'Portátil lento o caliente en Barranquilla: la limpieza interna suele ser el primer paso. Te explico cuándo hacerlo y cómo pedir ayuda.',
  keywords: 'limpieza portátil Barranquilla, limpieza laptop, ventilador ruidoso, técnico portátiles',
  openGraph: {
    title: 'Limpieza de portátil en Barranquilla | Alfred',
    description: 'Portátil lento o caliente en Barranquilla: la limpieza interna suele ser el primer paso. Te explico cuándo hacerlo y cómo pedir ayuda.',
    type: 'article',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LimpiezaPortatilBarranquillaLayout({
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
        "name": "¿Cada cuánto limpio mi portátil en Barranquilla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada 6–12 meses. Si trabajás en ambiente con polvo o sin aire, mejor cada 6. Si el ventilador ya suena fuerte, ya le tocaba."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo limpiarlo yo sin desarmar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Podés soplar aire comprimido por las rejillas, pero eso solo saca polvo suelto. El polvo compactado adentro hay que sacarlo abriendo el equipo. Si nunca lo hiciste, mejor llevalo a un técnico."
        }
      },
      {
        "@type": "Question",
        "name": "¿También cambiás la pasta térmica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, si hace falta. Si el portátil tiene más de 2 años sin mantenimiento o se calienta mucho, el cambio de pasta térmica ayuda a bajar la temperatura. Te digo si vale la pena cuando lo veo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Vas a domicilio o lo llevo a taller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Como prefieras. Puedo ir a tu casa/oficina en Barranquilla, o me lo llevás a taller. En taller a veces es más rápido porque tengo todas las herramientas a mano."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de si es solo limpieza o también cambio de pasta térmica y revisión completa. Te cotizo después de escucharte 15 minutos gratis por WhatsApp."
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
