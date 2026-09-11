# Resumen de archivos modificados

## Archivos nuevos creados

### `app/robots.ts`
- Genera `/robots.txt` con Allow all y sitemap URL
- Usa `https://www.alfredtech.online` como base

### `app/analytics.ts`
- Funciones de tracking para eventos personalizados de GA4
- `trackWhatsAppClick(location)` - Evento `cta_whatsapp_click`
- `trackCallClick(location)` - Evento `cta_call_click` (preparado para futuro)

### `GA4_SETUP.md`
- Guía completa de configuración de GA4
- Instrucciones para obtener Measurement ID
- Lista de eventos rastreados
- Instrucciones de verificación

## Archivos modificados

### `app/sitemap.ts`
**Cambio:** URL base de `https://alfred-soporte.com` a `https://www.alfredtech.online`
- Incluye home (/) y /privacidad

### `app/layout.tsx`
**Cambios:**
- Import de `GoogleAnalytics` de `@next/third-parties/google`
- Componente GA4 agregado condicionalmente si `NEXT_PUBLIC_GA_MEASUREMENT_ID` está configurado

### `app/page.tsx`
**Cambios:**
- Convertido a Client Component (`'use client'`)
- Import de `trackWhatsAppClick` desde `./analytics`
- 6 botones/links de WhatsApp ahora tienen `onClick` con tracking:
  - Hero: `trackWhatsAppClick('hero')`
  - Header: `trackWhatsAppClick('header')`
  - Nav mobile: `trackWhatsAppClick('nav')`
  - CTA section: `trackWhatsAppClick('final')`
  - Sticky button: `trackWhatsAppClick('sticky')`
  - Footer: `trackWhatsAppClick('footer')`

### `.env.example`
**Cambios:**
- URL base actualizada a `https://www.alfredtech.online`
- Variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` agregada con documentación
- Variable `NEXT_PUBLIC_GSC_VERIFICATION` agregada (comentada, para futuro)

### `package.json` y `package-lock.json`
**Cambios:**
- Dependencia agregada: `@next/third-parties@^15.2.2`

## Variables de entorno requeridas en Vercel

### Obligatorio para GA4:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Opcional (ya tiene fallback):
```
NEXT_PUBLIC_SITE_URL=https://www.alfredtech.online
```

## Build status
✅ Build pasa correctamente
✅ TypeScript sin errores
✅ Todos los archivos generan correctamente (robots.txt, sitemap.xml)

## Deployment checklist
1. Mergear este PR a `main`
2. Configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` en Vercel (Preview + Production)
3. Verificar en producción que `robots.txt` y `sitemap.xml` están accesibles
4. Verificar GA4 con Google Analytics Debugger o en DevTools Network
5. (Opcional) Configurar Google Search Console más adelante
