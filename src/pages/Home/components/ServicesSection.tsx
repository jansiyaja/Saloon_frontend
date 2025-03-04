import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FRONTEND_ROUTES from '../../../Routes/frontendRoutes';
import { services } from '../../../Data/homeData';





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
