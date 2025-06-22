import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Instead of importing SVGs, let's use inline SVG definitions
function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Floating stickers as inline SVGs */}
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="absolute w-16 h-16 top-12 left-[10%]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FFD700" stroke="#FF8C00"/>
      </motion.svg>
      
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="absolute w-20 h-20 bottom-12 right-[15%]"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#9F7AEA" stroke="#805AD5"/>
      </motion.svg>
      
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="absolute w-24 h-24 top-1/2 right-[5%]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        fill="none"
      >
        <circle cx="12" cy="12" r="10" fill="#38B2AC" stroke="#2C7A7B" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" fill="#4FD1C5"/>
      </motion.svg>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            {subtitle}
          </p>
          <Link 
            to={ctaLink} 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-primary-50/30 to-transparent dark:from-primary-900/10 -z-10"></div>
    </section>
  )
}

export default Hero;