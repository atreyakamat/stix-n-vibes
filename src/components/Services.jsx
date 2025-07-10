import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      id: 'custom-stickers',
      title: 'Custom Stickers',
      description: 'Personalized stickers designed to match your unique style and vision.',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop',
      tag: 'Wall Stickers'
    },
    {
      id: 'sticker-packs',
      title: 'Laptop Stickers - Tech Icons',
      description: 'Themed collections of stickers perfect for decorating laptops, notebooks, and more.',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop',
      tag: 'Laptop Stickers'
    },
    {
      id: 'digital-art',
      title: 'Custom Polaroid Prints',
      description: 'One-of-a-kind digital illustrations available as downloads or prints.',
      imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2669&auto=format&fit=crop',
      tag: 'Polaroids'
    }
  ];

  const categories = ['Wall Stickers', 'Laptop Stickers', 'Polaroids'];

  return (
    <section className="py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight">Our Services</p>
            <p className="text-[#886364] text-sm font-normal leading-normal">
              Explore our curated collection of creative stickers and polaroids, designed to add a personal touch to your space and memories.
            </p>
          </div>
        </div>
        
        {/* Category Tags */}
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {categories.map((category) => (
            <motion.div
              key={category}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f0f0] pl-4 pr-4"
              whileHover={{ scale: 1.05, backgroundColor: '#e5e1e1' }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-[#181111] text-sm font-medium leading-normal">{category}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="flex flex-col gap-3 pb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url("${service.imageUrl}")` }}
              ></div>
              <div>
                <p className="text-[#181111] text-base font-medium leading-normal">{service.title}</p>
                <p className="text-[#886364] text-sm font-normal leading-normal">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex px-4 py-3 justify-center">
          <Link to="/products">
            <motion.button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d91922] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="truncate">View All Products</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services