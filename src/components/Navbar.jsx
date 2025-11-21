import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="ToF" className="w-8 h-8" />
          <span className="text-white font-semibold tracking-wide">Twist of Fate</span>
        </a>
        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)}>Menu</button>
        <nav className={`md:flex items-center gap-6 ${open ? 'block' : 'hidden'} md:block`}>
          <a href="#features" className="text-slate-200 hover:text-white">Механики</a>
          <a href="#events" className="text-slate-200 hover:text-white">Ивенты</a>
          <a href="#forms" className="text-slate-200 hover:text-white">Квента/Отчет</a>
          <a href="#community" className="text-slate-200 hover:text-white">Сообщество</a>
        </nav>
      </div>
    </header>
  )
}
