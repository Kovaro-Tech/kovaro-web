import AnimatedSection from '../components/AnimatedSection'

const pasos = [
    { numero: "01", titulo: "Consulta", descripcion: "Nos reunimos para entender tu negocio, tus objetivos y lo que necesitas." },
    { numero: "02", titulo: "Propuesta", descripcion: "Preparamos una proforma detallada con el alcance, tiempos y precio." },
    { numero: "03", titulo: "Desarrollo", descripcion: "Manos a la obra. Te mantenemos informado en cada etapa del proceso." },
    { numero: "04", titulo: "Entrega", descripcion: "Lanzamos tu proyecto y te acompañamos en los primeros pasos." },
]

function Proceso() {
    return (
        <section id="proceso" className="bg-black py-24 px-6">

            <AnimatedSection>
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Cómo trabajamos</h2>
                    <p className="text-gray-400 text-lg">Un proceso claro y transparente de principio a fin</p>
                </div>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
                {pasos.map((paso) => (
                    <AnimatedSection key={paso.numero}>
                        <div className="text-center">
                            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-400">
                                {paso.numero}
                            </span>
                            <h3 className="text-white font-bold text-xl mt-3 mb-2">{paso.titulo}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{paso.descripcion}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

        </section>
    )
}

export default Proceso