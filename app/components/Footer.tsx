'use client'

import Image from 'next/image'
import Link from 'next/link'
import { site, ciudades } from '../lib/site'
import WhatsAppCTA from './WhatsAppCTA'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo.svg"
              alt={site.name}
              width={120}
              height={48}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm">{site.tagline}</p>
            <p className="text-sm mt-2">
              Más de {site.yearsOfExperience} años resolviendo líos de tecnología.
            </p>
          </div>

          {/*
            Enlaces a todas las ciudades desde cada página del sitio.
            Así Google encuentra las páginas locales sin depender del sitemap.
          */}
          <div>
            <h3 className="font-semibold text-white mb-4">Dónde atiendo</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {ciudades.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-white transition-colors">
                    {c.nombre}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/cobertura"
              className="text-[#F77F00] hover:text-[#e67300] text-sm mt-3 inline-block"
            >
              Ver toda la cobertura →
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <p className="text-sm mb-2">
              WhatsApp:{' '}
              <a href={`tel:${site.phoneE164}`} className="hover:text-white">
                {site.phone}
              </a>
            </p>
            <WhatsAppCTA location="footer" variant="link" className="text-sm">
              Escríbeme, la primera asesoría es gratis →
            </WhatsAppCTA>
            <div className="mt-4">
              <Link href="/guias" className="text-sm block hover:text-white transition-colors">
                Guías gratis
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Soporte técnico y asesoría
            tecnológica en la Costa Atlántica.
          </p>
          <Link
            href="/privacidad"
            className="text-[#F77F00] hover:text-[#e67300] mt-2 inline-block"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
