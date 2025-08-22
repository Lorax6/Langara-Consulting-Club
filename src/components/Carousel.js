import React, { useState, useEffect } from 'react';
import judges from '../assets/images/Judges.JPG';
import groupPhoto from '../assets/images/GroupPhoto2.JPG';
import discussion from '../assets/images/Discussion.png';
import workshop from '../assets/images/Workshop1.png';

const Carousel = () => {
  const images = [judges, groupPhoto, discussion, workshop];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel__item--selected">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} width="550" height="350" />
      </div>
      <div className="carousel__nav">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__button ${index === currentIndex ? 'carousel__button--selected' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;