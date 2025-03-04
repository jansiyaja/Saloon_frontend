import React from "react";
import HeroSection from "./Components/HeroSection";
import ContactForm from "./Components/ContactForm";
import MapSection from "./Components/MapSection";
import BusinessHours from "./Components/BusinessHours";

const Contact: React.FC = () => {
  return (
    <main className="bg-black text-amber-300">
      <HeroSection />
      
     
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <MapSection />
        </div>
      </section>

      
      <BusinessHours />
    </main>
  );
};

export default Contact;
