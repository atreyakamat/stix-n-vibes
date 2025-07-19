import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)

function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex flex-col items-center mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="w-full my-12 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating Stickers Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement delay={0}>
              <div className="absolute top-10 left-10 text-4xl opacity-20">🌈</div>
            </FloatingElement>
            <FloatingElement delay={1}>
              <div className="absolute top-20 right-20 text-3xl opacity-20">✨</div>
            </FloatingElement>
            <FloatingElement delay={2}>
              <div className="absolute bottom-20 left-20 text-5xl opacity-20">🎨</div>
            </FloatingElement>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1b0e0f] mb-6 relative z-10 leading-tight">
            About <span className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] bg-clip-text text-transparent">Stix 'N' Vibes</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#974e52] font-bold mb-8 relative z-10">
            Not just stickers. <span className="text-[#e92932]">A whole vibe.</span>
          </p>

          <p className="text-base sm:text-lg text-[#666] max-w-3xl mx-auto leading-relaxed relative z-10 mb-8">
            We're building a universe where self-expression meets aesthetics — one sticker at a time. Whether you're decorating your laptop, branding your cafe, or just feeling a little too much, our designs help you say what words can't.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/collections">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white text-base font-bold leading-normal tracking-[0.015em] hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <span className="truncate">Shop Collections</span>
              </button>
            </Link>
            <Link to="/submit-art">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white border-2 border-[#e92932] text-[#e92932] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#e92932] hover:text-white transition-all duration-300 transform hover:scale-105">
                <span className="truncate">Submit Your Art</span>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Who We Are Section */}
        <motion.section 
          className="w-full my-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b0e0f] mb-6">✨ Who We Are</h2>
            <p className="text-base sm:text-lg text-[#666] max-w-4xl mx-auto leading-relaxed mb-8">
              Stix 'N' Vibes is a Goa-born creative studio making custom stickers, polaroids, and poster drops for people who live loud, love design, and feel deeply.
            </p>
          </div>

          {/* Target Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-white/50"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl mb-4 text-center">📚</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1b0e0f] text-center mb-3">College Students & Journalers</h3>
              <p className="text-sm sm:text-base text-[#666] text-center">Express your thoughts, decorate your space, and make your personality stick.</p>
            </motion.div>

            <motion.div 
              className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-white/50"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl mb-4 text-center">☕</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1b0e0f] text-center mb-3">Cafes & Small Businesses</h3>
              <p className="text-sm sm:text-base text-[#666] text-center">Brand your space with custom designs that reflect your unique vibe and story.</p>
            </motion.div>

            <motion.div 
              className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-white/50"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl mb-4 text-center">💝</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1b0e0f] text-center mb-3">Gifting & Emotional Support</h3>
              <p className="text-sm sm:text-base text-[#666] text-center">Perfect for gifts, branding, and those moments when you need chaotic emotional support.</p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] rounded-2xl p-6 sm:p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg sm:text-xl font-bold">Every sticker is made to vibe — waterproof, aesthetic, and built to last.</p>
          </motion.div>
        </motion.section>

        {/* The Founder Section */}
        <motion.section 
          className="w-full my-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b0e0f] mb-6">Meet the Founder</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-4xl mx-auto">
            {/* Portrait Business Card Style */}
            <motion.div 
              className="bg-gradient-to-br from-white via-[#fef7f7] to-[#fff0f0] p-8 rounded-3xl shadow-2xl border-2 border-[#ff6b9d]/20 max-w-md w-full"
              whileHover={{ 
                scale: 1.02, 
                rotate: 1,
                boxShadow: "0 25px 50px rgba(233, 41, 50, 0.2)"
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#e92932] to-[#ff6b9d] rounded-full flex items-center justify-center text-6xl text-white shadow-lg">
                  🎨
                </div>
                <h3 className="text-2xl font-black text-[#1b0e0f] mb-2">Atreya 🚀</h3>
                <p className="text-[#e92932] font-bold text-lg mb-4">Chaos Creator & Vibe Curator</p>
                <div className="space-y-2 text-sm text-[#666]">
                  <p>📍 Based in Goa, India</p>
                  <p>☕ Caffeine-powered creator</p>
                  <p>🎯 Turning chaos into cool since day one</p>
                </div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg border border-white/50 max-w-md w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 text-[#666] leading-relaxed">
                <p className="text-lg font-semibold text-[#1b0e0f]">Hey there! 👋</p>
                <p>I'm the person behind all this beautiful chaos. Started this journey with a simple idea: what if stickers could tell stories?</p>
                <p>From late-night design sessions to shipping packages worldwide, every sticker carries a piece of Goa's creative energy.</p>
                <p className="text-[#e92932] font-bold">Let's make the world a little more colorful, one sticker at a time! ✨</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Thanks Section */}
        <motion.section 
          className="w-full my-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1b0e0f] mb-6">🫶 Thanks for Sticking With Us</h2>
          <p className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed mb-6">
            This isn't just a shop — it's a community of creatives, journalers, daydreamers, and sticker hoarders.
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-[#e92932] to-[#ff6b9d] bg-clip-text text-transparent">
            You make this chaos beautiful. ✨
          </p>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
