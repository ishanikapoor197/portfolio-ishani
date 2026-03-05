import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { ResumeData } from '../types';

interface SkillsProps {
  skills?: ResumeData['skills'];
}

const getIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('html') || n.includes('css') || n.includes('react')) return <Layout size={20} />;
  if (n.includes('django') || n.includes('node') || n.includes('python')) return <Server size={20} />;
  if (n.includes('database') || n.includes('sql') || n.includes('mongo')) return <Database size={20} />;
  return <Code2 size={20} />;
};

export const Skills: React.FC<SkillsProps> = ({ skills = [] }) => {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Core Expertise</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {getIcon(skill.name)}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-mono">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
