import { motion, useReducedMotion } from 'framer-motion'

/**
 * Primitiva de entrada del sistema de motion.
 * Solo opacity + translateY. Corto, una vez, sin rebote.
 */
function Reveal({ children, delay = 0, y = 16, as = 'div', className, ...rest }) {
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
      initial={{ opacity: 0, y }}
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
