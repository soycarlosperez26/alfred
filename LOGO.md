# Logo de Alfred

## Uso actual

El sitio actualmente usa `/public/logo.svg` — un logo SVG creado según las especificaciones de diseño.

## Para usar el logo PNG oficial

1. Copiá el archivo `logo-2-pc-circle.png` a `/public/logo.png`
2. Actualizá las referencias en el código:
   - `/app/page.tsx` línea ~17: cambiar `logo.svg` por `logo.png`
   - `/app/privacidad/page.tsx` línea ~22: cambiar `logo.svg` por `logo.png`
   - `/app/page.tsx` línea ~408 (footer): cambiar `logo.svg` por `logo.png`

3. O mantené el nombre `logo.svg` y simplemente:
   ```bash
   cp logo-2-pc-circle.png public/logo.png
   # y usá logo.png en las referencias
   ```

## Dimensiones recomendadas

El logo se muestra con:
- Header/Footer: 120px × 48px
- El PNG debe ser al menos 240px × 96px (2x) para pantallas retina

## Formato actual (SVG)

El SVG actual incluye:
- Círculo azul (#0077B6) con icono de PC blanco
- Wordmark "Alfred" con A naranja (#F77F00)
- Subrayado naranja bajo la A

Si el PNG oficial tiene diferentes proporciones, ajustá los valores de `width` y `height` en los componentes Image.
