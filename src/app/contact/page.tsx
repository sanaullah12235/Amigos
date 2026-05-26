"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar variant="dark" solid />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
              <h1 className="font-serif text-5xl md:text-6xl font-black text-midnight mb-6 leading-tight">
                We'd Love to <br />
                <span className="text-gold italic">Hear From You</span>
              </h1>
              <p className="text-midnight/50 max-w-md text-lg font-medium">
                Whether you have a question about our menu, delivery, or want to share your feedback, our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-[1.2rem] bg-gold/10 flex items-center justify-center text-gold shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-midnight mb-2">Call Us</h4>
                  <div className="text-sm text-midnight/60 space-y-1 font-bold">
                    <p>0333-3985700</p>
                    <p>0327-0985700</p>
                    <p>052-3519300</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-[1.2rem] bg-gold/10 flex items-center justify-center text-gold shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-black text-midnight mb-2">Email Us</h4>
                  <p className="text-sm text-midnight/60 font-bold">amigosfastfoodskt@gmail.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-[1.2rem] bg-gold/10 flex items-center justify-center text-gold shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-black text-midnight mb-2">Opening Hours</h4>
                  <p className="text-sm text-midnight/60 font-bold">Daily: 11:00 AM - 1:00 AM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-[1.2rem] bg-gold/10 flex items-center justify-center text-gold shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-midnight mb-2">Visit Us</h4>
                  <div className="text-sm text-midnight/60 space-y-2 font-bold leading-relaxed">
                    <p>Said Pur Road, Sialkot</p>
                    <p>Gugh Mall Chaprar Road, Sialkot</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button className="flex items-center h-16 px-10 rounded-2xl shadow-gold" size="lg">
                <MessageCircle className="mr-2" size={24} /> Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-gold/10 rounded-[3rem] p-12 shadow-2xl"
          >
            <h3 className="font-serif text-3xl font-black mb-10 text-midnight">Send a <span className="text-gold italic">Message</span></h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-midnight/30 ml-4">Full Name</label>
                  <input type="text" className="w-full bg-cream/50 border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/40 focus:ring-4 focus:ring-gold/5 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-midnight/30 ml-4">Email Address</label>
                  <input type="email" className="w-full bg-cream/50 border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/40 focus:ring-4 focus:ring-gold/5 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-midnight/30 ml-4">Subject</label>
                <input type="text" className="w-full bg-cream/50 border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/40 focus:ring-4 focus:ring-gold/5 transition-all" placeholder="How can we help?" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-midnight/30 ml-4">Message</label>
                <textarea rows={5} className="w-full bg-cream/50 border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/40 focus:ring-4 focus:ring-gold/5 transition-all resize-none" placeholder="Write your message here..." />
              </div>
              <Button className="w-full py-5 rounded-2xl text-lg font-black uppercase tracking-widest shadow-gold" size="lg">Send Message</Button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-cream relative flex items-center justify-center border-t border-gold/10">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         <p className="font-serif text-gold/30 text-5xl font-black italic relative z-10">Visit Our Locations in Sialkot</p>
      </section>

      <Footer />
    </main>
  );
}
