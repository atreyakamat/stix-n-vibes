import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import { motion } from 'framer-motion'

function PortfolioPage() {
  // Collections data
  const collections = [
    {
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
      title: "Laptop Stickers",
      description: "Express your personality with our vibrant laptop sticker collection"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop",
      title: "Wall Stickers",
      description: "Transform your space with decorative wall stickers"
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      title: "Name Stickers",
      description: "Personalized name stickers for all your belongings"
    },
    {
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2670&auto=format&fit=crop",
      title: "Glow-in-the-Dark Stickers",
      description: "Magical stickers that glow in the dark"
    },
    {
      image: "https://images.unsplash.com/photo-1565372677285-9aab26e3e62a?q=80&w=2670&auto=format&fit=crop",
      title: "Vinyl Stickers",
      description: "Durable vinyl stickers for outdoor use"
    },
    {
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2669&auto=format&fit=crop",
      title: "Polaroids",
      description: "Custom polaroid prints for your memories"
    }
  ]

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1">
        {/* Collections Grid Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our diverse range of sticker collections, each designed to bring 
                personality and creativity to your everyday items.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {collections.map((collection, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{collection.title}</h3>
                    <p className="text-gray-600">{collection.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Portfolio Section */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <Portfolio />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default PortfolioPage