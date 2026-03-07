import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'

import logoProtecompu from '../assets/images/portafolio/protecompu.webp'
import logoDavidCeli from '../assets/images/portafolio/david_celi.webp'
import logoCarlaManrique from '../assets/images/portafolio/carla_manrique.webp'

const proyectos = [
    {
        nombre: "Protecompu",
        categoria: "Web",
        descripcion: "Rediseño completo del sitio web y mejora de SEO para empresa de infraestructura tecnológica en Ecuador.",
        detalle: "Rediseño completo + SEO",
        logo: logoProtecompu,
        url: "https://protecompu.com/",
        destacado: true,
        color: "purple"
    },
    {
        nombre: "David Celi",
        categoria: "Web",
        descripcion: "Rediseño completo del sitio web y mejora de SEO para abogado corporativo con diseño elegante y moderno.",
        detalle: "Rediseño completo + SEO",
        logo: logoDavidCeli,
        url: "https://davidcelilupera.ec/",
        destacado: true,
        color: "fuchsia"
    },
    {
        nombre: "Carla Manrique",
        categoria: "Web",
        descripcion: "Diseño y desarrollo web desde cero para profesional independiente.",
        detalle: "Web desde cero",
        logo: logoCarlaManrique,
        url: null,
        destacado: false,
        color: "purple"
    },
]

// const categorias = ['Todos', 'Web', 'Marketing', 'Ambos']

const colorMap = {
    purple: {
        border: 'rgba(168,85,247,0.25)',
        hoverBorder: 'rgba(168,85,247,0.7)',
        tag: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
        btn: 'bg-purple-600 hover:bg-purple-500',
        overlay: 'rgba(10,0,30,0.92)',
        glow: 'rgba(168,85,247,0.08)',
        glowHover: 'rgba(168,85,247,0.18)',
        dot: '#a855f7',
        expandBorder: 'rgba(168,85,247,0.3)',
        expandBg: 'rgba(168,85,247,0.05)',
    },
    fuchsia: {
        border: 'rgba(217,70,239,0.25)',
        hoverBorder: 'rgba(217,70,239,0.7)',
        tag: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30',
        btn: 'bg-fuchsia-600 hover:bg-fuchsia-500',
        overlay: 'rgba(20,0,30,0.92)',
        glow: 'rgba(217,70,239,0.08)',
        glowHover: 'rgba(217,70,239,0.18)',
        dot: '#d946ef',
        expandBorder: 'rgba(217,70,239,0.3)',
        expandBg: 'rgba(217,70,239,0.05)',
    }
}

