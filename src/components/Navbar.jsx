import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, navLinks } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';

export default function Navbar({ onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [istTime, setIstTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setIstTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['top', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section === 'top' ? 'top' : section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f2efe8]/90 backdrop-blur-md border-b border-black/[0.06] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* Left: Authentic Handwritten Signature in dark ink + Live IST Time */}
          <a
            href="#top"
            className="group flex items-center gap-4 text-left focus:outline-none"
            aria-label="Jayram Home"
          >
            <div className="h-8 sm:h-9 w-28 sm:w-32 flex items-center">
              <img
                src={personalInfo.assets.signatureDark}
                alt="Jayram Signature"
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <span className="font-mono text-[11px] text-[#71717a] tracking-wider uppercase">
              IST {istTime ? istTime.slice(0, 5) : '13:00'}
            </span>
          </a>

          {/* Right Navigation: Minimal editorial links matching reference screenshot */}
          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-[#111113]">
              <a href="#about" className="hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">
                Work
              </a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">
                Experience
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* Quick Action / Command Palette */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenCommandPalette(true)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#111113] bg-black/[0.04] hover:bg-black/[0.08] border border-black/[0.08] transition-all"
                title="Search / Command menu (Ctrl+K)"
              >
                <Search size={12} className="text-zinc-600" />
                <span className="text-[11px] hidden sm:inline">Search</span>
                <kbd className="px-1 py-0.2 rounded bg-black/[0.06] text-[9px] text-zinc-600 font-mono">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-[#111113] hover:text-blue-600 focus:outline-none flex items-center gap-1 font-mono text-xs tracking-wider uppercase font-semibold"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="hidden sm:inline">MENU</span>
                <div className="flex flex-col gap-1 w-4">
                  <span className="h-0.5 w-full bg-[#111113]"></span>
                  <span className="h-0.5 w-full bg-[#111113]"></span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#f2efe8]/98 backdrop-blur-xl border-b border-black/[0.08] px-6 py-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="pb-2 border-b border-black/[0.06] flex items-center justify-between">
                <span className="font-mono text-xs text-[#71717a]">LOCAL TIME</span>
                <span className="font-mono text-xs font-medium text-[#111113]">{istTime} IST</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-display font-medium text-[#111113] hover:text-blue-600 border-b border-black/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-white bg-[#111113] shadow-md"
                >
                  <span>Let’s Connect</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
