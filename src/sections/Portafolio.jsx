import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section, { SectionHeader } from '../components/Section'
import Reveal from '../components/Reveal'
import { BrowserFrame, PhoneFrame } from '../components/Frames'
import { Arrow } from '../components/Button'
import { proyectos } from '../lib/site'

const bloquesCaso = [
  { clave: 'challenge', label: 'El problema' },
  { clave: 'approach', label: 'El enfoque' },
  { clave: 'solution', label: 'Lo que construimos' },
  { clave: 'result', label: 'El resultado' },
]

const transicion = { duration: 0.35, ease: [0.22, 1, 0.36, 1] }

function Portafolio() {
  const [activo, setActivo] = useState(0)
  const [abierto, setAbierto] = useState(false)
  const pistaRef = useRef(null)
  const proyecto = proyectos[activo]

  // El índice lo manda la posición real de la pista: así el swipe táctil y
  // el clic en el selector no pueden desincronizarse.
  useEffect(() => {
    const pista = pistaRef.current
    if (!pista) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivo(Number(entry.target.dataset.indice))
          }
        })
      },
      { root: pista, threshold: 0.6 },
    )

    Array.from(pista.children).forEach((slide) => observer.observe(slide))
    return () => observer.disconnect()
  }, [])

  const seleccionar = (indice) => {
    setActivo(indice)
    // Movemos solo la pista: scrollIntoView arrastraría también la página.
    const pista = pistaRef.current
    const slide = pista?.children[indice]
    if (pista && slide) {
      pista.scrollTo({
        left: slide.offsetLeft - pista.offsetLeft,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Section id="portafolio">
      <div className="container-k">
        <SectionHeader
          num="02"
          eyebrow="Trabajo"
          title="Casos seleccionados."
          lead="Tres proyectos reales. El criterio detrás de cada uno, si quieres verlo."
          align="split"
        />

        {/* grid-cols-1 explícito: sin él, la columna implícita se dimensiona a
            max-content y la pista arrastra el ancho de los tres slides. */}
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
          {/* Pista de pantallas */}
          <Reveal className="min-w-0 lg:col-span-8">
            <div
              ref={pistaRef}
              className="pista-snap gap-5"
              aria-label="Proyectos"
            >
              {proyectos.map((item, indice) => (
                <div
                  key={item.id}
                  data-indice={indice}
                  className="w-full shrink-0 snap-start"
                >
                  <div className="flex items-end gap-3 sm:gap-4">
                    <BrowserFrame
                      src={item.desktop}
                      alt={`${item.nombre} — vista de escritorio`}
                      label={item.nombre}
                      className="min-w-0 flex-1"
                    />
                    <PhoneFrame
                      src={item.mobile}
                      alt={`${item.nombre} — vista móvil`}
                      className="hidden w-[96px] shrink-0 sm:block lg:w-[112px]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="label-mono mt-5 text-faint lg:hidden">
              Desliza para ver más
            </p>
          </Reveal>

          {/* Ficha del proyecto activo + selector */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={proyecto.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={transicion}
              >
                <h3 className="text-heading">{proyecto.nombre}</h3>
                <p className="label-mono mt-3 text-faint">
                  {proyecto.industria}
                </p>
                <p className="label-mono mt-2 text-accent">
                  {proyecto.servicios.join(' · ')}
                </p>
                <p className="text-body mt-6 text-muted text-pretty">
                  {proyecto.resumen}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <button
                    type="button"
                    onClick={() => setAbierto((valor) => !valor)}
                    aria-expanded={abierto}
                    aria-controls="detalle-caso"
                    className="group inline-flex items-center gap-2.5 text-sm font-medium text-bone"
                  >
                    {abierto ? 'Ocultar caso' : 'Ver el caso'}
                    <span
                      className={`transition-transform duration-300 ${
                        abierto ? 'rotate-180' : ''
                      }`}
                    >
                      <Arrow direction="down" />
                    </span>
                  </button>

                  {proyecto.url && (
                    <a
                      href={proyecto.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-bone"
                    >
                      Ver proyecto
                      <Arrow direction="right" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Selector */}
            <ul className="mt-10 border-t border-line">
              {proyectos.map((item, indice) => {
                const seleccionado = indice === activo
                return (
                  <li key={item.id} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => seleccionar(indice)}
                      aria-current={seleccionado}
                      className="group flex w-full items-center gap-4 py-4 text-left"
                    >
                      <span
                        className={`label-mono transition-colors duration-300 ${
                          seleccionado ? 'text-accent' : 'text-faint'
                        }`}
                      >
                        {item.num}
                      </span>
                      <span
                        className={`flex-1 text-sm transition-colors duration-300 ${
                          seleccionado
                            ? 'text-bone'
                            : 'text-muted group-hover:text-bone'
                        }`}
                      >
                        {item.corto}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-px w-6 transition-colors duration-300 ${
                          seleccionado ? 'bg-accent' : 'bg-line'
                        }`}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Profundidad bajo demanda */}
        <AnimatePresence initial={false}>
          {abierto && (
            <motion.div
              id="detalle-caso"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <dl className="mt-14 grid gap-x-10 gap-y-9 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
                {bloquesCaso.map(({ clave, label }) => (
                  <div key={clave}>
                    <dt className="label-mono mb-3.5 text-faint">{label}</dt>
                    <dd className="text-body text-muted text-pretty">
                      {proyecto.caso[clave]}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}

export default Portafolio
