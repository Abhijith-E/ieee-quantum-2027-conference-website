import React from 'react';
import { Laptop, GraduationCap, Award } from 'lucide-react';

export default function ExpectationsBlock() {
  const items = [
    {
      icon: <Laptop size={32} className="text-amber-500" />,
      title: 'Hands-on Learning',
      desc: 'Bring your laptop. You will be writing code, running simulations, and interacting with live quantum hardware environments.'
    },
    {
      icon: <GraduationCap size={32} className="text-navy" />,
      title: 'Expert-led Instruction',
      desc: 'Learn directly from the pioneers and core maintainers of the frameworks you use every day.'
    },
    {
      icon: <Award size={32} className="text-gold" />,
      title: 'Official Certification',
      desc: 'Receive an IEEE Continuing Education Unit (CEU) certificate upon successful completion of your registered masterclass.'
    }
  ];

  return (
    <section className="w-full py-16 px-6 bg-white relative z-10 border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-bold text-navy uppercase tracking-widest mb-12 opacity-80">
          What to Expect
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
