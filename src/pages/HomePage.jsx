import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import CtaBand from '../components/CtaBand'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <main>
        <Hero 
          title="Designs That Stick. Ideas That Pop."
          subtitle="Creating stickers and digital art that express your unique vibe"
          ctaText="See Projects"
          ctaLink="/projects"
        />
        <FeaturedProjects />
        <Services />
        <Testimonials />
        <CtaBand 
          title="Wanna Collab?"
          ctaText="Get In Touch"
          ctaLink="/contact"
        />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage