import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Star, Heart, Cloud, Zap, Smile } from 'lucide-react'

const floatingIcons = [
  { Icon: Star, color: '#C7EA46', bg: '#F0FFF4', size: 16, w: 36, top: '15%', left: '10%', delay: 0 },
  { Icon: Heart, color: '#FB7185', bg: '#FFF1F2', size: 14, w: 32, top: '25%', right: '12%', delay: 1.2 },
  { Icon: Cloud, color: '#3EAEFF', bg: '#EFF6FF', size: 16, w: 36, top: '60%', left: '8%', delay: 2.5 },
  { Icon: Zap, color: '#C7EA46', bg: '#F0FFF4', size: 14, w: 32, top: '70%', right: '10%', delay: 0.8 },
  { Icon: Smile, color: '#FFEC33', bg: '#FFFBEB', size: 14, w: 32, top: '45%', left: '85%', delay: 3.2 },
]

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-cream overflow-hidden px-6 select-none">
      {/* Paper noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Floating sticker characters */}
      {floatingIcons.map((sticker, i) => {
        const { Icon, color, bg, size, w, delay, ...position } = sticker
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{ ...position }}
            animate={{ y: [0, -12, 0, -8, 0], rotate: [0, 4, -3, 2, 0] }}
            transition={{ duration: 7 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <div
              className="sticker-character opacity-40"
              style={{ width: w, height: w, backgroundColor: bg, border: `1.5px solid ${color}20` }}
            >
              <Icon size={size} color={color} strokeWidth={2} />
            </div>
          </motion.div>
        )
      })}

      {/* Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          className="mb-6"
        >
          <h1 className="font-script liquid-glass text-7xl sm:text-8xl md:text-9xl leading-none">
            404
          </h1>
        </motion.div>

        <h2 className="text-xl sm:text-2xl font-bold text-brand-dark mb-3 tracking-tight">
          This sticker didn't stick.
        </h2>
        <p className="text-brand-muted text-sm leading-relaxed mb-8">
          The page you're looking for peeled off somewhere. Let's get you back to a surface that exists.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-brand-dark text-white font-bold text-sm px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-brand-charcoal transition-colors cursor-pointer shadow-sticker"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto bg-white text-brand-dark font-bold text-sm px-7 py-3 rounded-full border border-black/8 flex items-center justify-center gap-2 hover:bg-cream-300/50 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
