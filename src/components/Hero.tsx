import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Sparkles, Layers, Sliders, Monitor, Tablet, Smartphone, Terminal } from 'lucide-react';
import { ProfileConfig } from '../types';
import { getSafeFiverrUrl } from '../utils/urlHelper';

interface HeroProps {
  profile: ProfileConfig;
  onOpenPersonalize: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32 hairline-b">
      {/* Subtle ambient architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #121316 1px, transparent 1px), linear-gradient(to bottom, #121316 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy & Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed Kicker Header with Name and Availability */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#64748B] mb-5 tracking-wide">
              <span className="text-[#121316] font-semibold">{profile.name}</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span className="text-amber-800 font-mono-code font-normal">Personal Portfolio</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#121316]">Open for Freelance Work</span>
              </span>
            </div>

            {/* Primary Heading: Bakhtawar Zorain Visually Prominent */}
            <div className="mb-6 space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#121316] text-balance leading-[1.08]">
                <span className="block tracking-tight text-[#121316]">
                  {profile.name}
                </span>
                <span className="block font-serif-display italic font-normal text-2xl sm:text-4xl lg:text-5xl text-[#27272A] mt-2">
                  Creative Web Designer & Developer
                </span>
              </h1>
            </div>

            {/* Short Professional Tagline */}
            <p className="text-base sm:text-xl text-[#475569] leading-relaxed max-w-2xl mb-8 font-normal">
              Building clean, modern and responsive digital experiences.
            </p>

            {/* Buttons: "View My Work", "Let's Connect", and "Fiverr Profile" */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#FAFAF8] bg-[#121316] rounded-lg hover:bg-[#27272A] hover:shadow-md hover:-translate-y-0.5 transition-all transform active:scale-98 shadow-sm cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium text-[#121316] bg-white hairline-border rounded-lg hover:bg-[#F4F4F0] hover:shadow-sm hover:-translate-y-0.5 transition-all transform active:scale-98 shadow-2xs cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
              </button>

              <a
                href={getSafeFiverrUrl(profile.fiverrUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#059669] hover:text-[#047857] hover:underline transition-colors"
                title={`Fiverr Profile: ${profile.fiverrUrl}`}
              >
                <span>Fiverr Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Authentic Core Craftsmanship Values */}
            <div className="pt-8 hairline-t grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div>
                <span className="text-xs font-semibold text-[#121316] block uppercase tracking-wider mb-1 font-mono-code">
                  Modern Frontend
                </span>
                <span className="text-xs text-[#64748B] leading-relaxed block">
                  Semantic HTML5, CSS3 & modern JavaScript logic.
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#121316] block uppercase tracking-wider mb-1 font-mono-code">
                  Responsive Fluidity
                </span>
                <span className="text-xs text-[#64748B] leading-relaxed block">
                  Engineered seamlessly for mobile, tablet & desktop.
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#121316] block uppercase tracking-wider mb-1 font-mono-code">
                  Thoughtful UI
                </span>
                <span className="text-xs text-[#64748B] leading-relaxed block">
                  Visual hierarchy, whitespace & crisp typography.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Abstract Visual (Web Design & Technology) */}
          <div
            className="lg:col-span-5 relative flex justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
          >
            <div
              className="relative w-full max-w-[440px] rounded-3xl overflow-hidden hairline-border bg-white p-3.5 sm:p-4 shadow-xl transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
              }}
            >
              {/* Window Header Frame with Device Viewport Selector */}
              <div className="flex items-center justify-between px-3 py-2.5 border-b border-black/5 mb-3 bg-[#F8F8F6] rounded-t-xl">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                </div>

