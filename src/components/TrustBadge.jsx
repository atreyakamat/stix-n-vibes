import React from 'react'
import { motion } from 'framer-motion'

/**
 * Trust metric badge component
 * @param {React.ReactNode} icon - Lucide icon element
 * @param {string} value - Metric value (e.g., "100+")
 * @param {string} label - Metric label (e.g., "Custom Designs")
 */
export function TrustBadge({ icon, value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2 text-center px-4 py-3"
    >
      <div className="w-10 h-10 rounded-xl bg-cream-300/50 border border-black/5 flex items-center justify-center text-brand-charcoal">
        {icon}
      </div>
      <span className="text-xl sm:text-2xl font-bold text-brand-dark tracking-tight">
        {value}
      </span>
      <span className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-widest font-medium">
        {label}
      </span>
    </motion.div>
  )
}

export default TrustBadge
