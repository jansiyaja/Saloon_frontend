import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'The best salon experience I have ever had. My hair has never looked better!',
    author: 'Jane Doe',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-28+at+10.46.00_df07b328.jpg'
  },
  {
    quote: 'Absolutely amazing! The staff is friendly and the service is top-notch.',
    author: 'John Smith',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-28+at+10.45.51_ef733992.jpg'
  },
  {
    quote: 'I love the ambiance and the professionalism. Highly recommended!',
    author: 'Emily Johnson',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-28+at+10.51.38_6dfea8e8.jpg',
  }
];

// Parent container variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // Stagger children so each card animates sequentially
      staggerChildren: 0.2,
    },
  },
};

// Each card item variants
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

        {/* Motion container for staggered fade-in */}
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


