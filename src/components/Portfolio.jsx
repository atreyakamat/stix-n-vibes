import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Portfolio() {
  const [email, setEmail] = useState('')

  // Featured Collections data
  const featuredCollections = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz0U09EhyZ1bj-eEBBB3ti4Qdu-bmaHXVlvD1RCZhxvzH78Mkl8GWlSb-FD14hKT-AzpFjmkA-R16xp7rM-wjjzHX8H6FzdBl-iq5kQ5VihK1F0oXLVd7mB3Y6QZ8P7V2AIwzuPildNsp4vFQi47JS3vlJbT3KlO3jwdSRhLXZk3nM_PcXghMkPdZF9QWLHxNXMHo1mrTeWHImYV9UowZWcV0rajl12YWXQfm4xz79u5UOPpAY7fQW5XjXbJbxHQZi7gjVMMRnhHM",
      title: "Chill & Minimal",
      description: "Embrace simplicity with our minimalist sticker collection, perfect for a clean and modern aesthetic."
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAIlFp2x8EqX-j-hKTOIq7V80K15uhRyY-q_oxijdHCMrit59vGWpicricN3LhAiXmuDJfFq5Hm1KW2pCznZkbkNNjIv-7OdMdxhRLmp7szeOwU2viExi1IVhTIDRHKlZ4EwMmWs0ROgaVqWroTebpgETP37eMTLnsBtGVeKXN1PMHdozzVMmzlJbKuK8w2lgtH7WBKmM3e9Ar7t71g6pwCcymdgwBFzC3xTGkXPEFqA7vIQQkgliCa7mpqTxSBdvxNCNQpSn8Oi0",
      title: "Techie Laptop Series",
      description: "Upgrade your tech with our laptop sticker series, featuring vibrant designs and tech-inspired themes."
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMQK3HsSFdsRim8aW311Jrwh1cFMUOOaaHZWa5nGJefTw6Bo2TyJOP9kMe9TxbLcCO-ECYbMAXQPM3cpJ2Vqo0lD2HYY2Tk2iokU6DV2yxEO5Y6Cbc4FeCWe9_Jc5fQcqlqVfz38nU4ke72lnSOWHt_9z9pISbnyAEfgPSWKEScxvKMARnMn-iGHyI4626P8srlbVMKlgz3WowGWjmYkExuoK0ZLBFiEHQLqki5w1mM8PjzXIe8up1m_n4OusJaKczyIuOJyQRFXY",
      title: "Mystic Night",
      description: "Dive into the night with our mystic sticker pack, filled with enchanting and mysterious designs."
    }
  ]

  // Mood Tags
  const moodTags = [
    'Retro', 'Anime', 'Pastel', 'Nature', 'Abstract', 'Geometric'
  ]

  // Coming Soon Collections
  const comingSoonCollections = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcg-qrVQO94tr-5lfeeHA9RLttq9lcV3apU3bZWDhynxRYD7HlbePmOvhuekRxtULL1kyqB0qx8E4RiFyHy-22YfI4SwGjpDEJToEMJGCJIpux9-kbSvBtR9caSJP6ZkyI2n3Atnr8uAWwTqc0sO68zFFwqazVyCY1nc3yQudBqurg9plU_e-J8fAIfSBJmFORczMJ3RmogAPinL1zYtYLlGBGMPX6szNBhx8fVSWXyIY4IOtkJAosbkP5YYx32D_xGaIkXHaC0T8",
      title: "Summer Vibes",
      description: "Get ready for summer with our upcoming collection of vibrant and fun stickers."
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACOeF6f-aFHdAP0Ld2AG0WUno5U0IslLuuvJE-fRHc7NdYJtcM7k0VhQSGh6hrgMnDu6pxVecbD3Sj_l3f5bKZfLKIEgc2h6yzwYCH6WKUD6khscTrEXsPnolWsz30bEt3duiWcsYRNFq_3bc2mpgj_DsiUAdBSImixtKlIzmig8y1SVgQgk1CGJRTaY5Iw_WXcMU324XOhp4z1Eaia14Swcy81uFvXeFBgUmWp7QzoQA3akJBARc0hEHhxGAYdrwgDCZ1AwWnxb4",
      title: "Travel Diaries",
      description: "Document your adventures with our travel-themed sticker pack, perfect for scrapbooking."
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kPF4NfnJKjLmgH0lbciLJv5MgOkptyURTJJYglIAL0hrt7JfJMfoQ3ZDCfxnNVJOP0rKW31F-jvhNnX3dqA5eO1V6o6YsQjE0mQ9oEp8kMLQBqOTSXNpqPhuzQf650w89fRAHTcBCtJiddS6AIlC9ONFmwsb1sTH0qlkcjXmGv8yFKM5GmrdcQ6SIALjNxHuquC8XmxoYpxhXXntIYc14lM6k-MrqTMRA252APPykSEw_EQJsmQmXQrZ5ZJB_UFJRJ1XrJm88rI",
      title: "Artistic Expressions",
      description: "Express your creativity with our artistic sticker collection, featuring unique and expressive designs."
    }
  ]

  return (
    <section className="py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Collections Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-[#181111] tracking-light text-[32px] font-bold leading-tight min-w-72">Our Collections</h1>
        </div>
        
        {/* Introduction */}
        <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Explore our curated sticker collections, each designed to capture a unique mood and style. From minimalist chic to vibrant tech-inspired designs, find the perfect pack to express yourself.
        </p>

        {/* Featured Collections */}
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Collections</h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {featuredCollections.map((collection) => (
              <motion.div 
                key={collection.id}
                className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: collection.id * 0.1 }}
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  style={{ backgroundImage: `url("${collection.image}")` }}
                />
                <div>
                  <p className="text-[#181111] text-base font-medium leading-normal">{collection.title}</p>
                  <p className="text-[#886364] text-sm font-normal leading-normal">
                    {collection.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mood Tags */}
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Mood Tags</h2>
        <div className="flex gap-3 p-3 overflow-x-hidden">
          {moodTags.map((tag) => (
            <motion.div 
              key={tag}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3e7e8] pl-4 pr-4 cursor-pointer hover:bg-[#e82630] hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-sm font-medium leading-normal">{tag}</p>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Coming Soon</h2>
        <motion.div 
          className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {comingSoonCollections.map((collection) => (
            <motion.div 
              key={collection.id}
              className="flex flex-col gap-3 pb-3"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: collection.id * 0.1 }}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl cursor-pointer hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundImage: `url("${collection.image}")` }}
              />
              <div>
                <p className="text-[#181111] text-base font-medium leading-normal">{collection.title}</p>
                <p className="text-[#886364] text-sm font-normal leading-normal">{collection.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <div className="@container">
          <motion.div 
            className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#181111] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Stay Updated
              </h1>
              <p className="text-[#181111] text-base font-normal leading-normal max-w-[720px]">
                Be the first to know when our new collections launch. Sign up for exclusive updates and early access.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
              <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <input
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#886364] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#f3e7e8] pr-2">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e82630] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#d91922] transition-colors">
                      <span className="truncate">Get Notified</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio
