import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../../Data/homeData';




const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      
      staggerChildren: 0.2,
    },
  },
};


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-black text-amber-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>

       
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="
                p-6 rounded-lg shadow-lg border
                bg-black
                transition-shadow duration-300
                hover:shadow-amber-300
                flex flex-col
              "
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="font-semibold text-white">{testimonial.author}</div>
              </div>
              <p className="italic text-white">“{testimonial.quote}”</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;


