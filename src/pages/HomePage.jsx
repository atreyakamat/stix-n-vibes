import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1">
        <div className="flex flex-col md:flex-row px-4 md:px-10 py-10 gap-6">
          {/* Hero Section */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-[#181111]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Personalize Your Space with <span className="text-[#e92932]">Stix N Vibes</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-[#886364] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Creative stickers, polaroid prints, and custom designs to express your unique style
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link 
                to="/projects"
                className="bg-[#e92932] hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-medium"
              >
                Browse Products
              </Link>
              
              <Link 
                to="/contact"
                className="border-2 border-[#e92932] text-[#e92932] hover:bg-[#e9293211] px-6 py-3 rounded-full font-medium"
              >
                Custom Order
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden h-[400px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDadMGajpKCnV_QpEkz1a9nNtVp5W8zJeNX-ZMsDwBeNR_jNA6IU8QVvIWjEdHSAv4DIOFYNFDPD4B4Ka8v90kZkMG8GODLdat-HZlh_VD3GL4VU8xyyyTlL3ZzKffsA6LAxk_opiO2e9pqUJYgROE5aMiI_j-Li3-XHUgy1DRWdzu4mnnJQvC9uEJ__sQ8bLpmU4liB6-BjOd-Oz6gmMJFtp0Ep_zJA2Cgp3R31itDkpx5bG0zwsRRk9cWCAORW3_nXBUHj6UziuE" 
                alt="Stix N Vibes Showcase" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Features Section */}
        <div className="bg-[#f4f0f0] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-[#181111]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Why Choose Stix N Vibes
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#181111]">Custom Designs</h3>
                <p className="text-[#886364]">Personalized stickers and polaroids tailored to your unique style and preferences.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#181111]">Premium Quality</h3>
                <p className="text-[#886364]">High-quality materials ensure your stickers and prints last longer with vibrant colors.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#181111]">Fast Delivery</h3>
                <p className="text-[#886364]">Quick turnaround times and reliable shipping to get your products to you faster.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage