"use client";

import React, { useState } from "react";
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Users,
  Eye,
  BookOpen,
  HelpCircle,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface WorkshopData {
  number: number;
  hindiTitle: string;
  transliteration: string;
  englishTitle: string;
  tagline: string;
  shortDescription: string;
  keyLearning: string;
  takeawayTool: string;
  takeawayToolDetail: string;
  themeColor: string;
  lightBg: string;
  borderColor: string;
  badgeColor: string;
  ageGroup: string;
  duration: string;
  format: string;
  flowSteps: { minute: string; title: string; desc: string }[];
  hindiQuote: string;
  englishQuote: string;
}

const workshops: WorkshopData[] = [
  {
    number: 1,
    hindiTitle: "रुको",
    transliteration: "RUKO",
    englishTitle: "Stop. Recognise what you are feeling.",
    tagline: "पहचानो अपने अंदर क्या चल रहा है",
    shortDescription:
      "Introduce children to different emotions and help them recognise what happens when they experience anger, sadness, frustration or happiness.",
    keyLearning:
      "Emotions begin in our body before they reach our words. Recognising physical signals (tight chest, clenched fists, butterfly stomach) allows us to hit pause before exploding or withdrawing.",
    takeawayTool: "5-सेकंड की शांत सांस और शरीर की घंटी (Body Signal Alarm)",
    takeawayToolDetail:
      "A tactile grounding exercise where children place one palm over their chest and one over their stomach, taking 5 slow breaths while unclenching their hands.",
    themeColor: "#D95D39",
    lightBg: "#FBECE6",
    borderColor: "#F4CEBF",
    badgeColor: "#B54220",
    ageGroup: "7–15 Years",
    duration: "60 Minutes",
    format: "Emotion Flashcard Match + Emotion Charades + Zero Lectures",
    flowSteps: [
      {
        minute: "0–10 min",
        title: "Icebreaker: The Emotion Mirror Game (भाव का आईना)",
        desc: "Children mimic facial expressions without speaking, laughing together as they normalize showing feelings.",
      },
      {
        minute: "10–25 min",
        title: "Flashcard Discovery: 'शरीर की घंटी' (Body Bells)",
        desc: "Using the 16 MindSaathi flashcards, children map where anger, fear, or sadness physically hits them.",
      },
      {
        minute: "25–45 min",
        title: "Interactive Story: 'जब समीर को आया गुस्सा' (When Sameer Felt Anger)",
        desc: "A shelter-relevant story showing what happens when feelings are recognized vs bottled up.",
      },
      {
        minute: "45–60 min",
        title: "Takeaway Tool Practice & Pocket Card",
        desc: "Each child tests the 5-second breath tool and receives their take-home pocket card.",
      },
    ],
    hindiQuote: "जब मुझे पता चलता है कि मुझे गुस्सा आ रहा है, तभी मैं उसे रोक सकता हूँ।",
    englishQuote: "Only when I realize anger is rising can I choose not to react blindly.",
  },
  {
    number: 2,
    hindiTitle: "सोचो",
    transliteration: "SOCHO",
    englishTitle: "Think. Understand your reactions and choices.",
    tagline: "भावना और प्रतिक्रिया के बीच का फासला",
    shortDescription:
      "Help children understand why they react in certain ways, explore the consequences of their choices and discover healthier ways to respond.",
    keyLearning:
      "Feeling an emotion is automatic and never wrong. But what we choose to do with that feeling is completely under our control. There is always a 'pause button' between the trigger and the reaction.",
    takeawayTool: "काल्पनिक 'पॉज़ बटन' और सोच का मोड़ (The 3-Second Pause Button)",
    takeawayToolDetail:
      "Children press their thumb against their palm as a physical anchor for a 3-second mental pause before replying, yelling, or walking away.",
    themeColor: "#DDA15E",
    lightBg: "#FEF7EB",
    borderColor: "#F3DEC0",
    badgeColor: "#9A6510",
    ageGroup: "7–15 Years",
    duration: "60 Minutes",
    format: "Choice Compass Scenarios + Real Shelter Dilemmas + Group Reflection",
    flowSteps: [
      {
        minute: "0–10 min",
        title: "Check-in: The 'Weather Today' Feeling Meter",
        desc: "Children describe their current mood using weather metaphors (sunny, stormy, cloudy, breezy).",
      },
      {
        minute: "10–30 min",
        title: "The Choice Fork (रास्ते दो हैं)",
        desc: "Presenting everyday shelter situations (a snatched pencil, an unfair turn) and exploring Path A (reactive) vs Path B (paused).",
      },
      {
        minute: "30–45 min",
        title: "The Magic 'Pause Button' Physical Drill",
        desc: "Children pair up to practice physical anchoring whenever simulated provocations occur.",
      },
      {
        minute: "45–60 min",
        title: "Reflecting on Consequences & Booklet Stamping",
        desc: "Children fill out their takeaway page with their personal 'trigger warning' and their chosen response.",
      },
    ],
    hindiQuote: "गुस्सा आना गलत नहीं है, पर गुस्से में किसी को चोट पहुँचाना मेरी पसंद है।",
    englishQuote: "Feeling angry is never a mistake, but hurting someone in anger is a choice I can change.",
  },
  {
    number: 3,
    hindiTitle: "बोलो",
    transliteration: "BOLO",
    englishTitle: "Speak. Express what you feel and ask for support.",
    tagline: "अपने मन की बात कहना और मदद मांगना",
    shortDescription:
      "Help children understand how to communicate their feelings, identify trusted people and learn how to share when they need help.",
    keyLearning:
      "Asking for help and naming vulnerability is a sign of courage, not weakness. Children learn to identify who belongs in their 'Safe Circle' and how to use non-accusatory sentences to express needs.",
    takeawayTool: "मेरा सुरक्षित घेरा (My Safe Circle Tree) + 3-Step Sharing Script",
    takeawayToolDetail:
      "A structured 3-part sentence formula: 'मुझे ___ लग रहा है, क्योंकि ___, और मुझे आपकी ___ में मदद चाहिए।' (I feel ___ because ___, and I need help with ___).",
    themeColor: "#457B67",
    lightBg: "#EBF2EE",
    borderColor: "#C5DDD1",
    badgeColor: "#265E4C",
    ageGroup: "7–15 Years",
    duration: "60 Minutes",
    format: "Safe Circle Tree Drawing + Partner Roleplay + Confidentiality Pledge",
    flowSteps: [
      {
        minute: "0–10 min",
        title: "The Trust Circle Warm-up (सुरक्षा का घेरा)",
        desc: "Affirming that nothing shared in this room will be mocked, repeated, or judged.",
      },
      {
        minute: "10–25 min",
        title: "Mapping 'मेरा सुरक्षित घेरा' (My Safe Circle)",
        desc: "Each child identifies 3 people they can talk to when things feel overwhelming (caretakers, teachers, peers).",
      },
      {
        minute: "25–45 min",
        title: "The 3-Sentence Magic Key (बात रखने का तरीका)",
        desc: "Practicing the simple formula to ask for help without crying or shouting in frustration.",
      },
      {
        minute: "45–60 min",
        title: "Closing Circle & 'MindSaathi Champion' Ribbon",
        desc: "Celebrating completion of the 3-part journey with certificates and ongoing community support.",
      },
    ],
    hindiQuote: "हमें लगा था कि दर्द अकेले सहना पड़ता है। अब हम जानते हैं कि किससे बात करनी है।",
    englishQuote: "We thought sadness had to be carried alone. Now we know who to speak with.",
  },
];

