import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

function Collections() {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedStickers, setSelectedStickers] = useState([]);
  const [showIndividualView, setShowIndividualView] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState('paper');
  const { addToCart } = useCart();

  // Collections data
  const collections = [
    {
      id: 1,
      title: "Aesthetic Vibes",
      description: "Curated collection of aesthetic stickers perfect for journaling and decoration",
      price: 299,
      originalPrice: 450,
      image: "/assets/stickers/collections/aesthetic-vibes.png",
      tags: ["Aesthetic", "Pastel", "Minimalist"],
      stickers: [1, 2, 3, 4, 5],
      isLimited: false,
      isMystery: false
    },
    {
      id: 2,
      title: "Nature Pack",
      description: "Beautiful nature-inspired designs bringing the outdoors to your space",
      price: 399,
      originalPrice: 550,
      image: "/assets/stickers/collections/nature-pack.png",
      tags: ["Nature", "Green", "Organic"],
      stickers: [6, 7, 8, 9, 10],
      isLimited: false,
      isMystery: false
    },
    {
      id: 3,
      title: "Retro Collection",
      description: "Vintage and retro style stickers with nostalgic vibes",
      price: 349,
      originalPrice: 475,
      image: "/assets/stickers/collections/retro-collection.png",
      tags: ["Retro", "Vintage", "Classic"],
      stickers: [11, 12, 13, 14, 15],
      isLimited: true,
      isMystery: false
    },
    {
      id: 4,
      title: "Mystery Pack",
      description: "Surprise selection of 5 premium stickers - every pack is unique!",
      price: 199,
      image: "/assets/stickers/collections/mystery-pack.png",
      tags: ["Mystery", "Surprise", "Random"],
      stickers: [],
      isLimited: false,
      isMystery: true
    }
  ];

  // Material options
  const materialOptions = {
    paper: { name: "Premium Paper", priceMultiplier: 1 },
    vinyl: { name: "Waterproof Vinyl", priceMultiplier: 1.5 }
  };

  // Mock products data for individual stickers
  const mockProducts = [
    { id: 1, title: "Sunset Vibes", price: 89, image: "/assets/stickers/just-stickers/sunset.png", type: "Sticker" },
    { id: 2, title: "Coffee Love", price: 79, image: "/assets/stickers/just-stickers/coffee.png", type: "Sticker" },
    { id: 3, title: "Moon Child", price: 99, image: "/assets/stickers/just-stickers/moon.png", type: "Sticker" },
    { id: 4, title: "Plant Baby", price: 85, image: "/assets/stickers/just-stickers/plant.png", type: "Sticker" },
    { id: 5, title: "Good Vibes", price: 75, image: "/assets/stickers/just-stickers/vibes.png", type: "Sticker" }
  ];

  const calculateMaterialPrice = (basePrice, material) => {
    return Math.round(basePrice * materialOptions[material].priceMultiplier);
  };

  const getStickers = (stickerIds) => {
    return stickerIds.map(id => mockProducts.find(p => p.id === id)).filter(Boolean);
  };

  const handleAddCollectionToCart = (collection) => {
    addToCart({
      id: `collection-${collection.id}`,
      name: collection.title,
      price: collection.price,
      image: collection.image,
      type: 'Collection',
      description: collection.description,
      itemCount: collection.stickers.length
    });
    setSelectedCollection(null);
  };

  const handleAddSelectedStickers = () => {
    selectedStickers.forEach(sticker => {
      const finalPrice = calculateMaterialPrice(sticker.price, selectedMaterial);
      addToCart({
        id: `${sticker.id}-${selectedMaterial}`,
        name: sticker.title,
        price: finalPrice,
        image: sticker.image,
        material: selectedMaterial
      });
    });
    setSelectedStickers([]);
    setShowIndividualView(false);
    setSelectedCollection(null);
    setSelectedMaterial('paper');
  };

  const toggleStickerSelection = (sticker) => {
    setSelectedStickers(prev => {
      const isSelected = prev.some(s => s.id === sticker.id);
      if (isSelected) {
        return prev.filter(s => s.id !== sticker.id);
      } else {
        return [...prev, sticker];
      }
    });
  };

  const getSelectedTotal = () => {
    return selectedStickers.reduce((total, sticker) => {
      return total + calculateMaterialPrice(sticker.price, selectedMaterial);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 text-4xl opacity-20">📚</div>
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
                Curated Collections
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully crafted sticker collections. Each pack tells a story, captures a vibe, and brings your world to life.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                📚 Themed Collections
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                ✨ Premium Quality
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                🎨 Artist Collaborations
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCollection(collection)}
            >
              <div className="relative overflow-hidden h-64">
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl">🎨</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Collection Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e92932] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {collection.isMystery ? "5" : collection.stickers.length} Stickers
                  </span>
                </div>

                {/* Special Tags */}
                {collection.isLimited && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#ff6b9d] text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      Limited Edition
                    </span>
                  </div>
                )}

                {collection.isMystery && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#42c4ef] text-white px-3 py-1 rounded-full text-xs font-bold">
                      Mystery Pack
                    </span>
                  </div>
                )}

                {/* Price & Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-2">{collection.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">{collection.tags[0]}</span>
                    <span className="text-white text-2xl font-bold">₹{collection.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-[#974e52] text-sm mb-4 line-clamp-3">{collection.description}</p>
                
                {/* Value Comparison */}
                {collection.originalPrice && (
                  <div className="mb-4 p-3 bg-[#f3e7e8] rounded-xl">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#974e52]">Individual Price:</span>
                      <span className="line-through text-[#974e52]">₹{collection.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-bold mt-1">
                      <span className="text-[#e92932]">Collection Price:</span>
                      <span className="text-[#e92932]">₹{collection.price}</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="bg-[#e92932] text-white px-2 py-1 rounded-full text-xs font-bold">
                        Save ₹{collection.originalPrice - collection.price}
                      </span>
                    </div>
                  </div>
                )}
                
                <button className="w-full bg-[#e92932] text-white py-3 px-6 rounded-xl font-medium hover:bg-[#d61f27] transition-colors transform hover:scale-105 duration-200">
                  View Collection
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offers Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#42c4ef] to-[#6eb5e0] rounded-3xl p-8 text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Mix & Match Deal</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Buy any 2 collections and get 15% off! Perfect for gifting or expanding your sticker library.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Free Shipping</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Premium Quality</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Waterproof</span>
          </div>
        </motion.div>
      </main>

      {/* Collection Detail Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1b0e0f] mb-2">{selectedCollection.title}</h3>
                <p className="text-[#974e52] text-sm">{selectedCollection.tags[0]}</p>
                {selectedCollection.isLimited && (
                  <span className="inline-block bg-[#ff6b9d] text-white px-2 py-1 rounded-full text-xs font-bold mt-2">
                    Limited Edition
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedCollection(null);
                  setShowIndividualView(false);
                  setSelectedStickers([]);
                }}
                className="text-[#974e52] hover:text-[#e92932] transition-colors"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
                </svg>
              </button>
            </div>

            <div className="w-full h-64 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-6xl">🎨</span>
            </div>

            <p className="text-[#974e52] mb-6">{selectedCollection.description}</p>

            {/* View Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setShowIndividualView(false)}
                className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                  !showIndividualView 
                    ? 'bg-[#e92932] text-white' 
                    : 'bg-[#f3e7e8] text-[#974e52] hover:bg-[#e7d0d1]'
                }`}
              >
                Full Pack
              </button>
              <button
                onClick={() => setShowIndividualView(true)}
                className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                  showIndividualView 
                    ? 'bg-[#e92932] text-white' 
                    : 'bg-[#f3e7e8] text-[#974e52] hover:bg-[#e7d0d1]'
                }`}
              >
                Individual Stickers
              </button>
            </div>

            {!showIndividualView ? (
              /* Full Pack View */
              <div>
                {/* Pricing */}
                {selectedCollection.originalPrice && (
                  <div className="mb-6 p-4 bg-[#f3e7e8] rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#974e52]">Individual prices total:</span>
                      <span className="line-through text-[#974e52]">₹{selectedCollection.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#1b0e0f] font-bold">Collection price:</span>
                      <span className="text-[#e92932] font-bold text-xl">₹{selectedCollection.price}</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-[#e92932] text-white px-3 py-1 rounded-full text-sm font-bold">
                        You save ₹{selectedCollection.originalPrice - selectedCollection.price}!
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedCollection(null);
                      setShowIndividualView(false);
                      setSelectedStickers([]);
                    }}
                    className="flex-1 border border-[#e7d0d1] text-[#974e52] py-3 px-6 rounded-xl hover:bg-[#f3e7e8] transition-colors"
                  >
                    Continue Browsing
                  </button>
                  <button
                    onClick={() => handleAddCollectionToCart(selectedCollection)}
                    className="flex-1 bg-[#e92932] text-white py-3 px-6 rounded-xl hover:bg-[#d61f27] transition-colors font-medium"
                  >
                    Add Full Pack - ₹{selectedCollection.price}
                  </button>
                </div>
              </div>
            ) : (
              /* Individual Stickers View */
              <div>
                {/* Material Selection */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-[#1b0e0f] mb-3">Choose Material:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(materialOptions).map(([key, material]) => (
                      <div
                        key={key}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          selectedMaterial === key
                            ? 'border-[#e92932] bg-[#fff5f5]'
                            : 'border-[#e7d0d1] hover:border-[#e92932]'
                        }`}
                        onClick={() => setSelectedMaterial(key)}
                      >
                        <h5 className="font-bold text-[#1b0e0f]">{material.name}</h5>
                        <p className="text-xs text-[#974e52]">
                          +{Math.round((material.priceMultiplier - 1) * 100)}% price
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedCollection.isMystery ? (
                  <div className="text-center p-6 bg-[#f8f9fa] rounded-2xl">
                    <p className="text-[#974e52]">
                      Individual selection not available for mystery packs.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {getStickers(selectedCollection.stickers).map((sticker, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-white border-2 rounded-xl p-4 text-center cursor-pointer transition-all ${
                          selectedStickers.some(s => s.id === sticker?.id)
                            ? 'border-[#e92932] bg-[#fff5f5]'
                            : 'border-[#e7d0d1] hover:border-[#e92932]'
                        }`}
                        onClick={() => toggleStickerSelection(sticker)}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <span className="text-2xl">🎨</span>
                        </div>
                        <h5 className="text-sm font-medium text-[#1b0e0f] mb-1">{sticker?.title}</h5>
                        <div className="text-[#e92932] font-bold">
                          ₹{calculateMaterialPrice(sticker?.price, selectedMaterial)}
                        </div>
                        
                        {selectedStickers.some(s => s.id === sticker?.id) && (
                          <div className="mt-2">
                            <span className="bg-[#e92932] text-white px-2 py-1 rounded-full text-xs">
                              ✓ Selected
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {selectedStickers.length > 0 && (
                  <div className="mb-6 p-4 bg-[#f3e7e8] rounded-2xl">
                    <div className="flex items-center justify-between">
                      <span className="text-[#1b0e0f] font-medium">Selected ({selectedStickers.length}):</span>
                      <span className="text-[#e92932] font-bold text-lg">₹{getSelectedTotal()}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedCollection(null);
                      setShowIndividualView(false);
                      setSelectedStickers([]);
                    }}
                    className="flex-1 border border-[#e7d0d1] text-[#974e52] py-3 px-6 rounded-xl hover:bg-[#f3e7e8] transition-colors"
                  >
                    Cancel
                  </button>
                  {selectedStickers.length > 0 && (
                    <button
                      onClick={handleAddSelectedStickers}
                      className="flex-1 bg-[#e92932] text-white py-3 px-6 rounded-xl hover:bg-[#d61f27] transition-colors font-medium"
                    >
                      Add Selected - ₹{getSelectedTotal()}
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Collections;