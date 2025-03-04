import React from "react";
import { reasons } from "../../../Data/whyChooseUsData";


const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-amber-300">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 p-6 rounded-lg hover:shadow-amber-300 shadow transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
