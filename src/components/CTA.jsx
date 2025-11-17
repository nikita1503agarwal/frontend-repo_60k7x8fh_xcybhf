import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="contact" className="relative bg-neutral-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_-10%,rgba(18,136,255,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Let’s build your next experience</h2>
          <p className="mt-4 text-neutral-300">Tell us about your goals. We’ll show you how TrueOmni unifies journeys across every touchpoint.</p>
          <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Full name" />
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Work email" />
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2" placeholder="Company" />
            <textarea rows="4" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2" placeholder="What are you exploring?" />
            <div className="sm:col-span-2">
              <button type="button" className="px-6 py-3 rounded-full bg-[#1288FF] text-white hover:bg-[#0f79e5] transition-colors shadow-[0_10px_30px_-10px_rgba(18,136,255,0.7)]">Request demo</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
