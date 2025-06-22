import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Project data with image placeholders instead of imports
const projects = [
  {
    id: 'neon-vibes',
    title: 'Neon Vibes Collection',
    description: 'Electrifying stickers that glow in the dark',
    color: '#8B5CF6',
    tag: '🔥 HOT DROP'
  },
  {
    id: 'nature-stix',
    title: 'Nature Stix',
    description: 'Eco-friendly plant and animal designs',
    color: '#10B981',
    tag: '🌿 ECO'
  },
  {
    id: 'cosmic-doodles',
    title: 'Cosmic Doodles',
    description: 'Space-themed stickers and prints',
    color: '#3B82F6',
    tag: '✨ FEATURED'
  }
]

function FeaturedProjects() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                {/* Placeholder div with background color instead of image */}
                <div 
                  style={{backgroundColor: project.color}}
                  className="w-full h-60 flex items-center justify-center text-white text-3xl font-bold"
                >
                  {project.title.charAt(0)}
                </div>
                <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-block text-primary-600 hover:text-primary-800 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="inline-block border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects