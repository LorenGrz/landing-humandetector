# landing-humandetector

Sitio estático de portfolio para [HumanDetector](https://github.com/LorenGrz/HumanDetector) —
instalación satírica de "verificación de humanidad" con detección real de gestos por cámara
(MediaPipe) que escala los pedidos hasta lo imposible y casi nunca aprueba.

No tiene servidor ni llamadas a API propias; solo enlaza a la app real y al repositorio.

## Stack

- Next.js 16 (App Router, `output: 'export'`)
- Tailwind CSS
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build   # genera ./out
```

Se despliega automáticamente a GitHub Pages vía GitHub Actions en cada push a `master`.

**URL en vivo:** https://lorengrz.github.io/landing-humandetector/

## Proyecto relacionado

- App principal: [LorenGrz/HumanDetector](https://github.com/LorenGrz/HumanDetector)
