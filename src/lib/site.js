/* ==========================================================================
   KOVARO — Contenido del sitio
   Todo el copy y los datos viven aquí. Los componentes solo los presentan.
   ========================================================================== */

import davidDesktop from '../assets/images/portafolio/shots/david_celi_desktop.webp'
import davidMobile from '../assets/images/portafolio/shots/david_celi_mobile.webp'
import proteDesktop from '../assets/images/portafolio/shots/protecompu_desktop.webp'
import proteMobile from '../assets/images/portafolio/shots/protecompu_mobile.webp'
import carlaDesktop from '../assets/images/portafolio/shots/carla_manrique_desktop.webp'
import carlaMobile from '../assets/images/portafolio/shots/carla_manrique_mobile.webp'
import expoaseoDesktop from '../assets/images/portafolio/shots/expoaseo_desktop.webp'
import expoaseoMobile from '../assets/images/portafolio/shots/expoaseo_mobile.webp'
import carolinaDesktop from '../assets/images/portafolio/shots/carolina_alvarez_desktop.webp'
import carolinaMobile from '../assets/images/portafolio/shots/carolina_alvarez_mobile.webp'

/* ── Contacto ────────────────────────────────────────────────────────────── */

export { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, EMAIL, INSTAGRAM, LINKEDIN, LOCATION, whatsappUrl } from './contact.js'

/* ── Navegación ──────────────────────────────────────────────────────────── */

export const navLinks = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'portafolio', label: 'Trabajo' },
  { id: 'nosotros', label: 'Estudio' },
  { id: 'proceso', label: 'Proceso' },
]

/* ── Capacidades ─────────────────────────────────────────────────────────── */

/* `items` son las capacidades visibles de entrada.
   `mas` solo aparece cuando el usuario lo pide. */

export const capabilities = [
  {
    id: 'build',
    num: '01',
    key: 'BUILD',
    titulo: 'Construimos',
    claim: 'Desarrollo web, software y automatización a medida.',
    items: ['Desarrollo web', 'Software', 'Ecommerce', 'Integraciones'],
    mas: [
      'Sistemas internos',
      'APIs',
      'Automatización',
      'Infraestructura y despliegue',
      'Mantenimiento',
    ],
  },
  {
    id: 'position',
    num: '02',
    key: 'POSITION',
    titulo: 'Posicionamos',
    claim: 'Una marca que se entiende antes de explicarse.',
    items: ['Branding', 'Identidad', 'UX/UI', 'SEO'],
    mas: ['Arquitectura de información', 'Tono de voz', 'Estrategia digital'],
  },
  {
    id: 'grow',
    num: '03',
    key: 'GROW',
    titulo: 'Hacemos crecer',
    claim: 'Convertimos atención en crecimiento medible.',
    items: ['Marketing digital', 'Contenido', 'Campañas', 'Analítica'],
    mas: ['Social media', 'Optimización de conversión', 'Estudio de mercado'],
  },
]

/* ── Trabajo seleccionado ────────────────────────────────────────────────────
   Solo proyectos reales. Sin métricas inventadas.
   Añadir un proyecto requiere sus capturas y un objeto en este array.
   El orden del array determina el selector. `caso` y `url` son opcionales.
   -------------------------------------------------------------------------- */

