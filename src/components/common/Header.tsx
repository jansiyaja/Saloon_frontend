import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import FRONTEND_ROUTES from "../../Routes/frontendRoutes";
import Logo from "../../assets/Logo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const navLinks = [
    { path: FRONTEND_ROUTES.HOME, label: "Home" },
    { path: FRONTEND_ROUTES.SERVICES, label: "Services" },
    { path: FRONTEND_ROUTES.ABOUT, label: "About" },
    { path: FRONTEND_ROUTES.CONTACT, label: "Contact" },
    { path: FRONTEND_ROUTES.CONTACT, label: "" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-transparent transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to={FRONTEND_ROUTES.HOME} className="flex items-center space-x-2 font-medium text-amber-300">
          <img src={Logo} alt="Logo" className="h-20 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${
                location.pathname === link.path ? "text-white" : "text-amber-300 hover:text-amber-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-amber-300 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {isOpen && (
        <nav className="md:hidden bg-black border-t border-amber-300">
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block transition-colors ${
                    location.pathname === link.path ? "text-white" : "text-amber-300 hover:text-amber-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
