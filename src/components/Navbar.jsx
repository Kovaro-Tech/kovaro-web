import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/images/logos/logo.webp'
import { navLinks, whatsappUrl } from '../lib/site'
import Button from './Button'

function Wordmark({ compact = false }) {
  return (
    <>
      <img
        src={logo}
        alt=""
        width={28}
        height={28}
        className={`w-auto transition-all duration-300 ${compact ? 'h-6' : 'h-7'}`}
      />
      <span className="text-[0.8125rem] font-medium uppercase tracking-[0.24em] text-bone">
        Kovaro
      </span>
    </>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Mantenemos qué secciones cruzan la banda central para poder
    // limpiar el indicador cuando ninguna lo hace (hero, footer).
    const visibles = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibles.add(entry.target.id)
          else visibles.delete(entry.target.id)
        })
        const actual = navLinks.find(({ id }) => visibles.has(id))
        setActive(actual?.id ?? '')
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Bloquea el scroll y permite cerrar con Escape mientras el menú está abierto.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const go = (event, id) => {
    event.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-bone focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Saltar al contenido
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled && !open
            ? 'border-line bg-ink/70 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav
          className={`container-k flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
          aria-label="Navegación principal"
        >
          <a
            href="#hero"
            onClick={(event) => go(event, 'hero')}
            className="flex items-center gap-2.5"
            aria-label="Kovaro — inicio"
          >
            <Wordmark compact={scrolled} />
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => go(event, id)}
                  className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                    active === id ? 'text-bone' : 'text-muted hover:text-bone'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                      active === id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              arrow="right"
              className="h-10 px-5"
            >
              Hablemos
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 block h-px w-full bg-bone transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-bone transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-k flex flex-1 flex-col justify-center pt-20">
              <ul className="flex flex-col">
                {navLinks.map(({ id, label }, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.055,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-line-soft"
                  >
                    <a
                      href={`#${id}`}
                      onClick={(event) => go(event, id)}
                      className="flex items-baseline gap-4 py-5"
                    >
                      <span className="label-mono text-faint">
                        0{index + 1}
                      </span>
                      <span className="text-[2rem] font-medium leading-none tracking-[-0.03em]">
                        {label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.45 }}
                className="mt-10"
              >
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  arrow="right"
                  className="w-full"
                >
                  Hablemos de tu proyecto
                </Button>
              </motion.div>
            </div>

            <div className="container-k flex items-center justify-between pb-10 label-mono text-faint">
              <span>Quito · Ecuador</span>
              <span className="hidden sm:block">Build · Position · Grow</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
