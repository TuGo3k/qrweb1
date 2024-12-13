import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/300x200?text=Slide+1',
  'https://via.placeholder.com/300x200?text=Slide+2',
  'https://via.placeholder.com/300x200?text=Slide+3',
];

const CustomSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '200px', margin: 'auto' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default CustomSwiper;
