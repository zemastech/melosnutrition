"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export const Booking = () => (
  <section className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">

      {/* Left card - nutrition image */}
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.8 }}
        className="rounded-[3rem] overflow-hidden relative h-[500px]"
      >
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000"
          alt="Nutritious food"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-8 left-8 glass-card px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-6 h-6 rounded-full border border-white" alt="User" />
            ))}
          </div>
          172+ Reviews
        </div>
      </motion.div>

      {/* Right card - CTA with bg image + overlay */}
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="rounded-[3rem] relative overflow-hidden h-[500px] flex flex-col justify-center p-12"
      >
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000"
          alt="Healthy meal plan"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/90" />

        <div className="relative z-10 text-white flex flex-col justify-center h-full">
          <span className="px-4 py-1 border border-white/30 rounded-full text-[10px] uppercase mb-8 inline-block w-fit">Limited Availability</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Book Your Personalized Nutrition Plan</h2>
          <p className="opacity-70 mb-6 max-w-md text-sm leading-relaxed">
            Every program includes meal planning, grocery guidance, cooking support, nutrition education, and ongoing follow-up. All delivered through home-based consultation in Addis Ababa.
          </p>
          <p className="opacity-60 mb-10 text-sm max-w-md">
            Only a limited number of clients are accepted each week to ensure quality and personalized attention.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-all group"
            >
              Message on Telegram <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);
