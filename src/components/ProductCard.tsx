"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, Flame } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  description?: string;
  className?: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const { name, price, category, description, image, className } = props;
  const { addToCart } = useCart();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group relative bg-white border border-gold/10 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-500",
        className
      )}
    >
      {/* Badge Overlay */}
      <div className="absolute top-5 left-5 z-20">
        <span className="flex items-center bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
          <Flame size={12} className="mr-1" /> Best Seller
        </span>
      </div>

      {/* Image / Placeholder Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream flex items-center justify-center">
        {image ? (
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.4 }}
            className="w-40 h-40 rounded-full bg-gold/10 flex items-center justify-center shadow-inner"
          >
            <p className="text-gold/40 font-serif italic text-xs text-center px-4 leading-tight">{name}</p>
          </motion.div>
        )}
        
        {/* Floating Heart Button */}
        <motion.button 
          whileTap={{ scale: 0.8 }}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors duration-300 z-20"
        >
          <Heart size={18} />
        </motion.button>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
            {category}
          </span>
          <div className="flex text-accent space-x-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="min-h-[60px]">
          <h3 className="text-xl font-bold text-midnight group-hover:text-gold transition-colors line-clamp-1">
            {name}
          </h3>
          <p className="text-sm text-midnight/40 leading-relaxed line-clamp-2 mt-2">
            {description || "A masterpiece of flavors, crafted with the freshest premium ingredients."}
          </p>
        </div>

        <div className="pt-6 border-t border-midnight/5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-midnight/30 uppercase font-bold tracking-wider">Price</span>
            <span className="text-2xl font-black text-midnight">
              <span className="text-gold text-lg mr-1">Rs.</span>
              {price.toLocaleString()}
            </span>
          </div>
          
          <Button 
            size="md" 
            className="rounded-2xl h-12 w-12 p-0 shadow-gold group-hover:bg-midnight group-hover:text-gold transition-all duration-300"
            onClick={() => addToCart(props as any)}
          >
            <ShoppingCart size={20} />
          </Button>
        </div>
      </div>

      {/* Decorative Gradient Shine */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};
