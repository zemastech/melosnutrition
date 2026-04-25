"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Instagram,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const Footer = () => (
  <footer id="contact" className="bg-primary text-white pt-32 pb-12 px-6 overflow-hidden rounded-t-[100px]">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
        <div>
          <h2 className="text-4xl font-semibold mb-8 text-white">Get In Touch</h2>
          <p className="text-white/60 mb-8 max-w-sm">
            Booking your plan is simple. Reach out via your preferred platform to secure your spot.
          </p>
          <div className="relative max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white/10 rounded-full px-6 py-4 border border-white/20 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40"
            />
            <button className="absolute right-2 top-2 bottom-2 w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <h3 className="text-xl font-semibold text-white mb-2">Contact Details</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <Phone className="w-5 h-5 text-white/60 shrink-0" />
              <p className="text-sm text-white/80">{CONTACT.phone}</p>
            </div>
            <div className="flex gap-4 items-center">
              <Mail className="w-5 h-5 text-white/60 shrink-0" />
              <p className="text-sm text-white/80">{CONTACT.email}</p>
            </div>
            <div className="flex gap-4 items-center">
              <Send className="w-5 h-5 text-white/60 shrink-0" />
              <div className="flex flex-col">
                <p className="text-[10px] text-white/40 uppercase tracking-widest leading-none mb-1">Telegram</p>
                <p className="text-sm text-white/80">{CONTACT.telegramHandle}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MapPin className="w-5 h-5 text-white/60 shrink-0" />
              <p className="text-sm text-white/80">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-6">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Send className="w-5 h-5 text-white" />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Instagram</p>
            <p className="text-sm text-white/80">{CONTACT.instagramHandle}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full p-1">
            <Image src="/melos_logo.png" alt="Melos Logo" width={24} height={24} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-lg">Melos</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white/60 transition-colors">Home</a>
          <a href="#about" className="hover:text-white/60 transition-colors">About</a>
          <a href="#services" className="hover:text-white/60 transition-colors">Services</a>
          <a href="#packages" className="hover:text-white/60 transition-colors">Packages</a>
          <a href="#assessment" className="hover:text-white/60 transition-colors">Assessment</a>
          <a href="#contact" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-12 text-[10px] text-white/40 uppercase tracking-widest gap-4">
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
        </div>
        <p>&copy; 2026 Melos. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Instagram className="w-4 h-4" />
          <Send className="w-4 h-4" />
          <MessageCircle className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  </footer>
);
