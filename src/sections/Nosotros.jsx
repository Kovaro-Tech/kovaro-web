import Section, { SectionHeader } from '../components/Section'
import Reveal from '../components/Reveal'
import ShadowPortrait from '../components/ShadowPortrait'
import { Arrow } from '../components/Button'
import { equipo, principios } from '../lib/site'

function Persona({ persona, indice, delay }) {
  return (
    <Reveal delay={delay}>
      <article className="group/persona">
        <div className="relative overflow-hidden rounded-xl border border-line">
          <div className="aspect-[4/5] w-full">
            <ShadowPortrait variant={indice} id={persona.id} />
          </div>

          <span className="label-mono pointer-events-none absolute left-4 top-4 text-white/40 transition-colors duration-700 group-hover/persona:text-white/75">
            {persona.marca}
          </span>
        </div>

        <div className="relative mt-6 h-px w-full bg-line">
          <span
            aria-hidden="true"
            className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/persona:scale-x-100"
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h4 className="text-subheading">{persona.nombre}</h4>
            <p className="label-mono mt-2 text-accent">{persona.rol}</p>
          </div>

          <a
            href={persona.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`LinkedIn de ${persona.nombre}`}
            className="group mt-1 inline-flex shrink-0 items-center gap-2 text-sm text-muted transition-colors hover:text-bone"
          >
            LinkedIn
            <Arrow direction="right" />
          </a>
        </div>

        <p className="text-body mt-3 max-w-xs text-muted text-pretty">
          {persona.linea}
        </p>
      </article>
    </Reveal>
  )
}

function Nosotros() {
  return (
    <Section id="nosotros">
      <div className="container-k">
        <SectionHeader
          num="03"
          eyebrow="About Kovaro"
          title="Tecnología y estrategia, trabajando como una sola disciplina."
        />

        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-12">
          {/* Qué es Kovaro — dos frases, no dos párrafos */}
          <Reveal className="lg:col-span-5">
            <p className="text-body-lg text-muted text-pretty">
              Combinamos ingeniería, diseño y crecimiento para construir
              experiencias digitales que resuelven problemas reales de negocio.
            </p>

            <ul className="mt-9 space-y-3">
              {principios.map((principio) => (
                <li
                  key={principio}
                  className="label-mono flex items-center gap-3 text-faint"
                >
                  <span aria-hidden="true" className="h-px w-4 bg-accent/60" />
                  {principio}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Las personas */}
          <div className="lg:col-span-7">
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {equipo.map((persona, indice) => (
                <Persona
                  key={persona.id}
                  persona={persona}
                  indice={indice}
                  delay={indice * 0.08}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Nosotros
