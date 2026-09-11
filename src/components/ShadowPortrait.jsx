/* ==========================================================================
   ShadowPortrait
   Retrato editorial en low-key, construido íntegramente en SVG.
   No representa a nadie: la figura es una masa sin rasgos, recortada contra
   un fondo con algo más de luz. La única fuente de color es el violeta de
   marca entrando de costado.

   Lógica de iluminación:
   · el fondo es MÁS claro que la figura → se lee una silueta, no un contorno
   · la luz principal entra horizontal por un solo lado y muere al 38%
   · un relleno frío casi imperceptible despega el lado opuesto del negro
   · la base se funde en negro para que los hombros no terminen en un corte

   El hover espera un ancestro con la clase `group/persona`.
   ========================================================================== */

const siluetas = [
  // 01 — hombros anchos, cuello visible
  `M 206 118
   C 244 118 269 148 267 192
   C 266 214 259 232 248 247
   C 242 255 239 264 240 275
   C 241 284 245 291 252 295
   C 294 309 324 330 344 358
   C 366 391 377 440 382 520
   L 18 520
   C 23 440 34 391 57 358
   C 78 330 108 309 150 295
   C 157 291 161 284 161 275
   C 162 264 159 255 153 247
   C 142 232 135 214 134 192
   C 132 148 168 118 206 118 Z`,
  // 02 — masa continua que cae sobre los hombros: el contorno solo se abre,
  // nunca se estrecha, para que no se lean dos volúmenes apilados
  `M 200 112
   C 240 112 268 146 268 190
   C 268 214 266 238 272 268
   C 278 300 280 330 274 352
   C 310 366 336 388 354 416
   C 376 450 386 480 391 520
   L 9 520
   C 14 480 24 450 46 416
   C 64 388 90 366 126 352
   C 120 330 122 300 128 268
   C 134 238 132 214 132 190
   C 132 146 160 112 200 112 Z`,
]

function ShadowPortrait({ variant = 0, id }) {
  const silueta = siluetas[variant % siluetas.length]
  const desdeDerecha = variant % 2 === 0

  // Eje horizontal de la luz principal y del relleno opuesto.
  const key = desdeDerecha ? { x1: 1, x2: 0 } : { x1: 0, x2: 1 }
  const fill = desdeDerecha ? { x1: 0, x2: 1 } : { x1: 1, x2: 0 }

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Derrame de la luz sobre el fondo */}
        <radialGradient
          id={`amb-${id}`}
          cx={desdeDerecha ? 0.82 : 0.18}
          cy={0.26}
          r={0.8}
        >
          <stop offset="0%" stopColor="#8c6bff" stopOpacity="0.34" />
          <stop offset="38%" stopColor="#7c5cff" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
        </radialGradient>

        {/* La figura: siempre más oscura que el fondo */}
        <linearGradient
          id={`cuerpo-${id}`}
          x1={key.x1}
          y1="0.08"
          x2={key.x2}
          y2="0.92"
        >
          <stop offset="0%" stopColor="#141220" />
          <stop offset="28%" stopColor="#09080e" />
          <stop offset="100%" stopColor="#040405" />
        </linearGradient>

        {/* Luz principal */}
        <linearGradient id={`key-${id}`} x1={key.x1} y1="0" x2={key.x2} y2="0">
          <stop offset="0%" stopColor="#cdc2ff" stopOpacity="0.9" />
          <stop offset="13%" stopColor="#9078ff" stopOpacity="0.55" />
          <stop offset="38%" stopColor="#7c5cff" stopOpacity="0" />
        </linearGradient>

        {/* Relleno frío del lado opuesto */}
        <linearGradient
          id={`fill-${id}`}
          x1={fill.x1}
          y1="0"
          x2={fill.x2}
          y2="0"
        >
          <stop offset="0%" stopColor="#b9b9d4" stopOpacity="0.2" />
          <stop offset="15%" stopColor="#8f8fae" stopOpacity="0.06" />
          <stop offset="32%" stopColor="#8f8fae" stopOpacity="0" />
        </linearGradient>

        {/* La base se funde en negro */}
        <linearGradient id={`piso-${id}`} x1="0" y1="0.42" x2="0" y2="1">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.88" />
        </linearGradient>

        <radialGradient id={`vig-${id}`} cx={0.5} cy={0.42} r={0.8}>
          <stop offset="50%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </radialGradient>

        <clipPath id={`clip-${id}`}>
          <path d={silueta} />
        </clipPath>

        {/* sRGB en todos los filtros: en linearRGB el violeta vira a magenta */}
        <filter
          id={`borde-${id}`}
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="1.6" />
        </filter>

        <filter
          id={`halo-${id}`}
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="7" />
        </filter>

        <filter
          id={`suave-${id}`}
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="1.8" />
        </filter>

        <filter
          id={`grano-${id}`}
          x="0"
          y="0"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="1"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      {/* Fondo: charcoal con luz */}
      <rect width="400" height="500" fill="#0e0e13" />
      <rect
        width="400"
        height="500"
        fill={`url(#amb-${id})`}
        className="opacity-70 transition-opacity duration-[900ms] ease-out group-hover/persona:opacity-100"
      />

      {/* Figura */}
      <path
        d={silueta}
        fill={`url(#cuerpo-${id})`}
        filter={`url(#borde-${id})`}
      />

      {/* Luz de borde, contenida dentro de la figura */}
      <g clipPath={`url(#clip-${id})`}>
        <path
          d={silueta}
          fill="none"
          stroke={`url(#key-${id})`}
          strokeWidth="11"
          filter={`url(#halo-${id})`}
          className="opacity-75 transition-opacity duration-[900ms] ease-out group-hover/persona:opacity-100"
        />
        <path
          d={silueta}
          fill="none"
          stroke={`url(#key-${id})`}
          strokeWidth="3"
          filter={`url(#suave-${id})`}
          className="opacity-70 transition-opacity duration-[900ms] ease-out group-hover/persona:opacity-95"
        />
        <path
          d={silueta}
          fill="none"
          stroke={`url(#fill-${id})`}
          strokeWidth="2.5"
          filter={`url(#suave-${id})`}
        />
      </g>

      <rect width="400" height="500" fill={`url(#piso-${id})`} />
      <rect width="400" height="500" fill={`url(#vig-${id})`} />
      <rect
        width="400"
        height="500"
        filter={`url(#grano-${id})`}
        opacity="0.05"
      />
    </svg>
  )
}

export default ShadowPortrait
