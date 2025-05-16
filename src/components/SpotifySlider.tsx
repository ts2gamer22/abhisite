
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

// Updated Spotify tracks with the specific requested tracks
const spotifyTracks = [
  {
    id: 1,
    title: "Thadi",
    description: "With Slim KD & Vrun",
    embedUrl: "https://open.spotify.com/embed/track/1zJwZqaRVISdz0PhnhkloV?utm_source=generator",
  },
  {
    id: 2, 
    title: "Internet",
    description: "With Daerrn Grey, henro & Vrun",
    embedUrl: "https://open.spotify.com/embed/track/1mH79WL77dVCHZOncUDVle?utm_source=generator",
  },
  {
    id: 3,
    title: "Lament",
    description: "With Vrun",
    embedUrl: "https://open.spotify.com/embed/track/7jHpsrqlsV0VjWXmdZ03Qf?utm_source=generator",
  },
  {
    id: 4,
    title: "Kuliru",
    description: "With Rakz Radiant",
    embedUrl: "https://open.spotify.com/embed/track/6kVL3PgieFbHulvpeH4AKh?utm_source=generator",
  },
];

const SpotifySlider = () => {
  return (
    <section id="spotify" className="section bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-3">
              <Music className="text-[#8F62C2] h-8 w-8" />
              <span className="text-gradient">My Music</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
             Experience my sound across different styles and moods.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Spotify Embeds Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {spotifyTracks.map((track) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (track.id - 1) * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-zinc-900/60 border border-zinc-800 hover:border-[#8F62C2]/70 overflow-hidden backdrop-blur-md h-full flex flex-col transition-colors">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-col gap-2 flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{track.title}</h3>
                        <p className="text-zinc-400 text-xs">{track.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-full h-48 md:h-60 rounded-md overflow-hidden flex-grow">
                      <iframe
                        src={track.embedUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={`Spotify embed: ${track.title}`}
                        className="bg-black"
                      ></iframe>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-[#8F62C2] hover:bg-[#7F52B2] text-white rounded-full px-8">
            <a 
              href="https://open.spotify.com/artist/5dgtHxWOCczwceqvBio34M" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Music className="h-5 w-5" />
              View Full Discography
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpotifySlider;