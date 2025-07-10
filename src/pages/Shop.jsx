import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function Shop() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])

  // Filter options for shop
  const filterOptions = [
    'Wall Stickers',
    'Laptop Stickers', 
    'Vinyls',
    'Polaroids',
    'Custom',
    'Mystery Packs'
  ]

  // All products data
  const allProducts = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUDsPG7eVRo4z-TKhCOmE8jsBCLoJSqGoe7_S7NF63ieITFMBcehjeNrDQXV98KeqgxyZGP2IgYsMiW6qyxDGgo7YR9t61DLG_7whwG82HLZvwqc6E_8bqLVIjASXJamuvkwBDQXrrrWxKgyzCNRWnR_FrU5PTdiDtqfWP4G29yM9gvyIyddryGCGoH20IQQsl4Srs4BxUeO8qHkSdzVFBE_KNXnK7dGFW-fRVo2JUs0R7Y5ueBdqZXyX_a-KACDVQsI1V_fDqeEs",
      title: "Laptop Sticker Pack 1",
      description: "Express yourself with our unique collection of stickers and polaroids.",
      category: "Laptop Stickers",
      price: "₹299"
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFNBxYywc1RzBipB7jY_MEu1fVY2HgTm6k5SuMYpdXA26ea9lvbuWGRnNd9VAN2tm0h94kzHwzzLc1ynJRSLK9f97fydCAH7cuAKiPPdQollCYmU__UF-8y16JxhQnZkjcVhdJ-oHhXizhp4nYwTkAOIa6jueyahx2bzSAizILf65fTiBMUQrD1FzDlJJLNXfZYn7_bEyPi0dAx1CS_9Bdet6U6rasP6cdhFQdT5nWgQ-p5qvm4oZAi0ccRzYjvbHvVS42TpTEco0",
      title: "Wall Sticker Set 2",
      description: "From laptop decals to wall art, find the perfect way to showcase your style.",
      category: "Wall Stickers",
      price: "₹399"
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwj16OrXypR6jlXIJUXj4UW4LYzWSsntoZdZOcVfwIZPInRgKiGudzZqo4dKva7u7Rchnu75SqJB8jPMkEG0ZXTbsgPiDiZT8cSxKkA-jsZgEd0GmZUSp3-_WF_Dg9gHnVASAyp3Wuo2jmAk_vVFWZ7LW6F7cOOqAhDhjM1qIUNy1e-V7g6ndAM5IjtoMueZmfGaCAdYZNZkUsjNn8KvUBshWmFn2QZa-Q7x_9Vb3ohcc8k6cqxZSPVccntvWN-pr-cOCYXybflW0",
      title: "Custom Name Stickers",
      description: "Personalize your belongings with custom name stickers.",
      category: "Custom",
      price: "₹199"
    },
    {
      id: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2XKyoF_oKAIRWl-rKfa8CbNY6Bjv2ceMBgZLkdLdRRtAmzpM2oKRY7W0gR0H0QE-5-QUQR3H-x5w3NE8PhxzLyJoPbSWOwfjugIP6uJgRebvhGEyW4uCS0XClaGXPY8L4OvIWthTLudEhZdzcWW4WtJ-vKeE_nXVzagNZP4XwOjEfpKG9ZWdD4uoXFz7Fyr-Wl0vpbpHsXFPkSatoFBS2g3DS2iOq0eWUnCMi5H_e2X9r4v87FKtmiHu6cJXAZjESdDoUOQRDg1k",
      title: "Glow-in-the-Dark Stars",
      description: "Add a touch of magic with glow-in-the-dark stars.",
      category: "Wall Stickers",
      price: "₹249"
    },
    {
      id: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEW2CQ4vGv7rldWdzS11YCPlo7noBwQEc7ItMUk-1E2vh-c2kA6hKlmr2Vgl7mehs3EfYC7nwCmmCiqjH7w_8HuoTwhTZipIjXyVLwvOJs0-UxIyOLyKt7_99TCRBLoy1OOHB8HNv0ngI5bxHIRkTTcpdEGq_cFVJUw9oYU6TUzqx97Z52-wzeWFTscKkoe0D1Pq5LjouUB5GXahDrcjIOFGr4wcvKF1ZjkN9EQG_oIvOqEn74bf6JwD6VsfR3iCugF8qXq_Gm_sY",
      title: "Vinyl Decal - Mountain Range",
      description: "Bring the outdoors in with a mountain range vinyl decal.",
      category: "Vinyls",
      price: "₹349"
    },
    {
      id: 6,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJr5HfIUdBKdQND-xZwotJowRPyoebMwVFlZ-_7xaoSKFPI0VCNcu8d2yqe96sFqvix460tdNWDFXnHrexqVDevumFuHGk4miyoKQtoGi0OgAXUUWR1nOGirfsTH884TBD4bX2-SYkdCixIyxKRBXbqxIXGs9XFxt7i1NLiNcxF20kqIkSryfIwv9jQEY9wwLqOAgPNxu1R8jhWUrQXq1PTANcpzHPnISjfE9XR1nrO6Zy7tAH90rUf5LMn5a5vhsvk8EeBDqs7kU",
      title: "Polaroid Prints - Summer Memories",
      description: "Capture your summer memories with polaroid prints.",
      category: "Polaroids",
      price: "₹149"
    }
  ]

  // Filter and search logic
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(product.category)
    return matchesSearch && matchesFilter
  })

  const toggleFilter = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fcf8f8] overflow-x-hidden" 
         style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1">
        <div className="px-4 md:px-6 py-5 max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-between gap-3 p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex min-w-72 flex-col gap-3">
              <motion.h1 
                className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Shop All Products
              </motion.h1>
              <motion.p 
                className="text-[#994d51] text-sm font-normal leading-normal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Explore our diverse range of stickers and polaroids, from unique designs to custom creations. Find the perfect way to express your style.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Search Bar */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full max-w-md">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#994d51] flex border-none bg-[#f3e7e8] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  placeholder="Search products"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#994d51] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </label>
          </div>
          
          {/* Filter Options */}
          <motion.div 
            className="flex gap-3 p-3 flex-wrap pr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {filterOptions.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-colors ${
                  selectedFilters.includes(filter)
                    ? 'bg-[#e92932] text-white'
                    : 'bg-[#f3e7e8] text-[#1b0e0e] hover:bg-[#e7d0d1]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <p className="text-sm font-medium leading-normal">{filter}</p>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  className="flex flex-col gap-3 pb-3 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
                    style={{ backgroundImage: `url("${product.image}")` }}
                  >
                    <div className="p-3">
                      <span className="inline-block bg-[#e92932] text-white text-xs px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h2 className="text-[#1b0e0e] text-base font-medium leading-normal">{product.title}</h2>
                    <p className="text-[#994d51] text-sm font-normal leading-normal">{product.description}</p>
                    {product.price && (
                      <p className="text-[#e92932] text-sm font-bold leading-normal mt-2">{product.price}</p>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <div className="text-[#994d51] text-lg font-medium mb-2">No products found</div>
                <p className="text-[#994d51] text-sm">Try adjusting your search or filters</p>
              </div>
            )}
          </motion.div>

          {/* Design Your Own Section */}
          <div className="px-4 py-8 border-t border-[#e7d0d1] mt-8">
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Design Your Own</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#1b0e0e] text-base font-medium leading-normal pb-2">Type of Paper</p>
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0e] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 placeholder:text-[#974e52] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="">Select Paper Type</option>
                  <option value="vinyl">Vinyl</option>
                  <option value="matte">Matte</option>
                  <option value="glossy">Glossy</option>
                  <option value="transparent">Transparent</option>
                </select>
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#1b0e0e] text-base font-medium leading-normal pb-2">Quantity</p>
                <input
                  placeholder="Enter Quantity"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0e] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 placeholder:text-[#974e52] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#1b0e0e] text-base font-medium leading-normal pb-2">Type of Cut</p>
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0e] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 placeholder:text-[#974e52] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="">Select Cut Type</option>
                  <option value="die-cut">Die Cut</option>
                  <option value="kiss-cut">Kiss Cut</option>
                  <option value="square">Square</option>
                  <option value="circle">Circle</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#e7d0d1] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-[#1b0e0e] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Upload Your Design</p>
                  <p className="text-[#1b0e0e] text-sm font-normal leading-normal max-w-[480px] text-center">Create custom stickers and polaroids with your own images.</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e7d0d1] transition-colors"
                >
                  <span className="truncate">Upload Now</span>
                </button>
              </div>
            </div>
            <div className="flex py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e82630] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d32f2f] transition-colors"
              >
                <span className="truncate">Get Quote</span>
              </button>
            </div>
          </div>
          
          {/* WhatsApp CTA */}
          <motion.div 
            className="flex justify-center py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-[#e92932] text-white text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-6 gap-4 hover:bg-[#d32f2f] transition-colors"
            >
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
                </svg>
              </div>
              <span className="truncate">Chat with us on WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Shop
