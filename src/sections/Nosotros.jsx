const equipo = [
    {
        nombre: "Sebastián González",
        rol: "Desarrollo Web",
        descripcion: "Especialista en crear experiencias web modernas, rápidas y a medida para cada cliente.",
        foto: "https://api.dicebear.com/7.x/initials/svg?seed=SG&backgroundColor=7c3aed&textColor=ffffff"
    },
    {
        nombre: "Melissa Celi",
        rol: "Marketing Digital",
        descripcion: "Experta en estrategias digitales que posicionan marcas y generan resultados reales.",
        foto: "https://api.dicebear.com/7.x/initials/svg?seed=MC&backgroundColor=a21ef0&textColor=ffffff"
    }
]

function Nosotros() {
    return (
        <section section id="nosotros" className="bg-black py-24 px-6">

            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Quiénes somos</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Kovaro es una agencia digital formada por dos especialistas con un objetivo claro: llevar tu negocio al siguiente nivel.
                </p>
            </div>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                {equipo.map((persona) => (
                    <div key={persona.nombre} className="border border-purple-900/40 bg-white/5 rounded-2xl p-8 text-center hover:border-purple-500/60 transition-colors">
                        <img
                            src={persona.foto}
                            alt={persona.nombre}
                            className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-white font-bold text-xl mb-1">{persona.nombre}</h3>
                        <span className="text-purple-400 text-sm font-medium">{persona.rol}</span>
                        <p className="text-gray-400 text-sm leading-relaxed mt-3">{persona.descripcion}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Nosotros