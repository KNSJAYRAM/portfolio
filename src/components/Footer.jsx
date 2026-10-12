import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-black/[0.08] bg-[#f2efe8] text-[#71717a] text-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-black/[0.06]">
          <div>
            <div className="font-display font-bold text-lg text-[#111113] tracking-tight mb-1">
              {personalInfo.fullName}
            </div>
            <p className="text-[#52525b] font-light text-xs max-w-md">
              Computer Science Engineering student at SRM University–AP passionate about building high-performance web products, scalable systems, and intelligent technology.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium text-[#111113]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[#111113]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-600 transition-colors"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
            <span className="text-zinc-300">|</span>
            <span className="font-mono text-[11px] text-[#71717a]">
              {personalInfo.location}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[#71717a]">
              © {currentYear} {personalInfo.displayName}. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-black/[0.04] hover:bg-black/[0.08] text-[#111113] transition-colors text-[11px] font-mono"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
