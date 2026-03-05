import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { ResumeData } from '../types';

interface EducationProps {
  education?: ResumeData['education'];
}

export const Education: React.FC<EducationProps> = ({ education = [] }) => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </motion.div>

      <div className="grid gap-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono">
                  <Calendar size={14} />
                  {edu.dates}
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60 mb-2">
                <GraduationCap size={18} className="text-emerald-500" />
                <p className="font-medium">{edu.degree}</p>
              </div>
              <p className="text-white/40 text-sm">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
