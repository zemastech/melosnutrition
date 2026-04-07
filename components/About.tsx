"use client";

import { motion } from "framer-motion";
import { Salad, FlaskConical, Scale, Activity } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
    <motion.div 
      {...fadeIn}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4 block">About Melos</span>
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto">
        We offer a <span className="text-primary italic">scientific approach</span> to nutrition for all health goals, with advanced testing and clinical expertise. Whether for recovery or growth, a healthier life starts here.
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: Salad, label: "Clinical Nutrition", desc: "Personalized diet plans for chronic disease management." },
        { icon: FlaskConical, label: "Functional Pathology", desc: "Advanced testing to look at root causes of illness." },
        { icon: Scale, label: "Weight Management", desc: "Metabolic tracking for healthy weight loss or gain." },
        { icon: Activity, label: "Chronic Disease", desc: "Using Food as Medicine to treat or reverse conditions." }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          {...fadeIn}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-accent/50 transition-colors group"
        >
          <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <item.icon className="w-6 h-6" />
          </div>
          <h3 className="font-bold mb-2">{item.label}</h3>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
