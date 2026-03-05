import AnimatedSection from '../components/AnimatedSection'

function Contacto() {
    return (
        <section id="contacto" className="bg-black py-24 px-6">
            <div className="max-w-2xl mx-auto text-center">

                <AnimatedSection>
                    <h2 className="text-4xl font-bold text-white mb-4">¿Listo para empezar?</h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <AnimatedSection>
                        <div className="border border-purple-900/40 bg-white/5 rounded-2xl p-6 flex flex-col items-center gap-3">
                            <span className="text-3xl">💬</span>
                            <span className="text-white font-medium">WhatsApp</span>
                            <span className="text-gray-400 text-sm">Respuesta inmediata</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="border border-purple-900/40 bg-white/5 rounded-2xl p-6 flex flex-col items-center gap-3">
                            <span className="text-3xl">✉️</span>
                            <span className="text-white font-medium">Email</span>
                            <span className="text-gray-400 text-sm">hola@kovaro.com</span>
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection>
                    <button className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-full font-medium transition-colors">
                        Solicitar proforma
                    </button>
                </AnimatedSection>

            </div>
        </section>
    )
}

export default Contacto