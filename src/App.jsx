import Navbar from './components/Navbar'
import GridRails from './components/GridRails'
import Hero from './sections/Hero'
import Servicios from './sections/Servicios'
import Portafolio from './sections/Portafolio'
import Manifiesto from './sections/Manifiesto'
import Nosotros from './sections/Nosotros'
import Proceso from './sections/Proceso'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'

/**
 * Siete momentos, no diez. El trabajo va antes del manifiesto:
 * primero se ve lo que hacemos, después por qué lo hacemos así.
 */
function App() {
  return (
    <>
      <GridRails />
      <Navbar />
      <main id="contenido" className="relative z-10">
        <Hero />
        <Servicios />
        <Portafolio />
        <Manifiesto />
        <Nosotros />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
