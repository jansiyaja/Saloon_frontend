import GallerySection from "../../components/common/GallerySection";
import { galleryImages } from "../../Data/aboutData";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";


const Home = () => {

  return (
    <div className="bg-black">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection title="Home Gallery" images={galleryImages} />
      <CTASection />
      
      <TestimonialSection/>
    </div>
  );
};

export default Home;
