import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Section, { SectionHeader } from '../components/Section'
import Reveal from '../components/Reveal'
import { proceso } from '../lib/site'

function Proceso() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  })
  const avance = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })
  const escala = useTransform(avance, [0, 1], [0, 1])

  return (
    <Section id="proceso">
      <div className="container-k">
        <SectionHeader
          num="04"
          eyebrow="Proceso"
          title="Cuatro etapas. Sin zonas grises."
        />

        <div ref={ref} className="relative">
          {/* Riel de avance — horizontal en desktop */}
          <div
            className="absolute inset-x-0 top-0 hidden h-px bg-line md:block"
            aria-hidden="true"
          >
            <motion.div
              className="h-full origin-left bg-accent"
              style={{ scaleX: escala }}
            />
          </div>

          {/* Riel de avance — vertical en mobile */}
          <div
            className="absolute bottom-0 left-0 top-0 w-px bg-line md:hidden"
            aria-hidden="true"
          >
            <motion.div
              className="h-full w-full origin-top bg-accent"
              style={{ scaleY: escala }}
            />
          </div>

          <ol className="grid gap-x-10 gap-y-8 md:grid-cols-4">
            {proceso.map((paso, indice) => (
              <Reveal key={paso.num} delay={indice * 0.07} as="li">
                <div className="relative pl-7 pt-6 md:pl-0 md:pr-6">
                  {/* Marca sobre el riel */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-6 h-1.5 w-1.5 -translate-x-[3px] rounded-full bg-accent md:left-0 md:top-0 md:-translate-y-[3px] md:translate-x-0"
                  />

                  <span className="label-mono text-faint">{paso.num}</span>
                  <h3 className="text-subheading mt-4">{paso.titulo}</h3>
                  <p className="text-body mt-2.5 text-muted text-pretty">
                    {paso.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

export default Proceso
