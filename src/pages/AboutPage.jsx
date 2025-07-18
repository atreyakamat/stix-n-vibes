import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Icon components
const StickerIcon = ({ size = "24px" }) => (
  <div className="text-[#e92932]" data-icon="Sticker" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M168,32H88A56,56,0,0,0,32,88v80a56,56,0,0,0,56,56h80a56,56,0,0,0,56-56V88A56,56,0,0,0,168,32Zm40,136a40,40,0,0,1-40,40H88a40,40,0,0,1-40-40V88A40,40,0,0,1,88,48h80a40,40,0,0,1,40,40Z"/>
    </svg>
  </div>
)

const HeartIcon = ({ size = "24px" }) => (
  <div className="text-[#ff6b9d]" data-icon="Heart" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
    </svg>
  </div>
)

const SparkleIcon = ({ size = "24px" }) => (
  <div className="text-[#42c4ef]" data-icon="Sparkle" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" />
    </svg>
  </div>
)

const PencilIcon = ({ size = "24px" }) => (
  <div className="text-[#9b59b6]" data-icon="Pencil" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z" />
    </svg>
  </div>
)

const PrinterIcon = ({ size = "24px" }) => (
  <div className="text-[#28a745]" data-icon="Printer" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z" />
    </svg>
  </div>
)

