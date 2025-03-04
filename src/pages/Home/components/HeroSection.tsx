import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slides } from '../../../Data/homeData';






const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

 
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
         
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
            }}
          >
            
            <div className=" inset-0 bg-black bg-opacity-40" />

           
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-amber-300 px-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                {slides[currentIndex].title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-8 max-w-xl mx-auto drop-shadow-md  text-amber-200">
                {slides[currentIndex].description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
                  px-6 py-3
                  bg-gradient-to-r from-amber-300 to-amber-500
                  text-black font-semibold
                  rounded-full
                  hover:scale-105
                  transition-transform duration-300
                  shadow-xl
                "
              >
                Book Appointment
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    
      <div className="absolute bottom-6 w-full flex justify-center">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-amber-400 animate-bounce"
        >
          <span className="mb-2 text-sm">Scroll</span>
   
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
