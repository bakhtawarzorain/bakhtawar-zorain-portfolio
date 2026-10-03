import React, { useState } from 'react';
import {
  Code,
  Layout,
  Palette,
  Terminal,
  Globe,
  Smartphone,
  Check,
  ChevronRight,
  X,
  Sparkles,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import { SKILL_ITEMS, CURRENTLY_LEARNING_ITEMS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'html':
        return <Code className="w-5 h-5 text-[#121316]" />;
      case 'css':
        return <Palette className="w-5 h-5 text-[#121316]" />;
      case 'javascript':
        return <Terminal className="w-5 h-5 text-[#121316]" />;
      case 'responsive-design':
        return <Smartphone className="w-5 h-5 text-[#121316]" />;
      case 'ui-design':
        return <Layout className="w-5 h-5 text-[#121316]" />;
      case 'website-development':
        return <Globe className="w-5 h-5 text-[#121316]" />;
      default:
        return <Code className="w-5 h-5 text-[#121316]" />;
    }
  };

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Strong':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
          dot: 'bg-emerald-500',
          label: 'Strong',
        };
      case 'Intermediate':
        return {
          bg: 'bg-sky-50 text-sky-800 border-sky-200/80',
          dot: 'bg-sky-500',
          label: 'Intermediate',
        };
      case 'Basic':
        return {
          bg: 'bg-amber-50 text-amber-900 border-amber-200/80',
          dot: 'bg-amber-500',
          label: 'Basic',
        };
      case 'Learning':
        return {
          bg: 'bg-stone-100 text-stone-700 border-stone-300',
          dot: 'bg-stone-400',
          label: 'Learning',
        };
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-32 hairline-b bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 hairline-b gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
              <span>02. Technical Skills</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-800 font-mono-code font-normal">Current Learning Level</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121316] text-balance">
              Skills & <span className="font-serif-display italic font-normal">Current Capabilities</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#64748B] max-w-md font-normal">
            An honest, transparent view of my current web design and front-end development capabilities as I continue building my craft.
          </p>
        </div>

        {/* 6 Core Skill Cards with Exact Levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_ITEMS.map((skill) => {
            const badge = getLevelBadge(skill.level);
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className="bg-white hairline-border rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSkill(skill);
                  }
                }}
                aria-label={`View details for ${skill.title} (${skill.level})`}
              >
                <div>
                  {/* Card Top: Icon + Accurate Level Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-lg bg-[#F4F4F0] group-hover:bg-[#121316] group-hover:text-white transition-colors duration-200">
                      <span className="group-hover:filter group-hover:invert">
                        {getSkillIcon(skill.id)}
                      </span>
                    </div>

                    {/* Accurate Level Indicator */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono-code border ${badge.bg}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                      <span className="font-semibold">{badge.label}</span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#121316] group-hover:text-amber-800 transition-colors">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {skill.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-6">
                    {skill.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-[#64748B]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer action affordance */}
                <div className="pt-4 hairline-t flex items-center justify-between text-xs font-medium text-[#121316] group-hover:text-amber-800">
                  <span>View code snippet & notes</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section: "Currently Learning" */}
        <div className="mt-16 sm:mt-20 pt-12 hairline-t">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code text-amber-800 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Active Growth & Study</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#121316] tracking-tight">
                Currently <span className="font-serif-display italic font-normal">Learning</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
              Skills and modern web topics I am actively practicing and deepening my knowledge in through courses, documentation, and real project builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CURRENTLY_LEARNING_ITEMS.map((item, index) => (
              <div
                key={item.title}
                className="bg-white hairline-border rounded-xl p-6 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-code text-xs text-amber-800 font-semibold">
                      0{index + 1}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono-code text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      <BookOpen className="w-3 h-3" />
                      <span>In Progress</span>
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-[#121316] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 hairline-t space-y-1.5">
                  <span className="text-[10px] font-mono-code text-[#64748B] uppercase block mb-1">
                    Focus Topics
                  </span>
                  {item.focusTopics.map((topic: string) => (
                    <div key={topic} className="flex items-center gap-2 text-xs text-[#121316]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedSkill(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-modal-title"
          >
            <div
              className="bg-white rounded-xl hairline-border max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-5 right-5 p-2 rounded-md text-[#64748B] hover:text-[#121316] hover:bg-black/5 transition-colors"
                aria-label="Close skill dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-[#F4F4F0]">
                  {getSkillIcon(selectedSkill.id)}
                </div>
                <div>
                  <h3 id="skill-modal-title" className="text-xl font-semibold text-[#121316]">
                    {selectedSkill.title}
                  </h3>
                  <div className="text-xs text-[#64748B] font-mono-code flex items-center gap-2">
                    <span>Level: <strong>{selectedSkill.level}</strong></span>
                    <span>·</span>
                    <span>{selectedSkill.focusArea}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {selectedSkill.fullDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                  Current Practice Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSkill.features.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#121316]">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedSkill.sampleCode && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#64748B]">
                      Code Sample ({selectedSkill.sampleCode.language})
                    </span>
                  </div>
                  <pre className="p-3.5 rounded-lg bg-[#121316] text-[#E2E8F0] font-mono-code text-xs overflow-x-auto leading-relaxed">
                    <code>{selectedSkill.sampleCode.snippet}</code>
                  </pre>
                </div>
              )}

              <div className="pt-4 hairline-t flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#121316] rounded-md hover:bg-[#27272A] transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
