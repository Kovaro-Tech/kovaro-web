import AnimatedSection from '../components/AnimatedSection'

const pasos = [
    {
        numero: "01",
        titulo: "Consulta gratuita",
        descripcion: "Hablamos 30 minutos, sin compromiso. Entendemos tu negocio, tus metas y qué está frenando tu crecimiento digital.",
        icono: "◎",
        color: "purple"
    },
    {
        numero: "02",
        titulo: "Diagnóstico y estrategia",
        descripcion: "Analizamos tu presencia actual — web, redes, competencia — y definimos qué necesitas realmente: web, marketing o los dos.",
        icono: "◈",
        color: "fuchsia"
    },
    {
        numero: "03",
        titulo: "Propuesta a medida",
        descripcion: "En 48 horas recibes una propuesta clara: qué hacemos, cuánto tarda y cuánto cuesta. Sin letra pequeña.",
        icono: "◉",
        color: "purple"
    },
    {
        numero: "04",
        titulo: "Diseño y aprobación",
        descripcion: "Te mostramos cómo va a quedar antes de ejecutar — maquetas, contenido, estrategia visual. Tú apruebas, nosotros construimos.",
        icono: "⬡",
        color: "fuchsia"
    },
    {
        numero: "05",
        titulo: "Desarrollo y producción",
        descripcion: "Construimos tu web, activamos tus redes o lanzamos tu campaña. Te mantenemos informado en cada paso.",
        icono: "◆",
        color: "purple"
    },
    {
        numero: "06",
        titulo: "Lanzamiento",
        descripcion: "Tu proyecto sale al mundo con todo funcionando — web optimizada, redes activas, presencia consolidada.",
        icono: "◈",
        color: "fuchsia"
    },
    {
        numero: "07",
        titulo: "Seguimiento y crecimiento",
        descripcion: "Medimos resultados, ajustamos la estrategia y seguimos contigo. El lanzamiento es el inicio, no el final.",
        icono: "⬢",
        color: "purple"
    },
]

const colorMap = {
    purple: {
        border: 'rgba(168,85,247,0.5)',
        bg: 'rgba(168,85,247,0.07)',
        icon: '#a855f7',
        glow: 'rgba(168,85,247,0.3)',
        dot: '#a855f7',
        number: 'from-purple-400 to-violet-400',
    },
    fuchsia: {
        border: 'rgba(217,70,239,0.5)',
        bg: 'rgba(217,70,239,0.07)',
        icon: '#d946ef',
        glow: 'rgba(217,70,239,0.3)',
        dot: '#d946ef',
        number: 'from-fuchsia-400 to-pink-400',
    }
}

function PasoCard({ paso, index }) {
    const c = colorMap[paso.color]
    const isRight = index % 2 !== 0

    return (
        <div className={`relative flex flex-col md:flex-row items-center gap-0 md:gap-8 ${isRight ? 'md:flex-row-reverse' : ''}`}>

            {/* Línea vertical móvil */}
            {index < pasos.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-[2px] md:hidden"
                    style={{ background: `linear-gradient(to bottom, ${c.dot}, transparent)` }}
                />
            )}

            {/* Contenido card */}
            <AnimatedSection className="w-full md:w-5/12">
                <div
                    className="relative rounded-2xl p-6 border transition-all duration-300 ml-14 md:ml-0 hover:-translate-y-1"
                    style={{
                        borderColor: c.border,
                        background: c.bg,
                        boxShadow: `0 0 30px ${c.glow}20`
                    }}
                    role="listitem"
                    aria-label={`Paso ${paso.numero}: ${paso.titulo}`}
                >
                    {/* Número */}
                    <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${paso.color === 'purple' ? 'from-purple-400 to-violet-400' : 'from-fuchsia-400 to-pink-400'} block mb-2`}>
                        {paso.numero}
                    </span>
                    <div className="flex items-center gap-2 mb-3">
                        <span style={{ color: c.icon }} className="text-lg" aria-hidden="true">{paso.icono}</span>
                        <h3 className="text-white font-bold text-lg">{paso.titulo}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{paso.descripcion}</p>
                </div>
            </AnimatedSection>

            {/* Dot central — solo desktop */}
            <div className="hidden md:flex w-2/12 justify-center items-center relative z-10" aria-hidden="true">
                <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{
                        borderColor: c.dot,
                        background: '#050505',
                        boxShadow: `0 0 16px ${c.glow}`
                    }}
                >
                    <div className="w-2 h-2 rounded-full" style={{ background: c.dot }} />
                </div>
            </div>

            {/* Dot móvil */}
            <div
                className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center md:hidden z-10"
                style={{
                    borderColor: c.dot,
                    background: '#050505',
                    boxShadow: `0 0 12px ${c.glow}`
                }}
                aria-hidden="true"
            >
                <div className="w-2 h-2 rounded-full" style={{ background: c.dot }} />
            </div>

            {/* Espacio vacío lado opuesto — desktop */}
            <div className="hidden md:block w-5/12" />

        </div>
    )
}

function Proceso() {
    return (
        <section id="proceso" className="bg-black py-24 px-6 overflow-hidden relative">

            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-700/5 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-fuchsia-700/5 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />

            <AnimatedSection>
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <span className="text-purple-500 text-xs tracking-[0.5em] uppercase mb-4 block font-medium">
                        Cómo trabajamos
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Un proceso claro,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                            de principio a fin.
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                        Sin sorpresas, sin silencios. Sabés exactamente en qué etapa estás en todo momento.
                    </p>
                </div>
            </AnimatedSection>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative" role="list" aria-label="Pasos del proceso">

                {/* Línea central desktop */}
                <div
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
                    style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.6), rgba(217,70,239,0.6), rgba(168,85,247,0.2))' }}
                    aria-hidden="true"
                />

                <div className="flex flex-col gap-10 md:gap-12">
                    {pasos.map((paso, index) => (
                        <PasoCard key={paso.numero} paso={paso} index={index} />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Proceso