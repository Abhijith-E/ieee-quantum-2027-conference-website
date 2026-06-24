"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function MissionScope() {
  const paragraphs = [
    "The IEEE International International Conference on Quantum Science and Technologies (ICQST) is dedicated to advancing the theoretical foundations and practical applications of quantum computing. Our mission is to bridge the gap between abstract quantum mechanics and tangible computer science methodologies, fostering an ecosystem of innovation that accelerates the development of scalable quantum systems.",
    "As we stand on the precipice of quantum advantage, ICQST serves as a critical nexus for interdisciplinary dialogue. We bring together physicists, computer scientists, mathematicians, and engineers from academia and industry to address the most pressing challenges in quantum error correction, algorithmic complexity, and quantum-classical hybrid architectures.",
    "Our scope encompasses a wide array of topics, from fundamental quantum information theory to applied quantum cryptography and quantum machine learning. By facilitating rigorous peer-reviewed discourse and providing a platform for early-stage researchers, ICQST is committed to shaping the standards, ethics, and technological pathways that will define the next century of computation."
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Decorative Gold Quotation Mark */}
        <div className="absolute top-0 left-0 -translate-x-4 md:-translate-x-12 -translate-y-8 text-gold opacity-20 pointer-events-none select-none">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <motion.div 
          className="prose prose-slate prose-lg max-w-none text-slate-600 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={paragraphVariants} className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Mission & Scope
          </motion.h2>
          
          {paragraphs.map((text, idx) => (
            <motion.p key={idx} variants={paragraphVariants} className="leading-relaxed">
              {text}
            </motion.p>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
