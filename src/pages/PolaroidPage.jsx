import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

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

function PolaroidPage() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const packages = [
    {
      id: 'mini-set',
      name: 'Mini Memory Set',
      count: '4 polaroids',
      price: '$12',
      description: 'Perfect for trying out or small gifts'
    },
    {
      id: 'classic-set',
      name: 'Classic Memory Set',
      count: '8 polaroids',
      price: '$20',
      description: 'Most popular choice for memories'
    },
    {
      id: 'mega-set',
      name: 'Mega Memory Set',
      count: '16 polaroids',
      price: '$35',
      description: 'Best value for big memories'
    }
  ];

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: Date.now() + Math.random()
    }));
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (id) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] relative overflow-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 text-4xl opacity-20">📸</div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-40 right-20 text-3xl opacity-30">✨</div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-40 left-20 text-5xl opacity-20">💕</div>
        </FloatingElement>
        <FloatingElement delay={3}>
          <div className="absolute bottom-60 right-10 text-4xl opacity-25">💫</div>
        </FloatingElement>
        <FloatingElement delay={0.5}>
          <div className="absolute top-60 left-1/2 text-3xl opacity-15">🌟</div>
        </FloatingElement>
        <FloatingElement delay={2.5}>
          <div className="absolute top-80 right-1/3 text-4xl opacity-20">📷</div>
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
                Polaroid Customs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turn memories into stickable moments. Send us your fave photos — we'll transform them into aesthetic polaroid-style stickers.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                📸 Custom Photos
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                ✨ Aesthetic Design
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                💕 Perfect Gifts
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* Step Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  currentStep >= step ? 'bg-[#e92932] text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    currentStep > step ? 'bg-[#e92932]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Package Selection */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Choose Your Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    selectedPackage === pkg.id 
                      ? 'border-[#e92932] bg-[#e92932]/5' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-[#e92932] mb-2">{pkg.price}</p>
                    <p className="text-lg text-gray-600 mb-3">{pkg.count}</p>
                    <p className="text-sm text-gray-500">{pkg.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button 
                color="red" 
                onClick={() => selectedPackage && setCurrentStep(2)}
                className={!selectedPackage ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Continue to Upload
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Image Upload */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Upload Your Photos</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-lg mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB each</p>
              </label>
            </div>

            {uploadedImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {uploadedImages.map((image) => (
                  <div key={image.id} className="relative">
                    <img 
                      src={image.preview} 
                      alt="Upload preview" 
                      className="w-full h-32 object-cover rounded-lg border"
                    />
                    <button
                      onClick={() => removeImage(image.id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-center space-x-4">
              <Button color="gray" onClick={() => setCurrentStep(1)}>
                Back
              </Button>
              <Button 
                color="red" 
                onClick={() => uploadedImages.length > 0 && setCurrentStep(3)}
                className={uploadedImages.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Continue to Review
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Review & Order */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Review Your Order</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              <div className="flex justify-between items-center mb-2">
                <span>Package:</span>
                <span className="font-medium">
                  {packages.find(p => p.id === selectedPackage)?.name}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Photos uploaded:</span>
                <span className="font-medium">{uploadedImages.length}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                <span>Total:</span>
                <span className="text-[#e92932]">
                  {packages.find(p => p.id === selectedPackage)?.price}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-bold mb-2">What happens next?</h4>
              <ul className="text-sm space-y-1">
                <li>• We'll review your photos and create polaroid-style designs</li>
                <li>• You'll receive a preview within 24-48 hours</li>
                <li>• Once approved, we'll print and ship your stickers</li>
                <li>• Delivery takes 3-5 business days</li>
              </ul>
            </div>

            <div className="flex justify-center space-x-4">
              <Button color="gray" onClick={() => setCurrentStep(2)}>
                Back
              </Button>
              <Button color="red" className="px-8">
                Place Order
              </Button>
            </div>
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default PolaroidPage;
