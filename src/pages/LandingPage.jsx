import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight, MessageCircle, Droplets, Printer, Palette, BadgeIndianRupee,
  Star, Sparkles, Package, Zap, Truck,
} from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { ScrollRevealText } from '../components/AnimatedLetter'
import { FloatingStickers } from '../components/FloatingStickers'
import { StickerCard } from '../components/StickerCard'
import { SectionHeading } from '../components/SectionHeading'
import { TrustBadge } from '../components/TrustBadge'
import { ContactButtons } from '../components/ContactButtons'
import { Footer } from '../components/Footer'
import { PageMeta } from '../components/PageMeta'

const ease = [0.16, 1, 0.3, 1]

// ─── SECTION 1: HERO ─────────────────────────────────────────────
function HeroSection() {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })

  const wordmark = 'stixnvibes'
  const letters = wordmark.split('')

  return (
    <section
      ref={heroRef}
      className="min-h-screen w-full relative overflow-hidden bg-cream select-none flex flex-col"
    >
      {/* Paper noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-0" />

      {/* Floating sticker characters */}
      <FloatingStickers />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 pt-20 pb-16">
        {/* Small label */}
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.05, duration: 0.6, ease }}
          className="text-brand-muted text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold mb-6"
        >
          Premium Stickers from Goa
        </motion.span>

        {/* Wordmark */}
        <div className="overflow-hidden mb-5">
          <h1 className="flex items-center justify-center flex-wrap">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.15 + i * 0.045,
                  duration: 0.8,
                  ease,
                }}
                className="font-script liquid-glass inline-block"
                style={{
                  fontSize: 'clamp(2.8rem, 14vw, 7.5rem)',
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
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.7, ease }}
          className="text-brand-muted text-sm sm:text-base md:text-lg text-center max-w-lg leading-relaxed"
        >
          Custom stickers for laptops, bottles, cafés, colleges, events, and brands.
        </motion.p>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6, ease }}
          className="text-brand-muted/70 text-xs sm:text-sm italic font-serif text-center mt-2"
        >
          Made to stick, built to stand out.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.95, duration: 0.7, ease }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 w-full sm:w-auto"
        >
          <Link to="/packs">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-brand-dark text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full flex items-center justify-center gap-3 hover:bg-brand-charcoal transition-colors cursor-pointer shadow-sticker"
            >
              Shop Stickers
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/custom">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white text-brand-dark font-bold text-sm sm:text-base px-8 py-3.5 rounded-full border border-black/8 hover:bg-cream-300/50 transition-all cursor-pointer"
            >
              Custom Order
            </motion.button>
          </Link>
        </motion.div>

        {/* WhatsApp tertiary CTA */}
        <motion.a
          href="https://wa.me/917744020601?text=Hey%20Stix%20N%20Vibes!%20%F0%9F%8E%A8%20I%E2%80%99d%20like%20to%20chat%20about%20some%20stickers!"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-5 inline-flex items-center gap-1.5 text-xs text-brand-muted/70 hover:text-emerald-600 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-3 h-3" />
          <span>Chat on WhatsApp</span>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-black/15 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-black/20 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── SECTION 2: SHOWCASE ─────────────────────────────────────────
const showcaseItems = [
  {
    title: 'Late Night Grind',
    desc: 'For coders, students, and dreamers who don\'t sleep. Tech-inspired die-cut vinyl for laptops and monitors.',
    price: 'From ₹299',
    img: '/images/packs/laptop-pack.webp',
  },
  {
    title: 'Cute Daily Vibes',
    desc: 'Kawaii smiley faces, hearts, and flowers. Perfect for journals, bottles, and aesthetic desk setups.',
    price: 'From ₹249',
    img: '/images/packs/daily-vibes-pack.webp',
  },
  {
    title: 'Goa Chill Series',
    desc: 'Limited-edition drops celebrating Goan sunsets, beaches, and tropical culture. Local pride.',
    price: 'From ₹199',
    img: '/images/packs/goa-pack.webp',
  },
  {
    title: 'Brand Essentials',
    desc: 'Custom logo stickers, packaging seals, and branded die-cuts. Built for businesses that care.',
    price: 'Custom Pricing',
    img: '/images/packs/brand-pack.webp',
  },
  {
    title: 'College & Events',
    desc: 'High-volume festival bundles for college fests, meetups, and campus events. Bold and energetic.',
    price: 'From ₹149',
    img: '/images/packs/event-pack.webp',
  },
  {
    title: 'Street Mode',
    desc: 'Loud, bold, unapologetic. Skateboard culture, graffiti-inspired, urban statement stickers.',
    price: 'From ₹349',
    img: '/images/packs/street-pack.webp',
  },
]

function ShowcaseSection() {
  return (
    <section className="bg-cream py-20 sm:py-28 px-6 relative z-20">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Collections"
          segments={[
            { text: 'Pick your ', className: 'text-brand-dark font-normal' },
            { text: 'vibe.', className: 'italic font-serif text-electricBlue' },
          ]}
          subtitle="Curated sticker packs designed to match moods, moments, and personalities."
          headingSize="text-3xl sm:text-4xl md:text-5xl"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, idx) => (
            <StickerCard
              key={idx}
              image={item.img}
              title={item.title}
              description={item.desc}
              price={item.price}
              cta="Buy Now"
              href={`https://wa.me/917744020601?text=${encodeURIComponent(`Hey Stix N Vibes! 🎨 I'd like to buy the "${item.title}" sticker pack!`)}`}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/packs"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-electricBlue transition-colors cursor-pointer"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── SECTION 3: WHY VIBES ────────────────────────────────────────
const uspPoints = [
  {
    icon: <Droplets className="w-5 h-5" />,
    title: 'Waterproof & Durable',
    desc: 'Built for real life. Rain, spills, sun — they survive it all. 3-5 year outdoor life.',
    accent: 'text-electricBlue',
  },
  {
    icon: <Printer className="w-5 h-5" />,
    title: 'Sharp, High-Quality Prints',
    desc: 'Crisp lines, deep inks, and bold colors. Every single time. No fading, no blur.',
    accent: 'text-neonGreen',
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: 'Designed with Creators',
    desc: 'Crafted with artists and creators, not factories. Art meets vinyl meets quality.',
    accent: 'text-electricBlue',
  },
  {
    icon: <BadgeIndianRupee className="w-5 h-5" />,
    title: 'Affordable for Everyone',
    desc: 'Premium without the premium price tag. Good design should be everywhere.',
    accent: 'text-neonGreen',
  },
]

function WhyVibesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-20 sm:py-28 px-6 relative z-20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeading
          label="Why Stix N Vibes"
          segments={[
            { text: 'Feels premium. ', className: 'text-brand-dark font-normal' },
            { text: 'Priced for everyone.', className: 'italic font-serif text-electricBlue' },
          ]}
          subtitle="Because good design shouldn't be expensive — it should be everywhere."
        />

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {uspPoints.map((usp, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.6, ease }}
              className="bg-cream rounded-sticker p-6 sm:p-8 border border-black/5 hover:shadow-card transition-all duration-400 group cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center mb-4 ${usp.accent} group-hover:scale-110 transition-transform`}>
                {usp.icon}
              </div>
              <h3 className="text-brand-dark font-bold text-base mb-2">{usp.title}</h3>
              <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{usp.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Brand Story */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-3xl mx-auto bg-cream-50 rounded-sticker p-8 sm:p-12 border border-black/5 text-center"
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: 'We are Stix N Vibes, ', className: 'font-normal text-brand-dark' },
              { text: 'a Goa-based creative studio ', className: 'italic font-serif text-electricBlue' },
              { text: 'crafting stickers that tell your story.', className: 'font-normal text-brand-dark' },
            ]}
            className="text-xl sm:text-2xl md:text-3xl max-w-2xl mx-auto leading-snug tracking-tight"
          />

          <div className="max-w-xl mx-auto mt-8">
            <ScrollRevealText
              text="Founded by Atreya Kamat and Kritik Sawant, we blend art and craft to produce stickers that spark joy. From custom brand collabs to curated packs, we make every surface a canvas. Based in Goa, inspired by sunsets, culture, and creative chaos."
              className="text-brand-muted text-sm leading-[1.7] text-center"
            />
          </div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8"
          >
            <Link
              to="/story"
              className="inline-flex items-center gap-2 text-sm font-bold text-electricBlue hover:text-electricBlue-deep transition-colors cursor-pointer"
            >
              <span>Learn Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── SECTION 4: SOCIAL PROOF ─────────────────────────────────────
const testimonials = [
  {
    quote: 'We ordered 500 die-cut custom logo stickers for our coworking café. Regular coffee spills and hot mugs haven\'t made them budge or lose color. Incredible quality.',
    name: 'Atreya K.',
    role: 'Co-working Café Owner',
  },
  {
    quote: 'Our takeaway paper bags and coffee cups went from boring to a street-art canvas. Customers actually collect our stickers now. The packaging upgrade paid for itself.',
    name: 'Siddharth M.',
    role: 'Restaurant Director',
  },
  {
    quote: 'The matte finish is buttery smooth and the ink contrasts are incredibly deep. Finally, a brand that cares about sticker quality in India.',
    name: 'Kritika S.',
    role: 'Vector Illustrator',
  },
]

function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-20 sm:py-28 px-6 relative z-20">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          label="Community"
          segments={[
            { text: 'Your vibe, ', className: 'text-brand-dark font-normal' },
            { text: 'in the wild.', className: 'italic font-serif text-electricBlue' },
          ]}
          subtitle="See how people are using Stix N Vibes to transform their everyday spaces."
        />

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 25, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.7, ease }}
              className="bg-white border border-black/5 hover:border-electricBlue/20 rounded-sticker p-6 sm:p-8 flex flex-col justify-between shadow-sticker hover:shadow-sticker-hover transition-all duration-500"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-neonYellow fill-neonYellow" />
                  ))}
                </div>
                <p className="text-brand-muted text-xs sm:text-sm leading-relaxed italic font-serif">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 border-t border-black/5 pt-4">
                <h5 className="text-brand-dark font-bold text-xs">{t.name}</h5>
                <span className="text-[10px] text-brand-muted uppercase tracking-widest block mt-0.5">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <TrustBadge icon={<Sparkles className="w-5 h-5" />} value="100+" label="Custom Designs" delay={0} />
          <TrustBadge icon={<Package className="w-5 h-5" />} value="Bulk" label="Orders Welcome" delay={0.1} />
          <TrustBadge icon={<Zap className="w-5 h-5" />} value="24hr" label="Fast Response" delay={0.2} />
          <TrustBadge icon={<Truck className="w-5 h-5" />} value="India" label="Wide Delivery" delay={0.3} />
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 5: FINAL CTA ────────────────────────────────────────
function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 px-6 relative z-20">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-brand-muted text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-4">
          Let's Go
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
          Ready to Stick Your Vibe?
        </h2>
        <p className="text-brand-muted text-sm sm:text-base mb-10 max-w-xl mx-auto">
          Shop ready-made packs, place a custom order, or get a quote for your brand. Every surface is a canvas.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
          <Link to="/packs">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-brand-dark text-white font-bold text-sm px-8 py-3.5 rounded-full flex items-center justify-center gap-3 cursor-pointer shadow-sticker hover:bg-brand-charcoal transition-colors"
            >
              Shop Sticker Packs
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/custom">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white text-brand-dark font-bold text-sm px-8 py-3.5 rounded-full border border-black/8 hover:bg-cream-300/50 transition-all cursor-pointer"
            >
              Place a Custom Order
            </motion.button>
          </Link>
          <Link to="/brands">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white text-brand-dark font-bold text-sm px-8 py-3.5 rounded-full border border-black/8 hover:bg-cream-300/50 transition-all cursor-pointer"
            >
              Get a Brand Quote
            </motion.button>
          </Link>
        </div>

        <ContactButtons className="justify-center" />
      </motion.div>
    </section>
  )
}

// ─── LANDING PAGE COMPOSITION ────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PageMeta description="Premium custom stickers for laptops, bottles, cafés, colleges, events, and brands. Waterproof vinyl, bold designs, fast delivery across India." />
      <HeroSection />
      <ShowcaseSection />
      <WhyVibesSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
