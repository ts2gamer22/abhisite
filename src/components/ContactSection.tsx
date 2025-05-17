
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Instagram, Music } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-black backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">LET'S GET IN TOUCH</h2>
            <div className="w-12 h-1 bg-[#8F62C2] mb-8"></div>
            
            <p className="text-zinc-300 mb-8">
              Feel free to both ask questions and send business inquiries.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="text-[#8F62C2] h-5 w-5" />
                <span className="text-zinc-300">contact@abhisheksolomon.com</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/abhishekbharathsolomon/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white flex items-center gap-4">
                  <Instagram className="text-[#8F62C2] h-5 w-5" />
                  <span>@abhishekbharathsolomon</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://open.spotify.com/artist/5dgtHxWOCczwceqvBio34M" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white flex items-center gap-4">
                  <img src="/abhisite/spotifyicon.svg" className="h-5 w-5" alt="Spotify" />
                  <span>Abhishek Solomon</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-zinc-900/50 border-zinc-800 focus:border-[#8F62C2] text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-900/50 border-zinc-800 focus:border-[#8F62C2] text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Your location"
                    className="bg-zinc-900/50 border-zinc-800 focus:border-[#8F62C2] text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="Your phone"
                    className="bg-zinc-900/50 border-zinc-800 focus:border-[#8F62C2] text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="bg-zinc-900/50 border-zinc-800 focus:border-[#8F62C2] text-white min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-amber-300 hover:bg-amber-400 text-black font-medium py-3">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;