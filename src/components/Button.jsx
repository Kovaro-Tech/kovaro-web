/* ==========================================================================
   Sistema de botones
   primary  → acción principal, uno por pantalla
   secondary → alternativa, contorno
   ghost    → enlace de texto con flecha
   ========================================================================== */

const base =
  'group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap ' +
  'text-sm font-medium tracking-[-0.01em] transition-colors duration-300 ' +
  'disabled:opacity-40 disabled:pointer-events-none'

const variants = {
  primary:
    'h-12 px-6 rounded-full bg-bone text-ink hover:bg-white active:scale-[0.985] ' +
    'transition-transform',
  secondary:
    'h-12 px-6 rounded-full border border-line text-bone hover:border-bone/40 ' +
    'hover:bg-white/[0.04] active:scale-[0.985] transition-transform',
  ghost: 'text-muted hover:text-bone',
}

function Arrow({ direction = 'right' }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={
        direction === 'down'
          ? 'transition-transform duration-300 group-hover:translate-y-0.5'
          : 'transition-transform duration-300 group-hover:translate-x-1'
      }
    >
      {direction === 'down' ? (
        <>
          <path d="M8 3v10" />
          <path d="M4 9.5 8 13.5 12 9.5" />
        </>
      ) : (
        <>
          <path d="M3 8h10" />
          <path d="M9.5 4 13.5 8 9.5 12" />
        </>
      )}
    </svg>
  )
}

/**
 * Renderiza <a> si recibe href, <button> en cualquier otro caso.
 * Nunca un div con onClick.
 */
function Button({
  as,
  href,
  variant = 'primary',
  arrow,
  children,
  className = '',
  ...rest
}) {
  const Tag = as ?? (href ? 'a' : 'button')
  const classes = `${base} ${variants[variant]} ${className}`

  return (
    <Tag
      href={href}
      className={classes}
      {...(Tag === 'button' ? { type: rest.type ?? 'button' } : null)}
      {...rest}
    >
      {children}
      {arrow && <Arrow direction={arrow} />}
    </Tag>
  )
}

export { Arrow }
export default Button
