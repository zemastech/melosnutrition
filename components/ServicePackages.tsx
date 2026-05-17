"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Scale } from "lucide-react";
import Link from "next/link";
import { servicePackages } from "@/data/services";
import { Cta } from "./Cta";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

const KitchenScaleNote = () => (
  <div className="mt-12 bg-accent rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-6">
    <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
      <Scale className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="font-bold text-lg mb-1">Kitchen Scale Required</p>
      <p className="text-sm text-gray-600">
        A kitchen scale is required to accurately follow all meal plans. For convenience, Melos also provides kitchen scales for clients who do not have one.
      </p>
    </div>
  </div>
);

export const ServicePackages = () => (
  <section id="packages" className="py-12 sm:py-24 max-w-7xl mx-auto overflow-hidden px-6">
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4 block">Choose Your Nutrition Focus</span>
      <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
        Personalized nutrition plans <br /> <span className="text-primary italic">for every goal and stage of life.</span>
      </h2>
    </motion.div>

    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
      {servicePackages.map((pkg, i) => (
        <motion.div
          key={pkg.id}
          className="shrink-0 w-[80vw] sm:w-[60vw] md:w-auto snap-start"
          {...fadeIn}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link
            href={`/services/${pkg.id}`}
            className="group bg-white rounded-[2.5rem] p-8 border border-accent/40 transition-all hover:shadow-md flex flex-col h-full"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{pkg.title}</h3>
            <p className="text-gray-500 text-sm mb-8 flex-grow">{pkg.shortDesc}</p>
            <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-4 transition-all">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    <motion.div {...fadeIn} transition={{ duration: 0.8 }}>
      <KitchenScaleNote />
    </motion.div>

    <motion.div {...fadeIn} transition={{ duration: 0.8 }}>
      <Cta />
    </motion.div>
  </section>
);
