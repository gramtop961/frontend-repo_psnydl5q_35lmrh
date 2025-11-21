export default function WowDivider(){
  return (
    <div className="relative my-12">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center -translate-y-1/2">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 grid place-items-center shadow-[0_0_25px_rgba(59,130,246,0.25)]">
          <img src="/flame-icon.svg" alt="sigil" className="w-7 h-7 opacity-90"/>
        </div>
      </div>
    </div>
  )
}
