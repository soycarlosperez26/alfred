import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mantenimiento de computadores en Barranquilla | Alfred',
  description: 'Mantenimiento preventivo y correctivo de PC y portátiles en Barranquilla. Calor y polvo pasan factura. 15 min gratis por WhatsApp.',
  keywords: 'mantenimiento computadores Barranquilla, limpieza PC, pasta térmica, técnico Barranquilla',
  openGraph: {
    title: 'Mantenimiento de computadores en Barranquilla | Alfred',
    description: 'Mantenimiento preventivo y correctivo de PC y portátiles en Barranquilla. Calor y polvo pasan factura. 15 min gratis por WhatsApp.',
    type: 'article',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MantenimientoComputadoresBarranquillaLayout({
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
        "name": "¿Cada cuánto hay que hacerle mantenimiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En Barranquilla, entre 6 y 12 meses. Si el equipo está en lugar con mucho polvo o sin aire, cada 6 meses está bien. Si está en ambiente limpio, aguanta 12."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es lo mismo que formatear?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Formatear es borrar todo y reinstalar Windows. El mantenimiento es limpiar físicamente, optimizar lo que ya tenés, y revisar que todo funcione. A veces se hacen los dos, pero no es lo mismo."
        }
      },
      {
        "@type": "Question",
        "name": "¿También Soledad y alrededores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, atiendo Barranquilla, Soledad, Malambo, Puerto Colombia y alrededores. Escribime y coordinamos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de si es solo software (remoto), limpieza física (taller/domicilio), o cambio de pasta + componentes. Te cotizo después de escucharte 15 minutos gratis."
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
