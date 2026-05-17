import { ServicePackage } from "../types";

export const servicePackages: ServicePackage[] = [
  {
    id: "fat-loss-weight-gain",
    title: "Fat Loss / Weight Gain",
    shortDesc: "A structured plan designed to help you reach a healthy body weight in a sustainable way, focusing on accurate portions, balanced meals, and long-term habits.",
    fullDesc: "This program takes a structured, evidence-informed approach to body weight,whether your goal is fat loss or healthy weight gain. Plans are built in grams using locally available foods, with an emphasis on portion accuracy, meal balance, and habits that last beyond the program.",
    whoItIsFor: "Individuals looking to lose body fat, gain lean mass, or achieve a healthier body weight in a safe and sustainable way.",
    included: [
      "Personalized meal plan (in grams)",
      "Grocery shopping list",
      "Cooking guidance adapted to your routine",
      "Portion control and meal structure support",
      "Follow-up monitoring and progress check-ins",
      "Strategies for consistency and long-term results"
    ],
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "clean-eating-health",
    title: "Clean Eating & Overall Health",
    shortDesc: "Focused on improving daily energy, overall wellness, and long-term health through balanced, whole-food nutrition.",
    fullDesc: "This plan prioritizes daily energy, general well-being, and long-term health improvement. Using whole, locally available foods, meals are structured around balance and quality rather than restriction,building habits that support your body over time.",
    whoItIsFor: "Anyone wanting to improve their energy levels, overall wellness, and adopt healthier eating habits for the long term.",
    included: [
      "Balanced meal plan (in grams)",
      "Grocery shopping list",
      "Cooking guidance and healthier food choices",
      "Support for energy, skin, and general health",
      "Follow-up monitoring and progress support",
      "Long-term habit-building approach"
    ],
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "pregnancy-lactation",
    title: "Pregnancy & Lactation",
    shortDesc: "Nutrition support tailored to increased needs during pregnancy and breastfeeding, focusing on safety and nutrient-dense meals.",
    fullDesc: "Nutrition needs change significantly during pregnancy and breastfeeding. This plan is tailored to each stage, ensuring both mother and baby receive the right nutrients through safe, practical, and locally available meals.",
    whoItIsFor: "Expectant mothers, those planning to conceive, and breastfeeding mothers seeking optimal nutrition support.",
    included: [
      "Personalized meal plan based on stage",
      "Grocery shopping list",
      "Cooking guidance and food safety tips",
      "Nutrient-focused meal structure",
      "Follow-up monitoring for safety and progress",
      "Support for maternal and infant health"
    ],
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "diabetes-blood-pressure",
    title: "Diabetes & Blood Pressure Support",
    shortDesc: "A balanced nutrition approach designed to support stable eating patterns and overall health alongside medical care.",
    fullDesc: "This plan provides structured nutritional support for individuals managing blood sugar or blood pressure. Meals are designed to promote consistency, balance, and healthy eating patterns,always as a complement to, not a replacement for, medical care.",
    whoItIsFor: "Individuals with diabetes, hypertension, or those at risk who want to support their health through structured nutrition.",
    included: [
      "Structured meal plan with portion control",
      "Grocery shopping list",
      "Cooking methods for healthier meals",
      "Meal timing and consistency guidance",
      "Follow-up monitoring and plan adjustment",
      "Lifestyle-focused nutrition support"
    ],
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "active-lifestyle",
    title: "Active Lifestyle",
    shortDesc: "Designed for physically active individuals to support energy, recovery, and performance.",
    fullDesc: "For individuals with an active lifestyle, this plan aligns nutrition with physical demands. From meal timing to recovery-focused foods, every aspect is tailored to support consistent energy output and physical progress.",
    whoItIsFor: "Athletes, gym enthusiasts, and anyone with a high physical activity level seeking performance-oriented nutrition.",
    included: [
      "Activity-based meal planning",
      "Grocery shopping list",
      "Cooking guidance for performance nutrition",
      "Meal timing strategy",
      "Follow-up monitoring and performance support",
      "Support for recovery and energy balance"
    ],
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "busy-lifestyle",
    title: "Busy Lifestyle",
    shortDesc: "A simple, time-efficient plan for individuals with limited time, making healthy eating practical and realistic.",
    fullDesc: "Healthy eating should not require hours in the kitchen. This plan is built for people with demanding schedules,prioritizing simple meals, smart preparation strategies, and a flexible structure that fits around a busy life.",
    whoItIsFor: "Professionals, parents, and anyone with a demanding schedule who struggles to find time for consistent healthy eating.",
    included: [
      "Easy-to-follow meal plan",
      "Grocery shopping list",
      "Quick and simple cooking guidance",
      "Batch-cooking strategies",
      "Follow-up monitoring and adjustments",
      "Flexible structure for busy schedules"
    ],
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "child-nutrition-support",
    title: "Child Nutrition Support",
    shortDesc: "Supports healthy growth and development in children through balanced and age-appropriate nutrition.",
    fullDesc: "Children have unique nutritional needs at every stage of development. This plan provides age-appropriate guidance to support healthy growth, positive eating behaviors, and balanced meals that the whole family can enjoy.",
    whoItIsFor: "Parents of toddlers, children, and adolescents looking to support healthy growth and build positive food habits.",
    included: [
      "Age-appropriate meal planning",
      "Grocery shopping list",
      "Simple cooking guidance for families",
      "Portion and meal balance guidance",
      "Follow-up monitoring for growth and habits",
      "Support for healthy eating behaviors"
    ],
    duration: "Ongoing",
    image: "/child-nutrition.png"
  }
];
