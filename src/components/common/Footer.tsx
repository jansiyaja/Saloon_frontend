import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-bold">SalonBrand</h2>
          <p className="mt-2 text-amber-300">
            Experience the best salon services with our expert stylists.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="text-amber-300 hover:text-white">Home</a></li>
            <li><a href="/services" className="text-amber-300 hover:text-white">Services</a></li>
            <li><a href="/booking" className="text-amber-300 hover:text-white">Booking</a></li>
            <li><a href="/contact" className="text-amber-300 hover:text-white">Contact</a></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-amber-300 hover:text-white text-2xl"><FaFacebook /></a>
            <a href="#" className="text-amber-300 hover:text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="text-amber-300 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-amber-300 hover:text-white text-2xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

    
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SalonBrand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
