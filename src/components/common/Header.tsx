import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import FRONTEND_ROUTES from "../../Routes/frontendRoutes";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link to={FRONTEND_ROUTES.HOME} className="text-2xl font-bold text-amber-300">
          Premium Salon
        </Link>

        
        <nav className="hidden md:flex space-x-6">
          <Link to={FRONTEND_ROUTES.HOME} className="text-amber-300 hover:text-amber-400 font-medium">
            Home
          </Link>
          <Link to={FRONTEND_ROUTES.SERVICES} className="text-amber-300 hover:text-amber-400 font-medium">
            Services
          </Link>
          <Link to={FRONTEND_ROUTES.ABOUT} className="text-amber-300 hover:text-amber-400 font-medium">
            About
          </Link>
          <Link to={FRONTEND_ROUTES.CONTACT} className="text-amber-300 hover:text-amber-400 font-medium">
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-amber-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-black border-t border-amber-300">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                className="block text-amber-300 hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-amber-300 hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-amber-300 hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-amber-300 hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
