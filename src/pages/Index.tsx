
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpotifySlider from '@/components/SpotifySlider';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import VinylPlayer from '@/components/VinylPlayer';
import GenresSection from '@/components/GenresSection';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Abhishek Solomon | Music Producer";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <SpotifySlider />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <VinylPlayer />
    </motion.div>
  );
};

export default Index;
