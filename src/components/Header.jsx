import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* Use a colored div instead of an image for the logo */}
          <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">S</div>
          <span className="ml-2 text-xl font-bold">StixNVibes</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-primary-500">Home</Link></li>
            <li><Link to="/projects" className="hover:text-primary-500">Projects</Link></li>
            <li><Link to="/about" className="hover:text-primary-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary-500">Contact</Link></li>
          </ul>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col">
              <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link></li>
              <li><Link to="/projects" className="block px-4 py-2 hover:bg-gray-100">Projects</Link></li>
              <li><Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link></li>
              <li><Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link></li>
            </ul>
          </nav>
        )}
        
        {/* Sticker badge */}
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary-500 text-white text-xs rounded-full p-2 animate-bounce">
            New Drop!
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header