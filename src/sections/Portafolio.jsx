import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

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

const categorias = ['Todos', 'Web', 'Marketing', 'Ambos']

const colorMap = {
    purple: {
        border: 'rgba(168,85,247,0.4)',
        bg: 'rgba(168,85,247,0.06)',
        hoverBorder: 'rgba(168,85,247,0.7)',
        tag: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
        glow: 'rgba(168,85,247,0.2)',
        btn: 'bg-purple-600 hover:bg-purple-500',
        logoBg: 'rgba(168,85,247,0.08)',
    },
    fuchsia: {
        border: 'rgba(217,70,239,0.4)',
        bg: 'rgba(217,70,239,0.06)',
        hoverBorder: 'rgba(217,70,239,0.7)',
        tag: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30',
        glow: 'rgba(217,70,239,0.2)',
        btn: 'bg-fuchsia-600 hover:bg-fuchsia-500',
        logoBg: 'rgba(217,70,239,0.08)',
    }
}

function ProyectoCard({ proyecto }) {
    const c = colorMap[proyecto.color]

    return (
        <div
            className="group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
            style={{
                borderColor: c.border,
                background: c.bg,
                boxShadow: `0 0 30px ${c.glow}`
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = c.hoverBorder}
            onMouseLeave={e => e.currentTarget.style.borderColor = c.border}
        >
            {/* Badge destacado */}
            {proyecto.destacado && (
                <div className="absolute top-3 right-3 z-10">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-black/60 border border-yellow-500/40 text-yellow-400 font-medium">
                        ✦ Destacado
                    </span>
                </div>
            )}

            {/* Logo area */}
            <div
                className="h-44 flex items-center justify-center p-8 relative overflow-hidden"
                style={{ background: c.logoBg }}
            >
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${c.glow} 0%, transparent 70%)` }}
                />
                <img
                    src={proyecto.logo}
                    alt={`Logo de ${proyecto.nombre}`}
                    className="max-h-20 max-w-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border ${c.tag}`}>
                        {proyecto.categoria}
                    </span>
                    <span className="text-gray-500 text-xs">{proyecto.detalle}</span>
                </div>

                <h3 className="text-white font-bold text-xl mb-2">{proyecto.nombre}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{proyecto.descripcion}</p>

                <div className="mt-5">
                    {proyecto.url ? (
                        <a
                            href={proyecto.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 text-white text-sm px-5 py-2 rounded-full transition-colors ${c.btn}`}
                            aria-label={`Ver sitio web de ${proyecto.nombre}`}
                        >
                            Ver sitio
                            <span aria-hidden="true">→</span>
                        </a>
                    ) : (
                        <span className="text-gray-500 text-xs italic">Próximamente disponible</span>
                    )}
                </div>
            </div>
        </div>
    )
}

function Portafolio() {
    const [filtro, setFiltro] = useState('Todos')

    const proyectosFiltrados = filtro === 'Todos'
        ? proyectos
        : proyectos.filter(p => p.categoria === filtro)

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

            {/* Filtros */}
            <AnimatedSection>
                <div className="flex justify-center gap-3 mb-12 flex-wrap" role="group" aria-label="Filtrar proyectos por categoría">
                    {categorias.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFiltro(cat)}
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
            </AnimatedSection>

            {/* Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {proyectosFiltrados.map((proyecto) => (
                    <AnimatedSection key={proyecto.nombre}>
                        <ProyectoCard proyecto={proyecto} />
                    </AnimatedSection>
                ))}

                {proyectosFiltrados.length === 0 && (
                    <div className="col-span-3 text-center py-16 text-gray-500">
                        No hay proyectos en esta categoría todavía.
                    </div>
                )}
            </div>

        </section>
    )
}

export default Portafolio