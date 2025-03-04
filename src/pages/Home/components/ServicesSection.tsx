import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../../../interfaces/Pages';
import { Link } from 'react-router-dom';
import FRONTEND_ROUTES from '../../../Routes/frontendRoutes';



const services: SlideData[] = [
  {
    title: 'Hair Styling',
    description: 'Trendy cuts, blowouts, and updos for any occasion.',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-21+at+14.00.22_f6ad545b.jpg',
  },
  {
    title: 'Hair Coloring',
    description: 'Vibrant colors and professional highlights for a fresh look.',
     image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-22+at+10.29.49_8754802f.jpg',
      },
  {
    title: 'Spa Treatments',
    description: 'Rejuvenate with relaxing facials, massages, and more.',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/wellness-concept-with-woman-massage-salon.jpg',
  },
  {
    title: 'Manicure & Pedicure',
    description: 'Pamper yourself with our nail care and polish services.',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/nail-hygiene-care-nail-polish.jpg',
  },
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

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black text-amber-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Our Services
        </h2>

       
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`
                relative w-full h-60 cursor-pointer
                ${index % 2 !== 0 ? 'mt-10' : ''}  
              `}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}   
            >
              <Link to={FRONTEND_ROUTES.SERVICES}>
              <div
                className="
                  w-full h-full  text-white
                  border-4 border-amber-400
                  p-6 flex flex-col items-center justify-center
                  shadow-xl bg-cover
                "
                 style={{
              backgroundImage: `url(${service.image})`,
            }}
              >
   
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-center">
                  {service.description}
                </p>
                </div>
                
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
