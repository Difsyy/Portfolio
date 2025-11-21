"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Brain } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blaze via-clay to-ember bg-size-[200%_auto] animate-gradient">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blaze to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I study Informatics at Telkom University with a strong interest in
                Data Engineering and AI/ML. I've built data pipelines, predictive
                models, dashboards, and web applications using technologies
                like Python, SQL, React, Next.js, Supabase, and BigQuery.
              </p>
              <p>
                Through projects involving student predictions, fuzzy-logic
                systems, customer segmentation, and analytics visualization, I've
                gained practical experience in database design, ML workflows,
                API development, and intuitive UI/UX all focused on solving real-
                world data challenges.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact"
                className="flex-1 sm:flex-none px-8 py-3 bg-linear-to-r from-emerald-400 to-cyan-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20 text-center"
              >
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1AK0TGudBQkTHXP4RSLl5Rrt2kkM4VcBv/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors text-center"
              >
                CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-6"
          >
            {[
              {
                icon: <BarChart3 className="w-6 h-6 text-blaze" />,
                title: "Data Analysis",
                description: "Turning raw data into insights through metrics, visualization, and analytical techniques."
              },
              {
                icon: <Database className="w-6 h-6 text-blaze" />,
                title: "Data Engineering",
                description: "Designing scalable data pipelines, ETL workflows, and efficient database architectures."
              },
              {
                icon: <Brain className="w-6 h-6 text-blaze" />,
                title: "AI / Machine Learning Engineering",
                description: "Building intelligent models, evaluating performance, and deploying end-to-end ML systems."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blaze/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
