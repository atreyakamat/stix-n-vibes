import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * Premium sticker product card with die-cut styling
 * @param {string} image - Product image URL
 * @param {string} title - Pack name
 * @param {string} description - Short description
 * @param {string} price - Price string (e.g., "From ₹299")
 * @param {string} cta - CTA button text
 * @param {string} link - Internal link path
 * @param {string} href - External link URL (overrides link)
 * @param {number} delay - Animation delay in seconds
 */
export function StickerCard({
  image,
  title,
  description,
  price,
  cta = 'View Pack',
  link = '/packs',
  href,
  delay = 0,
  className = '',
}) {
  const CardWrapper = href ? 'a' : Link
  const cardProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: link }

  return (
    <motion.div
      initial={{ scale: 0.96, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group bg-white rounded-sticker overflow-hidden border border-black/5 shadow-sticker hover:shadow-sticker-hover transition-all duration-500 cursor-pointer vinyl-sheen peel-corner ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Price badge */}
        {price && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
            {price}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-brand-dark font-bold text-base mb-1.5 tracking-tight">
          {title}
        </h3>
        <p className="text-brand-muted text-xs leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <CardWrapper
          {...cardProps}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark uppercase tracking-wider group/btn hover:text-electricBlue transition-colors"
        >
          <span>{cta}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </CardWrapper>
      </div>
    </motion.div>
  )
}

export default StickerCard
