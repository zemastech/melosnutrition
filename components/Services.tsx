"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicesData = [
  {
    label: "Overview",
    title: "Our Nutrition Services",
    description: "A Structured, Personalized Approach to Better Health. At Melos Nutritional Consultancy & Therapy, nutrition is approached as a structured system, not just a meal plan. Each service is designed to provide practical guidance, measurable progress, and long-term results using realistic, everyday foods.",
  },
  {
    label: "01",
    title: "Comprehensive Nutrition Assessment",
    description: "Every program begins with a detailed assessment to understand your full health profile. This includes evaluating your dietary habits, daily routine, physical activity level, medical history, and personal goals. During home visits, key measurements are taken, including blood pressure, oxygen saturation, fasting blood sugar (FBS), body fat percentage, lean body mass, waist-to-hip ratio, and height. When necessary, relevant laboratory tests are recommended to support accurate and safe nutrition planning.",
  },
  {
    label: "02",
    title: "Personalized Meal Planning",
    description: "Based on your assessment, a fully customized meal plan is developed in grams, tailored to your specific goal—whether fat loss, weight gain, improved energy, overall health, or nutrition support for non-communicable conditions such as diabetes and hypertension. All plans are designed using affordable, locally available foods and can be structured or flexible depending on your lifestyle and preference.",
  },
  {
    label: "03",
    title: "Grocery Planning & Cooking Guidance",
    description: "To make your plan practical and easy to follow, you receive a personalized grocery list along with clear cooking guidance. This includes support with portion control, meal timing, food preparation methods, and efficient weekly meal planning. For busy individuals, batch-cooking strategies are also provided to help save time while maintaining nutritional quality.",
  },
  {
    label: "04",
    title: "Follow-Up & Plan Adjustment",
    description: "Nutrition is not static. Progress is monitored through regular follow-ups, allowing adjustments to be made based on your results, feedback, and lifestyle changes. This ensures your plan remains effective, safe, and aligned with your goals over time.",
  },
  {
    label: "05",
    title: "Nutrition Education & Food Safety",
    description: "Melos places strong emphasis on education, helping you understand how nutrition affects your long-term health. Clients learn how to make informed food choices independently and how to apply proper food hygiene and safety practices at home.",
  },
  {
    label: "06",
    title: "Health-Focused Nutrition Considerations",
    description: "All nutrition plans are adapted based on individual health conditions, lifestyle, and life stage. Special consideration is given to:",
    bullets: [
      "Blood sugar and blood pressure management",
      "Pregnancy and lactation nutrition",
      "Child growth and development",
      "Full life-stage nutrition needs",
      "Physical activity and athletic performance"
    ],
    footer: "All nutrition plans are non-medical, evidence-informed, and focused on supporting healthy eating habits, lifestyle improvement, and long-term disease prevention. Clients with medical conditions are encouraged to continue working with their healthcare providers alongside nutrition support."
  }
];

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));

  const currentService = servicesData[currentIndex];

  return (
    <section id="services" className="py-24 px-6 bg-white rounded-[3rem] mx-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left column — outer wrapper is NOT animated so nav stays stable */}
        <div className="min-h-[500px] flex flex-col">

          {/* Only this block animates on slide change */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-accent rounded-full text-xs font-bold tracking-widest uppercase">
                {currentService.label}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              {currentService.title}
            </h2>
            <div className="text-gray-500 max-w-lg space-y-4">
              <p>{currentService.description}</p>
              {currentService.bullets && (
                <ul className="list-disc pl-5 space-y-1">
                  {currentService.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
              {currentService.footer && (
                <p className="mt-4 text-sm">{currentService.footer}</p>
              )}
            </div>
          </motion.div>

          {/* Dots + nav — outside the motion.div, never re-animates */}
          <div className="flex flex-col gap-4 mt-10">
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
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right column — image */}
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
              alt="Nutrition Consultation"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-3xl overflow-hidden border-8 border-white hidden md:block">
            <img
              src="/cta-bg.jpg"
              alt="Meal Planning"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
