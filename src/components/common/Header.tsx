import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Premium Salon
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-pink-500 font-medium">
            Home
          </Link>
          <Link to="/services" className="hover:text-pink-500 font-medium">
            Services
          </Link>
          <Link to="/about" className="hover:text-pink-500 font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:text-pink-500 font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link to="/" className="block text-gray-700 hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-gray-700 hover:text-pink-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="block text-gray-700 hover:text-pink-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block text-gray-700 hover:text-pink-500">
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
