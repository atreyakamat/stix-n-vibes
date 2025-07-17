import React, { useState, useEffect } from 'react';
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

// Instagram Icon component
const InstagramIcon = ({ size = "24px" }) => (
  <div className="text-inherit" data-icon="InstagramLogo" data-size={size} data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
    </svg>
  </div>
)

// Play icon for video posts
const PlayIcon = ({ size = "48px" }) => (
  <div className="text-white" data-icon="Play" data-size={size} data-weight="fill">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 256 256">
      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
    </svg>
  </div>
)

// Mock Instagram posts data - in real app, this would come from Instagram API
const mockInstagramPosts = [
  {
    id: '1',
    type: 'image',
    media_url: '/assets/stickers/Adobe Express - file - 2025-02-03T053900.986.png',
    caption: 'New holographic sticker drop! ✨ Perfect for your laptop setup #StickerVibes #Holographic',
    timestamp: '2024-01-15T10:30:00Z',
    likes: 247,
    comments: 18,
    artist: '@pixelartist',
    permalink: 'https://instagram.com/p/example1'
  },
  {
    id: '2',
    type: 'video',
    media_url: '/assets/stickers/Adobe Express - file - 2025-02-03T053936.483.png',
    caption: 'Behind the scenes: Creating our latest chaos collection 🎨 #BehindTheScenes #ArtProcess',
    timestamp: '2024-01-14T15:45:00Z',
    likes: 389,
    comments: 32,
    artist: '@chaoscreator',
    permalink: 'https://instagram.com/reel/example2'
  },
  {
    id: '3',
    type: 'image',
    media_url: '/assets/stickers/Adobe Express - file - 2025-02-03T053916.536.png',
    caption: 'Minimalist vibes for your journal 📖 Available now in our shop',
    timestamp: '2024-01-13T09:15:00Z',
    likes: 156,
    comments: 12,
    artist: '@minimalvibes',
    permalink: 'https://instagram.com/p/example3'
  },
  {
    id: '4',
    type: 'video',
    media_url: '/assets/stickers/Adobe Express - file - 2025-02-03T053558.505.png',
    caption: 'Time-lapse: From sketch to sticker in 60 seconds ⏱️ #Timelapse #StickerMaking',
    timestamp: '2024-01-12T16:20:00Z',
    likes: 512,
    comments: 45,
    artist: '@studioflow',
    permalink: 'https://instagram.com/reel/example4'
  },
  {
    id: '5',
    type: 'image',
    media_url: '/assets/stickers/Adobe Express - file - 2025-02-03T053620.350.png',
    caption: 'Retro wave aesthetic never goes out of style 🌊 #RetroWave #Aesthetic',
    timestamp: '2024-01-11T12:00:00Z',
    likes: 278,
    comments: 23,
    artist: '@retrowave80s',
    permalink: 'https://instagram.com/p/example5'
  },
  {
    id: '6',
    type: 'image',
    media_url: '/assets/stickers/Adobe Express - file - 2025-02-03T053656.087.png',
    caption: 'Nature-inspired designs for the outdoor enthusiast 🌲 #NatureVibes #Outdoors',
    timestamp: '2024-01-10T14:30:00Z',
    likes: 334,
    comments: 28,
    artist: '@naturecollective',
    permalink: 'https://instagram.com/p/example6'
  }
];

