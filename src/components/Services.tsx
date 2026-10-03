import React from 'react';
import { ArrowUpRight, UserCheck, Layout, Building2, Smartphone, RefreshCw, CheckCircle2, MessageSquare } from 'lucide-react';
import { SERVICE_ITEMS } from '../data/portfolioData';
import { ProfileConfig } from '../types';
import { getSafeFiverrUrl } from '../utils/urlHelper';

interface ServicesProps {
  profile: ProfileConfig;
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ profile, onSelectService }) => {
  const handleInquireService = (title: string) => {
    onSelectService(title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Distinct icon and visual accent for each of the 5 services
  const serviceVisuals = [
    {
      icon: <UserCheck className="w-5 h-5 text-amber-800" />,
      accent: 'amber',
      keyFeature: 'Skills, Projects & Bio Showcase',
    },
    {
      icon: <Layout className="w-5 h-5 text-purple-700" />,
      accent: 'purple',
      keyFeature: 'Focused Layouts & Strong Presentation',
    },
    {
      icon: <Building2 className="w-5 h-5 text-emerald-700" />,
      accent: 'emerald',
      keyFeature: 'Clear Branding & Service Overviews',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue-700" />,
      accent: 'blue',
      keyFeature: 'Mobile, Tablet & Desktop Fluidity',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-orange-700" />,
      accent: 'orange',
      keyFeature: 'Cleaner Structure & Visual Hierarchy',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 hairline-b bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 hairline-b gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
              <span>04. Freelance Offerings</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-800 font-mono-code font-normal">Fiverr & Direct Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121316] text-balance">
              Services & <span className="font-serif-display italic font-normal">Web Solutions</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#64748B] max-w-md font-normal">
            Clean, modern and responsive website solutions tailored for personal portfolios, landing pages, small businesses, and layout modernizations.
          </p>
        </div>

        {/* Five Clean Professional Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_ITEMS.map((service, index) => {
            const visual = serviceVisuals[index] || serviceVisuals[0];
            const isLastOnLg = index === 4;

            return (
              <div
                key={service.id}
                className={`bg-white hairline-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group ${
                  isLastOnLg ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#FAFAF8] hairline-border group-hover:bg-[#121316] group-hover:text-white transition-colors duration-200">
                        {visual.icon}
                      </div>
                      <span className="text-[11px] font-mono-code text-[#64748B] uppercase tracking-wider">
                        {service.tag || `Service ${service.number}`}
                      </span>
                    </div>

                    <span className="text-2xl font-light font-mono-code text-[#CBD5E1] group-hover:text-[#121316] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#121316] mb-3 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>

                  {/* Required Short Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Subtle Visual Feature Pill */}
                  <div className="pt-4 hairline-t flex items-center gap-2 text-xs text-[#64748B] font-mono-code">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{visual.keyFeature}</span>
                  </div>
                </div>

                {/* Card Actions: Inquire & Fiverr */}
                <div className="mt-8 pt-4 hairline-t space-y-2">
                  <button
                    type="button"
                    onClick={() => handleInquireService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#121316] bg-[#FAFAF8] hover:bg-[#121316] hover:text-[#FAFAF8] hairline-border rounded-lg transition-all duration-200 cursor-pointer group/btn"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#64748B] group-hover/btn:text-white" />
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <a
                    href={getSafeFiverrUrl(profile.fiverrUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-mono-code text-[#059669] hover:text-[#047857] hover:underline transition-colors"
                  >
                    <span>Available on Fiverr</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer Commitment (Honest & Transparent) */}
        <div className="mt-12 bg-white hairline-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#121316]">
                Straightforward Collaboration
              </h4>
              <p className="text-xs text-[#64748B]">
                Clear communication, transparent project scopes, and responsive website delivery.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#121316] hover:bg-[#27272A] rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
