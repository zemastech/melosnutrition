"use client";

import { use, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { servicePackages } from "@/data/services";

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const pkg = servicePackages.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pkg) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
      <Link href="/" className="text-primary font-bold flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="px-4 py-1 bg-accent rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Service Package</span>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">{pkg.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{pkg.fullDesc}</p>
            
            <div className="">
              <h3 className="text-xl font-semibold mb-6">Who it is for</h3>
              <p className="text-gray-600 mb-10">{pkg.whoItIsFor}</p>
              
              <h3 className="text-xl font-semibold mb-6">What is included</h3>
              <ul className="space-y-4">
                {pkg.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8">
              <a 
                href="https://t.me/meloset" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-full font-bold flex items-center gap-2 hover:bg-black transition-all group"
              >
                Get Started <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Duration / Process</p>
                <p className="font-bold">{pkg.duration}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-32"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
              <img 
                src={pkg.image} 
                alt={pkg.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
