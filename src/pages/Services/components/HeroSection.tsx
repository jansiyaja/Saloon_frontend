import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-28+at+13.15.21_04a61ae9.jpg",
  "https://saloonsite.s3.eu-north-1.amazonaws.com/man-getting-his-beard-shaved-with-razor+(1).jpg",
  "https://saloonsite.s3.eu-north-1.amazonaws.com/man-getting-his-beard-shaved-with-razor.jpg",
];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
    
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
       
          transition={{ duration: 2 }}
        />
      </AnimatePresence>

    
      <div className="relative z-10 bg-black/50 p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Elevate Your Style</h1>
        <p className="text-xl mb-8">Where luxury meets expertise – book your appointment today!</p>
        <button className="bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