                <div className="flex items-center gap-1 bg-white hairline-border rounded-md px-1.5 py-0.5 shadow-2xs">
                  <button
                    onClick={() => setActiveDevice('desktop')}
                    className={`p-1 rounded text-xs transition-colors ${
                      activeDevice === 'desktop' ? 'bg-[#121316] text-white' : 'text-[#64748B] hover:text-[#121316]'
                    }`}
                    title="Desktop 1440px"
                    aria-label="Desktop viewport"
                  >
                    <Monitor className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => setActiveDevice('tablet')}
                    className={`p-1 rounded text-xs transition-colors ${
                      activeDevice === 'tablet' ? 'bg-[#121316] text-white' : 'text-[#64748B] hover:text-[#121316]'
                    }`}
                    title="Tablet 768px"
                    aria-label="Tablet viewport"
                  >
                    <Tablet className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => setActiveDevice('mobile')}
                    className={`p-1 rounded text-xs transition-colors ${
                      activeDevice === 'mobile' ? 'bg-[#121316] text-white' : 'text-[#64748B] hover:text-[#121316]'
                    }`}
                    title="Mobile 390px"
                    aria-label="Mobile viewport"
                  >
                    <Smartphone className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#64748B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {activeDevice === 'desktop' ? '1440 × 900' : activeDevice === 'tablet' ? '768 × 1024' : '390 × 844'}
                  </span>
                </div>
              </div>

              {/* The Abstract Digital Canvas */}
              <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl bg-[#FAFAF8] hairline-border overflow-hidden p-4 sm:p-5 flex flex-col justify-between shadow-inner">
                
                {/* Precision Isometric Architectural Grid Lines */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(to right, #121316 1px, transparent 1px), linear-gradient(to bottom, #121316 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                  aria-hidden="true"
                />

                {/* Ambient Radial Depth Glow */}
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Row: Mini Wireframe Blueprint Specimen */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs hairline-border rounded-xl p-3 shadow-xs">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="font-mono-code text-[11px] text-[#121316] font-medium">layout_engine.grid</span>
                    </div>
                    <span className="font-mono-code text-[10px] text-[#94A3B8]">12-col modular</span>
                  </div>

                  {/* Wireframe Bento Geometry Representation */}
                  <div className="grid grid-cols-12 gap-1.5 h-12">
                    <div className="col-span-8 bg-[#121316] rounded-md p-1.5 flex flex-col justify-between text-white">
                      <div className="w-12 h-1 bg-white/40 rounded-full" />
                      <div className="space-y-0.5">
                        <div className="w-20 h-1 bg-white/70 rounded-full" />
                        <div className="w-16 h-1 bg-white/30 rounded-full" />
                      </div>
                    </div>
                    <div className="col-span-4 bg-[#F4F4F0] rounded-md p-1.5 flex flex-col justify-between border border-black/5">
                      <div className="w-6 h-1 bg-[#121316]/40 rounded-full" />
                      <div className="w-8 h-1 bg-[#B45309]/60 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Middle Row: Floating CSS Architecture Card */}
                <div className="relative z-10 my-2 bg-[#121316] text-[#FAFAF8] rounded-xl p-3 shadow-md hairline-border border-white/10 font-mono-code text-[11px] leading-relaxed">
                  <div className="flex items-center justify-between text-[10px] text-[#94A3B8] pb-1.5 mb-1.5 border-b border-white/10">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-amber-400" />
                      <span>fluid_typography.css</span>
                    </span>
                    <span className="text-emerald-400">clean logic</span>
                  </div>
                  <div className="text-[#94A3B8]">
                    <span className="text-amber-400">.viewport</span> &#123;
                  </div>
                  <div className="pl-3 text-white/90">
                    display: <span className="text-purple-300">grid</span>;
                  </div>
                  <div className="pl-3 text-white/90">
                    font-size: <span className="text-emerald-300">clamp(1rem, 2.5vw, 2rem)</span>;
                  </div>
                  <div className="text-[#94A3B8]">&#125;</div>
                </div>

                {/* Bottom Row: Typography Specimen & Color System Tokens */}
                <div className="relative z-10 grid grid-cols-2 gap-2">
                  {/* Editorial Typography Scale Token */}
                  <div className="bg-white/90 backdrop-blur-xs hairline-border rounded-xl p-2.5 shadow-2xs flex items-center gap-3">
                    <span className="font-serif-display italic text-2xl text-[#121316] font-normal leading-none pl-1">
                      Aa
                    </span>
                    <div className="text-[10px] font-mono-code leading-tight text-[#64748B]">
                      <span className="text-[#121316] font-semibold block">Editorial</span>
                      <span>Instrument Serif</span>
                    </div>
                  </div>

                  {/* Palette Swatches */}
                  <div className="bg-white/90 backdrop-blur-xs hairline-border rounded-xl p-2.5 shadow-2xs flex flex-col justify-center">
                    <div className="flex items-center justify-between text-[10px] font-mono-code text-[#64748B] mb-1.5">
                      <span>Palette</span>
                      <span className="text-amber-800">5 tones</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#121316] border border-black/10" title="Obsidian #121316" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#FAFAF8] border border-black/15" title="Off-White #FAFAF8" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#B45309] border border-black/10" title="Warm Amber #B45309" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#059669] border border-black/10" title="Emerald #059669" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#64748B] border border-black/10" title="Slate #64748B" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Technical Detail Strip */}
              <div className="mt-3 px-3 py-1.5 flex items-center justify-between text-xs text-[#64748B] font-mono-code">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#121316]" />
                  <span>Digital Craftsmanship</span>
                </span>
                <span>Responsive Viewports</span>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md hairline-border rounded-xl p-3 shadow-lg max-w-[210px] hidden sm:block pointer-events-none z-10">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-semibold text-[#121316]">Creative & Technical</span>
              </div>
              <p className="text-[11px] text-[#64748B] leading-tight">
                Modern layouts built with semantic precision.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
