type ArtProps = { id: string }

function Aero() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="200" cy="150" r="110" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <path
        d="M 115 120 C 165 60 245 60 285 135"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      <circle cx="115" cy="120" r="5" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="285" cy="135" r="8" fill="var(--accent)" />
    </svg>
  )
}

function Mosaic() {
  const tiles: { x: number; y: number; fill?: string }[] = [
    { x: 0, y: 0, fill: 'var(--ink)' },
    { x: 110, y: 0 },
    { x: 220, y: 0, fill: 'var(--ink)' },
    { x: 330, y: 0 },
    { x: 0, y: 110, fill: 'var(--accent)' },
    { x: 110, y: 110, fill: 'var(--ink)' },
    { x: 220, y: 110 },
    { x: 330, y: 110, fill: 'var(--ink)' },
    { x: 0, y: 220 },
    { x: 110, y: 220, fill: 'var(--ink)' },
    { x: 220, y: 220, fill: 'var(--accent)' },
    { x: 330, y: 220 },
  ]
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {tiles.map((t) => (
        <rect
          key={`${t.x}-${t.y}`}
          x={t.x}
          y={t.y}
          width="100"
          height="100"
          fill={t.fill ?? 'transparent'}
          stroke="var(--ink)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  )
}

function Flux() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path
        d="M 20 200 C 90 80 150 260 230 150 S 340 120 380 70"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <circle cx="230" cy="150" r="8" fill="var(--ink)" />
      <circle cx="110" cy="170" r="8" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M 20 200 H 380" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="1 9" strokeLinecap="round" />
    </svg>
  )
}

function Atlas() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="200" cy="150" r="110" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="70" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="30" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="140" cy="110" r="6" fill="var(--ink)" />
      <circle cx="265" cy="180" r="6" fill="var(--accent)" />
      <path d="M 265 168 V 192 M 253 180 H 277" stroke="var(--ink)" strokeWidth="1.5" />
    </svg>
  )
}

function Regne() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="160" cy="150" r="95" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="250" cy="140" r="80" fill="var(--ink)" />
      <circle cx="210" cy="205" r="70" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="250" cy="140" r="22" fill="var(--accent)" />
    </svg>
  )
}

function Sentinel() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M 20 250 V 60" stroke="var(--ink)" strokeWidth="1.5" />
      <path
        d="M 60 240 L 105 210 L 140 225 L 185 150 L 220 170 L 265 95 L 300 120 L 345 60"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="265" cy="95" r="8" fill="var(--accent)" />
      <path d="M 265 85 V 105 M 255 95 H 275" stroke="var(--ink)" strokeWidth="1.5" />
    </svg>
  )
}

export default function Art({ id }: ArtProps) {
  switch (id) {
    case 'aero':
      return <Aero />
    case 'mosaic':
      return <Mosaic />
    case 'flux':
      return <Flux />
    case 'atlas':
      return <Atlas />
    case 'regne':
      return <Regne />
    case 'sentinel':
      return <Sentinel />
    default:
      return <Aero />
  }
}
