"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { servicePackages } from "@/data/services";

import { Cta } from "./Cta";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export const ServicePackages = () => (
  <section id="packages" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
    <motion.div 
      {...fadeIn}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4 block">Our Service Packages</span>
      <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
        Personalized nutrition plans <br /> <span className="text-primary italic">for every stage of life.</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicePackages.map((pkg, i) => (
        <motion.div
          key={pkg.id}
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

    <motion.div
      {...fadeIn}
      transition={{ duration: 0.8 }}
    >
      <Cta />
    </motion.div>
  </section>
);

