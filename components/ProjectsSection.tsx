"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Data Analysis", "Data Engineering", "AI / ML"];

const projects = [
  {
    title: "AI Analytics Dashboard",
    description: "Real-time data visualization platform for machine learning metrics using Next.js and D3.js.",
    tags: ["Next.js", "TypeScript", "D3.js", "Python"],
    category: "Data Analysis"
  },
  {
    title: "Neural Network Visualizer",
    description: "Interactive 3D visualization of neural network architectures and data flow.",
    tags: ["React", "Three.js", "TensorFlow.js"],
    category: "AI / ML"
  },
  {
    title: "Smart Content CMS",
    description: "Headless CMS with AI-powered content generation and SEO optimization features.",
    tags: ["Next.js", "OpenAI API", "PostgreSQL"],
    category: "Data Engineering"
  },
  {
    title: "Predictive Market Bot",
    description: "Automated trading bot interface with predictive modeling and risk analysis.",
    tags: ["Python", "FastAPI", "React", "Tailwind"],
    category: "AI / ML"
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Strip */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-ember/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-3 block">
              Selected Work
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blaze via-clay to-ember bg-size-[200%_auto] animate-gradient">
                Featured Projects
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-emerald-400 text-white shadow-lg shadow-emerald-400/25"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
