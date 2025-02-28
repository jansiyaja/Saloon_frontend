import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";


const Home = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <CTASection />
      
      <TestimonialSection/>
    </div>
  );
};

export default Home;
