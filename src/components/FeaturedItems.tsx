"use client";

import React from "react";
import { ProductCard } from "./ProductCard";
import { menuItems } from "@/data/menu";

const featuredProducts = menuItems.filter(item => 
  ["Chicken Tikka Pizza", "Crunchy Zinger Burger", "Donner Pizza", "Loaded Fries"].includes(item.name)
);

export const FeaturedItems = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-2 block">
              Popular Picks
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Featured <span className="text-gold">Favorites</span>
            </h2>
          </div>
          <button className="text-gold border-b border-gold/30 pb-1 hover:text-accent hover:border-accent transition-colors">
            View Full Menu
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
