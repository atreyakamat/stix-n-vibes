import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Star rating component
const StarRating = ({ rating, size = "20px" }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={i < rating ? "text-[#111618]" : "text-[#bac9ce]"} 
          data-icon="Star" 
          data-size={size} 
          data-weight={i < rating ? "fill" : "regular"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            fill="currentColor" 
            viewBox="0 0 256 256"
          >
            <path d={
              i < rating 
                ? "M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" 
                : "M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
            } />
          </svg>
        </div>
      ))}
    </div>
  )
}

// Icon components
const ThumbsUp = ({ size = "20px" }) => (
  <div className="text-inherit" data-icon="ThumbsUp" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" />
    </svg>
  </div>
)

const ThumbsDown = ({ size = "20px" }) => (
  <div className="text-inherit" data-icon="ThumbsDown" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
    </svg>
  </div>
)

const SearchIcon = ({ size = "20px" }) => (
  <div className="text-[#111618]" data-icon="MagnifyingGlass" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
    </svg>
  </div>
)

// Social media icons
const InstagramIcon = ({ size = "24px" }) => (
  <div className="text-[#617f89]" data-icon="InstagramLogo" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
    </svg>
  </div>
)

const TwitterIcon = ({ size = "24px" }) => (
  <div className="text-[#617f89]" data-icon="TwitterLogo" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
    </svg>
  </div>
)

const FacebookIcon = ({ size = "24px" }) => (
  <div className="text-[#617f89]" data-icon="FacebookLogo" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
    </svg>
  </div>
)

// Shopping Cart icon
const CartIcon = ({ size = "24px" }) => (
  <div className="text-inherit" data-icon="ShoppingCart" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
    </svg>
  </div>
)

// Heart/Favorite icon
const HeartIcon = ({ size = "24px" }) => (
  <div className="text-inherit" data-icon="Heart" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,216S28,160,28,92A52,52,0,0,1,80,40a51.75,51.75,0,0,1,48,32,51.75,51.75,0,0,1,48-32,52,52,0,0,1,52,52C228,160,128,216,128,216Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
    </svg>
  </div>
)

