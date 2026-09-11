import Reveal from './Reveal'

/**
 * Envoltura de sección. Aporta el ritmo vertical y la línea superior
 * que separa bloques sin necesidad de cambiar el fondo.
 */
export function Section({
  id,
  children,
  className = '',
  // Se pasa completo (no como override) para no depender del orden en que
  // Tailwind emita utilidades del mismo grupo.
  pad = 'py-20 md:py-28',
  rule = true,
  ...rest
}) {
  return (
    <section id={id} className={`relative ${pad} ${className}`} {...rest}>
      {rule && (
        <div
          className="absolute inset-x-0 top-0 rule-fade"
          aria-hidden="true"
        />
      )}
      {children}
    </section>
  )
}

/**
 * Cabecera editorial: número de sección + eyebrow a la izquierda,
 * titular y bajada en la columna principal.
 */
export function SectionHeader({
  num,
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}) {
  return (
    <header className={`mb-12 md:mb-16 ${className}`}>
      <Reveal>
        <div className="label-mono mb-7 flex items-center gap-3 text-faint">
          <span className="text-accent">{num}</span>
          <span className="h-px w-6 bg-line" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      </Reveal>

      <div
        className={
          align === 'split'
            ? 'grid gap-x-12 gap-y-5 md:grid-cols-12 md:items-baseline'
            : 'max-w-3xl'
        }
      >
        <Reveal delay={0.05} className={align === 'split' ? 'md:col-span-6' : ''}>
          <h2 className="text-section text-balance">{title}</h2>
        </Reveal>

        {lead && (
          <Reveal
            delay={0.12}
            className={align === 'split' ? 'md:col-span-6' : 'mt-5 max-w-xl'}
          >
            <p className="text-body max-w-md text-muted text-pretty">{lead}</p>
          </Reveal>
        )}
      </div>
    </header>
  )
}

export default Section
