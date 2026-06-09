import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, ShoppingBag, MessageCircle } from 'lucide-react'
import Logo from './Logo'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Our Story', path: '/story' },
    { label: 'Sticker Packs', path: '/packs' },
    { label: 'Custom Orders', path: '/custom' },
    { label: 'For Brands', path: '/brands' },
    { label: 'Inquiries', path: '/inquiries' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* ─── FLOATING PILL NAVBAR ─────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none p-3 sm:p-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`
            rounded-full px-3 sm:px-5 py-2 flex items-center justify-between gap-2 md:gap-4 
            pointer-events-auto max-w-max mx-auto relative
            transition-all duration-500
            ${scrolled
              ? 'bg-white/80 backdrop-blur-xl border border-black/8 shadow-card'
              : 'bg-white/60 backdrop-blur-md border border-black/5'
            }
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-brand-dark hover:text-brand-charcoal font-bold text-xs sm:text-sm tracking-tight transition-colors py-1.5 pl-1 sm:pl-2 select-none group"
          >
            <Logo className="w-5 h-5 transition-transform duration-500 group-hover:rotate-[360deg] shrink-0" />
            <span className="font-sans tracking-wide">stix n vibes</span>
            <Sparkles className="w-3 h-3 text-electricBlue shrink-0 opacity-60" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    text-[10px] font-semibold uppercase tracking-wider 
                    transition-colors duration-300 relative px-3 py-2 
                    rounded-full overflow-visible select-none cursor-pointer
                    ${isActive ? 'text-brand-dark' : 'text-brand-muted hover:text-brand-dark'}
                  `}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-cream-300/60 rounded-full border border-black/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-dark hover:text-brand-charcoal p-1.5 transition-colors flex items-center justify-center pr-1 cursor-pointer"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </header>

      {/* ─── MOBILE FULL SCREEN MENU ──────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-cream/95 backdrop-blur-xl z-[45] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 bg-cream border-b border-black/5 z-[48] lg:hidden pt-24 pb-10 px-8 shadow-card flex flex-col items-center justify-center"
            >
              <div className="flex flex-col gap-3 items-center text-center w-full max-w-xs">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="w-full"
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                          block py-2.5 text-base font-bold uppercase tracking-widest 
                          transition-colors relative rounded-full cursor-pointer
                          ${isActive ? 'text-brand-dark' : 'text-brand-muted hover:text-brand-dark'}
                        `}
                      >
                        {link.label}
                        {isActive && (
                          <div className="w-8 h-[2px] bg-electricBlue mx-auto mt-1 rounded" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Bottom accent */}
                <div className="mt-6 border-t border-black/5 w-full pt-6 flex flex-col items-center gap-2">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-brand-muted font-medium">
                    Premium stickers from Goa
                  </p>
                  <Sparkles className="text-electricBlue w-4 h-4 opacity-50" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── MOBILE STICKY BOTTOM CTA BAR ─────────────────────── */}
      <div className="mobile-sticky-cta lg:hidden">
        <Link
          to="/packs"
          className="flex-1 bg-brand-dark text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-charcoal transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Shop Now
        </Link>
        <a
          href="https://wa.me/917744020601"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-50 text-emerald-700 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 border border-emerald-200/60 hover:bg-emerald-100 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </a>
      </div>
    </>
  )
}

export default Header
