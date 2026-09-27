import { EMAIL, INSTAGRAM, LINKEDIN, WHATSAPP_NUMBER } from './contact.js'

export const ORIGIN = 'https://www.kovarotech.com'
export const OG_IMAGE = `${ORIGIN}/og/kovaro.png`
// Only published pages belong here. Future services, projects and insights
// receive their own content and metadata before joining this registry.
export const pages = [
  { path: '/', title: 'Kovaro Tech | Desarrollo web y software en Ecuador', description: 'Desarrollo web y software para empresas en Ecuador. Combinamos diseño, automatización y marketing digital para impulsar tu negocio. Conversemos.', label: 'Inicio', kind: 'home' },
  { path: '/privacidad', title: 'Política de privacidad | Kovaro Tech', description: 'Cómo Kovaro Tech trata los datos de contacto y navegación, qué proveedores intervienen y cómo solicitar el ejercicio de tus derechos.', label: 'Privacidad', kind: 'legal' },
  { path: '/cookies', title: 'Política de cookies | Kovaro Tech', description: 'Información sobre cookies, medición de visitas y rendimiento en Kovaro Tech, enlaces a terceros y opciones de configuración del navegador.', label: 'Cookies', kind: 'legal' },
  { path: '/terminos', title: 'Términos de uso | Kovaro Tech', description: 'Condiciones de uso del sitio de Kovaro Tech: contenido, propiedad intelectual, enlaces externos, disponibilidad y contacto.', label: 'Términos', kind: 'legal' },
]
export const notFound = { path: '/404', title: 'Página no encontrada | Kovaro Tech', description: 'Esta página no existe. Vuelve al inicio de Kovaro Tech.', label: 'Página no encontrada', kind: '404', noindex: true }
export const getPage = (path) => pages.find((page) => page.path === path.replace(/\/$/, '') || (page.path === '/' && path === '/')) ?? notFound

export function structuredData(page) {
  if (page.noindex) return null
  const url = ORIGIN + page.path
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${ORIGIN}/#organization`, name: 'Kovaro Tech', alternateName: 'Kovaro', url: `${ORIGIN}/`, logo: `${ORIGIN}/favicon/android-chrome-512x512.png`, email: EMAIL, telephone: `+${WHATSAPP_NUMBER}`, sameAs: [INSTAGRAM, LINKEDIN], areaServed: { '@type': 'Country', name: 'Ecuador' } },
      { '@type': 'WebSite', '@id': `${ORIGIN}/#website`, name: 'Kovaro Tech', alternateName: 'Kovaro', url: `${ORIGIN}/`, inLanguage: 'es-EC', publisher: { '@id': `${ORIGIN}/#organization` } },
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'es-EC', isPartOf: { '@id': `${ORIGIN}/#website` }, ...(page.path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}) },
      ...(page.path === '/' ? [] : [{ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${ORIGIN}/` }, { '@type': 'ListItem', position: 2, name: page.label, item: url }] }]),
    ],
  }
}

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
export function renderHead(page) {
  const meta = (name, value, property = false) => `<meta ${property ? 'property' : 'name'}="${name}" content="${escape(value)}" />`
  const schema = structuredData(page)
  return [
    `<title>${escape(page.title)}</title>`, meta('description', page.description),
    meta('robots', page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'),
    ...(!page.noindex ? [`<link rel="canonical" href="${ORIGIN}${page.path}" />`, meta('og:url', ORIGIN + page.path, true)] : []),
    ...Object.entries({ 'og:type': 'website', 'og:title': page.title, 'og:description': page.description, 'og:site_name': 'Kovaro Tech', 'og:locale': 'es_EC', 'og:image': OG_IMAGE, 'og:image:width': '1200', 'og:image:height': '630', 'og:image:type': 'image/png', 'og:image:alt': 'Kovaro — Technology · Design · Growth' }).map(([name, value]) => meta(name, value, true)),
    ...Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:title': page.title, 'twitter:description': page.description, 'twitter:image': OG_IMAGE, 'twitter:image:alt': 'Kovaro — Technology · Design · Growth' }).map(([name, value]) => meta(name, value)),
    schema ? `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>` : '',
  ].join('\n  ')
}
