import React from "react";
import { motion } from "framer-motion";

const OurStory: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-gray-900 to-black text-amber-300">
      <div className="container mx-auto max-w-4xl">
       
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Story
        </motion.h2>

       
        <motion.p
          className="text-gray-300 leading-relaxed text-lg text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Founded in the heart of the city, our salon began as a humble barbershop
          and evolved into a full-service beauty destination. With a passion for
          innovation and a dedication to quality, we’ve welcomed thousands of
          clients over the years—each with unique needs, styles, and goals.
        </motion.p>

     
        <motion.div
          className="w-full h-60 bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://saloonsite.s3.eu-north-1.amazonaws.com/leather.jpeg')",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />


        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a
            href="#services"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 px-6 rounded-lg transition"
          >
            Discover Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
