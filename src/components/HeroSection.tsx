import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background Image - reduced opacity for better visibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/abhisite/herosection.jpg"
          alt="Music Studio"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-muted-foreground uppercase tracking-wider text-sm md:text-base mb-2">Music Producer</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
            <span className="text-gradient">Abhishek Solomon</span>
          </h1>
          
          <p className="text-muted-foreground text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Creating melodies that transcend all boundaries.
          </p>
          
          <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
            <Button asChild className="bg-[#8F62C2] hover:bg-[#7F52B2] text-white px-3 md:px-8 py-3 md:py-6 rounded-full text-sm md:text-base whitespace-nowrap">
              <a href="#spotify">Listen Now</a>
            </Button>
            <Button asChild variant="outline" className="border-white/20 hover:bg-[#5A2E8B]/80 hover:border-white/20 text-white px-3 md:px-8 py-3 md:py-6 rounded-full text-sm md:text-base">
              <a href="#contact">Collaborate</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="text-muted-foreground hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <svg 
            className="w-6 h-6 animate-bounce"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
