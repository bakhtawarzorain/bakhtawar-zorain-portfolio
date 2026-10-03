import React, { useState } from 'react';
import { Award, Cpu, Sparkles, ArrowUpRight, Calendar, Building2, Check, X, Maximize2, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { CERTIFICATION_ITEMS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 lg:py-32 hairline-b bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 hairline-b gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
              <span>03. Verified Credentials</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-800 font-mono-code font-normal">Coursework & Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121316] text-balance">
              Certifications & <span className="font-serif-display italic font-normal">Specialized Studies</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#64748B] max-w-md font-normal">
            Verified certificates of completion in Artificial Intelligence and Generative AI Studio, demonstrating continuous learning and technical mastery.
          </p>
        </div>

        {/* Certificate Cards Grid - High Fidelity Layout with Image Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {CERTIFICATION_ITEMS.map((cert, index) => (
            <article
              key={cert.id}
              className="bg-white hairline-border rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Certificate Visual Image Preview Area (Never Stretched or Distorted) */}
                <div
                  className="bg-[#F4F4F0] p-4 sm:p-6 border-b border-black/[0.06] cursor-pointer relative"
                  onClick={() => setSelectedCert(cert)}
                  title="Click to view certificate in larger view"
                >
                  <div className="bg-white rounded-xl shadow-xs overflow-hidden hairline-border transition-all duration-300 group-hover:shadow-md relative">
                    {/* Visual Certificate Frame maintaining exact 1200:850 aspect ratio */}
                    <div className="relative w-full aspect-[12/8.5] bg-[#FFFFFF] flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.image}
                        alt={`${cert.certificateName} - ${cert.issuer}`}
                        className="w-full h-full object-contain p-1 transform transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />

                      {/* Smooth Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#121316] bg-white rounded-lg shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Full Certificate</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Verification Badge */}
                  <div className="absolute top-7 right-7 sm:top-9 sm:right-9 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono-code font-semibold text-emerald-800 bg-white/95 backdrop-blur-xs rounded-md shadow-xs border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>

                {/* Certificate Details & Metadata */}
                <div className="p-6 sm:p-8">
                  {/* Field Category & Certificate Code */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4F4F0] text-[#121316]">
                      {index === 0 ? (
                        <Cpu className="w-3.5 h-3.5 text-amber-800" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                      )}
                      <span className="text-xs font-semibold font-mono-code">
                        {cert.field}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono-code text-[#64748B]">
                      Code: <strong className="text-[#121316] font-medium">{cert.code}</strong>
                    </span>
                  </div>

                  {/* Exact Certificate Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#121316] mb-3 group-hover:text-amber-800 transition-colors">
                    {cert.certificateName}
                  </h3>

                  {/* Issuer and Date Metadata Bar */}
                  <div className="bg-[#FAFAF8] hairline-border rounded-xl p-3.5 mb-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#64748B] block font-mono-code text-[11px]">Issuer</span>
                        <span className="font-semibold text-[#121316] block">{cert.issuer}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#64748B] block font-mono-code text-[11px]">Completion Date</span>
                        <span className="font-semibold text-[#121316] block">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {cert.description}
                  </p>

                  {/* Skills & Focus Areas */}
                  <div className="pt-4 hairline-t">
                    <span className="text-[11px] font-mono-code text-[#64748B] uppercase block mb-2">
                      Competencies Covered
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 text-xs text-[#121316] bg-[#F4F4F0] px-2.5 py-1 rounded-md font-mono-code"
                        >
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action: "View Certificate" Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-[#121316] bg-[#F4F4F0] hover:bg-[#121316] hover:text-[#FAFAF8] rounded-lg transition-all duration-200 transform active:scale-98 group/btn shadow-2xs hover:shadow-md cursor-pointer"
                  aria-label={`View certificate for ${cert.certificateName}`}
                >
                  <Award className="w-4 h-4" />
                  <span>View Certificate</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Larger View Certificate Modal (Lightbox) */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="bg-white rounded-2xl hairline-border max-w-4xl w-full p-4 sm:p-8 shadow-2xl relative max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 hairline-b">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#121316] text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="cert-modal-title" className="text-lg sm:text-xl font-semibold text-[#121316]">
                    {selectedCert.certificateName}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#64748B] font-mono-code">
                    <span>{selectedCert.issuer}</span>
                    <span>·</span>
                    <span>Issued: {selectedCert.date}</span>
                    <span>·</span>
                    <span>Code: {selectedCert.code}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-2 text-[#64748B] hover:text-[#121316] hover:bg-black/5 rounded-lg transition-colors"
                aria-label="Close certificate dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large High-Resolution Certificate Image (Unstretched & Undistorted) */}
            <div className="bg-[#FCFCFA] hairline-border rounded-xl p-2 sm:p-4 mb-5 flex items-center justify-center shadow-inner">
              <div className="w-full aspect-[12/8.5] max-w-3xl flex items-center justify-center bg-white rounded-lg shadow-sm overflow-hidden hairline-border">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.certificateName} - Official Certificate`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-[#64748B] font-mono-code text-center sm:text-left">
                Official Credential Verification · Code: <strong className="text-[#121316]">{selectedCert.code}</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#121316] bg-[#F4F4F0] hover:bg-[#EAEAE6] rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Resolution</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#121316] hover:bg-[#27272A] rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
