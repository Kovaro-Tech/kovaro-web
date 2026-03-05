import logo from '../assets/images/logos/logo.png'

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-purple-900/30 px-8 py-2 flex items-center justify-between z-50">
      
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => scrollTo('hero')}>
        <img src={logo} alt="Kovaro" className="h-16 w-auto object-contain" />
        <span className="text-white font-bold text-xl tracking-[0.3em] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          KOVARO
        </span>
      </div>

      <ul className="hidden md:flex gap-8 text-gray-400 text-sm absolute left-1/2 -translate-x-1/2">
        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('servicios')}>Servicios</li>
        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('nosotros')}>Nosotros</li>
        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('proceso')}>Proceso</li>
        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('portafolio')}>Portafolio</li>
        <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('contacto')}>Contacto</li>
      </ul>

      <button
        onClick={() => scrollTo('contacto')}
        className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-5 py-2 rounded-full transition-colors"
      >
        Hablemos
      </button>

    </nav>
  )
}

export default Navbar