import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soporte técnico a domicilio en Barranquilla y Cartagena | Alfred',
  description: 'Técnico de PC y redes a domicilio o remoto en Barranquilla y Cartagena. Asesoría gratis 15 min por WhatsApp.',
  keywords: 'soporte técnico domicilio Barranquilla, técnico domicilio Cartagena, soporte remoto, reparación PC domicilio',
  openGraph: {
    title: 'Soporte técnico a domicilio en Barranquilla y Cartagena | Alfred',
    description: 'Técnico de PC y redes a domicilio o remoto en Barranquilla y Cartagena. Asesoría gratis 15 min por WhatsApp.',
    type: 'article',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SoporteTecnicoDomicilioLayout({
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
        "name": "¿Siempre hay que ir a domicilio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Mucho se puede hacer remoto, es más rápido y más barato. Solo voy a domicilio si hace falta tocar algo físico (cables, limpiar por dentro, cambiar piezas). Lo decidimos después de hablar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de qué necesitás (remoto, visita, taller, repuestos). Te cotizo después de escucharte 15 minutos gratis. No pongo precios a ciegas porque cada caso es distinto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Atendés empresas o solo casas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los dos. Te atiendo igual si es tu PC en la casa o los equipos de tu negocito/oficina en Barranquilla o Cartagena."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué días atendés?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lunes a sábado. Si necesitás algo urgente un domingo, escribime igual y vemos si te puedo ayudar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hacés contratos de mantenimiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por ahora hago soporte puntual (cuando lo necesitás). Si tenés un negocio y querés algo periódico, hablamos y vemos si te armo algo."
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
