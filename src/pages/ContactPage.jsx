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
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="py-8 sm:py-12 md:py-16 flex-grow">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12"
              variants={itemVariants}
            >
              Have a question or want to collaborate? Drop me a message and I'll get back to you soon!
            </motion.p>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Contact details section */}
                <div className="p-6 sm:p-8 bg-gray-50 dark:bg-gray-700">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Details</h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start">
                      <div className="shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Email</p>
                        <a href="mailto:hello@stixnvibes.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                          hello@stixnvibes.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600 dark:text-gray-300">Portland, Oregon</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-600 dark:text-gray-300">Mon-Fri: 9am - 5pm PST</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Follow Me</h2>
                    <div className="flex space-x-5">
                      <a 
                        href="#" 
                        className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-all"
                        aria-label="Instagram"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-all"
                        aria-label="Twitter"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-all"
                        aria-label="Etsy"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.59,5.25H17a.74.74,0,0,0,.67-.91c-.25-1.36-.49-2.64-.72-3.85A.39.39,0,0,0,16.57,0H7.93A.4.4,0,0,0,7.52.47c-.18.85-.51,2.62-.51,2.62-.14.67.47.75.76.75A19.23,19.23,0,0,0,9.59,3.7V5.25Zm-.35,16.5a.91.91,0,0,0,.45.06,53.86,53.86,0,0,0,6.62-.51.35.35,0,0,0,.24-.29c.25-1.81.5-3.49.77-5.18a.63.63,0,0,0-.63-.76c-.89,0-1.78,0-2.67,0-.22,0-.33.12-.35.35-.22,1.77-.16,1.6-.76,4.39a33.23,33.23,0,0,1-3.23.16c-1.18,0-1.89-.48-1.89-1.55,0-.83,0-1.63,0-2.68,0-.4,0-.4.41-.4h2.79a.33.33,0,0,0,.34-.27c.08-.5.14-1,.22-1.48.08-.51.06-.55-.44-.55H7.83c-.42,0-.42,0-.42-.42V10.64c0-.41,0-.41.42-.41h4.13a.33.33,0,0,0,.35-.28c.11-.55.22-1.09.31-1.64s0-.6-.57-.6H5.27a.34.34,0,0,0-.37.34V19.41A2.14,2.14,0,0,0,9.24,21.75Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Contact form section */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h2>
                  
                  {submitSuccess ? (
                    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center text-green-800 dark:text-green-200">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                        <select 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option>General Inquiry</option>
                          <option>Custom Order</option>
                          <option>Wholesale</option>
                          <option>Collaboration</option>
                          <option>Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4" 
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        ></textarea>
                      </div>
                      
                      <div>
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage