import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Coffee, Building, ShieldCheck, Truck, HelpCircle, Briefcase, Award, Check } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { Footer } from '../components/Footer'

export default function ForBrands() {
  const [bulkQty, setBulkQty] = useState(1000);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [brandName, setBrandName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [vibeCategory, setVibeCategory] = useState("Café Takeaways");

  const leadTime = bulkQty >= 5000 ? "5-7 business days" : "3-5 business days";

  const collabs = [
    { title: "Café Takeaway Stickers", desc: "Brand your counter tables, take-away cups, and packaging boxes. Our custom vinyl is scratchproof and thermal-resistant.", icon: <Coffee className="w-6 h-6 text-electricBlue" />, tag: "Takeaway Branding" },
    { title: "Laptops & Workstation Sheets", desc: "Bespoke laptop sticker sheets, startup retreat bundles, and corporate giveaways with zero-residue backings.", icon: <Briefcase className="w-6 h-6 text-neonGreen" />, tag: "Corporate Gifting" },
    { title: "College Fest Bundles", desc: "Equip your university events, clubs, and college fests with high-volume, premium custom shapes.", icon: <Award className="w-6 h-6 text-neonYellow" />, tag: "Fest Bundles" },
    { title: "Brand Merch Stickers", desc: "Turn your vector art and brand logos into collectable retail gear with buttery matte inks and precision-cut shapes.", icon: <Sparkles className="w-6 h-6 text-electricBlue" />, tag: "Brand Merch" },
    { title: "Packaging Inserts", desc: "Custom logo sealers and thank-you card inserts that build delight from the very second your client unboxes.", icon: <ShieldCheck className="w-6 h-6 text-neonGreen" />, tag: "Packaging Seals" },
    { title: "Campaign Drops", desc: "Curate limited-edition sticker drops, guerilla promotions, and branding collaborations built for Goan monsoons.", icon: <Truck className="w-6 h-6 text-neonYellow" />, tag: "Campaign Drops" }
  ];

  const perks = [
    "Quick turnaround — 3-7 business days",
    "Eco-friendly, water-based inks",
    "Your brand logo on our base designs",
    "Custom sizes from 1\" to 12\"",
    "Bulk pricing with volume discounts",
    "Dedicated personal support"
  ];

  return (
    <div className="min-h-screen select-none bg-black text-[#E1E0CC]">
      
      {/* Header — Dark */}
      <section className="bg-[#050505] pt-32 pb-16 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-neonGreen text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-6">
            B2B Collaborations
          </span>
          
          <WordsPullUpMultiStyle
            segments={[
              { text: "Bespoke branding assets for ", className: "text-[#E1E0CC] font-normal" },
              { text: "forward-thinking brands. ", className: "italic font-serif text-electricBlue" },
              { text: "We are open for collaboration.", className: "text-[#E1E0CC] font-normal" }
            ]}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] max-w-5xl mx-auto mb-6"
          />

          <p className="text-primary/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Stix and Vibes is actively expanding corporate sticker making and partnership drops for cafes, startups, and events.
          </p>
        </div>
      </section>

      {/* Perks List */}
      <section className="bg-[#080808] py-12 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 text-sm"
            >
              <Check className="w-4 h-4 text-neonGreen shrink-0" />
              <span className="text-gray-300 text-xs">{perk}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Collabs Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collabs.map((col, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-[#101010] border border-white/5 hover:border-electricBlue/20 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-500"
          >
            <div>
              <span className="text-gray-500 font-mono text-[9px] uppercase tracking-widest block mb-4">{col.tag}</span>
              <div className="size-12 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {col.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{col.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{col.desc}</p>
            </div>
            <div className="mt-8 border-t border-white/5 pt-4 text-xs font-mono text-gray-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neonGreen" />
              <span>Premium Goan Quality</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Bulk Quote Estimator */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101010] border border-white/5 rounded-[2.5rem] overflow-hidden mx-6 mb-16">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-electricBlue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="lg:col-span-7 space-y-8 p-6 sm:p-10">
          <div className="space-y-2">
            <span className="text-neonGreen text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold block">Volume Configuration</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Select B2B asset quantities.</h2>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-baseline font-mono text-xs text-gray-500">
              <span>TARGET QUANTITY:</span>
              <span className="text-[#DEDBC8] text-lg font-bold font-sans">{bulkQty} brand assets</span>
            </div>
            <input type="range" min="500" max="10000" step="500" value={bulkQty}
              onChange={(e) => setBulkQty(parseInt(e.target.value))}
              className="w-full accent-[#DEDBC8] bg-neutral-800 h-1.5 rounded-full cursor-pointer" />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>500</span><span>2500</span><span>5000</span><span>10000</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 text-center text-xs font-mono text-gray-400">
            <div>
              <Truck className="w-5 h-5 mx-auto text-electricBlue mb-2" />
              <span className="block text-[9px] text-gray-600">TURNAROUND</span>
              <span className="text-white font-bold block mt-0.5">{leadTime}</span>
            </div>
            <div>
              <Award className="w-5 h-5 mx-auto text-neonGreen mb-2" />
              <span className="block text-[9px] text-gray-600">DESIGN CHECK</span>
              <span className="text-white font-bold block mt-0.5">Free</span>
            </div>
            <div>
              <Building className="w-5 h-5 mx-auto text-neonYellow mb-2" />
              <span className="block text-[9px] text-gray-600">SETUP COST</span>
              <span className="text-neonGreen font-bold block mt-0.5">₹0</span>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="lg:col-span-5 bg-black/40 border border-white/5 rounded-2xl p-8 text-center space-y-6">
          <div>
            <div className="size-12 bg-neutral-900 border border-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto text-xl shadow-lg">🏢</div>
            <span className="text-neonGreen text-[9px] uppercase font-mono tracking-widest block font-bold">Partnership</span>
            <h3 className="text-white font-bold text-lg mt-2">Open for Collaborations</h3>
          </div>

          {formSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6 space-y-4">
              <div className="size-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-2xl shadow-xl">✔</div>
              <h4 className="text-[#E1E0CC] font-bold text-sm uppercase tracking-wider">Inquiry Received!</h4>
              <button type="button"
                onClick={() => {
                  const text = `Hey Stix and Vibes! ⚡ B2B partnership inquiry:\n\n- Brand: ${brandName}\n- Category: ${vibeCategory}\n- Quantity: ${bulkQty}\n- Contact: ${contactInfo}\n\nLet's build! 🌴`;
                  navigator.clipboard.writeText(text).then(() => setCopied(true)).catch(() => {});
                }}
                className={`w-full py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  copied ? 'bg-emerald-500 text-black' : 'bg-[#DEDBC8] text-black hover:bg-white'
                }`}>
                <span>{copied ? "📋 Copied!" : "Copy Inquiry Specs"}</span>
              </button>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mt-4">
                <a href="https://wa.me/917744020601" target="_blank" rel="noopener noreferrer" className="bg-[#161616] border border-emerald-500/20 p-2.5 rounded-lg text-center hover:bg-[#202020] text-emerald-400 transition-all block">💬 WhatsApp</a>
                <a href="mailto:hello@stixnvibes.com" className="bg-[#161616] border border-[#DEDBC8]/20 p-2.5 rounded-lg text-center hover:bg-[#202020] text-amber-100 transition-all block">✉️ Email</a>
              </div>
              <button onClick={() => { setFormSubmitted(false); setBrandName(""); setContactInfo(""); setCopied(false); }}
                className="w-full mt-4 bg-neutral-900 border border-white/5 text-gray-500 text-[10px] font-mono py-2 rounded-lg hover:text-white transition-all uppercase cursor-pointer">
                New Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (!brandName || !contactInfo) return; setFormSubmitted(true); setCopied(false); }}
              className="space-y-4 pt-4 border-t border-white/5 text-left relative z-40">
              <div className="space-y-1">
                <label className="text-[9px] uppercase font-mono text-gray-500 block">Brand / Company Name</label>
                <input type="text" required value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder="E.G. GOA COFFEE ROASTERS"
                  className="w-full bg-[#161616] border border-white/10 p-3 rounded-lg text-xs font-mono placeholder:text-gray-800 text-[#E1E0CC] focus:outline-none focus:border-electricBlue" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-mono text-gray-500 block">Category</label>
                  <select value={vibeCategory} onChange={(e) => setVibeCategory(e.target.value)}
                    className="w-full bg-[#161616] border border-white/10 p-3 rounded-lg text-xs font-mono text-[#E1E0CC] focus:outline-none focus:border-electricBlue appearance-none">
                    <option value="Café Takeaways">Café Takeaways</option>
                    <option value="Workstation Sheets">Workstation Sheets</option>
                    <option value="College Fest Bundles">Fest Bundles</option>
                    <option value="Brand Merch">Brand Merch</option>
                    <option value="Packaging Inserts">Packaging Seals</option>
                    <option value="Campaign Drops">Campaign Drops</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-mono text-gray-500 block">Volume</label>
                  <div className="w-full bg-[#161616]/40 border border-white/10 p-3 rounded-lg text-xs font-mono text-neonGreen font-bold text-center">{bulkQty} Assets</div>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] uppercase font-mono text-gray-500 block">Contact Email or Phone</label>
                <input type="text" required value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} placeholder="HELLO@COMPANY.COM"
                  className="w-full bg-[#161616] border border-white/10 p-3 rounded-lg text-xs font-mono placeholder:text-gray-800 text-[#E1E0CC] focus:outline-none focus:border-electricBlue" />
              </div>
              <button type="submit"
                className="w-full mt-2 bg-[#DEDBC8] text-black font-bold uppercase tracking-wider text-xs py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 cursor-pointer select-none">
                Place B2B Vibe ⚡
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
