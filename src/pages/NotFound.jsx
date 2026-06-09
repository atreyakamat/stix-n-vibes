import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-beige">
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-6 py-24 w-full text-center relative">
        {/* Subtle noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-lg"
        >
          {/* Big 404 */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[8rem] sm:text-[10rem] font-bold leading-none tracking-tighter text-gray-900/10 select-none"
          >
            404
          </motion.h1>

          {/* Fun sticker pun */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="-mt-8 sm:-mt-12"
          >
            <span className="text-5xl mb-4 block">😵</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Oh no, this sticker fell off!
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-sm mx-auto">
              Looks like this page peeled away. Don't worry — there are plenty more vibes where that came from.
            </p>

            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors flex items-center gap-3 mx-auto cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative floating stickers */}
          <motion.span
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-8 text-3xl opacity-30 select-none"
          >
            ⭐
          </motion.span>
          <motion.span
            animate={{ y: [0, -15, 0], rotate: [0, -8, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -right-6 text-2xl opacity-25 select-none"
          >
            💀
          </motion.span>
          <motion.span
            animate={{ y: [0, -8, 0], rotate: [0, 10, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 text-2xl opacity-20 select-none"
          >
            🌴
          </motion.span>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
