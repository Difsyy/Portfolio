"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Manual Scroll Spy
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger when section enters top 1/3

      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.name);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-main/80 backdrop-blur-md border-white/5 shadow-lg py-6"
          : "bg-transparent py-12" // Increased padding for "bigger" look
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-blaze origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="text-4xl font-bold tracking-tight flex items-end gap-1 group"
        >
          <span className="text-white">DT</span>
          <span className="w-3 h-3 rounded-full bg-blaze mb-2 group-hover:scale-125 transition-transform" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className="relative px-6 py-3 text-sm uppercase tracking-widest font-medium transition-colors duration-300"
            >
              {activeSection === link.name && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300",
                  activeSection === link.name ? "text-blaze" : "text-gray-400 hover:text-white"
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle (Simple placeholder) */}
        <button className="md:hidden text-gray-300 hover:text-blaze">
          <span className="sr-only">Menu</span>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
