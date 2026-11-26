"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  Sparkles,
  Heart,
  Smile,
  ShieldCheck,
  Compass,
  MessageCircle,
  HelpCircle,
  Play,
  RotateCcw,
} from "lucide-react";

interface EmotionItem {
  id: string;
  hindi: string;
  english: string;
  color: string;
  bgLight: string;
  bodySignal: string;
  bodySignalEn: string;
  tool: string;
  toolEn: string;
  icon: string;
  dialogueHindi: string;
  dialogueEn: string;
}

const emotionList: EmotionItem[] = [
  {
    id: "anger",
    hindi: "गुस्सा / क्रोध",
    english: "Anger",
    color: "#D95D39",
    bgLight: "#FBECE6",
    bodySignal: "मुट्ठियाँ भींचना, छाती में तेज़ धड़कन, गाल गर्म होना",
    bodySignalEn: "Clenched fists, rapid heartbeat, warm cheeks",
    tool: "5-सेकंड की ठंडी सांस + हाथों को ढीला छोड़ना",
    toolEn: "5-second cooling breath + unclenching palms",
    icon: "🔥",
    dialogueHindi: "मुझे गुस्सा आ रहा है, पर मैं चिल्लाऊँगा नहीं। मैं 3 सेकंड रुकूँगा।",
    dialogueEn: "I feel anger rising, but I won't shout. I will pause for 3 seconds.",
  },
  {
    id: "sadness",
    hindi: "उदासी / भारीपन",
    english: "Sadness",
    color: "#457B67",
    bgLight: "#EBF2EE",
    bodySignal: "गले में गाँठ, कंधे झुके हुए, अकेले बैठने का मन",
    bodySignalEn: "Lump in throat, heavy shoulders, wanting to sit alone",
    tool: "अपने सुरक्षित साथी या शिक्षक से 'भारीपन' साझा करना",
    toolEn: "Sharing the 'heavy feeling' with a safe circle companion",
    icon: "🌧️",
    dialogueHindi: "मेरा दिल भारी लग रहा है। क्या आप 2 मिनट मेरी बात सुन सकते हैं?",
    dialogueEn: "My heart feels heavy today. Can you listen to me for 2 minutes?",
  },
  {
    id: "fear",
    hindi: "डर / घबराहट",
    english: "Fear / Worry",
    color: "#E76F51",
    bgLight: "#FDEEE9",
    bodySignal: "पेट में हलचल, पैरों में कंपन, तेज़ सांसें",
    bodySignalEn: "Butterflies in stomach, trembling feet, shallow breathing",
    tool: "ज़मीन पर दोनों पैर जमाना (5-4-3-2-1 ग्राउंडिंग)",
    toolEn: "Grounding both feet firmly on the floor + noticing 5 sights",
    icon: "⚡",
    dialogueHindi: "मुझे थोड़ा डर लग रहा है, और यह डर होना बिल्कुल सामान्य है।",
    dialogueEn: "I feel scared right now, and it is completely okay to feel scared.",
  },
  {
    id: "confusion",
    hindi: "उलझन / समझ न आना",
    english: "Confusion",
    color: "#F4A261",
    bgLight: "#FEF4EB",
    bodySignal: "माथे पर सिकुड़न, विचारों की तेज़ दौड़, तय न कर पाना",
    bodySignalEn: "Furrowed brows, racing thoughts, unable to choose",
    tool: "कागज़ पर भावना का चित्र बनाना या 'पॉज़ बटन' दबाना",
    toolEn: "Drawing the tangled thoughts or pressing the mental 'Pause Button'",
    icon: "🌀",
    dialogueHindi: "मुझे सब उलझा हुआ लग रहा है। मुझे थोड़ा समय चाहिए।",
    dialogueEn: "Everything feels tangled. I just need a moment to think.",
  },
  {
    id: "joy",
    hindi: "ख़ुशी / हल्कापन",
    english: "Joy / Relief",
    color: "#2A9D8F",
    bgLight: "#E6F4F1",
    bodySignal: "चेहरे पर मुस्कान, शरीर में हल्कापन, ऊर्जा का अहसास",
    bodySignalEn: "Relaxed smile, lightness in chest, vibrant energy",
    tool: "किसी दोस्त के साथ यह ख़ुशी बांटना और शुक्रिया कहना",
    toolEn: "Celebrating with a friend and practicing gratitude",
    icon: "🌱",
    dialogueHindi: "आज मेरा मन बहुत हल्का और सुरक्षित महसूस कर रहा है।",
    dialogueEn: "Today my heart feels light, safe, and happy.",
  },
];

