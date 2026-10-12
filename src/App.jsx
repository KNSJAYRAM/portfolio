import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { Command } from 'lucide-react';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f2efe8] text-[#111113] font-sans overflow-x-hidden selection:bg-[#111113] selection:text-[#f2efe8]">
      {/* Main Website Structure */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenCommandPalette={setCommandPaletteOpen} />
        
        <main id="main-content" className="flex-1">
          <Hero onOpenCommandPalette={setCommandPaletteOpen} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Interactive Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={setCommandPaletteOpen}
      />

      {/* Floating Quick Action Pill */}
      <button
        onClick={() => setCommandPaletteOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 hover:bg-white border border-black/10 hover:border-black/30 text-xs font-mono text-[#111113] shadow-lg backdrop-blur-md transition-all group hover:scale-105"
        title="Quick Search & Navigation (Ctrl+K)"
      >
        <Command size={13} className="text-[#111113] group-hover:rotate-12 transition-transform" />
        <span className="text-[11px] text-[#71717a]">Menu</span>
        <kbd className="px-1.5 py-0.5 rounded bg-black/[0.06] text-[9px] text-[#111113] border border-black/10">
          ⌘K
        </kbd>
      </button>
    </div>
  );
}
