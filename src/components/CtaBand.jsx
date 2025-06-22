import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function CtaBand({ title, ctaText, ctaLink }) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Let's work together to create something that captures your unique style and vision.
          </p>
          <Link 
            to={ctaLink} 
            className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {ctaText}
          </Link>
          
          {/* Decorative elements */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-10">
            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          
          <div className="absolute right-10 top-1/4 opacity-10">
            <svg className="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaBand