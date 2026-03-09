import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

// ── Imágenes — usar .webp para mejor performance ──────────────────────────────
import davidDesktop  from '../assets/images/portafolio/mockups/david_celi_desktop.webp'
import davidMobile   from '../assets/images/portafolio/mockups/david_celi_mobile.webp'
import proteDesktop  from '../assets/images/portafolio/mockups/protecompu_desktop.webp'
import proteMobile   from '../assets/images/portafolio/mockups/protecompu_mobile.webp'
import carlaDesktop  from '../assets/images/portafolio/mockups/carla_manrique_desktop.webp'
import carlaMobile   from '../assets/images/portafolio/mockups/carla_manrique_mobile.webp'

// ── Data ──────────────────────────────────────────────────────────────────────
const proyectos = [
    {
        id: 'david',
        nombre: 'David Celi',
        categoria: 'Web',
        detalle: 'Rediseño completo + SEO',
        descripcion: 'Rediseño completo del sitio web y mejora de SEO para abogado corporativo con diseño elegante y moderno.',
        // url: 'https://davidcelilupera.ec/',
        destacado: true,
        color: 'fuchsia',
        num: '01',
        desktop: davidDesktop,
        mobile: davidMobile,
    },
    {
        id: 'protecompu',
        nombre: 'Protecompu',
        categoria: 'Web',
        detalle: 'Rediseño completo + SEO',
        descripcion: 'Rediseño completo del sitio web y mejora de SEO para empresa de infraestructura tecnológica en Ecuador.',
        // url: 'https://protecompu.com/',
        destacado: true,
        color: 'purple',
        num: '02',
        desktop: proteDesktop,
        mobile: proteMobile,
    },
    {
        id: 'carla',
        nombre: 'Carla Manrique',
        categoria: 'Web',
        detalle: 'Web desde cero',
        descripcion: 'Diseño y desarrollo web desde cero para profesional independiente.',
        // url: null,
        destacado: false,
        color: 'violet',
        num: '03',
        desktop: carlaDesktop,
        mobile: carlaMobile,
    },
]

const colorMap = {
    fuchsia: {
        pill:      'border-fuchsia-500 bg-fuchsia-500/10 text-fuchsia-300',
        pillInact: 'border-white/8 text-gray-500 hover:border-fuchsia-800/50 hover:text-gray-300',
        glow:      '217,70,239',
        accent:    '#d946ef',
        btn:       'bg-fuchsia-600 hover:bg-fuchsia-500',
        shadow:    'rgba(217,70,239,0.35)',
        line:      'from-fuchsia-500 to-transparent',
    },
    purple: {
        pill:      'border-purple-500 bg-purple-500/10 text-purple-300',
        pillInact: 'border-white/8 text-gray-500 hover:border-purple-800/50 hover:text-gray-300',
        glow:      '168,85,247',
        accent:    '#a855f7',
        btn:       'bg-purple-600 hover:bg-purple-500',
        shadow:    'rgba(168,85,247,0.35)',
        line:      'from-purple-500 to-transparent',
    },
    violet: {
        pill:      'border-violet-500 bg-violet-500/10 text-violet-300',
        pillInact: 'border-white/8 text-gray-500 hover:border-violet-800/50 hover:text-gray-300',
        glow:      '139,92,246',
        accent:    '#8b5cf6',
        btn:       'bg-violet-600 hover:bg-violet-500',
        shadow:    'rgba(139,92,246,0.35)',
        line:      'from-violet-500 to-transparent',
    },
}

