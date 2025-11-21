export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Twist of Fate
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
            Ролевой сервер по World of Warcraft с пошаговой боевой системой, D&D механиками и живой экономикой.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#forms" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Подать квенту</a>
            <a href="#features" className="px-6 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-100 hover:border-slate-600">Узнать механики</a>
          </div>
        </div>
      </div>
    </section>
  )
}
