import React from 'react'
import { motion, useScroll } from 'framer-motion'

/**
 * Thin scroll progress bar fixed at the very top of the viewport.
 * Uses framer-motion's useScroll for smooth, performant tracking.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-electricBlue z-[60] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgress
