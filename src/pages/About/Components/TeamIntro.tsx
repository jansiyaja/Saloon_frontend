import React from "react";
import { motion } from "framer-motion";
import { teamMembers } from "../../../Data/aboutData";



const TeamIntro: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Expert Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <img
                className="w-32 h-32 mx-auto rounded-full border-4 border-amber-400"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-4 text-2xl font-semibold">{member.name}</h3>
              <p className="text-amber-400">{member.role}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;
