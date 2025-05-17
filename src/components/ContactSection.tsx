import React, { useState } from 'react';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";

import { sendToGoogleSheet } from '@/utils/sendToSheet';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const commonDomains = [
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'icloud.com',
      'protonmail.com',
      'aol.com',
      'mail.com',
      'zoho.com'
    ];
    
    const domain = email.split('@')[1];
    if (!domain || !commonDomains.some(d => domain.endsWith(d))) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) return;
    setIsLoading(true);
    
    try {
      await sendToGoogleSheet({ name, email, message });
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset sent state after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
                <a
                  href="https://www.instagram.com/abhishekbharathsolomon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white flex items-center gap-4"
                >
                  <Instagram className="text-[#8F62C2] h-5 w-5" />
                  <span>@abhishekbharathsolomon</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://open.spotify.com/artist/5dgtHxWOCczwceqvBio34M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white flex items-center gap-4"
                >
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name input */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-zinc-900/50 border-zinc-800 focus:border-[#8F62C2] text-white"
                    required
                  />
                </div>
                
                {/* Email input */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) validateEmail(e.target.value);
                    }}
                    onBlur={() => validateEmail(email)}
                    placeholder="Your email"
                    className="bg-zinc-900/50 border-zinc-800 focus:border-[#8F62C2] text-white"
                    required
                  />
                  {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>
              </div>

              {/* Message textarea */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  className="bg-zinc-900/50 border-zinc-800 focus:border-[#8F62C2] text-white min-h-[150px]"
                  required
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-amber-300 hover:bg-amber-400 text-black font-medium py-3"
                disabled={isLoading || isSent}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSent ? (
                  'Sent!'
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
