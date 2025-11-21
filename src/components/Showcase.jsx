import { motion } from 'framer-motion'

const images = [
  // Safe fantasy/landscape images from Unsplash
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549880181-56a44cf4a9a0?q=80&w=1600&auto=format&fit=crop',
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-gradient opacity-30" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Эстетика мира</h2>
          <p className="mt-4 text-blue-200/80">Собрали вдохновляющую подборку визуалов: места, настроения, магия и сталь. Потяните за атмосферу — и придумайте свою историю.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src, i) => (
            <TiltCard key={src} index={i} src={src} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#forms" className="inline-block group px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-2xl shadow-blue-900/40 relative overflow-hidden">
            <span className="relative z-10">Вдохновились? Отправьте квенту</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_30%)]" />
          </a>
        </div>
      </div>
    </section>
  )
}

function TiltCard({ src, index }) {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden bg-slate-800/60 border border-slate-700 group"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-blue-500/30 group-hover:shadow-[0_0_0_1px_rgba(59,130,246,0.25)] transition-all" />
      <img src={src} alt="fantasy" className="w-full h-44 md:h-56 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
    </motion.div>
  )
}
