import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [sortBy, setSortBy] = useState('newest')

  // Filter options
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
    },
    {
      id: 7,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASG51BL4czkUW795NuDLonq7rT3NdpEmhevSKivGndWvs61E_C6CMcSVpxJPzLaVvSxHFgp6_X-IU-MNd3FVvJsy0PHHFMtsht1cOFpByoIm4n8mRc051siKtxdZthW1VftEiHwyEDZNQmHahsPIzOHSSDXwY-1eM5kSLWcPDhWGDwOPYVgjAu5zJGbOJv_bgFQrd-xf0hhsyEdciIfljPShUA1Gb1yvjDhFYUoZlib3_XT4PiFucrMpbBTIB_A6Re-op382wkpMU",
      title: "Laptop Sticker Pack 2",
      description: "Express yourself with our unique collection of stickers and polaroids.",
      category: "Laptop Stickers",
      price: "₹329"
    },
    {
      id: 8,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8udrwAdUuD3EeLQNoGLJFEv62o6BUgO6o1W5N286dTESjlzlVpfSGfkAWhafY2tbS_koU1RELk-L1MKW8Aax2t1M-RQSTmTpH8uriPfvT8BW-Kqh2z4WDhqhYhxZXgrfK0J6hkAEmIbP8_OvidiXiOsHXts3WZzgjRTbep4XzmdllNnSSZYaKU_7BQgBwRJeC0xRtCYzjkH5ohpM_8XH8CmWgkXNC8vXlMf8I9n0avSGXfXuTlgNllSqnbwEcSJCUpoNhQbTARo8",
      title: "Wall Sticker Set 3",
      description: "From laptop decals to wall art, find the perfect way to showcase your style.",
      category: "Wall Stickers",
      price: "₹429"
    },
    {
      id: 9,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXkQVVRF3b7_QrV9HCgPmuGRkcZfN4wti7qA0_TQMykZS0cVfrIr1uDahztlO9SK_CEHiqEQMF_Ln8EDSo7pfSJv07M4rIhLWUSNS-qjGLg1gPWYUVCG5CZq31Lt8r0QCom0-NGcW209hPRtY7KjP8gdQkeYolOxXyisE7KGdLP1pjsEu_Z-g5HYixJ-Gblna5zme7j6NcpgJtXZMjbyVWJQQSMvVDlOUfr4N2BQDV05HWFRSVodvifeML4P9YDpmeJWH4b2KP0m0",
      title: "Custom Name Stickers 2",
      description: "Personalize your belongings with custom name stickers.",
      category: "Custom",
      price: "₹229"
    },
    {
      id: 10,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwjbKfsWgM4-8XrKKFUOHA43MBxGrCsRsK9GUOESmhkmN0cqr_T2qOhPQwLLAURLEu-MMLjlzRLRViMkA-W-WWasdqLK4YMeNSwX-o_S1G9b7XQilO99D6vvhLTHRFIUcH6cev97jq11XouxPe8rCl3N6v4VvszC9RYp12iH630OYmCLfWSCkmWiknXkSN-Ue0wfVpOdpOWS9AN6yg0jccsmgxnx7F7FwcBls3izWLj-6StCMj4Awg_RHwSepguYecYzxYA4SnlN0",
      title: "Glow-in-the-Dark Stars 2",
      description: "Add a touch of magic with glow-in-the-dark stars.",
      category: "Wall Stickers", 
      price: "₹269"
    },
    {
      id: 11,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcBxsCkm_AxkorAjngMUlafS3sDX_477IlNYrnlxGYIfdNLdASEleSlHxVNDasVZbS_2__Pzh1VodUVY2Pd8Jm1D8jmFtdx7XocBDJrCKglIYvfuRYCBDzX56QCYPRg-HmilUCksNtsiW6sYb9s7LOe6prEH5i2HSkx2Bn23uz3focwSaZKKMm2Z8iusXr1FYEpow7kcLxg5Wl8LQgH-pfR457K5KpUYZrizqRA4uSwim7-hgAZLKT1itRjziTvtRMMYQeRYIOfWc",
      title: "Vinyl Decal - Ocean Waves",
      description: "Bring the outdoors in with an ocean waves vinyl decal.",
      category: "Vinyls",
      price: "₹379"
    },
    {
      id: 12,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn1MwBVNallQRUd3eban51B5uZLf00kkjrgQNmfvtLUmHOM9auVjG0T4om8pdcHy9bpkh-pVAOg_JxEuUwrASOB5cdiOxkIkk2ttNJTNtfVpNXro84TWa4kGfPUwFm8T8rxtx5VFCtYYQUjdUfRsHLTBV-d5o1mzimKhTzULm4mKvkMLDqpohdNgvLQHTTvyi2Bo1nCVz7aAhCgn6pdTY3yFx1YX5gfrb6ZojlsJFMRf3IjQIb0SYhjFeXhpIoW8pfzzTXToCG8eg",
      title: "Polaroid Prints - Winter Adventures",
      description: "Capture your winter adventures with polaroid prints.",
      category: "Polaroids",
      price: "₹179"
    }
  ]

  // Filter and search logic
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(product.category)
    return matchesSearch && matchesFilter
  })

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('₹', '')) - parseInt(b.price.replace('₹', ''))
      case 'price-high':
        return parseInt(b.price.replace('₹', '')) - parseInt(a.price.replace('₹', ''))
      case 'name':
        return a.title.localeCompare(b.title)
      case 'newest':
      default:
        return b.id - a.id // Assuming higher ID = newer
    }
  })

  const toggleFilter = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcf8f8] overflow-x-hidden"
         style={{
           fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
           '--select-button-svg': 'url(\'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(139,91,93)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e\')'
        }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar Filters */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex items-center justify-between px-4 pb-2 pt-4">
              <h3 className="text-[#1b0e0e] text-lg font-bold leading-tight tracking-[-0.015em]">Filter</h3>
              {selectedFilters.length > 0 && (
                <button
                  onClick={() => setSelectedFilters([])}
                  className="text-[#994d51] text-sm hover:text-[#1b0e0e] transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 transition-colors ${
                    selectedFilters.includes(filter)
                      ? 'bg-[#f3e7e8] text-[#1b0e0e]'
                      : 'bg-[#f3e7e8] text-[#1b0e0e] hover:bg-[#e7d0d1]'
                  }`}
                >
                  <p className="text-sm font-medium leading-normal">{filter}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">Shop All Products</p>
                <p className="text-[#994d51] text-sm font-normal leading-normal">
                  Explore our diverse range of stickers and polaroids, from unique designs to custom creations. Find the perfect way to express your style.
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
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

            {/* Sort Dropdown and Results Counter */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-between w-full">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0e] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 bg-[image:--select-button-svg] placeholder:text-[#994d51] p-[15px] text-base font-normal leading-normal"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </label>
              <div className="text-[#994d51] text-sm font-medium">
                Showing {sortedProducts.length} of {allProducts.length} products
              </div>
            </div>

            {/* Products Grid */}
            <motion.div 
              className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <motion.div 
                    key={product.id}
                    className="flex flex-col gap-3 pb-3 cursor-pointer group"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:shadow-lg transition-shadow duration-300"
                      style={{ backgroundImage: `url("${product.image}")` }}
                    />
                    <div>
                      <p className="text-[#1b0e0e] text-base font-medium leading-normal">{product.title}</p>
                      <p className="text-[#994d51] text-sm font-normal leading-normal">{product.description}</p>
                      {product.price && (
                        <p className="text-[#e92932] text-sm font-bold leading-normal mt-1">{product.price}</p>
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

            {/* WhatsApp CTA */}
            <div className="flex justify-end overflow-hidden px-5 pb-5">
              <motion.button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e92932] text-[#fcf8f8] text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-2 gap-4 pl-4 pr-6 hover:bg-[#d32f2f] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-[#fcf8f8]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
                  </svg>
                </div>
                <span className="truncate">Chat with us on WhatsApp</span>
              </motion.button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

export default ProductsPage