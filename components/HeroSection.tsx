"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Elements Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-ember/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-clay/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blaze animate-pulse" />
            <span className="text-sm md:text-base font-bold tracking-widest text-gray-200 uppercase">
              Data & AI Engineer
            </span>
          </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-white">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blaze via-clay to-ember bg-size-[200%_auto] animate-gradient">
              Daifullah Noor Azmi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed">
            I'm an Informatics undergraduate at Telkom University focused on Data Engineering and AI/ML. I build end-to-end systems from data pipelines and machine learning models to modern web applications using Python, React, Next.js, Supabase, and BigQuery.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <Link
              href="#projects"
              className="px-8 py-4 bg-blaze text-main font-bold text-sm uppercase tracking-widest rounded-md hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(52,211,153,0.3)] flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent text-white font-medium text-sm uppercase tracking-widest rounded-md border border-white/20 hover:border-blaze hover:bg-white/5 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-8">
            {[
              { Icon: Github, href: "https://github.com/Difsyy" },
              { Icon: Linkedin, href: "#" },
              { Icon: Mail, href: "mailto:ndaifullah@gmail.com" }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-gray-500 hover:text-blaze transition-colors transform hover:scale-110"
              >
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blaze/20 to-emerald-400/20 rounded-full blur-[50px] animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-bl from-emerald-400/10 to-blaze/10 rounded-full blur-[80px] animate-pulse delay-75" />
            
            {/* Image Container with Frame */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 rounded-full border-[6px] border-black/40 z-20 pointer-events-none" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                <Image 
                  src="/Adif2.jpeg" 
                  alt="Daifullah Noor Azmi" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