function ProyectoCard({ proyecto, expandido, onToggle }) {
    const c = colorMap[proyecto.color]

    return (
        <div className="flex flex-col">
            {/* Card */}
            <div
                className="group relative rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ borderColor: c.border, background: c.glow }}
                onMouseEnter={e => e.currentTarget.style.borderColor = c.hoverBorder}
                onMouseLeave={e => e.currentTarget.style.borderColor = c.border}
            >
                {/* Badge destacado */}
                {proyecto.destacado && (
                    <div className="absolute top-3 left-3 z-20">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-black/70 border border-yellow-500/40 text-yellow-400 font-medium">
                            ✦
                        </span>
                    </div>
                )}

                {/* Logo area */}
                <div className="relative h-58 flex items-center justify-center p-6 overflow-hidden">
                    {/* Glow de fondo al hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at center, ${c.glowHover} 0%, transparent 70%)` }}
                    />

                    <img
                        src={proyecto.logo}
                        alt={`Logo de ${proyecto.nombre}`}
                        className="max-h-24 max-w-full object-contain relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20 md:group-hover:opacity-20"
                    />

                    {/* Overlay hover — solo desktop */}
                    <div className="absolute inset-0 z-20 hidden md:flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 px-5"
                        style={{ background: c.overlay }}
                    >
                        <h3 className="text-white font-bold text-lg text-center leading-tight">{proyecto.nombre}</h3>
                        <span className={`text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border ${c.tag}`}>
                            {proyecto.categoria}
                        </span>
                        <p className="text-gray-400 text-xs text-center leading-relaxed mt-1">{proyecto.descripcion}</p>
                        {proyecto.url ? (
                            <a
                                href={proyecto.url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={e => e.stopPropagation()}
                                aria-label={`Ver sitio web de ${proyecto.nombre}`}
                                className={`mt-2 text-white text-xs px-4 py-1.5 rounded-full transition-colors ${c.btn}`}
                            >
                                Ver sitio →
                            </a>
                        ) : (
                            <span className="text-gray-600 text-xs italic mt-1">Próximamente</span>
                        )}
                    </div>
                </div>

                {/* Info básica siempre visible */}
                <div className="px-4 pb-3 flex items-center justify-between">
                    <div>
                        <p className="text-white font-bold text-sm">{proyecto.nombre}</p>
                        <p className="text-gray-600 text-xs">{proyecto.detalle}</p>
                    </div>
                    {/* Toggle móvil */}
                    <button
                        className="md:hidden flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border transition-all duration-300"
                        style={{
                            borderColor: expandido ? c.dot : 'rgba(255,255,255,0.08)',
                            color: expandido ? c.dot : '#6b7280',
                        }}
                        onClick={onToggle}
                        aria-expanded={expandido}
                        aria-label={expandido ? 'Cerrar detalles' : 'Ver detalles'}
                    >
                        <span style={{ transform: expandido ? 'rotate(45deg)' : 'rotate(0)', display: 'inline-block', transition: 'transform 0.3s' }}>✦</span>
                        <span>{expandido ? 'Cerrar' : 'Ver más'}</span>
                    </button>
                </div>
            </div>

            {/* Panel expandido móvil */}
            <div className="md:hidden">
                <AnimatePresence>
                    {expandido && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="overflow-hidden"
                        >
                            <div
                                className="mt-1 rounded-2xl px-5 py-4 border"
                                style={{ background: c.expandBg, borderColor: c.expandBorder }}
                            >
                                <span className={`text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border inline-block mb-3 ${c.tag}`}>
                                    {proyecto.categoria}
                                </span>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{proyecto.descripcion}</p>
                                {proyecto.url ? (
                                    <a
                                        href={proyecto.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Ver sitio web de ${proyecto.nombre}`}
                                        className={`inline-flex text-white text-xs px-5 py-2 rounded-full transition-colors ${c.btn}`}
                                    >
                                        Ver sitio →
                                    </a>
                                ) : (
                                    <span className="text-gray-600 text-xs italic">Próximamente disponible</span>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

function Portafolio() {
    // const [filtro, setFiltro] = useState('Todos')
    const [expandido, setExpandido] = useState(null)

    // const proyectosFiltrados = filtro === 'Todos'
    //     ? proyectos
    //     : proyectos.filter(p => p.categoria === filtro)

    const toggleExpandido = (nombre) => {
        setExpandido(expandido === nombre ? null : nombre)
    }

    return (
        <section id="portafolio" className="bg-black py-24 px-6 overflow-hidden relative">

            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-700/5 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-fuchsia-700/5 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />

            <AnimatedSection>
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <span className="text-purple-500 text-xs tracking-[0.5em] uppercase mb-4 block font-medium">
                        Nuestro trabajo
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Proyectos que{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                            hablan por sí solos.
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                        Cada proyecto es una historia de confianza, trabajo y resultados reales.
                    </p>
                </div>
            </AnimatedSection>

            {/* Filtros
            <AnimatedSection>
                <div className="flex justify-center gap-3 mb-12 flex-wrap" role="group" aria-label="Filtrar proyectos por categoría">
                    {categorias.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setFiltro(cat); setExpandido(null) }}
                            aria-pressed={filtro === cat}
                            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                                filtro === cat
                                    ? 'bg-purple-600 border-purple-500 text-white'
                                    : 'border-purple-900/40 text-gray-400 hover:border-purple-500/50 hover:text-white bg-transparent'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </AnimatedSection> */}

            {/* Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {proyectos.map((proyecto) => (
                    <AnimatedSection key={proyecto.nombre}>
                        <ProyectoCard
                            proyecto={proyecto}
                            expandido={expandido === proyecto.nombre}
                            onToggle={() => toggleExpandido(proyecto.nombre)}
                        />
                    </AnimatedSection>
                ))}

                {/* {proyectosFiltrados.length === 0 && (
                    <div className="col-span-3 text-center py-16 text-gray-500">
                        No hay proyectos en esta categoría todavía.
                    </div>
                )} */}
            </div>

        </section>
    )
}

export default Portafolio