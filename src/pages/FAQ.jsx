import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ContactButtons } from '../components/ContactButtons'
import { Footer } from '../components/Footer'

const faqData = [
  {
    question: 'What are your stickers made of?',
    answer: 'Our stickers are crafted from heavy-duty, waterproof vinyl and protected with a UV-resistant matte or glossy laminate. They\'re built to survive rain, spills, sun exposure, and daily wear for 3-5 years outdoors.',
  },
  {
    question: 'What finishes do you offer?',
    answer: 'We offer three premium finishes: Matte (smooth, non-reflective, premium feel), Glossy (vibrant colors with a sheen), and Extra-Glossy (mirror-like shine with maximum color pop). All finishes are scratch-resistant.',
  },
  {
    question: 'What\'s the difference between Die-Cut and Kiss-Cut?',
    answer: 'Die-Cut stickers are cut through the vinyl and backing paper to match the exact shape of your design. Kiss-Cut stickers are cut through the vinyl only, leaving a square or rectangular backing for easy peeling. Die-Cut is great for individual stickers; Kiss-Cut is perfect for sticker sheets.',
  },
  {
    question: 'What sizes are available?',
    answer: 'Standard sizes are 2"×2", 3"×3", and 4"×4". We also offer fully custom sizes from 1" to 12" for special projects. Bulk custom sizing is available for B2B orders.',
  },
  {
    question: 'Where do you deliver?',
    answer: 'We deliver across India via trusted courier partners. Standard delivery takes 3-7 business days depending on your location. Goa local delivery is typically 1-2 days.',
  },
  {
    question: 'What\'s the minimum order for custom stickers?',
    answer: 'Our minimum order is 50 stickers for custom orders. For the best per-unit pricing, we recommend ordering 250+ units. B2B bulk orders start at 500 units with significant volume discounts.',
  },
  {
    question: 'How does the custom order process work?',
    answer: 'It\'s simple: Upload your design (or describe your idea), select your size, cut type, and finish, choose your quantity, then submit via WhatsApp. Our team will send you a digital mockup for approval before printing. Turnaround is typically 3-7 business days after approval.',
  },
  {
    question: 'Can you design stickers for me?',
    answer: 'Absolutely! If you have an idea but no artwork, share your concept and we\'ll create a custom design. Design consultation is free for orders of 100+ stickers.',
  },
  {
    question: 'How do I place an order?',
    answer: 'You can order directly through our website\'s Custom Orders configurator, or message us on WhatsApp (+91 77440 20601), Instagram (@stixnvibes), or Email (hello@stixnvibes.com). We respond within hours.',
  },
  {
    question: 'Do you offer bulk/B2B pricing?',
    answer: 'Yes! We offer tiered volume discounts: 100+ units (10% off), 250+ (20% off), 500+ (35% off), and 1000+ (50% off). B2B partnerships with cafés, colleges, and brands get additional custom pricing. Visit our For Brands page or contact us directly.',
  },
  {
    question: 'Are your inks eco-friendly?',
    answer: 'We use water-based, eco-conscious inks that produce deep, vibrant colors without harsh chemicals. Our printing process minimizes waste and we\'re continuously improving our environmental footprint.',
  },
  {
    question: 'What\'s your turnaround time?',
    answer: 'Standard orders: 3-5 business days. Bulk B2B orders (5000+): 5-7 business days. Rush orders are available on request. All timelines start after design approval.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/5 last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className={`text-sm sm:text-base font-semibold transition-colors pr-4 ${isOpen ? 'text-brand-dark' : 'text-brand-charcoal group-hover:text-brand-dark'}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-brand-muted shrink-0"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-brand-muted text-xs sm:text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div className="min-h-screen select-none">
      {/* Header */}
      <section className="bg-cream pt-28 sm:pt-32 pb-8 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeading
            label="Support"
            segments={[
              { text: 'Common ', className: 'text-brand-dark font-normal' },
              { text: 'questions, ', className: 'italic font-serif text-electricBlue' },
              { text: 'real answers.', className: 'text-brand-dark font-normal' },
            ]}
            subtitle="Everything you need to know about Stix N Vibes — materials, delivery, pricing, and the custom order process."
            headingSize="text-3xl sm:text-4xl md:text-5xl"
          />
        </div>
      </section>

      {/* Accordion */}
      <section ref={ref} className="bg-cream pb-10 px-6 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white border border-black/5 rounded-sticker px-6 sm:px-8 py-2 shadow-card"
        >
          {faqData.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </motion.div>
      </section>

      {/* Still have questions */}
      <section className="bg-cream pb-20 px-6 relative z-10">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white border border-black/5 rounded-sticker p-6 sm:p-8 text-center shadow-card"
        >
          <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mx-auto mb-4 text-electricBlue border border-black/5">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-brand-dark mb-2">Still have questions?</h3>
          <p className="text-brand-muted text-xs sm:text-sm mb-5 max-w-md mx-auto">
            Reach out directly — we respond within hours. No bots, no forms, just real people.
          </p>
          <ContactButtons className="justify-center" />
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
