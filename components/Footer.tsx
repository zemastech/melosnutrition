"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

type FormState = { name: string; phone: string; message: string };
type Status = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 rounded-[1.5rem] px-6 py-8 text-center">
        <p className="font-bold text-white text-lg mb-1">Message sent!</p>
        <p className="text-white/60 text-sm">We&apos;ll be in touch soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs text-white/40 underline hover:text-white/70 transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        className="w-full bg-white/10 rounded-full px-6 py-4 border border-white/20 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40 text-sm"
      />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone number"
        required
        className="w-full bg-white/10 rounded-full px-6 py-4 border border-white/20 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40 text-sm"
      />
      <div className="relative">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          rows={3}
          className="w-full bg-white/10 rounded-[1.5rem] px-6 py-4 border border-white/20 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40 text-sm resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-300 text-xs px-2">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 rounded-full hover:bg-secondary transition-colors disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <ArrowUpRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export const Footer = () => (
  <footer id="contact" className="bg-primary text-white pt-32 pb-12 overflow-hidden rounded-t-[100px]">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
        <div>
          <h2 className="text-4xl font-semibold mb-4 text-white">Get In Touch</h2>
          <p className="text-white/60 mb-8 max-w-sm text-sm">
            Reach out to book your consultation or ask any questions.
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col space-y-6">
          <h3 className="text-xl font-semibold text-white mb-2">Contact Details</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <Phone className="w-5 h-5 text-white/60 shrink-0" />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-sm text-white/80 hover:text-white transition-colors">
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <Mail className="w-5 h-5 text-white/60 shrink-0" />
              <a href={CONTACT.emailHref} className="text-sm text-white/80 hover:text-white transition-colors">
                {CONTACT.email}
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <Send className="w-5 h-5 text-white/60 shrink-0" />
              <div className="flex flex-col">
                <p className="text-[10px] text-white/40 uppercase tracking-widest leading-none mb-1">Telegram</p>
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white transition-colors underline underline-offset-2"
                >
                  {CONTACT.telegramHandle}
                </a>
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
              <InstagramIcon />
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
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              {CONTACT.instagramHandle}
            </a>
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
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
        </div>
        <p>&copy; 2026 Melos. All Rights Reserved.</p>
        <div className="flex gap-4">
          <InstagramIcon />
          <Send className="w-4 h-4" />
          <MessageCircle className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  </footer>
);
