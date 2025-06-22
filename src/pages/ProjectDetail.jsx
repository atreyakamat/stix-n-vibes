import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProjectDetail() {
  const { slug } = useParams()
  
  // This would typically come from an API or CMS based on the slug
  // For now we'll use hardcoded data
  const projectData = {
    'neon-vibes': {
      title: 'Neon Vibes Collection',
      description: 'A collection of electrifying stickers that glow in the dark, perfect for adding some flair to your laptop, water bottle, or anywhere that needs a pop of color.',
      color: '#8B5CF6',
      details: 'Each sticker is made with premium vinyl and a special glow-in-the-dark coating that charges in sunlight and emits a vibrant glow at night.',
      features: [
        'Water resistant',
        'UV protected to prevent fading',
        'Glow-in-the-dark technology',
        'Durable vinyl material'
      ]
    },
    'nature-stix': {
      title: 'Nature Stix',
      description: 'Eco-friendly plant and animal designs printed on sustainable materials.',
      color: '#10B981',
      details: 'This collection celebrates the natural world with botanical illustrations and wildlife designs. Each sticker is printed on recycled paper stock with eco-friendly inks.',
      features: [
        'Made from recycled materials',
        'Biodegradable adhesive',
        'Eco-friendly printing process',
        '10% of profits donated to conservation efforts'
      ]
    },
    'cosmic-doodles': {
      title: 'Cosmic Doodles',
      description: 'Space-themed stickers and prints featuring planets, stars, and cosmic wonders.',
      color: '#3B82F6',
      details: 'Inspired by the mysteries of the universe, this collection takes you on a journey through space with whimsical hand-drawn designs.',
      features: [
        'Holographic finish on select designs',
        'Available as individual stickers or a complete set',
        'Also available as art prints',
        'Special edition glow-in-the-dark variants'
      ]
    }
  }
  
  // Use default content if slug not found
  const project = projectData[slug] || {
    title: 'Project Details',
    description: 'This project is currently being developed.',
    color: '#6B7280',
    details: 'Check back soon for more information about this exciting project!',
    features: ['Coming soon']
  }

  return (
    <div>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <Link to="/projects" className="inline-block mb-8 text-primary-600 hover:text-primary-800">
            ← Back to Projects
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div 
              style={{backgroundColor: project.color}}
              className="w-full h-60 md:h-80 flex items-center justify-center text-white text-5xl font-bold"
            >
              {project.title.charAt(0)}
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About this Collection</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.details}
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12">
                <Link 
                  to="/contact" 
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full"
                >
                  Interested? Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetail