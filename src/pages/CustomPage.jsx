import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// Custom button component
const Button = ({ children, color = "blue", className = "", ...props }) => {
  const colorClasses = {
    blue: "bg-[#42c4ef] text-[#111618] hover:bg-[#2bb4e3]",
    gray: "bg-[#f0f3f4] text-[#111618] hover:bg-[#e0e3e4]",
    red: "bg-[#e92932] text-white hover:bg-[#d91922]",
    white: "bg-white text-[#111618] border border-[#e0e3e4] hover:bg-[#f8f8f8]",
  };

  return (
    <button
      className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${colorClasses[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function CustomPage() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCut, setSelectedCut] = useState('');
  const [needsSpotifyCode, setNeedsSpotifyCode] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isWaterproof, setIsWaterproof] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('vinyl');
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const stickerCuts = [
    { id: 'die-cut', name: '✂️ Die Cut', description: 'Custom shape following your design exactly' },
    { id: 'clean-cut', name: '📐 Clean Cut', description: 'Perfect geometric shapes (square, circle, rectangle)' },
    { id: 'kiss-cut', name: '💋 Kiss Cut', description: 'Easy to peel, leaves backing intact' },
    { id: 'through-cut', name: '🔪 Through Cut', description: 'Cuts completely through backing' },
  ];

  const materialOptions = [
    { id: 'vinyl', name: 'Vinyl', description: 'Durable and weather-resistant', price: 0 },
    { id: 'paper', name: 'Paper', description: 'Eco-friendly for indoor use', price: -2 },
    { id: 'holographic', name: 'Holographic', description: 'Shiny rainbow effect', price: 3 },
    { id: 'transparent', name: 'Transparent', description: 'Clear background', price: 2 },
  ];

  const getPrice = () => {
    let basePrice = 8.99;
    const material = materialOptions.find(m => m.id === selectedMaterial);
    if (material) basePrice += material.price;
    if (isWaterproof) basePrice += 2;
    
    // Bulk discounts
    if (quantity >= 50) basePrice *= 0.8; // 20% off
    else if (quantity >= 20) basePrice *= 0.9; // 10% off
    else if (quantity >= 10) basePrice *= 0.95; // 5% off
    
    return (basePrice * quantity).toFixed(2);
  };

  return (
    <div className="min-h-screen w-full bg-white" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ✂️ Make Your Own <span className="text-[#e92932]">Magic</span>
          </h1>
          <p className="text-lg text-gray-600 text-center mb-4">
            Got art? A logo? Your bestie's face?
          </p>
          <p className="text-lg text-gray-600 text-center mb-12">
            Turn it into a high-quality, stickable masterpiece.
          </p>
        </motion.div>

        {/* Perfect For Section */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">Perfect for:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-3">Small businesses</h3>
              <p className="text-gray-600 text-sm">
                menu labels, merch, mood-setting
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-3">Events + communities</h3>
              <p className="text-gray-600 text-sm">
                gifting, giveaways, identity
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-bold mb-3">Personal chaos</h3>
              <p className="text-gray-600 text-sm">
                inside jokes, fandoms, therapy-in-a-sticker
              </p>
            </div>
          </div>
        </motion.section>

        {/* Step 1: Choose Your Type */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">Step 1: Choose Your Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              onClick={() => setSelectedType('sticker')}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedType === 'sticker' 
                  ? 'border-[#e92932] bg-[#e92932]/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">🏷️ Custom Stickers</h3>
              <p className="text-gray-600 mb-4">
                Perfect for laptops, water bottles, or anywhere you want to add personality
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• ✂️ Die-cut or clean-cut options</li>
                <li>• 💧 Waterproof options available</li>
                <li>• 📦 Bulk discounts for overthinkers</li>
              </ul>
            </div>
            
            <div 
              onClick={() => setSelectedType('polaroid')}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedType === 'polaroid' 
                  ? 'border-[#e92932] bg-[#e92932]/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">📸 Polaroid Style</h3>
              <p className="text-gray-600 mb-4">
                Vintage-style polaroid stickers with optional Spotify codes
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Retro polaroid aesthetic</li>
                <li>• Spotify code integration</li>
                <li>• Perfect for scrapbooking</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Step 2: Sticker Options */}
        {selectedType === 'sticker' && (
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Step 2: Customize Your Sticker</h2>
            
            {/* Cut Style */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Choose Your Cut Style</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stickerCuts.map((cut) => (
                  <div 
                    key={cut.id}
                    onClick={() => setSelectedCut(cut.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedCut === cut.id 
                        ? 'border-[#42c4ef] bg-[#42c4ef]/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h4 className="font-bold mb-1">{cut.name}</h4>
                    <p className="text-sm text-gray-600">{cut.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Choose Your Material</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materialOptions.map((material) => (
                  <div 
                    key={material.id}
                    onClick={() => setSelectedMaterial(material.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedMaterial === material.id 
                        ? 'border-[#e92932] bg-[#e92932]/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{material.name}</h4>
                      <span className="text-sm text-gray-500">
                        {material.price > 0 ? `+$${material.price}` : material.price < 0 ? `$${material.price}` : 'Base'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{material.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Waterproof Option */}
            <div className="mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <label className="flex items-center space-x-3">
                  <input 
                    type="checkbox"
                    checked={isWaterproof}
                    onChange={(e) => setIsWaterproof(e.target.checked)}
                    className="w-5 h-5 text-[#42c4ef] border-gray-300 rounded focus:ring-[#42c4ef]"
                  />
                  <div>
                    <span className="text-lg font-medium">💧 Make it Waterproof</span>
                    <p className="text-sm text-gray-600">Perfect for outdoor use, water bottles, and weather resistance (+$2)</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">📦 Quantity (Bulk Discounts Available!)</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <input 
                    type="number"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="font-bold text-green-600">10-19 stickers</div>
                    <div className="text-gray-600">5% off</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="font-bold text-green-600">20-49 stickers</div>
                    <div className="text-gray-600">10% off</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="font-bold text-green-600">50+ stickers</div>
                    <div className="text-gray-600">20% off</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Step 2: Polaroid Options */}
        {selectedType === 'polaroid' && (
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Step 2: Polaroid Options</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <label className="flex items-center space-x-3 mb-4">
                <input 
                  type="checkbox"
                  checked={needsSpotifyCode}
                  onChange={(e) => setNeedsSpotifyCode(e.target.checked)}
                  className="w-5 h-5 text-[#e92932] border-gray-300 rounded focus:ring-[#e92932]"
                />
                <span className="text-lg font-medium">🎵 Include Spotify Code</span>
              </label>
              
              {needsSpotifyCode && (
                <div className="mt-4 p-4 bg-white rounded-lg border">
                  <label className="block text-sm font-medium mb-2">Spotify Track URL</label>
                  <input 
                    type="url"
                    placeholder="https://open.spotify.com/track/..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    We'll generate a scannable Spotify code for your track
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Step 3: Upload Image */}
        {selectedType && (
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Step 3: Upload Your Image</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              {uploadedImage ? (
                <div className="space-y-4">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded preview" 
                    className="max-w-xs mx-auto rounded-lg shadow-md"
                  />
                  <div>
                    <p className="text-green-600 font-medium mb-2">✅ Image uploaded successfully!</p>
                    <label className="cursor-pointer">
                      <input 
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button color="gray">Change Image</Button>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-4xl">📁</div>
                  <div>
                    <p className="text-lg font-medium mb-2">Upload your design</p>
                    <p className="text-gray-600 mb-4">
                      Drag and drop or click to select your image
                    </p>
                    <label className="cursor-pointer">
                      <input 
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button color="blue">Choose File</Button>
                    </label>
                  </div>
                  <p className="text-sm text-gray-500">
                    Supported formats: PNG, JPG, SVG (Max 10MB)
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Step 4: Submit Order */}
        {selectedType && uploadedImage && (
          <motion.section 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Ready to Order?</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold mb-4">Order Summary:</h3>
              <div className="text-left space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-medium">{selectedType === 'sticker' ? 'Custom Sticker' : 'Polaroid Style'}</span>
                </div>
                {selectedType === 'sticker' && (
                  <>
                    {selectedCut && (
                      <div className="flex justify-between">
                        <span>Cut Style:</span>
                        <span className="font-medium">{stickerCuts.find(c => c.id === selectedCut)?.name}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Material:</span>
                      <span className="font-medium">{materialOptions.find(m => m.id === selectedMaterial)?.name}</span>
                    </div>
                    {isWaterproof && (
                      <div className="flex justify-between">
                        <span>Waterproof:</span>
                        <span className="font-medium text-blue-600">✓ Yes</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span className="font-medium">{quantity} stickers</span>
                    </div>
                    {quantity >= 10 && (
                      <div className="flex justify-between text-green-600">
                        <span>Bulk Discount:</span>
                        <span className="font-medium">
                          {quantity >= 50 ? '20% off' : quantity >= 20 ? '10% off' : '5% off'}
                        </span>
                      </div>
                    )}
                  </>
                )}
                {selectedType === 'polaroid' && needsSpotifyCode && (
                  <div className="flex justify-between">
                    <span>Spotify Code:</span>
                    <span className="font-medium text-green-600">✓ Included</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Image:</span>
                  <span className="font-medium text-green-600">✅ Uploaded</span>
                </div>
                <div className="border-t pt-2 mt-4 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-[#e92932]">${selectedType === 'sticker' ? getPrice() : '12.99'}</span>
                </div>
              </div>
            </div>
            <Button color="red" className="w-full max-w-md h-14 text-lg">
              🛒 Add to Cart - ${selectedType === 'sticker' ? getPrice() : '12.99'}
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Free shipping on orders over $25 • Questions? We're here to help!
            </p>
          </motion.section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default CustomPage;
