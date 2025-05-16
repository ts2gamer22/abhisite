import React from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GenresSection = () => {
  const genreCategories = {
    "Hip-Hop & Rap": [
      "Trap", "Boom Bap", "Drill", "Melodic Rap", "Lofi Hip-Hop"
    ],
    "R&B & Soul": [
      "Contemporary R&B", "Neo Soul", "Funk", "Jazz Fusion", "Smooth R&B"
    ],
    "Electronic": [
      "EDM", "House", "Dubstep", "Ambient", "Techno"
    ],
    "World Music": [
      "Afrobeats", "Latin", "K-Pop", "Bollywood", "Reggaeton" 
    ]
  };
  
  return (
    <section id="genres" className="section bg-zinc-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Genres I Work With</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            My production style spans across multiple genres, allowing me to create unique blends that cross traditional boundaries.
          </p>
        </motion.div>
      
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="Hip-Hop & Rap" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8 bg-zinc-800/50">
              {Object.keys(genreCategories).map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-spotify data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(genreCategories).map(([category, styles]) => (
              <TabsContent 
                key={category} 
                value={category}
                className="mt-0 border-none p-0"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {styles.map((style, index) => (
                    <motion.div
                      key={style}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-4 text-center hover:border-spotify/50 transition-colors"
                    >
                      <span className="text-zinc-200">{style}</span>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default GenresSection;
