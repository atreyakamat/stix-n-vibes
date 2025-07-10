import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function ProductsPage() {
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

  const products = [
    {
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
      title: "Laptop Sticker Pack 1",
      price: "₹299"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop",
      title: "Wall Sticker Set 2",
      price: "₹399"
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      title: "Custom Name Stickers",
      price: "₹199"
    },
    {
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2670&auto=format&fit=crop",
      title: "Glow-in-the-Dark Stars",
      price: "₹249"
    },
    {
      image: "https://images.unsplash.com/photo-1565372677285-9aab26e3e62a?q=80&w=2670&auto=format&fit=crop",
      title: "Vinyl Decal - Mountain Range",
      price: "₹349"
    },
    {
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2669&auto=format&fit=crop",
      title: "Polaroid Prints - Summer Memories",
      price: "₹149"
    }
  ]

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fcf8f8] overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          {/* Hero Section */}
          <motion.div 
            className="@container mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")'
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Stix N Vibes
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Express yourself with our unique collection of stickers and polaroids. From laptop decals to wall art, find the perfect way to showcase your style.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e92932] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#d91922] transition-colors">
                  <span className="truncate">Shop Now</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Collections Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Collections</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {collections.map((collection, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col gap-3 pb-3 cursor-pointer group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:shadow-lg transition-shadow duration-300"
                    style={{ backgroundImage: `url("${collection.image}")` }}
                  />
                  <div>
                    <p className="text-[#1b0e0f] text-base font-medium leading-normal">{collection.title}</p>
                    <p className="text-[#974e52] text-sm font-normal leading-normal">{collection.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Products Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Products</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {products.map((product, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col gap-3 pb-3 cursor-pointer group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:shadow-lg transition-shadow duration-300"
                    style={{ backgroundImage: `url("${product.image}")` }}
                  />
                  <div>
                    <p className="text-[#1b0e0f] text-base font-medium leading-normal">{product.title}</p>
                    <p className="text-[#e92932] text-sm font-bold leading-normal">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Custom Design Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Design Your Own</h2>
            
            {/* Form Fields */}
            <div className="space-y-4 px-4">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1b0e0f] text-base font-medium leading-normal pb-2">Type of Paper</p>
                  <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0f] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 placeholder:text-[#974e52] p-[15px] text-base font-normal leading-normal">
                    <option value="">Select Paper Type</option>
                    <option value="matte">Matte Finish</option>
                    <option value="glossy">Glossy Finish</option>
                    <option value="transparent">Transparent</option>
                  </select>
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1b0e0f] text-base font-medium leading-normal pb-2">Quantity</p>
                  <input
                    placeholder="Enter Quantity"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0f] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 placeholder:text-[#974e52] p-[15px] text-base font-normal leading-normal"
                    type="number"
                    min="1"
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#1b0e0f] text-base font-medium leading-normal pb-2">Type of Cut</p>
                  <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0f] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 placeholder:text-[#974e52] p-[15px] text-base font-normal leading-normal">
                    <option value="">Select Cut Type</option>
                    <option value="die-cut">Die Cut</option>
                    <option value="square">Square Cut</option>
                    <option value="circle">Circle Cut</option>
                  </select>
                </label>
              </div>
            </div>

            {/* Upload Section */}
            <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#e7d0d1] px-6 py-14 hover:border-[#e92932] transition-colors duration-300">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-[#1b0e0f] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Upload Your Design</p>
                  <p className="text-[#1b0e0f] text-sm font-normal leading-normal max-w-[480px] text-center">Create custom stickers and polaroids with your own images.</p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f3e7e8] text-[#1b0e0f] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e7d0d1] transition-colors">
                  <span className="truncate">Upload Now</span>
                </button>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex px-4 py-3 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e92932] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d91922] transition-colors">
                <span className="truncate">Chat with us on WhatsApp</span>
              </button>
            </div>
          </motion.section>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ProductsPage