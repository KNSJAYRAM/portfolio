import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28 relative border-t border-black/[0.08] bg-[#f2efe8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#71717a] uppercase tracking-widest font-semibold">
            05 // ACADEMIC PROFILE & EDUCATION
          </span>
          <div className="h-px flex-1 bg-black/[0.08]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Academic Degree Card */}
          <div className="lg:col-span-6 p-8 sm:p-9 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={140} className="text-black" />
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-600 bg-blue-50 border border-blue-200">
                  UNDERGRADUATE DEGREE
                </span>
                <span className="font-mono text-xs text-[#71717a]">
                  {educationData.period}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111113] mb-2">
                {educationData.institution}
              </h3>
              
              <div className="text-base text-[#27272a] font-medium mb-1">
                {educationData.degree}
              </div>

              <div className="font-mono text-xs text-[#71717a] mb-8">
                {educationData.location} • {educationData.expectedGraduation}
              </div>

              {/* CGPA Callout */}
              <div className="p-5 rounded-xl bg-[#f8f7f4] border border-black/[0.06] flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] text-blue-600 uppercase tracking-wider block font-semibold">
                    CUMULATIVE GRADE POINT AVERAGE
                  </span>
                  <span className="text-xs text-[#52525b]">
                    Consistent top-tier academic standing across semesters
                  </span>
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-[#111113]">
                  {educationData.cgpa}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center gap-2 text-xs font-mono text-[#52525b]">
              <CheckCircle size={14} className="text-blue-600" />
              <span>Full-Time Residential Engineering Program • Amaravati Campus</span>
            </div>
          </div>

          {/* Core Computer Science Coursework */}
          <div className="lg:col-span-6 p-8 sm:p-9 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={18} className="text-blue-600" />
                <h4 className="font-display font-semibold text-xl text-[#111113]">
                  Relevant Engineering Coursework
                </h4>
              </div>
              
              <p className="text-xs text-[#52525b] font-light mb-6">
                Curriculum syllabus focused on algorithms, systems design, computational logic, and database management:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationData.coursework.map((course, i) => (
                  <div
                    key={course}
                    className="p-3.5 rounded-xl bg-[#f8f7f4] border border-black/[0.05] hover:bg-[#efece6] transition-all flex items-center gap-2.5"
                  >
                    <span className="font-mono text-[10px] text-blue-600 font-semibold">
                      0{i + 1}
                    </span>
                    <span className="text-xs font-medium text-[#111113]">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] font-mono text-[11px] text-[#71717a] flex items-center justify-between">
              <span>Department of Computer Science & Engineering</span>
              <span>SRM AP</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
