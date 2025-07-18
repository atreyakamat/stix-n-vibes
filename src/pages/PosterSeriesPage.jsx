import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
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

// Heart/Like icon
const HeartIcon = ({ filled = false, size = "20px" }) => (
  <div className={`${filled ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors cursor-pointer`}>
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  </div>
)

// Share icon
const ShareIcon = ({ size = "20px" }) => (
  <div className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  </div>
)

function PosterSeriesPage() {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [likedSeries, setLikedSeries] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [filterTag, setFilterTag] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [customForm, setCustomForm] = useState({
    name: '',
    email: '',
    phone: '',
    style: '',
    colors: [],
    description: '',
    images: [],
    dimensions: '',
    gridCount: '3',
    gridLayout: '1x3',
    orientation: 'portrait'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addItem } = useCart() || { addItem: () => console.warn('Cart context not available') };

  const toggleLike = (seriesId) => {
    setLikedSeries(prev => {
      const newSet = new Set(prev);
      if (newSet.has(seriesId)) {
        newSet.delete(seriesId);
      } else {
        newSet.add(seriesId);
      }
      return newSet;
    });
  };

  const nextImage = (seriesId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [seriesId]: ((prev[seriesId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (seriesId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [seriesId]: ((prev[seriesId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const addToCart = (series) => {
    if (!series || !addItem) {
      console.warn('Unable to add to cart: missing series or cart function');
      return;
    }
    
    try {
      addItem({
        id: series.id,
        title: series.title,
        price: parseFloat((series.price || '$0').replace('$', '')),
        image: series.images?.[0] || '/assets/stickers/ghost.png',
        quantity: 1,
        type: 'Poster Series'
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleCustomFormChange = (field, value) => {
    setCustomForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGridCountChange = (count) => {
    const defaultLayouts = {
      '2': '1x2',
      '3': '1x3', 
      '4': '2x2',
      '6': '2x3'
    };
    
    setCustomForm(prev => ({
      ...prev,
      gridCount: count,
      gridLayout: defaultLayouts[count]
    }));
  };

  const getAvailableLayouts = (count) => {
    const layouts = {
      '2': ['1x2', '2x1'],
      '3': ['1x3', '3x1'],
      '4': ['2x2', '1x4', '4x1'],
      '6': ['2x3', '3x2']
    };
    return layouts[count] || [];
  };

  const toggleColorSelection = (color) => {
    setCustomForm(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color]
    }));
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    // In a real implementation, you'd upload these to a server
    setCustomForm(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const submitCustomRequest = async () => {
    setIsSubmitting(true);
    
    // Here you would typically send the data to Google Forms or your backend
    // For now, we'll simulate a submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Reset form
      setCustomForm({
        name: '',
        email: '',
        phone: '',
        style: '',
        colors: [],
        description: '',
        images: [],
        dimensions: '',
        gridCount: '3',
        gridLayout: '1x3',
        orientation: 'portrait'
      });
      
      alert('🎉 Thank you! We\'ve received your custom poster request and will get back to you within 24 hours with a design proposal and pricing.');
    } catch (error) {
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const posterSeries = [
    {
      id: 'chaos-energy',
      title: 'Chaos Energy',
      description: 'Embrace the beautiful mess of creativity with this explosive collection of abstract designs. Each poster captures the raw energy of artistic expression through bold colors, dynamic shapes, and spontaneous compositions that breathe life into any space.',
      images: [
        '/assets/stickers/Adobe Express - file - 2025-02-03T053900.986.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053936.483.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053916.536.png'
      ],
      price: '$45',
      tags: ['Abstract', 'Colorful', 'Energy'],
      features: ['High-quality matte finish', 'Vibrant, fade-resistant colors', 'Perfect for creative spaces'],
      stats: { likes: 234, shares: 42 }
    },
    {
      id: 'minimal-vibes',
      title: 'Minimal Vibes',
      description: 'Clean lines, maximum impact. This sophisticated collection proves that sometimes less is more. Each poster features carefully balanced compositions with plenty of white space and subtle color palettes that enhance any modern interior.',
      images: [
        '/assets/stickers/Adobe Express - file - 2025-02-03T053558.505.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053620.350.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053656.087.png'
      ],
      price: '$40',
      tags: ['Minimal', 'Clean', 'Modern'],
      features: ['Premium paper quality', 'Timeless design', 'Versatile for any room'],
      stats: { likes: 189, shares: 31 }
    },
    {
      id: 'retro-wave',
      title: 'Retro Wave',
      description: 'Nostalgic feels with modern appeal. Transport yourself to the golden age of design with this collection that perfectly balances vintage aesthetics with contemporary sensibilities. Each piece is a love letter to the past with a fresh perspective.',
      images: [
        '/assets/stickers/Adobe Express - file - 2025-02-03T053756.124.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053815.779.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053819.449.png'
      ],
      price: '$42',
      tags: ['Retro', 'Nostalgic', 'Wave'],
      features: ['Vintage-inspired design', 'Warm color palette', 'Conversation starter'],
      stats: { likes: 312, shares: 58 }
    },
    {
      id: 'nature-escape',
      title: 'Nature Escape',
      description: 'Bring the outdoors to your space with this calming collection inspired by natural beauty. Each poster captures the serenity of nature through organic forms, earth tones, and peaceful compositions that create a sense of tranquility.',
      images: [
        '/assets/stickers/Adobe Express - file - 2025-02-03T053830.710.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053832.899.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053848.102.png'
      ],
      price: '$38',
      tags: ['Nature', 'Organic', 'Peaceful'],
      features: ['Eco-friendly materials', 'Calming color scheme', 'Biophilic design'],
      stats: { likes: 167, shares: 24 }
    },
    {
      id: 'urban-pulse',
      title: 'Urban Pulse',
      description: 'Feel the rhythm of the city with this dynamic collection that captures the energy and diversity of urban life. Bold graphics, street art influences, and contemporary typography come together to celebrate metropolitan culture.',
      images: [
        '/assets/stickers/Adobe Express - file - 2025-02-03T053850.243.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053905.328.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053928.422.png'
      ],
      price: '$44',
      tags: ['Urban', 'Street Art', 'Contemporary'],
      features: ['Street art inspired', 'Bold typography', 'Modern edge'],
      stats: { likes: 278, shares: 46 }
    },
    {
      id: 'dream-state',
      title: 'Dream State',
      description: 'Enter a world of imagination with this surreal collection that blurs the line between reality and dreams. Ethereal compositions, soft color gradients, and whimsical elements create a sense of wonder and possibility.',
      images: [
        '/assets/stickers/Adobe Express - file - 2025-02-03T053932.177.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053942.493.png',
        '/assets/stickers/Adobe Express - file - 2025-02-03T053947.426.png'
      ],
      price: '$41',
      tags: ['Surreal', 'Dreamy', 'Whimsical'],
      features: ['Dreamy aesthetics', 'Soft color palette', 'Inspiring imagery'],
      stats: { likes: 198, shares: 35 }
    }
  ];

  // Get all unique tags
  const allTags = ['All', ...new Set(posterSeries?.flatMap(series => series.tags || []) || [])];

  // Filter and sort series
  const filteredAndSortedSeries = (posterSeries || [])
    .filter(series => filterTag === 'All' || (series.tags && series.tags.includes(filterTag)))
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.stats?.likes || 0) - (a.stats?.likes || 0);
        case 'price-low':
          return parseFloat((a.price || '$0').replace('$', '')) - parseFloat((b.price || '$0').replace('$', ''));
        case 'price-high':
          return parseFloat((b.price || '$0').replace('$', '')) - parseFloat((a.price || '$0').replace('$', ''));
        case 'name':
          return (a.title || '').localeCompare(b.title || '');
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf8f8] via-[#faf9fb] to-[#f8f4f4] relative overflow-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
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
          <div className="absolute top-80 right-1/3 text-4xl opacity-20">🖌️</div>
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
                Poster Series
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              One design. Three pieces. Maximum impact. Perfect for cafes, walls, or personal space takeovers.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                🖼️ 3-Piece Sets
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                ✨ Bold Design
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 text-gray-700">
                🎨 Maximum Impact
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <main className="max-w-6xl mx-auto px-4 py-16">

        {/* Filter and Sort Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Filter:</span>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filterTag === tag
                    ? 'bg-[#e92932] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e92932]"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing {filteredAndSortedSeries.length} of {posterSeries.length} series
            {filterTag !== 'All' && ` filtered by "${filterTag}"`}
          </p>
        </div>

        {/* Series Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredAndSortedSeries.length > 0 ? (
            filteredAndSortedSeries.map((series, index) => (
            <motion.div
              key={series.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Series Images */}
              <div className="aspect-video bg-gray-100 p-4 relative">
                <div className="grid grid-cols-3 gap-2 h-full">
                  {(series.images || []).map((image, imgIndex) => (
                    <div key={imgIndex} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                      <img 
                        src={image} 
                        alt={`${series.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = '/assets/stickers/ghost.png'; // Fallback image
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Floating actions */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <button
                    onClick={() => toggleLike(series.id)}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <HeartIcon filled={likedSeries.has(series.id)} size="18px" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                    <ShareIcon size="18px" />
                  </button>
                </div>
              </div>
              
              {/* Series Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{series.title}</h3>
                  <span className="text-2xl font-bold text-[#e92932]">{series.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>{series.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(series.tags || []).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Social stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <HeartIcon size="16px" />
                    <span>{series.stats?.likes || 0}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShareIcon size="16px" />
                    <span>{series.stats?.shares || 0}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    color="red" 
                    className="flex-1"
                    onClick={() => setSelectedSeries(series)}
                  >
                    View Details
                  </Button>
                  <Button 
                    color="white" 
                    className="flex-1"
                    onClick={() => addToCart(series)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No series found for the selected filter.</p>
            <Button 
              color="red" 
              className="mt-4"
              onClick={() => setFilterTag('All')}
            >
              Show All Series
            </Button>
          </div>
        )}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 rounded-lg p-8 mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Poster Series?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#e92932] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="font-bold mb-2">Cohesive Design</h3>
              <p className="text-gray-600 text-sm">Each series follows a unified aesthetic theme that works perfectly together</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#42c4ef] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📏</span>
              </div>
              <h3 className="font-bold mb-2">Perfect Sizing</h3>
              <p className="text-gray-600 text-sm">Standard 11x17 inch posters, ideal for framing or wall mounting</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#34d399] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💎</span>
              </div>
              <h3 className="font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Printed on high-quality matte paper with vibrant, long-lasting colors</p>
            </div>
          </div>
        </motion.div>

        {/* Custom Poster Creation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🎨 Make Your Own Grid Poster
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Upload your own images or share your design ideas with us
            </p>
            <p className="text-gray-500 mb-1">
              We'll create a custom 3-poster grid series just for you
            </p>
            <p className="text-sm text-gray-400">
              Available sizes up to A3 (11.7" × 16.5")
            </p>
          </div>            <div className="max-w-4xl mx-auto">
              {/* Grid Preview Section */}
              {customForm.gridCount && customForm.gridLayout && customForm.orientation && (
                <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-4 text-center">
                    📐 Your Grid Preview
                  </h3>
                  <div className="flex justify-center">
                    <div className={`grid gap-2 ${(() => {
                      const [rows, cols] = customForm.gridLayout.split('x');
                      const gridClasses = {
                        '1x2': 'grid-cols-2 grid-rows-1',
                        '2x1': 'grid-cols-1 grid-rows-2',
                        '1x3': 'grid-cols-3 grid-rows-1',
                        '3x1': 'grid-cols-1 grid-rows-3',
                        '2x2': 'grid-cols-2 grid-rows-2',
                        '1x4': 'grid-cols-4 grid-rows-1',
                        '4x1': 'grid-cols-1 grid-rows-4',
                        '2x3': 'grid-cols-3 grid-rows-2',
                        '3x2': 'grid-cols-2 grid-rows-3'
                      };
                      return gridClasses[customForm.gridLayout] || 'grid-cols-3';
                    })()}`}>
                      {Array.from({ length: parseInt(customForm.gridCount) }).map((_, index) => (
                        <div
                          key={index}
                          className={`border-2 border-dashed border-gray-300 rounded flex items-center justify-center bg-gray-50 ${
                            customForm.orientation === 'portrait' ? 'w-16 h-20' : 'w-20 h-16'
                          }`}
                        >
                          <span className="text-xs text-gray-500">#{index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center mt-3 text-sm text-gray-600">
                    {customForm.gridCount} {customForm.orientation} posters in {customForm.gridLayout.replace('x', ' × ')} layout
                    {customForm.dimensions && ` • ${
                      customForm.dimensions === 'A6' ? 'A6 (4.1" × 5.8")' :
                      customForm.dimensions === 'A5' ? 'A5 (5.8" × 8.3")' :
                      customForm.dimensions === 'A4' ? 'A4 (8.3" × 11.7")' :
                      customForm.dimensions === 'A3' ? 'A3 (11.7" × 16.5")' :
                      customForm.dimensions === '5x7' ? '5" × 7"' :
                      customForm.dimensions === '8x10' ? '8" × 10"' :
                      customForm.dimensions === '11x14' ? '11" × 14"' :
                      customForm.dimensions === 'custom' ? 'Custom size (up to A3)' :
                      customForm.dimensions
                    } each`}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Upload Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  📸 Upload Your Images
                </h3>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#e92932] transition-colors">
                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-gray-600 mb-2">Drag & drop your images here</p>
                    <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <Button color="white" className="text-sm cursor-pointer">
                        Choose Files
                      </Button>
                    </label>
                  </div>
                  
                  {customForm.images.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Selected Images:</p>
                      <div className="space-y-2">
                        {customForm.images.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-600">{file.name}</span>
                            <button
                              onClick={() => {
                                setCustomForm(prev => ({
                                  ...prev,
                                  images: prev.images.filter((_, i) => i !== index)
                                }));
                              }}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Upload 1-3 images for your custom poster series</p>
                    <p>• Supported formats: JPG, PNG, SVG</p>
                    <p>• Maximum file size: 10MB each</p>
                  </div>
                </div>
              </div>

              {/* Design Request Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  💭 Describe Your Vision
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Design Style
                    </label>
                    <select 
                      value={customForm.style}
                      onChange={(e) => handleCustomFormChange('style', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                    >
                      <option value="">Choose a style...</option>
                      <option value="minimalist">Minimalist Grid</option>
                      <option value="artistic">Artistic Collage</option>
                      <option value="photo">Photo Series</option>
                      <option value="abstract">Abstract Composition</option>
                      <option value="vintage">Vintage Aesthetic</option>
                      <option value="geometric">Modern Geometric</option>
                      <option value="surprise">Let me surprise you!</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poster Dimensions
                    </label>
                    <select 
                      value={customForm.dimensions}
                      onChange={(e) => handleCustomFormChange('dimensions', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                    >
                      <option value="">Choose dimensions...</option>
                      <option value="A6">A6 (4.1" × 5.8") - Mini poster</option>
                      <option value="A5">A5 (5.8" × 8.3") - Small display</option>
                      <option value="A4">A4 (8.3" × 11.7") - Standard size</option>
                      <option value="A3">A3 (11.7" × 16.5") - Large format</option>
                      <option value="5x7">5" × 7" - Photo size</option>
                      <option value="8x10">8" × 10" - Classic frame</option>
                      <option value="11x14">11" × 14" - Gallery size</option>
                      <option value="custom">Custom Size (up to A3)</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      All dimensions are in inches. Each poster in your grid will be this size. Maximum size: A3 (11.7" × 16.5")
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Posters in Grid
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { count: '2', layouts: ['1×2', '2×1'] },
                        { count: '3', layouts: ['1×3', '3×1'] },
                        { count: '4', layouts: ['2×2', '1×4', '4×1'] },
                        { count: '6', layouts: ['2×3', '3×2'] }
                      ].map(({ count, layouts }) => (
                        <button
                          key={count}
                          type="button"
                          onClick={() => handleGridCountChange(count)}
                          className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                            customForm.gridCount === count
                              ? 'bg-[#e92932] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <div className="text-center">
                            <div className="font-semibold">{count} Posters</div>
                            <div className="text-xs mt-1 opacity-75">
                              {layouts.join(' or ')}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Choose how many individual posters will make up your grid series
                    </p>
                  </div>

                  {/* Grid Layout Selection */}
                  {customForm.gridCount && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Grid Layout
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {getAvailableLayouts(customForm.gridCount).map(layout => (
                          <button
                            key={layout}
                            type="button"
                            onClick={() => handleCustomFormChange('gridLayout', layout)}
                            className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                              customForm.gridLayout === layout
                                ? 'bg-[#e92932] text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {layout.replace('x', ' × ')}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Choose how your {customForm.gridCount} posters will be arranged
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poster Orientation
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => handleCustomFormChange('orientation', 'portrait')}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          customForm.orientation === 'portrait'
                            ? 'border-[#e92932] bg-red-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-12 rounded border-2 mb-2 ${
                            customForm.orientation === 'portrait' ? 'border-[#e92932]' : 'border-gray-400'
                          }`}></div>
                          <span className="text-sm font-medium">Portrait</span>
                          <span className="text-xs text-gray-500">Tall & Narrow</span>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCustomFormChange('orientation', 'landscape')}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          customForm.orientation === 'landscape'
                            ? 'border-[#e92932] bg-red-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-8 rounded border-2 mb-2 ${
                            customForm.orientation === 'landscape' ? 'border-[#e92932]' : 'border-gray-400'
                          }`}></div>
                          <span className="text-sm font-medium">Landscape</span>
                          <span className="text-xs text-gray-500">Wide & Short</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color Preference
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Vibrant', 'Pastel', 'Monochrome', 'Earth Tones', 'Neon', 'No Preference'].map(color => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => toggleColorSelection(color)}
                          className={`px-3 py-1 rounded-full text-sm transition-colors ${
                            customForm.colors.includes(color)
                              ? 'bg-[#e92932] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us more about your vision
                    </label>
                    <textarea
                      value={customForm.description}
                      onChange={(e) => handleCustomFormChange('description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932] resize-none"
                      rows="4"
                      placeholder="Describe your ideal poster series... What mood are you going for? Any specific elements you want included? Room where it will be displayed?"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
              <h3 className="text-xl font-bold mb-4">📞 Your Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={customForm.name}
                    onChange={(e) => handleCustomFormChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={customForm.email}
                    onChange={(e) => handleCustomFormChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={customForm.phone}
                    onChange={(e) => handleCustomFormChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932]"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <Button 
                color="red" 
                className="px-12 py-4 text-lg"
                onClick={submitCustomRequest}
                disabled={isSubmitting || !customForm.name || !customForm.email || !customForm.dimensions || !customForm.gridCount || !customForm.gridLayout || !customForm.orientation}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  '🚀 Submit My Custom Request'
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                {!customForm.name || !customForm.email || !customForm.dimensions || !customForm.gridCount || !customForm.gridLayout || !customForm.orientation ? 
                  'Please fill in all required fields (name, email, dimensions, grid count, layout, orientation)' : 
                  'We\'ll get back to you within 24 hours with a custom design proposal and pricing'
                }
              </p>
            </div>

            {/* Process Steps */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-center mb-6">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#e92932] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-1">Submit Request</h4>
                  <p className="text-sm text-gray-600">Upload images and describe your vision</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#42c4ef] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-1">Design Review</h4>
                  <p className="text-sm text-gray-600">We create mockups based on your requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#34d399] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-1">Approval</h4>
                  <p className="text-sm text-gray-600">Review and approve your custom design</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-1">Print & Ship</h4>
                  <p className="text-sm text-gray-600">High-quality printing and fast delivery</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-600 mb-8">Browse our complete collection or create a custom series just for you.</p>
          <div className="flex justify-center gap-4">
            <Button color="red" className="px-8">
              Shop All Series
            </Button>
            <Button color="white" className="px-8">
              Custom Series Request
            </Button>
          </div>
        </motion.div>
      </main>
      
      {/* Modal for Series Details */}
      {selectedSeries && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSeries(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedSeries.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <HeartIcon size="16px" />
                      <span>{selectedSeries.stats?.likes || 0} likes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShareIcon size="16px" />
                      <span>{selectedSeries.stats?.shares || 0} shares</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleLike(selectedSeries.id)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <HeartIcon filled={likedSeries.has(selectedSeries.id)} size="20px" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <ShareIcon size="20px" />
                  </button>
                  <button
                    onClick={() => setSelectedSeries(null)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {(selectedSeries.images || []).map((image, index) => (
                  <div key={index} className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${selectedSeries.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/assets/stickers/ghost.png'; // Fallback image
                      }}
                    />
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">About This Series</h4>
                <p className="text-gray-600 leading-relaxed">{selectedSeries.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(selectedSeries.features || []).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#e92932] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {(selectedSeries.tags || []).map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-[#e92932]">{selectedSeries.price}</span>
                <div className="flex gap-3">
                  <Button color="white" onClick={() => setSelectedSeries(null)}>
                    Close
                  </Button>
                  <Button 
                    color="red"
                    onClick={() => {
                      addToCart(selectedSeries);
                      setSelectedSeries(null);
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <Footer />
    </div>
  );
}

export default PosterSeriesPage;
