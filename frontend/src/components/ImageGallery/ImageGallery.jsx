// ImageGallery.js
import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  // Placeholder image URLs (replace with your actual image URLs)
  const imageUrls = [
    'https://placekitten.com/400/300',
    'https://placekitten.com/500/350',
    'https://placekitten.com/600/400',
    'https://placekitten.com/450/300',
    'https://placekitten.com/550/400',
    'https://placekitten.com/400/350',
    'https://placekitten.com/600/450',
    'https://placekitten.com/500/300',
    'https://placekitten.com/550/350',
    'https://placekitten.com/500/400',
    'https://placekitten.com/450/350',
    'https://placekitten.com/550/450',
    'https://placekitten.com/400/450',
    'https://placekitten.com/600/350',
    
  ];

  return (
    <div className='m-8'>
    <div className='flex justify-center text-5xl m-20'>
        HIGHLIGHTS
    </div>
    <div className="image-gallery">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="image-item">
          <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageGallery;
