import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Terminal, Flame, Package, HeartHandshake, GraduationCap, Coffee, Gift } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Footer } from '../components/Footer'
import { PageMeta } from '../components/PageMeta'

const audiences = [
  {
    icon: GraduationCap,
    title: 'College & Journalers',
    desc: 'Express your thoughts, decorate your hardware, and make your visual personality stick.',
    accent: 'text-electricBlue',
  },
  {
    icon: Coffee,
    title: 'Cafés & Small Brands',
    desc: 'Brand your environment with custom layouts that reflect your unique vibe and story.',
    accent: 'text-neonGreen',
  },
  {
    icon: Gift,
    title: 'Gifting & Support',
    desc: 'Perfect for gifts, drops, and those moments when you need chaotic emotional support.',
    accent: 'text-neonYellow',
  },
]

const workflowSteps = [
  {
    icon: Terminal,
    title: '1. Design',
    desc: 'Sparked by memes, late-night hacks, and Goan sunsets. We transform everyday inspirations into premium digital relics ready for print.',
    accent: 'text-electricBlue',
  },
  {
    icon: Flame,
    title: '2. Print',
    desc: 'Printed onto heavyweight, ultra-durable vinyl coated in scratch-resistant UV matte shields. Built for moisture, sun, and active use.',
    accent: 'text-neonGreen',
  },
  {
    icon: Package,
    title: '3. Pack',
    desc: 'Carefully packaged by hand with a few surprise elements. Dispatched from our Goa HQ direct to your doorstep.',
    accent: 'text-neonYellow',
  },
]

export default function OurStory() {
  const introRef = useRef(null)
  const isIntroInView = useInView(introRef, { once: true, margin: '-80px' })

  const foundersRef = useRef(null)
  const isFoundersInView = useInView(foundersRef, { once: true, margin: '-80px' })

  const workflowRef = useRef(null)
  const isWorkflowInView = useInView(workflowRef, { once: true, margin: '-80px' })

  return (
    <div className="min-h-screen select-none">
      <PageMeta title="Our Story" description="The story behind Stix N Vibes — a Goa-based creative sticker studio founded by Atreya Kamat and Kritik Sawant." />
      {/* Header */}
      <section className="bg-cream pt-28 sm:pt-32 pb-12 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeading
            label="Who We Are"
            segments={[
              { text: 'Not just stickers. ', className: 'text-brand-dark font-normal' },
              { text: 'A whole physical vibe. ', className: 'italic font-serif text-electricBlue' },
              { text: 'Made in Goa.', className: 'text-brand-dark font-normal' },
            ]}
            subtitle="Stix N Vibes is a Goa-born creative studio making custom stickers, polaroids, and poster drops for people who live loud, love high-end design, and feel deeply."
            headingSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </div>
      </section>

      {/* Audiences */}
      <section ref={introRef} className="bg-white py-14 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-cream border border-black/5 hover:shadow-card rounded-sticker p-7 text-center transition-all duration-400 group"
              >
                <div className={`w-12 h-12 bg-white border border-black/5 rounded-xl flex items-center justify-center mx-auto mb-4 ${aud.accent} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-brand-dark font-bold text-base mb-2">{aud.title}</h4>
                <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{aud.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Founders */}
      <section ref={foundersRef} className="bg-cream py-16 sm:py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-brand-muted text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold block mb-3">
              Creative Directors
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">Meet the Founders</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            {/* Atreya */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFoundersInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
              className="bg-white border border-black/5 rounded-sticker p-7 w-full md:w-80 flex flex-col justify-between shadow-sticker hover:shadow-sticker-hover transition-all"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cream border-2 border-electricBlue/20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-electricBlue font-serif italic">
                  A
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">Atreya Kamat</h3>
                <span className="text-electricBlue text-[10px] font-bold uppercase tracking-wider block mb-1">The Chaos Wizard</span>
                <div className="h-px w-10 bg-electricBlue/30 mx-auto" />
              </div>
              <div className="bg-cream border border-black/5 rounded-xl p-4 text-center mt-5">
                <p className="text-brand-muted text-xs leading-relaxed">
                  Engineering student by day, startup ninja by night. Turns coffee into elegant production layouts. Chaos to structure.
                </p>
              </div>
              <div className="bg-cream border border-black/5 text-brand-muted py-2 rounded-xl text-center text-[11px] font-semibold mt-3">
                "Ideas stick — literally!"
              </div>
            </motion.div>

            {/* Kritik */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFoundersInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
              className="bg-white border border-black/5 rounded-sticker p-7 w-full md:w-80 flex flex-col justify-between shadow-sticker hover:shadow-sticker-hover transition-all"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cream border-2 border-neonGreen/30 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-neonGreen font-serif italic">
                  K
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">Kritik Sawant</h3>
                <span className="text-neonGreen text-[10px] font-bold uppercase tracking-wider block mb-1">The Vibe Doctor</span>
                <div className="h-px w-10 bg-neonGreen/30 mx-auto" />
              </div>
              <div className="bg-cream border border-black/5 rounded-xl p-4 text-center mt-5">
                <p className="text-brand-muted text-xs leading-relaxed">
                  Future doctor, current cinema critic. Handles client support and drop sanity while studying medicine. People person.
                </p>
              </div>
              <div className="bg-cream border border-black/5 text-brand-muted py-2 rounded-xl text-center text-[11px] font-semibold mt-3">
                "Science in books. Stickers in wild."
              </div>
            </motion.div>
          </div>

          {/* Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isFoundersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-3xl mx-auto mt-10 bg-white border border-black/5 rounded-sticker p-7 text-center shadow-sticker"
          >
            <h3 className="text-lg font-bold text-brand-dark mb-3 flex items-center justify-center gap-2">
              <HeartHandshake className="w-5 h-5 text-electricBlue" />
              <span>The Dynamic Duo</span>
            </h3>
            <p className="text-brand-muted text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              One builds software structures with engineering precision, the other directs vibes, customer care, and creative operations. Together, they balance systems and magic.
            </p>
            <span className="text-[10px] text-brand-muted/60 block mt-4 uppercase tracking-widest">
              Powered by friendship, fueled by passion
            </span>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section ref={workflowRef} className="bg-white py-16 sm:py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-brand-muted text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold block mb-3">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">How we craft every sticker.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-cream border border-black/5 rounded-sticker p-6 group hover:shadow-card transition-all"
                >
                  <div className={`w-10 h-10 bg-white border border-black/5 rounded-xl flex items-center justify-center mb-4 ${step.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-brand-dark font-bold text-sm sm:text-base mb-2">{step.title}</h4>
                  <p className="text-brand-muted text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Goa quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isWorkflowInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-14"
          >
            <p className="text-brand-muted/70 text-sm italic font-serif max-w-lg mx-auto">
              "Everything is made right here in Goa — inspired by sunsets, beach culture, and creative chaos. You make this chaos beautiful."
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
