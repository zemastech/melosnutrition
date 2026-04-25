"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Send } from "lucide-react";
import { CONTACT } from "@/lib/constants";

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
          {['Evidence-Informed', 'Personalized', 'Home-Based'].map((tag) => (
            <span key={tag} className="px-4 py-1 rounded-full border border-white/30 text-white text-xs backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold !text-white leading-[1.05] tracking-tight mb-6"
        >
          Structured Nutrition <br /> for Lasting Health <br /> and Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed"
        >
          Melos provides personalized nutrition plans based on full health assessment, body measurements, and lifestyle analysis—supported by practical guidance and ongoing follow-up to ensure real, sustainable results.
        </motion.p>
      </div>

      <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
        <div className="glass-card p-4 rounded-2xl text-white max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Limited spots available each week</span>
          </div>
          <p className="text-sm opacity-90 mb-4">Only a limited number of clients are accepted each week to ensure quality and personalized attention.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-all group"
          >
            Book Your Consultation <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a
            href="#packages"
            className="border border-white/40 text-white px-6 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
          >
            View Programs
          </a>
        </div>
      </div>
    </div>

    <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 text-white/70">
      <span className="text-[10px] uppercase tracking-[0.3em] vertical-text mb-4">Follow us</span>
      <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
        <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
      </a>
      <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer">
        <Send className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
      </a>
    </div>
  </section>
);
