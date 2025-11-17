import React from 'react'

const logos = Array.from({ length: 12 }).map((_, i) => ({ id: i }))

const Marquee = () => {
  return (
    <section className="bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center text-sm text-neutral-500 mb-6">Trusted by forward-thinking brands</div>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-[marquee_25s_linear_infinite]" style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}>
            {logos.map((l) => (
              <div key={l.id} className="h-12 w-32 rounded bg-white border border-black/5 shadow-sm flex items-center justify-center text-neutral-300">Logo</div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { 0%{ transform: translateX(0)} 100%{ transform: translateX(-50%)} }`}</style>
    </section>
  )
}

export default Marquee
