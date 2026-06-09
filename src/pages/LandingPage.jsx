import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { ScrollRevealText } from '../components/AnimatedLetter'
import { FloatingStickers } from '../components/FloatingStickers'
import { Footer } from '../components/Footer'

// Custom easing
const customEase = [0.16, 1, 0.3, 1]

// ─── SECTION 1: HERO ─────────────────────────────────────────────
function HeroSection() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  // Letter-by-letter animation for the wordmark
  const wordmark = 'stixnvibes'
  const letters = wordmark.split('')

  return (
    <section
      ref={heroRef}
      className="h-screen w-full relative overflow-hidden bg-beige select-none"
    >
      {/* Subtle paper noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-0" />

      {/* Floating sticker icons */}
      <FloatingStickers />

      {/* Hero Content — Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10">
        {/* Main wordmark */}
        <div className="overflow-hidden mb-6">
          <h1 className="flex items-center justify-center flex-wrap">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.8,
                  ease: customEase,
                }}
                className="font-script liquid-glass inline-block"
                style={{
                  fontSize: 'clamp(3rem, 15vw, 8rem)',
                  lineHeight: 1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8, ease: customEase }}
          className="text-gray-600 text-sm sm:text-base md:text-lg tracking-[0.15em] uppercase text-center max-w-lg"
        >
          Creative stickers for every vibe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8, ease: customEase }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 w-full sm:w-auto"
        >
          <Link to="/packs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-black text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors cursor-pointer"
            >
              Shop Stickers
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/brands">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full border-2 border-black/10 hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              Collaborate
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── SECTION 2: SHOWCASE ─────────────────────────────────────────
const showcaseItems = [
  {
    title: 'Flora & Fauna Pack',
    desc: 'Botanical illustrations and wild creatures — perfect for journaling, laptops, and gift wrapping.',
    price: 'From ₹299',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Retro Vibes Collection',
    desc: 'Y2K-inspired holographic stickers with bold gradients and groovy typography.',
    price: 'From ₹349',
    img: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Brand Essentials',
    desc: 'Custom logo stickers, packaging seals, and branded die-cuts for businesses.',
    price: 'Custom Pricing',
    img: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Goa Local Series',
    desc: 'Limited-edition drops celebrating Goan culture — sunsets, tuk-tuks, beach vibes.',
    price: 'From ₹199',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600',
  },
]

function ShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-white py-24 sm:py-32 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-3">
            Collections
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Sticker Collections
          </h2>
        </motion.div>

        {/* Product grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={isInView ? { scale: 1, opacity: 1, y: 0 } : {}}
              transition={{
                delay: idx * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-beige rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-gray-900 font-bold text-base mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-800">{item.price}</span>
                  <Link
                    to="/packs"
                    className="flex items-center gap-1.5 text-xs font-bold text-black uppercase tracking-wider group/btn"
                  >
                    <span>Buy Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 3: WHY VIBES (ABOUT) ───────────────────────────────
function WhyVibesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-beige py-24 sm:py-32 px-6 relative z-20">
      <div
        ref={ref}
        className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_8px_60px_rgba(0,0,0,0.06)] relative overflow-hidden"
      >
        {/* Top label */}
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-8 text-center"
        >
          Brand Philosophy
        </motion.span>

        {/* Multi-style heading */}
        <WordsPullUpMultiStyle
          segments={[
            { text: 'We are Stix N Vibes, ', className: 'font-normal text-gray-900' },
            { text: 'a Goa-based creative collective ', className: 'italic font-serif text-electricBlue' },
            { text: 'crafting stickers that tell your story.', className: 'font-normal text-gray-900' },
          ]}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto leading-[1.1] tracking-tight text-center"
        />

        {/* Body paragraph */}
        <div className="max-w-2xl mx-auto mt-10 sm:mt-14">
          <ScrollRevealText
            text="Founded in 2025 by Atreya Kamat and Kritik Sawant, we blend art and craft to produce stickers that spark joy and creativity. From custom brand collabs to our own curated designs, we're on a mission to make every surface a canvas. Based in Goa, inspired by sunsets, culture, and creative chaos."
            className="text-gray-600 text-sm sm:text-base leading-[1.7] text-center"
          />
        </div>

        {/* Learn Our Story link */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/story"
            className="inline-flex items-center gap-2 text-sm font-bold text-electricBlue hover:text-blue-600 transition-colors group"
          >
            <span className="border-b border-electricBlue/40 group-hover:border-electricBlue transition-colors">
              Learn Our Story
            </span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── SECTION 4: SOCIAL PROOF / TESTIMONIALS ──────────────────────
const testimonials = [
  {
    quote:
      "We ordered 500 die-cut custom logo stickers for our coworking café. Regular coffee spills and hot mugs haven't made them budge or lose color. Incredible Goan craftsmanship.",
    name: 'Atreya K.',
    role: 'Co-working Café Owner',
  },
  {
    quote:
      "Our takeaway paper bags and coffee cups went from boring to a street-art canvas. Customers actually collect our stickers now. The packaging upgrade paid for itself in week one.",
    name: 'Siddharth M.',
    role: 'Café Director',
  },
  {
    quote:
      "Heavyweight premium grade. The matte finish is so buttery and smooth, and the ink contrasts are incredibly deep. Finally, a brand that cares about sticker density in India.",
    name: 'Kritika S.',
    role: 'Vector Illustrator',
  },
]

function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black py-24 sm:py-32 px-6 relative z-20 overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.08] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-3">
            Community
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E1E0CC] tracking-tight">
            Loved by Sticker Lovers
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: idx * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#101010] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-neonYellow text-xs">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
                <p className="text-[#E1E0CC]/80 text-xs sm:text-sm leading-relaxed italic font-serif">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-4">
                <h5 className="text-[#E1E0CC] font-bold text-xs">{t.name}</h5>
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block mt-0.5">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 5: FINAL CTA ────────────────────────────────────────
function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-primary py-20 sm:py-28 px-6 relative z-20"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: customEase }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
          Ready to Stick Your Vibe?
        </h2>
        <p className="text-black/60 text-sm sm:text-base mb-10 max-w-xl mx-auto">
          Bulk orders, custom designs, or just a fun pack — we've got you covered. Let's make every surface a canvas.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/packs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-black text-white font-bold text-sm px-8 py-3.5 rounded-full flex items-center justify-center gap-3 cursor-pointer"
            >
              Shop All Collections
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/inquiries">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-transparent text-black font-bold text-sm px-8 py-3.5 rounded-full border-2 border-black/20 hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

// ─── LANDING PAGE COMPOSITION ────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ShowcaseSection />
      <WhyVibesSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
