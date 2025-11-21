"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data Engineering & Analysis",
    skills: ["Python", "SQL", "Pandas", "NumPy", "PostgreSQL", "BigQuery", "Airflow"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLP", "LLMs"],
  },
  {
    title: "Tools & Development",
    skills: ["VS Code", "Cursor", "Jupyter Notebook", "Google Cloud Platform", "Git / GitHub", "Docker"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-ember/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-3 block">
            Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blaze via-clay to-ember bg-size-[200%_auto] animate-gradient">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            A hybrid skillset bridging the gap between data science and modern web development. 
            I build systems that are not only visually stunning but also data-driven and performant.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-300 flex flex-col ${
                idx === 2 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-6 py-3 text-sm font-medium text-gray-200 bg-[#0A101F]/80 border border-white/5 rounded-full hover:border-emerald-500/30 hover:bg-[#0A101F] hover:text-emerald-400 transition-all duration-300 cursor-default flex items-center justify-center shadow-lg shadow-black/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
