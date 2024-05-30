import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Slideshow = () => {
  const images = [
    '/img1.png',
    '/img2.png',
    '/img3.png',
    '/img4.png',
    '/img5.png',
    '/img7.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1500); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`slide absolute top-0 left-0 w-full h-full bg-cover bg-center ${
            index === currentSlide ? '' : 'hidden'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            zIndex: index === currentSlide ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      ))}
    </>
  );
};

export default Slideshow;
