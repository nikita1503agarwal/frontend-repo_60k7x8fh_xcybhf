import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Blob = ({ className, yRange }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], yRange)
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.45])
  return (
    <motion.div
      style={{ y, opacity }}
      className={className}
      aria-hidden
    />
  )
}

const PageParallax = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* blue glow top-right */}
      <Blob
        yRange={[0, -120]}
        className="absolute top-[-10%] right-[-10%] h-[50vmax] w-[50vmax] rounded-full bg-[#1288FF]/10 blur-3xl"
      />
      {/* soft neutral glow left */}
      <Blob
        yRange={[0, 80]}
        className="absolute top-[30%] left-[-15%] h-[40vmax] w-[40vmax] rounded-full bg-neutral-200/40 blur-3xl"
      />
      {/* subtle blue wash bottom */}
      <Blob
        yRange={[0, -60]}
        className="absolute bottom-[-20%] left-[20%] h-[45vmax] w-[45vmax] rounded-full bg-[#1288FF]/5 blur-3xl"
      />
    </div>
  )
}

export default PageParallax
