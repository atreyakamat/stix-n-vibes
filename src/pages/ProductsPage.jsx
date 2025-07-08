import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProductsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1 flex justify-center items-center">
        <div className="text-center p-10">
          <h1 className="text-3xl font-bold mb-4">Our Products</h1>
          <p>Coming soon! We're working on updating our product catalog.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ProductsPage