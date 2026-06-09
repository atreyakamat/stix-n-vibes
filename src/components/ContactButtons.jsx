import React from 'react'
import { MessageCircle, Camera, Mail } from 'lucide-react'

const channels = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/917744020601',
    icon: MessageCircle,
    color: 'text-emerald-600 hover:text-emerald-700',
    bgHover: 'hover:bg-emerald-50',
    border: 'border-emerald-200/60 hover:border-emerald-300',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/stixnvibes',
    icon: Camera,
    color: 'text-pink-500 hover:text-pink-600',
    bgHover: 'hover:bg-pink-50',
    border: 'border-pink-200/60 hover:border-pink-300',
  },
  {
    label: 'Email',
    href: 'mailto:hello@stixnvibes.com',
    icon: Mail,
    color: 'text-brand-charcoal hover:text-brand-dark',
    bgHover: 'hover:bg-cream-300/30',
    border: 'border-black/8 hover:border-black/15',
  },
]

/**
 * Reusable contact channel buttons
 * @param {'row' | 'column'} direction - Layout direction
 * @param {'compact' | 'full'} variant - Button size variant
 * @param {string} className - Additional wrapper classes
 */
export function ContactButtons({
  direction = 'row',
  variant = 'compact',
  className = '',
}) {
  const isRow = direction === 'row'
  const isCompact = variant === 'compact'

  return (
    <div className={`flex ${isRow ? 'flex-row flex-wrap' : 'flex-col'} gap-2 sm:gap-3 ${className}`}>
      {channels.map((ch) => {
        const Icon = ch.icon
        return (
          <a
            key={ch.label}
            href={ch.href}
            target={ch.href.startsWith('mailto') ? undefined : '_blank'}
            rel={ch.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className={`
              inline-flex items-center gap-2 
              ${isCompact ? 'px-4 py-2.5 text-xs' : 'px-5 py-3 text-sm'} 
              font-semibold rounded-xl border bg-white
              ${ch.color} ${ch.bgHover} ${ch.border}
              transition-all duration-300 cursor-pointer
            `}
          >
            <Icon className={isCompact ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
            <span>{ch.label}</span>
          </a>
        )
      })}
    </div>
  )
}

export default ContactButtons