const PackageIcon = ({ size = "24px" }) => (
  <div className="text-[#ff9500]" data-icon="Package" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" />
    </svg>
  </div>
)

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClasses = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 text-base font-bold leading-normal tracking-[0.015em] grow transition-all duration-300 transform hover:scale-105"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white hover:shadow-lg",
    secondary: "bg-white border-2 border-[#e92932] text-[#e92932] hover:bg-[#e92932] hover:text-white"
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      <span className="truncate">{children}</span>
    </button>
  )
}

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
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
      
      <main className="flex flex-col items-center mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
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

          <motion.h1 
            className="text-5xl md:text-7xl font-black text-[#1b0e0f] mb-6 relative z-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] bg-clip-text text-transparent">Stix 'N' Vibes</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-[#974e52] font-bold mb-8 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Not just stickers. <span className="text-[#e92932]">A whole vibe.</span>
          </motion.p>

          <motion.p 
            className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We're building a universe where self-expression meets aesthetics — one sticker at a time. Whether you're decorating your laptop, branding your cafe, or just feeling a little too much, our designs help you say what words can't.
          </motion.p>
        </motion.div>

        {/* Who We Are Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1b0e0f] mb-6">✨ Who We Are</h2>
            <p className="text-lg text-[#666] max-w-4xl mx-auto leading-relaxed mb-8">
              Stix 'N' Vibes is a Goa-born creative studio making custom stickers, polaroids, and poster drops for people who live loud, love design, and feel deeply.
            </p>
          </div>

          {/* Target Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7d0d1] hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-5xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold text-[#1b0e0f] text-center mb-3">College Students & Journalers</h3>
              <p className="text-[#666] text-center">Express your thoughts, decorate your space, and make your personality stick.</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7d0d1] hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-5xl mb-4 text-center">☕</div>
              <h3 className="text-xl font-bold text-[#1b0e0f] text-center mb-3">Cafes & Small Businesses</h3>
              <p className="text-[#666] text-center">Brand your space with custom designs that reflect your unique vibe and story.</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7d0d1] hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-5xl mb-4 text-center">💝</div>
              <h3 className="text-xl font-bold text-[#1b0e0f] text-center mb-3">Gifting & Emotional Support</h3>
              <p className="text-[#666] text-center">Perfect for gifts, branding, and those moments when you need chaotic emotional support.</p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 }}
          >
            <p className="text-xl font-bold">Every sticker is made to vibe — waterproof, aesthetic, and built to last.</p>
          </motion.div>
        </motion.section>

        {/* Meet the Founders Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1b0e0f] mb-6">🧠 Meet the Founders</h2>
          </div>

          {/* Atreya Kamat */}
          <motion.div 
            className="bg-white rounded-3xl p-8 mb-8 shadow-lg border border-[#e7d0d1] hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-[#e92932] to-[#ff6b9d] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                AK
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#1b0e0f] mb-2">Atreya Kamat</h3>
                <p className="text-[#974e52] text-lg mb-4 font-semibold">Engineer. Entrepreneur. Chaos-turned-structure guy.</p>
                <p className="text-[#666] leading-relaxed mb-4">
                  Atreya's the builder brain — juggling businesses, systems, and sticker drop strategies while being a student himself.
                </p>
                <div className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white px-6 py-3 rounded-full inline-block font-bold">
                  "I make ideas stick — literally."
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kritik Sawant */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-lg border border-[#e7d0d1] hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-[#42c4ef] to-[#9b59b6] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                KS
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#1b0e0f] mb-2">Kritik Sawant</h3>
                <p className="text-[#974e52] text-lg mb-4 font-semibold">MBBS student at GMC Goa. Movie nerd. People-person.</p>
                <p className="text-[#666] leading-relaxed mb-4">
                  Kritik handles day-to-day vibes, customer chaos, and drop sanity — all while studying medicine.
                </p>
                <div className="bg-gradient-to-r from-[#42c4ef] to-[#9b59b6] text-white px-6 py-3 rounded-full inline-block font-bold">
                  "Science in the books. Stickers in the wild."
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* How We Make It Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1b0e0f] mb-6">🛠 How We Make It</h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-[#e92932] via-[#ff6b9d] to-[#42c4ef] rounded-full hidden md:block"></div>
            
            <div className="space-y-8">
              {/* Design Step */}
              <motion.div 
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#9b59b6] to-[#e92932] rounded-full flex items-center justify-center shadow-lg z-10">
                  <PencilIcon size="32px" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e7d0d1] flex-1 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#1b0e0f] mb-3">Design</h3>
                  <p className="text-[#666] text-lg leading-relaxed">
                    Sparked by memes, moments, and late-night ideas. We transform everyday inspiration into extraordinary designs.
                  </p>
                </div>
              </motion.div>

              {/* Print Step */}
              <motion.div 
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#28a745] to-[#42c4ef] rounded-full flex items-center justify-center shadow-lg z-10">
                  <PrinterIcon size="32px" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e7d0d1] flex-1 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#1b0e0f] mb-3">Print</h3>
                  <p className="text-[#666] text-lg leading-relaxed">
                    On durable waterproof or paper materials with vibrant colors. Quality that matches your vibe and lasts through adventures.
                  </p>
                </div>
              </motion.div>

              {/* Pack Step */}
              <motion.div 
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff9500] to-[#e92932] rounded-full flex items-center justify-center shadow-lg z-10">
                  <PackageIcon size="32px" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e7d0d1] flex-1 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#1b0e0f] mb-3">Pack</h3>
                  <p className="text-[#666] text-lg leading-relaxed">
                    Each order is carefully packed with care (and maybe a surprise or two). Ready to bring joy to your doorstep.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.4 }}
          >
            <p className="text-xl text-[#666] font-semibold bg-gradient-to-r from-[#e92932] to-[#ff6b9d] bg-clip-text text-transparent">
              Everything is made right here in Goa — inspired by sunsets, culture, and creative chaos.
            </p>
          </motion.div>
        </motion.section>

        {/* Made in Goa Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div 
              className="aspect-[2/1] bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop")'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-8">
                  <motion.h2 
                    className="text-5xl md:text-6xl font-black mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 3.8 }}
                  >
                    Made in <span className="text-yellow-400">Goa</span> 🏖️
                  </motion.h2>
                  <motion.p 
                    className="text-xl md:text-2xl font-medium max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                  >
                    Inspired by sunsets, culture, and creative chaos
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Work With Us Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
        >
          <div className="bg-gradient-to-br from-[#e92932] via-[#ff6b9d] to-[#42c4ef] rounded-3xl p-12 text-white text-center shadow-2xl">
            <motion.h2 
              className="text-4xl md:text-5xl font-black mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 4.4 }}
            >
              🤝 Work With Us
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.6 }}
            >
              Want your own design? A custom polaroid? Branding stickers for your cafe or event?
              <br />
              <span className="font-bold">We love collabs, commissions, and cool ideas.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.8 }}
            >
              <Link to="/contact">
                <Button variant="secondary" className="text-xl px-8 py-4 shadow-lg hover:shadow-xl">
                  Start Your Custom Order →
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Thanks Section */}
        <motion.section 
          className="w-full py-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-[#1b0e0f] mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 5.2 }}
          >
            🫶 Thanks for Sticking With Us
          </motion.h2>
          <motion.p 
            className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.4 }}
          >
            This isn't just a shop — it's a community of creatives, journalers, daydreamers, and sticker hoarders.
          </motion.p>
          <motion.p 
            className="text-2xl font-bold bg-gradient-to-r from-[#e92932] to-[#ff6b9d] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5.6 }}
          >
            You make this chaos beautiful. ✨
          </motion.p>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage