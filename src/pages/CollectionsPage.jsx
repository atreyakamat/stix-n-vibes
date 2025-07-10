import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CollectionsPage() {
  return (
    <div className="bg-[#fcf8f8] min-h-screen">
      <Header />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#1b0e0f] tracking-light text-[32px] font-bold leading-tight">Our Collections</p>
              <p className="text-[#974e52] text-sm font-normal leading-normal">
                Explore our curated sticker collections, each designed to capture a unique mood and style. From minimalist chic to vibrant tech-inspired designs, find the perfect
                pack to express yourself.
              </p>
            </div>
          </div>
          
          <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Collections</h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 gap-3">
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz0U09EhyZ1bj-eEBBB3ti4Qdu-bmaHXVlvD1RCZhxvzH78Mkl8GWlSb-FD14hKT-AzpFjmkA-R16xp7rM-wjjzHX8H6FzdBl-iq5kQ5VihK1F0oXLVd7mB3Y6QZ8P7V2AIwzuPildNsp4vFQi47JS3vlJbT3KlO3jwdSRhLXZk3nM_PcXghMkPdZF9QWLHxNXMHo1mrTeWHImYV9UowZWcV0rajl12YWXQfm4xz79u5UOPpAY7fQW5XjXbJbxHQZi7gjVMMRnhHM")'}}
                ></div>
                <div>
                  <p className="text-[#1b0e0f] text-base font-medium leading-normal">Chill & Minimal</p>
                  <p className="text-[#974e52] text-sm font-normal leading-normal">
                    Embrace simplicity with our minimalist sticker collection, perfect for a clean and modern aesthetic.
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAIlFp2x8EqX-j-hKTOIq7V80K15uhRyY-q_oxijdHCMrit59vGWpicricN3LhAiXmuDJfFq5Hm1KW2pCznZkbkNNjIv-7OdMdxhRLmp7szeOwU2viExi1IVhTIDRHKlZ4EwMmWs0ROgaVqWroTebpgETP37eMTLnsBtGVeKXN1PMHdozzVMmzlJbKuK8w2lgtH7WBKmM3e9Ar7t71g6pwCcymdgwBFzC3xTGkXPEFqA7vIQQkgliCa7mpqTxSBdvxNCNQpSn8Oi0")'}}
                ></div>
                <div>
                  <p className="text-[#1b0e0f] text-base font-medium leading-normal">Techie Laptop Series</p>
                  <p className="text-[#974e52] text-sm font-normal leading-normal">
                    Upgrade your tech with our laptop sticker series, featuring vibrant designs and tech-inspired themes.
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMQK3HsSFdsRim8aW311Jrwh1cFMUOOaaHZWa5nGJefTw6Bo2TyJOP9kMe9TxbLcCO-ECYbMAXQPM3cpJ2Vqo0lD2HYY2Tk2iokU6DV2yxEO5Y6Cbc4FeCWe9_Jc5fQcqlqVfz38nU4ke72lnSOWHt_9z9pISbnyAEfgPSWKEScxvKMARnMn-iGHyI4626P8srlbVMKlgz3WowGWjmYkExuoK0ZLBFiEHQLqki5w1mM8PjzXIe8up1m_n4OusJaKczyIuOJyQRFXY")'}}
                ></div>
                <div>
                  <p className="text-[#1b0e0f] text-base font-medium leading-normal">Mystic Night</p>
                  <p className="text-[#974e52] text-sm font-normal leading-normal">
                    Dive into the night with our mystic sticker pack, filled with enchanting and mysterious designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Mood Tags</h2>
          <div className="flex gap-3 p-3 overflow-x-hidden">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3e7e8] pl-4 pr-4">
              <p className="text-[#1b0e0f] text-sm font-medium leading-normal">Retro</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3e7e8] pl-4 pr-4">
              <p className="text-[#1b0e0f] text-sm font-medium leading-normal">Anime</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3e7e8] pl-4 pr-4">
              <p className="text-[#1b0e0f] text-sm font-medium leading-normal">Pastel</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3e7e8] pl-4 pr-4">
              <p className="text-[#1b0e0f] text-sm font-medium leading-normal">Nature</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3e7e8] pl-4 pr-4">
              <p className="text-[#1b0e0f] text-sm font-medium leading-normal">Abstract</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3e7e8] pl-4 pr-4">
              <p className="text-[#1b0e0f] text-sm font-medium leading-normal">Geometric</p>
            </div>
          </div>
          
          <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Coming Soon</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcg-qrVQO94tr-5lfeeHA9RLttq9lcV3apU3bZWDhynxRYD7HlbePmOvhuekRxtULL1kyqB0qx8E4RiFyHy-22YfI4SwGjpDEJToEMJGCJIpux9-kbSvBtR9caSJP6ZkyI2n3Atnr8uAWwTqc0sO68zFFwqazVyCY1nc3yQudBqurg9plU_e-J8fAIfSBJmFORczMJ3RmogAPinL1zYtYLlGBGMPX6szNBhx8fVSWXyIY4IOtkJAosbkP5YYx32D_xGaIkXHaC0T8")'}}
              ></div>
              <div>
                <p className="text-[#1b0e0f] text-base font-medium leading-normal">Summer Vibes</p>
                <p className="text-[#974e52] text-sm font-normal leading-normal">Get ready for summer with our upcoming collection of vibrant and fun stickers.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACOeF6f-aFHdAP0Ld2AG0WUno5U0IslLuuvJE-fRHc7NdYJtcM7k0VhQSGh6hrgMnDu6pxVecbD3Sj_l3f5bKZfLKIEgc2h6yzwYCH6WKUD6khscTrEXsPnolWsz30bEt3duiWcsYRNFq_3bc2mpgj_DsiUAdBSImixtKlIzmig8y1SVgQgk1CGJRTaY5Iw_WXcMU324XOhp4z1Eaia14Swcy81uFvXeFBgUmWp7QzoQA3akJBARc0hEHhxGAYdrwgDCZ1AwWnxb4")'}}
              ></div>
              <div>
                <p className="text-[#1b0e0f] text-base font-medium leading-normal">Travel Diaries</p>
                <p className="text-[#974e52] text-sm font-normal leading-normal">Document your adventures with our travel-themed sticker pack, perfect for scrapbooking.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5kPF4NfnJKjLmgH0lbciLJv5MgOkptyURTJJYglIAL0hrt7JfJMfoQ3ZDCfxnNVJOP0rKW31F-jvhNnX3dqA5eO1V6o6YsQjE0mQ9oEp8kMLQBqOTSXNpqPhuzQf650w89fRAHTcBCtJiddS6AIlC9ONFmwsb1sTH0qlkcjXmGv8yFKM5GmrdcQ6SIALjNxHuquC8XmxoYpxhXXntIYc14lM6k-MrqTMRA252APPykSEw_EQJsmQmXQrZ5ZJB_UFJRJ1XrJm88rI")'}}
              ></div>
              <div>
                <p className="text-[#1b0e0f] text-base font-medium leading-normal">Artistic Expressions</p>
                <p className="text-[#974e52] text-sm font-normal leading-normal">
                  Express your creativity with our artistic sticker collection, featuring unique and expressive designs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="@container">
            <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-[#1b0e0f] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Stay Updated
                </h1>
                <p className="text-[#1b0e0f] text-base font-normal leading-normal max-w-[720px]">
                  Be the first to know when our new collections launch. Sign up for exclusive updates and early access.
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <input
                      placeholder="Enter your email"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0f] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#974e52] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                    />
                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#f3e7e8] pr-2">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e82630] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Get Notified</span>
                      </button>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end overflow-hidden px-5 pb-5">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-[#e82630] text-[#fcf8f8] text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-2 gap-4 pl-4 pr-6">
              <div className="text-[#fcf8f8]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
                </svg>
              </div>
              <span className="truncate">Chat with us</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CollectionsPage
