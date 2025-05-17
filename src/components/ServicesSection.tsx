
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Custom Beat Production",
    description: "Tailored beats that match your vision and style",
    image: "/abhisite/custombeat.png"
  },
  {
    title: "Mixing & Mastering",
    description: "Professional audio engineering to perfect your sound",
    image: "/abhisite/mediamix.png"
  },
  {
    title: "Sound Design",
    description: "Unique sonic elements to enhance your projects",
    image: "/abhisite/sounddesign.png"
  },
  {
    title: "Film & Media Scoring",
    description: "Emotional soundtracks for visual media",
    image: "/abhisite/movie.png"
  },
];

const genres = [
  {
    title: "HOUSE",
    description: "Crafting smooth, groovy house vibes to set the perfect mood and keep the dance floor packed."
  },
  {
    title: "EDM",
    description: "Explosive EDM sets filled with crowd-favorite anthems to fuel the party and elevate the energy."
  },
  {
    title: "TECHNO",
    description: "Delivering deep, pulsating techno tracks that create an intense, immersive dance experience."
  },
  {
    title: "HIP HOP",
    description: "Producing rich, rhythmic hip hop beats with powerful bass and innovative samples."
  },
];

const ServicesSection = () => {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section bg-zinc-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">WHAT I OFFER</h2>
          <div className="w-12 h-1 bg-[#8F62C2] mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Service Grids - Moved to the top */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/40 border-zinc-800 h-full hover:border-[#6A3E9B]/70 transition-colors">
                  <CardContent className="p-6 flex flex-col items-start">
                    <div className="mb-4 w-full h-28 rounded-lg overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-zinc-100">{service.title}</h3>
                    <p className="text-zinc-400 text-base">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Genres List - Now below the service grids */}
          <div className="space-y-8 mb-12">
            {genres.map((genre, index) => (
              <div key={genre.title} className="border-b border-zinc-800 pb-8 last:border-0">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="md:w-1/4">
                    <h3 className="text-3xl md:text-4xl font-bold">{genre.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-zinc-300">{genre.description}</p>
                  </div>
                  <div className="md:w-1/12 flex justify-end">
                    <motion.button
                      onClick={scrollToContact}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ x: 5 }}
                      className="rounded-full bg-[#8F62C2]/10 p-4 border border-[#8F62C2]/20 cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#8F62C2]" />
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;