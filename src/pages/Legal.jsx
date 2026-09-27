import { EMAIL, whatsappUrl } from '../lib/contact'

const content = {
  '/privacidad': {
    title: 'Política de privacidad', intro: 'Tu información merece el mismo cuidado que tu proyecto. Aquí explicamos qué ocurre cuando visitas este sitio o nos contactas.',
    sections: [
      ['Quién atiende tus datos', <>El responsable del tratamiento es Sebastián Vicente González Celi, RUC 1150346300001, quien opera comercialmente bajo la marca Kovaro Tech en Ecuador. Para consultas sobre el tratamiento de información o para ejercer tus derechos, escribe a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>],
      ['Información que compartes', <>Este sitio no tiene formularios, cuentas de usuario ni pagos. Si nos contactas por <a href={whatsappUrl}>WhatsApp</a> o correo electrónico, recibimos los datos que compartas, como tu nombre, número, email, empresa y detalles del proyecto. Evita enviar datos sensibles o información de otras personas que no sea necesaria para tu consulta.</>],
      ['Para qué se utiliza', 'La información de contacto permite responder consultas, preparar propuestas y gestionar la relación profesional que solicites. Estas comunicaciones pueden formar parte de medidas precontractuales o de la ejecución de un servicio; cuando un tratamiento requiera consentimiento, deberá solicitarse para esa finalidad. Contactarnos no equivale a suscribirte a publicidad.'],
      ['Navegación y rendimiento', <>El sitio integra Vercel Web Analytics para estadísticas de visitas y Vercel Speed Insights para medir rendimiento. Pueden procesar datos técnicos como página visitada, origen de la visita, navegador, dispositivo, ubicación aproximada y métricas de carga. No configuramos eventos con datos de contacto. Consulta la <a href="https://vercel.com/docs/analytics/privacy-policy">información de Web Analytics</a> y la <a href="https://vercel.com/docs/speed-insights/privacy-policy">información de Speed Insights</a>.</>],
      ['Proveedores y terceros', 'Vercel presta el alojamiento y la medición técnica; la infraestructura puede procesar registros de solicitudes para operar y proteger el sitio. El correo y WhatsApp intervienen cuando eliges esos canales. Los enlaces a Instagram y LinkedIn abren servicios externos, sujetos a sus propias políticas. Estos proveedores pueden tratar información fuera de Ecuador; puedes pedirnos información sobre los proveedores y garantías aplicables a tu relación con Kovaro.'],
      ['Conservación y seguridad', 'Las consultas de potenciales clientes se conservan hasta 24 meses desde la última interacción, salvo que deriven en una relación contractual o exista una obligación legal que requiera conservar determinada información por más tiempo. Después de ese plazo, los datos deberán eliminarse o anonimizarse cuando ya no sean necesarios. Puedes solicitar información sobre la conservación de tus comunicaciones o pedir su eliminación cuando corresponda. Los datos enviados por correo o WhatsApp también permanecen sujetos a las condiciones de almacenamiento de esos servicios. Ningún canal de internet ofrece seguridad absoluta.'],
      ['Tus derechos', <>Conforme a la normativa ecuatoriana aplicable, puedes solicitar acceso, rectificación y actualización, eliminación, oposición, portabilidad y suspensión del tratamiento, así como retirar el consentimiento cuando esa sea la base del tratamiento. Escribe a <a href={`mailto:${EMAIL}`}>{EMAIL}</a> indicando tu solicitud; se podrá pedir la información mínima necesaria para verificar tu identidad. También puedes presentar un reclamo ante la <a href="https://spdp.gob.ec/">Superintendencia de Protección de Datos Personales</a>. Este sitio no implementa decisiones automatizadas con efectos jurídicos sobre sus visitantes.</>],
      ['Cookies y cambios', <>Consulta nuestra <a href="/cookies">política de cookies</a> para conocer el almacenamiento en el navegador. Esta página se actualizará si cambian las herramientas o finalidades descritas.</>],
    ],
  },
  '/cookies': {
    title: 'Política de cookies', intro: 'Información clara sobre el almacenamiento en tu navegador y las herramientas de medición de este sitio.',
    sections: [
      ['Qué son las cookies', 'Son pequeños archivos que un sitio puede guardar en tu navegador para recordar información. El almacenamiento local es otra tecnología que permite conservar datos entre visitas.'],
      ['Qué utiliza este sitio', 'La aplicación de Kovaro Tech no configura cookies propias, almacenamiento local, sesiones de usuario ni carrito de compras. No hay Google Analytics, píxeles publicitarios ni contenido social incrustado en el código actual.'],
      ['Medición sin cookies', <>Integramos Vercel Web Analytics y Speed Insights para conocer las visitas y el rendimiento. Según su documentación, funcionan sin cookies de seguimiento. No instalamos cookies analíticas ni publicitarias opcionales, por lo que no mostramos un banner para aceptarlas. Puedes consultar los detalles en nuestra <a href="/privacidad">política de privacidad</a>.</>],
      ['Servicios externos', 'Los enlaces de WhatsApp, Instagram y LinkedIn llevan a plataformas externas. Esos servicios pueden utilizar cookies al visitarlos; sus políticas y controles se aplican dentro de sus plataformas. El alojamiento también puede aplicar medidas técnicas de seguridad según su configuración.'],
      ['Cómo administrarlas', 'Puedes consultar, bloquear o borrar cookies desde los ajustes de privacidad de tu navegador. Las extensiones de privacidad también pueden bloquear solicitudes de medición. Si en el futuro incorporamos cookies opcionales, actualizaremos esta política e incorporaremos controles para aceptar o rechazar su uso antes de activarlas.'],
      ['Contacto', <>Para consultas sobre cookies, escribe a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>],
    ],
  },
  '/terminos': {
    title: 'Términos de uso', intro: 'Este sitio presenta el trabajo y los servicios de Kovaro Tech. Estas condiciones se refieren a su navegación y contenido.',
    sections: [
      ['Uso del sitio', 'Puedes consultar nuestros servicios, proyectos y canales de contacto. Utiliza el sitio de forma lícita y sin interferir con su funcionamiento, intentar accesos no autorizados o vulnerar derechos de terceros.'],
      ['Servicios y propuestas', 'La información publicada es una presentación general. Enviar una consulta no formaliza una contratación. El alcance, precio, entregables, plazos y condiciones de cada proyecto se acuerdan por separado. Este sitio no procesa compras ni pagos.'],
      ['Propiedad intelectual', 'Los textos, diseño y elementos propios de Kovaro Tech están protegidos por la normativa aplicable. Las marcas, imágenes y trabajos de clientes pertenecen a sus respectivos titulares o se muestran como referencia del trabajo realizado. Su publicación no concede una licencia para reutilizarlos; solicita autorización cuando corresponda.'],
      ['Contenido y enlaces externos', 'Procuramos mantener la información actualizada, aunque puede cambiar o contener errores. Los enlaces externos se facilitan como referencia o medio de contacto. Sus contenidos, disponibilidad y condiciones dependen de sus respectivos operadores.'],
      ['Disponibilidad y responsabilidad', 'El sitio puede sufrir interrupciones por mantenimiento o incidencias técnicas. No garantizamos disponibilidad continua ni resultados comerciales o posiciones en buscadores por consultar este sitio. Estas condiciones no excluyen responsabilidades ni derechos que la legislación aplicable considere irrenunciables.'],
      ['Privacidad y contacto', <>El tratamiento de datos se describe en la <a href="/privacidad">política de privacidad</a>. Para consultas sobre el sitio o estas condiciones, escribe a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>],
    ],
  },
}

export default function Legal({ page }) {
  const data = content[page.path]
  return <article className="container-k pb-24 pt-32 md:pt-40">
    <div className="mx-auto max-w-3xl">
      <nav aria-label="Ruta de navegación" className="mb-10 text-sm text-muted"><a href="/" className="hover:text-bone">Inicio</a><span aria-hidden="true"> / </span><span aria-current="page">{page.label}</span></nav>
      <p className="label-mono mb-6 text-accent">K/ · Legal</p>
      <h1 className="text-display text-balance">{data.title}</h1>
      <p className="text-body-lg mt-8 text-muted">{data.intro}</p>
      <p className="mt-6 text-sm text-muted">Última actualización: <time dateTime="2026-09-27">27 de septiembre de 2026</time></p>
      <div className="legal-copy mt-14 space-y-10">{data.sections.map(([title, body]) => <section key={title} className="border-t border-line pt-7"><h2 className="text-subheading">{title}</h2><p className="text-body mt-4 text-muted">{body}</p></section>)}</div>
    </div>
  </article>
}
