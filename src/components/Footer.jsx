import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              {/* Use a colored div instead of an image for the logo */}
              <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">S</div>
              <span className="ml-2 text-xl font-bold">StixNVibes</span>
            </Link>
            <p className="mt-2 text-gray-400">Designs that stick. Ideas that pop.</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-primary-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              <span className="sr-only">Etsy</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.59,5.25H17a.74.74,0,0,0,.67-.91c-.25-1.36-.49-2.64-.72-3.85A.39.39,0,0,0,16.57,0H7.93A.4.4,0,0,0,7.52.47c-.18.85-.51,2.62-.51,2.62-.14.67.47.75.76.75A19.23,19.23,0,0,0,9.59,3.7V5.25Zm-.35,16.5a.91.91,0,0,0,.45.06,53.86,53.86,0,0,0,6.62-.51.35.35,0,0,0,.24-.29c.25-1.81.5-3.49.77-5.18a.63.63,0,0,0-.63-.76c-.89,0-1.78,0-2.67,0-.22,0-.33.12-.35.35-.22,1.77-.16,1.6-.76 4.39a33.23,33.23,0,0,1-3.23.16c-1.18,0-1.89-.48-1.89-1.55,0-.83,0-1.63,0-2.68,0-.4,0-.4.41-.4h2.79a.33.33,0,0,0,.34-.27c.08-.5.14-1,.22-1.48.08-.51.06-.55-.44-.55H7.83c-.42,0-.42,0-.42-.42V10.64c0-.41,0-.41.42-.41h4.13a.33.33,0,0,0,.35-.28c.11-.55.22-1.09.31-1.64s0-.6-.57-.6H5.27a.34.34,0,0,0-.37.34V19.41A2.14,2.14,0,0,0,9.24,21.75Z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} StixNVibes. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer