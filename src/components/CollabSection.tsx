
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Instagram, Music2 } from "lucide-react";

const services = [
  {
    title: "Custom Beat Production",
    description: "Tailored beats that match your vision and style"
  },
  {
    title: "Mixing & Mastering",
    description: "Professional audio engineering to perfect your sound"
  },
  {
    title: "Sound Design",
    description: "Unique sonic elements to enhance your projects"
  },
  {
    title: "Film & Media Scoring",
    description: "Emotional soundtracks for visual media"
  },
];

const CollabSection = () => {
  return (
    <section id="collab" className="section bg-zinc-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">What I Offer</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Let's create something amazing together. I offer professional music production services across all genres and languages.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900/40 border-zinc-800 h-full hover:border-spotify/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-start">
                  <div className="mb-4 p-2 rounded-full bg-spotify/20">
                    <div className="h-2 w-2 bg-spotify rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-100">{service.title}</h3>
                  <p className="text-zinc-400 text-base">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-xl mx-auto text-center">
          <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm">
            <CardContent className="pt-6 pb-8">
              <h3 className="text-xl font-semibold mb-6">Collab With Me</h3>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button asChild className="bg-spotify hover:bg-spotify-dark text-white rounded-full px-6">
                  <a href="mailto:contact@abhisheksolomon.com" className="inline-flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Me
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="border-zinc-700 hover:bg-zinc-800 hover:border-spotify/50 rounded-full px-6">
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-spotify" />
                    Instagram
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="border-zinc-700 hover:bg-zinc-800 hover:border-spotify/50 rounded-full px-6">
                  <a href="https://open.spotify.com/artist/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Music2 className="h-5 w-5 text-spotify" />
                    Spotify
                  </a>
                </Button>
              </div>
              
              <p className="text-zinc-400 text-sm">
                I'm always open to new collaborations and projects. Let's create something amazing together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CollabSection;