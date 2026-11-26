import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFDF9",
};

export const metadata: Metadata = {
  title: "MindSaathi (मनसाथी) – Youth-Led Emotional Wellbeing Initiative",
  description:
    "MindSaathi makes practical mental health tools accessible in everyday spoken Hindi for underserved children aged 7–15 in shelter homes. Ruko. Socho. Bolo.",
  keywords: [
    "MindSaathi",
    "मनसाथी",
    "youth mental health",
    "emotional wellbeing",
    "shelter home education",
    "Ruko Socho Bolo",
    "Anya Narayan",
    "Hindi mental health resources",
  ],
  authors: [{ name: "Anya Narayan" }],
  openGraph: {
    title: "MindSaathi (मनसाथी) – Ruko. Socho. Bolo.",
    description: "Every feeling has a name. Every child deserves to know it. Practical emotional wellbeing tools in everyday Hindi.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FFFDF9] text-[#25201B] antialiased selection:bg-[#FCD8B3] selection:text-[#7A271A]">
        {children}
      </body>
    </html>
  );
}
