import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import sebastianImg from '../assets/images/team/sebastian.webp'
import melissaImg from '../assets/images/team/melissa.webp'

const equipo = [
    {
        nombre: "Melissa Celi",
        rol: "Marketing Digital",
        frase: "Tu marca merece ser recordada",
        experiencia: "Especialista en estrategias digitales que posicionan marcas y generan resultados reales en redes sociales y campañas.",
        anos: "2+",
        linkedin: "https://www.linkedin.com/in/gabriela-melissa-celi-993a08232/",
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
        alineacion: 'right',
        genero: 'hombre'
    },
]

const AvatarMelissa = () => (
    <img src={melissaImg} alt="Melissa Celi" className="h-full w-full object-cover object-top" />
)

const AvatarSebastian = () => (
    <img src={sebastianImg} alt="Sebastián González" className="h-full w-full object-cover object-top" />
)

function Nosotros() {
    return (
        <section id="nosotros" className="bg-black py-24 px-6">

            <AnimatedSection>
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <span className="text-purple-500 text-xs tracking-[0.5em] uppercase mb-4 block font-medium">
                        Quiénes somos
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Las personas detrás{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                            de Kovaro.
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                        Kovaro es una agencia digital formada por dos especialistas con un objetivo claro: llevar tu negocio al siguiente nivel.
                    </p>
                </div>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto flex flex-col gap-8">
                {equipo.map((persona) => (
                    <AnimatedSection key={persona.nombre}>
                        <div className={`flex flex-col md:flex-row ${persona.alineacion === 'right' ? 'md:ml-auto md:flex-row-reverse' : ''} w-full md:w-4/5 border border-purple-900/40 bg-white/5 rounded-3xl overflow-hidden hover:border-purple-500/60 transition-all duration-300`}
                            style={{ boxShadow: '0 0 40px rgba(162,21,239,0.07)' }}
                        >
                            {/* Avatar */}
                            <div className={`relative w-full h-80 md:w-52 md:h-auto flex-shrink-0 flex items-end justify-center overflow-hidden ${persona.genero === 'mujer' ? 'bg-gradient-to-b from-fuchsia-950/40 to-purple-950/60' : 'bg-gradient-to-b from-purple-950/40 to-violet-950/60'}`}>
                                <motion.div
                                    className="w-full h-full"
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: persona.genero === 'mujer' ? 0 : 0.8 }}
                                >
                                    {persona.genero === 'mujer' ? <AvatarMelissa /> : <AvatarSebastian />}
                                </motion.div>
                                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 blur-xl rounded-full ${persona.genero === 'mujer' ? 'bg-fuchsia-500/30' : 'bg-purple-500/30'}`} />
                            </div>

                            {/* Contenido */}
                            <div className="flex flex-col justify-center px-6 md:px-10 py-8 flex-1">
                                <p className={`text-base md:text-lg font-medium italic mb-3 ${persona.genero === 'mujer' ? 'text-fuchsia-400' : 'text-purple-400'}`}>"{persona.frase}"</p>
                                <h3 className="text-white font-bold text-2xl md:text-3xl">{persona.nombre}</h3>
                                <span className="text-gray-400 text-sm font-medium mb-4">{persona.rol}</span>
                                <p className="text-gray-400 text-sm leading-relaxed">{persona.experiencia}</p>

                                <div className="flex items-center gap-8 mt-6">
                                    <div>
                                        <span className={`text-3xl font-bold text-transparent bg-clip-text ${persona.genero === 'mujer' ? 'bg-gradient-to-r from-fuchsia-400 to-purple-400' : 'bg-gradient-to-r from-purple-500 to-fuchsia-400'}`}>
                                            {persona.anos}
                                        </span>
                                        <p className="text-gray-400 text-xs mt-1">años de experiencia</p>
                                    </div>
                                    <a
                                        href={persona.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`text-white text-sm px-6 py-2 rounded-full transition-colors ${persona.genero === 'mujer' ? 'bg-fuchsia-600 hover:bg-fuchsia-500' : 'bg-purple-600 hover:bg-purple-500'}`}
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