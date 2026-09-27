import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import { getPage } from './lib/seo'
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
 * primero se ve lo que hacemos, despuÃ©s por quÃ© lo hacemos asÃ­.
 */
function App({ path = '/' }) {
  const page = getPage(path)
  return (
    <>
      <GridRails />
      <Navbar />
      <main id="contenido" className="relative z-10">
        {page.kind === 'home' ? <>
        <Hero />
        <Servicios />
        <Portafolio />
        <Manifiesto />
        <Nosotros />
        <Proceso />
        <Contacto />
        </> : page.kind === 'legal' ? <Legal page={page} /> : <NotFound />}
      </main>
      <Footer />
    </>
  )
}

export default App
