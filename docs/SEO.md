# Auditoría SEO y publicación — 27 de septiembre de 2026

## Estado inicial

- React SPA: `#root` vacío en la respuesta original; todo el contenido dependía del renderizado cliente.
- Una sola página, sin páginas legales ni 404 de marca. No existían robots/sitemap en public; el plugin sitemap generaba archivos durante build sin un registro editorial de rutas.
- Canonical ya apuntaba a `https://www.kovarotech.com/`.
- Title y description existían, pero la marca variaba entre Kovaro y Kovaro Tech. Había meta keywords, retirada.
- OG y Twitter usaban archivos diferentes. El OG declaraba 512 × 512 para una imagen real de 1013 × 1048.
- Schema `ProfessionalService` con localidad Quito, sin dirección comercial pública. Se sustituyó por Organization sin inventar sede, horarios, ratings o reseñas.
- Un H1 visual válido, mantenido; el párrafo asociado ahora explica desarrollo web, software y estrategia digital. Había salto H2 → H4 en el equipo; corregido a H3.
- Enlaces de sección interceptados con JavaScript y fragmentos relativos: ahora son anchors rastreables que también funcionan desde páginas internas.
- Imágenes de proyectos WebP con dimensiones y lazy loading; se mejoró alt. Logo decorativo con alt vacío junto a marca visible; retratos SVG decorativos. Se mantienen dimensiones de marco para evitar CLS.
- Canvas ya limitaba DPR a 2, respetaba reduced motion y detenía requestAnimationFrame al estabilizar el puntero; se conserva.
- Google Fonts externo con display swap; ahora fuentes locales, sin petición de fuentes a Google.
- Vercel Analytics y Speed Insights ya estaban integrados. Sin formulario, pagos, usuarios, Google Analytics, píxeles ni embeds sociales. Sin escritura propia de cookies/localStorage.

## Implementación

HTML prerenderizado para `/`, `/privacidad`, `/cookies`, `/terminos` y documento `404.html`. Cada página real tiene title, description, canonical y metadata social propia en la primera respuesta. La 404 lleva noindex y no tiene canonical ni entrada en sitemap. Robots permite el sitio público. No hay contenido SEO oculto, rutas locales duplicadas ni páginas ficticias de servicios.

Organization, WebSite y WebPage forman un grafo enlazado por IDs; las páginas legales añaden BreadcrumbList coherente con la ruta visible. Las propiedades y los tipos se revisaron contra Schema.org; las pruebas comprueban JSON válido y estructura. Esto no sustituye la comprobación externa tras publicar.

Los elementos principales se entregan visibles; las animaciones de entrada ya no dejan el HTML prerenderizado con opacity 0. Se conservan el canvas, carrusel, controles, menú y comportamiento interactivo. El layout, los titulares visuales y el sistema gráfico principal permanecen.

La imagen OG utiliza el logo real, tipografía, retícula y colores existentes. Favicon ICO, PNG, apple-touch-icon e iconos 192/512 ya eran propios y válidos; se mantienen. Manifest con nombre Kovaro Tech y display browser, sin service worker ni conversión a PWA.

Responsable y conservación confirmados por el titular: Sebastián Vicente González Celi, RUC 1150346300001, marca Kovaro Tech; consultas hasta 24 meses desde última interacción, con excepciones contractuales/legales y posterior eliminación o anonimización. No se publica dirección personal.

No se añade banner: no se detectaron cookies opcionales propias y las herramientas de Vercel documentan medición sin cookies. Esto no implica que toda medición esté exenta de obligaciones legales. Confirmar configuración efectiva de proveedores y tratamientos al publicar. Las URLs enviadas a medición se filtran para omitir query, fragmentos y rutas desconocidas. La prueba local comprueba que la aplicación no crea cookies; no sustituye la revisión del hosting real.

## Despliegue y comprobaciones externas

1. Publicar `npm run build` → `dist` en Vercel. No añadir un rewrite global a index.html: convertiría errores reales en soft 404.
2. `vercel.json` configura URLs limpias, sin slash final en internas, y redirect permanente non-www → www. Vercel proporciona HTTPS y usa el archivo 404.html para recursos no encontrados.
3. Revisar Domains en Vercel: en producción se observó HTTPS non-www → www con **307**, y HTTP www → HTTPS con **308**. Una redirección configurada en el panel puede ejecutarse antes que vercel.json: cambiarla a permanente allí si sigue siendo 307. No se modificaron DNS ni ajustes de cuenta.
4. Comprobar después del deploy con curl: las cuatro combinaciones http/https y www/non-www, conservación de ruta/query, `/privacidad`, `/privacidad/`, `/privacidad.html`, `/sitemap.xml`, `/robots.txt`, `/og/kovaro.png` y una ruta inexistente. La última debe devolver HTTP 404 y contenido de marca. Las rutas reales deben devolver 200 y canonical propio.
5. Mantener previews protegidas o noindex desde Vercel. No cambiar robots de producción para ocultar previews.
6. Confirmar que Analytics y Speed Insights están habilitados en el panel y que sus endpoints no devuelven 404. Esos endpoints no existen en el preview local.
7. Confirmar que los procesos internos cumplen los 24 meses de conservación y las solicitudes de derechos; el texto publicado no automatiza el borrado de correo/WhatsApp.

## Search Console y medición

