"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Bike, 
  Package, 
  ChefHat, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageSquare,
  Clock,
  ArrowRight,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { useSearchParams } from "next/navigation";

const statusConfig = [
  { key: "received", label: "Order Received", icon: CheckCircle2 },
  { key: "preparing", label: "Preparing", icon: ChefHat },
  { key: "delivering", label: "Out for Delivery", icon: Bike },
  { key: "arriving", label: "Arriving Soon", icon: MapPin },
  { key: "delivered", label: "Delivered", icon: Package },
];

function TrackingContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(!!orderId);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/orders/${orderId}`);
        if (res.ok) {
          const data = await res.json();
          setOrder(data);
        }
      } catch (err) {
        console.error("Failed to fetch order", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
    const interval = setInterval(fetchOrder, 5000);
    return () => clearInterval(interval);
  }, [orderId]);

  if (!orderId) {
    return (
      <div className="pt-40 pb-32 px-6 max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-gold">
          <Search size={40} />
        </div>
        <h1 className="font-serif text-4xl font-black mb-4">Track Your <span className="text-gold italic">Feast</span></h1>
        <p className="text-midnight/40 mb-10 font-medium">Enter your Order ID to see real-time updates of your luxury delivery.</p>
        <div className="flex space-x-4">
          <input 
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="e.g. AM-123456" 
            className="flex-1 bg-white border border-gold/10 rounded-2xl py-5 px-8 text-midnight font-bold focus:outline-none focus:border-gold/30 shadow-sm" 
          />
          <Button onClick={() => window.location.href = `/track?id=${searchId}`} className="px-10 rounded-2xl">Track</Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="pt-60 pb-40 text-center">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-6" />
        <p className="font-black uppercase tracking-[0.2em] text-gold animate-pulse">Locating Your Feast...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="pt-40 pb-32 px-6 text-center">
        <h2 className="text-2xl font-black mb-4">Order Not Found</h2>
        <p className="text-midnight/40 mb-8">We couldn't find an order with ID: {orderId}</p>
        <Button onClick={() => window.location.href = "/track"} variant="outline">Try Another ID</Button>
      </div>
    );
  }

  const currentStatusIndex = statusConfig.findIndex(s => s.key === order.status);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        
        {/* Status Timeline */}
        <div className="lg:col-span-1 space-y-10">
          <div>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Live Updates</span>
            <h1 className="font-serif text-4xl font-black mb-2 text-midnight">Track Your <span className="text-gold italic">Feast</span></h1>
            <p className="text-midnight/40 text-sm font-bold">Order ID: #{order.id}</p>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gold/10">
            {statusConfig.map((status, index) => {
              const isCompleted = index < currentStatusIndex || order.status === "delivered";
              const isCurrent = index === currentStatusIndex && order.status !== "delivered";

              return (
                <div key={status.key} className="relative flex items-start space-x-6">
                  <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                    isCompleted || isCurrent 
                      ? "bg-gold border-gold text-white shadow-gold" 
                      : "bg-white border-gold/10 text-midnight/20"
                  }`}>
                    <status.icon size={20} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className={`font-black uppercase tracking-wide text-sm ${isCurrent ? "text-gold" : "text-midnight/80"}`}>
                      {status.label}
                    </h3>
                    <p className="text-[10px] text-midnight/30 uppercase tracking-[0.2em] font-bold mt-1">
                      {isCompleted ? "Completed" : isCurrent ? "In Progress" : "Pending"}
                    </p>
                  </div>
                  {isCurrent && (
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-accent shadow-sm"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Rider Info Card */}
          <div className="bg-white border border-gold/10 rounded-[2.5rem] p-8 shadow-xl">
            <div className="flex items-center space-x-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center font-black text-gold text-2xl shadow-inner border border-gold/20">
                {order.rider.name.split(" ").map((n: string) => n[0]).join("")}
              </div>
              <div>
                <h4 className="font-black text-midnight text-lg">{order.rider.name}</h4>
                <p className="text-sm text-midnight/40 font-bold uppercase tracking-widest">Your Delivery Hero</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href={`tel:${order.rider.phone}`} className="w-full">
                <Button variant="outline" size="sm" className="w-full h-12 flex items-center border-gold/20 text-midnight hover:bg-gold hover:text-white rounded-xl">
                  <Phone size={18} className="mr-2" /> Call
                </Button>
              </a>
              <a href={`https://wa.me/${order.rider.phone.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full">
                <Button variant="outline" size="sm" className="w-full h-12 flex items-center border-gold/20 text-midnight hover:bg-gold hover:text-white rounded-xl">
                  <MessageSquare size={18} className="mr-2" /> Chat
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Live Map Preview */}
        <div className="lg:col-span-2 bg-white border border-gold/10 rounded-[3rem] overflow-hidden relative min-h-[600px] shadow-2xl">
          <div className="absolute inset-0 bg-[#f8f5f0] overflow-hidden">
             <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.1 }} />
             
             <svg className="absolute inset-0 w-full h-full p-20">
               <motion.path
                 d="M 50 400 Q 200 350 400 200 T 750 50"
                 fill="none"
                 stroke="rgba(212, 175, 55, 0.05)"
                 strokeWidth="10"
                 strokeLinecap="round"
               />
               <motion.path
                 d="M 50 400 Q 200 350 400 200 T 750 50"
                 fill="none"
                 stroke="#D4AF37"
                 strokeWidth="4"
                 strokeDasharray="1000"
                 strokeDashoffset={1000 - (order.rider.progress * 10)}
                 strokeLinecap="round"
               />
               
               <motion.g
                 animate={{ 
                   x: 50 + (order.rider.progress * 7),
                   y: 400 - (order.rider.progress * 3.5)
                 }}
                 transition={{ type: "spring", stiffness: 50 }}
               >
                 <circle r="25" fill="#D4AF37" className="shadow-lg" />
                 <foreignObject x="-12" y="-12" width="24" height="24">
                   <Bike className="text-white" size={24} />
                 </foreignObject>
               </motion.g>

               <g transform="translate(750, 50)">
                 <motion.circle 
                   animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.1, 0.3] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   r="40" 
                   fill="#D4AF37" 
                 />
                 <circle r="12" fill="#D4AF37" />
                 <MapPin className="text-white absolute" size={14} style={{ transform: 'translate(-7px, -7px)' }} />
               </g>
             </svg>
          </div>

          <div className="absolute top-10 left-10 flex space-x-6">
            <div className="bg-white/90 backdrop-blur-xl px-8 py-4 rounded-[1.5rem] border border-gold/20 flex items-center shadow-2xl">
              <Clock className="text-gold mr-4" size={24} />
              <div>
                <p className="text-[10px] text-midnight/30 uppercase tracking-[0.2em] font-black mb-1">Arrival</p>
                <p className="font-black text-xl text-midnight">{order.status === "delivered" ? "Delivered" : `${Math.max(1, 15 - Math.floor(order.rider.progress / 6))} Mins`}</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 left-10">
             <div className="bg-midnight backdrop-blur-xl p-8 rounded-[2.5rem] border border-gold/20 shadow-2xl text-white">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-black text-lg uppercase tracking-wider">Delivery Address</p>
                  <ArrowRight className="text-gold" size={20} />
                </div>
                <p className="text-white/40 text-sm font-medium">{order.customer.address}</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-cream text-midnight">
      <Navbar variant="dark" solid />

      <Suspense fallback={<div>Loading...</div>}>
        <TrackingContent />
      </Suspense>
      <Footer />
    </main>
  );
}
