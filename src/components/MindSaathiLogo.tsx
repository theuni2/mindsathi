import React from "react";

interface MindSaathiLogoProps {
  className?: string;
  variant?: "full" | "horizontal" | "vertical" | "icon-only" | "badge";
  colorMode?: "color" | "monochrome" | "white";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function MindSaathiLogo({
  className = "",
  variant = "horizontal",
  colorMode = "color",
  size = "md",
}: MindSaathiLogoProps) {
  // Color definitions based on mode
  const bubbleFill =
    colorMode === "white"
      ? "#FFFFFF"
      : colorMode === "monochrome"
      ? "#25201B"
      : "#D95D39";

  const heartFill =
    colorMode === "white"
      ? "#D95D39"
      : colorMode === "monochrome"
      ? "#FFFFFF"
      : "#F4A261";

  const leafFill =
    colorMode === "white"
      ? "#FAF6ED"
      : colorMode === "monochrome"
      ? "#E5E5E5"
      : "#457B67";

  const textColorPrimary =
    colorMode === "white"
      ? "text-white"
      : colorMode === "monochrome"
      ? "text-[#1A1A1A]"
      : "text-[#25201B]";

  const textColorAccent =
    colorMode === "white"
      ? "text-[#FCD8B3]"
      : colorMode === "monochrome"
      ? "text-[#555555]"
      : "text-[#D95D39]";

  const textColorHindi =
    colorMode === "white"
      ? "text-amber-200"
      : colorMode === "monochrome"
      ? "text-[#333333]"
      : "text-[#B54220]";

  // Size scalers
  const iconSize = {
    sm: 32,
    md: 42,
    lg: 54,
    xl: 68,
  }[size];

  const titleSize = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  }[size];

  const hindiSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  }[size];

  // SVG Icon: Speech bubble containing a warm smiling mind/companion arc and growth sprout
  const LogoIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="MindSaathi companion emblem"
      role="img"
    >
      {/* Outer Companion Speech Bubble */}
      <path
        d="M52 30C52 42.15 41.25 52 28 52C23.6 52 19.5 50.9 16 48.9L8 54L10.3 45.4C5.2 41.5 2 35.8 2 30C2 17.85 13.6 8 28 8C42.4 8 52 17.85 52 30Z"
        fill={bubbleFill}
      />
      {/* Secondary Companion Bubble (Empathy & Dialogue) */}
      <path
        d="M42 22C42 16.5 46.5 12 52 12C57.5 12 62 16.5 62 22C62 27.5 57.5 32 52 32C50.2 32 48.5 31.5 47 30.6L44 33L44.8 29.5C43.1 27.5 42 24.9 42 22Z"
        fill={heartFill}
        opacity={colorMode === "monochrome" ? 0.7 : 0.95}
      />
      {/* Inner Heart & Mind Smile */}
      <path
        d="M19 28C19 23 23 19 28 19C33 19 37 23 37 28C37 34 28 41 28 41C28 41 19 34 19 28Z"
        fill="#FFFFFF"
      />
      {/* Growth Sprout / Thought Sprout */}
      <path
        d="M28 27C28.5 24 30.5 22 33 22C33 24.5 31 26.5 28 27Z"
        fill={leafFill}
      />
      <circle cx="24" cy="27" r="1.5" fill={bubbleFill} />
      <circle cx="32" cy="27" r="1.5" fill={bubbleFill} />
      <path
        d="M25 31C26 32.2 27 32.5 28 32.5C29 32.5 30 32.2 31 31"
        stroke={bubbleFill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === "icon-only") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {LogoIcon}
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-[#EADFD0] bg-[#FAF6ED]/80 backdrop-blur-xs ${className}`}
      >
        {LogoIcon}
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5 font-bold tracking-tight text-[#25201B]">
            <span>MindSaathi</span>
            <span className="font-hindi text-xs px-1.5 py-0.5 rounded-sm bg-[#FBECE6] text-[#B54220] font-semibold">
              मनसाथी
            </span>
          </div>
          <span className="text-[11px] text-[#5C5248] tracking-wide">
            Companion of the Mind
          </span>
        </div>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div
        className={`flex flex-col items-center text-center gap-2 ${className}`}
      >
        {LogoIcon}
        <div className="flex flex-col items-center">
          <div className={`font-extrabold tracking-tight ${titleSize} ${textColorPrimary}`}>
            Mind<span className={textColorAccent}>Saathi</span>
          </div>
          <div
            className={`font-hindi font-bold tracking-normal ${hindiSize} ${textColorHindi} mt-0.5`}
          >
            मनसाथी <span className="font-sans font-normal opacity-70">• Companion of the Mind</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {LogoIcon}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-extrabold tracking-tight ${titleSize} ${textColorPrimary}`}
          >
            Mind<span className={textColorAccent}>Saathi</span>
          </span>
          <span
            className={`font-hindi font-bold tracking-tight ${hindiSize} ${textColorHindi}`}
          >
            मनसाथी
          </span>
        </div>
        <span
          className={`text-[11px] font-medium tracking-wider uppercase mt-1 ${
            colorMode === "white" ? "text-amber-200/90" : "text-[#766A5E]"
          }`}
        >
          Companion of the Mind
        </span>
      </div>
    </div>
  );
}
