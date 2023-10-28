import React, { useState } from 'react';

const CarouselDisplay = ({ carouselData }) => {
  const [current, setCurrent] = useState(0);

  const handleCarouselNavigation = (direction) => {
    if (direction === 'prev') {
      setCurrent(current === 0 ? carouselData.length - 1 : current - 1);
    } else {
      setCurrent(current === carouselData.length - 1 ? 0 : current + 1);
    }
  };

  return (
    <div id="carousel-display">
      <button onClick={() => handleCarouselNavigation('prev')}>Previous</button>
      <div className="carousel-content">
        <img src={carouselData[current].image} alt={carouselData[current].title} />
        <h2>{carouselData[current].title}</h2>
        <p>{carouselData[current].description}</p>
      </div>
      <button onClick={() => handleCarouselNavigation('next')}>Next</button>
    </div>
  );
};

export default CarouselDisplay;