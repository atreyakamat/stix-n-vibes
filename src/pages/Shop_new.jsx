import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customNote, setCustomNote] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('paper');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  
  const { addItem, addItemWithMaterial, calculateMaterialPrice, getMaterialOptions } = useCart();

  // Get material options from cart context
  const materialOptions = getMaterialOptions();

  // Filter and category options
  const filterOptions = ['Vinyl', 'Waterproof', 'Normal', 'Polaroid'];
  const categoryOptions = ['Stickers', 'Posters', 'Polaroids'];
  const tagOptions = ['Trending', 'Popular', 'New', 'Artist Drop', 'Limited'];

  // Sample poster data
  const posterSeries = [
    {
      id: 'chaos-energy-series',
      title: 'Chaos Energy Series',
      description: 'A vibrant 3-poster series capturing creative energy',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053900.986.png',
      price: 45,
      type: 'Poster Series',
      tags: ['Abstract', 'Colorful', 'Series']
    }
  ];

  // Single poster samples
  const singlePosters = [
    {
      id: 'single-abstract-1',
      title: 'Abstract Flow',
      description: 'Single poster with flowing abstract design',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053936.483.png',
      price: 18,
      type: 'Single Poster',
      tags: ['Abstract', 'Modern']
    },
    {
      id: 'single-minimal-1',
      title: 'Minimal Lines',
      description: 'Clean geometric single poster',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053558.505.png',
      price: 15,
      type: 'Single Poster',
      tags: ['Minimal', 'Geometric']
    }
  ];

  // Get all products not part of a collection
  const allProducts = productsData.filter(product => !product.collection);

  // Combine all items for filtering
  const allItems = useMemo(() => {
    const items = [...allProducts];
    
    // Add poster series if Posters category is selected or no category filter
    if (selectedCategories.length === 0 || selectedCategories.includes('Posters')) {
      items.push(...posterSeries, ...singlePosters);
    }
    
    return items;
  }, [allProducts, selectedCategories]);

  // Filtered and sorted products
  const filteredItems = useMemo(() => {
    let filtered = allItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesFilters = selectedFilters.length === 0 ||
                            selectedFilters.includes(item.type) ||
                            (item.tags && selectedFilters.some(filter => item.tags.includes(filter)));
      
      const matchesCategory = selectedCategories.length === 0 ||
                             (selectedCategories.includes('Stickers') && !item.type.includes('Poster') && item.type !== 'Polaroid') ||
                             (selectedCategories.includes('Posters') && item.type.includes('Poster')) ||
                             (selectedCategories.includes('Polaroids') && item.type === 'Polaroid');
      
      return matchesSearch && matchesFilters && matchesCategory;
    });

    // Sort items
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [allItems, searchTerm, selectedFilters, selectedCategories, sortBy]);

  const toggleFilter = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleAddToCart = (item, note = '', material = 'paper') => {
    if (item.type === 'Polaroid') {
      addItem({ ...item, customNote: note });
    } else if (item.type.includes('Poster')) {
      addItem({ ...item, customNote: note });
    } else {
      addItemWithMaterial({ ...item, customNote: note }, material);
    }
    setSelectedProduct(null);
    setCustomNote('');
    setSelectedMaterial('paper');
  };

  const surpriseMe = () => {
    const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
    if (randomItem.type === 'Polaroid' || randomItem.type.includes('Poster')) {
      addItem(randomItem);
    } else {
      addItemWithMaterial(randomItem, 'paper');
    }
  };

  return (
    <div className="bg-[#fcf8f8] min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section with Surprise Me */}
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

        {/* Large Feature Boxes - Poster Series and Polaroids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Poster Series Box */}
          <motion.div 
            className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 text-white cursor-pointer hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">🖼️ 3-Poster Design Series</h2>
              <p className="text-lg mb-2">One design. Three pieces. Maximum impact.</p>
              <p className="text-purple-100 mb-6">Perfect for cafes, walls, or personal space takeovers. Bold, balanced, and made to stand out.</p>
              <div className="grid grid-cols-3 gap-2 w-48 mx-auto mb-6">
                <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🖼️</span>
                </div>
              </div>
              <Link
                to="/poster-series"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                View Poster Series →
              </Link>
            </div>
          </motion.div>

          {/* Polaroids Box */}
          <motion.div 
            className="bg-gradient-to-r from-[#e92932] to-[#ff6b9d] rounded-3xl p-8 text-white cursor-pointer hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">📸 Custom Polaroids</h2>
              <p className="text-lg mb-2">Your memories, our magic touch.</p>
              <p className="text-pink-100 mb-6">Transform your favorite photos into beautiful polaroid prints with custom frames and Spotify codes.</p>
              <div className="grid grid-cols-3 gap-2 w-48 mx-auto mb-6">
                <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📷</span>
                </div>
                <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎵</span>
                </div>
                <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💝</span>
                </div>
              </div>
              <Link
                to="/shop-page"
                className="inline-block bg-white text-[#e92932] px-6 py-3 rounded-full font-medium hover:bg-pink-50 transition-colors"
              >
                Create Polaroids →
              </Link>
            </div>
          </motion.div>
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

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategories.includes(category)
                      ? 'bg-[#e92932] text-white'
                      : 'bg-[#f3e7e8] text-[#974e52] hover:bg-[#e7d0d1]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map(filter => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedFilters.includes(filter)
                      ? 'bg-[#42c4ef] text-white'
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
          {(selectedFilters.length > 0 || selectedCategories.length > 0) && (
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
              {selectedCategories.map(category => (
                <span
                  key={category}
                  className="bg-[#42c4ef] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1"
                >
                  {category}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="hover:bg-white hover:bg-opacity-20 rounded-full p-0.5"
                  >
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
                    </svg>
                  </button>
                </span>
              ))}
              <button
                onClick={() => {
                  setSelectedFilters([]);
                  setSelectedCategories([]);
                }}
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
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
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
          {filteredItems.map((item, index) => (
            <ProductCard
              key={item.id}
              product={item}
              viewMode={viewMode}
              onSelectProduct={setSelectedProduct}
              onAddToCart={handleAddToCart}
              index={index}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-[#1b0e0f] mb-2">No items found</h3>
            <p className="text-[#974e52] mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilters([]);
                setSelectedCategories([]);
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

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          customNote={customNote}
          setCustomNote={setCustomNote}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
          materialOptions={materialOptions}
          calculateMaterialPrice={calculateMaterialPrice}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </div>
  );
}

// Product Card Component
const ProductCard = ({ product, viewMode, onSelectProduct, onAddToCart, index }) => {
  return (
    <motion.div
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
        {product.tags?.includes('Popular') && (
          <span className="absolute top-3 left-3 bg-[#e92932] text-white px-2 py-1 rounded-full text-xs font-bold">
            🔥 Popular
          </span>
        )}
        {product.tags?.includes('New') && (
          <span className="absolute top-3 right-3 bg-[#42c4ef] text-white px-2 py-1 rounded-full text-xs font-bold">
            ✨ New
          </span>
        )}
        {product.tags?.includes('Artist Drop') && (
          <span className="absolute top-3 right-3 bg-[#ff6b9d] text-white px-2 py-1 rounded-full text-xs font-bold">
            🎨 Artist
          </span>
        )}
      </div>
      
      <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
        <div>
          <div className={`flex items-start justify-between mb-2 ${viewMode === 'list' ? 'mb-1' : ''}`}>
            <h3 className="font-bold text-[#1b0e0f] text-lg">{product.title}</h3>
            {product.type === 'Polaroid' || product.type?.includes('Poster') ? (
              <span className="text-[#e92932] font-bold text-lg">₹{product.price}</span>
            ) : (
              <div className="text-right">
                <div className="text-[#e92932] font-bold text-lg">₹{product.price}</div>
                <div className="text-[#974e52] text-xs">vinyl available</div>
              </div>
            )}
          </div>
          
          <p className={`text-[#974e52] text-sm mb-3 ${viewMode === 'list' ? 'mb-2' : ''}`}>
            {product.description}
          </p>
          
          {/* Type and Tags */}
          <div className={`flex flex-wrap gap-1 mb-4 ${viewMode === 'list' ? 'mb-2' : ''}`}>
            <span className="bg-[#f3e7e8] text-[#974e52] px-2 py-1 rounded-full text-xs font-medium">
              {product.type}
            </span>
            {product.tags?.slice(0, 2).map(tag => (
              <span key={tag} className="bg-[#e7f3ff] text-[#42c4ef] px-2 py-1 rounded-full text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className={`flex gap-2 ${viewMode === 'list' ? 'mt-auto' : ''}`}>
          {product.type === 'Polaroid' || product.type?.includes('Poster') ? (
            <button
              onClick={() => onSelectProduct(product)}
              className="flex-1 bg-[#e92932] text-white py-2 px-4 rounded-xl font-medium hover:bg-[#d61f27] transition-colors"
            >
              {product.type === 'Polaroid' ? 'Customize' : 'View Details'}
            </button>
          ) : (
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-[#e92932] text-white py-2 px-4 rounded-xl hover:bg-[#d61f27] transition-colors font-medium"
            >
              Add to Cart
            </button>
          )}
          <button
            onClick={() => onSelectProduct(product)}
            className="border border-[#e7d0d1] text-[#974e52] py-2 px-4 rounded-xl hover:bg-[#f3e7e8] transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Product Modal Component
const ProductModal = ({ 
  product, 
  customNote, 
  setCustomNote, 
  selectedMaterial, 
  setSelectedMaterial, 
  materialOptions, 
  calculateMaterialPrice, 
  onClose, 
  onAddToCart 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        className="bg-white rounded-2xl p-6 max-w-md w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h3 className="text-xl font-bold text-[#1b0e0f] mb-4">
          {product.type === 'Polaroid' ? 'Customize' : 'Details:'} {product.title}
        </h3>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
        
        <div className="mb-4">
          <p className="text-[#974e52] mb-3">{product.description}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="bg-[#f3e7e8] text-[#974e52] px-2 py-1 rounded-full text-xs font-medium">
              {product.type}
            </span>
            {product.tags?.map(tag => (
              <span key={tag} className="bg-[#e7f3ff] text-[#42c4ef] px-2 py-1 rounded-full text-xs">
                #{tag}
              </span>
            ))}
          </div>
          
          {!product.type?.includes('Poster') && product.type !== 'Polaroid' && (
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#1b0e0f] mb-3">
                🏷️ Choose Material Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(materialOptions).map(([key, material]) => (
                  <div
                    key={key}
                    className={`border-2 rounded-xl p-3 cursor-pointer transition-all ${
                      selectedMaterial === key
                        ? 'border-[#e92932] bg-[#fff5f5]'
                        : 'border-[#e7d0d1] hover:border-[#e92932]'
                    }`}
                    onClick={() => setSelectedMaterial(key)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-[#1b0e0f] text-sm">{material.name}</h4>
                      <span className="text-[#e92932] font-bold">
                        ₹{calculateMaterialPrice(product.price, key)}
                      </span>
                    </div>
                    <p className="text-xs text-[#974e52] mb-2">{material.name === 'Paper Stickers' ? 'Premium paper with vibrant colors' : 'Waterproof & tear-resistant vinyl'}</p>
                    <div className="flex flex-wrap gap-1">
                      {key === 'paper' ? (
                        <>
                          <span className="bg-[#f8f9fa] text-[#666] px-2 py-1 rounded text-xs">Vibrant Colors</span>
                          <span className="bg-[#f8f9fa] text-[#666] px-2 py-1 rounded text-xs">Cost Effective</span>
                        </>
                      ) : (
                        <>
                          <span className="bg-[#42c4ef] text-white px-2 py-1 rounded text-xs">💧 Waterproof</span>
                          <span className="bg-[#28a745] text-white px-2 py-1 rounded text-xs">💪 Tear Resistant</span>
                        </>
                      )}
                    </div>
                    {selectedMaterial === key && (
                      <div className="mt-2">
                        <span className="bg-[#e92932] text-white px-2 py-1 rounded-full text-xs font-bold">
                          ✓ Selected
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(product.type === 'Polaroid' || product.type?.includes('Poster')) && (
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
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              setCustomNote('');
              setSelectedMaterial('paper');
            }}
            className="flex-1 border border-[#e7d0d1] text-[#974e52] py-2 px-4 rounded-xl hover:bg-[#f3e7e8] transition-colors"
          >
            {product.type === 'Polaroid' ? 'Cancel' : 'Close'}
          </button>
          <button
            onClick={() => onAddToCart(product, customNote, selectedMaterial)}
            className="flex-1 bg-[#e92932] text-white py-2 px-4 rounded-xl hover:bg-[#d61f27] transition-colors"
          >
            Add to Cart - ₹{product.type === 'Polaroid' || product.type?.includes('Poster') ? product.price : calculateMaterialPrice(product.price, selectedMaterial)}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Shop;
