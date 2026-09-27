import { motion, useReducedMotion } from 'framer-motion'

/**
 * Contenedor de motion con contenido visible desde el HTML estático.
 * No oculta texto mientras JavaScript o IntersectionObserver cargan.
 */
function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    )
  }

  return (
    <Tag
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
