import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, ShieldCheck, Heart, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar solid />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 text-center dark-section">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8">
            Crafting the Future of <br />
            <span className="text-gold">Premium Fast Food</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Founded with a passion for excellence, Amigos Fast Food is redefining the Sialkot food scene with gold-standard quality and taste.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 light-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-gold/10 flex items-center justify-center border border-gold/20 shadow-2xl">
             <p className="font-serif text-gold text-2xl italic">Our Kitchen in Action</p>
          </div>
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-black text-midnight">The Amigos <span className="text-gold italic">Promise</span></h2>
            <p className="text-midnight/60 text-lg leading-relaxed">
              We believe that quality should never be sacrificed for speed. Our master chefs use only the freshest, locally-sourced ingredients to create masterpieces that satisfy both your hunger and your desire for excellence.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              {[
                { icon: Star, label: "Premium Quality" },
                { icon: ShieldCheck, label: "Hygienic Preparation" },
                { icon: Heart, label: "Made with Love" },
                { icon: Award, label: "Award Winning" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <span className="font-black text-midnight text-sm uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 text-center bg-midnight text-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl font-bold">Our <span className="text-gold italic">Mission</span></h2>
          <p className="text-2xl text-white/40 italic font-serif leading-relaxed">
            "To redefine the fast food landscape by delivering exceptional taste and luxury in every box, ensuring our customers feel like royalty with every bite."
          </p>
          <div className="w-20 h-[2px] bg-gold mx-auto mt-8" />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">What Drives Us</span>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-midnight">Core <span className="text-gold italic">Values</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Excellence",
                desc: "We strive for perfection in every dish, ensuring every bite is a testament to our commitment to quality.",
                color: "bg-gold/5"
              },
              {
                title: "Innovation",
                desc: "Constantly evolving our menu with unique flavors like our Crown Crust pizza and signature sauces.",
                color: "bg-accent/5"
              },
              {
                title: "Community",
                desc: "Proudly serving Sialkot, we believe in giving back and growing together with our local customers.",
                color: "bg-midnight/5"
              }
            ].map((value, i) => (
              <div key={i} className={`p-12 rounded-[3rem] ${value.color} border border-gold/10 hover:shadow-2xl transition-all duration-500 group`}>
                <h3 className="text-2xl font-serif font-bold text-midnight mb-6 group-hover:text-gold transition-colors">{value.title}</h3>
                <p className="text-midnight/50 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
