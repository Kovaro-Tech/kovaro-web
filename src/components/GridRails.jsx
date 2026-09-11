/**
 * Rieles verticales del grid Kovaro.
 * Hairlines fijas alineadas al contenedor: dan estructura al scroll
 * sin añadir ruido ni peso. Puramente decorativo.
 */
function GridRails() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden sm:block"
      aria-hidden="true"
    >
      <div className="container-k h-full">
        <div className="relative h-full border-x border-line-soft">
          <span className="absolute inset-y-0 left-1/2 hidden w-px bg-line-soft lg:block" />
        </div>
      </div>
    </div>
  )
}

export default GridRails
