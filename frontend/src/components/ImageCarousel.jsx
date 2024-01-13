// ImageCarousel.js
import React, { useState } from 'react';
import './ImageCarousel.css'; // Import the styles

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevImage} className="carousel-btn prev-btn">
        &#8249;
      </button>
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="carousel-image" />
      <button onClick={nextImage} className="carousel-btn next-btn">
        &#8250;
      </button>
    </div>
  );
};

export default ImageCarousel;
