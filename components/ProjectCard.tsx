"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ProjectCard({ title, description, tags, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
    >
      <div className="relative h-full bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(52,211,153,0.15)] group-hover:border-emerald-500/30">
        {/* Mock Screenshot Area */}
        <div className="h-64 w-full bg-gray-900 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
          <Image
            src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop`}
            alt={title}
            fill
            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
             <span className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-full text-sm font-bold text-white border border-white/20 hover:bg-emerald-500 hover:border-emerald-500 transition-all">
               View Project
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col grow">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-base leading-relaxed mb-8 grow line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-400 border border-white/5 rounded-lg bg-white/5 group-hover:border-emerald-500/20 group-hover:text-emerald-400/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 mt-auto pt-6 border-t border-white/5">
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" /> CODE
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5" /> LIVE DEMO
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
