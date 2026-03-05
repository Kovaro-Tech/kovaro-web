import AnimatedSection from '../components/AnimatedSection'

const proyectos = [
    {
        nombre: "Protecompu",
        categoria: "Desarrollo Web",
        descripcion: "Rediseño completo del sitio web para empresa de infraestructura tecnológica en Ecuador.",
        color: "from-purple-600 to-fuchsia-500"
    },
    {
        nombre: "David Celi",
        categoria: "Desarrollo Web",
        descripcion: "Sitio web profesional para abogado corporativo con diseño elegante y moderno.",
        color: "from-fuchsia-600 to-purple-400"
    },
    {
        nombre: "Carla Enrique",
        categoria: "Desarrollo Web",
        descripcion: "Estrategia y gestión de presencia digital para profesional independiente.",
        color: "from-purple-500 to-pink-500"
    },
]

function Portafolio() {
    return (
        <section id="portafolio" className="bg-black py-24 px-6">

            <AnimatedSection>
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Portafolio</h2>
                    <p className="text-gray-400 text-lg">Algunos de los proyectos en los que hemos trabajado</p>
                </div>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                {proyectos.map((proyecto) => (
                    <AnimatedSection key={proyecto.nombre}>
                        <div className="border border-purple-900/40 bg-white/5 rounded-2xl overflow-hidden hover:border-purple-500/60 transition-colors group">
                            <div className={`h-40 bg-gradient-to-br ${proyecto.color} flex items-center justify-center`}>
                                <span className="text-white font-bold text-2xl">{proyecto.nombre}</span>
                            </div>
                            <div className="p-6">
                                <span className="text-purple-400 text-xs font-medium uppercase tracking-wider">{proyecto.categoria}</span>
                                <p className="text-gray-400 text-sm leading-relaxed mt-2">{proyecto.descripcion}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

        </section>
    )
}

export default Portafolio