function Hero() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Llevamos tu presencia<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-400">
          digital a la vanguardia
        </span>
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        Diseño web profesional y marketing digital para negocios que quieren destacar.
      </p>

      <div className="flex gap-4">
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
          Ver servicios
        </button>
        <button className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-8 py-3 rounded-full text-sm font-medium transition-colors">
          Hablemos
        </button>
      </div>

    </section>
  )
}

export default Hero