import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
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

  const categories = ['Wall Stickers', 'Laptop Stickers', 'Polaroids'];

  return (
    <section className="py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight">Products</p>
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
        
        {/* Products Grid */}
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
          <motion.a
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="truncate">Order via WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Services