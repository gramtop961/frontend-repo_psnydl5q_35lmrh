import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Forms from './components/Forms'
import Events from './components/Events'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(147,197,253,0.06),transparent_35%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Events />
        <Forms />
      </main>
      <footer className="relative border-t border-slate-800 py-8 text-center text-blue-200/70">
        © {new Date().getFullYear()} Twist of Fate • Ролевое сообщество WoW
      </footer>
    </div>
  )
}

export default App
