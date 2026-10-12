import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, personalInfo } from '../data/portfolioData';
import { Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 relative border-t border-black/[0.08] bg-[#f2efe8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Label Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#71717a] uppercase tracking-widest font-semibold">
            01 // ABOUT ME
          </span>
          <div className="h-px flex-1 bg-black/[0.08]"></div>
        </div>

        {/* Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          
          {/* Left Column: Big Statement & Philosophy Card */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111113] tracking-tight leading-tight">
              Engineering with purpose, <br />
              grounded in{' '}
              <span className="font-serif italic font-normal text-blue-600 text-4xl sm:text-5xl">
                rigor and craft.
              </span>
            </h2>

            {/* Philosophy Box inside White Card */}
            <div className="p-7 rounded-2xl bg-white border border-black/[0.08] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-5 opacity-5 group-hover:opacity-10 transition-opacity">
                <Compass size={64} className="text-black" />
              </div>
              <span className="font-mono text-[11px] text-[#71717a] tracking-widest uppercase block mb-3 font-semibold">
                GUIDING PHILOSOPHY
              </span>
              <p className="font-display font-medium text-xl text-[#111113] leading-snug">
                “{personalInfo.philosophy}”
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs text-[#52525b]">
              <div className="flex items-center justify-between py-2 border-b border-black/[0.06]">
                <span>Degree</span>
                <span className="text-[#111113] font-medium">B.Tech in Computer Science</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-black/[0.06]">
                <span>Institution</span>
                <span className="text-[#111113] font-medium">SRM University–AP</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-black/[0.06]">
                <span>Academic Standing</span>
                <span className="text-blue-600 font-bold">{personalInfo.cgpa} CGPA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-display text-xl sm:text-2xl text-[#27272a] font-normal leading-relaxed">
              {aboutData.intro}
            </p>

            <p className="text-sm sm:text-base text-[#52525b] font-light leading-relaxed">
              My engineering journey is driven by practical execution. Whether designing responsive client components with React.js, wiring backend APIs with Node.js and MongoDB, or evaluating convective heat dissipation mechanisms in electronic systems with ANSYS simulations, I prioritize clean architecture and practical utility.
            </p>

            {/* Focus areas pills */}
            <div className="pt-6 border-t border-black/[0.08]">
              <span className="font-mono text-xs text-[#71717a] uppercase tracking-widest block mb-4 font-semibold">
                TECHNICAL DISCIPLINES & RESEARCH EXPOSURE
              </span>
              <div className="flex flex-wrap gap-2.5">
                {aboutData.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono text-[#27272a] bg-white border border-black/[0.08] shadow-sm hover:border-black/30 transition-all"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Editorial Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-black/[0.08]">
          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#111113]">
              9.28<span className="text-blue-600 text-2xl font-light">/10</span>
            </div>
            <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
              Cumulative CGPA
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#111113]">
              04
            </div>
            <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
              Roles & Internships
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#111113]">
              2028
            </div>
            <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
              Expected Graduation
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl text-blue-600">
              SRM AP
            </div>
            <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider">
              Residential B.Tech CSE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
