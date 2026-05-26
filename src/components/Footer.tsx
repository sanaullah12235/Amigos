"use client";

import React from "react";
import Link from "next/link";
import { Globe, Share2, MessageCircle, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-midnight pt-24 pb-12 px-6 border-t border-gold/10 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="font-serif text-3xl font-bold text-gold tracking-tighter">
            AMIGOS<span className="text-accent">.</span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Elevating the fast food experience with premium ingredients, masterful preparation, and gold-standard service.
          </p>
          <div className="flex space-x-4">
            {[Globe, Share2, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Menu", "About Us", "Track Order", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="text-white/40 hover:text-gold transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Our Menu</h4>
          <ul className="space-y-4">
            {["Special Pizzas", "Luxury Burgers", "Chicken Deals", "Sides & Starters", "Desserts"].map((item) => (
              <li key={item}>
                <Link href="/menu" className="text-white/40 hover:text-gold transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Find Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <MapPin className="text-gold shrink-0" size={20} />
              <div className="text-white/40 text-sm space-y-2">
                <p>Said Pur Road, Kubay Chek Near Ashiq Palace, Sialkot</p>
                <p>Gugh Mall Chaprar Road, Adha Jhai, Kammanwala, Puli Sialkot</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <Phone className="text-gold shrink-0" size={20} />
              <div className="text-white/40 text-sm space-y-1">
                <p>0333-3985700</p>
                <p>0327-0985700</p>
                <p>052-3519300</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Mail className="text-gold shrink-0" size={20} />
              <span className="text-white/40 text-sm">amigosfastfoodskt@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
          © 2026 AMIGOS FAST FOOD. DESIGNED FOR EXCELLENCE.
        </p>
        <button 
          onClick={scrollToTop}
          className="group flex items-center text-gold text-xs font-bold uppercase tracking-widest"
        >
          Back to Top 
          <ArrowUp className="ml-2 group-hover:-translate-y-1 transition-transform" size={14} />
        </button>
      </div>
    </footer>
  );
};
