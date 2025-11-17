import React from 'react'
import { motion } from 'framer-motion'

const logos = Array.from({ length: 12 }).map((_, i) => ({ id: i }))

const Marquee = () => {
  return (
    <section className="bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.99] }}
          className="text-center text-sm text-neutral-500 mb-6"
        >
          Trusted by forward-thinking brands
        </motion.div>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 animate-[marquee_25s_linear_infinite]"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            {logos.map((l) => (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: l.id * 0.02 }}
                className="h-12 w-32 rounded bg-white border border-black/5 shadow-sm flex items-center justify-center text-neutral-300"
              >
                Logo
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { 0%{ transform: translateX(0)} 100%{ transform: translateX(-50%)} }`}</style>
    </section>
  )
}

export default Marquee
