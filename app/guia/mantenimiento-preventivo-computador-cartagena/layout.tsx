import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mantenimiento preventivo de PC en Cartagena | Alfred',
  description: 'Limpieza, temperaturas y optimización para que tu PC aguante el clima de Cartagena. Cotización clara por WhatsApp.',
  keywords: 'mantenimiento preventivo Cartagena, limpieza PC, optimización computador, técnico Cartagena',
  openGraph: {
    title: 'Mantenimiento preventivo de PC en Cartagena | Alfred',
    description: 'Limpieza, temperaturas y optimización para que tu PC aguante el clima de Cartagena. Cotización clara por WhatsApp.',
    type: 'article',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MantenimientoPreventivoCartagenaLayout({
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
        "name": "¿Cada cuánto le hago mantenimiento en Cartagena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada 6–12 meses. Si tu equipo está en ambiente con polvo o sin aire, mejor cada 6. Si está en aire acondicionado, aguanta 12 meses."
        }
      },
      {
        "@type": "Question",
        "name": "¿El mantenimiento alarga la vida del PC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Evitar sobrecalentamiento y mantener el sistema limpio puede sumarle años al equipo. En Cartagena, donde el calor es constante, el mantenimiento es clave."
        }
      },
      {
        "@type": "Question",
        "name": "¿Vas a domicilio en Cartagena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, voy a domicilio en Cartagena y alrededores. También podés llevarme el equipo a taller si preferís. Lo que te quede más cómodo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de qué incluya (limpieza física, pasta térmica, optimización). Te cotizo después de escucharte 15 minutos gratis por WhatsApp."
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
