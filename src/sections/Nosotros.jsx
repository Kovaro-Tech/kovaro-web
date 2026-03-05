import AnimatedSection from '../components/AnimatedSection'

const equipo = [
    {
        nombre: "Melissa Celi",
        rol: "Marketing Digital",
        frase: "Tu marca merece ser recordada",
        experiencia: "Especialista en estrategias digitales que posicionan marcas y generan resultados reales en redes sociales y campañas.",
        anos: "2+",
        linkedin: "https://www.linkedin.com/in/gabriela-melissa-celi-993a08232/",
        silueta: "https://api.dicebear.com/7.x/shapes/svg?seed=Melissa",
        alineacion: 'left',
        genero: 'mujer'
    },
    {
        nombre: "Sebastián González",
        rol: "Desarrollo Web",
        frase: "Código que trasciende",
        experiencia: "Especialista en crear experiencias web modernas, rápidas y a medida que reflejan la identidad de cada cliente.",
        anos: "3+",
        linkedin: "https://www.linkedin.com/in/sebastian-gonzalez-088174238/",
        silueta: "https://api.dicebear.com/7.x/shapes/svg?seed=Sebastian",
        alineacion: 'right',
        genero: 'hombre'
    },
]

const SiluetaHombre = () => (
    <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <ellipse cx="100" cy="70" rx="45" ry="50" fill="rgba(120,60,180,0.15)" />
        <rect x="55" y="115" width="90" height="130" rx="10" fill="rgba(120,60,180,0.12)" />
        <rect x="20" y="120" width="38" height="100" rx="10" fill="rgba(120,60,180,0.1)" />
        <rect x="142" y="120" width="38" height="100" rx="10" fill="rgba(120,60,180,0.1)" />
        <rect x="60" y="240" width="35" height="130" rx="10" fill="rgba(120,60,180,0.1)" />
        <rect x="105" y="240" width="35" height="130" rx="10" fill="rgba(120,60,180,0.1)" />
    </svg>
)

const SiluetaMujer = () => (
    <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <ellipse cx="100" cy="65" rx="42" ry="48" fill="rgba(180,60,220,0.15)" />
        <path d="M55 120 Q40 180 50 245 L150 245 Q160 180 145 120 Q125 105 100 108 Q75 105 55 120Z" fill="rgba(180,60,220,0.12)" />
        <rect x="22" y="125" width="35" height="95" rx="12" fill="rgba(180,60,220,0.1)" />
        <rect x="143" y="125" width="35" height="95" rx="12" fill="rgba(180,60,220,0.1)" />
        <rect x="58" y="242" width="32" height="130" rx="10" fill="rgba(180,60,220,0.1)" />
        <rect x="110" y="242" width="32" height="130" rx="10" fill="rgba(180,60,220,0.1)" />
    </svg>
)

function Nosotros() {
    return (
        <section id="nosotros" className="bg-black py-24 px-6">

            <AnimatedSection>
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-bold text-white mb-4">Quiénes somos</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Kovaro es una agencia digital formada por dos especialistas con un objetivo claro: llevar tu negocio al siguiente nivel.
                    </p>
                </div>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto flex flex-col gap-8">
                {equipo.map((persona) => (
                    <AnimatedSection key={persona.nombre}>
                        <div className={`flex ${persona.alineacion === 'right' ? 'ml-auto flex-row-reverse' : ''} w-full md:w-4/5 border border-purple-900/40 bg-white/5 rounded-3xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 h-[500px]`}
                            style={{ boxShadow: '0 0 40px rgba(162,21,239,0.07)' }}
                        >
                            <div className="relative w-48 flex-shrink-0 overflow-hidden flex items-end justify-center">
                                <div className="absolute inset-0 opacity-60">
                                    {persona.genero === 'mujer' ? <SiluetaMujer /> : <SiluetaHombre />}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
                            </div>

                            <div className="flex flex-col justify-center px-10 py-8 flex-1">
                                <p className="text-purple-400 text-lg font-medium italic mb-3">"{persona.frase}"</p>
                                <h3 className="text-white font-bold text-3xl">{persona.nombre}</h3>
                                <span className="text-gray-500 text-sm font-medium mb-4">{persona.rol}</span>
                                <p className="text-gray-400 text-sm leading-relaxed">{persona.experiencia}</p>

                                <div className="flex items-center gap-8 mt-6">
                                    <div>
                                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-400">{persona.anos}</span>
                                        <p className="text-gray-500 text-xs mt-1">años de experiencia</p>
                                    </div>
                                    <a
                                        href={persona.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-6 py-2 rounded-full transition-colors"
                                    >
                                        Ver LinkedIn
                                    </a>
                                </div>
                            </div>

                        </div>
                    </AnimatedSection>
                ))}
            </div>

        </section>
    )
}

export default Nosotros