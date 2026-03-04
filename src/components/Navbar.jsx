function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-purple-900/30 px-8 py-4 flex items-center justify-between z-50">
      
      <span className="text-white font-bold text-xl tracking-widest">KOVARO</span>

      <ul className="hidden md:flex gap-8 text-gray-400 text-sm">
        <li className="hover:text-white cursor-pointer transition-colors">Servicios</li>
        <li className="hover:text-white cursor-pointer transition-colors">Proceso</li>
        <li className="hover:text-white cursor-pointer transition-colors">Portafolio</li>
        <li className="hover:text-white cursor-pointer transition-colors">Contacto</li>
      </ul>

      <button className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-5 py-2 rounded-full transition-colors">
        Hablemos
      </button>

    </nav>
  )
}

export default Navbar