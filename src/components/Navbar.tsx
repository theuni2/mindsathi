"use client";

import React, { useState, useEffect } from "react";
import MindSaathiLogo from "./MindSaathiLogo";
import { Menu, X, ArrowRight, Download, HeartHandshake } from "lucide-react";

interface NavItem {
  label: string;
  hindiLabel: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", hindiLabel: "परिचय", href: "#about" },
  { label: "Workshops", hindiLabel: "वर्कशॉप्स", href: "#journey" },
  { label: "Free Toolkit", hindiLabel: "टूलकिट", href: "#toolkit" },
  { label: "Our Story", hindiLabel: "कहानी", href: "#story" },
  { label: "Impact", hindiLabel: "असर", href: "#impact" },
  { label: "Join Us", hindiLabel: "सहयोग", href: "#join" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFDF9]/95 backdrop-blur-md shadow-xs border-b border-[#EADFD0]"
            : "bg-[#FFFDF9] border-b border-transparent"
        }`}
      >
        {/* Top Announcement Bar */}
        <div className="bg-[#FAF0E4] border-b border-[#EEDFCD] px-4 py-1.5 text-xs text-[#705844] font-medium flex items-center justify-between">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E57657]/15 text-[#B54220] font-semibold text-[11px]">
                Youth-Led Initiative
              </span>
              <span className="hidden sm:inline">
                Making emotional wellbeing simple in spoken Hindi for underserved children
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="font-hindi font-semibold text-[#B54220] hidden md:inline">
                रुकें • सोचें • बोलें
              </span>
              <a
                href="#toolkit"
                className="inline-flex items-center gap-1 font-semibold text-[#B54220] hover:underline"
              >
                <span>Free Hindi Toolkit</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D95D39] rounded-lg p-1 -ml-1 transition-opacity hover:opacity-90"
            aria-label="MindSaathi Home"
          >
            <MindSaathiLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-2 text-sm font-semibold text-[#4A4036] hover:text-[#D95D39] transition-colors rounded-md"
              >
                <span>{item.label}</span>
                <span className="ml-1 text-[11px] font-hindi text-[#8E7E70] group-hover:text-[#D95D39]/80 transition-colors">
                  {item.hindiLabel}
                </span>
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-[#D95D39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#toolkit"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full border border-[#D8C7B5] text-[#5C4D3E] hover:bg-[#FAF3E8] hover:border-[#C4B29E] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#D95D39]" />
              <span>Get Toolkit</span>
            </a>
            <a
              href="#join"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-[#D95D39] text-white hover:bg-[#B54220] shadow-sm hover:shadow transition-all transform active:scale-95"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Bring to Community</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[#4A4036] hover:text-[#D95D39] hover:bg-[#FAF4EC] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D95D39]"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-[110px] z-40 bg-[#FFFDF9] border-b border-[#EADFD0] shadow-xl p-6 transition-all duration-200 animate-in fade-in slide-in-from-top-4"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#3A3026] hover:bg-[#FAF3E8] hover:text-[#D95D39] transition-all"
              >
                <span>{item.label}</span>
                <span className="font-hindi text-sm text-[#8E7E70] font-medium">
                  {item.hindiLabel}
                </span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#EEDFCD] flex flex-col gap-3">
              <a
                href="#toolkit"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#D8C7B5] text-sm font-semibold text-[#4A3C2F] bg-[#FAF5ED]"
              >
                <Download className="w-4 h-4 text-[#D95D39]" />
                <span>Download Free Hindi Toolkit</span>
              </a>
              <a
                href="#join"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D95D39] text-white text-sm font-bold shadow-md hover:bg-[#B54220]"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Bring MindSaathi to Your Community</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
