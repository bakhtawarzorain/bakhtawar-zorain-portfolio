import React, { useState } from 'react';
import { X, Check, RotateCcw, Sparkles } from 'lucide-react';
import { ProfileConfig } from '../types';
import { DEFAULT_PROFILE } from '../data/portfolioData';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileConfig;
  onSave: (newProfile: ProfileConfig) => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileConfig>(profile);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(DEFAULT_PROFILE);
    onSave(DEFAULT_PROFILE);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="personalize-title"
    >
      <div
        className="bg-white rounded-xl hairline-border max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md text-[#64748B] hover:text-[#121316] hover:bg-black/5 transition-colors"
          aria-label="Close personalization dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-mono-code text-[#64748B] uppercase block mb-1">
            Portfolio Showcase Customizer
          </span>
          <h3 id="personalize-title" className="text-xl font-semibold text-[#121316]">
            Personalize Your Portfolio
          </h3>
          <p className="text-xs text-[#64748B] mt-1">
            Easily update the displayed name and links to match your personal Fiverr or LinkedIn profile.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full text-sm bg-[#FAFAF8] hairline-border rounded-md px-3 py-2 text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">
              Professional Title / Heading
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full text-sm bg-[#FAFAF8] hairline-border rounded-md px-3 py-2 text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">
              Hero Short Text (Tagline)
            </label>
            <textarea
              rows={2}
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full text-sm bg-[#FAFAF8] hairline-border rounded-md px-3 py-2 text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316] resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#121316] mb-1">
                Fiverr URL / Placeholder
              </label>
              <input
                type="text"
                value={formData.fiverrUrl}
                onChange={(e) => setFormData({ ...formData, fiverrUrl: e.target.value })}
                placeholder="FIVERR_LINK_HERE"
                className="w-full text-xs font-mono-code bg-[#FAFAF8] hairline-border rounded-md px-3 py-2 text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#121316] mb-1">
                LinkedIn URL / Placeholder
              </label>
              <input
                type="text"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                placeholder="LINKEDIN_LINK_HERE"
                className="w-full text-xs font-mono-code bg-[#FAFAF8] hairline-border rounded-md px-3 py-2 text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">
              Email Address / Placeholder
            </label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="EMAIL_HERE"
              className="w-full text-xs font-mono-code bg-[#FAFAF8] hairline-border rounded-md px-3 py-2 text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
            />
          </div>

          {/* Availability / Status */}
          <div>
            <label className="block text-xs font-semibold text-[#121316] mb-1">
              Availability Status
            </label>
            <input
              type="text"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              placeholder="Open for freelance web design & development projects"
              className="w-full text-xs font-mono-code bg-[#FAFAF8] hairline-border rounded-md px-3 py-2 text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
            />
          </div>

          <div className="pt-4 hairline-t flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#121316] font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-medium text-[#64748B] hover:text-[#121316] rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#121316] rounded-md hover:bg-[#27272A] transition-colors"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Profile</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
