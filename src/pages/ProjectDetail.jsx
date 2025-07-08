import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function ProjectDetail() {
  const { slug } = useParams()
  
  // Mock project data
  const projects = {
    'custom-stickers': {
      title: 'Custom Stickers',
      description: 'Personalized stickers designed to match your unique style and vision.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDadMGajpKCnV_QpEkz1a9nNtVp5W8zJeNX-ZMsDwBeNR_jNA6IU8QVvIWjEdHSAv4DIOFYNFDPD4B4Ka8v90kZkMG8GODLdat-HZlh_VD3GL4VU8xyyyTlL3ZzKffsA6LAxk_opiO2e9pqUJYgROE5aMiI_j-Li3-XHUgy1DRWdzu4mnnJQvC9uEJ__sQ8bLpmU4liB6-BjOd-Oz6gmMJFtp0Ep_zJA2Cgp3R31itDkpx5bG0zwsRRk9cWCAORW3_nXBUHj6UziuE',
    },
    'sticker-packs': {
      title: 'Laptop Stickers - Tech Icons',
      description: 'Themed collections of stickers perfect for decorating laptops, notebooks, and more.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTtMU__8wBDSfqal1Qh9ysOep3H0PU_7jcxhln-fI52-AhNsEGrLcmPf7S7iHnE3lD3sHyR-532ZMKJsNZNcwboGju7KJ2GFHaun69shFy8mIgTdCAiKCiijzMGPJtAlY9_E26mmsbWy4I8Iv0lcr5grqnW_i4rJEpTkS8l9Nugf7lmy8WGB6vCiuMYjg_h3hgH92wV6z0Yvuiwr7gaJz9WkrMaILecQWfuNY37srecUzydb0UA4EGYit9SD3yl6mWj5RpfCIo_aA',
    },
    'digital-art': {
      title: 'Custom Polaroid Prints',
      description: 'One-of-a-kind digital illustrations available as downloads or prints.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3THooUxHsEwRAK110bdi9BefZJ3AtXgyKBUNNvpZeOrVZyOmVCwdgjEvZnWl4XWrIfrGJ888TnrgEg8fT1Rs6wUOxhexhq_8Yk5kzaAH2sz7dSBqHWpJxWISDvCsM8X7t5_xZdywkPTOiT-6h9V8b67aZY5trUO0yI4udxwxSDHQiCKheW92ZRLKID-5NAdzAipheNHSXgIiR2ZvT7YtEibTbb3f9I4i4X93uzyTKmkG3wwR1Qos6QJ_4Ybz1kYkWYzptoLcGo9o',
    }
  }
  
  const project = projects[slug] || {
    title: 'Project not found',
    description: 'The project you are looking for does not exist.',
    imageUrl: 'https://via.placeholder.com/400'
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Link to="/projects" className="text-[#e92932] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                Back to Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-6"
              style={{ backgroundImage: `url("${project.imageUrl}")` }}
            ></motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#181111] text-[32px] font-bold leading-tight mb-2"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#886364] text-base leading-normal mb-6"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <a 
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e92932] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                </svg>
                <span className="truncate">Order via WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ProjectDetail