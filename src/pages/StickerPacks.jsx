import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, MessageCircle, Filter } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { StickerCard } from '../components/StickerCard'
import { ContactButtons } from '../components/ContactButtons'
import { Footer } from '../components/Footer'

const categories = ['All', 'Laptop', 'Daily', 'Goa', 'Brand', 'Event', 'Street']

const allPacks = [
  {
    title: 'Late Night Grind',
    desc: 'For coders, students, and dreamers who don\'t sleep. Tech-inspired die-cut vinyl for laptops and monitors.',
    price: 'From ₹299',
    img: '/images/packs/laptop-pack.png',
    category: 'Laptop',
    pieces: '10 stickers',
    size: '3" avg',
  },
  {
    title: 'Cute Daily Vibes',
    desc: 'Kawaii smiley faces, hearts, and flowers. Perfect for journals, bottles, and aesthetic desk setups.',
    price: 'From ₹249',
    img: '/images/packs/daily-vibes-pack.png',
    category: 'Daily',
    pieces: '12 stickers',
    size: '2" avg',
  },
  {
    title: 'Goa Chill Series',
    desc: 'Limited-edition drops celebrating Goan sunsets, beaches, and tropical culture. Local pride.',
    price: 'From ₹199',
    img: '/images/packs/goa-pack.png',
    category: 'Goa',
    pieces: '8 stickers',
    size: '3" avg',
  },
  {
    title: 'Brand Essentials',
    desc: 'Custom logo stickers, packaging seals, and branded die-cuts. Built for businesses that care.',
    price: 'Custom Pricing',
    img: '/images/packs/brand-pack.png',
    category: 'Brand',
    pieces: 'Custom qty',
    size: '1"-6"',
  },
  {
    title: 'College & Events',
    desc: 'High-volume festival bundles for college fests, meetups, and campus events. Bold and energetic.',
    price: 'From ₹149',
    img: '/images/packs/event-pack.png',
    category: 'Event',
    pieces: '15 stickers',
    size: '2"-4"',
  },
  {
    title: 'Street Mode',
    desc: 'Loud, bold, unapologetic. Skateboard culture, graffiti-inspired, urban statement stickers.',
    price: 'From ₹349',
    img: '/images/packs/street-pack.png',
    category: 'Street',
    pieces: '8 stickers',
    size: '4" avg',
  },
  {
    title: 'Soft Aesthetic',
    desc: 'Calm tones, clean energy. Minimalist watercolor florals, moon phases, and gentle gradients.',
    price: 'From ₹279',
    img: '/images/packs/daily-vibes-pack.png',
    category: 'Daily',
    pieces: '10 stickers',
    size: '2"-3"',
  },
  {
    title: 'Gym Beast',
    desc: 'Discipline. Hustle. Repeat. Motivational die-cut stickers for water bottles and gym gear.',
    price: 'From ₹229',
    img: '/images/packs/street-pack.png',
    category: 'Street',
    pieces: '8 stickers',
    size: '3" avg',
  },
]

export default function StickerPacks() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPacks = activeCategory === 'All'
    ? allPacks
    : allPacks.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen select-none">
      {/* Header */}
      <section className="bg-cream pt-28 sm:pt-32 pb-8 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeading
            label="Online Store"
            segments={[
              { text: 'Pick your vibe. ', className: 'text-brand-dark font-normal' },
              { text: 'Shop packs.', className: 'italic font-serif text-electricBlue' },
            ]}
            subtitle="Curated sticker packs designed to match moods, moments, and personalities. Premium vinyl, waterproof, and built to last."
            headingSize="text-4xl sm:text-5xl md:text-6xl"
          />
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-cream pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider
                  transition-all duration-300 cursor-pointer border
                  ${activeCategory === cat
                    ? 'bg-brand-dark text-white border-brand-dark'
                    : 'bg-white text-brand-muted border-black/5 hover:border-black/10 hover:text-brand-dark'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filteredPacks.map((pack, idx) => (
                <div key={`${activeCategory}-${idx}`} className="relative">
                  <StickerCard
                    image={pack.img}
                    title={pack.title}
                    description={pack.desc}
                    price={pack.price}
                    cta="Buy Now"
                    href="https://wa.me/917744020601"
                    delay={idx * 0.08}
                  />
                  {/* Meta badges */}
                  <div className="flex gap-2 mt-2 px-1">
                    <span className="text-[10px] text-brand-muted bg-cream-300/50 px-2.5 py-1 rounded-full">
                      {pack.pieces}
                    </span>
                    <span className="text-[10px] text-brand-muted bg-cream-300/50 px-2.5 py-1 rounded-full">
                      {pack.size}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Quick order CTA */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-14 bg-white rounded-sticker border border-black/5 p-6 sm:p-8 text-center shadow-card"
          >
            <h3 className="text-lg font-bold text-brand-dark mb-2">Can't find your vibe?</h3>
            <p className="text-brand-muted text-sm mb-5">
              Order directly via WhatsApp, Instagram, or Email. We respond within hours.
            </p>
            <ContactButtons className="justify-center" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
