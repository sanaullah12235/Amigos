"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Ali Ahmed",
    text: "The best pizza in Sialkot! The Malai Donner is absolutely divine. Fast delivery and premium taste.",
    rating: 5,
  },
  {
    name: "Sana Khan",
    text: "Amigos never disappoints. Their Zinger burgers are so crunchy and fresh. Highly recommended!",
    rating: 5,
  },
  {
    name: "Usman Sheikh",
    text: "Great value for money deals. The family deals are perfect for our weekend gatherings.",
    rating: 4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 border-y border-gold/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-2 block">
            Customer Love
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            What Our <span className="text-gold">Amigos</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-midnight/50 backdrop-blur-md border border-gold/10 p-8 rounded-[2rem] relative"
            >
              <Quote className="absolute top-6 right-8 text-gold/20" size={40} />
              <div className="flex text-accent mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < review.rating ? "text-accent" : "text-white/10"}>★</span>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold text-xs">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-bold text-white">{review.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