// Custom button component
const Button = ({ children, color = "blue", className = "", ...props }) => {
  const colorClasses = {
    blue: "bg-[#42c4ef] text-[#111618] hover:bg-[#2bb4e3]",
    gray: "bg-[#f0f3f4] text-[#111618] hover:bg-[#e0e3e4]",
    red: "bg-[#e92932] text-white hover:bg-[#d91922]",
    white: "bg-white text-[#111618] border border-[#e0e3e4] hover:bg-[#f8f8f8]",
  };

  return (
    <button
      className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${colorClasses[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Product card component
const ProductCard = ({ image, name, price, rating }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="relative mb-3 overflow-hidden rounded-lg">
      <img src={image} alt={name} className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105" />
      <div className="absolute right-2 top-2 flex flex-col gap-2">
        <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-[#111618] shadow-sm hover:text-[#e92932]">
          <HeartIcon size="18px" />
        </button>
        <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-[#111618] shadow-sm hover:bg-[#111618] hover:text-white">
          <CartIcon size="18px" />
        </button>
      </div>
    </div>
    <div className="flex flex-col p-2">
      <div className="flex items-center gap-1">
        <StarRating rating={rating} size="16px" />
        <span className="text-[#617f89] text-sm">{rating.toFixed(1)}</span>
      </div>
      <h3 className="text-[#111618] text-sm font-medium leading-tight">{name}</h3>
      <p className="text-[#111618] text-sm font-bold leading-tight">${price.toFixed(2)}</p>
    </div>
  </div>
)

// Main HomePage component
function HomePage() {
  // Sample products data
  const featuredProducts = [
    { id: 1, name: "3D Holographic Space Sticker", price: 4.99, rating: 4.8, image: "/assets/stickers/Adobe Express - file - 2025-02-03T053558.505.png" },
    { id: 2, name: "Rainbow Panda Sticker", price: 3.49, rating: 4.7, image: "/assets/stickers/Adobe Express - file - 2025-02-03T053620.350.png" },
    { id: 3, name: "Neon Butterfly Decal", price: 5.99, rating: 4.9, image: "/assets/stickers/Adobe Express - file - 2025-02-03T053656.087.png" },
    { id: 4, name: "Vintage Camera Sticker", price: 4.49, rating: 4.6, image: "/assets/stickers/Adobe Express - file - 2025-02-03T053756.124.png" },
  ];
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      text: "These stickers are amazing quality! They've survived through rain and multiple washes on my laptop. The holographic ones are especially eye-catching.",
      rating: 5
    },
    {
      id: 2,
      name: "Morgan Smith",
      text: "I'm obsessed with the custom sticker I ordered. The colors are vibrant and the printing is crystal clear. Will definitely order more!",
      rating: 5
    },
    {
      id: 3,
      name: "Jamie Lee",
      text: "Super fast shipping and the vinyl quality is top notch. These stickers have completely transformed my hydro flask!",
      rating: 4
    }
  ];
  
  // Category images
  const heroImage = "https://images.unsplash.com/photo-1600456899121-68eda5705257?q=80&w=2574&auto=format&fit=crop";
  const customImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
  const artistImage = "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2670&auto=format&fit=crop";
  
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
        
        {/* Main Content */}
        <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="w-full mx-auto py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left md:pr-8">
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Express Yourself with <span className="text-[#e92932]">Unique</span> Stickers
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Handcrafted stickers for creatives, journalers, and anyone who loves adding personality to their belongings.
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button color="red" className="h-12 px-8 text-base">Shop Collection</Button>
                <Button color="white" className="h-12 px-8 text-base">Learn More</Button>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2 mt-8 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="/assets/stickers/Adobe Express - file - 2025-02-03T053900.986.png" 
                  alt="Featured Sticker" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rotate-12">
                  <img 
                    src="/assets/stickers/Adobe Express - file - 2025-02-03T053620.350.png" 
                    alt="Decorative Sticker" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </section>
          
          {/* Categories Section */}
          <section className="w-full py-16 bg-gray-50 rounded-lg my-8">
            <h2 className="text-2xl font-bold text-center mb-8">Browse Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
              {[
                { name: "Holographic", image: "/assets/stickers/Adobe Express - file - 2025-02-03T053900.986.png" },
                { name: "Waterproof", image: "/assets/stickers/Adobe Express - file - 2025-02-03T053936.483.png" },
                { name: "Matte Finish", image: "/assets/stickers/Adobe Express - file - 2025-02-03T053916.536.png" },
              ].map((category, i) => (
                <div 
                  key={category.name}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                    <Link to="/projects" className="text-sm text-[#e92932] hover:underline">Shop Now</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Featured Products */}
          <section className="w-full py-16 my-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-8 px-4">
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <Link to="/products" className="text-[#e92932] hover:underline font-medium">View All</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="bg-white hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden">
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Artist Collaboration */}
          <section className="w-full py-16 my-8 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src={artistImage} 
                    alt="Artist Collaboration" 
                    className="rounded-lg shadow-md w-full object-cover aspect-square"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">
                    Artist Collaborations
                  </h2>
                  <p className="text-gray-700 mb-6">
                    We partner with independent artists to bring you exclusive, limited-edition sticker designs. Each purchase directly supports the creator and their artistic journey.
                  </p>
                  <Button color="red">Explore Artist Series</Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Custom Stickers */}
          <section className="w-full py-16 my-8">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">
                    Create Custom Stickers
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Turn your artwork, photos, or designs into high-quality stickers. Perfect for small businesses, events, or personal projects. Available in various sizes and finishes.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <ThumbsUp /> <span>Die-cut precision</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ThumbsUp /> <span>Weather-resistant options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ThumbsUp /> <span>Bulk discounts available</span>
                    </li>
                  </ul>
                  <Button color="blue">Design Your Sticker</Button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={customImage} 
                    alt="Custom Stickers" 
                    className="rounded-lg shadow-md w-full object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="w-full py-16 bg-gray-50 my-8">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-12">What Our Customers Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <StarRating rating={testimonial.rating} />
                    <p className="mt-4 text-gray-700">{testimonial.text}</p>
                    <p className="mt-4 font-medium text-gray-900">— {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Newsletter */}
          <section className="w-full py-16 bg-[#42c4ef]/10 rounded-lg my-8">
            <div className="max-w-xl mx-auto text-center px-4">
              <h2 className="text-2xl font-bold mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-700 mb-8">
                Subscribe to our newsletter for new releases, special offers, and creative inspiration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#42c4ef] flex-grow"
                />
                <Button color="red" className="sm:flex-shrink-0">Subscribe</Button>
              </div>
              <div className="flex gap-6 justify-center mt-8">
                <a href="#" className="text-[#617f89] hover:text-[#e92932] transition-colors">
                  <InstagramIcon size="28px" />
                </a>
                <a href="#" className="text-[#617f89] hover:text-[#e92932] transition-colors">
                  <TwitterIcon size="28px" />
                </a>
                <a href="#" className="text-[#617f89] hover:text-[#e92932] transition-colors">
                  <FacebookIcon size="28px" />
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
    </div>
  )
}

export default HomePage