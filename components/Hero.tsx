"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Send } from "lucide-react";

export const Hero = () => (
  <section className="relative h-screen min-h-[800px] flex items-end justify-start px-4 pb-20">
    <div className="absolute inset-4 rounded-[2rem] overflow-hidden">
      <img 
        src="/hero-bg.jpg" 
        alt="Healthy Food" 
        className="w-full h-full object-cover brightness-[0.65]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end px-8">
      <div className="lg:col-span-8">
        <div className="flex gap-4 mb-6">
          {['Clinical', 'Functional', 'Personalized'].map((tag) => (
            <span key={tag} className="px-4 py-1 rounded-full border border-white/30 text-white text-xs backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-semibold !text-white leading-[1] tracking-tight mb-6"
        >
          Bridging Nutrition <br /> & Clinical Medicine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 font-serif italic font-bold max-w-2xl"
        >
          "Why settle for surviving when you were built to thrive?"
        </motion.p>
      </div>

      <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
        <div className="glass-card p-4 rounded-2xl text-white max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Limited slots available</span>
          </div>
          <p className="text-sm opacity-90 mb-4">Personalized diet plans and metabolic tracking for your health journey.</p>
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-primary" alt="User" />
            ))}
            <div className="w-8 h-8 rounded-full bg-accent text-black text-[10px] flex items-center justify-center font-bold border-2 border-primary">
              +12
            </div>
          </div>
        </div>
        <a 
          href="https://t.me/Meloset" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-all group"
        >
          Book Consultation <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>

    <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 text-white/70">
      <span className="text-[10px] uppercase tracking-[0.3em] vertical-text mb-4">Follow us</span>
      <a href="https://instagram.com/Meloset" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
      </a>
      <a href="https://t.me/Meloset" target="_blank" rel="noopener noreferrer">
        <Send className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
      </a>
    </div>
  </section>
);