- Crear propiedad **Dominio** `kovarotech.com`, verificar con el TXT DNS exacto que entregue Google. No se incluyó token inventado.
- Enviar `https://www.kovarotech.com/sitemap.xml`.
- Inspeccionar home y páginas internas, revisar HTML rastreado/canonical seleccionado y solicitar indexación cuando estén publicadas.
- Revisar Pages, Core Web Vitals y rendimiento por consulta, página y país Ecuador. INP requiere datos de campo; TBT de laboratorio no equivale a INP.
- Validar JSON-LD en Schema Markup Validator y Google Rich Results Test. WebSite/Service no garantizan un resultado enriquecido; no agregar FAQ, ratings o SearchAction artificiales.
- Bing Webmaster Tools puede importar la propiedad verificada de Search Console y recibir el sitemap.
- Google Business Profile solo si el negocio reúne condiciones reales de elegibilidad, por ejemplo atención presencial aplicable; una actividad exclusivamente online puede no ser elegible. No publicar una dirección personal ni simular oficinas en ciudades.

## Arquitectura editorial futura

Reservar conceptualmente `/servicios/desarrollo-web`, `/servicios/desarrollo-software`, `/servicios/seo`, `/servicios/branding`, `/servicios/marketing-digital`, `/servicios/automatizacion`, `/servicios/ecommerce`. Actualmente devuelven 404: no son páginas vacías publicadas.

Cada servicio necesita alcance concreto, problemas que resuelve, proceso, entregables, criterios de contratación, proyectos relacionados y contacto. Añadir Service con `provider` enlazado a Organization, `areaServed: Country/Ecuador` y `serviceType` fiel al contenido. Crear un índice `/servicios` cuando haya páginas reales, y actualizar BreadcrumbList según esa jerarquía. La home enlaza a servicios; estos a casos relacionados y viceversa.

Para casos: `/proyectos/{slug}` con información verificable, title/description propios e imagen específica cuando aporte valor. El carrusel actual no simula páginas individuales.

Para artículos: `/insights/{slug}` con autor, fechas reales, referencias y contenido revisado; crear índice solo cuando existan publicaciones. Priorizar coste y requisitos de una web en Ecuador, web vs landing, software a medida, hosting y ecommerce. No generar artículos en masa.

Páginas locales como `/desarrollo-web/quito` solo con contenido diferenciado y evidencia útil. No crear páginas por ciudad sustituyendo nombres. La marca tiene enfoque nacional, sin declarar oficinas o clientes inexistentes.

Conseguir enlaces y menciones reales desde clientes, alianzas, casos publicados y recursos útiles. Medir consultas cualificadas, además de impresiones y clics; ningún cambio garantiza posiciones.

La generación estática actual admite crecimiento editorial. Con muchas páginas, separar los bundles de home/servicios y automatizar la fuente de contenido; evaluar SSR únicamente para necesidades dinámicas reales. No es necesario migrar de framework hoy.

## Referencias verificadas

- [Google: JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Vercel: 404 estática](https://vercel.com/kb/guide/custom-404-page)
- [Vercel Web Analytics: privacidad](https://vercel.com/docs/analytics/privacy-policy)
- [Vercel Speed Insights: privacidad](https://vercel.com/docs/speed-insights/privacy-policy)
- [LOPDP, texto publicado por entidad pública](https://www.consejodecomunicacion.gob.ec/wp-content/uploads/downloads/2021/07/lotaip/Ley%20Org%C3%A1nica%20de%20Protecci%C3%B3n%20de%20Datos%20Personales.pdf)
- [Autoridad de protección de datos de Ecuador](https://spdp.gob.ec/)

## Validación realizada

- `npm run build` y `npm run lint`: correctos.
- `npm run test:seo`: 8 pruebas correctas. HTML sin JS, un H1, jerarquía, canonical y metadata únicas, JSON-LD parseable, atributos alt, enlaces internos y destinos de anclas, sitemap/robots, rutas inexistentes, hidratación, interacción y responsive 390/1440 px, reduced motion.
- Revisión visual de la página legal móvil y de la tarjeta social 1200 × 630. Capturas de todas las páginas disponibles en test-results tras ejecutar las pruebas.
- Lighthouse móvil local, preview con gzip: SEO 100 en home/privacidad/cookies/términos. Home: rendimiento 93, accesibilidad 96, buenas prácticas 96, FCP 2,0 s, LCP 3,0 s, CLS 0, TBT 40 ms.
- LCP sigue por encima del objetivo de 2,5 s en esta simulación. Confirmar en producción y optimizar según datos de campo; no se declara aprobado Core Web Vitals ni se dispone de INP de campo.
- Accesibilidad detecta contraste insuficiente en parte del texto secundario del diseño existente. No se modificó globalmente la paleta en este tratamiento SEO.
- Buenas prácticas detecta los endpoints de Analytics/Speed Insights ausentes en el servidor estático local; comprobarlos en Vercel después del deploy. No se ocultaron esos errores para mejorar la puntuación.
- Los resultados locales no sustituyen Rich Results Test, validación de redirecciones y 404 en el hosting desplegado ni medición de usuarios reales.

Schemas de referencia: [Organization](https://schema.org/Organization), [WebSite](https://schema.org/WebSite), [BreadcrumbList](https://schema.org/BreadcrumbList), [Service](https://schema.org/Service).
