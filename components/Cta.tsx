import { Instagram, Send, MessageCircle, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const Cta = () => (
  <div className="mt-24 bg-primary bg-[url('/cta-bg.jpg')] bg-cover bg-[center_bottom] rounded-[3rem] py-36 px-12 text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20" />
    <div className="relative z-10 flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl font-semibold mb-6 !text-white">Ready to Start?</h3>
      <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">Booking your plan is simple. Reach out via your preferred platform below to secure one of the limited weekly spots.</p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-all group">
          WhatsApp <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="bg-black/40 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-black/60 transition-all group">
          Telegram <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      <div className="flex gap-8">
        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <Instagram className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span>
        </a>
        <a href={CONTACT.emailHref} className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <Mail className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
        </a>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
  </div>
);
