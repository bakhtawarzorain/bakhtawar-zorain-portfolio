import React, { useState } from 'react';
import { X, Monitor, Tablet, Smartphone, ArrowUpRight, Check, Sparkles, ExternalLink } from 'lucide-react';
import { ProjectItem, ProfileConfig } from '../types';
import { getSafeFiverrUrl } from '../utils/urlHelper';

interface ProjectModalProps {
  project: ProjectItem | null;
  profile: ProfileConfig;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  profile,
  onClose,
  onSelectService,
}) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  const handleInquire = () => {
    onClose();
    onSelectService(project.title);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-white rounded-2xl hairline-border max-w-5xl w-full my-auto overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 hairline-b bg-[#FAFAF8]">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-semibold text-[#64748B]">
              {project.subtitle}
            </span>
            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
            <h3 id="modal-project-title" className="text-base sm:text-lg font-semibold text-[#121316]">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Viewport switcher */}
            <div className="hidden sm:flex items-center bg-[#F1F1EF] p-1 rounded-lg">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  viewportMode === 'desktop'
                    ? 'bg-white text-[#121316] shadow-2xs'
                    : 'text-[#64748B] hover:text-[#121316]'
                }`}
                title="Desktop View (1440px)"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewportMode('tablet')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  viewportMode === 'tablet'
                    ? 'bg-white text-[#121316] shadow-2xs'
                    : 'text-[#64748B] hover:text-[#121316]'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet</span>
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  viewportMode === 'mobile'
                    ? 'bg-white text-[#121316] shadow-2xs'
                    : 'text-[#64748B] hover:text-[#121316]'
                }`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#64748B] hover:text-[#121316] hover:bg-black/5 rounded-md transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Simulated Viewport Display Frame */}
          <div className="bg-[#F4F4F0] p-4 sm:p-6 rounded-xl hairline-border flex justify-center items-center min-h-[320px] sm:min-h-[420px]">
            <div
              className={`transition-all duration-300 ease-out bg-white rounded-lg shadow-xl overflow-hidden border border-black/10 flex flex-col ${
                viewportMode === 'desktop'
                  ? 'w-full max-w-4xl'
                  : viewportMode === 'tablet'
                  ? 'w-[520px] max-w-full'
                  : 'w-[320px] max-w-full'
              }`}
            >
              {/* Browser window chrome */}
              <div className="bg-[#EFEFEA] px-3 py-2 flex items-center justify-between border-b border-black/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                </div>
                <div className="bg-white/80 px-3 py-0.5 rounded text-[11px] font-mono-code text-[#64748B] truncate max-w-[200px]">
                  https://preview.portfolio/{project.id}
                </div>
                <div className="text-[10px] font-mono-code text-[#64748B] uppercase">
                  {viewportMode}
                </div>
              </div>

              {/* Showcase Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#E2E8F0]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Description & Features */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
                  Project Overview
                </h4>
                <p className="text-base text-[#121316] leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                  Key Technical Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-[#475569]">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                  Client Deliverables
                </h4>
                <ul className="space-y-2">
                  {project.deliverables.map((del) => (
                    <li key={del} className="flex items-center gap-2 text-xs sm:text-sm text-[#121316]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#121316]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 1 Col: Metadata & Action Card */}
            <div className="bg-[#FAFAF8] p-6 rounded-xl hairline-border flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono-code text-[#64748B] uppercase block mb-1">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#121316]">
                    {project.techTags.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < project.techTags.length - 1 && (
                          <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 hairline-t text-xs">
                  <div>
                    <span className="text-[#64748B] block font-mono-code">Project Type</span>
                    <span className="font-medium text-[#121316]">{project.client}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block font-mono-code">Project Link</span>
                    <span className="font-mono-code text-[11px] text-amber-800 font-medium truncate block max-w-[140px]" title={project.liveUrl}>
                      {project.liveUrl}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 hairline-t">
                {project.liveUrl && (project.liveUrl.startsWith('http://') || project.liveUrl.startsWith('https://')) ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#121316] rounded-md hover:bg-[#27272A] transition-colors"
                  >
                    <span>Open Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="text-center py-2 px-3 bg-[#F1F1EF] rounded-md text-[11px] font-mono-code text-[#64748B]">
                    Live Link: <span className="text-[#121316] font-semibold">{project.liveUrl}</span>
                  </div>
                )}

                <button
                  onClick={handleInquire}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#121316] bg-[#F4F4F0] hover:bg-[#EAEAE6] rounded-md transition-colors"
                >
                  <span>Inquire for Similar Design</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={getSafeFiverrUrl(profile.fiverrUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#059669] bg-white hairline-border rounded-md hover:bg-emerald-50 transition-colors"
                >
                  <span>Order on Fiverr (Placeholder)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
