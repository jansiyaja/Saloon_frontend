import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
   
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-21+at+12.55.12_3c3c2704.jpg')",
        }}
      >
       
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

  
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-300 mb-6 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We’d love to hear from you! Reach out for any inquiries or collaborations.
        </motion.p>

      
      </motion.div>

     
      <motion.div
        className="absolute bottom-6 right-6 p-4 bg-white/20 backdrop-blur-md rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="text-white font-semibold">📞 Let's Talk!</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
