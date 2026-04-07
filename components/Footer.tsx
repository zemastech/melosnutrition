"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Activity,
  Instagram,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export const Footer = () => (
  <footer id="contact" className="bg-secondary pt-24 pb-12 px-6 overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-5xl font-semibold mb-8">Get In Touch!</h2>
          <p className="text-gray-500 mb-8 max-w-sm">
            Booking your plan is simple. Reach out via your preferred platform
            below to secure one of the limited weekly spots.
          </p>
          <div className="relative max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white rounded-full px-6 py-4 border border-accent focus:outline-none focus:border-primary transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm text-gray-600">Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm text-gray-600">+251 994 183 411</p>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm text-gray-600">Meloset@gmail.com</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0" />
              <div className="text-sm text-gray-600">
                <p className="font-bold text-black mb-1">Office Hours</p>
                <p>Mon â€“ Fri: 8:30 AM â€“ 6:30 PM</p>
                <p>Sat: 9:00 AM â€“ 2:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/Meloset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://t.me/Meloset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://wa.me/251994183411"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                </a>
                <a href="mailto:Meloset@gmail.com">
                  <Mail className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                </a>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">
                @Meloset
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-accent gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <Image src="/melos_logo.png" alt="Melos Logo" width={24} height={24} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-lg">Melos</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#tests" className="hover:text-primary transition-colors">
            Tests
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-12 text-[10px] text-gray-400 uppercase tracking-widest gap-4">
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms & Conditions
          </a>
        </div>
        <p>Â© 2026 Melos. All Right Reserved.</p>
        <div className="flex gap-4">
          <Instagram className="w-4 h-4" />
          <Send className="w-4 h-4" />
          <MessageCircle className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  </footer>
);

