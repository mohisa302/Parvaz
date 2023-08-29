import React from 'react';
import FlayInnImage1 from '../assets/back1.jpg';
// import FlayInnImage2 from '../assets/flyinn.jpeg';
// import { useState, useEffect, useRef } from 'react';
import { Background } from '../constants/Data';
import { useLocation } from 'react-router-dom';

export const HeaderComp = () => {
  const location = useLocation();
  const backgroundIMG = Background.find((item) => item.root === location.pathname)?.image;
  //const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //const backgroundImages = [FlayInnImage1, FlayInnImage2];
  //const imageRef = useRef(null);

  //useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const imageElement = imageRef.current;
  //   imageElement.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
  // }, [backgroundImages, currentImageIndex]);

  return (
    <div
      className="bg-no-repeat bg-cover bg-center 
      bg-green-200 w-full h-[30%] border-2"
      style={{
        backgroundImage: `url(${backgroundIMG})`,
      }}
    >
      <div className="grid grid-cols-2 h-[80%]">
        <div className="flex items-center p-5">
          <div>
            <p className="text-white text-xl">FLYING BUDGET</p>
            <p className="text-white text-5xl">We Are Very Reliable</p>
            <p className="text-yellow-400 text-5xl">Professional, Experienced</p>
            <p className="text-white text-sm mt-3">
              <span className="text-yellow-400">Flyinn budget</span> is the versatile website expowering you
            </p>
            <p className="text-white text-sm">
              full services airline offering <span className="text-yellow-400">reduce fairs.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
