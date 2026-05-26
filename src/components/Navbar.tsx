"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Track Order", href: "/track" },
  { name: "Contact", href: "/contact" },
  { name: "Admin", href: "/admin" },
];

interface NavbarProps {
  variant?: "light" | "dark";
  solid?: boolean;
}

export const Navbar = ({ variant = "light", solid = false }: NavbarProps) => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkNavbar = variant === "dark" || isScrolled || solid;
  const showBackground = isScrolled || solid;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        showBackground 
          ? "bg-white/90 backdrop-blur-md border-b border-gold/20 py-3 shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn(
            "font-serif text-2xl font-bold tracking-tighter transition-colors",
            isDarkNavbar ? "text-midnight" : "text-gold"
          )}>
            AMIGOS<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-colors",
                isDarkNavbar ? "text-midnight/70 hover:text-gold" : "text-white hover:text-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className={cn(
            "relative p-2 transition-colors",
            isDarkNavbar ? "text-midnight hover:text-gold" : "text-white hover:text-gold"
          )}>
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-midnight text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/menu" className={cn(
              "flex items-center transition-colors",
              isDarkNavbar ? "text-gold hover:text-midnight" : "text-gold hover:text-accent"
            )}>
              <span className="text-sm font-bold">Order Now</span>
            </Link>
            <Button size="sm">Download App</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden transition-colors",
              isDarkNavbar ? "text-midnight" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-midnight border-b border-gold/20 px-6 py-8 md:hidden flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-white/90 hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Order Now</Button>
              </Link>
              <a href="tel:03333985700" className="flex items-center justify-center text-gold py-2">
                <Phone size={18} className="mr-2" />
                <span>Call to Order</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
