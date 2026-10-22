import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoadmapExperience from "./components/RoadmapExperience";
import Projects3D from "./components/Projects3D";
import SkillsMatrix from "./components/SkillsMatrix";
import EducationAndCertifications from "./components/EducationAndCertifications";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030612] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with 3D WebGL Canvas, Holographic Photo, and Metrics */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. Interactive Experience Roadmap (Featuring Aruvixa Tech Solutions & ISRO NRSC) */}
        <RoadmapExperience />

        {/* 3. 3D Tilt Projects Showcase & Architecture Modals */}
        <Projects3D />

        {/* 4. Categorized Technical Stack & Radar Matrix */}
        <SkillsMatrix />

        {/* 5. Academic Milestones & Industry Certifications */}
        <EducationAndCertifications />

        {/* 6. Contact Transmission & Direct Communication */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Viewer Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
