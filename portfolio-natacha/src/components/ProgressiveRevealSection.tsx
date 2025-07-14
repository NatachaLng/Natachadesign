"use client";
import { useRef, useEffect, useState } from "react";

const TEXT = [
  "I dive deep into complex problems, ask the hard questions, and translate insight into intuitive experiences.",
  "Every decision is intentional. Every screen has a purpose.",
  "Let me show you how I design with precision—from first sketch to final launch."
];

function splitWords(text: string) {
  // Split by space, but keep punctuation attached to words
  return text.split(/(\s+)/);
}

export default function ProgressiveRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(1600);
  const words = TEXT.flatMap((line, i) =>
    splitWords(line).map((word, j) => ({ word, key: `${i}-${j}` }))
  );
  const totalWords = words.length;
  const desiredScrollDistance = 600;

  useEffect(() => {
    const updateSectionHeight = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      setSectionHeight(windowHeight + desiredScrollDistance);
    };
    updateSectionHeight();
    window.addEventListener("resize", updateSectionHeight);
    return () => window.removeEventListener("resize", updateSectionHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const center = windowHeight / 2;
      // Progress: 0 when section center hits viewport center, 1 after desiredScrollDistance
      const raw = (center - rect.top) / desiredScrollDistance;
      const progress = Math.min(1, Math.max(0, raw));
      setProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionHeight]);

  const highlightedCount = Math.round(progress * totalWords);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-start justify-center"
      style={{ background: "none", minHeight: sectionHeight, height: sectionHeight, paddingTop: '40vh' }}
    >
      <div
        className="sticky w-full max-w-4xl mx-auto px-4 sm:px-6"
        style={{ zIndex: 2, top: '50%', transform: 'translateY(-50%)' }}
      >
        <div className="text-left select-none pointer-events-none"
        >
          {(() => {
            let wordIndex = 0;
            return TEXT.map((line, i) => (
              <div
                key={i}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-0"
                style={{ marginBottom: i === TEXT.length - 1 ? 0 : '0.5em' }}
              >
                {splitWords(line).map((word, j) => {
                  const isHighlighted = wordIndex < highlightedCount;
                  const span = (
                    <span
                      key={`${i}-${j}`}
                      className="transition-colors duration-300"
                      style={{
                        color: isHighlighted ? "#fff" : "#444654",
                        WebkitTextStroke: isHighlighted ? "none" : "0.2px #444654",
                        textShadow: isHighlighted ? "0 2px 16px rgba(0,0,0,0.12)" : undefined,
                        transition: "color 0.3s, -webkit-text-stroke 0.3s"
                      }}
                    >
                      {word}
                    </span>
                  );
                  wordIndex++;
                  return span;
                })}
              </div>
            ));
          })()}
        </div>
      </div>
      {/* Spacer to ensure smooth transition to next section */}
      <div style={{ minHeight: 8 }} />
    </section>
  );
} 