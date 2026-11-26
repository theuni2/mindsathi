"use client";

import React, { useState } from "react";
import {
  Download,
  FileText,
  Layers,
  BookOpen,
  Sparkles,
  Search,
  Check,
  ExternalLink,
  X,
  FileCheck,
  Shield,
  HelpCircle,
  AlertCircle,
  Eye,
} from "lucide-react";

interface ResourceItem {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  category: "scripts" | "flashcards" | "activities" | "booklets" | "guides";
  categoryLabel: string;
  workshopCategory: "Workshop 1 (RUKO)" | "Workshop 2 (SOCHO)" | "Workshop 3 (BOLO)" | "Full Program";
  language: "Hindi" | "Hindi / English (Bilingual)" | "English";
  pagesOrCards: string;
  fileFormat: "Print-Ready PDF" | "Activity Sheet PDF" | "Facilitator Guide PDF";
  sampleExcerpt: string;
  badgeColor: string;
}

const resources: ResourceItem[] = [
  {
    id: "ws1-script",
    title: "Workshop 1 Facilitator Script: 'रुकें और पहचानें'",
    hindiTitle: "कार्यशाला १: रुकें और अपनी भावना को पहचानें",
    description:
      "Full verbatim 60-minute conversational Hindi facilitator script for Workshop 1. Includes icebreaker games, Body Bell mapping, and step-by-step facilitation prompts.",
    category: "scripts",
    categoryLabel: "Workshop Script",
    workshopCategory: "Workshop 1 (RUKO)",
    language: "Hindi",
    pagesOrCards: "8 Pages (A4)",
    fileFormat: "Facilitator Guide PDF",
    sampleExcerpt:
      "सुप्रभात बच्चों! आज हम कोई पढ़ाई नहीं करेंगे। आज हम एक खेल खेलेंगे जिसका नाम है 'भाव का आईना'। जब मैं कहूँ 'गुस्सा', तो बिना बोले सिर्फ चेहरे और हाथों से दिखाना है कि गुस्सा कैसा दिखता है...",
    badgeColor: "#D95D39",
  },
  {
    id: "ws2-script",
    title: "Workshop 2 Facilitator Script: 'सोचें और समझें'",
    hindiTitle: "कार्यशाला २: सोचें और अपने चुनाव को समझें",
    description:
      "Complete facilitation guide with relatable shelter dilemma stories, the 'Choice Fork' group game, and how to practice the 3-second physical Pause Button.",
    category: "scripts",
    categoryLabel: "Workshop Script",
    workshopCategory: "Workshop 2 (SOCHO)",
    language: "Hindi",
    pagesOrCards: "10 Pages (A4)",
    fileFormat: "Facilitator Guide PDF",
    sampleExcerpt:
      "मान लो किसी ने तुम्हारी कॉपी पर बिना पूछे पेंसिल चला दी। पहला रास्ता: उस पर चिल्लाना और लड़ाई करना। दूसरा रास्ता: 3 सेकंड का पॉज़ बटन दबाना। देखते हैं दोनों रास्तों में आगे क्या होता है...",
    badgeColor: "#DDA15E",
  },
  {
    id: "ws3-script",
    title: "Workshop 3 Facilitator Script: 'बोलें और साझा करें'",
    hindiTitle: "कार्यशाला ३: बोलें और सुरक्षित घेरा बनाएं",
    description:
      "Guidance on building emotional safety in the room, introducing the 'Safe Circle Tree' concept, and teaching the non-accusatory 3-step sharing script.",
    category: "scripts",
    categoryLabel: "Workshop Script",
    workshopCategory: "Workshop 3 (BOLO)",
    language: "Hindi",
    pagesOrCards: "9 Pages (A4)",
    fileFormat: "Facilitator Guide PDF",
    sampleExcerpt:
      "मदद मांगना कमज़ोरी नहीं, हिम्मत की बात है। जब मन भारी हो, तो हमें सही इंसान ढूँढना चाहिए। आज हम अपने सुरक्षित घेरे के ३ लोगों के नाम लिखेंगे...",
    badgeColor: "#457B67",
  },
  {
    id: "emotion-deck",
    title: "MindSaathi Emotion Flashcard Deck (16 Cards)",
    hindiTitle: "१६ भाव-पहचान फ्लैशकार्ड्स",
    description:
      "16 beautifully illustrated cards in spoken Hindi depicting core and secondary emotions with physical body indicators and relatable situational examples.",
    category: "flashcards",
    categoryLabel: "Emotion Flashcards",
    workshopCategory: "Full Program",
    language: "Hindi / English (Bilingual)",
    pagesOrCards: "16 Illustrated Cards",
    fileFormat: "Print-Ready PDF",
    sampleExcerpt:
      "कार्ड #०१: गुस्सा (Anger) • शरीर का संकेत: मुट्ठियाँ भींचना • आज का उपाय: ५ सेकंड की ठंडी सांस • बोलने का तरीका: 'मुझे गुस्सा आ रहा है, मुझे २ मिनट शांत होने दो।'",
    badgeColor: "#D95D39",
  },
  {
    id: "takeaway-booklet",
    title: "The MindSaathi Pocket Takeaway Booklet",
    hindiTitle: "बच्चों के लिए पॉकेट साथी पुस्तिका",
    description:
      "A printable, 8-page folding mini-booklet that children take home after the workshops. Summarizes RUKO, SOCHO, and BOLO with self-reflection prompts.",
    category: "booklets",
    categoryLabel: "Takeaway Booklet",
    workshopCategory: "Full Program",
    language: "Hindi",
    pagesOrCards: "8-Page Pocket Foldout",
    fileFormat: "Print-Ready PDF",
    sampleExcerpt:
      "यह पुस्तिका तुम्हारा साथी है। जब भी मन परेशान हो, पन्ना खोलें और अपना 'पॉज़ बटन' याद करें। मेरा सुरक्षित साथी कौन है? नाम: _________________",
    badgeColor: "#F4A261",
  },
  {
    id: "safe-circle-sheet",
    title: "Activity Pack: 'मेरा सुरक्षित घेरा' (My Safe Circle Tree)",
    hindiTitle: "गतिविधि पत्र: मेरा सुरक्षित घेरा",
    description:
      "Printable tree worksheet where children draw and write the names of 3 trusted adults and 1 peer they can turn to in moments of emotional distress.",
    category: "activities",
    categoryLabel: "Activity Pack",
    workshopCategory: "Workshop 3 (BOLO)",
    language: "Hindi / English (Bilingual)",
    pagesOrCards: "4 Printable Sheets",
    fileFormat: "Activity Sheet PDF",
    sampleExcerpt:
      "पेड़ की जड़ों में लिखो: वो चीजें जो तुम्हें सुरक्षित महसूस कराती हैं। शाखाओं पर लिखो: उन ३ लोगों के नाम जिनसे तुम मन की बात कर सकते हो।",
    badgeColor: "#457B67",
  },
  {
    id: "pause-badge-pack",
    title: "Visual Cue Badge: 3-Second Pause Button Printable",
    hindiTitle: "३-सेकंड पॉज़ बटन स्टीकर व बैज",
    description:
      "Dormitory and classroom visual anchor posters and printable sticker templates to remind children and staff to pause before reacting in conflict.",
    category: "activities",
    categoryLabel: "Activity Pack",
    workshopCategory: "Workshop 2 (SOCHO)",
    language: "Hindi / English (Bilingual)",
    pagesOrCards: "2 Poster Templates",
    fileFormat: "Print-Ready PDF",
    sampleExcerpt:
      "जब गुस्सा आए: १. रुको (हाथ ढीले करो) • २. सोचो (३ तक गिनो) • ३. बोलो (सही शब्द चुनो)। चिल्लाना नहीं, बात करना!",
    badgeColor: "#DDA15E",
  },
  {
    id: "facilitator-onboarding",
    title: "Youth Facilitator Handbook: Non-Judgmental Listening",
    hindiTitle: "युवा फैसिलिटेटर मार्गदर्शिका: संवेदनशीलता और सुरक्षा",
    description:
      "Essential guide for high school and college volunteers on shelter home dynamics, confidentiality rules, empathetic listening, and non-judgmental child interaction.",
    category: "guides",
    categoryLabel: "Facilitator Guide",
    workshopCategory: "Full Program",
    language: "English",
    pagesOrCards: "12 Pages (A4)",
    fileFormat: "Facilitator Guide PDF",
    sampleExcerpt:
      "Golden Rule: Never force a child to share. If a child crosses their arms and looks away, honour their boundary. Say: 'You can just listen today, and that is 100% wonderful.'",
    badgeColor: "#2A9D8F",
  },
];

