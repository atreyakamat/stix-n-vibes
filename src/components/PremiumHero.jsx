import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PremiumHeroScene from './PremiumHeroScene'
import './PremiumHero.css'

const PHASE_DELAY = [0, 1100, 2400, 3200, 5000]

function PremiumHero() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = PHASE_DELAY.map((delay, index) => setTimeout(() => setPhase(index), delay))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="premium-hero">
      <div className="premium-hero__grain" />
      <div className="premium-hero__glow premium-hero__glow--left" />
      <div className="premium-hero__glow premium-hero__glow--right" />

      <div className="premium-hero__canvas-wrap">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 36 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          shadows
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <PremiumHeroScene phase={phase} />
          </Suspense>
        </Canvas>
      </div>

      <div className="premium-hero__overlay">
        <AnimatePresence mode="wait">
          {phase < 4 ? (
            <motion.p
              key="intro"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="premium-hero__intro"
            >
              This isn&apos;t just a sticker.
            </motion.p>
          ) : (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="premium-hero__cta"
            >
              <h1>Made for your world.</h1>
              <p>From laptop lids to brand kits, your vibe now has a finish this premium.</p>
              <div className="premium-hero__actions">
                <Link to="/custom" className="premium-btn premium-btn--primary">
                  Create Yours
                </Link>
                <Link to="/contact" className="premium-btn premium-btn--secondary">
                  Get a Free Mockup
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PremiumHero
