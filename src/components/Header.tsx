
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <nav className="w-full max-w-md">
            <ul className="flex justify-between items-center gap-3 md:gap-8 px-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-white hover:text-[#8F62C2] transition-colors text-[13px] md:text-sm font-medium tracking-wide"
                >
                  HOME
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white hover:text-[#8F62C2] transition-colors text-[13px] md:text-sm font-medium tracking-wide"
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('spotify')} 
                  className="text-white hover:text-[#8F62C2] transition-colors text-[13px] md:text-sm font-medium tracking-wide"
                >
                  MUSIC
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-white hover:text-[#8F62C2] transition-colors text-[13px] md:text-sm font-medium tracking-wide"
                >
                  SERVICES
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-white hover:text-[#8F62C2] transition-colors text-[13px] md:text-sm font-medium tracking-wide"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;