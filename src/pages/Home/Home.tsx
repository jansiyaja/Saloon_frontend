import GallerySection from "../../components/common/GallerySection";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";


const Home = () => {

  const galleryImages = [
"https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-21+at+12.44.04_c34509ec.jpg",
 "https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-21+at+12.44.12_4b5445a0.jpg",
  'https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-25+at+23.14.01_6696d17a.jpg',
  "https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-26+at+00.20.32_f5d6b613.jpg",
  "https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-26+at+00.20.53_aef43b20.jpg",
  "https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-26+at+20.15.26_8be54c72.jpg",
"https://saloonsite.s3.eu-north-1.amazonaws.com/Gallary/WhatsApp+Image+2025-02-28+at+09.56.31_10f91f7e.jpg"
];
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
