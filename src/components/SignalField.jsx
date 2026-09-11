import { useEffect, useRef } from 'react'

/* ==========================================================================
   SignalField
   Matriz de coordenadas: una retícula de puntos apagados que se ilumina
   alrededor del cursor. Estática por defecto — no hay nada flotando.
   Sin dependencias, un solo canvas, rAF solo mientras el puntero se mueve.
   ========================================================================== */

const SPACING = 30
const RADIUS = 180

function SignalField({ className = '', style, interactionRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement
    if (!canvas || !host) return

    // El canvas vive detrás del contenido: escuchamos el puntero en el
    // elemento que sí recibe los eventos (la sección completa).
    const surface = interactionRef?.current ?? host

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    let width = 0
    let height = 0
    let points = []
    let raf = 0
    let running = false

    const target = { x: -9999, y: -9999 }
    const eased = { x: -9999, y: -9999 }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        const dx = p.x - eased.x
        const dy = p.y - eased.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        let t = dist < RADIUS ? 1 - dist / RADIUS : 0
        t *= t

        const alpha = 0.1 + t * 0.5
        const radius = 0.9 + t * 1.35
        // Los puntos activos viran hacia el violeta de marca.
        const r = Math.round(255 - 131 * t)
        const g = Math.round(255 - 163 * t)

        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},255,${alpha})`
        ctx.fill()
      }
    }

    const loop = () => {
      eased.x += (target.x - eased.x) * 0.14
      eased.y += (target.y - eased.y) * 0.14
      draw()

      if (Math.abs(target.x - eased.x) + Math.abs(target.y - eased.y) < 0.6) {
        eased.x = target.x
        eased.y = target.y
        draw()
        running = false
        return
      }
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running) return
      running = true
      raf = requestAnimationFrame(loop)
    }

    const build = () => {
      const rect = host.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      points = []
      const cols = Math.ceil(width / SPACING) + 1
      const rows = Math.ceil(height / SPACING) + 1
      const offsetX = (width - (cols - 1) * SPACING) / 2
      const offsetY = (height - (rows - 1) * SPACING) / 2
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push({ x: offsetX + i * SPACING, y: offsetY + j * SPACING })
        }
      }
      draw()
    }

    const onPointerMove = (event) => {
      const rect = host.getBoundingClientRect()
      target.x = event.clientX - rect.left
      target.y = event.clientY - rect.top
      if (eased.x < -1000) {
        eased.x = target.x
        eased.y = target.y
      }
      start()
    }

    const onPointerLeave = () => {
      target.x = -9999
      target.y = -9999
      start()
    }

    const observer = new ResizeObserver(build)
    observer.observe(host)
    build()

    const interactive = fine.matches && !reduce.matches
    if (interactive) {
      surface.addEventListener('pointermove', onPointerMove, { passive: true })
      surface.addEventListener('pointerleave', onPointerLeave, { passive: true })
    }

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      surface.removeEventListener('pointermove', onPointerMove)
      surface.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [interactionRef])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    />
  )
}

export default SignalField
