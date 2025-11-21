"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

      // Force Home when at the top
      if (window.scrollY < 100) {
        setActiveSection("Home");
        return;
      }

      // Manual Scroll Spy
      const viewportMiddle = window.innerHeight / 2;

      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
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
          ? "bg-main/80 backdrop-blur-md border-white/5 shadow-lg py-2 md:py-4"
          : "bg-transparent py-3 md:py-8"
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
          href="#home"
          className="flex items-center gap-2 group"
        >
          <svg viewBox="0 0 600 300" className="h-10 md:h-14 w-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="navbarLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="50%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                
                <filter id="navbarLogoGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <g transform="translate(300, 150)">
                {/* Background Shape (Orbital Rings) */}
                <ellipse cx="0" cy="0" rx="200" ry="90" 
                         fill="none" stroke="url(#navbarLogoGradient)" strokeWidth="6" opacity="0.3" 
                         transform="rotate(15)" />
                
                <ellipse cx="0" cy="0" rx="200" ry="90" 
                         fill="none" stroke="url(#navbarLogoGradient)" strokeWidth="6" opacity="0.3" 
                         transform="rotate(-15)" />

                {/* Strand 1 */}
                <path d="M -240 -60 Q -200 -60, -160 0 T -80 60 T 0 0 T 80 -60 T 160 0 T 240 60"
                      fill="none" stroke="url(#navbarLogoGradient)" strokeWidth="24" strokeLinecap="round"
                      filter="url(#navbarLogoGlow)" />
                
                {/* Strand 1 Highlight */}
                <path d="M -240 -60 Q -200 -60, -160 0 T -80 60 T 0 0 T 80 -60 T 160 0 T 240 60"
                      fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.2"
                      transform="translate(0, -3)" />

                {/* Strand 2 */}
                <path d="M -240 60 Q -200 60, -160 0 T -80 -60 T 0 0 T 80 60 T 160 0 T 240 -60"
                      fill="none" stroke="url(#navbarLogoGradient)" strokeWidth="24" strokeLinecap="round"
                      filter="url(#navbarLogoGlow)" />

                {/* Strand 2 Highlight */}
                <path d="M -240 60 Q -200 60, -160 0 T -80 -60 T 0 0 T 80 60 T 160 0 T 240 -60"
                      fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.2"
                      transform="translate(0, -3)" />
            </g>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-12">
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

        {/* Mobile Nav Toggle */}
        <button
          className="xl:hidden text-gray-300 hover:text-blaze z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          {isMobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-main/95 backdrop-blur-xl flex flex-col items-center justify-center xl:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-2xl font-medium tracking-widest uppercase transition-colors duration-300",
                    activeSection === link.name
                      ? "text-blaze"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
