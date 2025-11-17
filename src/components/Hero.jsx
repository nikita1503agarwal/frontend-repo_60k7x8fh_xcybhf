import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-white" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
            Experience Omni‑Channel Engagement
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-700 max-w-xl">
            Build modern visitor journeys with kiosks, mobile, web and signage in one connected platform.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#solutions" className="px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">Explore Solutions</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition-colors">Talk to Us</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}

export default Hero
