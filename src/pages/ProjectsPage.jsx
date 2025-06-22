import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProjectsPage() {
  // Project data (this would typically come from an API or CMS)
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
    },
    {
      id: 'urban-art',
      title: 'Urban Art Series',
      description: 'Street art inspired sticker collection',
      color: '#EC4899',
      tag: '🏙️ URBAN'
    },
    {
      id: 'retro-vibes',
      title: 'Retro Vibes',
      description: 'Nostalgic 80s and 90s inspired designs',
      color: '#F59E0B',
      tag: '🕹️ RETRO'
    },
    {
      id: 'mini-monsters',
      title: 'Mini Monsters',
      description: 'Cute and quirky monster character stickers',
      color: '#10B981',
      tag: '👾 CUTE'
    }
  ]

  return (
    <div>
      <Header />
      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">All Projects</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Browse through my complete collection of sticker designs and digital art projects
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <div 
                  key={project.id}
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
                    <a 
                      href={`/projects/${project.id}`}
                      className="inline-block text-primary-600 hover:text-primary-800 font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage