import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message (minimum 10 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (err) {}

    const mailSubject = encodeURIComponent(formData.subject.trim() || `Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Hello Jayram,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;

    setSubmitStatus({
      success: true,
      mailtoUrl: mailtoUrl,
      recipient: personalInfo.email
    });

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 sm:py-28 relative border-t border-black/[0.08] bg-[#f2efe8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#71717a] uppercase tracking-widest font-semibold">
            07 // GET IN TOUCH
          </span>
          <div className="h-px flex-1 bg-black/[0.08]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Headline, Bio & Verified Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#111113] tracking-tight leading-tight mb-4">
                Let’s build something <br />
                <span className="font-serif italic font-normal text-blue-600">
                  meaningful.
                </span>
              </h2>

              <p className="text-[#52525b] text-sm sm:text-base leading-relaxed font-light mb-8">
                I’m interested in software engineering, web development, emerging technologies, and opportunities to collaborate on useful products. Feel free to reach out.
              </p>

              {/* Verified Contact Details Cards */}
              <div className="space-y-3 mb-8">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-between gap-4 group hover:border-black/30 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0 border border-blue-200">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">EMAIL</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-[#111113] hover:text-blue-600 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-md text-[#71717a] hover:text-[#111113] bg-[#f8f7f4] hover:bg-[#efece6] transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-between gap-4 group hover:border-black/30 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0 border border-blue-200">
                      <Phone size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">PHONE</span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs sm:text-sm font-medium text-[#111113] hover:text-blue-600 transition-colors truncate block"
                      >
                        {personalInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-md text-[#71717a] hover:text-[#111113] bg-[#f8f7f4] hover:bg-[#efece6] transition-colors shrink-0"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#f8f7f4] text-[#71717a] shrink-0 border border-black/[0.05]">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">CAMPUS</span>
                      <span className="text-xs sm:text-sm font-medium text-[#111113]">
                        SRM University–AP, Amaravati, India
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold">
                    IST
                  </span>
                </div>

              </div>

              {/* Direct Social Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#111113] hover:bg-black shadow-sm transition-all flex items-center gap-2"
                >
                  <Mail size={14} />
                  <span>Email Me Directly</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-mono text-[#27272a] bg-white border border-black/[0.08] shadow-sm hover:border-black/20 transition-all flex items-center gap-1.5"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="text-zinc-500" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-mono text-[#27272a] bg-white border border-black/[0.08] shadow-sm hover:border-black/20 transition-all flex items-center gap-1.5"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="text-zinc-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-black/[0.06]">
                <MessageSquare size={17} className="text-[#111113]" />
                <h3 className="font-display font-semibold text-lg text-[#111113]">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="font-mono text-xs text-[#52525b] uppercase tracking-wider block mb-1.5 font-semibold">
                      Your Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#f8f7f4] border text-sm text-[#111113] placeholder-[#a1a1aa] focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-black/[0.08] focus:border-[#111113]'
                      }`}
                    />
                    {errors.name && (
                      <p className="font-mono text-[11px] text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-mono text-xs text-[#52525b] uppercase tracking-wider block mb-1.5 font-semibold">
                      Your Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#f8f7f4] border text-sm text-[#111113] placeholder-[#a1a1aa] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-black/[0.08] focus:border-[#111113]'
                      }`}
                    />
                    {errors.email && (
                      <p className="font-mono text-[11px] text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="font-mono text-xs text-[#52525b] uppercase tracking-wider block mb-1.5 font-semibold">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f8f7f4] border border-black/[0.08] text-sm text-[#111113] placeholder-[#a1a1aa] focus:outline-none focus:border-[#111113] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs text-[#52525b] uppercase tracking-wider block mb-1.5 font-semibold">
                    Message <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Jayram, I'd like to discuss an opportunity or project..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#f8f7f4] border text-sm text-[#111113] placeholder-[#a1a1aa] focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-black/[0.08] focus:border-[#111113]'
                    }`}
                  />
                  {errors.message && (
                    <p className="font-mono text-[11px] text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Feedback */}
                {submitStatus && (
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#27272a]">
                    <div className="flex items-center gap-2 font-medium text-blue-600 mb-1">
                      <Check size={14} />
                      <span>Message formatted & client triggered!</span>
                    </div>
                    <p className="text-[#52525b]">
                      Your default mail application has been opened with your message addressed to <span className="text-[#111113] font-mono">{submitStatus.recipient}</span>.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl text-sm font-medium text-white bg-[#111113] hover:bg-black shadow-sm transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Dispatch Message</span>
                  <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="font-mono text-[11px] text-[#71717a] text-center pt-2">
                  Direct connection to {personalInfo.email}
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* Clean Editorial Closeout (No signature image, clean typography) */}
        <div className="pt-16 border-t border-black/[0.08] flex flex-col items-center justify-center text-center">
          <p className="font-serif italic text-2xl sm:text-3xl text-[#111113] mb-2">
            “{personalInfo.signatureMotto}”
          </p>
          <span className="font-mono text-xs text-[#71717a] tracking-widest uppercase mt-1">
            KANAMARLAPUDI NAGA SAI JAYRAM • SRM UNIVERSITY–AP
          </span>
        </div>

      </div>
    </section>
  );
}
