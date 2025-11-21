import { useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Forms() {
  const [tab, setTab] = useState('backstory')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (url, payload) => {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${backend}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setResult({ ok: res.ok, data })
    } catch (e) {
      setResult({ ok: false, data: { error: e.message } })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="forms" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Квенты и Отчеты</h2>

        <div className="mt-8 bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <div className="flex gap-2 mb-6">
            {[
              { id: 'backstory', label: 'Квента' },
              { id: 'report', label: 'Отчет о действиях' },
              { id: 'event', label: 'Ивент' },
            ].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${tab === t.id ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-900/60 border-slate-700 text-slate-200'}`}>
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'backstory' && <BackstoryForm onSubmit={(p) => submit('/backstories', p)} loading={loading} result={result} />}
          {tab === 'report' && <ReportForm onSubmit={(p) => submit('/reports', p)} loading={loading} result={result} />}
          {tab === 'event' && <EventForm onSubmit={(p) => submit('/events', p)} loading={loading} result={result} />}
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm text-slate-200 mb-1">{label}</span>
      {children}
    </label>
  )
}

function Result({ result }) {
  if (!result) return null
  return (
    <div className={`mt-4 text-sm rounded p-3 ${result.ok ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' : 'bg-red-500/10 text-red-300 border border-red-500/30'}`}>
      <pre className="whitespace-pre-wrap break-all">{JSON.stringify(result.data, null, 2)}</pre>
    </div>
  )
}

function BackstoryForm({ onSubmit, loading, result }) {
  const [form, setForm] = useState({ character_name: '', title: '', content: '', tags: '' })
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit({ ...form, tags: form.tags ? form.tags.split(',').map(t => t.trim()) : [] }) }}>
      <Field label="Имя персонажа">
        <input className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.character_name} onChange={e => setForm({ ...form, character_name: e.target.value })} required />
      </Field>
      <Field label="Заголовок">
        <input className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
      </Field>
      <Field label="Текст">
        <textarea rows={6} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required />
      </Field>
      <Field label="Теги (через запятую)">
        <input className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
      </Field>
      <button disabled={loading} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white">{loading ? 'Отправка...' : 'Отправить'}</button>
      <Result result={result} />
    </form>
  )
}

function ReportForm({ onSubmit, loading, result }) {
  const [form, setForm] = useState({ character_name: '', title: '', content: '', location: '' })
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form) }}>
      <Field label="Имя персонажа">
        <input className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.character_name} onChange={e => setForm({ ...form, character_name: e.target.value })} required />
      </Field>
      <Field label="Заголовок">
        <input className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
      </Field>
      <Field label="Локация (необязательно)">
        <input className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
      </Field>
      <Field label="Описание действий">
        <textarea rows={6} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required />
      </Field>
      <button disabled={loading} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white">{loading ? 'Отправка...' : 'Отправить'}</button>
      <Result result={result} />
    </form>
  )
}

function EventForm({ onSubmit, loading, result }) {
  const [form, setForm] = useState({ title: '', description: '', date: '', location: '', event_type: 'quest' })
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit({ ...form, date: form.date || new Date().toISOString() }) }}>
      <Field label="Название ивента">
        <input className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
      </Field>
      <Field label="Описание">
        <textarea rows={5} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
      </Field>
      <div className="grid md:grid-cols-3 gap-3">
        <Field label="Дата">
          <input type="datetime-local" className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
        </Field>
        <Field label="Локация">
          <input className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} required />
        </Field>
        <Field label="Тип">
          <select className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-white" value={form.event_type} onChange={e => setForm({ ...form, event_type: e.target.value })}>
            <option value="quest">Квест</option>
            <option value="dnd-session">D&D</option>
            <option value="market">Ярмарка</option>
            <option value="tournament">Турнир</option>
            <option value="social">Социальный</option>
          </select>
        </Field>
      </div>
      <button disabled={loading} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white">{loading ? 'Отправка...' : 'Создать ивент'}</button>
      <Result result={result} />
    </form>
  )
}