// Instagram post component
const InstagramPost = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine grid size based on index for bento layout
  const getBentoSize = (index) => {
    const pattern = index % 6;
    switch (pattern) {
      case 0: return 'col-span-2 row-span-2'; // Large square
      case 1: return 'col-span-1 row-span-1'; // Small square
      case 2: return 'col-span-1 row-span-2'; // Tall rectangle
      case 3: return 'col-span-2 row-span-1'; // Wide rectangle
      case 4: return 'col-span-1 row-span-1'; // Small square
      case 5: return 'col-span-1 row-span-1'; // Small square
      default: return 'col-span-1 row-span-1';
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer overflow-hidden rounded-lg ${getBentoSize(index)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(post.permalink, '_blank')}
    >
      {/* Image/Video container */}
      <div className="relative w-full h-full bg-gray-100">
        <img 
          src={post.media_url} 
          alt={post.caption.substring(0, 50)}
          className="w-full h-full object-cover"
        />
        
        {/* Video indicator */}
        {post.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full p-3">
              <PlayIcon size="32px" />
            </div>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ${
          isHovered ? 'bg-opacity-70' : ''
        }`}>
          {isHovered && (
            <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <InstagramIcon size="20px" />
                  <span className="text-sm font-medium">{post.artist}</span>
                </div>
                <div className="text-xs opacity-75">
                  {formatDate(post.timestamp)}
                </div>
              </div>
              
              <div>
                <p className="text-sm mb-3 line-clamp-3">
                  {post.caption}
                </p>
                <div className="flex items-center space-x-4 text-xs">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                  <span>📱 View on IG</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

function CollabPage() {
  const [posts, setPosts] = useState(mockInstagramPosts);
  const [loading, setLoading] = useState(false);
  const [instagramUrl, setInstagramUrl] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSubmitInstagram = async (e) => {
    e.preventDefault();
    if (!instagramUrl.trim()) return;
    
    setLoading(true);
    
    // Simulate API call - in real app, this would fetch from Instagram API
    setTimeout(() => {
      // Mock adding new post
      const newPost = {
        id: Date.now().toString(),
        type: 'image',
        media_url: '/assets/stickers/Adobe Express - file - 2025-02-03T053756.124.png',
        caption: `New post from ${instagramUrl}`,
        timestamp: new Date().toISOString(),
        likes: Math.floor(Math.random() * 500),
        comments: Math.floor(Math.random() * 50),
        artist: '@newartist',
        permalink: instagramUrl
      };
      
      setPosts(prev => [newPost, ...prev]);
      setInstagramUrl('');
      setLoading(false);
    }, 2000);
  };

  const filteredPosts = selectedFilter === 'all' 
    ? posts 
    : posts.filter(post => post.type === selectedFilter);

  return (
    <div className="min-h-screen w-full bg-white" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎨 <span className="text-[#e92932]">Collabs</span> That Stick
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            We team up with indie artists, illustrators, and chaos creators
          </p>
          <p className="text-lg text-gray-500">
            Each collab = their art + our vibe = stickers that slap
          </p>
        </motion.div>

        {/* Instagram URL Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">📱 Add Instagram Content</h2>
          <form onSubmit={handleSubmitInstagram} className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              value={instagramUrl}
              onChange={(e) => setInstagramUrl(e.target.value)}
              placeholder="Paste Instagram post or reel URL here..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e92932] focus:border-transparent"
              required
            />
            <Button 
              type="submit" 
              color="red" 
              className={`px-8 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? '🔄 Loading...' : '✨ Add Content'}
            </Button>
          </form>
          <p className="text-sm text-gray-500 mt-2">
            Paste any Instagram post or reel URL to add it to our collaboration showcase
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === 'all'
                ? 'bg-[#e92932] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Posts ({posts.length})
          </button>
          <button
            onClick={() => setSelectedFilter('image')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === 'image'
                ? 'bg-[#42c4ef] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📸 Images ({posts.filter(p => p.type === 'image').length})
          </button>
          <button
            onClick={() => setSelectedFilter('video')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === 'video'
                ? 'bg-[#42c4ef] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🎬 Videos ({posts.filter(p => p.type === 'video').length})
          </button>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {filteredPosts.map((post, index) => (
            <InstagramPost key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">No posts found</h3>
            <p className="text-gray-500">Try adjusting your filters or add some Instagram content!</p>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-[#e92932] to-[#ff6b9d] rounded-lg p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-6">
            Got art that needs to stick? Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button color="white" className="px-8">
              📧 Get in Touch
            </Button>
            <Button color="blue" className="px-8">
              🎨 Submit Your Art
            </Button>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}

export default CollabPage;
