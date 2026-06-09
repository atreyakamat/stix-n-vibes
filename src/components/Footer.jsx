import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageCircle, Camera, Mail, HelpCircle } from 'lucide-react'
import Logo from './Logo'

// Lazy load the heavy R3F game component
const DinoGame3D = React.lazy(() => import('./DinoGame3D'))

export function Footer() {
  const [isGameOpen, setIsGameOpen] = useState(false)

  const quickLinks = [
    { label: 'Our Story', path: '/story' },
    { label: 'Sticker Packs', path: '/packs' },
    { label: 'Custom Orders', path: '/custom' },
    { label: 'For Brands', path: '/brands' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Inquiries', path: '/inquiries' },
  ]

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/stixnvibes', icon: Camera },
    { label: 'WhatsApp', href: 'https://wa.me/917744020601', icon: MessageCircle },
    { label: 'Email', href: 'mailto:hello@stixnvibes.com', icon: Mail },
  ]

  return (
    <footer className="bg-cream-300/40 border-t border-black/5 py-14 sm:py-16 px-6 sm:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">

        {/* ─── TOP ROW: Brand + Links + Social ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand column */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5">
              <Logo className="w-5 h-5 shrink-0" />
              <Link
                to="/"
                className="text-brand-dark hover:text-brand-charcoal font-bold text-base tracking-normal font-sans transition-colors lowercase cursor-pointer"
              >
                stix n vibes.
              </Link>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed max-w-[240px] text-center md:text-left">
              Not just stickers. It's how you show up. Premium custom stickers made in Goa for everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-muted mb-2">
              Quick Links
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs text-brand-muted hover:text-brand-dark transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-40" />
                </Link>
              ))}
            </div>
          </div>

          {/* Social + Easter Egg */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-muted mb-2">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center text-brand-muted hover:text-brand-dark hover:border-black/10 hover:shadow-sm transition-all cursor-pointer"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>

            {/* Secret game trigger */}
            <button
              onClick={() => setIsGameOpen(true)}
              className="mt-3 text-[9px] uppercase tracking-widest text-brand-muted/40 hover:text-brand-muted transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Open secret game"
            >
              <HelpCircle className="w-3 h-3" />
              <span>press for vibes</span>
            </button>
          </div>
        </div>

        {/* ─── BOTTOM ROW ───────────────────────────────────── */}
        <div className="border-t border-black/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-brand-muted tracking-widest uppercase">
            Made with care in Goa, India &middot; &copy; {new Date().getFullYear()}
          </p>
          <p className="text-[10px] text-brand-muted/60 italic font-serif">
            "Stick What You Feel."
          </p>
        </div>
      </div>

      {/* R3F Hidden Game portal */}
      {isGameOpen && (
        <React.Suspense fallback={null}>
          <DinoGame3D isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
        </React.Suspense>
      )}
    </footer>
  )
}

export default Footer
