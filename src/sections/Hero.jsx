import { useState, useEffect } from 'react'
import AnimatedSection from '../components/AnimatedSection'

const palabrasRotativas = [
    'la vanguardia',
    'más ventas',
    'el siguiente nivel',
    'la élite',
    'lo extraordinario',
    'pocisionamiento real',
]

const TEXTO_FIJO = 'Llevamos tu presencia digital a '
const VELOCIDAD_ESCRITURA = 55
const VELOCIDAD_BORRADO = 30
const PAUSA_TRAS_ESCRIBIR = 2000
const PAUSA_TRAS_BORRAR = 400

function Hero() {
    const [textoMostrado, setTextoMostrado] = useState('')
    const [indicePalabra, setIndicePalabra] = useState(0)
    const [fase, setFase] = useState('escribiendo') // 'escribiendo' | 'pausando' | 'borrando' | 'esperando'
    const [cursorVisible, setCursorVisible] = useState(true)

    // Parpadeo del cursor
    useEffect(() => {
        const intervalo = setInterval(() => setCursorVisible(v => !v), 530)
        return () => clearInterval(intervalo)
    }, [])

    // Lógica typewriter
    useEffect(() => {
        const palabraActual = palabrasRotativas[indicePalabra]

        if (fase === 'escribiendo') {
            if (textoMostrado.length < palabraActual.length) {
                const t = setTimeout(() => {
                    setTextoMostrado(palabraActual.slice(0, textoMostrado.length + 1))
                }, VELOCIDAD_ESCRITURA)
                return () => clearTimeout(t)
            } else {
                setFase('pausando')
            }
        }

        if (fase === 'pausando') {
            const t = setTimeout(() => setFase('borrando'), PAUSA_TRAS_ESCRIBIR)
            return () => clearTimeout(t)
        }

        if (fase === 'borrando') {
            if (textoMostrado.length > 0) {
                const t = setTimeout(() => {
                    setTextoMostrado(textoMostrado.slice(0, -1))
                }, VELOCIDAD_BORRADO)
                return () => clearTimeout(t)
            } else {
                setFase('esperando')
            }
        }

        if (fase === 'esperando') {
            const t = setTimeout(() => {
                setIndicePalabra((i) => (i + 1) % palabrasRotativas.length)
                setFase('escribiendo')
            }, PAUSA_TRAS_BORRAR)
            return () => clearTimeout(t)
        }
    }, [textoMostrado, fase, indicePalabra])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
            style={{
                background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(120,40,200,0.15) 0%, rgba(217,70,239,0.08) 40%, #000 70%)'
            }}
        >
            {/* Glow de fondo */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-700/10 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-fuchsia-700/8 blur-[120px] pointer-events-none rounded-full" />

            <AnimatedSection>
                <div className="max-w-4xl mx-auto">

                    {/* Badge superior */}
                    <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-4 py-1.5 mb-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-purple-300 text-xs tracking-widest uppercase font-medium" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            Agencia Digital
                        </span>
                    </div>

                    {/* Título principal */}
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        Llevamos tu presencia digital a
                    </h1>

                    {/* Línea con palabra animada */}
                    <div className="flex items-center justify-center mb-8 min-h-[1.2em]">
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400"
                            style={{ fontFamily: 'Orbitron, sans-serif' }}
                        >
                            {textoMostrado}
                            <span
                                className="inline-block w-[3px] md:w-[4px] h-[0.85em] ml-1 rounded-sm align-middle bg-gradient-to-b from-purple-400 to-fuchsia-400"
                                style={{ opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.1s' }}
                            />
                        </h1>
                    </div>

                    {/* Subtítulo */}
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Diseño web profesional y marketing digital para negocios que quieren destacar.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollTo('servicios')}
                            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                            style={{ boxShadow: '0 0 30px rgba(168,85,247,0.3)' }}
                        >
                            Ver servicios
                        </button>
                        <button
                            onClick={() => scrollTo('contacto')}
                            className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                        >
                            Hablemos
                        </button>
                    </div>

                </div>
            </AnimatedSection>
        </section>
    )
}

export default Hero