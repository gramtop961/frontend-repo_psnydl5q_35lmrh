import { useEffect, useRef } from 'react'

export default function Marquee({ items }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    let offset = 0
    let raf
    const loop = () => {
      offset -= 0.5
      el.style.transform = `translateX(${offset}px)`
      if (Math.abs(offset) > el.scrollWidth / 2) offset = 0
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const data = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-950 via-transparent to-slate-950 [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]" />
      <div className="whitespace-nowrap will-change-transform flex gap-6" ref={ref}>
        {data.map((t, i) => (
          <span key={i} className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/60 text-blue-200 text-sm">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
