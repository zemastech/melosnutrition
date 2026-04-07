"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Nebyat",
      role: "Personalized Meal Plan",
      text: "Iâ€™ve started looking at the meal plan you made for me. Honestly, itâ€™s amazing! Thank you so much for preparing it for me, I really appreciate your effort and knowledge. You are so talented, and I admire you. God bless you.",
      rating: 5
    },
    {
      name: "Meron Abraham",
      role: "Pregnancy and Weight Gain",
      text: "The meal plan is amazing and versatile. My doctor said my weight was low, and your plan helped me gain weight during my pregnancy!",
      rating: 5
    },
    {
      name: "Mahlet Bezabih",
      role: "Fat Loss and Habesha Foods",
      text: "It includes both Habesha foods and a variety of other foods, which is really nice. It doesnâ€™t just focus solely on injera and helped me lose weight effectively.",
      rating: 5
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-16"
      >
        <div className="lg:col-span-5 flex flex-col justify-between min-h-[400px]">
          <div>
            <h2 className="text-5xl font-semibold leading-tight">
              <span className="text-gray-400 block mb-2">Impressive</span>
              <span className="block mb-2">Life-Changing Results</span>
              <span className="text-gray-400 block mb-2">Professional</span>
              <span className="text-gray-400 block">Compassionate</span>
            </h2>
          </div>
          <div className="flex gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-7 relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white p-10 rounded-[3rem] border border-accent h-full flex flex-col justify-center shadow-sm"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                  <div className="flex text-yellow-500 mt-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-accent/50 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                  {testimonials[currentIndex].role}
                </div>
              </div>
              <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed font-serif">
                "{testimonials[currentIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );

};
