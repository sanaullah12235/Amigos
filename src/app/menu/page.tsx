"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { menuItems, categories } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-cream">
      <Navbar variant="dark" solid />
      
      {/* Premium Header */}
      <div className="pt-32 pb-20 px-6 text-center dark-section relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Culinary Masterpieces</span>
          <h1 className="font-serif text-6xl md:text-8xl font-black text-white mb-6">
            The <span className="text-gold italic">Amigos</span> Menu
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto italic font-serif text-lg">
            "Good Food Eat Here!" - Explore our gold-standard selection of pizzas, burgers, and more.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 -mt-10 relative z-20 pb-32">
        {/* Controls Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] shadow-2xl p-6 mb-16 border border-gold/10 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Categories Scrollable */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide w-full lg:w-3/4 mask-fade-right">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/5 text-gold shrink-0">
              <Filter size={18} />
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-midnight text-white shadow-xl scale-105"
                    : "bg-gold/5 text-midnight/40 hover:bg-gold/10 hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Premium Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gold" size={20} />
            <input
              type="text"
              placeholder="Search for delicacy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cream border border-gold/20 rounded-2xl py-4 pl-14 pr-6 text-midnight font-medium focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all"
            />
          </div>
        </motion.div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-12 px-4">
          <h2 className="text-2xl font-serif font-black text-midnight flex items-center">
            {activeCategory} <span className="ml-4 w-12 h-[2px] bg-gold/30 block" />
          </h2>
          <p className="text-sm font-bold text-midnight/30 uppercase tracking-widest">
            {filteredItems.length} Masterpieces Found
          </p>
        </div>

        {/* Dynamic Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 bg-white rounded-[3rem] border-2 border-dashed border-gold/10"
          >
            <div className="w-24 h-24 bg-gold/5 rounded-full flex items-center justify-center mx-auto mb-6 text-gold/20">
              <Search size={48} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-midnight mb-2">No matching treats</h3>
            <p className="text-midnight/40">Try searching for something else or browse another category.</p>
          </motion.div>
        )}
      </div>

      {/* Special Offers Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Exclusive Deals</span>
              <h2 className="font-serif text-4xl md:text-6xl font-black text-midnight leading-tight">
                Don't Miss Our <br />
                <span className="text-gold italic">Special Offers</span>
              </h2>
            </div>
            <p className="text-midnight/50 font-medium max-w-sm">
              Limited time combinations crafted for the ultimate Amigos experience at unbeatable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative bg-midnight rounded-[3rem] p-10 overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-gold/20 transition-colors duration-700" />
               <div className="relative z-10">
                 <span className="bg-gold text-midnight text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Bestseller</span>
                 <h3 className="text-3xl font-serif font-bold text-white mb-4">Family Feast Combo</h3>
                 <p className="text-white/40 mb-8 max-w-xs">2 Large Pizzas, 10 Zinger Wings, and a 1.5L Drink. Perfect for sharing.</p>
                 <div className="flex items-center justify-between">
                    <span className="text-gold text-3xl font-black">Rs. 2,499</span>
                    <Button variant="primary" size="sm" className="px-8">Order Now</Button>
                 </div>
               </div>
            </div>
            <div className="group relative bg-gold rounded-[3rem] p-10 overflow-hidden">
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -mr-32 -mb-32 group-hover:bg-white/30 transition-colors duration-700" />
               <div className="relative z-10">
                 <span className="bg-midnight text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">New Entry</span>
                 <h3 className="text-3xl font-serif font-bold text-midnight mb-4">Zinger Stack Box</h3>
                 <p className="text-midnight/60 mb-8 max-w-xs">Double Stack Zinger, Loaded Fries, and a chilled beverage of your choice.</p>
                 <div className="flex items-center justify-between">
                    <span className="text-midnight text-3xl font-black">Rs. 899</span>
                    <Button variant="outline" size="sm" className="px-8 border-midnight text-midnight hover:bg-midnight hover:text-white">Order Now</Button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
