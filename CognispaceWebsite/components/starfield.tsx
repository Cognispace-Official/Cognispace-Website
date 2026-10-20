function seeded(seed: number) {
  let value = seed
  return () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

const random = seeded(42)

const STARS = Array.from({ length: 140 }, (_, i) => {
  const size = random() < 0.85 ? 1 : random() < 0.7 ? 2 : 3
  const tint = random()
  return {
    id: i,
    left: random() * 100,
    top: random() * 100,
    size,
    color: tint < 0.12 ? '#f5c77e' : tint < 0.3 ? '#b9a6ff' : '#dfe8ff',
    duration: 3 + random() * 5,
    delay: random() * 6,
  }
})

export function Starfield() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgb(94_228_245/0.07),transparent_55%)]" />
      {STARS.map((star) => (
        <span
          key={star.id}
          className="star absolute rounded-full"
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              '--dur': `${star.duration}s`,
              '--delay': `${star.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
