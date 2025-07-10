import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function Collections() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])

  // Filter options for portfolio
  const filterOptions = [
    'Customer Installations',
    'Event Collaborations',
    'Video Showcase',
    'Custom Projects',
    'Wall Art',
    'Decorative Pieces'
  ]

  // All portfolio items combined
  const allPortfolioItems = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwL0vGAR_ktjy9HUrZPN3BqjwCVnK4U4t98Rott8ab_wS3Y9mMXeDYLefq-qVFbTeJMPGA-6m6H6ZhGYZf23jXBWoSQlNyLqw2QzsJdnve7xp88CugE7r_reSD0RbHqtIQzrLsjqn66rsFagRgXfvwBsTqk4C2aEYOpXY1VqDU39BrOYJ2LBlMi_j3a6hTAQVRqHMXLoIFKDDZulHfDzAt_adDriH-mtijHpf6ON6x1obadsCaTPEiYYsxAZ_yZR1_YwaeRz5Te1k",
      title: "Customer Installation - Bedroom Wall",
      description: "Beautiful wall sticker installation in customer's bedroom space.",
      category: "Customer Installations"
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvkWowVMlCssPtFPhZgPVX3Bs-wnOYJ2xpfx7tEC3oqE9Mzx1IJifT3yTqCMjOg8xOi04e9H4LhrKglXOblCb3PLWQHRTIRvtDGbTFUD1YWA8SKwYsaWMyglozXbMb0THUv6Otn-9bS1gRMZwEQXhLIGdeBdjYQ-UuojTjWB5LvO7uhoW7QJEPbCJosCC8ResgZh7EEYQfszcC3vUH2Hy2GD7Tt5NYUef6jQ9OX7MB5XO8ayJtxoFgle1T161WoEk0B0OHkQk9xuw",
      title: "Customer Installation - Living Room",
      description: "Stunning decorative wall art installation in living room setup.",
      category: "Customer Installations"
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYfEkANEmsWLULdnoev1RyLq7RNo3Ac9uSigkJIziJK0vwhADJw5OXVvKlcvPQxvMevVJta5oF3IEYZJSKR8vZuxFsxtv3vcd9-d24TBVXzfQVHAIdgtKTGujBtwmJl4HO6XiAATagElGmmJgSaHjq6S78NaTtIIp_uZJ3gUd6BytU52OOjEW5lAMe4qnf82Gqnz3z-3YZByyul89rsQrbBWt7Qv8jxg6rwrfavDZYzKiU-tasFCsr97AbyzlD4utWazFFUOkIN2k",
      title: "Custom Name Project",
      description: "Personalized name stickers for customer's workspace.",
      category: "Custom Projects"
    },
    {
      id: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHAIEdeu0LYoUYhxamh5v21YX3pXSDoeYGn9ONu4jeaYb2Hui8FrB0G_MYy2IoJTI6oUFN5bkNYITnls04fPFS4APt_92-zUDSXBbulOzueRTXds-QH0QHLs2uqh8wkRzUBZiYkyilW6mZRSXhkaUy0q8gG7JwOq93J1IDM8lsxRW0PJ3MT0mw-J8wFh-Zys7Irb8bOcKgESph0iRbv_ZWg7VZU51Uxk3CxH9UtmhmCsl6Yg6A9Sdc3l0uag72YkbChS4OjKqz3rc",
      title: "Decorative Wall Installation",
      description: "Creative wall art arrangement for modern home decor.",
      category: "Wall Art"
    },
    {
      id: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoB3eYoseS16SIJ8nowtZA6Sf2T0eCBCnNa12xJ5d56YzagRVyb-CY2UKk6-TPN2lwP5L0xhFsYb1L3DlDjYPKvYsSRkfNd6umjCa9zRmefLto8sRWUEj9uKsOcv-5H53p6_9mEnz_uav4mH0q7hzVgyyjt94w7ez7uY7uBmnHXG_FtVX5w3KPJeVZ9rJF9gijQyWiHp_rk-5mwPAtm4AWED0I2ChrQIrnY9uogCstlJnyTMDYAd_agiAgAgvAgR45FP_vKVHOVhI",
      title: "Customer Installation - Office Space",
      description: "Professional workspace decoration with custom vinyl decals.",
      category: "Customer Installations"
    },
    {
      id: 6,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiwFVCy7YOT-cs7ZG3mBI8ADWPnzsYQ_wq717PDOFsU7tlW8dm_CF06un6SZXH82TbhCPiXsFYBDqsq885zoHQtPu49sLdIDJ5r6EkcPMsgjWaDlMBF6pIw5c84KCiP_mJDmG_MyadGldS-0_BYG6tVOt38vvf4oRutPHCbpb33EY-pnsU8NEIT-L7VrQxTIiO3_rOEjX5phSXFJ55bgo7YcDVQ6vv69Fqo19Ozig9SxPsSAF09IuN8y61pusHs5ge6-FeXcHnzVE",
      title: "Decorative Art Piece",
      description: "Artistic wall decoration featuring custom design elements.",
      category: "Decorative Pieces"
    },
    {
      id: 7,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg15WcwZTYZTi-a8hFESnUFnGTKq9d-_FPjqxFyqm5Z-BDKP1UuEKLbaHkaHHUx3auuN37folEUZrc1EGwNuQtF2B_2L3rCffaC0NTTSm9sdI40a4jhLmHedgPoWf1Y0uHBLHYzBdiJQDzVki4AhWH7nxWLpbyA8dghVB_w6yFdZ6bNH4pRNa4_9CNM_II0te9zOVW0G1PaT1UxO77Vl2Q0Ur-GpvYUMzbVRD3XAA84044Pf0wzcwcnqs8Fuleg46ObyuYk0ClIDo",
      title: "Cafe Reel Contest",
      description: "A contest where participants created reels showcasing their favorite cafe moments using Stix N Vibes products.",
      category: "Event Collaborations"
    },
    {
      id: 8,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR8dbghssFoV-UUq8lBLrePtBDVE-OXHp8COVXPV7Yuu4G08dkn5rBARS9H2npBC1RjNx7kREca-OEnXxs2pCZuv7drXwT8lA41ZWkV9wV6pkUg7LLxuPx4GBpfEHd24B6QQ34VaYA5N_buBPES6hUHSUtKTPA_xXlg5p_x0SMb1fsRi6iCZ-KsH8QYy7ZhNUWK9jKBb5VziQKzkoZxLjPrIcEOegc09Lkbo-pLMTMq9KM-08l2i8L3ZVA1r3EXQjeej6XesFlL1E",
      title: "Video Showcase",
      description: "Behind-the-scenes video of our sticker design and installation process.",
      category: "Video Showcase"
    }
  ]

  // Filter and search logic
  const filteredItems = allPortfolioItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(item.category)
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
                  className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-colors ${
                    selectedFilters.includes(filter)
                      ? 'bg-[#e92932] text-white'
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
                <p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">Portfolio</p>
                <p className="text-[#994d51] text-sm font-normal leading-normal">
                  Explore the creative world of Stix N Vibes through our portfolio, showcasing real-world applications of our stickers and polaroids. 
                  See how our customers use our products to personalize their spaces and express their unique styles.
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
                    placeholder="Search portfolio"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#994d51] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </label>
            </div>

            {/* Results Counter */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-between w-full">
              <div className="text-[#994d51] text-sm font-medium">
                Showing {filteredItems.length} of {allPortfolioItems.length} items
              </div>
            </div>

            {/* Portfolio Grid */}
            <motion.div 
              className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    className="flex flex-col gap-3 pb-3 cursor-pointer group"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onClick={() => window.open(item.image, '_blank')}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:shadow-lg transition-shadow duration-300"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    />
                    <div>
                      <p className="text-[#1b0e0e] text-base font-medium leading-normal">{item.title}</p>
                      <p className="text-[#994d51] text-sm font-normal leading-normal">{item.description}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12">
                  <div className="text-[#994d51] text-lg font-medium mb-2">No portfolio items found</div>
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

export default Collections
