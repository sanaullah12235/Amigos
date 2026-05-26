"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Clock, UtensilsCrossed } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Enjoy hot and fresh food delivered to your doorstep at no extra cost.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "We use only the finest ingredients to ensure a premium taste experience.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Your hunger won't wait. We prepare and deliver your food with lightning speed.",
  },
  {
    icon: UtensilsCrossed,
    title: "Master Chefs",
    description: "Our recipes are crafted by experienced chefs who love what they do.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-2 block">
            The Amigos Advantage
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-gold">Us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
