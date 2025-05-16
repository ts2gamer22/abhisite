import React from 'react';
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-zinc-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row gap-12 items-center"
        >
          <div className="w-full lg:w-1/2 pl-0 md:pl-6 lg:pl-12 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">About Me</h2>
            
            <p className="text-zinc-300 mb-6 text-lg">
            I'm Abhishek Solomon, a 22-year-old music producer blending hip-hop and Indian sounds. 
            </p>
            <p className="text-zinc-300 mb-6 text-lg">
            I started with trap beats, now I mix all kinds of vibes—melodic, soulful, global. I just make music that feels real and tells a story.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-[#8F62C2]/30 hover:border-[#8F62C2]/70 transition-colors">
                <img 
                  src="/about me face.jpg" 
                  alt="Abhishek Solomon" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-0.5 rounded-2xl bg-spotify/20 blur-md -z-10"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
