import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ParallaxHeader() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2400&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        animate={{ y: -offset * 0.2 }}
        transition={{ type: 'tween', ease: 'linear' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <motion.h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Twist of Fate
        </motion.h1>
        <motion.p className="mt-4 text-blue-200/90 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Ролевой мир, где ваши решения меняют ткань истории. Тактика, ремесло, выживание.
        </motion.p>
        <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a href="#forms" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/30">Подать квенту</a>
          <a href="#features" className="px-6 py-3 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-100 hover:border-slate-600">Узнать механики</a>
        </motion.div>
      </div>
    </section>
  )
}