export default function HeroSection() {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionItem>(
    emotionList[0]
  );

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#FFFDF9]"
      aria-label="Hero and Introduction"
    >
      {/* Decorative Warm Background Blobs */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#FDE8DF]/60 via-[#FEF3D6]/70 to-[#EBF2EE]/60 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Campaign Badge */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#E8DACB] shadow-xs text-xs font-semibold text-[#874A27] tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#D95D39]" />
            <span>A Youth-Led Emotional Wellbeing Initiative Founded in Mumbai</span>
            <span className="hidden sm:inline text-[#D8CCC0]">|</span>
            <span className="hidden sm:inline font-hindi text-[#B54220] font-bold">
              एक नई शुरुआत
            </span>
          </div>

          {/* Hindi Campaign Pillar Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            <span className="font-hindi text-base sm:text-lg font-bold px-4 py-1.5 rounded-2xl bg-[#FBECE6] text-[#B54220] border border-[#F4CEBF] shadow-xs">
              १. रुकें (Ruko)
            </span>
            <span className="text-[#B54220] font-bold">→</span>
            <span className="font-hindi text-base sm:text-lg font-bold px-4 py-1.5 rounded-2xl bg-[#FEF6DE] text-[#9A7010] border border-[#F4E3AD] shadow-xs">
              २. सोचें (Socho)
            </span>
            <span className="text-[#9A7010] font-bold">→</span>
            <span className="font-hindi text-base sm:text-lg font-bold px-4 py-1.5 rounded-2xl bg-[#EBF2EE] text-[#265E4C] border border-[#C5DDD1] shadow-xs">
              ३. बोलें (Bolo)
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#25201B] tracking-tight leading-[1.1] max-w-5xl">
            <span className="text-[#D95D39] font-hindi font-black tracking-normal block sm:inline">
              Ruko. Socho. Bolo.
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-medium text-[#65574A] mt-2 sm:mt-1">
              Stop. Think. Speak.
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#3F362C] max-w-3xl">
            &ldquo;Every feeling has a name. Every child deserves to know it.&rdquo;
          </p>

          {/* Supporting Description */}
          <p className="mt-4 text-base sm:text-lg text-[#5C5044] max-w-2xl leading-relaxed">
            MindSaathi makes emotional wellbeing simple, relatable and accessible
            through practical tools in everyday spoken Hindi. Built for children aged
            7–15 in shelter homes.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#journey"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D95D39] text-white font-bold text-sm sm:text-base hover:bg-[#B54220] shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <span>Explore Our Journey</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#toolkit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#3E342B] font-bold text-sm sm:text-base border border-[#D9CABB] hover:bg-[#FAF4EB] hover:border-[#C4B2A0] shadow-xs transition-all"
            >
              <Download className="w-4 h-4 text-[#D95D39]" />
              <span>Download Free Resources</span>
            </a>

            <a
              href="#join"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#FAF3E7] text-[#874A27] font-semibold text-sm sm:text-base border border-[#E6D4BF] hover:bg-[#F3E8D3] transition-all"
            >
              <Heart className="w-4 h-4 text-[#E76F51]" />
              <span>Bring to Your Community</span>
            </a>
          </div>
        </div>

        {/* Visual Storytelling Canvas: Children in Circle Illustration & Interactive Speech Badges */}
        <div className="mt-12 lg:mt-16 relative">
          <div className="paper-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8DACB] bg-white shadow-xl relative overflow-hidden">
            {/* Background Texture & Subtle Grid Accent */}
            <div
              className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D95D39_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual Scene of Children & Story Illustration */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B54220] bg-[#FBECE6] px-3 py-1 rounded-full">
                    A Safe Circle for Every Child • सुरक्षित घेरा
                  </span>
                  <span className="text-xs text-[#827467] font-medium hidden sm:inline">
                    Interactive • 1-Hour Sessions • No Jargon
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#25201B] leading-tight">
                  No Clinical Jargon. No Lectures. Just Safe, Everyday Hindi.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#615447] leading-relaxed">
                  In shelter homes, emotions often run high while words run out.
                  MindSaathi turns abstract psychology into tangible flashcards,
                  interactive story scenarios, and same-day coping habits.
                </p>

                {/* SVG Visual Illustration of Children Sharing Feelings */}
                <div className="mt-6 relative bg-gradient-to-br from-[#FFFBF5] to-[#F7EFE4] rounded-2xl p-6 border border-[#EBDDCE]">
                  <svg
                    viewBox="0 0 600 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto drop-shadow-xs"
                    aria-label="Illustration of children in a supportive circle expressing feelings with speech bubbles"
                    role="img"
                  >
                    {/* Circle Rug / Ground Mat */}
                    <ellipse
                      cx="300"
                      cy="190"
                      rx="260"
                      ry="40"
                      fill="#EFE4D3"
                      stroke="#E0D1BD"
                      strokeWidth="2"
                    />

                    {/* Connecting Empathy Ring */}
                    <ellipse
                      cx="300"
                      cy="190"
                      rx="210"
                      ry="30"
                      stroke="#D95D39"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      opacity="0.4"
                    />

                    {/* Child 1 (Left - Priya, expressing sadness & listening) */}
                    <g transform="translate(100, 70)">
                      <circle cx="40" cy="40" r="26" fill="#F4A261" />
                      <circle cx="33" cy="38" r="3" fill="#25201B" />
                      <circle cx="47" cy="38" r="3" fill="#25201B" />
                      <path
                        d="M34 48 Q40 52 46 48"
                        stroke="#25201B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Body */}
                      <path
                        d="M15 110 C15 75 65 75 65 110 Z"
                        fill="#457B67"
                      />
                      <rect
                        x="24"
                        y="66"
                        width="32"
                        height="8"
                        rx="4"
                        fill="#376353"
                      />
                    </g>

                    {/* Child 2 (Center - Rahul, holding the Pause Card) */}
                    <g transform="translate(255, 50)">
                      <circle cx="45" cy="40" r="28" fill="#E9C46A" />
                      <circle cx="37" cy="38" r="3.5" fill="#25201B" />
                      <circle cx="53" cy="38" r="3.5" fill="#25201B" />
                      <path
                        d="M36 46 Q45 54 54 46"
                        stroke="#25201B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Body */}
                      <path
                        d="M15 130 C15 80 75 80 75 130 Z"
                        fill="#D95D39"
                      />
                      {/* Holding Pause Flashcard */}
                      <rect
                        x="30"
                        y="95"
                        width="30"
                        height="20"
                        rx="4"
                        fill="#FFFFFF"
                        stroke="#B54220"
                        strokeWidth="2"
                      />
                      <text
                        x="45"
                        y="109"
                        fontSize="9"
                        fontWeight="bold"
                        fill="#B54220"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        PAUSE
                      </text>
                    </g>

                    {/* Child 3 (Right - Amit, speaking safely) */}
                    <g transform="translate(410, 70)">
                      <circle cx="40" cy="40" r="26" fill="#F4A261" />
                      <circle cx="33" cy="38" r="3" fill="#25201B" />
                      <circle cx="47" cy="38" r="3" fill="#25201B" />
                      <path
                        d="M35 48 Q40 44 45 48"
                        stroke="#25201B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Body */}
                      <path
                        d="M15 110 C15 75 65 75 65 110 Z"
                        fill="#2A9D8F"
                      />
                    </g>

                    {/* Expressive Speech Bubbles */}
                    {/* Bubble 1: RUKO */}
                    <g transform="translate(70, 15)">
                      <rect
                        x="0"
                        y="0"
                        width="120"
                        height="38"
                        rx="16"
                        fill="#FFFFFF"
                        stroke="#D95D39"
                        strokeWidth="2"
                      />
                      <polygon points="40,38 48,48 54,38" fill="#FFFFFF" />
                      <text
                        x="60"
                        y="23"
                        fontSize="12"
                        fontWeight="bold"
                        fill="#B54220"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        रुकें • पहचाने
                      </text>
                    </g>

                    {/* Bubble 2: SOCHO */}
                    <g transform="translate(240, 5)">
                      <rect
                        x="0"
                        y="0"
                        width="120"
                        height="38"
                        rx="16"
                        fill="#FFFFFF"
                        stroke="#E76F51"
                        strokeWidth="2"
                      />
                      <polygon points="55,38 60,46 65,38" fill="#FFFFFF" />
                      <text
                        x="60"
                        y="23"
                        fontSize="12"
                        fontWeight="bold"
                        fill="#9A7010"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        सोचें • पॉज़ लें
                      </text>
                    </g>

                    {/* Bubble 3: BOLO */}
                    <g transform="translate(400, 15)">
                      <rect
                        x="0"
                        y="0"
                        width="130"
                        height="38"
                        rx="16"
                        fill="#FFFFFF"
                        stroke="#457B67"
                        strokeWidth="2"
                      />
                      <polygon points="75,38 82,48 90,38" fill="#FFFFFF" />
                      <text
                        x="65"
                        y="23"
                        fontSize="12"
                        fontWeight="bold"
                        fill="#265E4C"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        बोलें • share करें
                      </text>
                    </g>

                    {/* Small Floating Emotion Icons */}
                    <circle cx="215" cy="85" r="14" fill="#FEF3D6" />
                    <text x="215" y="90" fontSize="13" textAnchor="middle">
                      💭
                    </text>

                    <circle cx="380" cy="95" r="14" fill="#FBECE6" />
                    <text x="380" y="100" fontSize="13" textAnchor="middle">
                      🧡
                    </text>
                  </svg>

                  {/* Caption underneath the illustration */}
                  <div className="mt-3 flex items-center justify-between text-xs text-[#7A6C5E]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#457B67]" />
                      <span>One Feeling Concept Per Workshop</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#D95D39]" />
                      <span>One Same-Day Coping Tool</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive "Feelings Explorer" Widget */}
              <div className="lg:col-span-5 bg-[#FAF6EE] rounded-2xl p-5 sm:p-6 border border-[#EBDDCE] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#EADFD0]">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-[#D95D39] text-white">
                        <MessageCircle className="w-4 h-4" />
                      </span>
                      <h3 className="font-bold text-base text-[#25201B]">
                        भाव-पहचान (Feeling Explorer)
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold text-[#874A27] bg-[#FBECE6] px-2 py-0.5 rounded-full">
                      Interactive Tool
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#66584B]">
                    Click any emotion below to see how MindSaathi helps a child
                    recognise body cues and express them safely:
                  </p>

                  {/* Emotion Selector Pills */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {emotionList.map((item) => {
                      const isSelected = selectedEmotion.id === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedEmotion(item)}
                          className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold transition-all text-left ${
                            isSelected
                              ? "bg-white text-[#25201B] border-2 shadow-sm font-bold"
                              : "bg-[#F3EBE0] text-[#5A4E42] border border-transparent hover:bg-white/80"
                          }`}
                          style={{
                            borderColor: isSelected ? item.color : "transparent",
                          }}
                        >
                          <span className="text-base">{item.icon}</span>
                          <span className="truncate">{item.english}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Emotion Detail Card */}
                  <div
                    className="mt-4 rounded-xl p-4 border transition-all duration-300"
                    style={{
                      backgroundColor: selectedEmotion.bgLight,
                      borderColor: `${selectedEmotion.color}40`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{selectedEmotion.icon}</span>
                        <div>
                          <div className="font-hindi font-bold text-base text-[#25201B]">
                            {selectedEmotion.hindi}
                          </div>
                          <div className="text-xs text-[#6A5E52] font-semibold">
                            {selectedEmotion.english}
                          </div>
                        </div>
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-md text-white"
                        style={{ backgroundColor: selectedEmotion.color }}
                      >
                        Flashcard #0{emotionList.indexOf(selectedEmotion) + 1}
                      </span>
                    </div>

                    {/* Body Cue */}
                    <div className="mt-3 pt-3 border-t border-black/10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A6450] block">
                        शरीर में संकेत (Body Signal):
                      </span>
                      <p className="text-xs font-medium text-[#25201B] mt-0.5 font-hindi">
                        {selectedEmotion.bodySignal}
                      </p>
                      <p className="text-[11px] text-[#695C50] italic">
                        ({selectedEmotion.bodySignalEn})
                      </p>
                    </div>

                    {/* Coping Tool */}
                    <div className="mt-2.5 pt-2.5 border-t border-black/10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A6450] block">
                        आज का उपाय (Practical Tool):
                      </span>
                      <p className="text-xs font-bold text-[#B54220] mt-0.5">
                        {selectedEmotion.tool}
                      </p>
                    </div>

                    {/* Spoken Hindi Script Quote */}
                    <div className="mt-3 p-2.5 rounded-lg bg-white/90 border border-black/10 text-xs">
                      <div className="text-[10px] font-bold text-[#8E7E70] uppercase">
                        बच्चा कैसे बोल सकता है (Relatable Script):
                      </div>
                      <p className="mt-1 font-hindi text-[#25201B] font-medium italic">
                        &ldquo;{selectedEmotion.dialogueHindi}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EBDDCE] flex items-center justify-between text-xs text-[#706254]">
                  <span>Total 16 Emotion Cards in Free Deck</span>
                  <a
                    href="#toolkit"
                    className="font-bold text-[#D95D39] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Deck</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Introduction Section (What is MindSaathi?) */}
        <div id="about" className="mt-16 sm:mt-24 scroll-mt-28">
          <div className="paper-card-warm rounded-3xl p-8 sm:p-12 border border-[#E8DACB]">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E4] border border-[#E5D5C2] text-xs font-bold text-[#B54220] uppercase tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5" />
                <span>Our Core Purpose • हमारा उद्देश्य</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#25201B] tracking-tight">
                What is MindSaathi?
              </h2>

              <p className="mt-4 text-lg sm:text-xl text-[#4A3F33] leading-relaxed">
                <strong className="text-[#D95D39] font-semibold">MindSaathi</strong> means{" "}
                <em>&ldquo;companion of the mind&rdquo;</em> (मन का साथी). We conduct
                interactive emotional wellbeing workshops for children aged 7–15 in shelter
                homes, using everyday spoken Hindi, games, stories, flashcards and practical
                group activities rather than dry lectures.
              </p>

              {/* Highlighted Quote Box */}
              <div className="mt-8 relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FBECE6] via-[#FFF9EE] to-[#EBF2EE] border-l-4 border-[#D95D39] shadow-xs">
                <div className="text-3xl font-serif text-[#D95D39] select-none -mb-2">
                  &ldquo;
                </div>
                <blockquote className="text-xl sm:text-2xl font-serif italic font-medium text-[#25201B] leading-snug">
                  Every child deserves the words to understand what they feel.
                </blockquote>
                <div className="mt-3 flex items-center justify-between text-xs sm:text-sm text-[#7A6C5E] font-medium">
                  <span className="font-hindi text-sm text-[#B54220] font-semibold">
                    हर बच्चे को अपनी भावना समझने का हक़ है।
                  </span>
                  <span>— The MindSaathi Commitment</span>
                </div>
              </div>

              {/* 3 Core Differentiators */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-white border border-[#E8DACB] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#FBECE6] text-[#D95D39] flex items-center justify-center font-bold text-lg mb-3">
                    १
                  </div>
                  <h3 className="font-bold text-base text-[#25201B]">
                    Spoken Hindi, Not Jargon
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#66584B]">
                    Words like &lsquo;trauma&rsquo; or &lsquo;dysregulation&rsquo; don&apos;t help a 9-year-old in a shelter.
                    We speak the language children actually speak at home.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E8DACB] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF6DE] text-[#9A7010] flex items-center justify-center font-bold text-lg mb-3">
                    २
                  </div>
                  <h3 className="font-bold text-base text-[#25201B]">
                    One Concept, One Tool
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#66584B]">
                    Each 60-minute session teaches exactly one emotional concept and one practical
                    coping mechanism that a child can put to use the very same day.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E8DACB] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] text-[#265E4C] flex items-center justify-center font-bold text-lg mb-3">
                    ३
                  </div>
                  <h3 className="font-bold text-base text-[#25201B]">
                    Play-Based & Open Source
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#66584B]">
                    Everything is taught through games, flashcards and stories. All scripts and
                    tools are 100% free and open for other youth advocates to run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
