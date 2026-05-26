"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { Button } from "./ui/Button";
import Image from "next/image";

export const AppDownload = () => {
  return (
    <section className="py-24 px-6 bg-gold relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-midnight/5 rounded-full -mr-48 -mb-48" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-midnight leading-tight">
            Get the Amigos <br /> 
            <span className="text-white drop-shadow-md">Mobile App</span>
          </h2>
          <p className="text-midnight/70 text-lg max-w-md font-bold leading-relaxed">
            Order your favorite meals, track your delivery in real-time, and get exclusive app-only discounts.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" className="bg-midnight text-white hover:bg-midnight/90 py-4 px-8">
              <Apple className="mr-2" /> App Store
            </Button>
            <Button variant="primary" className="bg-midnight text-white hover:bg-midnight/90 py-4 px-8">
              <Play className="mr-2" /> Google Play
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] max-w-sm mx-auto"
        >
          {/* Simulated Phone Frame */}
          <div className="w-full h-full bg-midnight rounded-[3rem] border-8 border-midnight shadow-2xl overflow-hidden p-4 relative">
             <div className="w-full h-full bg-cream rounded-[2rem] overflow-hidden relative flex flex-col">
                <div className="relative flex-1">
                  <Image 
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop" 
                    alt="App Preview" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white font-black text-xl mb-1">Crown Pizza</h4>
                    <p className="text-gold font-bold text-xs">Rs. 1,400</p>
                  </div>
                </div>
                <div className="p-6 bg-white flex items-center justify-between">
                   <div className="flex flex-col">
                     <span className="text-[8px] font-black uppercase text-midnight/30 tracking-widest">Delivery in</span>
                     <span className="text-sm font-black text-midnight">15-20 Mins</span>
                   </div>
                   <Button size="sm" className="h-10 px-6 rounded-xl text-[10px]">Order Now</Button>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
