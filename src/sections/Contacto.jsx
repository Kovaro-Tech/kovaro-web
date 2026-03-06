import AnimatedSection from '../components/AnimatedSection'

const WHATSAPP_NUMBER = '593958759328'
const WHATSAPP_MESSAGE = 'Hola! Me interesa conocer más sobre los servicios de Kovaro.'
const EMAIL = 'contact@kovarotech.com'
const INSTAGRAM = 'https://www.instagram.com/kovarotech/'
const LINKEDIN = 'https://www.linkedin.com/in/kovaro-tech-b1887a3b5/'

const redes = [
    {
        nombre: 'Instagram',
        url: INSTAGRAM,
        color: 'hover:border-pink-500/60 hover:text-pink-400',
        iconColor: '#e1306c',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        )
    },
    {
        nombre: 'LinkedIn',
        url: LINKEDIN,
        color: 'hover:border-blue-500/60 hover:text-blue-400',
        iconColor: '#0077b5',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    },
    {
        nombre: 'Email',
        url: `mailto:${EMAIL}`,
        color: 'hover:border-purple-500/60 hover:text-purple-400',
        iconColor: '#a855f7',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        )
    },
]

function Contacto() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <section id="contacto" className="bg-black py-24 px-6 overflow-hidden relative">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-700/8 blur-[140px] pointer-events-none rounded-full" aria-hidden="true" />

            <div className="max-w-3xl mx-auto text-center relative z-10">

                <AnimatedSection>
                    <span className="text-purple-500 text-xs tracking-[0.5em] uppercase mb-4 block font-medium">
                        Contacto
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        ¿Listo para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                            dar el salto?
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed mb-12">
                        Cuéntanos tu proyecto y te respondemos en menos de 24 horas. Sin compromiso.
                    </p>
                </AnimatedSection>

                {/* WhatsApp CTA */}
                <AnimatedSection>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Contactar por WhatsApp"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #7c3aed, #d946ef)',
                            boxShadow: '0 0 40px rgba(168,85,247,0.4)'
                        }}
                    >
                        {/* WhatsApp icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Hablemos por WhatsApp
                    </a>
                </AnimatedSection>

                {/* Divider */}
                <AnimatedSection>
                    <div className="flex items-center gap-4 my-10 max-w-xs mx-auto">
                        <div className="flex-1 h-px bg-purple-900/40" />
                        <span className="text-gray-600 text-xs uppercase tracking-widest">o encuéntranos en</span>
                        <div className="flex-1 h-px bg-purple-900/40" />
                    </div>
                </AnimatedSection>

                {/* Redes sociales */}
                <AnimatedSection>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {redes.map((red) => (
                            <a
                                key={red.nombre}
                                href={red.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Visitar ${red.nombre} de Kovaro`}
                                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border border-purple-900/40 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 ${red.color}`}
                            >
                                {red.icon}
                                <span className="text-sm font-medium">{red.nombre}</span>
                            </a>
                        ))}
                    </div>
                </AnimatedSection>
                <br />
                <br />

            </div>
        </section>
    )
}

export default Contacto