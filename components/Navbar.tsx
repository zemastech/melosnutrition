"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Activity, Menu, X, ArrowUpRight, Instagram, Send, MessageCircle, Mail } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isHome && !isScrolled ? "text-white" : "text-black";
  
  return (
    <>
      <nav className={`flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-[95%] fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-300 ${
        isScrolled ? "bg-white/20 backdrop-blur-xl border border-white/30" : "bg-white/10 backdrop-blur-md border border-white/10"
      }`}>
        <Link href="/" className="flex items-center gap-2">
          <div className="h-15 flex items-center justify-center">
            <Image src="/melos_logo.png" alt="Melos Logo" width={32} height={32} className="w-full h-full object-" />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${isHome && !isScrolled ? "text-white/90" : "text-black/70"}`}>
          <Link href="/" className={`hover:text-primary transition-colors`}>Home</Link>
          <Link href="/#about" className={`hover:text-primary transition-colors`}>About</Link>
          <Link href="/#services" className={`hover:text-primary transition-colors`}>Services</Link>
          <Link href="/#packages" className={`hover:text-primary transition-colors`}>Packages</Link>
          <Link href="/#contact" className={`hover:text-primary transition-colors`}>Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://t.me/Meloset" target="_blank" rel="noopener noreferrer" className={`hidden sm:flex ${isHome && !isScrolled ? "bg-white text-black" : "bg-black text-white"} px-5 py-2 rounded-full text-sm font-medium items-center gap-2 hover:bg-primary hover:text-white transition-all`}>
            Book Now <ArrowUpRight className="w-4 h-4" />
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex flex-col gap-1.5 items-end p-2 ${textColor} transition-opacity hover:opacity-70`}
          >
            <span className="w-6 h-0.5 bg-current rounded-full" />
            <span className="w-4 h-0.5 bg-current rounded-full" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={isMobileMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-white z-[60] md:hidden flex flex-col p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-lg tracking-tight text-black flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <Image src="/melos_logo.png" alt="Melos Logo" width={24} height={24} className="w-full h-full object-contain" />
            </div>
            Melos
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="w-full h-px bg-gray-100 mb-12" />

        {/* Main Links */}
        <div className="flex flex-col gap-6 mb-12">
          {['Home', 'About', 'Services', 'Packages', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-semibold text-black hover:text-primary transition-colors tracking-tight"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="w-full h-px bg-gray-100 mb-8" />

        {/* Secondary Section */}
        <div className="flex flex-col gap-8">
          <a 
            href="https://t.me/Meloset"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-left text-xl font-medium text-black flex items-center gap-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now <ArrowUpRight className="w-5 h-5" />
          </a>

          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Social</span>
            <div className="flex gap-5">
              <a href="https://instagram.com/Meloset" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 text-black/80 hover:text-primary transition-colors cursor-pointer" /></a>
              <a href="https://t.me/Meloset" target="_blank" rel="noopener noreferrer"><Send className="w-5 h-5 text-black/80 hover:text-primary transition-colors cursor-pointer" /></a>
              <a href="https://wa.me/251994183411" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 text-black/80 hover:text-primary transition-colors cursor-pointer" /></a>
              <a href="mailto:Meloset@gmail.com"><Mail className="w-5 h-5 text-black/80 hover:text-primary transition-colors cursor-pointer" /></a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
