import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Icon components
const SmileyIcon = ({ size = "24px" }) => (
  <div className="text-[#141019]" data-icon="Smiley" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z" />
    </svg>
  </div>
)

const HeartIcon = ({ size = "24px" }) => (
  <div className="text-[#141019]" data-icon="Heart" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
    </svg>
  </div>
)

const SparkleIcon = ({ size = "24px" }) => (
  <div className="text-[#141019]" data-icon="Sparkle" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" />
    </svg>
  </div>
)

const PencilIcon = ({ size = "24px" }) => (
  <div className="text-[#141019]" data-icon="Pencil" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z" />
    </svg>
  </div>
)

const PrinterIcon = ({ size = "24px" }) => (
  <div className="text-[#141019]" data-icon="Printer" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z" />
    </svg>
  </div>
)

const PackageIcon = ({ size = "24px" }) => (
  <div className="text-[#141019]" data-icon="Package" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" />
    </svg>
  </div>
)

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClasses = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em] grow transition-colors"
  
  const variantClasses = {
    primary: "bg-[#e92932] text-white hover:bg-[#d91922]",
    secondary: "bg-[#f0f3f4] text-[#111618] hover:bg-[#e0e3e4]"
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      <span className="truncate">{children}</span>
    </button>
  )
}

function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#faf9fb] overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex flex-col items-center mx-auto w-full max-w-[960px] px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="w-full my-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#faf9fb] rounded-xl min-h-[218px] relative">
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")'
              }}
            />
            <div className="relative flex p-4">
              <p className="text-white tracking-light text-[28px] font-bold leading-tight">Our Story ✨</p>
            </div>
          </div>
        </motion.div>

        <motion.p 
          className="text-[#141019] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Not just a brand, it's a whole vibe.
        </motion.p>

        {/* Who We Are Section */}
        <motion.section 
          className="w-full py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-[#141019] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dbd3e4] bg-[#faf9fb] p-4 items-center">
              <SmileyIcon />
              <h3 className="text-[#141019] text-base font-bold leading-tight">Creative</h3>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dbd3e4] bg-[#faf9fb] p-4 items-center">
              <HeartIcon />
              <h3 className="text-[#141019] text-base font-bold leading-tight">Passionate</h3>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dbd3e4] bg-[#faf9fb] p-4 items-center">
              <SparkleIcon />
              <h3 className="text-[#141019] text-base font-bold leading-tight">Unique</h3>
            </div>
          </div>
        </motion.section>

        {/* Workshop Image */}
        <motion.div 
          className="w-full p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full aspect-[3/2] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2670&auto=format&fit=crop"
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Meet the Makers Section */}
        <motion.section 
          className="w-full py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-[#141019] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Meet the Makers</h2>
          
          {/* Founder */}
          <div className="p-4 mb-4">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#73578e] text-sm font-normal leading-normal">Founder</p>
                <p className="text-[#141019] text-base font-bold leading-tight">Sophia</p>
                <p className="text-[#73578e] text-sm font-normal leading-normal">
                  Hi, I'm Sophia, the founder of Stix N Vibes. I started this journey to share my love for creativity and self-expression through stickers and polaroids. Each design is crafted with passion and a touch of magic.
                </p>
              </div>
              <div className="w-full md:w-auto aspect-video md:aspect-square bg-center bg-no-repeat bg-cover rounded-xl flex-1 min-h-[200px]" 
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1494790108755-2616b93e0ef4?q=80&w=1974&auto=format&fit=crop")'
                }}
              />
            </div>
          </div>

          {/* Co-Creator */}
          <div className="p-4">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#73578e] text-sm font-normal leading-normal">Co-Creator</p>
                <p className="text-[#141019] text-base font-bold leading-tight">Ethan</p>
                <p className="text-[#73578e] text-sm font-normal leading-normal">
                  Hey, I'm Ethan, and I joined Sophia to help bring even more vibrant ideas to life. I love experimenting with different styles and ensuring every piece resonates with our audience's unique tastes.
                </p>
              </div>
              <div className="w-full md:w-auto aspect-video md:aspect-square bg-center bg-no-repeat bg-cover rounded-xl flex-1 min-h-[200px]" 
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop")'
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* Our Making Process Section */}
        <motion.section 
          className="w-full py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-[#141019] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Our Making Process</h2>
          <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            {/* Design Step */}
            <div className="flex flex-col items-center gap-1 pt-3">
              <PencilIcon />
              <div className="w-[1.5px] bg-[#dbd3e4] h-8 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[#141019] text-base font-medium leading-normal">Design</p>
              <p className="text-[#73578e] text-base font-normal leading-normal">
                We start with a spark of inspiration, sketching and refining designs until they capture the perfect vibe.
              </p>
            </div>

            {/* Print Step */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] bg-[#dbd3e4] h-8"></div>
              <PrinterIcon />
              <div className="w-[1.5px] bg-[#dbd3e4] h-8 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[#141019] text-base font-medium leading-normal">Print</p>
              <p className="text-[#73578e] text-base font-normal leading-normal">
                Our stickers and polaroids are printed on high-quality materials, ensuring vibrant colors and lasting durability.
              </p>
            </div>

            {/* Pack Step */}
            <div className="flex flex-col items-center gap-1 pb-3">
              <div className="w-[1.5px] bg-[#dbd3e4] h-8"></div>
              <PackageIcon />
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[#141019] text-base font-medium leading-normal">Pack</p>
              <p className="text-[#73578e] text-base font-normal leading-normal">
                Each order is carefully packed with love and a few extra goodies, ready to bring joy to your doorstep.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Made in Goa Section */}
        <motion.section 
          className="w-full py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-[#141019] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Made in Goa</h2>
          <p className="text-[#141019] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Inspired by the vibrant culture and tropical vibes of Goa, our products carry a unique essence of this beautiful place.
          </p>
          <div className="w-full p-4">
            <div className="w-full aspect-[3/2] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop"
                alt="Beautiful Goa landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Let's Create Together Section */}
        <motion.section 
          className="w-full py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col justify-end gap-6 px-4 text-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#141019] tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px] mx-auto">
                Let's Create Together
              </h1>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="flex justify-center">
                <div className="flex flex-1 gap-3 flex-wrap max-w-[480px] justify-center">
                  <Button variant="primary">
                    Collaborate
                  </Button>
                  <Button variant="secondary">
                    Custom Orders
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.p 
          className="text-[#73578e] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Thank you for being a part of our story! ✨
        </motion.p>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage