import { useEffect, useState } from 'react'

/**
 * true solo en dispositivos con puntero preciso (mouse/trackpad).
 * Evita montar interacciones de cursor en táctil.
 */
export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFine(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return fine
}

export default useFinePointer
