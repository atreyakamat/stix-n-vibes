import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customNote, setCustomNote] = useState('');
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price-low', 'price-high', 'newest'
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list'
  
  const { addItem } = useCart();

  // Filter options
  const filterOptions = ['Vinyl', 'Waterproof', 'Normal', 'Polaroid'];
  const tagOptions = ['Trending', 'Popular', 'New', 'Artist Drop', 'Limited'];

  // Get all products not part of a collection
  const allProducts = productsData.filter(product => !product.collection);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilters = selectedFilters.length === 0 ||
                            selectedFilters.includes(product.type) ||
                            selectedFilters.some(filter => product.tags.includes(filter));
      
      return matchesSearch && matchesFilters;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id.localeCompare(a.id)); // Assuming newer items have higher IDs
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [allProducts, searchTerm, selectedFilters, sortBy]);

  const toggleFilter = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleAddToCart = (product, note = '') => {
    addItem({ ...product, customNote: note });
    setSelectedProduct(null);
    setCustomNote('');
  };

  const surpriseMe = () => {
    const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];
    addItem(randomProduct);
  };

  return (
    <div className="bg-[#fcf8f8] min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-[#1b0e0f] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Sticker Shop
          </motion.h1>
          <motion.p 
            className="text-[#974e52] text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Express yourself with our curated collection of premium stickers. From vinyl to waterproof, find the perfect way to personalize your world.
          </motion.p>
          
          {/* Surprise Me Button */}
          <motion.button
            onClick={surpriseMe}
            className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ Surprise Me!
          </motion.button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stickers by name or tag..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#974e52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map(filter => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedFilters.includes(filter)
                      ? 'bg-[#e92932] text-white'
                      : 'bg-[#f3e7e8] text-[#974e52] hover:bg-[#e7d0d1]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              {tagOptions.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleFilter(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedFilters.includes(tag)
                      ? 'bg-[#42c4ef] text-white'
                      : 'bg-[#f8f9fa] text-[#666] hover:bg-[#e9ecef]'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Filters */}
          {selectedFilters.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-[#974e52]">Active filters:</span>
              {selectedFilters.map(filter => (
                <span
                  key={filter}
                  className="bg-[#e92932] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1"
                >
                  {filter}
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="hover:bg-white hover:bg-opacity-20 rounded-full p-0.5"
                  >
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
                    </svg>
                  </button>
                </span>
              ))}
              <button
                onClick={() => setSelectedFilters([])}
                className="text-xs text-[#974e52] hover:text-[#e92932] underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Sort and View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#974e52]">
              {filteredProducts.length} sticker{filteredProducts.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#974e52]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#e7d0d1] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent"
              >
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-[#e7d0d1] rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#e92932] text-white' : 'text-[#974e52] hover:bg-[#f3e7e8]'}`}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48ZM104,136H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"/>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[#e92932] text-white' : 'text-[#974e52] hover:bg-[#f3e7e8]'}`}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                {product.tags.includes('Popular') && (
                  <span className="absolute top-3 left-3 bg-[#e92932] text-white px-2 py-1 rounded-full text-xs font-bold">
                    🔥 Popular
                  </span>
                )}
                {product.tags.includes('New') && (
                  <span className="absolute top-3 right-3 bg-[#42c4ef] text-white px-2 py-1 rounded-full text-xs font-bold">
                    ✨ New
                  </span>
                )}
                {product.tags.includes('Artist Drop') && (
                  <span className="absolute top-3 right-3 bg-[#ff6b9d] text-white px-2 py-1 rounded-full text-xs font-bold">
                    🎨 Artist
                  </span>
                )}
              </div>
              
              <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                <div>
                  <div className={`flex items-start justify-between mb-2 ${viewMode === 'list' ? 'mb-1' : ''}`}>
                    <h3 className="font-bold text-[#1b0e0f] text-lg">{product.title}</h3>
                    <span className="text-[#e92932] font-bold text-lg">₹{product.price}</span>
                  </div>
                  
                  <p className={`text-[#974e52] text-sm mb-3 ${viewMode === 'list' ? 'mb-2' : ''}`}>
                    {product.description}
                  </p>
                  
                  {/* Type and Tags */}
                  <div className={`flex flex-wrap gap-1 mb-4 ${viewMode === 'list' ? 'mb-2' : ''}`}>
                    <span className="bg-[#f3e7e8] text-[#974e52] px-2 py-1 rounded-full text-xs font-medium">
                      {product.type}
                    </span>
                    {product.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-[#e7f3ff] text-[#42c4ef] px-2 py-1 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`flex gap-2 ${viewMode === 'list' ? 'mt-auto' : ''}`}>
                  {product.type === 'Polaroid' ? (
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 bg-[#e92932] text-white py-2 px-4 rounded-xl font-medium hover:bg-[#d61f27] transition-colors"
                    >
                      Customize
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-[#e92932] text-white py-2 px-4 rounded-xl hover:bg-[#d61f27] transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="border border-[#e7d0d1] text-[#974e52] py-2 px-4 rounded-xl hover:bg-[#f3e7e8] transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-[#1b0e0f] mb-2">No stickers found</h3>
            <p className="text-[#974e52] mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilters([]);
              }}
              className="bg-[#e92932] text-white px-6 py-2 rounded-xl hover:bg-[#d61f27] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Design Your Own Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] rounded-3xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">Design Your Own Stickers</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Have a custom design in mind? Send us your artwork and we'll create premium stickers just for you!
          </p>
          <a
            href="https://wa.me/917744020601?text=Hi! I'd like to create custom stickers. Can you help me with the process?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#e92932] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5L128,136a79.93,79.93,0,0,1-31.16-31.16l6.66-19.54a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,80.73,40a56.26,56.26,0,0,0-48.26,48.26c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,48.26-48.26A8,8,0,0,0,187.58,144.84Z"/>
            </svg>
            Start Custom Order
          </a>
        </motion.div>
      </main>

      {/* Custom Polaroid Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="text-xl font-bold text-[#1b0e0f] mb-4">
              {selectedProduct.type === 'Polaroid' ? 'Customize' : 'Details:'} {selectedProduct.title}
            </h3>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            
            <div className="mb-4">
              <p className="text-[#974e52] mb-3">{selectedProduct.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="bg-[#f3e7e8] text-[#974e52] px-2 py-1 rounded-full text-xs font-medium">
                  {selectedProduct.type}
                </span>
                {selectedProduct.tags.map(tag => (
                  <span key={tag} className="bg-[#e7f3ff] text-[#42c4ef] px-2 py-1 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="text-[#e92932] font-bold text-xl mb-4">₹{selectedProduct.price}</div>
            </div>

            {selectedProduct.type === 'Polaroid' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1b0e0f] mb-2">
                  Special Instructions (optional)
                </label>
                <textarea
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Tell us about your custom photo or any special requirements..."
                  className="w-full p-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] resize-none"
                  rows={3}
                />
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setCustomNote('');
                }}
                className="flex-1 border border-[#e7d0d1] text-[#974e52] py-2 px-4 rounded-xl hover:bg-[#f3e7e8] transition-colors"
              >
                {selectedProduct.type === 'Polaroid' ? 'Cancel' : 'Close'}
              </button>
              <button
                onClick={() => handleAddToCart(selectedProduct, customNote)}
                className="flex-1 bg-[#e92932] text-white py-2 px-4 rounded-xl hover:bg-[#d61f27] transition-colors"
              >
                Add to Cart - ₹{selectedProduct.price}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Shop;
