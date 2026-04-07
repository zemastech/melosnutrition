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
      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-6 block">Unlock Your Energy</span>
      <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-primary">The Path to Your Potential</h2>
      <div className="w-20 h-1 bg-primary/20 mx-auto mb-10" />
      <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
        Your body is a high-performance machine. We use clinical pathology to identify the gaps in your nutrition and provide the specific solutions you need to unleash your true energy.
      </p>
    </motion.div>
  </section>
);

