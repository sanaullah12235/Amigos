"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/Button";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop", tag: "#CrownCrust" },
  { url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop", tag: "#ZingerKing" },
  { url: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop", tag: "#AmigosFlavors" },
  { url: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=500&auto=format&fit=crop", tag: "#SialkotEats" },
  { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop", tag: "#CheesyDelight" },
  { url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500&auto=format&fit=crop", tag: "#FastDelivery" },
  { url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=500&auto=format&fit=crop", tag: "#LuxuryDining" },
  { url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=500&auto=format&fit=crop", tag: "#AmigosSpecial" },
];

export const InstaGallery = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Camera size={20} />
              </div>
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">On Social Media</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-midnight leading-tight">
              Follow Our <br />
              <span className="text-gold italic">Visual Feast</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-midnight/40 font-medium max-w-[200px]">Join 10k+ Amigos sharing their luxury food moments.</p>
            <a href="https://instagram.com/amigosfastfoodskt" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-gold/20 text-midnight group">
                @amigosfastfoodskt <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Image 
                src={img.url} 
                alt="Amigos Fast Food" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-black text-[10px] tracking-widest uppercase mb-1">{img.tag}</span>
                <div className="flex items-center text-gold gap-1">
                  <Camera size={12} />
                  <span className="text-[8px] font-bold">View Post</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
