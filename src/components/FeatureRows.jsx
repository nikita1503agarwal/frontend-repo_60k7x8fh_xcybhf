import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Touch-first kiosks for modern lobbies',
    copy: 'Effortless check-in, wayfinding and ticketing. Optimized for glanceable reading and quick interactions.',
    cta: 'See kiosk patterns',
  },
  {
    title: 'Drive merchandising with dynamic signage',
    copy: 'Schedule, target and automate content with robust templates and data integrations.',
    cta: 'Explore signage',
  },
  {
    title: 'Unify mobile and web to extend the journey',
    copy: 'From loyalty to messaging—connect every interaction into one continuous experience.',
    cta: 'View mobile flows',
  },
]

const FeatureRows = () => {
  return (
    <section className="bg-white" id="solutions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 space-y-28">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
          >
            <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="group aspect-[16/10] w-full rounded-2xl bg-neutral-100 border border-black/5 overflow-hidden relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(18,136,255,0.12),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.06),transparent_40%)]" />
                <div className="h-full w-full flex items-center justify-center text-neutral-400">Digital kiosk visual</div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-5 left-5 right-5 rounded-xl border border-black/5 bg-white/70 backdrop-blur-lg p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-neutral-700">Queue status</div>
                    <div className="h-8 w-24 rounded-full bg-[#1288FF]" />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">{f.title}</h2>
              <p className="mt-5 text-lg text-neutral-700 max-w-prose">{f.copy}</p>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center gap-2 text-[#1288FF] hover:opacity-80">
                  {f.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeatureRows
