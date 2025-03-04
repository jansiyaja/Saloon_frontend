import { Link } from "react-router-dom";
import FRONTEND_ROUTES from "../../../Routes/frontendRoutes";

const AboutSection = () => {
  return (
    <section className="bg-black text-amber-300 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2">
          <img
            src="https://saloonsite.s3.eu-north-1.amazonaws.com/concentrated-shoemaker-workshop-making-shoes.jpg"
            alt="Our Story"
            className="rounded-lg shadow-lg"
          />
        </div>

      
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h2 className="text-4xl font-semibold text-center mb-8">Our Story</h2>
          <p className="mb-4">
            Established over a century ago, our salon began as a humble,
            family-run barbershop in the early 1900s. From day one, we’ve been
            guided by a commitment to excellence and an unwavering passion for
            beauty. Over the decades, our craft has evolved—from classic
            grooming techniques to modern, cutting-edge artistry—yet our core
            values remain the same. We believe in nurturing every client’s
            individual style and offering an experience that goes beyond a
            simple haircut or treatment.
          </p>
          <p className="mb-4">
            Our salon’s reputation for exceptional customer service was built on
            generations of dedicated stylists who view each guest as a friend
            and every visit as a chance to celebrate your unique beauty. We take
            pride in merging old-world hospitality with contemporary trends,
            ensuring that when you step through our doors, you feel both at home
            and on the cusp of the latest innovations in hair and spa care.
            Whether you’re seeking a subtle refresh or a bold new look, we’re
            here to help you shine—just as we’ve done for our cherished clients
            for over 100 years.
          </p>

          
          
            
            <Link 
              to={FRONTEND_ROUTES.ABOUT} 
              className="inline-block px-6 mt-2.5 py-3 bg-amber-300 text-black font-semibold rounded hover:bg-amber-400 transition duration-300"
            >
              Learn More
            </Link>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
