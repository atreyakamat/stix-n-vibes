import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-[#e92932]">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-[#886364] mb-8 text-center max-w-md">
          Oops! Looks like the page you're looking for has been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/" 
            className="bg-[#e92932] hover:bg-[#d41f28] text-white px-6 py-3 rounded-full font-medium"
          >
            Back to Home
          </Link>
          <Link 
            to="/projects" 
            className="border-2 border-[#e92932] text-[#e92932] hover:bg-[#e9293211] px-6 py-3 rounded-full font-medium"
          >
            Browse Projects
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound