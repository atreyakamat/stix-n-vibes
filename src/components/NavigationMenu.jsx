import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Icons (simple implementation of the lucide icons)
const CircleCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const CircleHelpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

const CircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

// Sample components data (you can customize this based on your website content)
const components = [
  {
    title: "Stickers",
    href: "/projects",
    description:
      "Explore our collection of unique, custom-designed stickers to express your personality."
  },
  {
    title: "Polaroids",
    href: "/projects",
    description:
      "Capture moments with our special polaroid designs that blend nostalgia with style."
  },
  {
    title: "Custom Designs",
    href: "/projects",
    description:
      "Get personalized designs that are tailored to your specific vision and needs."
  },
  {
    title: "Collections",
    href: "/portfolio",
    description: 
      "Browse our themed collections of stickers and polaroids for special occasions."
  },
  {
    title: "New Releases",
    href: "/portfolio",
    description:
      "Check out our latest designs hot off the press and be the first to get them."
  },
  {
    title: "Gift Sets",
    href: "/projects",
    description:
      "Perfect pre-packaged sets of our products that make great gifts for friends and family."
  }
];

// ListItem component for menu content
function ListItem({ title, children, href }) {
  return (
    <li>
      <Link 
        to={href} 
        className="block p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="text-sm leading-none font-medium mb-1">{title}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug">
          {children}
        </p>
      </Link>
    </li>
  );
}

// Main NavigationMenu component
export function NavigationMenu({ isDarkMode }) {
  const [activeItem, setActiveItem] = useState(null);
  
  const textColor = isDarkMode ? "text-white" : "text-[#181111]";
  const hoverColor = isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const borderColor = isDarkMode ? "border-gray-800" : "border-gray-200";
  
  // Menu trigger style
  const menuTriggerStyle = `px-4 py-2 ${textColor} text-sm font-medium rounded-md ${hoverColor} transition-colors`;
  
  return (
    <nav className="relative z-50">
      <ul className="flex gap-1">
        {/* Home Menu */}
        <li className="relative">
          <button 
            onClick={() => setActiveItem(activeItem === 'home' ? null : 'home')}
            className={`${menuTriggerStyle} ${activeItem === 'home' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
            aria-expanded={activeItem === 'home'}
          >
            Home
            <span className="ml-1 inline-block transition-transform duration-200" style={{ transformOrigin: '50% 55%' }}>
              {activeItem === 'home' ? '▲' : '▼'}
            </span>
          </button>
          <AnimatePresence>
            {activeItem === 'home' && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 top-full mt-1 w-[400px] rounded-md border ${borderColor} ${bgColor} shadow-lg`}
              >
                <div className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3">
                    <Link
                      className={`from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md`}
                      to="/"
                      onClick={() => setActiveItem(null)}
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        Stix N Vibes
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-tight">
                        Creative stickers and polaroids to express your unique style.
                      </p>
                    </Link>
                  </div>
                  <ListItem href="/" title="Home" onClick={() => setActiveItem(null)}>
                    Return to our main page with the latest featured collections.
                  </ListItem>
                  <ListItem href="/about" title="About Us" onClick={() => setActiveItem(null)}>
                    Learn about our company, mission and creative process.
                  </ListItem>
                  <ListItem href="/contact" title="Get In Touch" onClick={() => setActiveItem(null)}>
                    Have questions? Contact us for custom orders and support.
                  </ListItem>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        
        {/* Products Menu */}
        <li className="relative">
          <button 
            onClick={() => setActiveItem(activeItem === 'products' ? null : 'products')}
            className={`${menuTriggerStyle} ${activeItem === 'products' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
            aria-expanded={activeItem === 'products'}
          >
            Products
            <span className="ml-1 inline-block transition-transform duration-200" style={{ transformOrigin: '50% 55%' }}>
              {activeItem === 'products' ? '▲' : '▼'}
            </span>
          </button>
          <AnimatePresence>
            {activeItem === 'products' && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 top-full mt-1 w-[500px] rounded-md border ${borderColor} ${bgColor} shadow-lg`}
              >
                <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      onClick={() => setActiveItem(null)}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        
        {/* Simple Links */}
        <li>
          <Link to="/portfolio" className={menuTriggerStyle} onClick={() => setActiveItem(null)}>
            Portfolio
          </Link>
        </li>
        
        {/* About Dropdown */}
        <li className="relative">
          <button 
            onClick={() => setActiveItem(activeItem === 'about' ? null : 'about')}
            className={`${menuTriggerStyle} ${activeItem === 'about' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
            aria-expanded={activeItem === 'about'}
          >
            About
            <span className="ml-1 inline-block transition-transform duration-200" style={{ transformOrigin: '50% 55%' }}>
              {activeItem === 'about' ? '▲' : '▼'}
            </span>
          </button>
          <AnimatePresence>
            {activeItem === 'about' && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.2 }}
                className={`absolute right-0 top-full mt-1 w-[300px] rounded-md border ${borderColor} ${bgColor} shadow-lg`}
              >
                <div className="p-4 space-y-4">
                  <Link to="/about" className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md" onClick={() => setActiveItem(null)}>
                    <div className="font-medium">Our Story</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Learn about how Stix N Vibes started and our mission.
                    </div>
                  </Link>
                  <Link to="/about" className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md" onClick={() => setActiveItem(null)}>
                    <div className="font-medium">Our Team</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Meet the creative minds behind our products.
                    </div>
                  </Link>
                  <Link to="/contact" className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md" onClick={() => setActiveItem(null)}>
                    <div className="font-medium">Contact Us</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Get in touch for inquiries and custom orders.
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        
        {/* Contact Link */}
        <li>
          <Link to="/contact" className={menuTriggerStyle} onClick={() => setActiveItem(null)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
