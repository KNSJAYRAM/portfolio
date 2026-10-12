import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData, certificationsData } from '../data/portfolioData';
import { Trophy, Award, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-28 relative border-t border-black/[0.08] bg-[#f2efe8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#71717a] uppercase tracking-widest font-semibold">
            06 // RECOGNITION & CERTIFICATIONS
          </span>
          <div className="h-px flex-1 bg-black/[0.08]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Achievements Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Trophy size={18} className="text-[#111113]" />
                <h3 className="font-display font-bold text-2xl text-[#111113]">
                  Academic Honors & Recognition
                </h3>
              </div>
              <p className="text-[#52525b] text-xs font-light mb-6">
                Institutional accolades earned through dedication to academic excellence and engineering rigor.
              </p>

              <div className="space-y-4">
                {achievementsData.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08] shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-medium text-blue-600 bg-blue-50 border border-blue-200">
                        {item.category}
                      </span>
                      <span className="font-mono text-xs text-[#71717a]">{item.institution}</span>
                    </div>
                    <h4 className="font-display font-semibold text-lg text-[#111113] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#52525b] font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award size={18} className="text-[#111113]" />
                <h3 className="font-display font-bold text-2xl text-[#111113]">
                  Verified Industry Certifications
                </h3>
              </div>
              <p className="text-[#52525b] text-xs font-light mb-6">
                Specialized programs completed in cloud-native generative AI and database architecture.
              </p>

              <div className="space-y-4">
                {certificationsData.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08] shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs text-[#71717a]">
                        {item.issuer}
                      </span>
                      <span className="font-mono text-[11px] text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-display font-semibold text-base sm:text-lg text-[#111113] mb-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#52525b] font-light">
                      <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                      <span>{item.focus}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
