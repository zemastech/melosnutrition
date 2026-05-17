"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-end pt-28 pb-10 sm:pb-20">
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="/hero.jpg"
        alt="Healthy Food"
        className="w-full h-full object-cover brightness-[0.65]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </div>

    {/* Gradient transition into the next section */}
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-black z-[5] pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end px-4 sm:px-8">
      <div className="lg:col-span-8">
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
          {['Evidence-Informed', 'Personalized', 'Home-Based'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold !text-white leading-[1.05] tracking-tight mb-4 sm:mb-6"
        >
          Structured Nutrition <br /> for Lasting Health <br /> and Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed"
        >
          Melos provides personalized nutrition plans based on full health assessment, body measurements, and lifestyle analysis, supported by practical guidance and ongoing follow-up to ensure real, sustainable results.
        </motion.p>
      </div>

      <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4 sm:gap-6">
        <div className="glass-card p-3 sm:p-4 rounded-2xl text-white max-w-xs hidden sm:block">
          <span className="text-xs font-medium uppercase tracking-wider block mb-2">Limited spots available each week</span>
          <p className="text-sm opacity-90">Only a limited number of clients are accepted each week to ensure quality and personalized attention.</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <a
            href={CONTACT.phoneHref}
            className="bg-white text-black px-3 py-2 sm:px-6 sm:py-4 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-accent transition-all group"
          >
            Book Your Consultation <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a
            href="#packages"
            className="border border-white/40 text-white px-3 py-2 sm:px-6 sm:py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-white/10 transition-all"
          >
            View Programs
          </a>
        </div>
      </div>
    </div>

  </section>
);
