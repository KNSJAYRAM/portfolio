import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenCommandPalette }) {
  const [istTime, setIstTime] = useState('');

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

  return (
    <section id="top" className="relative min-h-[95vh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Top 3-Section Header: Intro Statement (Left) + Monospace Metadata (Center) + Sketch Portrait Card (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2 pb-6 sm:pb-10">
          
          {/* Left: Bio Summary Statement (Col 1-5) */}
          <div className="md:col-span-5 max-w-lg">
            <p className="text-sm sm:text-base md:text-lg text-[#3f3f46] font-normal leading-relaxed">
              <strong className="font-semibold text-[#111113]">
                Computer Science Engineering student
              </strong>{' '}
              at SRM University–AP and full-stack developer, passionate about building responsive web applications, engineering full-stack solutions, and exploring intelligent technologies.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-white bg-[#111113] hover:bg-black transition-all shadow-sm"
              >
                <span>Selected Work</span>
                <ArrowDown size={12} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono text-[#52525b] hover:text-[#111113] transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Center: Monospace Metadata & Live Coordinates (Col 6-8) */}
          <div className="md:col-span-4 space-y-1.5 font-mono text-xs uppercase tracking-wider text-[#71717a]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>
                <strong className="text-[#111113]">NOW</strong> — B.Tech CSE @ SRM University-AP
              </span>
            </div>
            <div>
              <span>BASED IN <strong className="text-[#111113]">AMARAVATI, INDIA</strong></span>
            </div>
            <div>
              <span>LOCAL TIME <strong className="text-[#111113]">{istTime ? `${istTime} IST` : '13:00 IST'}</strong></span>
            </div>
            <div>
              <span>CGPA <strong className="text-[#111113]">{personalInfo.cgpa}</strong> • CLASS OF 2028</span>
            </div>
          </div>

          {/* Right: Pencil Sketch Portrait Card (Col 9-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 flex justify-start md:justify-end"
          >
            <div className="relative group p-2 sm:p-2.5 bg-white rounded-2xl shadow-sm border border-black/[0.08] hover:shadow-md transition-all duration-300">
              <div className="w-36 sm:w-40 md:w-44 aspect-[4/5] rounded-xl overflow-hidden bg-[#faf8f5]">
                <img
                  src="/images/jayram-sketch.jpg"
                  alt="Kanamarlapudi Naga Sai Jayram — Portrait Sketch"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="mt-1.5 px-1 flex items-center justify-between text-[10px] font-mono text-[#71717a]">
                <span>PORTRAIT</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>VERIFIED</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Centerpiece: Monumental Display Name in Attractive Cursive Handwriting */}
        <div className="my-auto py-4 sm:py-8 overflow-visible">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cursive text-[#111113] select-none py-2"
          >
            <span className="block text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7rem] xl:text-[8.5rem] leading-[1.08] hover:text-black transition-colors pl-2 sm:pl-4">
              Kanamarlapudi
            </span>
            <span className="block text-[10.5vw] sm:text-[9vw] md:text-[7.6vw] lg:text-[6.5rem] xl:text-[8rem] leading-[1.08] text-right mt-1 sm:mt-3 pr-2 sm:pr-4 hover:text-black transition-colors">
              Naga Sai Jayram
            </span>
          </motion.h1>
        </div>

        {/* Bottom Horizontal Roles Bar Matching Reference Layout */}
        <div className="pt-6 border-t border-black/[0.08]">
          <ul className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#71717a] uppercase tracking-wider">
            <li className="flex items-center gap-1.5">
              <span className="text-[#111113] font-bold">01</span>
              <span>Full-Stack Developer</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#111113] font-bold">02</span>
              <span>Frontend Developer</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#111113] font-bold">03</span>
              <span>Software Engineering Enthusiast</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#111113] font-bold">04</span>
              <span>AI/ML Explorer</span>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#111113] font-semibold hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                <span>SCROLL</span>
                <span>↓</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
