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

/* ── Contacto ────────────────────────────────────────────────────────────── */

export const WHATSAPP_NUMBER = '593992612833'
export const WHATSAPP_MESSAGE =
  'Hola! Me interesa conocer más sobre los servicios de Kovaro.'
export const EMAIL = 'contact@kovarotech.com'
export const INSTAGRAM = 'https://www.instagram.com/kovarotech/'
export const LINKEDIN = 'https://www.linkedin.com/in/kovaro-tech-b1887a3b5/'
export const LOCATION = 'Quito, Ecuador'

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

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
    claim: 'Producto digital a medida, del código a la infraestructura.',
    items: ['Web', 'Software', 'Ecommerce', 'Integraciones'],
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
    items: ['Marketing', 'Contenido', 'Campañas', 'Analítica'],
    mas: ['Social media', 'Optimización de conversión', 'Estudio de mercado'],
  },
]

/* ── Trabajo seleccionado ────────────────────────────────────────────────────
   Solo proyectos reales. Sin métricas inventadas.
   `url` queda vacío a propósito: añádelo cuando quieras enlazar el sitio vivo.
   -------------------------------------------------------------------------- */

export const proyectos = [
  {
    id: 'protecompu',
    num: '01',
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
    id: 'david-celi',
    num: '02',
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
    num: '03',
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
