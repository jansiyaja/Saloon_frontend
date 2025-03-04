import React from "react";

const MapSection: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Find Us</h2>
      <div className="overflow-hidden rounded">
        <iframe
          title="Salon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="300"
          loading="lazy"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default MapSection;
