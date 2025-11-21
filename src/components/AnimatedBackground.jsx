import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(window.innerHeight, document.body.scrollHeight)
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      s: Math.random() * 0.6 + 0.2,
    }))

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // gradient mist
      const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      g.addColorStop(0, 'rgba(30,58,138,0.08)')
      g.addColorStop(1, 'rgba(124,58,237,0.06)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // stars
      for (const st of stars) {
        st.x += Math.sin(st.y * 0.002) * 0.1
        st.y += st.s * 0.15
        if (st.y > canvas.height) st.y = -5
        ctx.beginPath()
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(191,219,254,0.7)'
        ctx.fill()
      }

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}
