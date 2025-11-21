import ParallaxHeader from './ParallaxHeader'
import Marquee from './Marquee'

export default function NewHero(){
  return (
    <div>
      <ParallaxHeader />
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur p-4 md:p-6">
          <Marquee items={[
            'Divinity-стайл бои', 'Живая экономика', 'D&D проверки', 'Кража и скрытность', 'Ремесло и рецепты', 'Выживание: климат, голод, жажда', 'Квестборд', 'Мастер-ивенты', 'Турниры', 'Профили персонажей'
          ]} />
        </div>
      </div>
    </div>
  )
}
