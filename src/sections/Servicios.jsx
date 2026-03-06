import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

const webServicios = [
  {
    titulo: "Página web desde cero",
    descripcion: "Te conseguimos el dominio, configuramos el servidor y construimos tu sitio completo. Tú no tienes que hacer nada técnico.",
    icono: "◈"
  },
  {
    titulo: "Landing page",
    descripcion: "Una página enfocada en un solo objetivo: que el visitante te contacte, compre o se registre. Simple y efectiva.",
    icono: "◎"
  },
  {
    titulo: "Rediseño web",
    descripcion: "¿Tu web se ve vieja o no genera resultados? La modernizamos sin perder lo que ya tienes.",
    icono: "◉"
  },
  {
    titulo: "Tienda online",
    descripcion: "Vende tus productos o servicios por internet. Pagos, catálogo y gestión de pedidos — todo incluido.",
    icono: "⬡"
  },
  {
    titulo: "SEO — Aparece en Google",
    descripcion: "Optimizamos tu web para que salgas en los primeros resultados cuando alguien busca lo que ofreces.",
    icono: "⬢"
  },
  {
    titulo: "Chatbots e integraciones",
    descripcion: "Automatizamos respuestas, formularios y procesos para que tu negocio funcione solo, incluso de noche.",
    icono: "◆"
  },
  {
    titulo: "Mantenimiento y soporte",
    descripcion: "Después de entregar tu proyecto no desaparecemos. Cambios, actualizaciones y soporte sin fecha límite.",
    icono: "◈"
  },
]

const marketingServicios = [
  {
    titulo: "Community Management",
    descripcion: "Nos encargamos de tus redes sociales — publicaciones, respuestas y crecimiento diario sin que tú muevas un dedo.",
    icono: "◈"
  },
  {
    titulo: "Estrategia de contenido",
    descripcion: "Planificamos qué publicar, cuándo y cómo para que tu audiencia crezca y se quede.",
    icono: "◎"
  },
  {
    titulo: "Branding e identidad de marca",
    descripcion: "Logo, colores, tipografía y tono de voz — todo lo que hace que tu marca sea reconocible y profesional.",
    icono: "◉"
  },
  {
    titulo: "Análisis y reportes",
    descripcion: "Te decimos exactamente qué está funcionando y qué no, con números reales y recomendaciones claras.",
    icono: "⬡"
  },
  {
    titulo: "Estudio de mercado",
    descripcion: "Investigamos tu competencia y tu audiencia para encontrar oportunidades que otros no están aprovechando.",
    icono: "⬢"
  },
]

function ServicioItem({ item, color }) {
  const [abierto, setAbierto] = useState(false)

  const colorMap = {
    purple: {
      border: 'rgba(168,85,247,0.5)',
      bg: 'rgba(168,85,247,0.07)',
      icon: '#a855f7',
      dot: 'rgba(168,85,247,0.6)'
    },
    fuchsia: {
      border: 'rgba(217,70,239,0.5)',
      bg: 'rgba(217,70,239,0.07)',
      icon: '#d946ef',
      dot: 'rgba(217,70,239,0.6)'
    }
  }

  const c = colorMap[color]

  return (
    <div
      onClick={() => setAbierto(!abierto)}
      className="cursor-pointer rounded-xl p-4 transition-all duration-300 border"
      style={{
        borderColor: abierto ? c.border : 'rgba(255,255,255,0.04)',
        background: abierto ? c.bg : 'rgba(255,255,255,0.015)',
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-base flex-shrink-0" style={{ color: c.icon }}>{item.icono}</span>
          <span className="text-gray-200 text-sm font-medium">{item.titulo}</span>
        </div>
        <span
          className="text-xs flex-shrink-0 transition-all duration-300"
          style={{
            color: c.icon,
            transform: abierto ? 'rotate(45deg)' : 'rotate(0deg)',
            opacity: abierto ? 1 : 0.4
          }}
        >
          ✦
        </span>
      </div>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: abierto ? '80px' : '0px', opacity: abierto ? 1 : 0 }}
      >
        <p className="text-gray-400 text-xs leading-relaxed mt-3 pl-6 border-l"
          style={{ borderColor: c.dot }}
        >
          {item.descripcion}
        </p>
      </div>
    </div>
  )
}

