/* ==========================================================================
   Marcos de presentación
   Cromo mínimo dibujado en CSS. Nada de mockups 3D.
   BrowserFrame usa <span> para poder vivir dentro de un <button> sin
   romper el modelo de contenido de HTML.
   ========================================================================== */

export function BrowserFrame({ src, alt, label, priority = false, className = '' }) {
  return (
    <span
      className={`block overflow-hidden rounded-xl border border-line bg-surface ${className}`}
    >
      <span className="flex h-9 items-center gap-3 border-b border-line px-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-[5px] w-[5px] rounded-full bg-white/15" />
          <span className="h-[5px] w-[5px] rounded-full bg-white/15" />
          <span className="h-[5px] w-[5px] rounded-full bg-white/15" />
        </span>
        {label && (
          <span className="truncate rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] tracking-wide text-faint">
            {label}
          </span>
        )}
      </span>
      {src ? <img
        src={src}
        alt={alt}
        width={1440}
        height={900}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="block aspect-[8/5] w-full object-cover object-top"
        draggable={false}
      /> : <span aria-hidden="true" className="block aspect-[8/5] w-full" />}
    </span>
  )
}

export function PhoneFrame({ src, alt, className = '' }) {
  return (
    <span
      className={`block overflow-hidden rounded-[1.75rem] border border-line bg-surface p-1.5 ${className}`}
    >
      <span className="block overflow-hidden rounded-[1.35rem]">
        {src ? <img
          src={src}
          alt={alt}
          width={440}
          height={950}
          loading="lazy"
          decoding="async"
          className="block aspect-[9/19] w-full object-cover object-top"
          draggable={false}
        /> : <span aria-hidden="true" className="block aspect-[9/19] w-full" />}
      </span>
    </span>
  )
}
