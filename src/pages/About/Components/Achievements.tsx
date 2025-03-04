import React from "react";
import { motion } from "framer-motion";
import { achievements, funFacts } from "../../../Data/achievements";




const Achievements: React.FC = () => {
  return (
    <>

      <section className="py-16 px-6 bg-gradient-to-r from-amber-100 to-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Awards & Achievements
          </motion.h2>
          <p className="mt-4 text-lg text-gray-700">
            Over the years, we have been recognized for excellence in beauty services. We are honored to receive the following accolades:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {item.icon}
                <p className="text-gray-800 text-lg font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fun Facts & Milestones
          </motion.h2>
          <p className="mt-4 text-lg text-gray-300">
            Here's a look at some fun facts and milestones that make our salon special:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {funFacts.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 shadow-lg p-6 rounded-lg flex flex-col items-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {item.icon}
                <p className="text-lg font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
