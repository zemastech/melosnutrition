"use client";

import { motion } from "framer-motion";
import { ClipboardList, ShoppingBasket, Home, RefreshCw } from "lucide-react";

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
        A <span className="text-primary italic">structured, personalized</span> approach to nutrition—grounded in science and built for real life.
      </h2>
      <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Melos Nutritional Consultancy &amp; Therapy was founded by Kirubel, a Food Science and Nutrition professional based in Addis Ababa. The focus is not on restrictive diets or unrealistic trends—but on practical, evidence-informed nutrition that works in real life.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: ClipboardList,
          label: "Comprehensive Assessment",
          desc: "Detailed health assessment, body measurements, and lifestyle analysis to inform every plan."
        },
        {
          icon: ShoppingBasket,
          label: "Locally Available Foods",
          desc: "Plans built around affordable, everyday ingredients making nutrition realistic and sustainable."
        },
        {
          icon: Home,
          label: "Home-Based Consultations",
          desc: "Hands-on guidance with meal planning, grocery planning, and cooking support at your home."
        },
        {
          icon: RefreshCw,
          label: "Ongoing Follow-Up",
          desc: "Regular progress monitoring and plan adjustments to ensure consistency and long-term results."
        }
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
