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
      { threshold: 0.5 } 
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
    <section ref={sectionRef} className="relative bg-black text-amber-300 py-32 overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className={`text-[10rem] md:text-[15rem] font-extrabold opacity-5 leading-none transition-all duration-500 ${
            isInView ? 'opacity-20 scale-110 text-amber-500' : 'opacity-5'
          }`}
        >
          LET'S GO
        </h1>
      </div>

      <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl font-semibold text-center mb-8">
          TIME TO GET YOURS
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-xl text-amber-200">
          YOU WON&apos;T REGRET IT
        </p>
        <Link
          to={FRONTEND_ROUTES.APPOINTMENT}
          className="
            inline-block px-8 py-4
            bg-amber-400 text-black font-bold
            rounded
            shadow
            hover:bg-amber-500 hover:scale-105
            transition-transform duration-300
          "
        >
          MAKE AN APPOINTMENT
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
