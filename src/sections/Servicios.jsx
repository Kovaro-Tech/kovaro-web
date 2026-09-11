import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section, { SectionHeader } from '../components/Section'
import Reveal from '../components/Reveal'
import { capabilities, stack } from '../lib/site'

function Bloque({ cap, indice, verTodo }) {
  return (
    <Reveal delay={indice * 0.07}>
      <div className="group border-t border-line pt-7">
        <div className="label-mono flex items-center gap-3 text-faint">
          <span className="text-accent">{cap.num}</span>
          <span>{cap.key}</span>
        </div>

        <h3 className="text-heading mt-6">{cap.titulo}</h3>

        <p className="text-body mt-3 max-w-xs text-muted text-pretty">
          {cap.claim}
        </p>

        <ul className="mt-7 flex flex-wrap gap-x-2 gap-y-2.5">
          {cap.items.map((item) => (
            <li
              key={item}
              className="label-mono rounded-full border border-line px-3 py-1.5 text-muted"
            >
              {item}
            </li>
          ))}

          <AnimatePresence initial={false}>
            {verTodo &&
              cap.mas.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="label-mono rounded-full border border-line px-3 py-1.5 text-faint"
                >
                  {item}
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>
      </div>
    </Reveal>
  )
}

function Servicios() {
  const [verTodo, setVerTodo] = useState(false)
  const restantes = capabilities.reduce((total, cap) => total + cap.mas.length, 0)

  return (
    <Section id="servicios">
      <div className="container-k">
        <SectionHeader num="01" eyebrow="Capacidades" title="Qué hacemos." />

        <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
          {capabilities.map((cap, indice) => (
            <Bloque
              key={cap.id}
              cap={cap}
              indice={indice}
              verTodo={verTodo}
            />
          ))}
        </div>

        {/* Un solo control para la profundidad: nada de tres acordeones */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-7 border-t border-line pt-7">
            <button
              type="button"
              onClick={() => setVerTodo((valor) => !valor)}
              aria-expanded={verTodo}
              className="group inline-flex items-center gap-2.5 text-sm font-medium text-bone"
            >
              {verTodo ? 'Ver menos' : 'Ver todas las capacidades'}
              <span
                aria-hidden="true"
                className="label-mono text-accent transition-opacity duration-300"
              >
                {verTodo ? '—' : `+${restantes}`}
              </span>
            </button>

            {/* El stack como microcopy, no como sección */}
            <p className="label-mono text-faint">
              {stack.join(' · ')}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export default Servicios