export default function ToolkitSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalResource, setActiveModalResource] =
    useState<ResourceItem | null>(null);

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "scripts", label: "Workshop Scripts" },
    { id: "flashcards", label: "Emotion Flashcards" },
    { id: "activities", label: "Activity Packs" },
    { id: "booklets", label: "Takeaway Booklets" },
    { id: "guides", label: "Facilitator Guides" },
  ];

  const filteredResources = resources.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.workshopCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section
      id="toolkit"
      className="py-16 sm:py-24 bg-[#FAF5EB] border-t border-[#EBDDCE] scroll-mt-20"
      aria-label="Free Open Toolkit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Description */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5D5C2] text-xs font-bold text-[#B54220] uppercase tracking-wider mb-4 shadow-2xs">
            <Download className="w-4 h-4 text-[#D95D39]" />
            <span>Open-Access Resource Library • मुफ़्त टूलकिट</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#25201B] tracking-tight">
            Tools That Travel Beyond the Workshop.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5A4E42] leading-relaxed">
            Every child deserves access to emotional wellbeing resources. That&apos;s
            why all MindSaathi scripts, emotion flashcard decks, and takeaway activities
            are 100% free to download, print, and use in your community.
          </p>
        </div>

        {/* Search Bar & Category Filter Controls */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <label htmlFor="toolkit-search" className="sr-only">
                Search toolkit resources
              </label>
              <Search className="w-4 h-4 text-[#8E7E70] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="toolkit-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scripts, flashcards, activities..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D8C9B9] bg-white text-sm text-[#25201B] placeholder:text-[#9A8B7E] focus:outline-hidden focus:border-[#D95D39] focus:ring-2 focus:ring-[#D95D39]/20"
              />
            </div>

            {/* Quick Helper Note */}
            <div className="text-xs text-[#7A6C5E] font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#457B67]" />
              <span>Ready for A4 home or shelter printing</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-[#D95D39] text-white shadow-xs"
                      : "bg-white text-[#524436] border border-[#D8C9B9] hover:bg-[#FAF0E4]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="paper-card paper-card-hover rounded-2xl p-6 flex flex-col justify-between border border-[#E8DACB] bg-white"
            >
              <div>
                {/* Header Tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${res.badgeColor}18`,
                      color: res.badgeColor,
                    }}
                  >
                    {res.categoryLabel}
                  </span>
                  <span className="text-[11px] font-semibold text-[#87786B] bg-[#FAF5EB] px-2 py-0.5 rounded-md border border-[#E8DACB]">
                    {res.language}
                  </span>
                </div>

                {/* Resource Title & Hindi Subtitle */}
                <h3 className="font-bold text-base sm:text-lg text-[#25201B] leading-snug">
                  {res.title}
                </h3>
                <h4 className="mt-1 font-hindi text-sm font-semibold text-[#8C3F22]">
                  {res.hindiTitle}
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-[#5C5044] leading-relaxed line-clamp-3">
                  {res.description}
                </p>

                {/* Metadata Pills */}
                <div className="mt-4 pt-3 border-t border-[#F0E5D8] flex items-center justify-between text-xs text-[#7A6C5E]">
                  <span className="font-medium text-[#40352A]">
                    {res.pagesOrCards}
                  </span>
                  <span className="text-[11px] bg-[#FAF5EC] px-2 py-0.5 rounded-sm border border-[#EBDDCE]">
                    {res.workshopCategory}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-[#F0E5D8] flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalResource(res)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FAF0E4] hover:bg-[#F4E1CE] text-[#8C3F22] text-xs font-bold transition-all border border-[#E8D4BF]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview & Script</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModalResource(res)}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#D95D39] hover:bg-[#B54220] text-white text-xs font-bold transition-all shadow-xs"
                  title="Download resource PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Get PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="mt-12 text-center py-12 bg-white rounded-2xl border border-[#E8DACB]">
            <p className="text-base text-[#5C5044]">
              No resources matched your search query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-bold text-[#D95D39] hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Notice for PDF Storage & Contact for Print Bundles */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E8DACB] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-start gap-3">
            <span className="p-2 rounded-xl bg-[#FBECE6] text-[#D95D39] shrink-0 mt-0.5">
              <FileCheck className="w-5 h-5" />
            </span>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#25201B]">
                Want Custom Shelter Print Files or Bulk High-Res PDFs?
              </h4>
              <p className="mt-0.5 text-xs sm:text-sm text-[#66584B]">
                We can provide vector flashcard sheets formatted for local printing presses,
                laminated flashcard guidelines, or Hindi facilitator workshops.
              </p>
            </div>
          </div>
          <a
            href="#join"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#FAF0E4] hover:bg-[#F3DECB] text-[#8C3F22] text-xs font-bold border border-[#E8D4BF] transition-all"
          >
            Request Print Bundle
          </a>
        </div>
      </div>

      {/* Accessible Interactive Resource Preview & Download Modal */}
      {activeModalResource && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-resource-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-[#FFFDF9] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#EBDDCE] p-6 sm:p-8 shadow-2xl relative">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalResource(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#6E5F52] hover:bg-[#FAF0E4] hover:text-[#25201B] transition-colors"
              aria-label="Close resource modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${activeModalResource.badgeColor}20`,
                  color: activeModalResource.badgeColor,
                }}
              >
                {activeModalResource.categoryLabel}
              </span>
              <span className="text-xs text-[#7A6C5E] font-medium">
                • {activeModalResource.workshopCategory}
              </span>
            </div>

            <h3
              id="modal-resource-title"
              className="text-2xl font-extrabold text-[#25201B] leading-tight"
            >
              {activeModalResource.title}
            </h3>
            <h4 className="mt-1 font-hindi text-base font-bold text-[#8C3F22]">
              {activeModalResource.hindiTitle}
            </h4>

            <p className="mt-3 text-sm text-[#5C5044] leading-relaxed">
              {activeModalResource.description}
            </p>

            {/* Metadata Badges */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-[#FAF5EB] border border-[#E8DACB] text-xs text-[#524436]">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#87786B] block">
                  Language
                </span>
                <span className="font-bold text-[#25201B]">
                  {activeModalResource.language}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#87786B] block">
                  Format
                </span>
                <span className="font-bold text-[#25201B]">
                  {activeModalResource.fileFormat}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#87786B] block">
                  Scope
                </span>
                <span className="font-bold text-[#25201B]">
                  {activeModalResource.pagesOrCards}
                </span>
              </div>
            </div>

            {/* Sample Excerpt Preview */}
            <div className="mt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#735A42] flex items-center gap-1.5 mb-2">
                <FileText className="w-4 h-4 text-[#D95D39]" />
                <span>Sample Content Preview (Hindi Script Excerpt):</span>
              </span>
              <div className="p-4 rounded-xl bg-white border border-[#EADFD0] text-sm font-hindi text-[#25201B] leading-relaxed shadow-2xs">
                &ldquo;{activeModalResource.sampleExcerpt}&rdquo;
              </div>
            </div>

            {/* Placeholder Download Link Banner */}
            <div className="mt-6 p-4 rounded-xl bg-[#FFF5EE] border border-[#F4CEBF] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#D95D39] shrink-0 mt-0.5" />
              <div className="text-xs text-[#7A361C]">
                <strong>Download Slot Active:</strong> Official high-res PDFs and print bundles are ready for linking via cloud storage (Google Drive / S3 / Supabase). Click below to simulate download or copy resource reference.
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-[#EBDDCE] flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModalResource(null)}
                className="px-4 py-2.5 rounded-xl border border-[#D8C9B9] text-xs font-semibold text-[#524436] hover:bg-[#FAF4EC]"
              >
                Close Preview
              </button>

              <button
                type="button"
                onClick={() => {
                  alert(
                    `Download simulation: "${activeModalResource.title}" PDF placeholder is active. In production, this links directly to the downloadable PDF asset in /public/downloads/${activeModalResource.id}.pdf.`
                  );
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D95D39] hover:bg-[#B54220] text-white text-xs font-bold shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Placeholder PDF ({activeModalResource.pagesOrCards})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
