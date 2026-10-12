import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import {
  ExternalLink,
  X,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  CheckCircle,
  Building2,
  Calendar
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects = projectsData.filter((p) => p.visible);

  const filteredProjects = visibleProjects.filter((p) => {
    if (activeFilter === 'web') return !p.isResearch;
    if (activeFilter === 'research') return p.isResearch;
    return true;
  });

  return (
    <section id="projects" className="py-24 sm:py-28 relative border-t border-black/[0.08] bg-[#f2efe8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#71717a] uppercase tracking-widest font-semibold">
            03 // SELECTED WORK & RESEARCH
          </span>
          <div className="h-px flex-1 bg-black/[0.08]"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111113] tracking-tight mb-3">
              Platforms developed & <span className="font-serif italic font-normal text-blue-600">investigations explored.</span>
            </h2>
            <p className="text-[#52525b] text-sm max-w-xl font-light">
              Engineering full-stack systems for student communities alongside computational research into thermal dissipation physics.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-black/[0.08] shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#111113] text-white font-medium shadow-sm'
                  : 'text-[#71717a] hover:text-[#111113]'
              }`}
            >
              All ({visibleProjects.length})
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all ${
                activeFilter === 'web'
                  ? 'bg-[#111113] text-white font-medium shadow-sm'
                  : 'text-[#71717a] hover:text-[#111113]'
              }`}
            >
              Web Platforms (2)
            </button>
            <button
              onClick={() => setActiveFilter('research')}
              className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all ${
                activeFilter === 'research'
                  ? 'bg-[#111113] text-white font-medium shadow-sm'
                  : 'text-[#71717a] hover:text-[#111113]'
              }`}
            >
              Research (1)
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isResearch = project.isResearch;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer rounded-2xl p-8 sm:p-9 transition-all flex flex-col justify-between group border relative overflow-hidden ${
                    isResearch
                      ? 'lg:col-span-12 bg-[#111113] text-white border-black shadow-xl hover:shadow-2xl'
                      : 'lg:col-span-6 bg-white text-[#111113] border-black/[0.08] shadow-sm hover:shadow-md hover:border-black/20'
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2.5">
                      {isResearch ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-300 bg-blue-500/20 border border-blue-400/30">
                          <FlaskConical size={13} className="text-blue-400" />
                          <span>RESEARCH EXPOSURE</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#52525b] bg-[#f4f2ec] border border-black/[0.06]">
                          <Building2 size={13} className="text-zinc-500" />
                          <span>{project.organization.split(',')[0]}</span>
                        </span>
                      )}
                    </div>
                    <span className={`font-mono text-xs ${isResearch ? 'text-zinc-400' : 'text-[#71717a]'}`}>
                      [0{idx + 1}]
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="mb-8">
                    <h3 className={`font-display font-bold text-2xl sm:text-3xl mb-2 transition-colors ${
                      isResearch ? 'text-white group-hover:text-blue-300' : 'text-[#111113] group-hover:text-blue-600'
                    }`}>
                      {project.title}
                    </h3>
                    <div className={`font-mono text-xs mb-4 ${isResearch ? 'text-blue-400' : 'text-blue-600'}`}>
                      {project.tagline}
                    </div>
                    <p className={`text-sm sm:text-base font-light leading-relaxed mb-6 ${
                      isResearch ? 'text-zinc-300' : 'text-[#52525b]'
                    }`}>
                      {project.description}
                    </p>

                    {/* Highlights preview */}
                    <ul className="space-y-2.5 mb-6">
                      {project.highlights.slice(0, isResearch ? 3 : 2).map((h, i) => (
                        <li key={i} className={`flex items-start gap-2.5 text-xs sm:text-sm font-light ${
                          isResearch ? 'text-zinc-300' : 'text-[#52525b]'
                        }`}>
                          <CheckCircle size={15} className={`mt-0.5 shrink-0 ${isResearch ? 'text-blue-400' : 'text-blue-600'}`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Chips + Specifications Link */}
                  <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
                    isResearch ? 'border-white/10' : 'border-black/[0.06]'
                  }`}>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                            isResearch
                              ? 'text-zinc-300 bg-white/5 border border-white/10'
                              : 'text-[#27272a] bg-[#f8f7f4] border border-black/[0.06]'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className={`px-2 py-1 rounded text-[11px] font-mono ${
                          isResearch ? 'text-zinc-400' : 'text-[#71717a]'
                        }`}>
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    <div className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                      isResearch ? 'text-blue-300 group-hover:text-white' : 'text-blue-600 group-hover:text-[#111113]'
                    }`}>
                      <span>View Specifications</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl rounded-2xl bg-white border border-black/[0.1] p-6 sm:p-9 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-[#111113]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-[#71717a] hover:text-[#111113] bg-black/[0.04] hover:bg-black/[0.08] transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-semibold">
                    {selectedProject.isResearch ? 'RESEARCH EXPLORATION' : 'ENGINEERING PROJECT'}
                  </span>
                  <span className="text-zinc-400">•</span>
                  <span className="font-mono text-xs text-[#71717a]">
                    {selectedProject.period}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111113] mb-2">
                  {selectedProject.title}
                </h3>
                <p className="font-mono text-xs text-[#52525b]">
                  {selectedProject.organization} • <strong className="text-[#111113]">{selectedProject.role}</strong>
                </p>
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-wider mb-2 font-semibold">
                  OVERVIEW
                </h4>
                <p className="text-sm sm:text-base text-[#3f3f46] font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Contributions & Highlights */}
              <div className="mb-8">
                <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-wider mb-3 font-semibold">
                  MY CONTRIBUTIONS & HIGHLIGHTS
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#3f3f46] font-light">
                      <CheckCircle size={16} className="text-blue-600 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-wider mb-3 font-semibold">
                  TECHNOLOGIES & TOOLING
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono text-[#27272a] bg-[#f4f2ec] border border-black/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-6 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs text-[#71717a]">
                  {selectedProject.isResearch
                    ? 'Scope: Ongoing research and literature synthesis under faculty mentorship'
                    : 'Repository: Code maintained in internal / club Git repos'}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.links?.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono text-[#111113] bg-black/[0.04] border border-black/[0.08] hover:bg-black/[0.08] transition-all"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub Profile</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-lg text-xs font-medium text-white bg-[#111113] hover:bg-black transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
