import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function AboutPage() {
  // Team member images
  const teamMembers = [
    {
      id: 1,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6ffa8NDdt8UWJeEA_uVqqHq1DzVTVs9S5gOlF5BTa1_KxS9ZBachmHeb7fdavBQcYLPPE1hfMBZ9JHS0d_Gey69p4Zxa2lXixsP-LxtUynLxe1GTVkUxvoGbP0hgSb-1XB91OVkw6FYR_c6ICyMWeN2lUUDQpunIV6avi2FsC9EUspSaSpNcXbTYoP1GbcZVmL3DvnfQ2oPehh3DoPVdKXLHJ1X6JHjUeQ1WKHG03onu8HgzyxBbue7fNEIZFNKfrLcwlLLqqhQI"
    },
    {
      id: 2,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCoTkEb44Y8rGjUK-PUATv-R2iM-jjOTZtBZn-SQEfFJnjde7i16ohIhjhxmrmqpJBPJys8ydLjo_aUvKQyHvR40Sv0eCQqvmd3zKMlBmWrjc-p7qu7dyxtjM8eMrSi7Yt4kxTGcHAxyOMKLFsPuo9cbM2IbjjhniO0iR2LKXTndqn2gZ5QO5Gx1nAWhfX_fgrvB0qhVbzJUfkk6erhxirxzcF2DaKv9UYJSxma6X_nuHAalCkEnBsXnvbyXub13Pu5zeejwPxtrQ"
    },
    {
      id: 3,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB51zLlVoQ7LnpU5g_8rQAGt0RdWcLuT8eSyNRggzjYKda4XO5B61VyQRSSa6GFnz-LEihwCSLLEcoLwd4eYXOC___qQl9Gb-hReLl2-vqbd5Z-KhZylO4bpSBBUAFJ9oBdH6vCJS1uNuyQxwLlGj-hyiNCAJFUvboU7E2s9WnwOsk3K-_2VtfTXAscEi-oiDyQVcPqTMXDWGEKH7D1Sv1uux3Zz9jhLqdfny1xdmFS6O-2gcNOyH43znwS1xw6e1WsSmiCBk_qtQQ"
    },
    {
      id: 4,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf2YFkT84c6IbTju6X28Vu4HZP26p7Ldh1V978Cs-0hxZEqNxmEppvvP9H-oQiHeMo31g4XN1yehKLtjeuH-XlhZDEziK-QlJMTpwYvmlPLx4l5yWY7Wv5S6X-N_ueN93Dc6VZOBq70TuEjXuAED2tNJLPA1CeoYZpPkNcE82fIZE7_A6s64WsfFTF6K0M98pAKFkrYWnuko1BQynKzOG7iUWHXTsK7e7YJdQbMfdDmWY4cF4tGTRZN-C1UTBPjfEBI5WvfLpmnBY"
    }
  ];

  // Portfolio work images
  const portfolioImages = [
    {
      id: 1,
      category: "Sticker Design",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDadMGajpKCnV_QpEkz1a9nNtVp5W8zJeNX-ZMsDwBeNR_jNA6IU8QVvIWjEdHSAv4DIOFYNFDPD4B4Ka8v90kZkMG8GODLdat-HZlh_VD3GL4VU8xyyyTlL3ZzKffsA6LAxk_opiO2e9pqUJYgROE5aMiI_j-Li3-XHUgy1DRWdzu4mnnJQvC9uEJ__sQ8bLpmU4liB6-BjOd-Oz6gmMJFtp0Ep_zJA2Cgp3R31itDkpx5bG0zwsRRk9cWCAORW3_nXBUHj6UziuE",
    },
    {
      id: 2,
      category: "Polaroid Collection",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTtMU__8wBDSfqal1Qh9ysOep3H0PU_7jcxhln-fI52-AhNsEGrLcmPf7S7iHnE3lD3sHyR-532ZMKJsNZNcwboGju7KJ2GFHaun69shFy8mIgTdCAiKCiijzMGPJtAlY9_E26mmsbWy4I8Iv0lcr5grqnW_i4rJEpTkS8l9Nugf7lmy8WGB6vCiuMYjg_h3hgH92wV6z0Yvuiwr7gaJz9WkrMaILecQWfuNY37srecUzydb0UA4EGYit9SD3yl6mWj5RpfCIo_aA",
    },
    {
      id: 3,
      category: "Custom Stickers",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3THooUxHsEwRAK110bdi9BefZJ3AtXgyKBUNNvpZeOrVZyOmVCwdgjEvZnWl4XWrIfrGJ888TnrgEg8fT1Rs6wUOxhexhq_8Yk5kzaAH2sz7dSBqHWpJxWISDvCsM8X7t5_xZdywkPTOiT-6h9V8b67aZY5trUO0yI4udxwxSDHQiCKheW92ZRLKID-5NAdzAipheNHSXgIiR2ZvT7YtEibTbb3f9I4i4X93uzyTKmkG3wwR1Qos6QJ_4Ybz1kYkWYzptoLcGo9o",
    },
    {
      id: 4,
      category: "Digital Illustrations",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuP0qoVBFRFrMkSoUYd9qXK0aYFDNvhYkItQ0X2P7BM9YoUBl2uucgyQbTreKj5hgBpQjEAEk6GqFfn9l0QhuNSKPBU_BKEHMOGKu3DQmfgfZIWZZ-HC3zayXKn5Mo2AEnxdaVkr_M6zVtRCFcueHttOsnsxVBSzrtpBLwlYbeSGFn2IAiIATAqxedmIbp9EUTteYUVFFAyogtZ0n1ztbyJzzNC0VUUT9Y5_6uOhJZc8GT3kP3m9wOhPFbMy1ksN8vJASFVZaI3BE",
    }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header theme="light" />
      
      <main className="flex-1">
        <div className="px-4 md:px-6 py-10 max-w-6xl mx-auto">
          <div className="mb-12">
            <motion.h1 
              className="text-[#181111] text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Stix N Vibes
            </motion.h1>
            
            <motion.p 
              className="text-[#886364] text-lg max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              We are a creative studio specializing in custom stickers, polaroids, and digital designs that help you express your unique style and personality.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div>
              <h2 className="text-[#181111] text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-[#886364] mb-4">
                Stix N Vibes was founded in 2021 with a simple mission: to create unique, high-quality stickers and designs that help people personalize their spaces and express themselves.
              </p>
              <p className="text-[#886364] mb-4">
                What started as a small hobby during the pandemic quickly grew into a passionate business when we realized how much joy our creations brought to others.
              </p>
              <p className="text-[#886364]">
                Today, we've expanded our offerings to include custom polaroid prints, digital illustrations, and more, while maintaining our commitment to quality and creativity.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6ffa8NDdt8UWJeEA_uVqqHq1DzVTVs9S5gOlF5BTa1_KxS9ZBachmHeb7fdavBQcYLPPE1hfMBZ9JHS0d_Gey69p4Zxa2lXixsP-LxtUynLxe1GTVkUxvoGbP0hgSb-1XB91OVkw6FYR_c6ICyMWeN2lUUDQpunIV6avi2FsC9EUspSaSpNcXbTYoP1GbcZVmL3DvnfQ2oPehh3DoPVdKXLHJ1X6JHjUeQ1WKHG03onu8HgzyxBbue7fNEIZFNKfrLcwlLLqqhQI"
                alt="Our Studio" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-[#181111] text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  className="bg-[#f4f0f0] rounded-xl overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="aspect-square">
                    <img 
                      src={member.imageUrl} 
                      alt="Team Member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-[#181111] text-2xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f4f0f0] p-6 rounded-xl">
                <h3 className="text-[#181111] text-lg font-bold mb-2">Creativity</h3>
                <p className="text-[#886364]">
                  We believe in pushing the boundaries of design and expression, always seeking new ways to create unique and meaningful products.
                </p>
              </div>
              <div className="bg-[#f4f0f0] p-6 rounded-xl">
                <h3 className="text-[#181111] text-lg font-bold mb-2">Quality</h3>
                <p className="text-[#886364]">
                  We're committed to using premium materials and processes to ensure our stickers and prints last longer and look better.
                </p>
              </div>
              <div className="bg-[#f4f0f0] p-6 rounded-xl">
                <h3 className="text-[#181111] text-lg font-bold mb-2">Community</h3>
                <p className="text-[#886364]">
                  We value the connections we build with our customers and the community of creative individuals who share our passion.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h2 className="text-[#181111] text-2xl font-bold mb-6">Featured Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {portfolioImages.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-[#f4f0f0] rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="aspect-video">
                    <img 
                      src={item.imageUrl} 
                      alt={item.category} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[#181111] font-medium">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="bg-[#e92932] hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-medium"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer theme="light" />
    </div>
  )
}

export default AboutPage