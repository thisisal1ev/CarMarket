// SwiperComponent.jsx
import React, { useState } from 'react';

const SwiperComponent = ({ carName, carImg1, carImg2, carImg3, carImg4 }) => {
  const defaultImage = carImg1;
  const images = [
    carImg1,
    carImg2,
    carImg3,
    carImg4,
  ];

  const [currentImage, setCurrentImage] = useState(defaultImage);

  return (
    <div className="flex card-images">

      <div className="flex w-full h-52 sm:h-[255px] z-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="swiper-section"
            onMouseEnter={() => setCurrentImage(image)}
            onMouseLeave={() => setCurrentImage(defaultImage)}
          />
        ))}
      </div>

      <div className="overflow-hidden absolute select-none">
        <img width={450} height={250} className='object-cover rounded-t-xl h-52 sm:h-[255px] w-svw xl:w-[460px]' loading='lazy' src={currentImage} alt={carName} />

      </div>

    </div>

  );
};

export default SwiperComponent;
