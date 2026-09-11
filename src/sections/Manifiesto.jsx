import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Reveal from '../components/Reveal'

const disciplinas = ['DESIGN', 'BUILD', 'POSITION', 'GROW']

function Manifiesto() {
  const ref = useRef(null)
  const [indice, setIndice] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (valor) => {
    // El recorrido útil está en el centro del scroll de la sección.
    const t = (valor - 0.25) / 0.5
    const siguiente = Math.min(
      disciplinas.length - 1,
      Math.max(0, Math.floor(t * disciplinas.length)),
    )
    setIndice((actual) => (actual === siguiente ? actual : siguiente))
  })

  return (
    <section
      ref={ref}
      aria-label="Manifiesto"
      className="relative flex min-h-[62svh] items-center py-24 md:py-32"
    >
      <div className="rule-fade absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="container-k w-full">
        <Reveal>
          <p className="label-mono mb-12 text-accent">K/</p>
        </Reveal>

        <div className="space-y-8 md:space-y-10">
          <Reveal>
            <p className="text-display max-w-[16ch] text-balance">
              Web sin estrategia
              <br />
              <span className="text-faint">es solo diseño.</span>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-display max-w-[18ch] text-balance md:ml-auto md:text-right">
              Estrategia sin ejecución
              <br />
              <span className="text-faint">es solo una idea.</span>
            </p>
          </Reveal>
        </div>

        <div className="rule-fade my-12 md:my-16" aria-hidden="true" />

        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-7">
            <p className="text-subheading text-pretty">
              Por eso no separamos diseño, tecnología y crecimiento.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <ul
              className="label-mono flex flex-wrap justify-start gap-x-6 gap-y-3 md:justify-end"
              aria-label="Disciplinas"
            >
              {disciplinas.map((palabra, posicion) => (
                <li
                  key={palabra}
                  className={`transition-colors duration-500 ${
                    posicion === indice ? 'text-bone' : 'text-white/15'
                  }`}
                >
                  {palabra}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Manifiesto
