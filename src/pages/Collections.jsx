import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import collectionsData from '../data/collections.json';
import productsData from '../data/products.json';

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
  const { addItem, addItemWithMaterial, calculateMaterialPrice, getMaterialOptions } = useCart();

  // Get material options from cart context
  const materialOptions = getMaterialOptions();

  // Get sticker details from products data
  const getStickers = (stickerIds) => {
    return stickerIds.map(id => productsData.find(p => p.id === id)).filter(Boolean);
  };

  const handleAddCollectionToCart = (collection) => {
    // Add the entire collection as one item
    addItem({
      id: collection.id,
      title: collection.title,
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
      if (sticker.type === 'Polaroid') {
        addItem(sticker);
      } else {
        addItemWithMaterial(sticker, selectedMaterial);
      }
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
      if (sticker.type === 'Polaroid') {
        return total + sticker.price;
      } else {
        return total + calculateMaterialPrice(sticker.price, selectedMaterial);
      }
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
          {collectionsData.map((collection, index) => (
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
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Collection Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e92932] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {collection.stickers.length} Stickers
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

                {/* Quick Preview */}
                <div className="mb-4">
                  <h4 className="text-[#1b0e0f] font-semibold mb-2 text-sm">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {collection.isMystery ? (
                      <span className="bg-[#42c4ef] text-white px-2 py-1 rounded-lg text-xs">
                        🎁 Surprise Selection
                      </span>
                    ) : (
                      <>
                        {getStickers(collection.stickers).slice(0, 3).map((sticker, idx) => (
                          <span key={idx} className="bg-[#f8f9fa] text-[#666] px-2 py-1 rounded-lg text-xs">
                            {sticker?.title}
                          </span>
                        ))}
                        {collection.stickers.length > 3 && (
                          <span className="bg-[#42c4ef] text-white px-2 py-1 rounded-lg text-xs">
                            +{collection.stickers.length - 3} more
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>
                
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

            <img
              src={selectedCollection.image}
              alt={selectedCollection.title}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />

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
                {/* Items List */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-[#1b0e0f] mb-3">
                    What's Included ({selectedCollection.stickers.length} stickers):
                  </h4>
                  {selectedCollection.isMystery ? (
                    <div className="text-center p-8 bg-gradient-to-r from-[#42c4ef] to-[#6eb5e0] rounded-2xl text-white">
                      <div className="text-4xl mb-3">🎁</div>
                      <h5 className="text-xl font-bold mb-2">Mystery Surprise!</h5>
                      <p className="opacity-90">
                        We'll handpick 5 amazing stickers from our entire collection just for you.
                        Every pack is unique!
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {getStickers(selectedCollection.stickers).map((sticker, idx) => (
                        <div key={idx} className="bg-[#f8f9fa] rounded-xl p-3 text-center">
                          <img 
                            src={sticker?.image} 
                            alt={sticker?.title}
                            className="w-16 h-16 object-cover rounded-lg mx-auto mb-2"
                          />
                          <span className="text-sm text-[#1b0e0f] font-medium">{sticker?.title}</span>
                          <div className="text-xs text-[#974e52] mt-1">
                            ₹{calculateMaterialPrice(sticker?.price, selectedMaterial)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

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
                {/* Material Selection for Individual Stickers */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-[#1b0e0f] mb-3">
                    🏷️ Choose Material for Individual Stickers:
                  </h4>
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
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-[#1b0e0f]">{material.name}</h5>
                          <span className="text-sm text-[#974e52]">+{Math.round((material.priceMultiplier - 1) * 100)}%</span>
                        </div>
                        <p className="text-xs text-[#974e52] mb-2">
                          {key === 'paper' ? 'Premium paper with vibrant colors' : 'Waterproof & tear-resistant vinyl'}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {key === 'paper' ? (
                            <>
                              <span className="bg-[#f8f9fa] text-[#666] px-2 py-1 rounded text-xs">Cost Effective</span>
                            </>
                          ) : (
                            <>
                              <span className="bg-[#42c4ef] text-white px-2 py-1 rounded text-xs">💧 Waterproof</span>
                              <span className="bg-[#28a745] text-white px-2 py-1 rounded text-xs">💪 Durable</span>
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

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-[#1b0e0f] mb-3">
                    Select Individual Stickers:
                  </h4>
                  {selectedCollection.isMystery ? (
                    <div className="text-center p-6 bg-[#f8f9fa] rounded-2xl">
                      <p className="text-[#974e52]">
                        Individual selection not available for mystery packs. 
                        <br />Purchase the full pack for a surprise!
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {getStickers(selectedCollection.stickers).map((sticker, idx) => (
                        <div 
                          key={idx} 
                          className={`bg-white border-2 rounded-xl p-4 text-center cursor-pointer transition-all hover:scale-105 ${
                            selectedStickers.some(s => s.id === sticker?.id)
                              ? 'border-[#e92932] bg-[#fff5f5]'
                              : 'border-[#e7d0d1] hover:border-[#e92932]'
                          }`}
                          onClick={() => toggleStickerSelection(sticker)}
                        >
                          <img 
                            src={sticker?.image} 
                            alt={sticker?.title}
                            className="w-20 h-20 object-cover rounded-lg mx-auto mb-3"
                          />
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
                </div>

                {selectedStickers.length > 0 && (
                  <div className="mb-6 p-4 bg-[#f3e7e8] rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#1b0e0f] font-medium">Selected ({selectedStickers.length} stickers):</span>
                      <span className="text-[#e92932] font-bold text-lg">₹{getSelectedTotal()}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedStickers.map(sticker => (
                        <span key={sticker.id} className="bg-white px-2 py-1 rounded-lg text-xs text-[#1b0e0f]">
                          {sticker.title}
                        </span>
                      ))}
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
