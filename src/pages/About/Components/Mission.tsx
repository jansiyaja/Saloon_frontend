import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Leaf, Sparkles, ShieldCheck } from "lucide-react";

const Mission: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-black text-amber-300">
      <div className="container mx-auto max-w-4xl space-y-12 text-center">
    
        <motion.div
          className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg">
            Empowering clients through personalized beauty experiences with
            cutting-edge techniques and top-quality products.
          </p>
        </motion.div>

     
        <motion.div
          className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300 text-lg">
            To lead in sustainable beauty practices, continuously innovating and
            inspiring confidence in every client we serve.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Our Core Values</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-300">
          <li className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
            <CheckCircle className="text-amber-400 w-8 h-8" />
            <span>Customer Satisfaction – We strive to exceed expectations.</span>
          </li>
          <li className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
            <ShieldCheck className="text-amber-400 w-8 h-8" />
            <span>Quality – Using the best products for long-lasting results.</span>
          </li>
          <li className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
            <Sparkles className="text-amber-400 w-8 h-8" />
            <span>Innovation – Evolving with the latest trends & technology.</span>
          </li>
          <li className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
            <Leaf className="text-amber-400 w-8 h-8" />
            <span>Sustainability – Committed to eco-friendly beauty solutions.</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Mission;