export default function Portafolio() {
    const [activo, setActivo] = useState(proyectos[0].id)
    const proyecto = proyectos.find(p => p.id === activo)
    const c = colorMap[proyecto.color]

    // Precargar todas las imágenes para evitar layout shift al cambiar proyecto
    useEffect(() => {
        proyectos.forEach(p => {
            const d = new window.Image(); d.src = p.desktop
            const m = new window.Image(); m.src = p.mobile
        })
    }, [])

    return (
        <section id="portafolio" className="bg-black py-24 px-6 overflow-hidden relative">

            {/* Ambient background glows */}
            <div
                className="absolute pointer-events-none rounded-full blur-[160px] transition-all duration-700"
                style={{
                    width: 600, height: 600,
                    top: '20%', left: '50%', transform: 'translateX(-50%)',
                    background: `rgba(${c.glow},0.07)`,
                }}
                aria-hidden="true"
            />

            {/* ── HEADER ── */}
            <AnimatedSection>
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <span className="text-purple-500 text-xs tracking-[0.5em] uppercase mb-4 block font-medium">
                                Nuestro trabajo
                            </span>
                            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                Proyectos que{' '}
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400"
                                >
                                    hablan por sí solos.
                                </span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-base max-w-xs leading-relaxed md:text-right">
                            Cada proyecto es una historia de confianza, trabajo y resultados reales.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto">

                {/* ── TABS ── */}
                <AnimatedSection>
                    <div className="flex flex-wrap gap-2 mb-16" role="tablist" aria-label="Proyectos">
                        {proyectos.map((p) => {
                            const cc = colorMap[p.color]
                            const isActive = p.id === activo
                            return (
                                <button
                                    key={p.id}
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => setActivo(p.id)}
                                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                                        isActive ? cc.pill : cc.pillInact
                                    }`}
                                >
                                    {p.destacado && (
                                        <span className="mr-1.5 text-yellow-400/60 text-xs">✦</span>
                                    )}
                                    {p.nombre}
                                    {isActive && (
                                        <motion.div
                                            layoutId="pill-bg"
                                            className="absolute inset-0 rounded-full -z-10"
                                            style={{ background: `rgba(${cc.glow},0.08)` }}
                                            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                                        />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </AnimatedSection>

                {/* ── MAIN CONTENT ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activo}
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        {/* ── DESKTOP SCENE ── */}
                        <div className="hidden md:block relative">

                            {/* Glow spot */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: `radial-gradient(ellipse 60% 40% at 50% 60%, rgba(${c.glow},0.12) 0%, transparent 70%)`,
                                }}
                            />

                            {/* Composición premium: Mac + iPhone solapado encima */}
                            <div className="relative" style={{ paddingBottom: 80 }}>

                                {/* Desktop mockup */}
                                <motion.div
                                    className="relative z-10"
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.05 }}
                                    style={{
                                        filter: `drop-shadow(0 32px 64px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(${c.glow},0.12))`,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        maxWidth: 820,
                                    aspectRatio: '16/9',
                                    }}
                                >
                                    <img
                                        src={proyecto.desktop}
                                        alt={`${proyecto.nombre} — vista desktop`}
                                        className="w-full h-auto block rounded-lg"
                                        style={{ aspectRatio: '16/9' }}
                                        draggable={false}
                                    />
                                </motion.div>

                                {/* iPhone — pegado encima de la Mac, esquina inferior izquierda */}
                                <motion.div
                                    className="absolute z-20"
                                    initial={{ opacity: 0, x: -20, y: 20 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                    style={{
                                        bottom: 0,
                                        left: '8%',
                                        width: 260,
                                        filter: `drop-shadow(0 28px 56px rgba(0,0,0,0.85)) drop-shadow(0 0 30px rgba(${c.glow},0.25))`,
                                    }}
                                >
                                    <img
                                        src={proyecto.mobile}
                                        alt={`${proyecto.nombre} — vista mobile`}
                                        className="w-full h-auto block"
                                        draggable={false}
                                    />
                                </motion.div>

                            </div>
                        </div>

                        {/* ── MOBILE SCENE: solo mobile mockup centrado ── */}
                        <div className="flex md:hidden justify-center pb-6">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    width: 320,
                                    filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.7)) drop-shadow(0 0 20px rgba(${c.glow},0.2))`,
                                }}
                            >
                                <img
                                    src={proyecto.mobile}
                                    alt={`${proyecto.nombre} — vista mobile`}
                                    className="w-full h-auto block"
                                    draggable={false}
                                />
                            </motion.div>
                        </div>

                        {/* ── INFO DEL PROYECTO ── */}
                        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div className="flex items-start gap-5">
                                {/* Número */}
                                <span
                                    className="text-5xl font-bold leading-none select-none mt-1 flex-shrink-0"
                                    style={{ color: `rgba(${c.glow},0.15)` }}
                                >
                                    {proyecto.num}
                                </span>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        {proyecto.destacado && <span className="text-yellow-400/60 text-xs">✦</span>}
                                        <span className="text-gray-500 text-xs uppercase tracking-widest">{proyecto.detalle}</span>
                                    </div>
                                    <h3 className="text-white font-bold text-2xl leading-tight">{proyecto.nombre}</h3>
                                    <p className="text-gray-500 text-sm mt-1.5 max-w-md leading-relaxed">{proyecto.descripcion}</p>
                                </div>
                            </div>

                            {/* {proyecto.url ? (
                                <a
                                    href={proyecto.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Ver sitio web de ${proyecto.nombre}`}
                                    className={`flex-shrink-0 inline-flex items-center gap-2 text-white text-sm px-7 py-3 rounded-full font-medium transition-all duration-300 ${c.btn}`}
                                    style={{ boxShadow: `0 0 28px ${c.shadow}` }}
                                >
                                    Ver sitio
                                    <span className="text-base leading-none">→</span>
                                </a>
                            ) : (
                                <span className="text-gray-600 text-sm italic flex-shrink-0 px-7 py-3">
                                    Próximamente
                                </span>
                            )} */}
                        </div>

                        {/* Línea decorativa inferior */}
                        <div className="mt-10 h-px w-full" style={{ background: `linear-gradient(to right, rgba(${c.glow},0.3), transparent)` }} />

                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    )
}