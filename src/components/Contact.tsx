import React, { useState } from 'react';
import { ArrowUpRight, Mail, Copy, Check, Send, MessageSquare, Linkedin } from 'lucide-react';
import { ProfileConfig } from '../types';
import { getSafeFiverrUrl, getSafeLinkedInUrl } from '../utils/urlHelper';

interface ContactProps {
  profile: ProfileConfig;
  selectedServicePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
      }
    } catch (err) {
      console.warn('Clipboard write prevented', err);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    if (profile.email === 'EMAIL_HERE') {
      e.preventDefault();
      handleCopyEmail();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);

    // If user provided a real email, trigger mailto
    if (profile.email && profile.email !== 'EMAIL_HERE') {
      const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi ${profile.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}\n`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 hairline-b bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Exact Requested Copy */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
            <span>05. Contact</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-800 font-mono-code font-normal">Direct Inquiries</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#121316] mb-6 text-balance">
            Let's Work Together
          </h2>
          
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            Have a website idea or project in mind? I'd love to hear about it and create something modern, responsive and user-friendly.
          </p>
        </div>

        {/* 3 Prominent Action Cards: Fiverr, LinkedIn, Email with Clear Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* 1. Fiverr Button Card */}
          <a
            href={getSafeFiverrUrl(profile.fiverrUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hairline-border rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 hover:border-[#1DBF73]/50 transition-all duration-300 group cursor-pointer"
            title={`Fiverr Profile: ${profile.fiverrUrl}`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#1DBF73]/10 flex items-center justify-center text-[#1DBF73] group-hover:bg-[#1DBF73] group-hover:text-white transition-colors duration-200">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-md bg-[#F4F4F0] text-[#64748B] group-hover:bg-[#121316] group-hover:text-white transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[#121316] mb-1.5 group-hover:text-[#047857] transition-colors">
                View My Fiverr
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Freelance gigs, custom web design orders, and secure project milestones.
              </p>
            </div>

            <div className="pt-4 hairline-t flex items-center justify-between">
              <span className="font-mono-code text-[11px] text-[#64748B] truncate max-w-[170px]">
                {profile.fiverrUrl}
              </span>
              <span className="text-xs font-semibold text-[#1DBF73] group-hover:underline">
                Open Fiverr →
              </span>
            </div>
          </a>

          {/* 2. LinkedIn Button Card */}
          <a
            href={getSafeLinkedInUrl(profile.linkedinUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hairline-border rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 hover:border-[#0A66C2]/50 transition-all duration-300 group cursor-pointer"
            title={`LinkedIn Profile: ${profile.linkedinUrl}`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-md bg-[#F4F4F0] text-[#64748B] group-hover:bg-[#121316] group-hover:text-white transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[#121316] mb-1.5 group-hover:text-[#0A66C2] transition-colors">
                Connect on LinkedIn
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Professional networking, collaboration inquiries, and career connections.
              </p>
            </div>

            <div className="pt-4 hairline-t flex items-center justify-between">
              <span className="font-mono-code text-[11px] text-[#64748B] truncate max-w-[170px]">
                {profile.linkedinUrl}
              </span>
              <span className="text-xs font-semibold text-[#0A66C2] group-hover:underline">
                Connect →
              </span>
            </div>
          </a>

          {/* 3. Email Button Card */}
          <div className="bg-white hairline-border rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 hover:border-[#121316]/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#121316]/10 flex items-center justify-center text-[#121316] group-hover:bg-[#121316] group-hover:text-white transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-md bg-[#F4F4F0] text-[#64748B] hover:text-[#121316] hover:bg-[#EAEAE6] transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <h3 className="text-lg font-semibold text-[#121316] mb-1.5 group-hover:text-amber-800 transition-colors">
                Send an Email
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Direct written communication for project scopes, quotes, and consultations.
              </p>
            </div>

            <div className="pt-4 hairline-t flex items-center justify-between">
              <span className="font-mono-code text-[11px] text-[#64748B] truncate max-w-[170px]">
                {profile.email}
              </span>
              <a
                href={profile.email !== 'EMAIL_HERE' ? `mailto:${profile.email}` : '#'}
                onClick={handleEmailClick}
                className="text-xs font-semibold text-[#121316] hover:underline"
              >
                {copied ? 'Copied!' : 'Write Email →'}
              </a>
            </div>
          </div>

        </div>

        {/* Clean, Simple, Responsive Contact Form (Name, Email, Message) */}
        <div className="bg-white hairline-border rounded-2xl p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-center justify-between pb-6 mb-8 hairline-b">
            <div>
              <h3 className="text-xl font-semibold text-[#121316]">
                Send a Message
              </h3>
              <p className="text-xs text-[#64748B] mt-1 font-mono-code">
                Fill in your details below to get in touch
              </p>
            </div>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded font-mono-code hidden sm:inline-block">
              ● Ready to Collaborate
            </span>
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-[#121316]">
                Message Received!
              </h4>
              <p className="text-sm text-[#475569] max-w-md mx-auto">
                Thank you for reaching out. Your message has been prepared. You can also connect directly on Fiverr or LinkedIn anytime!
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#121316] bg-[#F4F4F0] hover:bg-[#EAEAE6] rounded-md transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-[#121316] mb-2">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full text-sm bg-[#FAFAF8] hairline-border rounded-lg px-4 py-3 text-[#121316] placeholder:text-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#121316] transition-all"
                />
              </div>

              {/* Field 2: Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-[#121316] mb-2">
                  Your Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full text-sm bg-[#FAFAF8] hairline-border rounded-lg px-4 py-3 text-[#121316] placeholder:text-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#121316] transition-all"
                />
              </div>

              {/* Field 3: Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[#121316] mb-2">
                  Your Message or Website Idea *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, website goals, preferred timeline, or any reference websites you like..."
                  className="w-full text-sm bg-[#FAFAF8] hairline-border rounded-lg px-4 py-3 text-[#121316] placeholder:text-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#121316] resize-none transition-all"
                />
              </div>

              {/* Form Footer Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 hairline-t">
                <span className="text-xs text-[#64748B] font-mono-code">
                  No spam · Confidential communication
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold text-white bg-[#121316] hover:bg-[#27272A] rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all duration-200"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
