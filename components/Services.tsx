"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicesData = [
  {
    icon: "🛠️",
    title: "Our Nutrition Services",
    description: "At Melos, we provide personalized, home-based nutrition services designed to support both immediate goals and long-term health. Every service is grounded in nutrition science and adapted to individual needs, lifestyles, and locally available foods.",
  },
  {
    icon: "🔍",
    title: "Comprehensive Nutrition Assessment",
    description: "We begin with a detailed assessment to understand the full picture of your health and lifestyle. This includes reviewing your dietary habits, daily routines, physical activity level, health history, and personal goals. During home visits, we take key measurements such as blood pressure, oxygen saturation, fasting blood sugar(FBS), body fat percentage, lean body weight, waist-to-hip ratio, and height. When necessary, clients are also advised to complete relevant laboratory blood tests to support accurate, safe, and personalized nutrition planning.",
  },
  {
    icon: "🍽️",
    title: "Personalized Meal Planning",
    description: "Based on the assessment, we design fully customized meal plans in grams, tailored to your specific goal whether fat loss, weight gain, general wellness, disease management, pregnancy, or athletic performance. Meal plans are built using cost-effective, locally available foods. Plans can be flexible or structured, depending on your preference and lifestyle.",
  },
  {
    icon: "🛒",
    title: "Grocery Planning & Cooking Guidance",
    description: "To make the plan practical and easy to follow, we provide a personalized grocery shopping list and clear cooking guidance. Clients receive support on food preparation methods, portion control, meal timing, and how to plan and use food efficiently throughout the week. For busy individuals, we also offer batch-cooking strategies to save time while maintaining nutritional quality.",
  },
  {
    icon: "📊",
    title: "Follow-Up & Plan Adjustment",
    description: "Nutrition is not static. We monitor progress, review feedback, and adjust meal plans as needed to ensure continued improvement and safety. This helps clients stay on track and achieve sustainable results.",
  },
  {
    icon: "🧠",
    title: "Nutrition Education & Food Safety",
    description: "Beyond meal plans, Melos places strong emphasis on education. Clients learn how nutrition affects long-term health, how to make better food choices independently, and how to practice proper food hygiene and safety at home to reduce the risk of food poisoning.",
  },
  {
    icon: "🩺",
    title: "Health-Focused Nutrition Considerations",
    description: "At Melos, we consider individual health conditions and life stages when designing personalized meal plans. Nutrition guidance is adapted to support overall health, safety, and long-term well-being.",
    bullets: [
      "Blood sugar and blood pressure considerations",
      "Pregnancy and lactation nutrition needs",
      "Child growth and development needs",
      "Over all nutrition through out the life cycle",
      "Physical activity level and athletic demands"
    ],
    footer: "All nutrition plans are non-medical, evidence-informed, and focused on supporting healthy eating habits, lifestyle improvement, and long-term disease prevention. Clients with medical conditions are encouraged to continue working with their healthcare providers alongside nutrition support."
  }
];

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  const currentService = servicesData[currentIndex];

  return (
    <section id="services" className="py-24 px-6 bg-white rounded-[3rem] mx-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px] flex flex-col justify-center"
        >
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-accent rounded-full text-lg font-bold tracking-wider">
              {currentService.icon}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
            {currentService.title}
          </h2>
          <div className="text-gray-500 mb-10 max-w-lg space-y-4">
            <p>{currentService.description}</p>
            {currentService.bullets && (
              <ul className="list-disc pl-5 space-y-1">
                {currentService.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
            {currentService.footer && (
              <p className="mt-4">{currentService.footer}</p>
            )}
          </div>
          <div className="flex gap-2 flex-wrap">
            {servicesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-4 bg-primary" : "w-2 bg-accent hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[2rem] overflow-hidden">
            <img 
              src="/hero-bg.jpg" 
              alt="Lab Testing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-3xl overflow-hidden border-8 border-white hidden md:block">
            <img 
              src="/cta-bg.jpg" 
              alt="Consultation" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex flex-col gap-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

