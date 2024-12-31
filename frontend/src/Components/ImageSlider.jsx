import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
const ImageSlider = () => {
  const images = [
     assets.img1, // Replace these with your image paths
     assets.img2,
     assets.img3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="md:w-[40%] w-full pt-6 px-6">
      {/* Container for Image */}
      <div className="container w-full h-3/4 mx-auto rounded-xl bg-white flex items-center justify-center overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="w-full h-5 flex items-center justify-center gap-1 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`rounded-full h-3 w-3 ${
              currentIndex === index ? "bg-gray-500" : "bg-white"
            } hover:bg-gray-500 hidden md:block`}
            onClick={() => handleButtonClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
