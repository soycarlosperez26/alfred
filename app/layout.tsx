import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soporte técnico Barranquilla y Cartagena | Alfred",
  description: "Técnico de PC, redes, celulares y software en Barranquilla y Cartagena. Asesoría gratis 15 min por WhatsApp. Sin enredos.",
  keywords: "soporte técnico Barranquilla, técnico computadores Cartagena, reparación PC, redes wifi, soporte celulares, técnico informático costa",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Soporte técnico Barranquilla y Cartagena | Alfred",
    description: "Técnico de PC, redes, celulares y software en Barranquilla y Cartagena. Asesoría gratis 15 min por WhatsApp. Sin enredos.",
    type: "website",
    locale: "es_CO",
    siteName: "Alfred - Soporte Técnico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de qué necesitás. Te cotizo después de escucharte 15 minutos gratis por WhatsApp. Nada de sorpresas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo llamarte por teléfono?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mejor escribime por WhatsApp así quedamos claros desde el principio y tenés el registro de todo. Es más cómodo para los dos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Atendés solo Barranquilla y Cartagena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Principalmente BQ y CTG, pero si estás cerca o es remoto, hablemos. Si puedo ayudarte, te digo; si no, también."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de equipos arreglás?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PC, portátiles, celulares (software principalmente), redes, Wi-Fi, programas, cuentas. Si es otro aparato, preguntame."
        }
      },
      {
        "@type": "Question",
        "name": "¿Vas a mi casa o tengo que ir donde vos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Como te venga mejor: remoto, te visito, o lo miramos en taller. Lo decidimos después de hablar."
        }
      },
      {
        "@type": "Question",
        "name": "¿De verdad son 15 minutos gratis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, de verdad. Te escucho, entiendo qué pasa y te doy una idea del camino. Si seguimos, te cotizo claro y arrancamos."
        }
      }
    ]
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
