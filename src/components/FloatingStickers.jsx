import React from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Cloud, Zap, Smile, Flower2, Cat, Dice1 } from 'lucide-react'

const stickerElements = [
  { Icon: Cat, bg: '#FFF7E6', color: '#F59E0B', size: 20, w: 48, top: '10%', left: '6%', delay: 0 },
  { Icon: Star, bg: '#F0FFF4', color: '#C7EA46', size: 18, w: 42, top: '20%', right: '10%', delay: 1.5 },
  { Icon: Cloud, bg: '#EFF6FF', color: '#3EAEFF', size: 20, w: 46, top: '50%', left: '4%', delay: 2.8 },
  { Icon: Heart, bg: '#FFF1F2', color: '#FB7185', size: 16, w: 40, top: '65%', right: '7%', delay: 0.6 },
  { Icon: Zap, bg: '#F0FFF4', color: '#C7EA46', size: 18, w: 44, top: '35%', right: '5%', delay: 3.5 },
  { Icon: Flower2, bg: '#FFF7ED', color: '#FB923C', size: 18, w: 42, top: '78%', left: '12%', delay: 1.2 },
  { Icon: Smile, bg: '#FFFBEB', color: '#FFEC33', size: 16, w: 38, top: '22%', left: '88%', delay: 4.2 },
  { Icon: Dice1, bg: '#F0F0FF', color: '#8B5CF6', size: 16, w: 38, top: '55%', left: '92%', delay: 2.0 },
  { Icon: Star, bg: '#FFFBEB', color: '#FFEC33', size: 14, w: 34, top: '85%', right: '15%', delay: 3.0 },
  { Icon: Heart, bg: '#EFF6FF', color: '#3EAEFF', size: 14, w: 34, top: '42%', left: '10%', delay: 1.8 },
]

/**
 * Floating die-cut sticker characters for hero section
 * Each sticker is a rounded card wrapping a Lucide icon — simulates physical stickers
 */
export function FloatingStickers() {
  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stickerElements.map((sticker, i) => {
        const { Icon, bg, color, size, w, delay, ...position } = sticker
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ ...position }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -14, 0, -8, 0],
                    x: [0, 6, -4, 3, 0],
                    rotate: [0, 4, -3, 2, 0],
                  }
            }
            transition={{
              duration: 7 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay,
            }}
          >
            <div
              className="sticker-character opacity-60 hover:opacity-90"
              style={{
                width: w,
                height: w,
                backgroundColor: bg,
                border: `1.5px solid ${color}20`,
              }}
            >
              <Icon
                size={size}
                color={color}
                strokeWidth={2}
                style={{ filter: `drop-shadow(0 1px 3px ${color}30)` }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingStickers
