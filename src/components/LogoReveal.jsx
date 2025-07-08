import React from 'react';
import { motion } from 'framer-motion';

const LogoReveal = () => {
  // Animation variants for text reveal
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    }
  };

  // Split text for individual letter animations
  const logoText = "Stix N Vibes";
  const letters = Array.from(logoText);

  return (
    <motion.div 
      className="relative" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated logo background */}
      <motion.div
        className="absolute inset-0 bg-[#e92932] opacity-10 rounded-full -z-10"
        style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Animated text reveal */}
      <motion.div
        className="flex justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-3xl md:text-4xl font-bold text-[#e92932]"
            variants={item}
            style={{ display: 'inline-block', marginRight: letter === ' ' ? '0.5rem' : '0.1rem' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Subtitle with fade in */}
      <motion.p
        className="text-sm text-gray-600 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Est. 2018
      </motion.p>
    </motion.div>
  );
};

export default LogoReveal;
