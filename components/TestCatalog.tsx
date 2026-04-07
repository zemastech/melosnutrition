"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export const TestCatalog = () => (
  <section id="tests" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
    <motion.h2 
      {...fadeIn}
      transition={{ duration: 0.8 }}
      className="text-4xl font-semibold mb-12"
    >
      Specialized Testing
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div 
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:col-span-2 bg-primary rounded-[2rem] p-12 text-white relative overflow-hidden group"
      >
        <div className="relative z-10">
          <span className="px-3 py-1 border border-white/30 rounded-full text-[10px] uppercase mb-6 inline-block">Diagnostic</span>
          <h3 className="text-4xl font-semibold mb-4">Food Sensitivity Testing</h3>
          <p className="opacity-70 max-w-md mb-8">Identify triggers that cause inflammation and digestive issues through advanced IgG antibody testing.</p>
          <button className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all">
            Learn more <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity">
          <img src="https://images.unsplash.com/photo-1511688858344-1855dd9f4a50?auto=format&fit=crop&q=80&w=600" alt="Fruit" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </motion.div>

      <motion.div 
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-accent rounded-[2rem] p-8 flex flex-col justify-between"
      >
        <div>
          <span className="px-3 py-1 bg-white rounded-full text-[10px] uppercase mb-6 inline-block">Metabolic</span>
          <h3 className="text-2xl font-bold mb-2">Metabolic Rate Testing</h3>
          <p className="text-sm text-gray-500">Measure exactly how many calories your body burns at rest.</p>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden mt-6">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400" alt="Athlete" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </motion.div>

      <motion.div 
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-[2rem] p-8 flex flex-col justify-between border border-accent"
      >
        <div>
          <span className="px-3 py-1 bg-accent rounded-full text-[10px] uppercase mb-6 inline-block">Nutritional</span>
          <h3 className="text-2xl font-bold mb-2">Vitamin Profile</h3>
          <p className="text-sm text-gray-500">Comprehensive analysis of micronutrient deficiencies.</p>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden mt-6">
          <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" alt="Supplements" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </motion.div>

      <motion.div 
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:col-span-2 bg-accent rounded-[2rem] p-12 flex items-center justify-between group cursor-pointer"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Activity className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">View Full Catalog</h3>
            <p className="text-gray-500">Explore our complete range of clinical tests.</p>
          </div>
        </div>
        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </motion.div>
    </div>
  </section>
);

