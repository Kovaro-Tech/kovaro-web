function Servicios() {
    return (
        <section section id="servicios" className="bg-black py-24 px-6">

            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
                <p className="text-gray-400 text-lg">Todo lo que necesitas para crecer en el mundo digital</p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

                <div className="border border-purple-900/40 bg-white/5 rounded-2xl p-8 hover:border-purple-500/60 transition-colors">
                    <div className="text-4xl mb-4">🌐</div>
                    <h3 className="text-white text-2xl font-bold mb-3">Desarrollo Web</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Páginas web profesionales, rápidas y responsivas. Diseñadas a medida para reflejar tu marca y convertir visitantes en clientes.
                    </p>
                </div>

                <div className="border border-purple-900/40 bg-white/5 rounded-2xl p-8 hover:border-purple-500/60 transition-colors">
                    <div className="text-4xl mb-4">📣</div>
                    <h3 className="text-white text-2xl font-bold mb-3">Marketing Digital</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Estrategias de marketing que generan resultados reales. Gestión de redes sociales, campañas y posicionamiento de marca.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Servicios