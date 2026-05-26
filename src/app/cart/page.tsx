"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <main className="min-h-screen bg-cream text-midnight">
      <Navbar variant="dark" solid />

      <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Your Selection</span>
          <h1 className="font-serif text-5xl md:text-6xl font-black text-midnight">Shopping <span className="text-gold italic">Cart</span></h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-gold/10 shadow-xl">
            <div className="w-24 h-24 bg-gold/5 rounded-full flex items-center justify-center mx-auto mb-8 text-gold/20">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h2>
            <p className="text-midnight/40 mb-10 max-w-sm mx-auto text-lg">Looks like you haven't added any luxury treats yet. Explore our menu to find your next favorite.</p>
            <Link href="/menu">
              <Button size="lg" className="px-12 h-16 rounded-2xl shadow-gold text-lg uppercase font-black">Explore Menu</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white border border-gold/10 rounded-[2.5rem] p-8 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <div className="flex items-center space-x-8 w-full sm:w-auto">
                      <div className="w-28 h-28 rounded-3xl bg-gold/5 flex items-center justify-center font-serif text-gold italic text-center p-4 text-sm leading-tight border border-gold/10 shadow-inner">
                        {item.name}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-gold mb-1 block">{item.category}</span>
                        <h3 className="font-black text-xl text-midnight mb-2">{item.name}</h3>
                        <p className="text-gold font-black text-lg">Rs. {item.price.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-10 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="flex items-center space-x-5 bg-cream rounded-2xl p-2 border border-gold/10">
                        <motion.button 
                          whileTap={{ scale: 0.8 }}
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-10 h-10 flex items-center justify-center hover:text-gold transition-colors text-midnight/40"
                        >
                          <Minus size={20} />
                        </motion.button>
                        <span className="font-black text-xl w-6 text-center">{item.quantity}</span>
                        <motion.button 
                          whileTap={{ scale: 0.8 }}
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-10 h-10 flex items-center justify-center hover:text-gold transition-colors text-midnight/40"
                        >
                          <Plus size={20} />
                        </motion.button>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.1, color: '#ef4444' }}
                        onClick={() => removeFromCart(item.id)}
                        className="text-midnight/10 transition-colors"
                      >
                        <Trash2 size={24} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gold/10 rounded-[3rem] p-10 sticky top-32 shadow-2xl">
                <h3 className="font-serif text-2xl font-black mb-10 text-midnight flex items-center">
                  Order Summary <span className="ml-4 flex-1 h-[1px] bg-gold/10" />
                </h3>
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center">
                    <span className="text-midnight/40 font-bold uppercase tracking-widest text-xs">Subtotal ({totalItems})</span>
                    <span className="font-black text-midnight">Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-midnight/40 font-bold uppercase tracking-widest text-xs">Delivery Fee</span>
                    <span className="text-gold font-black">FREE</span>
                  </div>
                  <div className="pt-6 border-t border-gold/10 flex justify-between items-center">
                    <span className="text-midnight font-black text-xl">Total</span>
                    <span className="text-gold font-black text-3xl">Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
                <Link href="/checkout">
                  <Button className="w-full h-18 rounded-[1.5rem] flex items-center justify-center text-lg font-black uppercase tracking-[0.1em] shadow-gold" size="lg">
                    Checkout <ArrowRight className="ml-3" size={20} />
                  </Button>
                </Link>
                <p className="text-[9px] text-center text-midnight/20 mt-8 uppercase font-black tracking-[0.2em] leading-relaxed">
                  Trusted by thousands of Amigos <br /> Gold Standard Security
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
