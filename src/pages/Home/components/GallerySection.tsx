import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
"https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-21+at+12.44.04_c34509ec.jpg",
 "https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-21+at+12.44.12_4b5445a0.jpg",
  'https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-25+at+23.14.01_6696d17a.jpg',
  "https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-26+at+00.20.32_f5d6b613.jpg",
  "https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-26+at+00.20.53_aef43b20.jpg",
  "https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-26+at+20.15.26_8be54c72.jpg",
"https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-28+at+09.56.31_10f91f7e.jpg"
];


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
     
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const GallerySection: React.FC = () => {
 
  const containerRef = useRef<HTMLDivElement>(null);


  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };


  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black text-amber-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

        <div className="relative">
         
          <button
            onClick={scrollLeft}
            className="
              absolute left-0 top-1/2
              transform -translate-y-1/2
              z-10 bg-amber-300 text-black
              px-3 py-2 rounded-r
              hover:bg-amber-400 transition
            "
          >
            &lt;
          </button>

        
          <motion.div
            ref={containerRef}
            className="
              flex overflow-x-scroll space-x-4
              snap-x snap-mandatory
              hide-scrollbar
            "
            variants={containerVariants}
            initial="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="
                  w-64 h-64
                  flex-shrink-0
                  snap-center
                  rounded-lg
                  overflow-hidden
                  bg-gray-800
                "
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

       
          <button
            onClick={scrollRight}
            className="
              absolute right-0 top-1/2
              transform -translate-y-1/2
              z-10 bg-amber-300 text-black
              px-3 py-2 rounded-l
              hover:bg-amber-400 transition
            "
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
