import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PosterSeriesTest() {
  console.log('PosterSeriesTest component rendering...');
  
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🖼️ Poster Series Test Page
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a simplified test version to verify basic functionality.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-100 p-4">
              <div className="grid grid-cols-3 gap-2 h-full">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src="/assets/stickers/Adobe Express - file - 2025-02-03T053900.986.png" 
                    alt="Test poster 1"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', e.target.src);
                      e.target.src = '/assets/stickers/ghost.png';
                    }}
                  />
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src="/assets/stickers/Adobe Express - file - 2025-02-03T053936.483.png" 
                    alt="Test poster 2"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', e.target.src);
                      e.target.src = '/assets/stickers/ghost.png';
                    }}
                  />
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src="/assets/stickers/Adobe Express - file - 2025-02-03T053916.536.png" 
                    alt="Test poster 3"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', e.target.src);
                      e.target.src = '/assets/stickers/ghost.png';
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Test Series</h3>
              <p className="text-gray-600 mb-4">This is a test poster series to verify functionality.</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Test Button
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PosterSeriesTest;
