import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  FileDown,
  Sparkles,
  Terminal,
} from "lucide-react";
import { playHoverSound, playClickSound, toggleSound } from "../utils/audio";

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    toggleSound(next);
    if (next) playClickSound();
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playClickSound();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050814]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#070b19] rounded-[10px] flex items-center justify-center font-bold text-cyan-400 group-hover:text-cyan-300">
                KC
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                Kavya <span className="text-cyan-400">Chalichemala</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Terminal className="w-3 h-3 text-cyan-400" /> AI & Data Science
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={playHoverSound}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full transition-colors relative hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Sound Toggle + Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleToggleSound}
              title={soundOn ? "Mute interactive audio" : "Enable interactive audio"}
              className="p-2.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            <button
              onClick={() => {
                playClickSound();
                onOpenResume();
              }}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" /> Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleToggleSound}
              className="p-2 rounded-lg bg-slate-800/60 border border-white/10 text-slate-300"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            <button
              onClick={() => {
                playClickSound();
                setIsOpen(!isOpen);
              }}
              className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#090e24]/95 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 font-medium text-sm transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  playClickSound();
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              >
                <FileDown className="w-4 h-4" /> View & Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
