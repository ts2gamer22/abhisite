
import React, { useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';
import FloatingVinyl from './FloatingVinyl';

const VinylPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  
  useEffect(() => {
    // Create Howl instance
    soundRef.current = new Howl({
      src: ["/sample.mp3"], // Updated to use the new sample.mp3 file
      loop: true,
      volume: 0.6,
      preload: true,
      html5: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
    });
    
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, []);
  
  const togglePlay = () => {
    if (!soundRef.current) return;
    
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  };
  
  return (
    <FloatingVinyl onPlay={togglePlay} isPlaying={isPlaying} />
  );
};

export default VinylPlayer;