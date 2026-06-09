import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { Footer } from '../components/Footer'

const faqData = [
  {
    category: "Materials & Quality",
    questions: [
      {
        q: "What material are your stickers made of?",
        a: "We use premium heavyweight vinyl with a scratch-resistant UV matte coating. Our stickers are waterproof, sun-resistant, and built to last for 3-5 years on outdoor surfaces."
      },
      {
        q: "Do you offer transparent or clear stickers?",
        a: "Yes! We offer transparent vinyl, white vinyl, holographic, and kraft paper options. Just specify your preference in the configurator or mention it in your inquiry."
      },
      {
        q: "Are the inks eco-friendly?",
        a: "We use water-based, eco-certified inks that produce vibrant colors without harmful VOCs. Our printing process is designed to minimize waste and environmental impact."
      },
    ]
  },
  {
    category: "Ordering & Pricing",
    questions: [
      {
        q: "What's the minimum order quantity?",
        a: "Our minimum order is 50 stickers. Bulk discounts kick in at 100+ units (10% off), 250+ (20% off), 500+ (35% off), and 1000+ (50% off)."
      },
      {
        q: "How does pricing work for custom designs?",
        a: "Use our Custom Configurator to get instant pricing based on size, cut type, finish, and quantity. For complex requests, contact us for a custom quote."
      },
      {
        q: "Do you accept international orders?",
        a: "Currently we primarily serve India. International shipping is available on request — reach out via WhatsApp or email for rates and availability."
      },
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard orders ship within 3-5 business days. Bulk orders (5000+) may take 5-7 business days. We ship from Goa with tracked delivery across India."
      },
      {
        q: "Is there a shipping fee?",
        a: "We offer free express shipping on all orders within India. International shipping costs are calculated based on destination and order weight."
      },
      {
        q: "Can I track my order?",
        a: "Yes! Once your order ships, we'll send you a tracking number via WhatsApp or email so you can follow your stickers every step of the way."
      },
    ]
  },
  {
    category: "Custom & Brand Orders",
    questions: [
      {
        q: "Can I upload my own design?",
        a: "Absolutely! Upload your PNG, JPG, or SVG file through our Custom Configurator. We recommend transparent backgrounds for the best results."
      },
      {
        q: "Do you do brand collaborations?",
        a: "Yes, we love working with brands! Visit our For Brands page to explore collaboration options. We offer dedicated support, design review, and zero setup fees."
      },
      {
        q: "What file formats do you accept?",
        a: "We accept PNG, JPG, SVG, AI, and PDF files. For best results, provide vector files (SVG/AI) at 300 DPI with transparent backgrounds."
      },
    ]
  },
]

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className={`text-sm sm:text-base font-semibold pr-4 transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-electricBlue' : 'text-gray-400'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pb-5 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleItem = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen">
      {/* Header — Beige */}
      <section className="bg-beige pt-32 pb-12 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-gray-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-4">
            Help Center
          </span>
          
          <WordsPullUpMultiStyle
            segments={[
              { text: "Frequently asked ", className: "text-gray-900 font-normal" },
              { text: "questions. ", className: "italic font-serif text-electricBlue" },
            ]}
            className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.0] max-w-3xl mx-auto mb-4"
          />

          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-4">
            Everything you need to know about our stickers, ordering process, shipping, and custom designs.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section ref={ref} className="bg-beige pb-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          {faqData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden"
            >
              <div className="px-6 pt-6 pb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-electricBlue" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {category.category}
                </h3>
              </div>
              <div className="px-6">
                {category.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`;
                  return (
                    <AccordionItem
                      key={key}
                      question={item.q}
                      answer={item.a}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggleItem(key)}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl border border-black/5 shadow-sm p-8 text-center"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-500 text-sm mb-6">
            We're always happy to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/917744020601" target="_blank" rel="noopener noreferrer"
              className="bg-beige border border-black/5 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
              💬 WhatsApp
            </a>
            <a href="mailto:hello@stixnvibes.com"
              className="bg-beige border border-black/5 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
              ✉️ Email
            </a>
            <a href="https://instagram.com/stixnvibes" target="_blank" rel="noopener noreferrer"
              className="bg-beige border border-black/5 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
              📸 Instagram
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
