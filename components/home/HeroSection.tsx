"use client";

import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import { colors } from '@/lib/tokens';
import CountdownTimer from '@/components/shared/CountdownTimer';
import Link from 'next/link';
import SearchModal from '@/components/ui/SearchModal';

// --- Ultra Premium 3D Background ---
function QuantumField() {
  const ref = useRef<THREE.Points>(null);
  const count = 2000;
  
  // Create positions across a massive, screen-filling volume
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60; // Huge X spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60; // Huge Y spread
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40; // Deep Z spread
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Gentle, complex rotation giving a "flowing" feel
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.03;
      
      // Dynamic wave effect on points
      const time = state.clock.getElapsedTime();
      for(let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];
        // Apply a subtle sine wave perturbation to Y
        positions[i3 + 1] += Math.sin(time + x) * 0.002;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D4AF37" // Gold
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function GlowingNodes() {
  // A few larger, glowing "quantum nodes" floating in the background
  return (
    <>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[0.2, 32, 32]} position={[-4, 2, -5]}>
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
        </Sphere>
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={4}>
        <Sphere args={[0.3, 32, 32]} position={[5, -3, -8]}>
          <meshBasicMaterial color="#D4AF37" transparent opacity={0.2} />
        </Sphere>
      </Float>
      <Float speed={1} rotationIntensity={3} floatIntensity={2}>
        <Sphere args={[0.15, 32, 32]} position={[0, -4, -3]}>
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </Sphere>
      </Float>
    </>
  );
}

export default function HeroSection() {
  const [searchOpen, setSearchOpen] = useState(false);
  const title = "IEEE ICQST 2027";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gold/10 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* 3D Particle Canvas - Now Full Screen & Enabled on Mobile */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <fog attach="fog" args={['#020617', 5, 20]} />
          <QuantumField />
          <GlowingNodes />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-6xl mx-auto pt-24 pb-16">
        
        {/* Premium Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 sm:gap-4 mb-10 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.1)]"
        >
          <span className="text-white/90 font-bold text-sm sm:text-base tracking-widest uppercase">IEEE</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-white/90 font-bold text-sm sm:text-base tracking-widest uppercase">CHRIST</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold font-bold text-sm sm:text-base tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">ICQST</span>
        </motion.div>

        {/* Massive Animated Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black leading-[1.1] mb-6 tracking-tight flex flex-wrap justify-center gap-x-4 sm:gap-x-6">
          {title.split(' ').map((word, wordIdx) => (
            <span key={wordIdx} className="inline-flex">
              {word.split('').map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotateX: -90 },
                    visible: (i) => ({ 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      transition: { 
                        delay: i * 0.05, 
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                      } 
                    })
                  }}
                  initial="hidden"
                  animate="visible"
                  custom={wordIdx * 10 + charIdx}
                  className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 drop-shadow-sm inline-block transform-gpu"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-slate-300/90 mb-10 max-w-3xl drop-shadow-md"
        >
          Defining the Future of Quantum Science and Technologies
        </motion.p>

        {/* Global Search Button - Premium Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-14 w-full max-w-lg relative group"
        >
          {/* Subtle glow behind the search bar */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-blue-500/20 to-gold/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          
          <button 
            onClick={() => setSearchOpen(true)}
            className="relative w-full flex items-center gap-4 bg-[#0a0f1c]/80 hover:bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 hover:border-gold/30 rounded-2xl px-6 py-5 text-left transition-all shadow-2xl"
          >
            <Search className="text-gold w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-slate-300 font-medium text-lg flex-1">Search sessions, speakers, venue...</span>
            <span className="hidden sm:flex items-center justify-center gap-1 text-xs font-bold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md shadow-inner">
              <span className="text-[10px]">⌘</span> K
            </span>
          </button>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-14 p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm"
        >
          <div className="bg-[#020617]/50 rounded-[22px] px-4 py-2">
            <CountdownTimer targetDate="2027-02-17T09:00:00Z" />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center"
        >
          <Link href="/abstract-submission">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-500 text-navy-deep font-extrabold rounded-2xl px-10 py-5 transition-all text-center cursor-pointer shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
              Submit Paper <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
          <Link href="/program">
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(212,175,55,0.5)' }}
              className="flex items-center gap-2 border-2 border-white/10 text-white font-semibold rounded-2xl px-10 py-5 backdrop-blur-md transition-all text-center cursor-pointer"
            >
              View Schedule
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-gold mb-3" />
        <ChevronDown size={24} />
      </motion.div>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </section>
  );
}
