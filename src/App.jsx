import Navbar from './components/Navbar'
import Features from './components/Features'
import Forms from './components/Forms'
import Events from './components/Events'
import AnimatedBackground from './components/AnimatedBackground'
import NewHero from './components/NewHero'
import Showcase from './components/Showcase'
import WowDivider from './components/WowDivider'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative text-slate-100">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(147,197,253,0.06),transparent_35%)] pointer-events-none" />
      <Navbar />
      <main className="relative">
        <NewHero />
        <WowDivider />
        <Features />
        <Showcase />
        <WowDivider />
        <Events />
        <WowDivider />
        <Forms />
      </main>
      <Footer />
    </div>
  )
}

export default App
