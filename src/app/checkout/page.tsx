"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { CreditCard, Wallet, Truck, CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isOrdered, setIsOrdered] = useState(false);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gather form data
    const formData = new FormData(e.target as HTMLFormElement);
    const customer = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      address: formData.get("address"),
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer,
          items: cart,
          totalPrice,
          notes: formData.get("notes"),
        }),
      });

      if (response.ok) {
        const order = await response.json();
        setIsOrdered(true);
        setTimeout(() => {
          clearCart();
          router.push(`/track?id=${order.id}`);
        }, 2500);
      }
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-8"
        >
          <div className="w-32 h-32 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(212,175,55,0.4)]">
            <CheckCircle size={60} className="text-white" />
          </div>
          <h1 className="font-serif text-5xl font-black text-midnight uppercase tracking-tighter">Order Placed!</h1>
          <p className="text-midnight/40 text-lg font-bold">Your luxury feast is being prepared. <br /> Redirecting to live tracking...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-cream text-midnight">
      <Navbar variant="dark" solid />

      <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <Link href="/cart" className="flex items-center text-gold mb-10 hover:text-midnight transition-colors font-black uppercase text-xs tracking-widest group">
          <ChevronLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Cart
        </Link>
        
        <h1 className="font-serif text-5xl md:text-6xl font-black mb-16 text-midnight">Secure <span className="text-gold italic">Checkout</span></h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Details */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Delivery Info */}
            <section className="space-y-10">
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shadow-sm">
                  <Truck size={28} />
                </div>
                <h2 className="text-3xl font-black text-midnight">Delivery Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input name="firstName" required placeholder="First Name" className="bg-white border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/30 shadow-sm" />
                <input name="lastName" required placeholder="Last Name" className="bg-white border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/30 shadow-sm" />
                <input name="phone" required placeholder="Phone Number" className="bg-white border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/30 shadow-sm" />
                <input name="email" required placeholder="Email Address" className="bg-white border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/30 shadow-sm" />
                <input name="address" required placeholder="Full Delivery Address" className="md:col-span-2 bg-white border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/30 shadow-sm" />
                <textarea name="notes" placeholder="Special Instructions (e.g. less spicy, don't ring doorbell)" className="md:col-span-2 bg-white border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/30 shadow-sm h-32 resize-none" />
              </div>
            </section>

            {/* Payment Method */}
            <section className="space-y-10">
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shadow-sm">
                  <CreditCard size={28} />
                </div>
                <h2 className="text-3xl font-black text-midnight">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <label className="relative cursor-pointer group">
                  <input type="radio" name="payment" className="peer sr-only" defaultChecked />
                  <div className="p-8 bg-white border border-gold/10 rounded-[2.5rem] group-hover:border-gold/30 peer-checked:border-gold peer-checked:bg-gold/5 transition-all shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <CreditCard className="text-gold" size={32} />
                      <div className="w-5 h-5 rounded-full border-2 border-gold/30 peer-checked:border-gold peer-checked:bg-gold" />
                    </div>
                    <p className="font-black text-lg text-midnight">Credit / Debit Card</p>
                    <p className="text-xs text-midnight/40 mt-2 font-bold uppercase tracking-widest">Visa, Mastercard, Amex</p>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input type="radio" name="payment" className="peer sr-only" />
                  <div className="p-8 bg-white border border-gold/10 rounded-[2.5rem] group-hover:border-gold/30 peer-checked:border-gold peer-checked:bg-gold/5 transition-all shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <Wallet className="text-gold" size={32} />
                      <div className="w-5 h-5 rounded-full border-2 border-gold/30 peer-checked:border-gold peer-checked:bg-gold" />
                    </div>
                    <p className="font-black text-lg text-midnight">Cash on Delivery</p>
                    <p className="text-xs text-midnight/40 mt-2 font-bold uppercase tracking-widest">Pay when you receive</p>
                  </div>
                </label>
              </div>
            </section>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gold/10 rounded-[3rem] p-10 sticky top-32 shadow-2xl">
              <h3 className="font-serif text-2xl font-black mb-10 text-midnight">Summary</h3>
              <div className="space-y-6 mb-10 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm font-bold">
                    <span className="text-midnight/40">{item.quantity}x {item.name}</span>
                    <span className="text-midnight">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6 mb-10 pt-8 border-t border-gold/10">
                <div className="flex space-x-3">
                  <input placeholder="Promo Code" className="flex-1 bg-cream border border-gold/10 rounded-xl py-3 px-5 text-sm text-midnight font-bold focus:outline-none focus:border-gold/30" />
                  <Button type="button" variant="outline" size="sm" className="rounded-xl border-gold/20 text-midnight px-6 font-black uppercase text-[10px]">Apply</Button>
                </div>
                <div className="flex justify-between items-center text-midnight/40 text-xs font-black uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span>Rs. {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-black text-midnight">Total</span>
                  <span className="text-gold font-black text-3xl">Rs. {totalPrice.toLocaleString()}</span>
                </div>
              </div>
              <Button type="submit" className="w-full h-18 rounded-[1.5rem] text-lg font-black uppercase tracking-[0.1em] shadow-gold" size="lg">
                Place Order
              </Button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}
