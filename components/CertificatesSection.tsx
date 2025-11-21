"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

const certificates = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2023",
    credentialUrl: "#",
    description: "Complete data analytics training covering SQL, R, Tableau, and data visualization best practices.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    credentialUrl: "#",
    description: "Mastered fundamental concepts of neural networks, CNNs, RNNs, and sequence models.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "#",
    description: "Validated overall understanding of the AWS Cloud platform and basic security concepts.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
  },
  {
    title: "Meta Back-End Developer Professional Certificate",
    issuer: "Meta",
    date: "2024",
    credentialUrl: "#",
    description: "Expertise in Python, Django, APIs, and database management for scalable web applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-3 block">
            Credentials
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blaze via-clay to-ember bg-size-[200%_auto] animate-gradient">
              Certificates
            </span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-emerald-400 to-transparent rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:bg-white/10 items-center md:items-start"
            >
              {/* Left: Certificate Image Placeholder */}
              <div className="shrink-0 w-full md:w-48 h-32 md:h-32 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  <Link 
                    href={cert.credentialUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    target="_blank"
                  >
                    Verify <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400 mb-4">
                  <span className="font-medium text-gray-300">{cert.issuer}</span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-gray-600" />
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-base leading-relaxed max-w-3xl">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
