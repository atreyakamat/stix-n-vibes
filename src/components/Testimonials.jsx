import React from 'react'
import { motion } from 'framer-motion'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Skater',
      quote: "These stickers are seriously the best quality I've found. They've survived countless wipeouts on my skateboard and still look amazing!",
      avatar: '👨‍🎤'
    },
    {
      id: 2,
      name: 'Jamie Smith',
      role: 'Content Creator',
      quote: "The custom sticker designs for my brand completely exceeded my expectations. My followers love them and they've become a real signature item.",
      avatar: '👩‍💻'
    },
    {
      id: 3,
      name: 'Taylor Reed',
      role: 'Shop Owner',
      quote: "Working with StixNVibes for our shop's branding was a game-changer. The designs perfectly captured our vibe and customers can't get enough.",
      avatar: '🧢'
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Happy Customers</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - here's what people are saying about StixNVibes designs.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg relative"
            >
              {/* Large quotation mark */}
              <div className="absolute -top-4 -left-4 text-6xl text-primary-200 opacity-50 font-serif">
                "
              </div>
              
              <div className="text-xl italic text-gray-600 dark:text-gray-300 mb-6 relative z-10">
                "{testimonial.quote}"
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials