const features = [
  {
    title: 'Прокачка и эволюция навыков',
    desc: 'Развивайте персонажа через уникальную систему навыков и специализаций.',
  },
  {
    title: 'Пошаговые бои как в Divinity',
    desc: 'Тактические сражения с инициативой, укрытиями и эффектами окружения.',
  },
  {
    title: 'D&D и социальные действия',
    desc: 'Проверки навыков, кража предметов, скрытность, убеждение и многое другое.',
  },
  {
    title: 'Выживание: голод, жажда, климат',
    desc: 'Следите за состоянием персонажа и готовьтесь к путешествиям.',
  },
  {
    title: 'Живая экономика и крафт',
    desc: 'Торговля, ремесла, редкие рецепты и материалы, рынок игроков.',
  },
  {
    title: 'Квесты и мастер-ивенты',
    desc: 'Сюжетные цепочки, мини-игры и масштабные мероприятия по расписанию.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Что ждет игроков</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
