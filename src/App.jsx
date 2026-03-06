import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Nosotros from './sections/Nosotros'
import Servicios from './sections/Servicios'
import Proceso from './sections/Proceso'
import Portafolio from './sections/Portafolio'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'

function App() {
  return (
    <main>
      <div className="bg-black">
        <Navbar />
        <Hero />
        <Servicios />
        <Nosotros />
        <Proceso />
        <Portafolio />
        <Contacto />
        <Footer />
      </div>
    </main>
  )
}

export default App