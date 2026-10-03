import React from 'react';
import { ArrowUp, ArrowUpRight, Linkedin, MessageSquare, Mail } from 'lucide-react';
import { ProfileConfig } from '../types';
import { getSafeFiverrUrl, getSafeLinkedInUrl, getSafeEmailHref } from '../utils/urlHelper';

interface FooterProps {
  profile: ProfileConfig;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#121316] text-[#FAFAF8] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row: Identity & Quick Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-10 border-b border-white/10 gap-8">
          <div>
            <span className="text-xl font-bold tracking-tight text-white block mb-2">
              {profile.name}
            </span>
            <p className="text-sm text-[#94A3B8] max-w-md font-normal">
              {profile.title} — Designing and engineering modern, responsive websites for ambitious creators and forward-thinking businesses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={getSafeEmailHref(profile.email)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dedicated Social Links Area */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono-code text-[#94A3B8]">
              Social & Freelance Profiles
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Fiverr Social Link */}
            <a
              href={getSafeFiverrUrl(profile.fiverrUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold text-[#FAFAF8] bg-white/10 hover:bg-[#1DBF73] hover:text-white transition-all duration-200 group"
              title={`Fiverr Profile: ${profile.fiverrUrl}`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#1DBF73] group-hover:text-white" />
              <span>Fiverr</span>
              <ArrowUpRight className="w-3 h-3 text-[#94A3B8] group-hover:text-white transition-colors" />
            </a>

            {/* LinkedIn Social Link */}
            <a
              href={getSafeLinkedInUrl(profile.linkedinUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold text-[#FAFAF8] bg-white/10 hover:bg-[#0A66C2] hover:text-white transition-all duration-200 group"
              title={`LinkedIn Profile: ${profile.linkedinUrl}`}
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] group-hover:text-white" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#94A3B8] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom Footer Row: Navigation & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="font-mono-code text-[11px] text-[#64748B]">
            © 2026 Bakhtawar Zorain. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
