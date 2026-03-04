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
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Proceso />
      <Portafolio />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App