"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Package, 
  Clock, 
  CheckCircle2, 
  Bike, 
  MapPin, 
  ChefHat, 
  Phone, 
  User,
  ExternalLink,
  Trash2,
  Edit3
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const statusSteps = [
  { key: "received", label: "Received", icon: Package },
  { key: "preparing", label: "Preparing", icon: ChefHat },
  { key: "delivering", label: "Out for Delivery", icon: Bike },
  { key: "arriving", label: "Arriving Soon", icon: MapPin },
  { key: "delivered", label: "Delivered", icon: CheckCircle2 },
];

export default function AdminDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingRider, setEditingRider] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "amigos123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid Admin Password");
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      if (res.ok) {
        const data = await res.json();
        setOrders(data.sort((a: any, b: any) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ));
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
      const interval = setInterval(fetchOrders, 10000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const updateStatus = async (orderId: string, newStatus: string) => {
    const progressMap: Record<string, number> = {
      received: 0,
      preparing: 10,
      delivering: 50,
      arriving: 85,
      delivered: 100
    };

    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          status: newStatus,
          rider: { 
            ...orders.find(o => o.id === orderId).rider,
            progress: progressMap[newStatus] || 0 
          }
        }),
      });
      if (res.ok) fetchOrders();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const updateRiderName = async (orderId: string, newName: string) => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          rider: { 
            ...orders.find(o => o.id === orderId).rider,
            name: newName
          }
        }),
      });
      if (res.ok) {
        setEditingRider(null);
        fetchOrders();
      }
    } catch (err) {
      console.error("Rider update error:", err);
    }
  };

  const updateRiderPhone = async (orderId: string, newPhone: string) => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          rider: { 
            ...orders.find(o => o.id === orderId).rider,
            phone: newPhone
          }
        }),
      });
      if (res.ok) fetchOrders();
    } catch (err) {
      console.error("Rider phone update error:", err);
    }
  };

  const deleteOrder = async (orderId: string) => {
    if (!confirm("Are you sure you want to delete this order?")) return;
    
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "DELETE",
      });
      if (res.ok) fetchOrders();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-midnight flex flex-col relative overflow-hidden">
        <Navbar variant="light" />
        
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-40 pb-24 relative z-10">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-2xl border border-gold/10 p-8 md:p-10 rounded-[2.5rem] w-full max-w-[340px] shadow-[0_0_80px_rgba(0,0,0,0.4)] relative z-10"
          >
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold/10 shadow-inner">
                <Package className="text-gold" size={24} />
              </div>
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-[8px] mb-2 block">Secure Access</span>
              <h1 className="font-serif text-2xl font-black text-white uppercase tracking-tighter">Admin <span className="text-gold italic text-3xl">Login</span></h1>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <input 
                  type="password"
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-gold/20 rounded-xl py-4 px-6 text-white font-bold focus:outline-none focus:border-gold transition-all text-center tracking-[0.4em] text-lg"
                />
                {error && (
                  <p className="text-red-400 text-[9px] font-black uppercase text-center tracking-widest mt-1">
                    {error}
                  </p>
                )}
              </div>
              <Button className="w-full py-4 rounded-xl font-black uppercase tracking-widest shadow-gold text-sm" size="lg">Unlock</Button>
            </form>
            
            <p className="text-white/10 text-[7px] font-bold uppercase text-center mt-10 tracking-[0.2em]">
              Amigos Fast Food • Sialkot
            </p>
          </motion.div>
        </div>

        <Footer />
      </main>
    );
  }

  if (loading) return <div className="pt-40 text-center font-black text-gold animate-pulse">LOADING DASHBOARD...</div>;

  return (
    <main className="min-h-screen bg-cream text-midnight">
      <Navbar variant="dark" solid />

      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Control Center</span>
            <h1 className="font-serif text-5xl font-black text-midnight leading-tight">
              Admin <span className="text-gold italic">Dashboard</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-8 py-4 rounded-2xl border border-gold/10 shadow-sm">
              <p className="text-[10px] font-black uppercase text-midnight/30 mb-1">Total Orders</p>
              <p className="text-2xl font-black text-midnight">{orders.length}</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-2xl border border-gold/10 shadow-sm">
              <p className="text-[10px] font-black uppercase text-midnight/30 mb-1">Active</p>
              <p className="text-2xl font-black text-gold">
                {orders.filter(o => o.status !== "delivered").length}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white border border-gold/10 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
              >
                {/* Delete Button (Corner) */}
                <button 
                  onClick={() => deleteOrder(order.id)}
                  className="absolute top-6 right-6 p-3 bg-red-50 text-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white z-20"
                >
                  <Trash2 size={18} />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                  
                  {/* Order Identity */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black bg-gold/10 text-gold px-3 py-1 rounded-full">#{order.id}</span>
                      <span className="text-[10px] font-bold text-midnight/30 flex items-center">
                        <Clock size={12} className="mr-1" />
                        {new Date(order.createdAt).toLocaleTimeString()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-midnight">{order.customer.firstName} {order.customer.lastName}</h3>
                      <p className="text-sm text-midnight/50 font-medium mt-1 flex items-center">
                        <Phone size={14} className="mr-2 text-gold" /> {order.customer.phone}
                      </p>
                      <p className="text-sm text-midnight/50 font-medium mt-1 flex items-start">
                        <MapPin size={14} className="mr-2 mt-1 text-gold shrink-0" /> {order.customer.address}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gold/5">
                       <p className="text-[10px] font-black uppercase text-midnight/30 mb-2">Items</p>
                       <div className="flex flex-wrap gap-2">
                         {order.items.map((item: any, i: number) => (
                           <span key={i} className="text-[10px] font-bold bg-cream px-2 py-1 rounded border border-gold/5">
                             {item.quantity}x {item.name}
                           </span>
                         ))}
                       </div>
                    </div>
                  </div>

                  {/* Status Timeline */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-[10px] font-black uppercase text-midnight/30">Order Progress</p>
                    <div className="flex items-center justify-between relative">
                      <div className="absolute left-0 top-5 w-full h-1 bg-gold/10 -z-0" />
                      <div 
                        className="absolute left-0 top-5 h-1 bg-gold transition-all duration-1000 -z-0" 
                        style={{ width: `${(statusSteps.findIndex(s => s.key === order.status) / (statusSteps.length - 1)) * 100}%` }}
                      />
                      
                      {statusSteps.map((step, idx) => {
                        const isPast = statusSteps.findIndex(s => s.key === order.status) >= idx;
                        const isCurrent = order.status === step.key;
                        
                        return (
                          <div key={step.key} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                              isPast ? "bg-gold border-gold text-white shadow-gold" : "bg-white border-gold/10 text-midnight/20"
                            }`}>
                              <step.icon size={16} />
                            </div>
                            <span className={`text-[8px] font-black uppercase tracking-wider ${isCurrent ? "text-gold" : "text-midnight/30"}`}>
                              {step.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-4">
                       {statusSteps.map((step) => (
                         <button
                           key={step.key}
                           onClick={() => updateStatus(order.id, step.key)}
                           className={`py-2 rounded-xl text-[9px] font-black uppercase tracking-tighter transition-all ${
                             order.status === step.key 
                               ? "bg-midnight text-white" 
                               : "bg-gold/5 text-gold hover:bg-gold/10"
                           }`}
                         >
                           {step.key}
                         </button>
                       ))}
                    </div>
                  </div>

                  {/* Rider & Total */}
                  <div className="flex flex-col justify-between border-l border-gold/5 pl-8">
                    <div className="space-y-6">
                      <div>
                        <p className="text-[10px] font-black uppercase text-midnight/30 mb-1">Total Amount</p>
                        <p className="text-3xl font-black text-midnight">Rs. {order.totalPrice.toLocaleString()}</p>
                      </div>
                      
                      <div className="bg-cream rounded-2xl p-4 border border-gold/10 space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[8px] font-black uppercase text-midnight/30">Assigned Rider</p>
                            <button onClick={() => setEditingRider(order.id === editingRider ? null : order.id)} className="text-gold">
                              <Edit3 size={12} />
                            </button>
                          </div>
                          {editingRider === order.id ? (
                            <div className="space-y-2">
                              <input 
                                autoFocus
                                defaultValue={order.rider.name}
                                onKeyDown={(e) => e.key === 'Enter' && updateRiderName(order.id, (e.target as HTMLInputElement).value)}
                                className="w-full bg-white border border-gold/30 rounded-lg px-2 py-1 text-xs font-bold outline-none"
                                placeholder="Rider Name"
                              />
                              <input 
                                defaultValue={order.rider.phone}
                                onKeyDown={(e) => e.key === 'Enter' && updateRiderPhone(order.id, (e.target as HTMLInputElement).value)}
                                className="w-full bg-white border border-gold/30 rounded-lg px-2 py-1 text-xs font-bold outline-none"
                                placeholder="Rider Phone"
                              />
                              <p className="text-[7px] text-midnight/40 italic">Press Enter to save each field</p>
                            </div>
                          ) : (
                            <div>
                              <p className="text-sm font-black text-midnight">{order.rider.name}</p>
                              <p className="text-[10px] font-bold text-gold">{order.rider.phone}</p>
                            </div>
                          )}
                        </div>

                        {order.notes && (
                          <div className="pt-3 border-t border-gold/5">
                            <p className="text-[8px] font-black uppercase text-midnight/30 mb-1">Customer Notes</p>
                            <p className="text-[10px] text-midnight/60 font-medium italic">"{order.notes}"</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                       <Link href={`/track?id=${order.id}`} target="_blank" className="block">
                         <Button 
                           variant="outline" 
                           size="sm" 
                           className="w-full text-[10px] border-gold/20"
                         >
                           <ExternalLink size={14} className="mr-2" /> View Live Track
                         </Button>
                       </Link>
                       <Button 
                         variant="primary" 
                         size="sm" 
                         className="w-full text-[10px] bg-midnight text-white hover:bg-black"
                         onClick={() => updateStatus(order.id, 'delivered')}
                         disabled={order.status === 'delivered'}
                       >
                         {order.status === 'delivered' ? 'Completed' : 'Fast Complete'}
                       </Button>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {orders.length === 0 && (
            <div className="text-center py-40 bg-white rounded-[3rem] border-2 border-dashed border-gold/10">
              <Package size={48} className="mx-auto text-gold/20 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-midnight">No orders yet</h3>
              <p className="text-midnight/40">Incoming orders will appear here in real-time.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
