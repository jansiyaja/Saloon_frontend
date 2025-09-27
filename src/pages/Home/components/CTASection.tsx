import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import FRONTEND_ROUTES from '../../../Routes/frontendRoutes';

const CTASection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black text-amber-300 py-24 sm:py-32 overflow-hidden">
      {/* Large Background Text Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className={`text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold opacity-5 leading-none transition-all duration-500 ${
            isInView ? 'opacity-20 scale-110 text-amber-500' : 'opacity-5'
          }`}
        >
          LET'S GO
        </h1>
      </div>

      {/* Content Section */}
      <div className="relative container mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          TIME TO GET YOURS
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg text-amber-200">
          YOU WON&apos;T REGRET IT
        </p>

        {/* CTA Button */}
        <Link
          to={FRONTEND_ROUTES.REGISTER}
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-amber-400 text-black font-bold rounded-lg shadow-md hover:bg-amber-500 hover:scale-105 transition-transform duration-300"
        >
          MAKE AN APPOINTMENT
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
