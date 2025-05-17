import React from 'react';
import { Button } from "@/components/ui/button";
import { Music2, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Abhishek Solomon</h3>
          
          <div className="flex gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://open.spotify.com/artist/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="hover:bg-[#7A51AD]/20"
              >
                <img src="/abhisite/spotifyicon.svg" className="h-5 w-5" alt="Spotify" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="mailto:contact@abhisheksolomon.com" 
                aria-label="Email"
                className="hover:bg-[#7A51AD]/20"
              >
                <Mail className="h-5 w-5 text-[#8F62C2]" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:bg-[#7A51AD]/20"
              >
                <Instagram className="h-5 w-5 text-[#8F62C2]" />
              </a>
            </Button>
          </div>
          
          <div className="text-zinc-500 text-sm mb-4">
            <p>© {currentYear} Abhishek Solomon. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-400">
            <a href="#" className="hover:text-zinc-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-200 transition-colors">Terms of Service</a>
            <a href="#collab" className="hover:text-zinc-200 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
