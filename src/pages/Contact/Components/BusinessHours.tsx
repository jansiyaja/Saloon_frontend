import React from "react";

const BusinessHours: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
        <ul className="text-gray-300 space-y-2">
          <li>Mon-Fri: 9am - 7pm</li>
          <li>Sat: 10am - 5pm</li>
          <li>Sun: Closed</li>
        </ul>
      </div>
    </section>
  );
};

export default BusinessHours;
