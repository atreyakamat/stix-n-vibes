import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <Portfolio />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default PortfolioPage