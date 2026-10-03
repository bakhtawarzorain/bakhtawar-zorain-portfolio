import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, SlidersHorizontal } from 'lucide-react';
import { ProfileConfig } from '../types';
import { getSafeFiverrUrl, getSafeLinkedInUrl } from '../utils/urlHelper';

interface NavbarProps {
  profile: ProfileConfig;
  onOpenPersonalize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenPersonalize }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'skills', 'certifications', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF8]/90 backdrop-blur-md hairline-b transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Name / Wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-base sm:text-lg font-semibold tracking-tight text-[#121316] hover:opacity-80 transition-opacity flex items-center gap-2.5"
            aria-label={`${profile.name} - Home`}
          >
            <span>{profile.name}</span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
              title="Open for freelance web projects"
              aria-label="Available for work status"
            />
          </a>
        </div>

        {/* Clean, Modern Navigation Links: Home, About, Skills, Projects, Services, Contact */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#64748B]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors relative py-1.5 ${
                  isActive
                    ? 'text-[#121316] font-semibold after:w-full'
                    : 'hover:text-[#121316] after:w-0'
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#121316] hover:after:w-full after:transition-all after:duration-200`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={onOpenPersonalize}
            className="p-2 text-xs font-medium text-[#64748B] hover:text-[#121316] hover:bg-black/5 rounded-md transition-colors"
            title="Personalize portfolio details"
            aria-label="Personalize profile"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <a
            href={getSafeFiverrUrl(profile.fiverrUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FAFAF8] bg-[#121316] rounded-md hover:bg-[#27272A] hover:shadow-sm transition-all whitespace-nowrap active:scale-98"
            title={`Fiverr: ${profile.fiverrUrl}`}
          >
            <span>Fiverr Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold text-[#121316] bg-black/5 hover:bg-black/10 rounded-md transition-all whitespace-nowrap active:scale-98"
          >
            <span>Let's Talk</span>
          </a>

          {/* Smooth Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#121316] hover:bg-black/5 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#121316]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8] hairline-b px-5 py-6 space-y-4 shadow-lg transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base py-2.5 px-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-[#121316] font-semibold bg-black/5'
                      : 'text-[#475569] hover:text-[#121316] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 hairline-t flex flex-col gap-2.5">
            <a
              href={getSafeFiverrUrl(profile.fiverrUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#FAFAF8] bg-[#121316] rounded-md text-center"
            >
              <span>View Fiverr Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={getSafeLinkedInUrl(profile.linkedinUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#121316] bg-black/5 hover:bg-black/10 rounded-md text-center"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
