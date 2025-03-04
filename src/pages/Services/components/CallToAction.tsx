import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-black to-amber-500 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Look?</h2>
      <p className="text-xl mb-8">Schedule your appointment today and experience the difference.</p>
      <button className="bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
        Book Now
      </button>
    </section>
  );
};

export default CallToAction;