import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, MessageCircle, Mail } from 'lucide-react'
import Logo from './Logo'

// Lazy load the heavy R3F game component to optimize bundle size
const DinoGame3D = React.lazy(() => import('./DinoGame3D'));

export function Footer() {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6 sm:px-12 relative z-20 overflow-hidden">
      
      {/* Visual background decals */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neutral-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Top row: Logo + Nav + Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          
          {/* Logo block */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <Logo className="w-5 h-5 shrink-0" />
              <Link 
                to="/" 
                className="text-[#E1E0CC] hover:text-[#DEDBC8] font-bold text-base tracking-normal font-sans transition-colors lowercase"
              >
                stix n vibes.
              </Link>
              <span className="text-[10px] text-gray-600 font-mono">© 2026</span>
            </div>
            <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
              creative stickers born in Goa 🏖️
            </p>
          </div>

          {/* Footer shortcuts */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
            
            {/* Secret 3D Dino Game shortcut */}
            <button
              onClick={() => setIsGameOpen(true)}
              className="hover:text-[#E1E0CC] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>🕹️ Dino Game</span>
            </button>

            <Link to="/story" className="hover:text-[#E1E0CC] transition-colors flex items-center gap-0.5">
              <span>Story</span>
              <ArrowUpRight className="w-3 h-3 text-gray-600" />
            </Link>

            <Link to="/packs" className="hover:text-[#E1E0CC] transition-colors flex items-center gap-0.5">
              <span>Shop</span>
              <ArrowUpRight className="w-3 h-3 text-gray-600" />
            </Link>

            <Link to="/custom" className="hover:text-[#E1E0CC] transition-colors flex items-center gap-0.5">
              <span>Configure</span>
              <ArrowUpRight className="w-3 h-3 text-gray-600" />
            </Link>

            <Link to="/faq" className="hover:text-[#E1E0CC] transition-colors flex items-center gap-0.5">
              <span>FAQ</span>
              <ArrowUpRight className="w-3 h-3 text-gray-600" />
            </Link>
          </div>
        </div>

        {/* Bottom row: Social icons + tagline */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
            Made with ✦ in Goa, India
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/stixnvibes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#E1E0CC] transition-colors"
            >
              <Camera className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/917744020601" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#E1E0CC] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a 
              href="mailto:hello@stixnvibes.com"
              className="text-gray-600 hover:text-[#E1E0CC] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* R3F Hidden Game portal overlay container */}
      {isGameOpen && (
        <React.Suspense fallback={null}>
          <DinoGame3D isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
        </React.Suspense>
      )}

    </footer>
  );
}
export default Footer;
