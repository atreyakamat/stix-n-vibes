import React from 'react';

// This component is currently not used but can be developed for future use
// It could be used as a standalone poster series component or for embedding in other pages

const PosterSeries = ({ 
  series = [], 
  onSelectSeries = () => {}, 
  showCustomRequest = false 
}) => {
  return (
    <div className="poster-series-component">
      {/* Future implementation for reusable poster series component */}
      <p className="text-gray-500">Poster Series Component - Coming Soon</p>
    </div>
  );
};

export default PosterSeries;
