import React from "react";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Layers,
  Code2,
} from "lucide-react";
import {
  personalInfo,
  experiencesRoadmap,
  projectsData,
  skillsData,
  educationData,
  certificationsData,
} from "../data/portfolioData";
import { playClickSound } from "../utils/audio";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-[#090e24] border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-slate-950/80 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Curriculum Vitae Preview // Kavya Chalichemala
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white print:text-black tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-cyan-400 font-mono text-sm mt-1 print:text-blue-700">
                  {personalInfo.title}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 print:text-slate-700 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed mt-4">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-blue-800 font-bold mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technical & Domain Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 print:bg-slate-100 border border-white/5 print:border-slate-300">
                <span className="font-bold text-white print:text-black block mb-1">Programming & Processing:</span>
                <span className="text-slate-300 print:text-slate-800">Python, SQL, Java, Pandas, NumPy, Scikit-learn</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 print:bg-slate-100 border border-white/5 print:border-slate-300">
                <span className="font-bold text-white print:text-black block mb-1">Data Analytics & BI:</span>
                <span className="text-slate-300 print:text-slate-800">Predictive Analytics, Data Visualization, Power BI, Tableau</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 print:bg-slate-100 border border-white/5 print:border-slate-300">
                <span className="font-bold text-white print:text-black block mb-1">Cloud, GIS & DevOps:</span>
                <span className="text-slate-300 print:text-slate-800">AWS, Salesforce DevOps, QGIS, Google Earth Engine, Bhuvan, Bhoonidhi</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 print:bg-slate-100 border border-white/5 print:border-slate-300">
                <span className="font-bold text-white print:text-black block mb-1">IoT & Embedded Systems:</span>
                <span className="text-slate-300 print:text-slate-800">ESP32, Raspberry Pi, Sensor Telemetry, Hardware Prototyping</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-blue-800 font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience & Research Internships
            </h2>

            <div className="space-y-6">
              {experiencesRoadmap.filter(e => e.id !== "future").map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/50 print:bg-white border border-white/10 print:border-slate-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white print:text-black text-sm sm:text-base">
                      {exp.role} — <span className="text-cyan-400 print:text-blue-800">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-cyan-300 print:text-slate-700 font-bold">
                      {exp.period} ({exp.shortPeriod})
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 print:text-slate-600 mb-3">
                    {exp.location} | {exp.badge}
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-blue-800 font-bold mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Selected Technical Projects
            </h2>

            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="p-4 rounded-xl bg-slate-900/50 print:bg-white border border-white/10 print:border-slate-300">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white print:text-black text-sm">
                      {project.title} — {project.subtitle}
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 print:text-emerald-700">
                      {project.impactMetric}
                    </span>
                  </div>
                  <ul className="space-y-1 list-disc list-inside text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                    {project.highlights.map((hl, hIdx) => (
                      <li key={hIdx}>{hl}</li>
                    ))}
                  </ul>
                  <div className="mt-2 text-[11px] font-mono text-cyan-400 print:text-blue-700">
                    Tech: {project.techStack.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-blue-800 font-bold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Education
              </h2>
              <div className="space-y-3 text-xs">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/40 print:bg-slate-50 border border-white/5 print:border-slate-200">
                    <div className="font-bold text-white print:text-black">{edu.institution}</div>
                    <div className="text-cyan-400 print:text-blue-800 font-semibold">{edu.degree}</div>
                    <div className="text-slate-400 print:text-slate-600 font-mono mt-0.5">
                      {edu.period} | Score: <strong>{edu.score}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-blue-800 font-bold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Certifications & Languages
              </h2>
              <div className="space-y-2 text-xs">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/40 print:bg-slate-50 border border-white/5 print:border-slate-200">
                    <div className="font-bold text-white print:text-black">{cert.title}</div>
                    <div className="text-purple-400 print:text-purple-700 font-mono">{cert.issuer}</div>
                  </div>
                ))}
                <div className="p-2.5 rounded-lg bg-slate-900/40 print:bg-slate-50 border border-white/5 print:border-slate-200">
                  <div className="font-bold text-white print:text-black">Languages:</div>
                  <div className="text-slate-300 print:text-slate-800 font-mono">Telugu (Native), English, Tamil, Hindi</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
