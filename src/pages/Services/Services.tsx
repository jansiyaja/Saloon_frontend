import React from "react";
import HeroSection from "./components/HeroSection";
import DetailedServices from "./components/DetailedServices";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import FAQs from "./components/FAQs";
import GallerySection from "../../components/common/GallerySection";
import { galleryImages } from "../../Data/aboutData";


const Services: React.FC = () => {

  return (
    <div className="bg-black text-white">
      <HeroSection />
      <DetailedServices />
      <WhyChooseUs />
       <GallerySection title="Our Work" images={galleryImages} />
       <FAQs />
      <CallToAction />
    </div>
  );
};

export default Services;