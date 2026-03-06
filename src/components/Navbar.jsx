import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/images/logos/logo.webp'

const links = ['servicios', 'nosotros', 'proceso', 'portafolio', 'contacto']


function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false)
    const [seccionActiva, setSeccionActiva] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setSeccionActiva(entry.target.id)
                })
            },
            { threshold: 0.2 }
        )
        links.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        setMenuAbierto(false)
    }

    return (
        <>
            <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-purple-900/30 px-8 py-2 flex items-center justify-between z-50">

                <div className="flex items-center gap-1 cursor-pointer" onClick={() => scrollTo('hero')}>
                    <img src={logo} alt="Kovaro" className="h-14 w-auto object-contain" />
                    <span className="text-white font-bold text-xl tracking-[0.3em] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        KOVARO
                    </span>
                </div>

                <ul className="hidden md:flex gap-8 text-sm absolute left-1/2 -translate-x-1/2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {links.map((id) => (
                        <li
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`cursor-pointer transition-all capitalize px-3 py-1 rounded-full ${seccionActiva === id
                                ? 'text-white bg-purple-600'
                                : 'text-gray-400 hover:text-white'
                                }`}            >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block">
                    <button onClick={() => scrollTo('contacto')} className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-5 py-2 rounded-full transition-colors">
                        Hablemos
                    </button>
                </div>

                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
                >
                    {menuAbierto ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </nav>

            <AnimatePresence>
                {menuAbierto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-10 md:hidden"
                    >
                        {links.map((id, index) => (
                            <motion.span
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollTo(id)}
                                className="text-white text-3xl font-bold capitalize cursor-pointer hover:text-purple-400 transition-colors"
                                style={{ fontFamily: 'Orbitron, sans-serif' }}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </motion.span>
                        ))}

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            onClick={() => scrollTo('contacto')}
                            className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-full font-medium transition-colors mt-4"
                            style={{ fontFamily: 'Orbitron, sans-serif' }}
                        >
                            Hablemos
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar