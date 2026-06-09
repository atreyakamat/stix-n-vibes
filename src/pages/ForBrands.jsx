import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Briefcase, Award, Sparkles, ShieldCheck, Truck, Check, Building, MessageCircle, Camera, Mail, Zap } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ContactButtons } from '../components/ContactButtons'
import { Footer } from '../components/Footer'
import { PageMeta } from '../components/PageMeta'
import { submitFormBackup } from '../lib/formBackup'

const collabs = [
  { title: 'Café Takeaway Stickers', desc: 'Brand your counter tables, take-away cups, and packaging boxes. Scratchproof and thermal-resistant.', icon: Coffee, tag: 'Takeaway Branding', accent: 'text-electricBlue' },
  { title: 'Laptops & Workstations', desc: 'Bespoke laptop sticker sheets, startup retreat bundles, and corporate giveaways with zero-residue backings.', icon: Briefcase, tag: 'Corporate Gifting', accent: 'text-neonGreen' },
  { title: 'College Fest Bundles', desc: 'Equip university events, clubs, and fests with high-volume, premium custom shapes.', icon: Award, tag: 'Fest Bundles', accent: 'text-neonYellow' },
  { title: 'Brand Merch Stickers', desc: 'Turn vector art and logos into collectable retail gear with buttery matte inks and precision cuts.', icon: Sparkles, tag: 'Brand Merch', accent: 'text-electricBlue' },
  { title: 'Packaging Inserts', desc: 'Custom logo sealers and thank-you card inserts that build delight from the moment of unboxing.', icon: ShieldCheck, tag: 'Packaging Seals', accent: 'text-neonGreen' },
  { title: 'Campaign Drops', desc: 'Limited-edition sticker drops, guerilla promotions, and brand collabs built for Indian markets.', icon: Truck, tag: 'Campaign Drops', accent: 'text-neonYellow' },
]

const perks = [
  'Quick turnaround — 3-7 business days',
  'Eco-friendly, water-based inks',
  'Your brand logo on our base designs',
  'Custom sizes from 1" to 12"',
  'Bulk pricing with volume discounts',
  'Dedicated personal support',
]

export default function ForBrands() {
  const [bulkQty, setBulkQty] = useState(1000)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [brandName, setBrandName] = useState('')
  const [contactInfo, setContactInfo] = useState('')
  const [vibeCategory, setVibeCategory] = useState('Café Takeaways')

  const leadTime = bulkQty >= 5000 ? '5-7 business days' : '3-5 business days'

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!brandName || !contactInfo) return
    setFormSubmitted(true)

    // Background backup submit
    submitFormBackup({
      brandName,
      category: vibeCategory,
      quantity: bulkQty,
      contact: contactInfo
    }, "B2B Partnership")

    const text = `Hey Stix and Vibes! B2B inquiry:\n\nBrand: ${brandName}\nCategory: ${vibeCategory}\nQuantity: ${bulkQty}\nContact: ${contactInfo}\n\nLet's build! 🌴`
    window.open(`https://wa.me/917744020601?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="min-h-screen select-none">
      <PageMeta title="For Brands" description="Custom brand stickers and packaging seals for cafés, workstations, fests, and products. Get bulk discounts and premium vinyl quality." />
      {/* Header */}
      <section className="bg-cream pt-28 sm:pt-32 pb-8 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeading
            label="B2B Collaborations"
            segments={[
              { text: 'Bespoke branding for ', className: 'text-brand-dark font-normal' },
              { text: 'forward-thinking brands.', className: 'italic font-serif text-electricBlue' },
            ]}
            subtitle="We partner with cafés, startups, colleges, and creators to produce premium custom sticker assets at scale."
            headingSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white py-10 px-6 border-y border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-3"
            >
              <Check className="w-4 h-4 text-neonGreen shrink-0" />
              <span className="text-brand-muted text-xs">{perk}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collab Grid */}
      <section className="bg-cream py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {collabs.map((col, idx) => {
            const Icon = col.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="bg-white border border-black/5 hover:border-electricBlue/20 rounded-sticker p-7 flex flex-col justify-between shadow-sticker hover:shadow-sticker-hover transition-all duration-500 group"
              >
                <div>
                  <span className="text-brand-muted text-[9px] uppercase tracking-widest font-semibold block mb-4">{col.tag}</span>
                  <div className={`w-11 h-11 bg-cream rounded-xl flex items-center justify-center mb-5 border border-black/5 ${col.accent} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2 tracking-tight">{col.title}</h3>
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{col.desc}</p>
                </div>
                <div className="mt-6 border-t border-black/5 pt-3 text-xs text-brand-muted flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-neonGreen" />
                  <span>Premium Quality</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Volume Estimator + Inquiry Form */}
      <section className="bg-cream px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto bg-white border border-black/5 rounded-sticker overflow-hidden shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Volume config */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-7 border-b lg:border-b-0 lg:border-r border-black/5">
              <div className="space-y-2">
                <span className="text-neonGreen text-[10px] tracking-[0.25em] uppercase font-bold block">Volume Configuration</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark">Select B2B quantities.</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline text-xs text-brand-muted">
                  <span className="uppercase tracking-wider font-semibold">Target Quantity:</span>
                  <span className="text-brand-dark text-lg font-bold">{bulkQty} assets</span>
                </div>
                <input
                  type="range" min="500" max="10000" step="500"
                  value={bulkQty}
                  onChange={(e) => setBulkQty(parseInt(e.target.value))}
                  className="w-full accent-brand-dark h-1.5 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brand-muted">
                  <span>500</span><span>2500</span><span>5000</span><span>10000</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-black/5 text-center text-xs text-brand-muted">
                <div>
                  <Truck className="w-5 h-5 mx-auto text-electricBlue mb-2" />
                  <span className="block text-[9px] uppercase tracking-wider">Turnaround</span>
                  <span className="text-brand-dark font-bold block mt-0.5">{leadTime}</span>
                </div>
                <div>
                  <Award className="w-5 h-5 mx-auto text-neonGreen mb-2" />
                  <span className="block text-[9px] uppercase tracking-wider">Design Check</span>
                  <span className="text-brand-dark font-bold block mt-0.5">Free</span>
                </div>
                <div>
                  <Building className="w-5 h-5 mx-auto text-neonYellow mb-2" />
                  <span className="block text-[9px] uppercase tracking-wider">Setup Cost</span>
                  <span className="text-emerald-600 font-bold block mt-0.5">₹0</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-5">
              <div className="text-center">
                <span className="text-neonGreen text-[9px] uppercase tracking-widest font-bold block">Partnership</span>
                <h3 className="text-brand-dark font-bold text-lg mt-1">Open for Collaboration</h3>
              </div>

              {formSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h4 className="text-brand-dark font-bold text-sm">Inquiry Sent via WhatsApp!</h4>
                  <p className="text-brand-muted text-xs">Our team will follow up within 24 hours.</p>
                  <ContactButtons className="justify-center" variant="compact" />
                  <button
                    onClick={() => { setFormSubmitted(false); setBrandName(''); setContactInfo('') }}
                    className="w-full mt-3 bg-cream border border-black/5 text-brand-muted text-xs py-2.5 rounded-xl hover:text-brand-dark transition-all cursor-pointer"
                  >
                    New Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-black/5">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Brand / Company Name</label>
                    <input type="text" required value={brandName} onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. Goa Coffee Roasters"
                      className="w-full bg-cream-50 border border-black/8 p-3 rounded-xl text-sm placeholder:text-cream-500 text-brand-dark focus:outline-none focus:border-electricBlue"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Category</label>
                      <select value={vibeCategory} onChange={(e) => setVibeCategory(e.target.value)}
                        className="w-full bg-cream-50 border border-black/8 p-3 rounded-xl text-xs text-brand-dark focus:outline-none focus:border-electricBlue appearance-none cursor-pointer"
                      >
                        <option>Café Takeaways</option>
                        <option>Workstation Sheets</option>
                        <option>College Fest Bundles</option>
                        <option>Brand Merch</option>
                        <option>Packaging Inserts</option>
                        <option>Campaign Drops</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Volume</label>
                      <div className="w-full bg-cream-50 border border-black/8 p-3 rounded-xl text-xs text-neonGreen font-bold text-center">{bulkQty} Assets</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Contact Email or Phone</label>
                    <input type="text" required value={contactInfo} onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="hello@company.com"
                      className="w-full bg-cream-50 border border-black/8 p-3 rounded-xl text-sm placeholder:text-cream-500 text-brand-dark focus:outline-none focus:border-electricBlue"
                    />
                  </div>
                  <button type="submit"
                    className="w-full bg-brand-dark text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-charcoal transition-all cursor-pointer shadow-sticker"
                  >
                    Place B2B Inquiry
                    <Zap className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
