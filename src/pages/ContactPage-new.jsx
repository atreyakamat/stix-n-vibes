import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        })
      }, 3000)
    }, 800)
  }

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.1 
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex flex-col items-center mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="w-full my-12 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating Elements Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement delay={0}>
              <div className="absolute top-10 left-10 text-4xl opacity-20">📧</div>
            </FloatingElement>
            <FloatingElement delay={1}>
              <div className="absolute top-20 right-20 text-3xl opacity-20">💬</div>
            </FloatingElement>
            <FloatingElement delay={2}>
              <div className="absolute bottom-20 left-20 text-5xl opacity-20">🤝</div>
            </FloatingElement>
            <FloatingElement delay={1.5}>
              <div className="absolute top-1/2 right-10 text-3xl opacity-20">✨</div>
            </FloatingElement>
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl font-black text-[#1b0e0f] mb-6 relative z-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            📧 <span className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] bg-clip-text text-transparent">Contact Us</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-[#666] max-w-3xl mx-auto leading-relaxed relative z-10 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're here to help! Reach out to us with any questions or feedback. Our team is dedicated to providing prompt and helpful assistance.
          </motion.p>
        </motion.div>
        
        {/* Contact Form */}
        <div className="w-full bg-white rounded-3xl p-8 shadow-xl border border-[#e7d0d1] mb-8">
          <motion.form 
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-bold text-[#1b0e0f] mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Custom Order">Custom Order</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Support">Support</option>
                <option value="Business">Business Partnership</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-bold text-[#1b0e0f] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all resize-none"
                placeholder="Tell us how we can help you..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div className="flex justify-center pt-4" variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center text-green-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Contact Information */}
        <motion.div
          className="w-full bg-white rounded-3xl p-8 shadow-xl border border-[#e7d0d1] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1b0e0f] mb-6 text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <motion.div 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#e92932]/10 to-[#ff6b9d]/10 hover:from-[#e92932]/20 hover:to-[#ff6b9d]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-[#1b0e0f] mb-2">Email</h3>
              <p className="text-[#666] text-sm">hello@stixnvibes.com</p>
            </motion.div>
            
            {/* Phone */}
            <motion.div 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#42c4ef]/10 to-[#9b59b6]/10 hover:from-[#42c4ef]/20 hover:to-[#9b59b6]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-[#1b0e0f] mb-2">Phone</h3>
              <p className="text-[#666] text-sm">+1 (555) 123-4567</p>
            </motion.div>
            
            {/* Address */}
            <motion.div 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#28a745]/10 to-[#42c4ef]/10 hover:from-[#28a745]/20 hover:to-[#42c4ef]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-[#1b0e0f] mb-2">Address</h3>
              <p className="text-[#666] text-sm">123 Creative Lane<br />San Francisco, CA 94101</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="w-full text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#1b0e0f] mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-[#e92932] to-[#ff6b9d] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-[#42c4ef] to-[#9b59b6] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.a>
            
            <motion.a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-[#28a745] to-[#42c4ef] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
