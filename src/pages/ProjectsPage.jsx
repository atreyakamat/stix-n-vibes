import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function ProjectsPage() {
  const projects = [
    {
      id: 'custom-stickers',
      title: 'Custom Stickers',
      description: 'Personalized stickers designed to match your unique style and vision.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDadMGajpKCnV_QpEkz1a9nNtVp5W8zJeNX-ZMsDwBeNR_jNA6IU8QVvIWjEdHSAv4DIOFYNFDPD4B4Ka8v90kZkMG8GODLdat-HZlh_VD3GL4VU8xyyyTlL3ZzKffsA6LAxk_opiO2e9pqUJYgROE5aMiI_j-Li3-XHUgy1DRWdzu4mnnJQvC9uEJ__sQ8bLpmU4liB6-BjOd-Oz6gmMJFtp0Ep_zJA2Cgp3R31itDkpx5bG0zwsRRk9cWCAORW3_nXBUHj6UziuE',
      tag: 'Wall Stickers'
    },
    {
      id: 'sticker-packs',
      title: 'Laptop Stickers - Tech Icons',
      description: 'Themed collections of stickers perfect for decorating laptops, notebooks, and more.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTtMU__8wBDSfqal1Qh9ysOep3H0PU_7jcxhln-fI52-AhNsEGrLcmPf7S7iHnE3lD3sHyR-532ZMKJsNZNcwboGju7KJ2GFHaun69shFy8mIgTdCAiKCiijzMGPJtAlY9_E26mmsbWy4I8Iv0lcr5grqnW_i4rJEpTkS8l9Nugf7lmy8WGB6vCiuMYjg_h3hgH92wV6z0Yvuiwr7gaJz9WkrMaILecQWfuNY37srecUzydb0UA4EGYit9SD3yl6mWj5RpfCIo_aA',
      tag: 'Laptop Stickers'
    },
    {
      id: 'digital-art',
      title: 'Custom Polaroid Prints',
      description: 'One-of-a-kind digital illustrations available as downloads or prints.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3THooUxHsEwRAK110bdi9BefZJ3AtXgyKBUNNvpZeOrVZyOmVCwdgjEvZnWl4XWrIfrGJ888TnrgEg8fT1Rs6wUOxhexhq_8Yk5kzaAH2sz7dSBqHWpJxWISDvCsM8X7t5_xZdywkPTOiT-6h9V8b67aZY5trUO0yI4udxwxSDHQiCKheW92ZRLKID-5NAdzAipheNHSXgIiR2ZvT7YtEibTbb3f9I4i4X93uzyTKmkG3wwR1Qos6QJ_4Ybz1kYkWYzptoLcGo9o',
      tag: 'Polaroids'
    }
  ];

  const categories = ['All', 'Wall Stickers', 'Laptop Stickers', 'Polaroids'];

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1">
        <div className="px-4 md:px-6 py-5 max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-between gap-3 p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex min-w-72 flex-col gap-3">
              <motion.h1 
                className="text-[#181111] tracking-light text-[32px] font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Our Products
              </motion.h1>
              <motion.p 
                className="text-[#886364] text-sm font-normal leading-normal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Explore our collection of creative stickers and polaroids, designed to add a personal touch to your space.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex gap-3 p-3 flex-wrap pr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f0f0] pl-4 pr-4"
                whileHover={{ scale: 1.05, backgroundColor: '#e5e1e1' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <p className="text-[#181111] text-sm font-medium leading-normal">{category}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="flex flex-col gap-3 pb-3 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/projects/${project.id}`}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
                    style={{ backgroundImage: `url("${project.imageUrl}")` }}
                  >
                    <div className="p-3">
                      <span className="inline-block bg-[#e92932] text-white text-xs px-3 py-1 rounded-full">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h2 className="text-[#181111] text-base font-medium leading-normal">{project.title}</h2>
                    <p className="text-[#886364] text-sm font-normal leading-normal">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex px-4 py-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Request Custom Order</span>
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ProjectsPage