import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)

function SinglePostersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('A4');
  const [selectedMaterial, setSelectedMaterial] = useState('paper');
  const [customNote, setCustomNote] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  
  const { addItem } = useCart();

  // Size and material configurations
  const sizeOptions = {
    'A5': { name: 'A5 (5.8x8.3 inches)', paperPrice: 8, vinylPrice: null },
    'A4': { name: 'A4 (8.3x11.7 inches)', paperPrice: 12, vinylPrice: 18 },
    '9x12': { name: '9x12 inches', paperPrice: 15, vinylPrice: 22 },
    '11x14': { name: '11x14 inches', paperPrice: 18, vinylPrice: 28 },
    '12x18': { name: '12x18 inches', paperPrice: 25, vinylPrice: 38 }
  };

  const materialOptions = {
    paper: { name: 'Premium Paper', description: 'High-quality matte finish paper' },
    vinyl: { name: 'Weather-Resistant Vinyl', description: 'Waterproof & UV resistant' }
  };

  const calculatePrice = (basePrice, size, material) => {
    const sizeConfig = sizeOptions[size];
    if (!sizeConfig) return basePrice;
    
    if (material === 'vinyl' && sizeConfig.vinylPrice === null) {
      return null; // Vinyl not available for this size
    }
    
    return material === 'vinyl' ? sizeConfig.vinylPrice : sizeConfig.paperPrice;
  };

  // Single sheet posters data
  const singlePosters = [
    {
      id: 'single-abstract-1',
      title: 'Abstract Flow',
      description: 'Single poster with flowing abstract design',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053936.483.png',
      basePrice: 18,
      type: 'Single Poster',
      tags: ['Abstract', 'Modern']
    },
    {
      id: 'single-minimal-1',
      title: 'Minimal Lines',
      description: 'Clean geometric single poster',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053558.505.png',
      basePrice: 15,
      type: 'Single Poster',
      tags: ['Minimal', 'Geometric']
    },
    {
      id: 'single-nature-1',
      title: 'Nature\'s Rhythm',
      description: 'Organic patterns meet modern design',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053830.710.png',
      basePrice: 20,
      type: 'Single Poster',
      tags: ['Nature', 'Organic', 'Modern']
    },
    {
      id: 'single-retro-1',
      title: 'Retro Waves',
      description: 'Nostalgic vibes with contemporary twist',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053850.243.png',
      basePrice: 17,
      type: 'Single Poster',
      tags: ['Retro', 'Waves', 'Vintage']
    },
    {
      id: 'single-bold-1',
      title: 'Bold Statement',
      description: 'Eye-catching design for modern spaces',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053916.536.png',
      basePrice: 22,
      type: 'Single Poster',
      tags: ['Bold', 'Modern', 'Statement']
    },
    {
      id: 'single-artistic-1',
      title: 'Artistic Expression',
      description: 'Hand-crafted artistic poster design',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053947.426.png',
      basePrice: 19,
      type: 'Single Poster',
      tags: ['Artistic', 'Handcrafted', 'Expression']
    },
    {
      id: 'single-urban-1',
      title: 'Urban Energy',
      description: 'Street art inspired design',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053942.493.png',
      basePrice: 21,
      type: 'Single Poster',
      tags: ['Urban', 'Street Art', 'Energy']
    },
    {
      id: 'single-dreamy-1',
      title: 'Dreamy Landscapes',
      description: 'Ethereal and calming poster design',
      image: '/assets/stickers/Adobe Express - file - 2025-02-03T053932.177.png',
      basePrice: 18,
      type: 'Single Poster',
      tags: ['Dreamy', 'Landscape', 'Calm']
    }
  ];

  // Filtered and sorted products
  const filteredPosters = useMemo(() => {
    let filtered = singlePosters.filter(poster => {
      const matchesSearch = poster.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          poster.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesSearch;
    });

    // Sort items
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => calculatePrice(a.basePrice, selectedSize, selectedMaterial) - calculatePrice(b.basePrice, selectedSize, selectedMaterial));
        break;
      case 'price-high':
        filtered.sort((a, b) => calculatePrice(b.basePrice, selectedSize, selectedMaterial) - calculatePrice(a.basePrice, selectedSize, selectedMaterial));
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
  }, [singlePosters, searchTerm, selectedSize, selectedMaterial, sortBy]);

  const handleAddToCart = (poster, note = '', size = selectedSize, material = selectedMaterial) => {
    const finalPrice = calculatePrice(poster.basePrice, size, material);
    const posterWithDetails = {
      ...poster,
      price: finalPrice,
      selectedSize: size,
      selectedMaterial: material,
      customNote: note,
      title: `${poster.title} (${sizeOptions[size].name} - ${materialOptions[material].name})`
    };
    addItem(posterWithDetails);
    setSelectedProduct(null);
    setCustomNote('');
    setSelectedSize('A4');
    setSelectedMaterial('paper');
  };

  const surpriseMe = () => {
    const randomPoster = singlePosters[Math.floor(Math.random() * singlePosters.length)];
    handleAddToCart(randomPoster);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 text-4xl opacity-20">🖼️</div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-40 right-20 text-3xl opacity-30">✨</div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-40 left-20 text-5xl opacity-20">🎨</div>
        </FloatingElement>
        <FloatingElement delay={3}>
          <div className="absolute bottom-60 right-10 text-4xl opacity-25">💫</div>
        </FloatingElement>
        <FloatingElement delay={0.5}>
          <div className="absolute top-60 left-1/2 text-3xl opacity-15">🌟</div>
        </FloatingElement>
        <FloatingElement delay={2.5}>
          <div className="absolute top-80 right-1/3 text-4xl opacity-20">🎭</div>
        </FloatingElement>
      </div>

      <Header />
      
      {/* Beautiful Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#e92932] via-[#ff6b9d] to-[#42c4ef] bg-clip-text text-transparent">
                Single Posters
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Individual statement pieces that stand alone beautifully. Choose your favorite design and make it yours.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                🖼️ Individual Pieces
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                ✨ Multiple Sizes
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                🎨 Premium Materials
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Back to Shop Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-[#974e52] hover:text-[#e92932] transition-colors mb-4"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"/>
            </svg>
            Back to Shop
          </Link>
        </motion.div>

        {/* Surprise Me Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.button
            onClick={surpriseMe}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            ✨ Surprise Me with a Poster!
          </motion.button>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search posters by name or style..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#974e52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Size and Material Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-bold text-[#1b0e0f] mb-3">Size</h3>
              <div className="space-y-2">
                {Object.entries(sizeOptions).map(([key, size]) => (
                  <label key={key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={key}
                      checked={selectedSize === key}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-sm text-[#974e52]">
                      {size.name}
                      <span className="ml-2 text-xs">
                        Paper: ₹{size.paperPrice}
                        {size.vinylPrice && ` | Vinyl: ₹${size.vinylPrice}`}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material Selection */}
            <div>
              <h3 className="text-sm font-bold text-[#1b0e0f] mb-3">Material</h3>
              <div className="space-y-3">
                {Object.entries(materialOptions).map(([key, material]) => {
                  const currentPrice = calculatePrice(18, selectedSize, key); // Using base price of 18 for preview
                  const isDisabled = key === 'vinyl' && sizeOptions[selectedSize].vinylPrice === null;
                  
                  return (
                    <label key={key} className={`flex items-start space-x-3 cursor-pointer ${isDisabled ? 'opacity-50' : ''}`}>
                      <input
                        type="radio"
                        name="material"
                        value={key}
                        checked={selectedMaterial === key}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        disabled={isDisabled}
                        className="text-purple-500 focus:ring-purple-500 mt-1"
                      />
                      <div>
                        <span className="text-sm text-[#1b0e0f] font-medium">{material.name}</span>
                        <p className="text-xs text-[#666]">{material.description}</p>
                        {isDisabled && (
                          <p className="text-xs text-red-500">Not available for {sizeOptions[selectedSize].name}</p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Sort and View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#974e52]">
              {filteredPosters.length} {filteredPosters.length === 1 ? 'poster' : 'posters'} found
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#974e52]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#e7d0d1] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className={`p-2 ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-[#974e52] hover:bg-purple-50'}`}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48ZM104,136H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"/>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-[#974e52] hover:bg-purple-50'}`}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Posters Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredPosters.map((poster, index) => (
            <PosterCard
              key={poster.id}
              poster={poster}
              viewMode={viewMode}
              selectedSize={selectedSize}
              selectedMaterial={selectedMaterial}
              sizeOptions={sizeOptions}
              materialOptions={materialOptions}
              calculatePrice={calculatePrice}
              onSelectProduct={setSelectedProduct}
              onAddToCart={handleAddToCart}
              index={index}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredPosters.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-[#1b0e0f] mb-2">No posters found</h3>
            <p className="text-[#974e52] mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
              }}
              className="bg-purple-500 text-white px-6 py-2 rounded-xl hover:bg-purple-600 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Custom Design Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Custom Poster Design</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Have your own design or photo in mind? We can create a custom poster just for you!
          </p>
          <a
            href="https://wa.me/917744020601?text=Hi! I'd like to create a custom poster. Can you help me with the process?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5L128,136a79.93,79.93,0,0,1-31.16-31.16l6.66-19.54a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,80.73,40a56.26,56.26,0,0,0-48.26,48.26c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,48.26-48.26A8,8,0,0,0,187.58,144.84Z"/>
            </svg>
            Order Custom Poster
          </a>
        </motion.div>
      </main>

      {/* Product Details Modal */}
      {selectedProduct && (
        <PosterModal
          poster={selectedProduct}
          customNote={customNote}
          setCustomNote={setCustomNote}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </div>
  );
}

// Poster Card Component
const PosterCard = ({ poster, viewMode, selectedSize, selectedMaterial, sizeOptions, materialOptions, calculatePrice, onSelectProduct, onAddToCart, index }) => {
  const currentPrice = calculatePrice(poster.basePrice, selectedSize, selectedMaterial);
  const isVinylDisabled = selectedMaterial === 'vinyl' && sizeOptions[selectedSize].vinylPrice === null;
  
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
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-40 h-40 flex-shrink-0' : ''}`}>
        <img
          src={poster.image}
          alt={poster.title}
          className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
            viewMode === 'list' ? 'w-full h-full' : 'w-full h-56'
          }`}
        />
        {poster.tags?.includes('Popular') && (
          <span className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            🔥 Popular
          </span>
        )}
        {poster.tags?.includes('New') && (
          <span className="absolute top-3 right-3 bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            ✨ New
          </span>
        )}
      </div>
      
      <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
        <div>
          <div className={`flex items-start justify-between mb-2 ${viewMode === 'list' ? 'mb-1' : ''}`}>
            <h3 className="font-bold text-[#1b0e0f] text-lg">{poster.title}</h3>
            <div className="text-right">
              <span className="text-purple-600 font-bold text-lg">
                {isVinylDisabled ? 'N/A' : `₹${currentPrice}`}
              </span>
              {!isVinylDisabled && (
                <div className="text-xs text-[#666]">
                  {sizeOptions[selectedSize].name} - {materialOptions[selectedMaterial].name}
                </div>
              )}
            </div>
          </div>
          
          <p className={`text-[#974e52] text-sm mb-3 ${viewMode === 'list' ? 'mb-2' : ''}`}>
            {poster.description}
          </p>
          
          {/* Configuration Info */}
          {isVinylDisabled && (
            <div className={`text-xs text-red-500 mb-3 ${viewMode === 'list' ? 'mb-2' : ''}`}>
              <span className="flex items-center gap-1">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"/>
                </svg>
                Vinyl not available for {sizeOptions[selectedSize].name}
              </span>
            </div>
          )}
          
          {/* Tags */}
          <div className={`flex flex-wrap gap-1 mb-4 ${viewMode === 'list' ? 'mb-2' : ''}`}>
            {poster.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className={`flex gap-2 ${viewMode === 'list' ? 'mt-auto' : ''}`}>
          <button
            onClick={() => onAddToCart(poster, '', selectedSize, selectedMaterial)}
            disabled={isVinylDisabled}
            className={`flex-1 py-2 px-4 rounded-xl font-medium transition-colors ${
              isVinylDisabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            {isVinylDisabled ? 'Not Available' : 'Add to Cart'}
          </button>
          <button
            onClick={() => onSelectProduct(poster)}
            className="border border-purple-200 text-purple-600 py-2 px-4 rounded-xl hover:bg-purple-50 transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Poster Modal Component
const PosterModal = ({ 
  poster, 
  customNote, 
  setCustomNote, 
  onClose, 
  onAddToCart 
}) => {
  const [modalSize, setModalSize] = useState('A4');
  const [modalMaterial, setModalMaterial] = useState('paper');
  
  const sizeOptions = {
    'A5': { name: 'A5 (5.8x8.3 inches)', paperPrice: 8, vinylPrice: null },
    'A4': { name: 'A4 (8.3x11.7 inches)', paperPrice: 12, vinylPrice: 18 },
    '9x12': { name: '9x12 inches', paperPrice: 15, vinylPrice: 22 },
    '11x14': { name: '11x14 inches', paperPrice: 18, vinylPrice: 28 },
    '12x18': { name: '12x18 inches', paperPrice: 25, vinylPrice: 38 }
  };

  const materialOptions = {
    paper: { name: 'Premium Paper', description: 'High-quality matte finish paper' },
    vinyl: { name: 'Weather-Resistant Vinyl', description: 'Waterproof & UV resistant' }
  };

  const calculatePrice = (basePrice, size, material) => {
    const sizeConfig = sizeOptions[size];
    if (!sizeConfig) return basePrice;
    
    if (material === 'vinyl' && sizeConfig.vinylPrice === null) {
      return null;
    }
    
    return material === 'vinyl' ? sizeConfig.vinylPrice : sizeConfig.paperPrice;
  };

  const currentPrice = calculatePrice(poster.basePrice, modalSize, modalMaterial);
  const isVinylDisabled = modalMaterial === 'vinyl' && sizeOptions[modalSize].vinylPrice === null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h3 className="text-xl font-bold text-[#1b0e0f] mb-4">
          {poster.title}
        </h3>
        <img
          src={poster.image}
          alt={poster.title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        
        <div className="mb-4">
          <p className="text-[#974e52] mb-3">{poster.description}</p>
          
          {/* Size and Material Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Size Selection */}
            <div>
              <h4 className="font-bold text-[#1b0e0f] mb-2">Size</h4>
              <div className="space-y-2">
                {Object.entries(sizeOptions).map(([key, size]) => (
                  <label key={key} className="flex items-center space-x-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="modalSize"
                      value={key}
                      checked={modalSize === key}
                      onChange={(e) => setModalSize(e.target.value)}
                      className="text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-[#666]">
                      {size.name}
                      <span className="block text-xs">
                        Paper: ₹{size.paperPrice}
                        {size.vinylPrice && ` | Vinyl: ₹${size.vinylPrice}`}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material Selection */}
            <div>
              <h4 className="font-bold text-[#1b0e0f] mb-2">Material</h4>
              <div className="space-y-2">
                {Object.entries(materialOptions).map(([key, material]) => {
                  const isDisabled = key === 'vinyl' && sizeOptions[modalSize].vinylPrice === null;
                  
                  return (
                    <label key={key} className={`flex items-start space-x-2 cursor-pointer text-sm ${isDisabled ? 'opacity-50' : ''}`}>
                      <input
                        type="radio"
                        name="modalMaterial"
                        value={key}
                        checked={modalMaterial === key}
                        onChange={(e) => setModalMaterial(e.target.value)}
                        disabled={isDisabled}
                        className="text-purple-500 focus:ring-purple-500 mt-1"
                      />
                      <div>
                        <span className="text-[#1b0e0f] font-medium">{material.name}</span>
                        <p className="text-xs text-[#666]">{material.description}</p>
                        {isDisabled && (
                          <p className="text-xs text-red-500">Not available for {sizeOptions[modalSize].name}</p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Current Price Display */}
          <div className="bg-purple-50 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-[#1b0e0f]">Selected Configuration</h4>
                <p className="text-sm text-[#666]">
                  {sizeOptions[modalSize].name} - {materialOptions[modalMaterial].name}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-purple-600">
                  {isVinylDisabled ? 'N/A' : `₹${currentPrice}`}
                </span>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {poster.tags?.map(tag => (
              <span key={tag} className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Special Instructions */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1b0e0f] mb-2">
              Special Instructions (optional)
            </label>
            <textarea
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Any special requirements or customization notes..."
              className="w-full p-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows={3}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              setCustomNote('');
            }}
            className="flex-1 border border-[#e7d0d1] text-[#974e52] py-2 px-4 rounded-xl hover:bg-[#f3e7e8] transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => onAddToCart(poster, customNote, modalSize, modalMaterial)}
            disabled={isVinylDisabled}
            className={`flex-1 py-2 px-4 rounded-xl transition-colors ${
              isVinylDisabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            {isVinylDisabled ? 'Not Available' : `Add to Cart - ₹${currentPrice}`}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SinglePostersPage;
