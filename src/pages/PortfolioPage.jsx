import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 text-4xl opacity-20">🎨</div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-40 right-20 text-3xl opacity-30">✨</div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-40 left-20 text-5xl opacity-20">🖼️</div>
        </FloatingElement>
        <FloatingElement delay={3}>
          <div className="absolute bottom-60 right-10 text-4xl opacity-25">💫</div>
        </FloatingElement>
        <FloatingElement delay={0.5}>
          <div className="absolute top-60 left-1/2 text-3xl opacity-15">🌟</div>
        </FloatingElement>
        <FloatingElement delay={2.5}>
          <div className="absolute top-80 right-1/3 text-4xl opacity-20">🎭</div>
        </FloatingElement>
      </div>

      <Header />
      
      {/* Beautiful Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#e92932] via-[#ff6b9d] to-[#42c4ef] bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our creative journey through stunning designs, collaborative projects, and artistic expressions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                🎨 Creative Works
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                ✨ Featured Projects
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                🖼️ Art Gallery
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Portfolio Content Coming Soon */}
        <div className="text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Portfolio Coming Soon
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We're curating our best work to showcase here. Stay tuned for an amazing collection!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300">
                Notify Me When Ready
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PortfolioPage
