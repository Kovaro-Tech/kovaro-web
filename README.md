# Kovaro Tech

React + Vite con generación estática durante el build. La home mantiene su sistema visual; privacidad, cookies, términos y 404 comparten navegación, tipografía y footer.

## Desarrollo y validación

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`build` genera el cliente, compila el renderer de React en `dist-ssr` y escribe HTML completo por ruta en `dist`. Solo se publica `dist`; no se necesita servidor Node en producción. `preview` sirve rutas limpias y errores 404 reales, con compresión gzip. El servidor de desarrollo de Vite no es una prueba de status HTTP de producción.

```sh
npm run lint
npm run test:seo
npm run audit:seo
```

Las pruebas usan Chrome instalado mediante Playwright. `audit:seo` requiere `npm run preview` en otro terminal y Chrome/Chromium instalado. Los informes Lighthouse quedan en `reports/` y las capturas responsive en `test-results/`, ignorados por Git. Las dependencias de auditoría son solo de desarrollo.

## Contenido y metadata

- `src/lib/seo.js`: registro de páginas publicadas, canonical, Open Graph, X Cards y JSON-LD. Es la fuente del sitemap.
- `src/lib/contact.js`: contacto y redes reales compartidos por contenido y schema.
- `src/pages/Legal.jsx`: textos legales; actualizar la fecha solo al modificar la política.
- `src/App.jsx`: selección de página; enlaces HTML normales y navegación completa permiten entregar siempre metadata en la primera respuesta.
- `public/og/kovaro.png`: imagen propia 1200 × 630. Regenerar con `npm run social-image` usando el logo existente y las fuentes locales.
- `public/fonts`: fuentes variables latinas y sus licencias OFL. Inter Tight 400–600 y JetBrains Mono 400–500; `font-display: swap`, con preload solo de la fuente principal.

Para publicar un servicio, caso o artículo, crear su contenido y componente, incorporarlo a `App`, registrarlo en `pages` con title y description propios y enlazarlo desde contenido relacionado. El build admite rutas anidadas y añade automáticamente canonical, OG y sitemap. Extender los breadcrumbs visibles y JSON-LD según la jerarquía real. No registrar una ruta antes de que exista contenido útil.

Ver [auditoría, despliegue y estrategia SEO](docs/SEO.md).
