import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Command,
  ArrowRight,
  Copy,
  Check,
  Mail,
  Sparkles,
  Layers,
  GraduationCap,
  Briefcase,
  X
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState('');

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied('Email copied to clipboard!');
    try {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
    } catch (e) {}
    setTimeout(() => setCopied(''), 2000);
  };

  const handleAction = (callback) => {
    callback();
    onClose(false);
  };

  const items = [
    {
      category: 'Navigation',
      items: [
        { label: 'Jump to About Me', icon: Sparkles, action: () => window.location.assign('#about') },
        { label: 'Jump to Selected Projects', icon: Layers, action: () => window.location.assign('#projects') },
        { label: 'Jump to Technical Skills', icon: Layers, action: () => window.location.assign('#skills') },
        { label: 'Jump to Experience Timeline', icon: Briefcase, action: () => window.location.assign('#experience') },
        { label: 'Jump to Academic Profile', icon: GraduationCap, action: () => window.location.assign('#education') },
        { label: 'Jump to Contact', icon: Mail, action: () => window.location.assign('#contact') }
      ]
    },
    {
      category: 'Quick Actions',
      items: [
        { label: `Copy Email (${personalInfo.email})`, icon: Copy, action: handleCopyEmail },
        { label: 'Open GitHub Profile', icon: GithubIcon, action: () => window.open(personalInfo.github, '_blank') },
        { label: 'Open LinkedIn Profile', icon: LinkedinIcon, action: () => window.open(personalInfo.linkedin, '_blank') },
        {
          label: 'Celebrate / Easter Egg Confetti',
          icon: Sparkles,
          action: () => confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
        }
      ]
    }
  ];

  const filteredItems = items
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    }))
    .filter((group) => group.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-xl rounded-2xl bg-[#0c0d12] border border-white/10 shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08]">
              <Search size={18} className="text-blue-400 shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
              />
              <button
                onClick={() => onClose(false)}
                className="p-1 rounded text-zinc-500 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {copied && (
              <div className="px-5 py-2 bg-emerald-500/10 border-b border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <Check size={14} />
                <span>{copied}</span>
              </div>
            )}

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-3 space-y-4">
              {filteredItems.map((group) => (
                <div key={group.category}>
                  <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    {group.category}
                  </div>
                  <div className="space-y-1 mt-1">
                    {group.items.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={item.label}
                          onClick={() => handleAction(item.action)}
                          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-blue-400 group-hover:border-blue-500/40">
                              <IconComp size={14} />
                            </div>
                            <span>{item.label}</span>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filteredItems.length === 0 && (
                <div className="py-8 text-center text-xs font-mono text-zinc-500">
                  No commands matching "{query}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-2.5 bg-black/40 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 bg-white/[0.05] rounded border border-white/10 text-[10px]">
                  ESC to close
                </kbd>
              </div>
              <span>K.N.S. JAYRAM</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
