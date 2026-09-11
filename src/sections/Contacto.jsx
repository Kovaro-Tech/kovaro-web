import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Button, { Arrow } from '../components/Button'
import { EMAIL, INSTAGRAM, LINKEDIN, whatsappUrl } from '../lib/site'

const canales = [
  {
    label: 'WhatsApp',
    valor: '+593 99 261 2833',
    url: whatsappUrl,
    externo: true,
  },
  { label: 'Email', valor: EMAIL, url: `mailto:${EMAIL}`, externo: false },
  { label: 'LinkedIn', valor: 'Kovaro Tech', url: LINKEDIN, externo: true },
  { label: 'Instagram', valor: '@kovarotech', url: INSTAGRAM, externo: true },
]

function Contacto() {
  return (
    <Section id="contacto" pad="py-28 md:py-40">
      <div className="container-k">
        <Reveal>
          <div className="label-mono mb-12 flex items-center gap-3 text-faint">
            <span className="text-accent">05</span>
            <span className="h-px w-6 bg-line" aria-hidden="true" />
            <span>Contacto</span>
          </div>
        </Reveal>

        <div className="grid gap-x-16 gap-y-12 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <h2 className="text-display max-w-[14ch] text-balance">
              Construyamos algo que valga la pena mostrar.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-5">
            <p className="text-body-lg max-w-md text-muted text-pretty">
              Cuéntanos qué estás construyendo.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                arrow="right"
              >
                Hablemos de tu proyecto
              </Button>
              <p className="label-mono text-faint">
                Respondemos en menos de 24 h
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="mt-24 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {canales.map((canal, indice) => (
            <Reveal
              key={canal.label}
              as="li"
              delay={indice * 0.05}
              className="border-b border-line lg:border-r lg:last:border-r-0"
            >
              <a
                href={canal.url}
                {...(canal.externo
                  ? { target: '_blank', rel: 'noreferrer' }
                  : null)}
                className="group flex items-center justify-between gap-4 py-7 pr-5 transition-colors lg:px-6 lg:first:pl-0"
              >
                <span>
                  <span className="label-mono block text-faint">
                    {canal.label}
                  </span>
                  <span className="mt-2.5 block text-base text-muted transition-colors duration-300 group-hover:text-bone">
                    {canal.valor}
                  </span>
                </span>
                <span className="mt-4 shrink-0 text-faint transition-colors duration-300 group-hover:text-accent">
                  <Arrow direction="right" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Contacto
