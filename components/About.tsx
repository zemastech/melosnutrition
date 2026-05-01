"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
    <motion.div {...fadeIn} transition={{ duration: 0.8 }} className="mb-16">
      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4 block">About Melos</span>
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
        Practical, evidence-informed nutrition that <span className="text-primary italic">works in real life.</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Left — founding story + approach */}
      <div className="space-y-6">
        <motion.p {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 leading-relaxed">
          Melos Nutritional Consultancy &amp; Therapy was founded by Kirubel, a Food Science and Nutrition professional based in Addis Ababa. The goal of Melos is to provide practical, evidence-informed nutrition that works in real life.
        </motion.p>

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-accent rounded-[2rem] p-8"
        >
          <p className="text-gray-700 leading-relaxed">
            At Melos, the focus is not on restrictive diets or unrealistic trends. Instead, a structured and personalized approach is used, based on detailed health assessment, body measurements, and lifestyle analysis. This allows nutrition plans to be tailored to each individual&apos;s needs, whether the goal is fat loss, weight gain, improved energy, overall health, or nutrition support for non-communicable conditions such as diabetes and hypertension.
          </p>
        </motion.div>
      </div>

      {/* Right — delivery + outcomes */}
      <div className="space-y-6">
        <motion.p {...fadeIn} transition={{ duration: 0.6, delay: 0.3 }} className="text-gray-600 leading-relaxed">
          All plans are designed using affordable, locally available foods, making them realistic and sustainable for daily life. Through home-based consultations, clients receive hands-on guidance, including meal planning in grams, grocery planning, and practical cooking support.
        </motion.p>

        <motion.p {...fadeIn} transition={{ duration: 0.6, delay: 0.4 }} className="text-gray-600 leading-relaxed">
          Melos also emphasizes behavioral change and continuous monitoring. Clients are supported through follow-ups and progress tracking to ensure consistency, safety, and long-term results.
        </motion.p>

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-l-4 border-primary pl-6"
        >
          <p className="text-gray-700 leading-relaxed font-medium">
            The approach combines nutrition science, real-life practicality, and structured guidance to help individuals build lasting habits and improve their health over time.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);
