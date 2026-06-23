"use client";

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { colors } from '@/lib/tokens';
import CountdownTimer from '@/components/shared/CountdownTimer';
import Link from 'next/link';

function ParticleBackground() {
  const ref = useRef<THREE.Points>(null);
  const count = 300;
  
  // Create stable positions for particles
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={colors.gold}
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}



export default function HeroSection() {
  const title = "IEEE CQTCS 2026";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleBackground />
        </Canvas>
      </div>
      
      {/* Mobile Fallback Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-navy)_0%,var(--color-navy-deep)_100%)] md:hidden" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-20 pb-10">
        
        {/* Logos Lockup */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          {/* Placeholders for logos */}
          <div className="text-white/80 font-bold text-lg tracking-wider">IEEE</div>
          <div className="w-px h-6 bg-slate-400 opacity-50" />
          <div className="text-white/80 font-bold text-lg tracking-wider">CHRIST</div>
          <div className="w-px h-6 bg-slate-400 opacity-50" />
          <div className="text-white/80 font-bold text-lg tracking-wider">CQTCS</div>
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-7xl lg:text-[80px] font-extrabold leading-tight mb-4 flex flex-wrap justify-center gap-x-4">
          {title.split(' ').map((word, wordIdx) => (
            <span key={wordIdx} className="inline-flex">
              {word.split('').map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04 } })
                  }}
                  initial="hidden"
                  animate="visible"
                  custom={wordIdx * 10 + charIdx}
                  className="text-white inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-serif italic text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl"
        >
          Defining the Future of Quantum Technologies
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <CountdownTimer targetDate="2026-11-15T09:00:00Z" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/abstract-submission">
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(212,175,55,0.4)' }}
              className="bg-gold text-navy-deep font-bold rounded-xl px-8 py-4 transition-colors text-center inline-block cursor-pointer"
            >
              Submit Paper
            </motion.div>
          </Link>
          <Link href="/program">
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="border-2 border-white/20 text-white rounded-xl px-8 py-4 backdrop-blur-sm text-center inline-block cursor-pointer"
            >
              View Schedule
            </motion.div>
          </Link>
          <Link href="/venue">
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="border-2 border-white/20 text-white rounded-xl px-8 py-4 backdrop-blur-sm text-center inline-block cursor-pointer"
            >
              Venue Details
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-400 mb-2" />
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
