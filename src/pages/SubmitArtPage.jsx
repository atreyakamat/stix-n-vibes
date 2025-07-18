import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({ children, variant = "primary", className = "", type = "button", disabled = false, ...props }) => {
  const baseClasses = "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white hover:shadow-lg",
    secondary: "bg-white border-2 border-[#e92932] text-[#e92932] hover:bg-[#e92932] hover:text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#e92932]"
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      type={type}
      disabled={disabled}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  )
}

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

function SubmitArtPage() {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    instagram: '',
    portfolio: '',
    artType: '',
    experience: '',
    artDescription: '',
    collaboration: '',
    terms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual Google Forms integration later
    setTimeout(() => {
      console.log('Form data:', formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form
      setFormData({
        artistName: '',
        email: '',
        instagram: '',
        portfolio: '',
        artType: '',
        experience: '',
        artDescription: '',
        collaboration: '',
        terms: false
      })
    }, 2000)
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
        <Header />
        
        <main className="flex flex-col items-center justify-center mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8 min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white rounded-3xl p-12 shadow-xl border border-[#e7d0d1]"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl font-bold text-[#1b0e0f] mb-4">
              Submission Received!
            </h1>
            <p className="text-xl text-[#666] mb-8 max-w-2xl">
              Thank you for your art submission! We're excited to review your work and will get back to you within 3-5 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collabs">
                <Button variant="primary">
                  🎨 Back to Collabs
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="secondary">
                  🛍️ Browse Shop
                </Button>
              </Link>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex flex-col items-center mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8 py-12">
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
              <div className="absolute top-10 left-10 text-4xl opacity-20">🎨</div>
            </FloatingElement>
            <FloatingElement delay={1}>
              <div className="absolute top-20 right-20 text-3xl opacity-20">✨</div>
            </FloatingElement>
            <FloatingElement delay={2}>
              <div className="absolute bottom-20 left-20 text-5xl opacity-20">🖼️</div>
            </FloatingElement>
          </div>

          <motion.h1 
            className="text-5xl md:text-6xl font-black text-[#1b0e0f] mb-6 relative z-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🎨 <span className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] bg-clip-text text-transparent">Submit Your Art</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-[#666] max-w-3xl mx-auto leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to see your art on stickers? Tell us about your creative vision and let's bring it to life together!
          </motion.p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="w-full bg-white rounded-3xl p-8 shadow-xl border border-[#e7d0d1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Artist Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                  Artist Name / Handle *
                </label>
                <input
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
                  placeholder="Your artistic name or handle"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Social & Portfolio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
                  placeholder="@yourusername"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>

            {/* Art Type & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                  Art Type *
                </label>
                <select
                  name="artType"
                  value={formData.artType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
                >
                  <option value="">Select your art style</option>
                  <option value="digital-illustration">Digital Illustration</option>
                  <option value="hand-drawn">Hand Drawn</option>
                  <option value="photography">Photography</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="mixed-media">Mixed Media</option>
                  <option value="typography">Typography</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                  Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (2-5 years)</option>
                  <option value="experienced">Experienced (5+ years)</option>
                  <option value="professional">Professional Artist</option>
                </select>
              </div>
            </div>

            {/* Art Description */}
            <div>
              <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                Describe Your Art *
              </label>
              <textarea
                name="artDescription"
                value={formData.artDescription}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your artistic style, themes, and what makes your work unique. What kind of stickers would you love to create?"
              />
            </div>

            {/* Collaboration Ideas */}
            <div>
              <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                Collaboration Ideas
              </label>
              <textarea
                name="collaboration"
                value={formData.collaboration}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent transition-all resize-none"
                placeholder="Do you have specific sticker concepts in mind? Any themes or collections you'd love to explore with us?"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
                className="mt-1 h-5 w-5 text-[#e92932] border-[#e7d0d1] rounded focus:ring-[#e92932]"
              />
              <label className="text-sm text-[#666] leading-relaxed">
                I agree to collaborate with Stix N Vibes and understand that submitted artwork may be used for sticker production. I will retain credit for my original work and agree to discuss revenue-sharing terms if my submission is selected. *
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="px-12 py-4 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  '🚀 Submit My Art'
                )}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-[#e92932]/10 to-[#ff6b9d]/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-[#1b0e0f] mb-2">Quick Review</h3>
            <p className="text-sm text-[#666]">We review all submissions within 3-5 business days</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#42c4ef]/10 to-[#9b59b6]/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold text-[#1b0e0f] mb-2">Fair Partnership</h3>
            <p className="text-sm text-[#666]">Artist credit and revenue sharing for selected works</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#28a745]/10 to-[#42c4ef]/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold text-[#1b0e0f] mb-2">Creative Freedom</h3>
            <p className="text-sm text-[#666]">Your vision + our production = amazing stickers</p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default SubmitArtPage
