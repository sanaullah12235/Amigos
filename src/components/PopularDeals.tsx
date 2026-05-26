"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { menuItems } from "@/data/menu";

export const PopularDeals = () => {
  const deals = menuItems.filter(item => item.category === "Pizza Deals").slice(0, 4);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-2 block">
              Unbeatable Offers
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Hot <span className="text-gold">Pizza Deals</span>
            </h2>
          </div>
          <button className="text-gold border-b border-gold/30 pb-1 hover:text-accent hover:border-accent transition-colors">
            Explore All Deals
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <ProductCard key={deal.id} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
};
