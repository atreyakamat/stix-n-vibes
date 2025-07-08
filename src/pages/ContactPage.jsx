import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

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
      // Form handling logic would go here in a real implementation
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
        staggerChildren: 0.1 
      } 
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1">
        <div className="px-4 md:px-6 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] w-full mx-auto">
            {/* Contact Us Header */}
            <motion.div 
              className="flex flex-wrap justify-between gap-3 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex min-w-72 flex-col gap-3">
                <motion.p 
                  className="text-[#181111] tracking-light text-[32px] font-bold leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Contact Us
                </motion.p>
                <motion.p 
                  className="text-[#886364] text-sm font-normal leading-normal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  We're here to help! Reach out to us with any questions or feedback. Our team is dedicated to providing prompt and helpful assistance.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="pb-6"
            >
              <motion.div 
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
                variants={itemVariants}
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181111] text-base font-medium leading-normal pb-2">Your Name</p>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal transition-all hover:shadow-md focus:border-primary-500"
                    required
                  />
                </label>
              </motion.div>
              
              <motion.div 
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
                variants={itemVariants}
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181111] text-base font-medium leading-normal pb-2">Your Email</p>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal transition-all hover:shadow-md focus:border-primary-500"
                    required
                  />
                </label>
              </motion.div>
              
              <motion.div 
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
                variants={itemVariants}
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181111] text-base font-medium leading-normal pb-2">Subject</p>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] h-14 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal transition-all hover:shadow-md focus:border-primary-500"
                  >
                    <option>General Inquiry</option>
                    <option>Custom Order</option>
                    <option>Wholesale</option>
                    <option>Collaboration</option>
                    <option>Other</option>
                  </select>
                </label>
              </motion.div>
              
              <motion.div 
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
                variants={itemVariants}
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#181111] text-base font-medium leading-normal pb-2">Your Message</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181111] focus:outline-0 focus:ring-0 border border-[#e5dcdc] bg-white focus:border-[#e5dcdc] min-h-36 placeholder:text-[#886364] p-[15px] text-base font-normal leading-normal transition-all hover:shadow-md focus:border-primary-500"
                    required
                  ></textarea>
                </label>
              </motion.div>
              
              <motion.div 
                className="flex px-4 py-3 justify-start"
                variants={itemVariants}
              >
                <motion.button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="truncate">Send Message</span>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
            
            {/* Success message */}
            {submitSuccess && (
              <motion.div
                className="px-4 py-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center text-green-700">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you for your message! We'll get back to you soon.
                </div>
              </motion.div>
            )}
            
            <motion.h2 
              className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Our Location
            </motion.h2>
            
            <motion.div 
              className="flex px-4 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover cursor-pointer overflow-hidden"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaFF4nUJOk1LY8euCcbln4G0cJEDv6Jny_yZNslFznbJSF4uX951RkE0kttUyNChcOWIVkibtZOaaSMyutIB8xot0iCovpccNYngYFKZ0dGD1ujtKt_NxGjw6nSBUtXLAqi12yWTxxjEofFnI0_cdTC_ys-y5Up2BNFWhuwpQQZ159HvDPOQw0mUmTIClnGgs4Oe-QEutpe77HWbTecZyruGWFeYW-FOrOcBRVCZ6diDhXLkweGcgyDgMxKTBH-FLNAcJWgdP_EKo")'
                }}
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                <motion.div 
                  className="w-full h-full bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                >
                  <motion.div 
                    className="bg-white p-2 rounded-full opacity-0 hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                  >
                    <svg className="h-6 w-6 text-[#e92932]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15,5.1,16.9,7,6.1,17.8,4.2,16ZM12,18c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S12,19.1,12,18z M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8,12,8z"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Contact Information
            </motion.h2>
            
            <motion.div 
              className="p-4 grid grid-cols-[20%_1fr] gap-x-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div 
                className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e5dcdc] py-5"
                variants={itemVariants}
                whileHover={{ backgroundColor: 'rgba(244, 240, 240, 0.3)' }}
              >
                <p className="text-[#886364] text-sm font-normal leading-normal">Address</p>
                <p className="text-[#181111] text-sm font-normal leading-normal">123 Creative Lane, San Francisco, CA 94101</p>
              </motion.div>
              
              <motion.div 
                className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e5dcdc] py-5"
                variants={itemVariants}
                whileHover={{ backgroundColor: 'rgba(244, 240, 240, 0.3)' }}
              >
                <p className="text-[#886364] text-sm font-normal leading-normal">Phone</p>
                <a 
                  href="tel:+15551234567" 
                  className="text-[#181111] text-sm font-normal leading-normal hover:text-primary-600 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </motion.div>
              
              <motion.div 
                className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e5dcdc] py-5"
                variants={itemVariants}
                whileHover={{ backgroundColor: 'rgba(244, 240, 240, 0.3)' }}
              >
                <p className="text-[#886364] text-sm font-normal leading-normal">Email</p>
                <a 
                  href="mailto:hello@stixnvibes.com" 
                  className="text-[#181111] text-sm font-normal leading-normal hover:text-primary-600 transition-colors"
                >
                  hello@stixnvibes.com
                </a>
              </motion.div>
              
              <motion.div 
                className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e5dcdc] py-5"
                variants={itemVariants}
                whileHover={{ backgroundColor: 'rgba(244, 240, 240, 0.3)' }}
              >
                <p className="text-[#886364] text-sm font-normal leading-normal">Hours</p>
                <p className="text-[#181111] text-sm font-normal leading-normal">Mon-Fri: 9am-6pm, Sat: 10am-4pm, Sun: Closed</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex px-4 py-3 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.a
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f0f0] text-[#181111] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
                whileHover={{ scale: 1.05, backgroundColor: '#e5e1e1' }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-[#181111]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                  </svg>
                </div>
                <span className="truncate">Chat on WhatsApp</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ContactPage