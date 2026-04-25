"use client";

import { motion } from "framer-motion";

export const PotentialSection = () => (
  <section className="py-32 px-6 bg-white overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-6 block">Our Philosophy</span>
      <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-primary">Science-Based. Practical. Sustainable.</h2>
      <div className="w-20 h-1 bg-primary/20 mx-auto mb-10" />
      <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
        At Melos, nutrition is not about restrictive diets or unrealistic trends. The focus is on a structured, personalized approach that works within your real life—using affordable, locally available foods and hands-on guidance to help you build lasting habits and achieve real results.
      </p>
    </motion.div>
  </section>
);
