import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { site } from "./lib/site";
import { JsonLd, localBusinessSchema, personSchema } from "./lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /**
   * metadataBase resuelve las rutas relativas (OpenGraph, canonical) a URLs
   * absolutas. Sin esto, WhatsApp y Facebook no muestran vista previa al
   * compartir el link — y WhatsApp es el canal principal del negocio.
   */
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Soporte técnico y asesoría en la Costa Atlántica`,
    /** Las páginas internas heredan la marca sin tener que repetirla */
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  publisher: site.name,
  alternates: {
    canonical: '/',
  },
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
    title: `${site.name} | Tu amigo el ingeniero en la Costa Atlántica`,
    description: site.description,
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Tu amigo el ingeniero en la Costa Atlántica`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={inter.variable}>
      <head>
        {/*
          Identidad del negocio y de Alfred: aplica a todo el sitio.
          El FAQPage NO va aquí — es propio de cada página, y duplicarlo en
          todas las rutas genera datos estructurados en conflicto.
        */}
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={personSchema()} />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
