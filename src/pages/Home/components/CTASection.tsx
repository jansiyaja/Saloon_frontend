import React from 'react';
import { Link } from 'react-router-dom';
import FRONTEND_ROUTES from '../../../Routes/frontendRoutes';

const CTASection: React.FC = () => {
  return (
    <section
      className="
        relative
        bg-cover bg-center bg-no-repeat
       text-amber-300
        py-16
      "

    >

    
      {/* Content */}
      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Text Block */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Elevate Your Look with Our Expert Stylists
          </h2>
          <p className="max-w-md mx-auto md:mx-0">
            Ready to experience a luxurious transformation? Our seasoned team is
            here to make you shine. Discover the latest trends, personalized
            treatments, and a warm atmosphere that keeps clients returning
            decade after decade.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 space-y-4 md:space-y-0">
            <Link
              to={FRONTEND_ROUTES.APPOINTMENT}
              className="
                inline-block px-6 py-3
                bg-amber-400 text-black font-semibold
                rounded shadow
                hover:bg-amber-500 hover:scale-105
                transition-transform duration-300
              "
            >
              Book Appointment
            </Link>
            <Link
              to={FRONTEND_ROUTES.BLOG}
              className="
                inline-block px-6 py-3
                bg-transparent border border-amber-400
                text-amber-400 font-semibold
                rounded shadow
                hover:bg-amber-400 hover:text-black
                hover:scale-105
                transition-transform duration-300
              "
            >
              Visit Our Blog
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CTASection;
