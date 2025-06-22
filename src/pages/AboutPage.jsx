import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div>
      <Header />
      <main>
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About StixNVibes</h1>
              
              <div className="mb-12 flex justify-center">
                {/* Placeholder for profile image */}
                <div className="w-40 h-40 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-600">S</span>
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Hey there! I'm the creative mind behind StixNVibes, a passion project turned small business that's all about expressing individuality through vibrant stickers and digital art.
                </p>
                
                <p>
                  My journey started in 2018 when I began creating custom stickers for friends and family. What began as a hobby quickly turned into something more as word spread about my unique designs and high-quality products.
                </p>
                
                <h2>The Creative Process</h2>
                
                <p>
                  Each design begins as a sketch in my trusty notebook before being digitally refined. I draw inspiration from pop culture, nature, urban landscapes, and the vibrant energy of everyday life. My goal is to create pieces that resonate with people and help them express their unique personality.
                </p>
                
                <h2>Materials & Quality</h2>
                
                <p>
                  I believe in creating products that last, which is why I use only premium vinyl and eco-friendly materials. Each sticker is water-resistant, UV-protected to prevent fading, and made to withstand the elements. Quality control is a priority, and I personally inspect every item before it ships.
                </p>
                
                <h2>Values</h2>
                
                <p>
                  StixNVibes is committed to:
                </p>
                
                <ul>
                  <li>Sustainability - Using eco-friendly materials whenever possible</li>
                  <li>Creativity - Pushing boundaries with unique and original designs</li>
                  <li>Quality - Creating products that are built to last</li>
                  <li>Community - Supporting and collaborating with other artists</li>
                </ul>
                
                <h2>Let's Connect</h2>
                
                <p>
                  I love collaborating with other creatives and businesses. Whether you're looking for custom designs or wholesale options, I'm always open to new opportunities.
                </p>
                
                <p>
                  Thanks for stopping by and taking the time to learn a bit about StixNVibes. I hope my designs bring as much joy to your spaces as they do to mine!
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage