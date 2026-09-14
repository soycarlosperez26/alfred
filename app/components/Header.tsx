'use client'

import Image from 'next/image'
import Link from 'next/link'
import { site } from '../lib/site'
import WhatsAppCTA from './WhatsAppCTA'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt={`${site.name} — soporte técnico en la Costa Atlántica`}
              width={120}
              height={48}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/#servicios" className="text-gray-700 hover:text-[#0077B6] transition-colors">
              Qué resuelvo
            </Link>
            <Link href="/#como-es" className="text-gray-700 hover:text-[#0077B6] transition-colors">
              Cómo funciona
            </Link>
            <Link href="/cobertura" className="text-gray-700 hover:text-[#0077B6] transition-colors">
              Dónde atiendo
            </Link>
            <Link href="/guias" className="text-gray-700 hover:text-[#0077B6] transition-colors">
              Guías
            </Link>
            <WhatsAppCTA
              location="header"
              variant="link"
              className="bg-[#F77F00] text-white px-4 py-2 rounded-lg hover:bg-[#e67300] hover:text-white transition-colors font-medium"
            >
              Escríbeme por WhatsApp
            </WhatsAppCTA>
          </div>

          <WhatsAppCTA
            location="nav-movil"
            variant="link"
            className="md:hidden bg-[#F77F00] text-white px-4 py-2 rounded-lg hover:bg-[#e67300] hover:text-white transition-colors text-sm font-medium"
          >
            WhatsApp
          </WhatsAppCTA>
        </div>
      </nav>
    </header>
  )
}
