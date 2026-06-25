"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 400;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = 30;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.15)'; // Gold with low opacity

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-navy-deep py-32 overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Particles */}
      <ParticleCanvas />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Be Part of <span className="text-gold">IEEE ICQST 2027</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join the brightest minds in quantum technologies. Submit your research or secure your spot as an attendee today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(212,175,55,0.4)' }}
              className="inline-block"
            >
              <Link 
                href="/registration" 
                className="bg-gold text-navy-deep font-bold rounded-xl px-8 py-4 transition-colors inline-block w-full sm:w-auto text-center"
              >
                Register Now
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="inline-block border-2 border-white/20 rounded-xl backdrop-blur-sm transition-colors"
            >
              <Link 
                href="/call-for-papers" 
                className="text-white px-8 py-4 inline-block w-full sm:w-auto text-center font-medium"
              >
                Call for Papers
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
