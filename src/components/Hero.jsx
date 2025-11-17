import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.99] }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden bg-white" id="home">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient wash for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/55 to-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
            Elevate your digital kiosks
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-lg sm:text-xl text-neutral-700 max-w-xl">
            Design premium, touch-first experiences for ticketing, check‑in, concierge and retail with a unified platform.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <a href="#solutions" className="px-6 py-3 rounded-full bg-[#1288FF] text-white hover:bg-[#0f79e5] transition-colors shadow-[0_10px_30px_-10px_rgba(18,136,255,0.7)]">Explore Solutions</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition-colors">Talk to Us</a>
          </motion.div>
          <motion.div variants={item} className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#1288FF]" />Contactless</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-neutral-300" />ADA‑ready</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-neutral-300" />Real‑time content</div>
          </motion.div>
        </motion.div>

        {/* Floating kiosk card on the right */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block absolute right-8 top-28"
        >
          <div className="rounded-2xl border border-black/5 bg-white/60 backdrop-blur-xl shadow-xl p-5">
            <div className="w-[320px] h-[540px] rounded-[28px] bg-gradient-to-b from-neutral-50 to-white border border-black/5 shadow-2xl overflow-hidden relative">
              {/* Kiosk screen mock */}
              <div className="absolute inset-x-4 top-5 h-2 rounded-full bg-neutral-200" />
              <div className="absolute inset-x-4 top-10 h-[440px] rounded-xl bg-neutral-100 border border-black/5 overflow-hidden flex items-center justify-center">
                <div className="text-neutral-400">Kiosk UI preview</div>
              </div>
              <div className="absolute left-4 right-4 bottom-5 h-10 rounded-xl bg-[#1288FF]/90" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  )
}

export default Hero
