import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { ResumeData } from '../types';

interface ExperienceProps {
  experience?: ResumeData['experience'];
}

export const Experience: React.FC<ExperienceProps> = ({ experience = [] }) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                expandedIdx === idx 
                  ? 'bg-white/10 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${expandedIdx === idx ? 'bg-emerald-500 text-white' : 'bg-white/5 text-white/40'}`}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-emerald-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.dates}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location || 'Remote'}
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                    className="ml-2"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {expandedIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-white/10">
                      <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4">
                        {exp.duration}
                      </div>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-white/60 leading-relaxed">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                        {exp.bullets.length === 0 && (
                          <li className="text-white/40 italic">Details coming soon...</li>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
