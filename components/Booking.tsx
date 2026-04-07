"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export const Booking = () => (
  <section className="py-24 px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
      <motion.div 
        {...fadeIn}
        transition={{ duration: 0.8 }}
        className="rounded-[3rem] overflow-hidden relative h-[500px]"
      >
        <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=1000" alt="Healthy Meal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute top-8 left-8 glass-card px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-6 h-6 rounded-full border border-white" alt="User" />)}
          </div>
          172+ Reviews
        </div>
      </motion.div>
      <motion.div 
        {...fadeIn}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-primary rounded-[3rem] p-12 text-white flex flex-col justify-center relative overflow-hidden"
      >
        <span className="px-4 py-1 border border-white/30 rounded-full text-[10px] uppercase mb-8 inline-block w-fit">Reserve spot</span>
        <h2 className="text-5xl font-semibold mb-6 leading-tight">Effortless Booking <br /> for Your Health</h2>
        <p className="opacity-70 mb-12 max-w-md">Take the first step towards a healthier you. Secure your spot now to get your personalized nutrition plan.</p>
        <div className="flex flex-wrap items-center gap-8">
          <a 
            href="https://t.me/Meloset" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-all group"
          >
            Book Now <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <div className="text-sm">
            <p className="font-bold">Exceptional Experience</p>
            <p className="opacity-60">Reach out today, get your plan, and start your journey.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

