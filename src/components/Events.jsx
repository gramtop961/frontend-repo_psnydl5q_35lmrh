import { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Events() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${backend}/events`)
        const data = await res.json()
        setItems(data)
      } catch(e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Ближайшие события</h2>
        {loading ? (
          <p className="text-center text-blue-200 mt-8">Загрузка...</p>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.length === 0 ? (
              <p className="text-center text-blue-200 col-span-full">Пока нет запланированных событий</p>
            ) : items.map(ev => (
              <div key={ev.id} className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white">{ev.title}</h3>
                <p className="text-blue-200/80 mt-1 text-sm">{new Date(ev.date).toLocaleString()}</p>
                <p className="text-blue-200/90 mt-2">{ev.description}</p>
                <div className="mt-3 text-sm text-blue-300/80">{ev.location} • {ev.event_type}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
