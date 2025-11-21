"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-4 block">
              GET IN TOUCH
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blaze via-clay to-ember bg-size-[200%_auto] animate-gradient">
                Let's Work Together
              </span>
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed text-lg">
              Have a project in mind or just want to say hi? I'm
              always open to discussing new opportunities and
              interesting ideas.
            </p>
            
            <div className="space-y-8">
              {/* Email */}
              <a 
                href="mailto:ndaifullah@gmail.com" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors border border-white/10 group-hover:border-emerald-400/50">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  ndaifullah@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a 
                href="http://wa.me/6281382973728" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors border border-white/10 group-hover:border-emerald-400/50">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  +62 81382973728
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg text-gray-300">Jakarta, ID</span>
                  <span className="text-sm text-gray-500">Remote Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-400 font-medium ml-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all placeholder:text-gray-600 hover:border-white/20"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-400 font-medium ml-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all placeholder:text-gray-600 hover:border-white/20"
                  placeholder="name@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-400 font-medium ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none placeholder:text-gray-600 hover:border-white/20"
                  placeholder="Hi, I'd like to discuss a potential collaboration..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-emerald-400 to-cyan-500 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group mt-4 shadow-lg shadow-emerald-500/20"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
