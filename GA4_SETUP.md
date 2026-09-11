# Configuración de Google Analytics 4 para Alfred

## Variables de entorno requeridas en Vercel

### 1. Google Analytics 4

Para activar el tracking de GA4, configurar en Vercel (Dashboard → Settings → Environment Variables):

**Variable:**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID
```

**Valor:** Tu Measurement ID de GA4 (formato: `G-XXXXXXXXXX`)

**Environments:** Preview + Production

### 2. URL del sitio (opcional)

Ya tiene fallback a `https://www.alfredtech.online`, pero si querés configurarlo explícitamente:

**Variable:**
```
NEXT_PUBLIC_SITE_URL
```

**Valor:** `https://www.alfredtech.online`

**Environments:** Preview + Production

## Eventos de GA4 que se están rastreando

### Eventos automáticos
- `page_view` - Se dispara automáticamente en cada cambio de página

### Eventos personalizados

#### cta_whatsapp_click
Se dispara cuando se hace click en cualquier botón/link de WhatsApp.

**Parámetros:**
- `location`: Ubicación del CTA que se clickeó
  - `hero` - Botón principal del hero
  - `header` - Botón del header (desktop)
  - `nav` - Botón del header móvil
  - `final` - Botón de la sección CTA (medio de la página)
  - `sticky` - Botón flotante verde (esquina inferior derecha)
  - `footer` - Link del footer

**Ejemplo de uso en GA4:**
```
Event: cta_whatsapp_click
Parameters:
  - location: "hero"
```

## Cómo obtener tu Measurement ID de GA4

1. Ir a [Google Analytics](https://analytics.google.com/)
2. Crear una propiedad GA4 (si no existe)
3. Admin → Data Streams → Web
4. Seleccionar tu stream o crear uno nuevo para `www.alfredtech.online`
5. Copiar el "Measurement ID" (comienza con `G-`)
6. Pegar ese ID en la variable de entorno de Vercel

## Verificación

Para verificar que GA4 está funcionando:

1. Deployar con la variable configurada
2. Abrir el sitio
3. En Chrome DevTools → Network, filtrar por `google-analytics`
4. Deberías ver requests a `www.google-analytics.com/g/collect`

O usar la extensión de Chrome "Google Analytics Debugger" para ver los eventos en la consola.

## Google Search Console (pendiente)

Para verificar la propiedad en Search Console, seguir los pasos de verificación que te proporcione Google. Pueden ser:

1. **Archivo HTML:** Subir el archivo de verificación a `public/googleXXXXX.html`
2. **Meta tag:** Configurar `NEXT_PUBLIC_GSC_VERIFICATION` y actualizar el layout

Por ahora, el sitemap ya está accesible en `https://www.alfredtech.online/sitemap.xml` para cuando completes la verificación.
