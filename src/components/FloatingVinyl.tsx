import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingVinylProps {
  onPlay: () => void;
  isPlaying: boolean;
}

const FloatingVinyl = ({ onPlay, isPlaying }: FloatingVinylProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the vinyl only after scrolling past hero section
      if (window.scrollY > window.innerHeight * 0.85) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  // Generate bars for waveform
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5, x: 50 }}
      className="fixed right-8 top-1/2 z-40 transform -translate-y-1/2"
    >
      <button
        onClick={onPlay}
        className="relative bg-transparent border-0 p-0 cursor-pointer outline-none group"
        aria-label="Play music"
      >
        <div className="relative w-20 h-20 md:w-24 md:h-24 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#8F62C2]/30">
          {/* Waveform animation */}
          <div className="flex items-center justify-center gap-1 h-8">
            {bars.map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-[#8F62C2]"
                animate={{
                  height: isPlaying ? [15, 25, 10, 30, 15] : 15
                }}
                transition={{
                  duration: 1.2,
                  repeat: isPlaying ? Infinity : 0,
                  repeatType: "reverse",
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
          
          {/* Play/pause indicator */}
          <div className="absolute bottom-4 text-white text-xs font-bold">
            {isPlaying ? "PAUSE" : "PLAY"}
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className={`absolute inset-0 rounded-full bg-[#8F62C2]/30 filter blur-md transition-opacity ${isPlaying ? 'opacity-70 animate-pulse-slow' : 'opacity-0 group-hover:opacity-100'}`}></div>
      </button>
    </motion.div>
  );
};

export default FloatingVinyl;
