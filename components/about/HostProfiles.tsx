import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function HostProfiles() {
  return (
    <section className="w-full bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Host Institutions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The conference is proudly hosted by institutions dedicated to academic excellence and cutting-edge research in emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CHRIST University Card */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col h-full shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_48px_rgba(15,23,42,0.08)] transition-shadow duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="w-40 h-16 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-slate-400">
                CHRIST Logo
              </div>
              <div className="flex flex-col gap-2 items-end">
                <span className="bg-navy text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Est. 1969
                </span>
                <span className="bg-gold/20 text-navy-deep text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-gold/30">
                  NAAC A++ Grade
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-navy mb-4">CHRIST (Deemed to be University)</h3>
            <p className="text-slate-600 leading-relaxed mb-8 flex-1">
              CHRIST (Deemed to be University), a premier educational institution in India, is renowned for its academic rigor, holistic education, and vibrant campus life. With a strong emphasis on research and innovation, the university provides a dynamic environment for scholars and students to push the boundaries of knowledge in science, engineering, and humanities.
            </p>
            
            <a href="#" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-navy transition-colors">
              Visit University Website <ExternalLink size={16} />
            </a>
          </div>

          {/* CQTCS Card */}
          <div className="bg-navy-deep rounded-3xl p-8 md:p-12 border border-slate-800 flex flex-col h-full shadow-[0_4px_24px_rgba(15,23,42,0.1)] hover:shadow-[0_16px_48px_rgba(15,23,42,0.2)] transition-shadow duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="w-40 h-16 bg-slate-800 border border-slate-700 rounded flex items-center justify-center font-bold text-slate-400">
                CQTCS Logo
              </div>
              <div className="flex flex-col gap-2 items-end">
                <span className="bg-slate-800 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-slate-700">
                  Est. 2021
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Centre for Quantum Technologies and Computer Science</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              A specialized research hub focusing on the intersection of quantum mechanics and computational theory. The center aims to accelerate research in quantum algorithms, secure communications, and quantum-classical integration.
            </p>
            
            <div className="mb-8 flex-1">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {['Quantum AI', 'Cryptography', 'Algorithms', 'Quantum Networks'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-6">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Director</p>
                <p className="text-white font-medium">Dr. Placeholder Name</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-white transition-colors">
                Visit Center <ExternalLink size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
