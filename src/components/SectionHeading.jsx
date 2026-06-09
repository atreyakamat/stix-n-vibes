import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

/**
 * Reusable section heading component
 * @param {string} label - Small caps label text above the heading
 * @param {Array} segments - WordsPullUpMultiStyle segments for the heading
 * @param {string} subtitle - Optional subtitle paragraph
 * @param {string} align - Text alignment: 'center' | 'left'
 * @param {string} headingSize - Tailwind text size classes
 */
export function SectionHeading({
  label,
  segments,
  subtitle,
  align = 'center',
  headingSize = 'text-3xl sm:text-4xl md:text-5xl',
  maxWidth = 'max-w-4xl',
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div ref={ref} className={`${alignClass} mb-12 sm:mb-16 ${className}`}>
      {label && (
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-brand-muted text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-4"
        >
          {label}
        </motion.span>
      )}

      {segments && (
        <WordsPullUpMultiStyle
          segments={segments}
          className={`${headingSize} tracking-tight leading-[1.05] ${maxWidth} ${align === 'center' ? 'mx-auto' : ''}`}
        />
      )}

      {subtitle && (
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`text-brand-muted text-sm sm:text-base ${maxWidth} ${align === 'center' ? 'mx-auto' : ''} leading-relaxed mt-5`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
