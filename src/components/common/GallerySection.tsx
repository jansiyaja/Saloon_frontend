import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { GallerySectionProps } from "../../interfaces/Common";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const GallerySection: React.FC<GallerySectionProps> = ({ title, images }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="bg-black text-amber-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">{title}</h2>

        <div className="relative group">
        
          <button
            onClick={scrollLeft}
            className="
              absolute left-2 top-1/2 transform -translate-y-1/2
              bg-white/20 backdrop-blur-lg p-3 rounded-full shadow-md
              transition duration-300 ease-in-out opacity-0 group-hover:opacity-100
              hover:bg-white/30 hover:shadow-lg
            "
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

       
          <motion.div
            ref={containerRef}
            className="flex overflow-x-scroll space-x-6 snap-x snap-mandatory hide-scrollbar"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="
                  w-80 h-96 flex-shrink-0 snap-center
                  rounded-2xl overflow-hidden bg-gray-900 border border-gray-700 shadow-lg
                  transition duration-300 hover:shadow-2xl
                "
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </motion.div>

        
          <button
            onClick={scrollRight}
            className="
              absolute right-2 top-1/2 transform -translate-y-1/2
              bg-white/20 backdrop-blur-lg p-3 rounded-full shadow-md
              transition duration-300 ease-in-out opacity-0 group-hover:opacity-100
              hover:bg-white/30 hover:shadow-lg
            "
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