export const proyectos = [
  {
    id: 'protecompu',
    nombre: 'Protecompu',
    corto: 'Protecompu',
    industria: 'Infraestructura TI · Ecuador',
    servicios: ['Estrategia', 'Web', 'Desarrollo', 'SEO'],
    resumen:
      'Rediseño completo orientado a claridad técnica, velocidad y posicionamiento orgánico.',
    url: '',
    caso: {
      challenge:
        'Una empresa con más de tres décadas de trayectoria técnica tenía un sitio que no comunicaba ni su alcance ni su nivel de especialización.',
      approach:
        'Reordenamos el contenido alrededor de lo que realmente buscan sus clientes: ubicaciones, productos, certificaciones y marcas representadas.',
      solution:
        'Un sitio nuevo de extremo a extremo, con jerarquía clara, modo oscuro, canales de contacto directo y estructura semántica pensada para búsqueda.',
      result:
        'Una presencia que sostiene el peso técnico de la marca y deja sus certificaciones y alianzas a la vista desde el primer scroll.',
    },
    desktop: proteDesktop,
    mobile: proteMobile,
  },
  {
    id: 'expoaseo',
    nombre: 'EXPOASEO',
    corto: 'EXPOASEO',
    industria: 'Servicios generales · Ecuador',
    servicios: ['Diseño', 'Desarrollo', 'SEO', 'Infraestructura'],
    resumen:
      'Sitio corporativo para una empresa de servicios generales con cobertura nacional.',
    url: 'https://expoaseo.com',
    caso: {
      challenge:
        'Modernizar la presencia digital de una empresa con más de 15 años de trayectoria, comunicando múltiples líneas de servicio sin perder claridad ni rendimiento.',
      approach:
        'Se diseñó una experiencia institucional centrada en jerarquía visual, contenido real, confianza, contacto rápido y optimización técnica.',
      solution:
        'Sitio corporativo responsive con contacto por WhatsApp, postulaciones laborales con carga segura de hojas de vida, SEO técnico e infraestructura en Cloudflare.',
      // Informe móvil del 30/09/2026, verificado al integrar el proyecto:
      // https://pagespeed.web.dev/analysis/https-expoaseo-com/hnl5h551fg?hl=es&form_factor=mobile
      result:
        'Publicado en producción y preparado para captación comercial, postulaciones y visibilidad orgánica. Durante su validación final obtuvo 100 en Performance, Accessibility, Best Practices y SEO en Google PageSpeed Insights; las puntuaciones pueden variar con el tiempo.',
    },
    desktop: expoaseoDesktop,
    mobile: expoaseoMobile,
  },
  {
    id: 'carolina-alvarez',
    nombre: 'Carolina Álvarez',
    corto: 'Carolina Álvarez',
    industria: 'Servicios jurídicos · Ecuador',
    servicios: ['Identidad', 'Diseño', 'Desarrollo', 'SEO'],
    resumen:
      'Sitio jurídico para marca personal, servicios especializados y publicaciones.',
    url: 'https://carolinaalvareze.com',
    caso: {
      challenge:
        'Construir una presencia digital personal capaz de comunicar especialización jurídica, confianza profesional y contenido editorial sin caer en una estética legal genérica.',
      approach:
        'Se trabajó una dirección visual editorial, una arquitectura multipágina y un sistema escalable de publicaciones con SEO específico por contenido.',
      solution:
        'Sitio con identidad propia, servicios de Derecho Penal, Tributación y Penal Económico, publicaciones mediante datos estructurados y contacto directo.',
      result:
        'Una plataforma jurídica responsive que combina servicios profesionales, marca personal, contacto directo y publicación de contenido especializado.',
    },
    desktop: carolinaDesktop,
    mobile: carolinaMobile,
  },
  {
    id: 'david-celi',
    nombre: 'David Celi Lupera',
    corto: 'David Celi',
    industria: 'Legal · Ecuador',
    servicios: ['Estrategia', 'Web', 'Desarrollo', 'SEO'],
    resumen:
      'Rediseño integral con foco en credibilidad y captación directa de consultas.',
    url: '',
    caso: {
      challenge:
        'La presencia anterior no transmitía el nivel de un despacho corporativo ni facilitaba el primer contacto.',
      approach:
        'Construimos la narrativa alrededor de una promesa concreta —necesidades legales convertidas en soluciones ejecutables— y priorizamos el agendamiento.',
      solution:
        'Sitio a medida con lenguaje visual sobrio, secciones de servicios y publicaciones, y contacto por WhatsApp siempre accesible.',
      result:
        'Una presencia consistente con el perfil corporativo del cliente y un camino claro desde la visita hasta la consulta.',
    },
    desktop: davidDesktop,
    mobile: davidMobile,
  },
  {
    id: 'carla-alvarez',
    nombre: 'Carla Álvarez Manrique',
    corto: 'Carla Álvarez',
    industria: 'Legal · Ecuador',
    servicios: ['Identidad', 'Web', 'Desarrollo'],
    resumen:
      'Identidad y sitio construidos desde cero, sin presencia digital previa.',
    url: '',
    caso: {
      challenge:
        'No existía presencia digital previa: había que definir identidad, estructura y mensaje al mismo tiempo.',
      approach:
        'Partimos de la identidad —paleta, tipografía y tono— y recién después definimos la estructura del sitio.',
      solution:
        'Sitio completo con identidad propia, jerarquía de servicios y contacto directo, construido para crecer por secciones.',
      result:
        'Una base sólida sobre la que sumar contenido y servicios sin rehacer el sitio.',
    },
    desktop: carlaDesktop,
    mobile: carlaMobile,
  },
]

/* ── Equipo ──────────────────────────────────────────────────────────────── */

export const equipo = [
  {
    id: 'sebastian',
    marca: '01 / TECHNOLOGY',
    nombre: 'Sebastián González',
    rol: 'Software & Tecnología',
    linea: 'Ingeniería de productos, sistemas y experiencias digitales.',
    linkedin: 'https://www.linkedin.com/in/sebastian-gonzalez-088174238/',
  },
  {
    id: 'melissa',
    marca: '02 / GROWTH',
    nombre: 'Melissa Celi',
    rol: 'Estrategia & Crecimiento',
    linea: 'Marca, posicionamiento y crecimiento digital.',
    linkedin: 'https://www.linkedin.com/in/gabriela-melissa-celi-993a08232/',
  },
]

/* ── Proceso ─────────────────────────────────────────────────────────────── */

export const proceso = [
  {
    num: '01',
    titulo: 'Descubrimos',
    texto: 'Entendemos el negocio, el problema y el objetivo.',
  },
  {
    num: '02',
    titulo: 'Definimos',
    texto: 'Fijamos alcance, estrategia y dirección.',
  },
  {
    num: '03',
    titulo: 'Construimos',
    texto: 'Diseñamos, desarrollamos y validamos.',
  },
  {
    num: '04',
    titulo: 'Crecemos',
    texto: 'Lanzamos, medimos y optimizamos.',
  },
]

/* ── Filosofía ───────────────────────────────────────────────────────────── */

/* La filosofía cabe en tres frases. No necesita tres párrafos. */
export const principios = [
  'Diseñamos con intención',
  'Construimos con criterio',
  'Medimos lo que importa',
]

/* ── Stack ───────────────────────────────────────────────────────────────────
   Vive como una línea de microcopy dentro de Capacidades, no como sección:
   refuerza el lado de ingeniería sin convertir la home en un currículum.
   Mantén la lista honesta y corta.
   -------------------------------------------------------------------------- */

export const stack = [
  'React',
  'TypeScript',
  'Node.js',
  '.NET',
  'Python',
  'SQL',
  'Vercel',
  'Cloudflare',
]
