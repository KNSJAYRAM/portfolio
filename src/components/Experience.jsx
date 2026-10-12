import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 relative border-t border-black/[0.08] bg-[#f2efe8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#71717a] uppercase tracking-widest font-semibold">
            04 // PROFESSIONAL EXPERIENCE
          </span>
          <div className="h-px flex-1 bg-black/[0.08]"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111113] tracking-tight mb-3">
              Internships & <span className="font-serif italic font-normal text-blue-600">core team leadership.</span>
            </h2>
            <p className="text-[#52525b] text-sm max-w-xl font-light">
              Demonstrated capability across frontend engineering, full-stack community architecture, and thermal physics research.
            </p>
          </div>
          <span className="font-mono text-xs text-[#71717a]">
            CHRONOLOGICAL TRACK RECORD
          </span>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-black/[0.1] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={`${item.organization}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-3.5 h-3.5 rounded-full bg-[#f2efe8] border-2 border-[#111113] group-hover:scale-125 transition-all" />

              {/* Card Container */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm hover:shadow-md hover:border-black/20 transition-all">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-blue-600 bg-blue-50 border border-blue-200 mb-2">
                      {item.badge}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111113] transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-[#3f3f46] mt-0.5">
                      {item.organization} <span className="text-zinc-400">•</span> <span className="text-[#71717a] font-normal">{item.institution}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#52525b] bg-[#f8f7f4] px-3 py-1 rounded-full border border-black/[0.06]">
                    <Calendar size={13} className="text-blue-600" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mt-5 pt-5 border-t border-black/[0.06]">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3f3f46] font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111113] mt-2 shrink-0 opacity-70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
