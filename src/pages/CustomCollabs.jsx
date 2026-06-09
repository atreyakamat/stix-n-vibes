import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { Footer } from '../components/Footer'

const collabCases = [
  {
    title: "Goa Coffee Roasters",
    category: "Café Branding",
    desc: "500 die-cut logo stickers for takeaway cups and bags. Scratch-resistant, coffee-spill-proof vinyl that survived the monsoon season.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
    stats: "500 units · Die-Cut · Matte"
  },
  {
    title: "CodeBrew Hackathon",
    category: "Event Stickers",
    desc: "1000 holographic sticker packs for India's largest campus hackathon. Distributed as swag bags, laptop decals, and badge inserts.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
    stats: "1000 units · Kiss-Cut · Holographic"
  },
  {
    title: "Surf Shack Goa",
    category: "Outdoor Merch",
    desc: "UV-protected weatherproof stickers for surfboards, helmets, and beach equipment. Survived salt water, sand, and intense tropical sun.",
    img: "https://images.unsplash.com/photo-1502680390548-bdbac40e4ce5?auto=format&fit=crop&q=80&w=600",
    stats: "250 units · Die-Cut · Extra Glossy"
  },
  {
    title: "Artisan Pottery Studio",
    category: "Packaging Labels",
    desc: "Custom packaging seals and thank-you inserts for handmade pottery shipped across India. Kraft paper finish with gold foil accents.",
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600",
    stats: "800 units · Kiss-Cut · Kraft Paper"
  },
  {
    title: "Indie Music Fest",
    category: "Festival Drops",
    desc: "Limited-edition artist collaboration stickers sold at merch booths. Each design by a different Goan illustrator — collectible and traded on-site.",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=600",
    stats: "2000 units · Die-Cut · Matte"
  },
  {
    title: "Tech Startup Bundle",
    category: "Corporate Gifting",
    desc: "Branded laptop sticker sheets for a Bangalore-based SaaS startup's employee onboarding kits. Zero-residue backing for premium hardware.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
    stats: "300 sheets · Custom · Matte"
  },
]

export default function CustomCollabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] select-none">
      
      {/* Header — Dark */}
      <section className="bg-[#050505] pt-32 pb-16 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-electricBlue text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-6">
            Past Collaborations
          </span>
          
          <WordsPullUpMultiStyle
            segments={[
              { text: "Stickers we've made for ", className: "text-[#E1E0CC] font-normal" },
              { text: "amazing brands ", className: "italic font-serif text-electricBlue" },
              { text: "and events.", className: "text-[#E1E0CC] font-normal" }
            ]}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] max-w-5xl mx-auto mb-6"
          />

          <p className="text-primary/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From Goan cafés to tech hackathons, here's a showcase of our proudest collaborations. Each project was custom-designed, printed, and delivered with care.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collabCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#101010] border border-white/5 hover:border-electricBlue/20 rounded-2xl overflow-hidden group transition-all duration-500"
            >
              {/* Image with caption overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 group-hover:brightness-[0.8] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-electricBlue/90 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {item.category}
                </div>

                {/* Title overlay on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight">{item.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                    {item.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-[#101010] border border-white/5 rounded-3xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to be our next case study?
          </h3>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            Whether you're a café, startup, event organizer, or creative brand — let's make something that sticks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/brands">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-[#DEDBC8] text-black font-bold text-sm px-8 py-3.5 rounded-full flex items-center justify-center gap-3 cursor-pointer"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/inquiries">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-transparent text-[#E1E0CC] font-bold text-sm px-8 py-3.5 rounded-full border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
