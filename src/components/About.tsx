import React from 'react';
import { Layout, Smartphone, Globe, Sparkles, BookOpen, CheckCircle2, ArrowUpRight, Compass, Code2 } from 'lucide-react';
import { ProfileConfig } from '../types';

interface AboutProps {
  profile: ProfileConfig;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const whatIDoItems = [
    {
      title: 'Design clean and modern website interfaces',
      description: 'Focusing on intuitive visual structure, clear spacing, legible typography, and aesthetic simplicity.',
      icon: <Layout className="w-5 h-5 text-amber-800" />,
      tag: 'UI & Layout',
    },
    {
      title: 'Build responsive web pages',
      description: 'Crafting fluid layouts that look balanced and adapt naturally across mobile, tablet, and desktop screens.',
      icon: <Smartphone className="w-5 h-5 text-[#121316]" />,
      tag: 'Responsive Web',
    },
    {
      title: 'Create landing pages and portfolio websites',
      description: 'Developing focused, purposeful digital presentations tailored for personal brands, freelancers, and projects.',
      icon: <Globe className="w-5 h-5 text-emerald-700" />,
      tag: 'Web Presence',
    },
    {
      title: 'Explore AI tools and modern web technologies',
      description: 'Experimenting with generative AI tools, prompt design, and modern front-end workflows to enhance creativity.',
      icon: <Sparkles className="w-5 h-5 text-purple-700" />,
      tag: 'AI Exploration',
    },
  ];

  const focusSkills = [
    'JavaScript Foundations',
    'Modern Web Development',
    'Responsive UI Design',
    'Hands-on Project Practice',
  ];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 hairline-b bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Introduction */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-14 mb-16 sm:mb-20 pb-12 hairline-b">
          
          {/* Typographic Monogram & Identity Card (Zero stock photos or people) */}
          <div className="shrink-0 self-center lg:self-start">
            <div className="relative bg-white hairline-border rounded-2xl p-5 shadow-sm group text-center w-40 sm:w-48">
              <div className="w-full aspect-square rounded-xl bg-[#FAFAF8] hairline-border flex flex-col items-center justify-center p-3 shadow-inner">
                <span className="font-serif-display italic text-4xl sm:text-5xl text-[#121316] font-normal leading-none mb-1">
                  BZ
                </span>
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-amber-800 font-medium">
                  Web & AI
                </span>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs font-semibold text-[#121316] block">{profile.name}</span>
                <span className="text-[11px] text-[#64748B] font-mono-code block">Designer & Dev</span>
              </div>
            </div>
          </div>

          {/* Heading & Introduction Text */}
          <div className="flex-1 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
              <span>01. Professional Overview</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-800 font-mono-code font-normal">Fiverr & LinkedIn</span>
            </div>

            {/* Required Heading: "About Me" */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121316] mb-6 text-balance">
              About <span className="font-serif-display italic font-normal">Me</span>
            </h2>
            
            {/* Required Introduction Copy */}
            <p className="text-base sm:text-xl text-[#334155] leading-relaxed font-normal">
              I'm Bakhtawar Zorain, an aspiring web designer and developer with a growing interest in modern web technologies and artificial intelligence. I enjoy creating clean, responsive and visually engaging websites while continuously learning and improving my skills.
            </p>

            {/* Quick Value Metrics */}
            <div className="mt-8 pt-6 hairline-t flex flex-wrap items-center gap-6 text-xs text-[#64748B] font-mono-code">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Clean & Maintainable Code</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mobile-First Responsive Layouts</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Continuous Skill Development</span>
              </span>
            </div>
          </div>
        </div>

        {/* Section 1: "What I Do" */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 hairline-b gap-2">
            <div>
              <span className="text-xs font-mono-code text-amber-800 uppercase block mb-1">
                Core Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#121316] tracking-tight">
                What I Do
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-sm">
              Hands-on web design and development services geared toward clean aesthetics and seamless user experiences.
            </p>
          </div>

          {/* 4 Clean Cards with subtle hover animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDoItems.map((item) => (
              <div
                key={item.title}
                className="bg-white hairline-border rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[#FAFAF8] hairline-border group-hover:bg-[#121316] group-hover:text-white transition-colors duration-200">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono-code text-[#64748B] bg-[#F4F4F0] px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-[#121316] mb-2 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 hairline-t flex items-center gap-1.5 text-xs text-emerald-700 font-mono-code">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Available on Fiverr</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: "My Learning Journey" */}
        <div className="bg-white hairline-border rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle decorative background watermark */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <BookOpen className="w-48 h-48 text-[#121316]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3 text-amber-800">
              <BookOpen className="w-5 h-5" />
              <span className="text-xs font-mono-code uppercase tracking-wider font-semibold">
                Continuous Improvement
              </span>
            </div>

            {/* Required Subtitle: "My Learning Journey" */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#121316] mb-4 tracking-tight">
              My Learning Journey
            </h3>

            {/* Required Text Copy */}
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-6 font-normal">
              I'm continuously developing my skills through practical projects, online learning and hands-on experimentation. My current focus is improving my JavaScript, web development and UI design skills.
            </p>

            {/* Focus Topics Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 hairline-t">
              <span className="text-xs font-mono-code text-[#64748B] mr-1 block sm:inline">
                Active Focus:
              </span>
              {focusSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 text-xs text-[#121316] bg-[#FAFAF8] hairline-border px-3 py-1.5 rounded-lg font-mono-code shadow-2xs hover:bg-[#121316] hover:text-white transition-colors"
                >
                  <Code2 className="w-3 h-3 text-emerald-600" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
