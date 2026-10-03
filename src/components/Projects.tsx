import React, { useState } from 'react';
import { ArrowUpRight, Eye, Monitor, Code, ExternalLink } from 'lucide-react';
import { PROJECT_ITEMS } from '../data/portfolioData';
import { ProjectItem, ProfileConfig } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  profile: ProfileConfig;
  onSelectService: (serviceName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ profile, onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'portfolio' | 'landing' | 'concept'>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECT_ITEMS
      : PROJECT_ITEMS.filter((item) => item.category === activeFilter);

  const getConceptSlug = (id: string) => {
    switch (id) {
      case 'project-01':
        return 'portfolio.concept/showcase';
      case 'project-02':
        return 'fashion.concept/lookbook';
      case 'project-03':
        return 'business.concept/interface';
      default:
        return 'concept.design/preview';
    }
  };

  const handleProjectButtonClick = (e: React.MouseEvent, project: ProjectItem) => {
    e.preventDefault();
    if (project.liveUrl && (project.liveUrl.startsWith('http://') || project.liveUrl.startsWith('https://'))) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Placeholder URL (e.g. PROJECT_1_URL_HERE) opens the interactive simulated viewer
      setActiveProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 hairline-b bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 hairline-b gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
              <span>03. Selected Works</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-800 font-mono-code font-normal">Personal Projects & Concepts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121316] text-balance">
              Featured <span className="font-serif-display italic font-normal">Web Projects</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F1F1EF] rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === 'all'
                  ? 'bg-white text-[#121316] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#121316]'
              }`}
            >
              All Works ({PROJECT_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveFilter('portfolio')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === 'portfolio'
                  ? 'bg-white text-[#121316] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#121316]'
              }`}
            >
              Portfolios
            </button>
            <button
              onClick={() => setActiveFilter('landing')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === 'landing'
                  ? 'bg-white text-[#121316] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#121316]'
              }`}
            >
              Landing Pages
            </button>
            <button
              onClick={() => setActiveFilter('concept')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === 'concept'
                  ? 'bg-white text-[#121316] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#121316]'
              }`}
            >
              Business Sites
            </button>
          </div>
        </div>

        {/* Project Cards Grid - Responsive, Interactive & Professional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white hairline-border rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Polished Visual Preview / Mockup Area with Browser Chrome */}
                <div
                  className="bg-[#F4F4F0] p-3 sm:p-4 border-b border-black/[0.06] cursor-pointer"
                  onClick={() => setActiveProject(project)}
                  title="Click to open interactive device preview"
                >
                  <div className="bg-white rounded-xl shadow-xs overflow-hidden hairline-border transition-all duration-300 group-hover:shadow-md">
                    {/* Minimal Browser Top Bar Chrome */}
                    <div className="bg-[#FAFAF8] px-3 py-2 flex items-center justify-between border-b border-black/[0.05]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E2E8F0] group-hover:bg-[#CBD5E1] transition-colors" />
                        <span className="w-2 h-2 rounded-full bg-[#E2E8F0] group-hover:bg-[#CBD5E1] transition-colors" />
                        <span className="w-2 h-2 rounded-full bg-[#E2E8F0] group-hover:bg-[#CBD5E1] transition-colors" />
                      </div>
                      
                      {/* Concept Address Bar Slug */}
                      <div className="bg-[#F1F1EF] px-2.5 py-0.5 rounded text-[10px] font-mono-code text-[#64748B] truncate max-w-[170px]">
                        https://{getConceptSlug(project.id)}
                      </div>

                      <div className="text-[10px] font-mono-code text-[#64748B] flex items-center gap-1">
                        <Monitor className="w-2.5 h-2.5 text-[#64748B]" />
                        <span>Responsive</span>
                      </div>
                    </div>

                    {/* High-Resolution Project Showcase Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#ECECE8]">
                      <img
                        src={project.image}
                        alt={`${project.title} - Visual Mockup`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Smooth Hover Scrim & Affordance */}
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <span className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#121316] bg-white rounded-md shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Project & Layout</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Editorial Information Area */}
                <div className="p-6 sm:p-7">
                  {/* Category & Concept Indicator */}
                  <div className="flex items-center justify-between mb-3 text-xs font-mono-code text-[#64748B]">
                    <span className="font-semibold text-amber-800">
                      {project.subtitle}
                    </span>
                    <span className="text-[11px] text-[#64748B] font-mono-code">
                      {project.client}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-[#121316] mb-3 group-hover:text-amber-800 transition-colors">
                    {project.title}
                  </h3>

                  {/* Required Exact Short Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {project.shortDesc}
                  </p>

                  {/* Technology Tags: HTML, CSS, JavaScript (Clean Unboxed Text with '·') */}
                  <div className="pt-4 hairline-t">
                    <span className="text-[11px] font-mono-code text-[#64748B] uppercase block mb-1.5">
                      Technologies
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#121316] font-medium font-mono-code">
                      {project.techTags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span className="hover:text-amber-800 transition-colors">{tag}</span>
                          {idx < project.techTags.length - 1 && (
                            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: "View Project" Button ready for real project URLs */}
              <div className="p-6 sm:p-7 pt-0">
                <a
                  href={project.liveUrl}
                  onClick={(e) => handleProjectButtonClick(e, project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#121316] bg-[#F4F4F0] hover:bg-[#121316] hover:text-[#FAFAF8] rounded-lg transition-all duration-200 transform active:scale-98 group/btn"
                  title={
                    project.liveUrl && (project.liveUrl.startsWith('http://') || project.liveUrl.startsWith('https://'))
                      ? `Open live site: ${project.liveUrl}`
                      : `View project (Placeholder: ${project.liveUrl})`
                  }
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Authentic Portfolio Quality Note */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs text-[#64748B] font-mono-code bg-white hairline-border px-4 py-2 rounded-full">
            <Code className="w-3.5 h-3.5 text-[#121316]" />
            <span>Personal design concepts & prototypes created with clean HTML, CSS and JavaScript</span>
          </div>
        </div>

      </div>

      {/* Full Responsive Case Study Modal */}
      <ProjectModal
        project={activeProject}
        profile={profile}
        onClose={() => setActiveProject(null)}
        onSelectService={onSelectService}
      />
    </section>
  );
};