export default function JourneySection() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [expandedDetails, setExpandedDetails] = useState<number | null>(1);

  const toggleDetails = (num: number) => {
    setExpandedDetails(expandedDetails === num ? null : num);
  };

  return (
    <section
      id="journey"
      className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#EBDDCE] scroll-mt-20"
      aria-label="The Journey: Three Workshops"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E5D5C2] text-xs font-bold text-[#B54220] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#D95D39]" />
            <span>The Workshop Methodology • कार्यशाला श्रृंखला</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#25201B] tracking-tight">
            Three Steps. One Stronger Voice.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5A4E42] leading-relaxed">
            MindSaathi structures emotional wellbeing into three sequential,
            one-hour interactive workshops. Each stage builds directly on the previous
            one, taking a child from self-recognition to thoughtful choices and safe expression.
          </p>
        </div>

        {/* Connected Journey Visual Line & Step Indicators */}
        <div className="mt-12 sm:mt-16 relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden md:block absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-1 bg-gradient-to-r from-[#D95D39] via-[#DDA15E] to-[#457B67] rounded-full z-0 opacity-40"
            aria-hidden="true"
          />

          {/* 3 Step Progression Tabs */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((ws) => {
              const isActive = activeTab === ws.number;
              return (
                <button
                  key={ws.number}
                  type="button"
                  onClick={() => {
                    setActiveTab(ws.number);
                    setExpandedDetails(ws.number);
                  }}
                  className={`flex flex-col items-center p-5 rounded-2xl transition-all duration-300 text-center ${
                    isActive
                      ? "bg-white shadow-lg border-2 scale-102"
                      : "bg-[#FAF5EC]/70 hover:bg-white/80 border border-[#E8DACB]"
                  }`}
                  style={{
                    borderColor: isActive ? ws.themeColor : "#E8DACB",
                  }}
                >
                  {/* Step Number Circle */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: ws.themeColor }}
                  >
                    0{ws.number}
                  </div>

                  {/* Hindi & English Header */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="font-hindi text-2xl font-black text-[#25201B]">
                      {ws.hindiTitle}
                    </span>
                    <span className="text-xs font-bold text-[#766759] uppercase tracking-wider">
                      ({ws.transliteration})
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-[#6A5D50] line-clamp-1 font-medium">
                    {ws.englishTitle}
                  </p>

                  <span
                    className="mt-3 text-[11px] font-bold px-3 py-0.5 rounded-full"
                    style={{
                      backgroundColor: ws.lightBg,
                      color: ws.badgeColor,
                    }}
                  >
                    Workshop {ws.number} • 60 Mins
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Workshop Showcase Card */}
        {workshops.map((ws) => {
          if (ws.number !== activeTab) return null;

          return (
            <div
              key={ws.number}
              className="mt-10 rounded-3xl bg-white border-2 p-6 sm:p-10 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
              style={{ borderColor: ws.borderColor }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Summary & Content */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Badge Pill */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: ws.themeColor }}
                      >
                        STAGE {ws.number} OF 3
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF5ED] text-[#6A5D50] border border-[#EBDDCE]">
                        <Clock className="w-3.5 h-3.5 inline mr-1" />
                        {ws.duration}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF5ED] text-[#6A5D50] border border-[#EBDDCE]">
                        <Users className="w-3.5 h-3.5 inline mr-1" />
                        Ages {ws.ageGroup}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-hindi text-4xl sm:text-5xl font-black text-[#25201B]">
                        {ws.hindiTitle}
                      </h3>
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#766A5E]">
                        ({ws.transliteration})
                      </span>
                    </div>

                    <h4 className="mt-1 text-xl sm:text-2xl font-bold text-[#352B22]">
                      {ws.englishTitle}
                    </h4>

                    <p className="mt-3 text-base text-[#5A4E42] leading-relaxed">
                      {ws.shortDescription}
                    </p>

                    {/* Key Learning Box */}
                    <div
                      className="mt-6 p-4 sm:p-5 rounded-2xl border"
                      style={{
                        backgroundColor: ws.lightBg,
                        borderColor: ws.borderColor,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className="w-5 h-5"
                          style={{ color: ws.themeColor }}
                        />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#352B22]">
                          Key Learning Outcome • मुख्य सीख
                        </span>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-[#25201B] font-medium leading-relaxed">
                        {ws.keyLearning}
                      </p>
                    </div>

                    {/* Practical Takeaway Tool Box */}
                    <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DACB] shadow-2xs">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: ws.themeColor }}
                        >
                          🛠️
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#735A42]">
                          Practical Takeaway Tool • आज का उपाय
                        </span>
                      </div>
                      <h5 className="mt-1.5 text-base sm:text-lg font-bold text-[#25201B]">
                        {ws.takeawayTool}
                      </h5>
                      <p className="mt-1 text-xs sm:text-sm text-[#5C5044]">
                        {ws.takeawayToolDetail}
                      </p>
                    </div>

                    {/* Quote from Children */}
                    <div className="mt-6 p-4 rounded-xl bg-[#FAF5EB] border-l-4 border-l-[#D95D39] text-xs sm:text-sm text-[#4E4134]">
                      <p className="font-hindi font-medium italic text-[#25201B]">
                        &ldquo;{ws.hindiQuote}&rdquo;
                      </p>
                      <p className="mt-1 text-[11px] text-[#78695C] italic">
                        &ldquo;{ws.englishQuote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Toggle Lesson Flow Button */}
                  <div className="mt-6 pt-4 border-t border-[#EBDDCE] flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => toggleDetails(ws.number)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#B54220] hover:text-[#D95D39] transition-colors"
                    >
                      {expandedDetails === ws.number ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          <span>Hide 60-Minute Lesson Flow</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          <span>View Complete 60-Minute Lesson Flow</span>
                        </>
                      )}
                    </button>

                    <a
                      href="#toolkit"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#FAF0E4] text-[#B54220] hover:bg-[#F3E2D0] border border-[#E8D4BF] transition-all"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Download Workshop {ws.number} Hindi Script</span>
                    </a>
                  </div>
                </div>

                {/* Right Side: Visual Illustration of the Workshop Activity & Interactive Lesson Timeline */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Visual Workshop Stage Card */}
                  <div
                    className="rounded-2xl p-6 border flex flex-col items-center justify-center text-center relative overflow-hidden"
                    style={{
                      backgroundColor: ws.lightBg,
                      borderColor: ws.borderColor,
                    }}
                  >
                    {/* Artistic Graphic Representation */}
                    <div className="w-full max-w-[280px] h-[190px] flex items-center justify-center relative">
                      {ws.number === 1 && (
                        <svg
                          viewBox="0 0 200 160"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                          aria-label="Illustration for Ruko workshop: calm breathing and stop hand symbol"
                        >
                          <circle cx="100" cy="80" r="60" fill="#FFFFFF" />
                          <circle
                            cx="100"
                            cy="80"
                            r="50"
                            stroke="#D95D39"
                            strokeWidth="3"
                            strokeDasharray="4 4"
                          />
                          {/* Hand Stop Symbol */}
                          <path
                            d="M85 95V65C85 62 88 60 91 60C94 60 97 62 97 65V90M97 65V58C97 55 100 53 103 53C106 53 109 55 109 58V90M109 63V60C109 57 112 55 115 55C118 55 121 57 121 60V95C121 108 110 115 100 115C90 115 82 105 82 95V80C82 77 85 75 88 75C91 75 94 77 94 80V90"
                            stroke="#D95D39"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <text
                            x="100"
                            y="140"
                            fontSize="11"
                            fontWeight="bold"
                            fill="#B54220"
                            textAnchor="middle"
                            fontFamily="sans-serif"
                          >
                            5-SECOND CALM PAUSE
                          </text>
                        </svg>
                      )}

                      {ws.number === 2 && (
                        <svg
                          viewBox="0 0 200 160"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                          aria-label="Illustration for Socho workshop: choice compass and pause button"
                        >
                          <rect
                            x="40"
                            y="25"
                            width="120"
                            height="110"
                            rx="20"
                            fill="#FFFFFF"
                            stroke="#DDA15E"
                            strokeWidth="3"
                          />
                          {/* Pause Symbol */}
                          <rect
                            x="82"
                            y="55"
                            width="12"
                            height="40"
                            rx="5"
                            fill="#DDA15E"
                          />
                          <rect
                            x="106"
                            y="55"
                            width="12"
                            height="40"
                            rx="5"
                            fill="#DDA15E"
                          />
                          <text
                            x="100"
                            y="120"
                            fontSize="11"
                            fontWeight="bold"
                            fill="#9A6510"
                            textAnchor="middle"
                            fontFamily="sans-serif"
                          >
                            THINK BEFORE ACTING
                          </text>
                        </svg>
                      )}

                      {ws.number === 3 && (
                        <svg
                          viewBox="0 0 200 160"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                          aria-label="Illustration for Bolo workshop: safe speech bubble and trusted tree"
                        >
                          <circle cx="100" cy="80" r="60" fill="#FFFFFF" />
                          {/* Speech Bubble with Heart */}
                          <path
                            d="M65 75C65 58 80 45 100 45C120 45 135 58 135 75C135 92 120 105 100 105C94 105 88 103 83 100L65 107L70 92C67 87 65 81 65 75Z"
                            fill="#457B67"
                          />
                          <path
                            d="M93 72C93 69 96 66 100 66C104 66 107 69 107 72C107 77 100 83 100 83C100 83 93 77 93 72Z"
                            fill="#FFFFFF"
                          />
                          <text
                            x="100"
                            y="135"
                            fontSize="11"
                            fontWeight="bold"
                            fill="#265E4C"
                            textAnchor="middle"
                            fontFamily="sans-serif"
                          >
                            SAFE CIRCLE SPEECH
                          </text>
                        </svg>
                      )}
                    </div>

                    <div className="mt-2 text-xs font-bold text-[#45372B]">
                      {ws.format}
                    </div>
                  </div>

                  {/* 60-Minute Lesson Plan Breakdown (Expandable) */}
                  {expandedDetails === ws.number && (
                    <div className="rounded-2xl bg-[#FAF5EB] p-5 border border-[#E8DACB]">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#8A4A22] mb-3 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Interactive 60-Minute Structure</span>
                      </h5>
                      <div className="space-y-3">
                        {ws.flowSteps.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-[#524436]"
                          >
                            <span className="font-bold text-[#B54220] bg-white px-2 py-0.5 rounded-md border border-[#E8DACB] shrink-0">
                              {step.minute}
                            </span>
                            <div>
                              <strong className="text-[#25201B] block">
                                {step.title}
                              </strong>
                              <span className="text-[11px] text-[#695C50]">
                                {step.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Next Workshop Stepper Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="text-xs text-[#7A6C5E] font-medium">
            Jump to Workshop:
          </span>
          <div className="flex gap-2">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => {
                  setActiveTab(num);
                  setExpandedDetails(num);
                }}
                className={`w-9 h-9 rounded-full text-xs font-bold transition-all ${
                  activeTab === num
                    ? "bg-[#D95D39] text-white shadow-sm"
                    : "bg-white text-[#524436] border border-[#D9CABB] hover:bg-[#FAF4EC]"
                }`}
              >
                0{num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