function Servicios() {
  const scrollToContact = () => {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="servicios" className="bg-black py-24 px-6 overflow-hidden relative">

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-700/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-700/5 blur-[150px] pointer-events-none rounded-full" />

      <AnimatedSection>
        <div className="max-w-5xl mx-auto text-center mb-20">
          <span className="text-purple-500 text-xs tracking-[0.5em] uppercase mb-4 block font-medium">
            Lo que hacemos
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Todo lo que necesitas.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              En un solo lugar.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Sin intermediarios, sin complicaciones. Nos encargamos de todo para que tú te enfoques en lo que importa — tu negocio.
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* CARD WEB */}
        <AnimatedSection>
          <div className="group relative rounded-[1.75rem] p-[1px] h-full transition-all duration-500"
            style={{ background: 'linear-gradient(145deg, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0.05) 60%, transparent 100%)' }}
          >
            <div className="bg-[#050505] rounded-[1.7rem] p-8 h-full relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-72 h-72 bg-purple-600/8 blur-[90px] pointer-events-none transition-all duration-700 group-hover:bg-purple-600/15" />

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
                      <span className="text-purple-400 text-sm">◈</span>
                    </div>
                    <span className="text-purple-400 text-xs tracking-widest uppercase font-medium">Desarrollo Web</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mt-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Tu presencia digital,
                  </h3>
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    construida para durar.
                  </h3>
                  <p className="text-gray-500 text-xs mt-2">Toca cada servicio para saber más</p>
                </div>

                <div className="flex flex-col gap-2">
                  {webServicios.map((item) => (
                    <ServicioItem key={item.titulo} item={item} color="purple" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CARD MARKETING */}
        <AnimatedSection>
          <div className="group relative rounded-[1.75rem] p-[1px] h-full transition-all duration-500"
            style={{ background: 'linear-gradient(145deg, rgba(217,70,239,0.4) 0%, rgba(217,70,239,0.05) 60%, transparent 100%)' }}
          >
            <div className="bg-[#050505] rounded-[1.7rem] p-8 h-full relative overflow-hidden">
              <div className="absolute -left-16 -bottom-16 w-72 h-72 bg-fuchsia-600/8 blur-[90px] pointer-events-none transition-all duration-700 group-hover:bg-fuchsia-600/15" />

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-fuchsia-500/15 border border-fuchsia-500/25 flex items-center justify-center">
                      <span className="text-fuchsia-400 text-sm">◎</span>
                    </div>
                    <span className="text-fuchsia-400 text-xs tracking-widest uppercase font-medium">Marketing Digital</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mt-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Tu marca,
                  </h3>
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    imposible de ignorar.
                  </h3>
                  <p className="text-gray-500 text-xs mt-2">Toca cada servicio para saber más</p>
                </div>

                <div className="flex flex-col gap-2">
                  {marketingServicios.map((item) => (
                    <ServicioItem key={item.titulo} item={item} color="fuchsia" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FUSIÓN */}
        <AnimatedSection className="md:col-span-2">
          <div className="relative rounded-[1.75rem] p-[1px] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #7c3aed 100%)' }}
          >
            <div className="bg-[#050505] rounded-[1.7rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 pointer-events-none" />
              
              <div className="max-w-2xl relative z-10">
                <p className="text-purple-400 text-xs tracking-[0.4em] uppercase font-medium mb-4">¿Qué nos diferencia?</p>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  Web sin marketing es invisible.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                    Marketing sin web no convierte.
                  </span>
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Somos dos especialistas trabajando como uno — el mismo compromiso, la misma visión, enfocados en un solo objetivo: que tu negocio crezca.
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className="relative z-10 whitespace-nowrap px-10 py-5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-2xl hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex-shrink-0 text-sm"
                style={{ boxShadow: '0 0 40px rgba(168,85,247,0.35)' }}
              >
                Hablemos sin compromiso
              </button>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export default Servicios