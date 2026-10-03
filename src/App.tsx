import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PersonalizeModal } from './components/PersonalizeModal';
import { DEFAULT_PROFILE } from './data/portfolioData';
import { ProfileConfig } from './types';

export default function App() {
  const [profile, setProfile] = useState<ProfileConfig>(() => {
    try {
      const saved = localStorage.getItem('aurafolio_profile_v4');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    return DEFAULT_PROFILE;
  });

  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');

  const handleSaveProfile = (newProfile: ProfileConfig) => {
    setProfile(newProfile);
    try {
      localStorage.setItem('aurafolio_profile_v4', JSON.stringify(newProfile));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServicePreset(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#121316] flex flex-col">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        profile={profile}
        onOpenPersonalize={() => setIsPersonalizeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero
          profile={profile}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* 2. ABOUT & MY APPROACH */}
        <About profile={profile} />

        {/* 3. SKILLS */}
        <Skills />

        {/* 4. CERTIFICATIONS */}
        <Certifications />

        {/* 5. PROJECTS */}
        <Projects
          profile={profile}
          onSelectService={handleSelectService}
        />

        {/* 5. SERVICES & ESTIMATOR */}
        <Services
          profile={profile}
          onSelectService={handleSelectService}
        />

        {/* 6. CONTACT */}
        <Contact
          profile={profile}
          selectedServicePreset={selectedServicePreset}
        />
      </main>

      {/* 7. FOOTER */}
      <Footer profile={profile} />

      {/* Personalization Modal for Fiverr/LinkedIn tailoring */}
      <PersonalizeModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
