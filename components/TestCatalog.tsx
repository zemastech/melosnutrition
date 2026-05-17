"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export const TestCatalog = () => (
  <section id="assessment" className="py-12 sm:py-24 max-w-7xl mx-auto overflow-hidden px-6">
    <motion.h2
      {...fadeIn}
      transition={{ duration: 0.8 }}
      className="text-4xl font-semibold mb-4"
    >
      What We Measure
    </motion.h2>
    <motion.p
      {...fadeIn}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-gray-500 mb-12 max-w-xl"
    >
      During home visits, key measurements are taken to build an accurate and complete health profile before any plan is designed.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:col-span-2 bg-primary rounded-[2rem] p-12 text-white relative overflow-hidden group"
      >
        <div className="relative z-10">
          <span className="px-3 py-1 border border-white/30 rounded-full text-[10px] uppercase mb-6 inline-block">Health Vitals</span>
          <h3 className="text-4xl font-semibold mb-4">Cardiovascular & Metabolic Markers</h3>
          <p className="opacity-70 max-w-md">
            Blood pressure, oxygen saturation (SpO2), and fasting blood sugar (FBS) are measured to assess cardiovascular and metabolic health before planning begins.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity">
          <img src="https://images.unsplash.com/photo-1511688858344-1855dd9f4a50?auto=format&fit=crop&q=80&w=600" alt="Health assessment" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-accent rounded-[2rem] p-8 flex flex-col justify-between"
      >
        <div>
          <span className="px-3 py-1 bg-white rounded-full text-[10px] uppercase mb-6 inline-block">Body Composition</span>
          <h3 className="text-2xl font-bold mb-2">Fat & Lean Mass Analysis</h3>
          <p className="text-sm text-gray-500">Body fat percentage and lean body mass are assessed to tailor macronutrient targets accurately.</p>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden mt-6">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400" alt="Body composition" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-[2rem] p-8 flex flex-col justify-between border border-accent"
      >
        <div>
          <span className="px-3 py-1 bg-accent rounded-full text-[10px] uppercase mb-6 inline-block">Anthropometrics</span>
          <h3 className="text-2xl font-bold mb-2">Body Measurements</h3>
          <p className="text-sm text-gray-500">Waist-to-hip ratio, height, and other anthropometric data to monitor progress and set realistic targets.</p>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden mt-6">
          <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" alt="Measurements" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:col-span-2 bg-accent rounded-[2rem] p-12 flex items-center justify-between group"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0">
            <Activity className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Laboratory Tests When Needed</h3>
            <p className="text-gray-500 mt-1">When necessary, relevant laboratory tests are recommended to support accurate and safe nutrition planning, especially for clients with existing health conditions.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
