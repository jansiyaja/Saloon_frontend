import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-amber-300">
     
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-21+at+12.55.25_0bbe0efb.jpg')`,
        }}
      />
      

      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6 max-w-xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover our story and what makes us the premier salon experience.
        </motion.p>


        <motion.a
          href="#learn-more"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 px-6 rounded-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
