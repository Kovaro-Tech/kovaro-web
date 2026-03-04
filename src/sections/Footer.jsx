function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/30 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <span className="text-white font-bold text-xl tracking-widest">KOVARO</span>

        <p className="text-gray-500 text-sm">
          © 2026 Kovaro. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 text-gray-400 text-sm">
          <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          <span className="hover:text-white cursor-pointer transition-colors">WhatsApp</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer