import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  { id: 'travel', title: 'Travel / Destinations', tag: 'IVE', bg: 'from-sky-200 to-blue-200', caption: 'Ticketing, attractions, partner promos' },
  { id: 'hotels', title: 'Hotels / Resorts', tag: 'Nexi', bg: 'from-emerald-200 to-teal-200', caption: 'Smart service, check-in, upsells' },
  { id: 'retail', title: 'Retailers', tag: 'IRE', bg: 'from-amber-200 to-orange-200', caption: 'Loyalty, offers, mobile engagement' },
]

const variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
}

const VideoCarousel = ({ auto = true, interval = 4000 }) => {
  const [index, setIndex] = useState(0)
  const idList = useMemo(() => slides.map((s) => s.id), [])

  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [auto, interval])

  return (
    <div className="w-full">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-black/5 bg-white/60 backdrop-blur">
        <AnimatePresence mode="wait">
          <motion.div
            key={idList[index]}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute inset-0 bg-gradient-to-br ${slides[index].bg} flex items-center justify-center`}
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-xs text-neutral-700 border border-black/5">{slides[index].tag}</div>
              <h4 className="mt-3 text-2xl font-semibold text-neutral-900">{slides[index].title}</h4>
              <p className="mt-1 text-sm text-neutral-700">{slides[index].caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to ${s.title}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${index === i ? 'bg-[#1288FF] w-6' : 'bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoCarousel
