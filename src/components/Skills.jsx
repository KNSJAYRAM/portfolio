import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import {
  Code2,
  Cpu,
  Braces,
  Atom,
  Layout,
  Palette,
  Server,
  Network,
  Database,
  Table2,
  Flame,
  GitBranch,
  Send,
  Radio,
  Terminal,
  Activity,
  Binary,
  Boxes,
  HardDrive,
  Laptop,
  Globe,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './Icons';

const iconMap = {
  Code2,
  Cpu,
  Braces,
  Atom,
  Layout,
  Palette,
  Server,
  Network,
  Database,
  Table2,
  Flame,
  GitBranch,
  Github: GithubIcon,
  Send,
  Radio,
  Terminal,
  Activity,
  Binary,
  Boxes,
  HardDrive,
  Laptop,
  Globe,
  Sparkles
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 relative border-t border-black/[0.08] bg-[#f2efe8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#71717a] uppercase tracking-widest font-semibold">
            02 // TECHNICAL SKILLS
          </span>
          <div className="h-px flex-1 bg-black/[0.08]"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111113] tracking-tight mb-3">
              Languages, systems & <span className="font-serif italic font-normal text-blue-600">core disciplines.</span>
            </h2>
            <p className="text-[#52525b] text-sm max-w-xl font-light">
              Carefully developed toolkit applied in production web products and engineering simulations.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#71717a]">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>VERIFIED CAPABILITIES // NO ARBITRARY PERCENTAGES</span>
          </div>
        </div>

        {/* Editorial Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-white border border-black/[0.08] shadow-sm hover:shadow-md hover:border-black/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-lg text-[#111113] group-hover:text-blue-600 transition-colors">
                    {cat.category}
                  </h3>
                  <span className="font-mono text-xs text-[#71717a]">
                    [0{idx + 1}]
                  </span>
                </div>
                <p className="text-xs text-[#52525b] font-light mb-6">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#f8f7f4] border border-black/[0.05] hover:bg-[#efece6] transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1 rounded-md bg-blue-50 text-blue-600 border border-blue-200">
                            <IconComponent size={14} />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-[#111113]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-[#71717a] tracking-wider">
                          {skill.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between font-mono text-[11px] text-[#71717a]">
                <span>{cat.skills.length} core competencies</span>
                <CheckCircle2 size={13} className="text-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
