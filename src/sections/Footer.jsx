import Reveal from '../components/Reveal'
import { Arrow } from '../components/Button'
import {
  EMAIL,
  INSTAGRAM,
  LINKEDIN,
  LOCATION,
  navLinks,
  whatsappUrl,
} from '../lib/site'

const redes = [
  { label: 'WhatsApp', url: whatsappUrl },
  { label: 'Instagram', url: INSTAGRAM },
  { label: 'LinkedIn', url: LINKEDIN },
]

function Columna({ titulo, children }) {
  return (
    <div>
      <p className="label-mono mb-6 text-faint">{titulo}</p>
      {children}
    </div>
  )
}

function Footer() {
  const irA = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden pt-24">
      <div className="rule-fade absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="container-k">
        {/* Tres columnas: la de "Capacidades" repetía la sección 01 */}
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <Columna titulo="Kovaro">
            <p className="text-body max-w-[26ch] text-muted text-pretty">
              Estudio digital. Diseño, tecnología y crecimiento.
            </p>
            <p className="label-mono mt-6 text-faint">{LOCATION}</p>
          </Columna>

          <Columna titulo="Navegación">
            <ul className="space-y-3">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => irA(event, id)}
                    className="text-body text-muted transition-colors hover:text-bone"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={(event) => irA(event, 'contacto')}
                  className="text-body text-muted transition-colors hover:text-bone"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </Columna>

          <Columna titulo="Contacto">
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-body text-muted transition-colors hover:text-bone"
                >
                  {EMAIL}
                </a>
              </li>
              {redes.map((red) => (
                <li key={red.label}>
                  <a
                    href={red.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-body text-muted transition-colors hover:text-bone"
                  >
                    {red.label}
                    <Arrow direction="right" />
                  </a>
                </li>
              ))}
            </ul>
          </Columna>
        </div>

        {/* Wordmark */}
        <Reveal className="mt-24 md:mt-32">
          <p
            className="select-none text-center font-medium leading-[0.8] tracking-[-0.055em]"
            style={{
              fontSize: 'clamp(4rem, 17.8vw, 15rem)',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.22), rgba(255,255,255,0.045))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            aria-hidden="true"
          >
            KOVARO
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-center sm:flex-row sm:text-left">
          <p className="label-mono text-faint">
            © {new Date().getFullYear()} Kovaro
          </p>
          <p className="label-mono text-faint">
            Technology · Design · Growth
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
