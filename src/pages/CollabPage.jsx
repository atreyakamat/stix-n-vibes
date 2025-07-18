import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Icon components
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

const PaletteIcon = ({ size = "24px" }) => (
  <div className="text-[#9b59b6]" data-icon="Palette" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89ZM84,168a12,12,0,1,1,12-12A12,12,0,0,1,84,168Zm12-64a12,12,0,1,1-12-12A12,12,0,0,1,96,104Zm40-32a12,12,0,1,1-12-12A12,12,0,0,1,136,72Zm40,32a12,12,0,1,1-12-12A12,12,0,0,1,176,104Z"/>
    </svg>
  </div>
)

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClasses = "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:scale-105"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white hover:shadow-lg",
    secondary: "bg-white border-2 border-[#e92932] text-[#e92932] hover:bg-[#e92932] hover:text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#e92932]"
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

function CollabPage() {
  const [selectedFilter, setSelectedFilter] = useState('All Posts')
  
  const showcaseItems = [
    {
      id: 1,
      type: 'image',
      title: 'New waterproof drop! ✨ Minimalist and moody.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2670&auto=format&fit=crop',
      artist: '@minimal_maven'
    },
    {
      id: 2,
      type: 'video',
      title: 'Behind-the-scenes chaos: turning late-night doodles into sticker art.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2670&auto=format&fit=crop',
      artist: '@doodle_wizard'
    },
    {
      id: 3,
      type: 'video',
      title: 'Sketch to sticker in 60 seconds: creative time-lapse from our latest drop.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop',
      artist: '@speed_sketcher'
    },
    {
      id: 4,
      type: 'image',
      title: 'Retro-wave reboot: 80s vibes that belong on your water bottle.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670&auto=format&fit=crop',
      artist: '@retro_revival'
    },
    {
      id: 5,
      type: 'image',
      title: 'Nature x nostalgia: outdoor aesthetics with soul.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop',
      artist: '@wild_wanderer'
    },
    {
      id: 6,
      type: 'image',
      title: 'Journal-core: soft stickers that go perfectly with your playlist and breakdowns.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop',
      artist: '@journal_vibes'
    }
  ]

  const filteredItems = selectedFilter === 'All Posts' 
    ? showcaseItems 
    : showcaseItems.filter(item => 
        selectedFilter === '📸 Images' ? item.type === 'image' : item.type === 'video'
      )

  const filterCounts = {
    'All Posts': showcaseItems.length,
    '📸 Images': showcaseItems.filter(item => item.type === 'image').length,
    '🎬 Videos': showcaseItems.filter(item => item.type === 'video').length
  }

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
          {/* Floating Elements Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement delay={0}>
              <div className="absolute top-10 left-10 text-4xl opacity-20">🎨</div>
            </FloatingElement>
            <FloatingElement delay={1}>
              <div className="absolute top-20 right-20 text-3xl opacity-20">✨</div>
            </FloatingElement>
            <FloatingElement delay={2}>
              <div className="absolute bottom-20 left-20 text-5xl opacity-20">🤝</div>
            </FloatingElement>
            <FloatingElement delay={1.5}>
              <div className="absolute top-1/2 right-10 text-3xl opacity-20">🖼️</div>
            </FloatingElement>
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl font-black text-[#1b0e0f] mb-6 relative z-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🎨 <span className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] bg-clip-text text-transparent">Collabs That Stick</span>
          </motion.h1>
          
          <motion.div 
            className="text-lg md:text-xl text-[#666] max-w-4xl mx-auto leading-relaxed relative z-10 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>We team up with indie artists, illustrators, doodle wizards, and chaos creators to bring unique sticker drops to life.</p>
            <p className="text-2xl font-bold text-[#e92932]">Each collab = your art + our vibe → stickers that slap emotionally and visually.</p>
            <p>No limits, no gatekeeping — just expressive design and creators getting the credit (and the love) they deserve.</p>
          </motion.div>
        </motion.div>

        {/* Artist Showcase Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b0e0f] mb-6">�️ Artist Showcase</h2>
            <p className="text-xl text-[#666] max-w-2xl mx-auto">
              Real creators. Real drops. Real messy magic.
            </p>
          </div>

          {/* Content Filter */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-[#e7d0d1]">
              <div className="flex gap-2">
                {Object.entries(filterCounts).map(([filter, count]) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedFilter === filter
                        ? 'bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white shadow-lg'
                        : 'text-[#666] hover:bg-[#f8f9fa] hover:text-[#e92932]'
                    }`}
                  >
                    {filter} ({count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e7d0d1] hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                      <svg className="w-6 h-6 text-[#e92932]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white font-semibold text-sm">{item.artist}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#666] leading-relaxed">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What We Handle Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-[#e7d0d1]">
            <h3 className="text-3xl font-bold text-[#1b0e0f] mb-8 text-center">We Handle Everything</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#e92932]/10 to-[#ff6b9d]/10 hover:from-[#e92932]/20 hover:to-[#ff6b9d]/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">👨‍🎨</div>
                <h4 className="font-bold text-[#1b0e0f] mb-2">Artist Credits</h4>
                <p className="text-[#666] text-sm">Full exposure and proper attribution</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#42c4ef]/10 to-[#9b59b6]/10 hover:from-[#42c4ef]/20 hover:to-[#9b59b6]/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">🖨️</div>
                <h4 className="font-bold text-[#1b0e0f] mb-2">Quality Printing</h4>
                <p className="text-[#666] text-sm">Premium materials and vibrant colors</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#28a745]/10 to-[#42c4ef]/10 hover:from-[#28a745]/20 hover:to-[#42c4ef]/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">📦</div>
                <h4 className="font-bold text-[#1b0e0f] mb-2">Packaging & Shipping</h4>
                <p className="text-[#666] text-sm">From our studio to fan love</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#ff9500]/10 to-[#e92932]/10 hover:from-[#ff9500]/20 hover:to-[#e92932]/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">💰</div>
                <h4 className="font-bold text-[#1b0e0f] mb-2">Revenue Sharing</h4>
                <p className="text-[#666] text-sm">Fair deals and payout options</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="bg-gradient-to-br from-[#e92932] via-[#ff6b9d] to-[#42c4ef] rounded-3xl p-12 text-white text-center shadow-2xl">
            <motion.h2 
              className="text-4xl md:text-5xl font-black mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2 }}
            >
              🤝 Ready to Collaborate?
            </motion.h2>
            <motion.div 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              <p>Got art that deserves to be stuck everywhere?</p>
              <p className="font-bold">Want your designs turned into real, tangible, vibe-heavy stickers?</p>
              <p className="text-lg opacity-90">Let's make cool stuff together.</p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
            >
              <Link to="/contact">
                <Button variant="outline" className="text-xl px-8 py-4 shadow-lg hover:shadow-xl">
                  📧 Get in Touch
                </Button>
              </Link>
              <Link to="/submit-art">
                <Button variant="outline" className="text-xl px-8 py-4 shadow-lg hover:shadow-xl">
                  🎨 Submit Your Art
                </Button>
              </Link>
            </motion.div>
            
            <motion.p 
              className="text-lg opacity-80 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            >
              For partnerships, drop ideas, or full-blown chaos — we're here for it all.
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default CollabPage
