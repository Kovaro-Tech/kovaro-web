import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SignalField from '../components/SignalField'
import Button from '../components/Button'
import { whatsappUrl } from '../lib/site'

const lineas = [
  { palabra: 'Diseñamos.', tag: 'DESIGN' },
  { palabra: 'Construimos.', tag: 'ENGINEERING' },
  { palabra: 'Hacemos crecer.', tag: 'GROWTH' },
]

function Hero() {
  const reduce = useReducedMotion()
  const seccionRef = useRef(null)

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const irA = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={seccionRef}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28"
    >
      {/* Retícula reactiva al cursor — se desvanece hacia los bordes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <SignalField
          interactionRef={seccionRef}
          className="h-full w-full"
          style={{
            maskImage:
              'radial-gradient(ellipse 90% 80% at 55% 45%, #000 35%, transparent 85%)',
          }}
        />
      </div>

      {/* Halo de marca: uno solo, muy contenido */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(124,92,255,0.12) 0%, transparent 62%)',
        }}
      />

      <div className="container-k flex flex-1 flex-col justify-center py-16">
        <motion.p
          {...rise(0.05)}
          className="label-mono mb-10 flex items-center gap-3 text-faint"
        >
          <span className="text-accent">K/</span>
          <span className="h-px w-6 bg-line" aria-hidden="true" />
          <span>Estudio digital — Quito, Ecuador</span>
        </motion.p>

        <h1 className="text-display-xl max-w-[22ch]">
          {lineas.map(({ palabra, tag }, index) => (
            <motion.span
              key={palabra}
              {...rise(0.12 + index * 0.09)}
              className="flex items-center gap-8"
            >
              <span>{palabra}</span>
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 bg-line lg:block"
              />
              <span
                aria-hidden="true"
                className="label-mono hidden text-faint lg:block"
              >
                {tag}
              </span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          {...rise(0.42)}
          className="text-body-lg mt-10 max-w-xl text-muted text-pretty"
        >
          Diseño, ingeniería y estrategia para empresas que necesitan que lo
          digital produzca resultados, no solo presencia.
        </motion.p>

        <motion.div
          {...rise(0.5)}
          className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4"
        >
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            arrow="right"
          >
            Hablemos de tu proyecto
          </Button>
          <Button
            href="#portafolio"
            onClick={(event) => irA(event, 'portafolio')}
            variant="ghost"
            arrow="down"
            className="h-12 px-5"
          >
            Ver nuestro trabajo
          </Button>
        </motion.div>
      </div>

      {/* Riel inferior. Las capacidades ya están en los titulares:
          aquí solo queda la señal de que hay más abajo. */}
      <motion.div {...rise(0.62)} className="relative">
        <div className="rule-fade absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="container-k flex items-center justify-end py-5">
          <span className="label-mono text-faint">Scroll</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
