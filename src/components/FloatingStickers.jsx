import React from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Cloud, Zap, Smile } from 'lucide-react'

const stickerIcons = [
  { Icon: Smile, color: '#FFEC33', size: 28, top: '12%', left: '8%', delay: 0 },
  { Icon: Star, color: '#C7EA46', size: 22, top: '18%', right: '12%', delay: 1.2 },
  { Icon: Cloud, color: '#3EAEFF', size: 26, top: '55%', left: '5%', delay: 2.5 },
  { Icon: Heart, color: '#FF6B9D', size: 20, top: '70%', right: '8%', delay: 0.8 },
  { Icon: Zap, color: '#C7EA46', size: 24, top: '35%', right: '6%', delay: 3.2 },
  { Icon: Star, color: '#FFEC33', size: 18, top: '80%', left: '15%', delay: 1.8 },
  { Icon: Smile, color: '#3EAEFF', size: 20, top: '25%', left: '85%', delay: 4.0 },
  { Icon: Heart, color: '#FFEC33', size: 16, top: '45%', left: '90%', delay: 2.0 },
]

export function FloatingStickers() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stickerIcons.map((sticker, i) => {
        const { Icon, color, size, delay, ...position } = sticker
        return (
          <motion.div
            key={i}
            className="absolute opacity-40"
            style={{ ...position }}
            animate={{
              y: [0, -18, 0, -10, 0],
              x: [0, 8, -5, 3, 0],
              rotate: [0, 8, -5, 3, 0],
            }}
            transition={{
              duration: 7 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay,
            }}
          >
            <Icon
              size={size}
              color={color}
              strokeWidth={1.5}
              style={{ filter: `drop-shadow(0 2px 6px ${color}40)` }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingStickers
