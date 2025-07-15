import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

function ShopPage() {
  const [selectedCustomization, setSelectedCustomization] = useState(null);
  const [customDetails, setCustomDetails] = useState({
    type: '',
    imageFile: null,
    spotifyCode: '',
    songName: '',
    artistName: '',
    albumArt: null,
    customText: '',
    notes: '',
    material: 'paper' // Default to paper
  });

  // Global material pricing configuration
  const materialOptions = {
    paper: {
      name: 'Paper Stickers',
      description: 'Premium paper material with vibrant colors. Basic water resistance.',
      priceMultiplier: 1, // Base price
      waterproof: false,
      tearResistant: false,
      icon: '📄',
      characteristics: ['Vibrant Colors', 'Cost Effective', 'Basic Water Resistance', 'Indoor Use']
    },
    vinyl: {
      name: 'Vinyl Stickers',
      description: 'Durable vinyl material that\'s waterproof and tear-resistant. Perfect for outdoor use.',
      priceMultiplier: 1.6, // 60% more expensive
      waterproof: true,
      tearResistant: true,
      icon: '💧',
      characteristics: ['100% Waterproof', 'Tear Resistant', 'UV Protected', 'Indoor & Outdoor']
    }
  };

  const { addItem } = useCart();

  const customizationOptions = [
    {
      id: 'spotify-code',
      title: 'Spotify Code Polaroid',
      description: 'Create a unique polaroid with your favorite song\'s Spotify code. Perfect for music lovers!',
      image: '/assets/polaroids/spotify-code-demo.png',
      basePrice: 149,
      features: ['Custom Spotify Code', 'Song & Artist Name', 'Album Art', 'High-Quality Print'],
      icon: '🎵'
    },
    {
      id: 'photo-only',
      title: 'Custom Photo Polaroid',
      description: 'Turn your precious memories into beautiful polaroid prints with vintage aesthetics.',
      image: '/assets/polaroids/photo-demo.png',
      basePrice: 99,
      features: ['Your Photo', 'Vintage Filter Options', 'Custom Text', 'Premium Paper'],
      icon: '📸'
    },
    {
      id: 'photo-spotify',
      title: 'Photo + Spotify Code',
      description: 'Combine your favorite photo with a Spotify code for the ultimate personalized experience.',
      image: '/assets/polaroids/combo-demo.png',
      basePrice: 179,
      features: ['Custom Photo', 'Spotify Code', 'Song Details', 'Dual Layout'],
      icon: '🎨'
    },
    {
      id: 'coming-soon',
      title: 'More Options Coming Soon',
      description: 'We\'re working on exciting new customization options. Stay tuned for updates!',
      image: '/assets/polaroids/coming-soon.png',
      basePrice: null,
      features: ['QR Codes', 'Video Codes', 'Social Media Integration', 'AR Features'],
      icon: '🚀'
    }
  ];

  // Calculate price based on material selection
  const calculatePrice = (basePrice, material = 'paper') => {
    if (!basePrice) return null;
    return Math.round(basePrice * materialOptions[material].priceMultiplier);
  };

  const handleCustomization = (option) => {
    if (option.id === 'coming-soon') return;
    setSelectedCustomization(option);
    setCustomDetails(prev => ({ ...prev, type: option.id }));
  };

  const handleAddToCart = () => {
    const selectedMaterial = materialOptions[customDetails.material];
    const finalPrice = calculatePrice(selectedCustomization.basePrice, customDetails.material);
    
    const customPolaroid = {
      id: `custom-polaroid-${Date.now()}`,
      title: `Custom ${selectedCustomization.title} (${selectedMaterial.name})`,
      price: finalPrice,
      image: selectedCustomization.image,
      type: 'Polaroid',
      material: customDetails.material,
      customDetails: customDetails,
      description: `Custom polaroid: ${selectedCustomization.description} - ${selectedMaterial.name}`
    };

    addItem(customPolaroid);
    setSelectedCustomization(null);
    setCustomDetails({
      type: '',
      imageFile: null,
      spotifyCode: '',
      songName: '',
      artistName: '',
      albumArt: null,
      customText: '',
      notes: '',
      material: 'paper'
    });
  };

  return (
    <div className="bg-[#fcf8f8] min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <div className="text-6xl mb-4">📸</div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-[#1b0e0f] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            All New Creative
            <span className="block text-[#e92932]">Polaroid Collection</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-[#974e52] mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transform your memories into stunning vintage-style polaroids. From Spotify codes that play your favorite songs 
            to custom photo prints, we bring your creativity to life with premium quality and endless possibilities.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-[#1b0e0f]">✨ Premium Quality</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-[#1b0e0f]">🎵 Spotify Integration</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-[#1b0e0f]">📱 Easy Customization</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-[#1b0e0f]">🚀 Future Ready</span>
            </div>
          </motion.div>
        </div>

        {/* Customization Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {customizationOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                option.id === 'coming-soon' ? 'opacity-75' : 'cursor-pointer hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCustomization(option)}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center">
                <div className="text-8xl">{option.icon}</div>
                {option.id === 'coming-soon' && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-[#42c4ef] text-white px-4 py-2 rounded-full font-bold">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#1b0e0f]">{option.title}</h3>
                  {option.basePrice && (
                    <div className="text-right">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-[#974e52]">📄</span>
                          <span className="text-[#e92932] font-bold">₹{calculatePrice(option.basePrice, 'paper')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-[#974e52]">💧</span>
                          <span className="text-[#974e52] font-semibold">₹{calculatePrice(option.basePrice, 'vinyl')}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <p className="text-[#974e52] mb-4 leading-relaxed">{option.description}</p>
                
                {/* Material Quick Selection */}
                {option.id !== 'coming-soon' && (
                  <div className="mb-4 p-3 bg-[#f8f9fa] rounded-xl">
                    <h4 className="font-semibold text-[#1b0e0f] text-sm mb-2">Choose Material:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center justify-between p-2 bg-white rounded-lg border">
                        <div className="flex items-center gap-2">
                          <span>📄</span>
                          <span className="text-xs font-medium">Paper</span>
                        </div>
                        <span className="text-[#e92932] font-bold text-sm">₹{calculatePrice(option.basePrice, 'paper')}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white rounded-lg border">
                        <div className="flex items-center gap-2">
                          <span>💧</span>
                          <span className="text-xs font-medium">Vinyl</span>
                        </div>
                        <span className="text-[#974e52] font-bold text-sm">₹{calculatePrice(option.basePrice, 'vinyl')}</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#666] mt-2">Choose when customizing</p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#1b0e0f] text-sm">Features:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-[#666] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#e92932] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {option.id !== 'coming-soon' && (
                  <button
                    className="w-full mt-4 bg-[#e92932] text-white py-3 px-6 rounded-xl font-medium hover:bg-[#d61f27] transition-colors"
                  >
                    Customize Now
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#42c4ef] to-[#6eb5e0] rounded-3xl p-8 md:p-12 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Style', desc: 'Select your preferred polaroid customization type' },
              { step: '2', title: 'Upload & Customize', desc: 'Add your photos, Spotify codes, or custom text' },
              { step: '3', title: 'Review & Order', desc: 'Preview your design and place your order via WhatsApp' },
              { step: '4', title: 'Receive Magic', desc: 'Get your premium polaroids delivered to your doorstep' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
              >
                <div className="w-16 h-16 bg-white text-[#42c4ef] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#1b0e0f] text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What's a Spotify Code polaroid?",
                a: "It's a custom polaroid featuring a scannable Spotify code that plays your chosen song when scanned with the Spotify app!"
              },
              {
                q: "What image formats do you accept?",
                a: "We accept JPG, PNG, and HEIC formats. For best quality, use high-resolution images (minimum 1080x1080px)."
              },
              {
                q: "How long does delivery take?",
                a: "Custom polaroids are printed within 3-5 business days and delivered within 7-10 days across India."
              },
              {
                q: "Can I order in bulk?",
                a: "Yes! Contact us via WhatsApp for bulk orders and special pricing for events or gifts."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-4 border border-[#f3e7e8] rounded-xl">
                <h3 className="font-bold text-[#1b0e0f] mb-2">{faq.q}</h3>
                <p className="text-[#974e52] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Customization Modal */}
      {selectedCustomization && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1b0e0f] mb-2">
                  Customize Your {selectedCustomization.title}
                </h3>
                <p className="text-[#974e52]">{selectedCustomization.description}</p>
              </div>
              <button
                onClick={() => setSelectedCustomization(null)}
                className="text-[#974e52] hover:text-[#e92932] transition-colors"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Material Selection */}
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-3">
                  🏷️ Choose Material Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(materialOptions).map(([key, material]) => (
                    <div
                      key={key}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        customDetails.material === key
                          ? 'border-[#e92932] bg-[#fff5f5]'
                          : 'border-[#e7d0d1] hover:border-[#e92932]'
                      }`}
                      onClick={() => setCustomDetails(prev => ({ ...prev, material: key }))}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{material.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-[#1b0e0f]">{material.name}</h4>
                            <span className="text-[#e92932] font-bold">
                              ₹{calculatePrice(selectedCustomization.basePrice, key)}
                            </span>
                          </div>
                          <p className="text-xs text-[#974e52] mb-2">{material.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {material.characteristics.map((char, idx) => (
                              <span key={idx} className="bg-[#f8f9fa] text-[#666] px-2 py-1 rounded text-xs">
                                {char}
                              </span>
                            ))}
                          </div>
                          {customDetails.material === key && (
                            <div className="mt-2">
                              <span className="bg-[#e92932] text-white px-2 py-1 rounded-full text-xs font-bold">
                                ✓ Selected
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Upload */}
              {(selectedCustomization.id === 'photo-only' || selectedCustomization.id === 'photo-spotify') && (
                <div>
                  <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                    📸 Upload Your Photo
                  </label>
                  <div className="border-2 border-dashed border-[#e7d0d1] rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-[#974e52] text-sm mb-2">Drag and drop or click to upload</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="bg-[#e92932] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#d61f27] transition-colors">
                      Choose Photo
                    </label>
                  </div>
                </div>
              )}

              {/* Spotify Details */}
              {(selectedCustomization.id === 'spotify-code' || selectedCustomization.id === 'photo-spotify') && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                      🎵 Spotify Song URL or Code
                    </label>
                    <input
                      type="text"
                      placeholder="Paste Spotify song link here..."
                      value={customDetails.spotifyCode}
                      onChange={(e) => setCustomDetails(prev => ({ ...prev, spotifyCode: e.target.value }))}
                      className="w-full p-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#1b0e0f] mb-2">Song Name</label>
                      <input
                        type="text"
                        placeholder="Song title"
                        value={customDetails.songName}
                        onChange={(e) => setCustomDetails(prev => ({ ...prev, songName: e.target.value }))}
                        className="w-full p-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1b0e0f] mb-2">Artist Name</label>
                      <input
                        type="text"
                        placeholder="Artist name"
                        value={customDetails.artistName}
                        onChange={(e) => setCustomDetails(prev => ({ ...prev, artistName: e.target.value }))}
                        className="w-full p-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Custom Text */}
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                  ✨ Custom Text (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Add a personal message or date..."
                  value={customDetails.customText}
                  onChange={(e) => setCustomDetails(prev => ({ ...prev, customText: e.target.value }))}
                  className="w-full p-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-bold text-[#1b0e0f] mb-2">
                  📝 Special Instructions (Optional)
                </label>
                <textarea
                  placeholder="Any special requests or notes for your polaroid..."
                  value={customDetails.notes}
                  onChange={(e) => setCustomDetails(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full p-3 border border-[#e7d0d1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e92932] resize-none"
                  rows={3}
                />
              </div>

              {/* Price Display */}
              <div className="bg-[#f3e7e8] p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#1b0e0f] font-bold">Selected Material:</span>
                  <span className="text-[#1b0e0f] font-medium">
                    {materialOptions[customDetails.material].name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1b0e0f] font-bold">Total Price:</span>
                  <span className="text-[#e92932] font-bold text-2xl">
                    ₹{calculatePrice(selectedCustomization.basePrice, customDetails.material)}
                  </span>
                </div>
                <div className="mt-2 text-xs text-[#974e52]">
                  <div className="flex items-center gap-2 mb-1">
                    <span>Material: {materialOptions[customDetails.material].name}</span>
                    {materialOptions[customDetails.material].waterproof && (
                      <span className="bg-[#42c4ef] text-white px-2 py-1 rounded-full text-xs">💧 Waterproof</span>
                    )}
                    {materialOptions[customDetails.material].tearResistant && (
                      <span className="bg-[#28a745] text-white px-2 py-1 rounded-full text-xs">💪 Tear Resistant</span>
                    )}
                  </div>
                  <p>Includes premium printing, packaging, and shipping across India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setSelectedCustomization(null)}
                className="flex-1 border border-[#e7d0d1] text-[#974e52] py-3 px-6 rounded-xl hover:bg-[#f3e7e8] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#e92932] text-white py-3 px-6 rounded-xl hover:bg-[#d61f27] transition-colors font-medium"
              >
                Add to Cart - ₹{calculatePrice(selectedCustomization.basePrice, customDetails.material)}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ShopPage;
