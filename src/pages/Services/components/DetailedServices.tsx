import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Services } from "../../../Data/services";






const sliderVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const DetailedServices: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black text-amber-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Offerings</h2>

        <div className="relative">
       
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10
              bg-gray-800 text-white w-12 h-12 rounded-full shadow-lg
              flex items-center justify-center hover:bg-gray-700 transition"
          >
            <ChevronLeft/>
          </button>

        
          <motion.div
            ref={sliderRef}
            className="flex overflow-x-scroll space-x-6 hide-scrollbar snap-x snap-mandatory"
            variants={sliderVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {Services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="w-80 flex-shrink-0 snap-center
                  bg-gray-900 rounded-lg shadow-lg overflow-hidden
                  transition-transform duration-300"
              >
             
                {service.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  <div>
                    {service.price && <p className="text-amber-400 font-semibold mb-3">{service.price}</p>}
                    <button
                      className="bg-amber-400 text-black px-4 py-2 rounded font-semibold hover:bg-amber-500 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10
              bg-gray-800 text-white w-12 h-12 rounded-full shadow-lg
              flex items-center justify-center hover:bg-gray-700 transition"
          >
                      <ChevronRight />
                  </button>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
