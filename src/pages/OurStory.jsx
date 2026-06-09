import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Terminal, Flame, Box, HeartHandshake } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { Footer } from '../components/Footer'

export default function OurStory() {
  const introRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: true, margin: "-100px" });

  const foundersRef = useRef(null);
  const isFoundersInView = useInView(foundersRef, { once: true, margin: "-100px" });

  const workflowRef = useRef(null);
  const isWorkflowInView = useInView(workflowRef, { once: true, margin: "-100px" });

  const audiences = [
    {
      icon: "📚",
      title: "College & Journalers",
      desc: "Express your thoughts, decorate your hardware, and make your visual personality stick."
    },
    {
      icon: "☕",
      title: "Cafés & Small Brands",
      desc: "Brand your environment with custom layouts that reflect your unique vibe and story."
    },
    {
      icon: "💥",
      title: "Gifting & Support",
      desc: "Perfect for gifts, drops, and those moments when you need chaotic emotional support."
    }
  ];

  const workflowSteps = [
    {
      icon: <Terminal className="w-6 h-6 text-electricBlue" />,
      title: "1. Design",
      desc: "Sparked by memes, late-night hacks, and Goan sunsets. We transform everyday inspirations into premium digital relics ready for print."
    },
    {
      icon: <Flame className="w-6 h-6 text-neonGreen" />,
      title: "2. Print",
      desc: "Printed onto heavyweight, ultra-durable vinyl coated in scratch-resistant UV matte shields. Built to withstand moisture, sun, and active use."
    },
    {
      icon: <Box className="w-6 h-6 text-neonYellow" />,
      title: "3. Pack",
      desc: "Carefully packaged by hand (with a few surprise elements thrown in). Dispatched from our headquarters direct to your doorstep."
    }
  ];

  return (
    <div className="min-h-screen select-none">
      
      {/* Hero Header — Beige */}
      <section className="bg-beige pt-32 pb-20 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-gray-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-6">
            Who We Are
          </span>
          
          <WordsPullUpMultiStyle
            segments={[
              { text: "Not just stickers. ", className: "text-gray-900 font-normal" },
              { text: "A whole physical vibe. ", className: "italic font-serif text-electricBlue" },
              { text: "Made in Goa.", className: "text-gray-900 font-normal" }
            ]}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] max-w-5xl mx-auto mb-6"
          />

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Stix 'N' Vibes is a Goa-born creative studio making custom stickers, polaroids, and poster drops for people who live loud, love high-end design, and feel deeply. We are building a universe where self-expression meets raw physical aesthetics.
          </p>
        </div>
      </section>

      {/* Target Audiences — White */}
      <section ref={introRef} className="bg-white py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((aud, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-beige border border-black/5 hover:border-black/10 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              <span className="text-4xl block mb-4">{aud.icon}</span>
              <h4 className="text-gray-900 font-bold text-base sm:text-lg mb-2">{aud.title}</h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{aud.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founders Section — Beige */}
      <section ref={foundersRef} className="bg-beige py-16 sm:py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-400 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold block mb-3">
              Creative Directors
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Meet the Founders</h2>
          </div>

          {/* Founder Cards */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            
            {/* Founder 1: Atreya Kamat */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -1 }}
              animate={isFoundersInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className="bg-white border border-black/5 rounded-3xl p-8 w-full md:w-80 h-[420px] flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-4 left-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity">🚀</div>
              
              <div className="text-center relative z-10">
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOtt%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85" 
                  alt="Atreya Kamat Portrait" 
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover border-2 border-beige shadow-lg mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Atreya Kamat</h3>
                <span className="text-electricBlue text-[10px] font-bold uppercase tracking-wider block mb-1">
                  The Chaos Wizard
                </span>
                <div className="h-px w-10 bg-electricBlue/30 mx-auto" />
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-3 py-4 relative z-10">
                <div className="bg-beige border border-black/5 rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Engineering student by day 📚, startup ninja by night 🥷. Turns coffee into elegant production layouts.
                  </p>
                </div>
                <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                  Chaos ➔ Structure
                </div>
              </div>

              <div className="bg-beige border border-black/5 text-gray-600 py-2 rounded-xl text-center text-[11px] font-bold relative z-10">
                "Ideas stick — literally!" 🎯
              </div>
            </motion.div>

            {/* Founder 2: Kritik Sawant */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 1 }}
              animate={isFoundersInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className="bg-white border border-black/5 rounded-3xl p-8 w-full md:w-80 h-[420px] flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-4 left-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity">🎬</div>

              <div className="text-center relative z-10">
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOtt%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85" 
                  alt="Kritik Sawant Portrait" 
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover border-2 border-beige shadow-lg mx-auto mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Kritik Sawant</h3>
                <span className="text-neonGreen text-[10px] font-bold uppercase tracking-wider block mb-1">
                  The Vibe Doctor
                </span>
                <div className="h-px w-10 bg-neonGreen/30 mx-auto" />
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-3 py-4 relative z-10">
                <div className="bg-beige border border-black/5 rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Future doctor 👨‍⚕️, current cinema critic 🍿. Handles client support and drop sanity while studying medicine.
                  </p>
                </div>
                <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                  People Person
                </div>
              </div>

              <div className="bg-beige border border-black/5 text-gray-600 py-2 rounded-xl text-center text-[11px] font-bold relative z-10">
                "Science in books. Stickers in wild." 🔬
              </div>
            </motion.div>
          </div>

          {/* Partnership Story */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isFoundersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-12 bg-white border border-black/5 rounded-[2rem] p-6 sm:p-8 text-center relative overflow-hidden group shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
              <HeartHandshake className="w-5 h-5 text-electricBlue" />
              <span>The Dynamic Duo</span>
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              One builds software structures with pure tech engineering precision 🔧, the other directs vibes, customer care, and narrative operations 🩺. Together, they balance organized systems and creative magic.
              <br />
              <span className="text-[10px] text-gray-400 block mt-4 uppercase tracking-widest font-mono">Powered by friendship, fueled by passion</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow — Dark */}
      <section ref={workflowRef} className="bg-black py-16 sm:py-24 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold block mb-3">
              Workflow Logic
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1E0CC] tracking-tight">How we construct artifacts.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isWorkflowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#101010] border border-white/5 rounded-2xl p-6 relative group hover:border-white/10 transition-colors"
              >
                <div className="size-10 bg-[#161616] border border-white/10 rounded flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h4 className="text-[#E1E0CC] font-bold text-sm sm:text-base mb-2">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Goa Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isWorkflowInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-primary/70 text-xs sm:text-sm italic font-serif">
              "Everything is made right here in Goa — inspired by sunsets, beach culture, and creative chaos. You make this chaos beautiful." 🏖️
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
