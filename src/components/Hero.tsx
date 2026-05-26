"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-12 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-accent font-semibold tracking-widest uppercase text-xs mb-4"
          >
            Good Food Eat Here!
          </motion.span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The King of <br />
            <span className="text-gold">Fast Food</span>
          </h1>
          <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
            Experience the ultimate taste of Sialkot with Amigos Fast Food. From our signature Crown Crust pizzas to the crunchiest Zinger burgers, we deliver excellence to your door.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/menu">
              <Button size="lg" className="py-2.5">Explore Menu</Button>
            </Link>
            <Button size="lg" variant="outline" className="py-2.5">Learn More</Button>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-midnight bg-gold/20 backdrop-blur-sm overflow-hidden flex items-center justify-center text-[10px] font-bold">
                  User
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">5,000+ Happy Customers</p>
              <div className="flex text-accent">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image / Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-square"
        >
          {/* Main Food Image Placeholder */}
          <div className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(212,175,55,0.4)]">
             <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 rounded-full border border-gold/30 flex items-center justify-center overflow-hidden">
                <p className="font-serif text-gold text-2xl italic opacity-50 text-center px-8">Premium Pizza Image</p>
             </div>
          </div>

          {/* Floating Elements - Adjusted for massive circle */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[2%] right-[2%] w-24 h-24 md:w-28 md:h-28 bg-midnight/80 backdrop-blur-md border border-gold/20 rounded-[2rem] p-3 flex flex-col items-center justify-center shadow-2xl z-20"
          >
            <span className="text-accent font-bold text-xl md:text-2xl">4.9</span>
            <span className="text-[10px] md:text-[12px] uppercase tracking-widest opacity-60 text-white font-black">Rating</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[5%] left-[-5%] bg-gold text-midnight px-6 py-3 md:px-10 md:py-4 rounded-full font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 flex items-center text-xs md:text-lg border-2 border-white/30"
          >
            <span className="mr-3 text-2xl">🔥</span>
            <span className="tracking-tighter">FAST DELIVERY</span>
          </motion.div>

          {/* Decorative Glow - Intensified */}
          <div className="absolute inset-0 bg-gold/15 rounded-full blur-[140px] z-0" />
        </motion.div>
      </div>
    </section>
  );
};
