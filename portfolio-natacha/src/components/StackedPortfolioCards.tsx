"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PortfolioProjectCard from "./PortfolioProjectCard";

const cardsData = [
  {
    title: "Gamified Learning Platform Powered by AI – SeedUp",
    description:
      "Helped Seed-Up define and bring to life a gamified personal growth app powered by AI. I clarified the product vision, mapped user journeys, and designed a playful, focused experience across onboarding, challenges, and coaching features.",
    image: "/Portfolio/1.avif",
    metrics: [
      { label: "Success Rate", value: "87%" },
      { label: "Delivery", value: "35+ screens" },
    ],
    tags: ["AI", "EdTech", "Mobile"],
    button: { label: "View case study", link: "#" },
    // Optionally set a unique color, e.g. blue:
    haloColor: "rgba(168,85,247,0.25)", // purple
  },
  {
    title: "Leisure Booking Platform – Touloisirs",
    description:
      "Redesigned Touloisirs to simplify booking flows, clarify navigation, and align with the platform’s inclusive, family-focused brand. I led user research, created responsive prototypes, and integrated AI-assisted benchmarking to guide feature development.",
    image: "/Portfolio/2.avif",
    metrics: [
      { label: "User Satisfaction", value: "90%" },
      { label: "Engagement", value: "+50%" },
    ],
    tags: ["Mobile First", "Design"],
    button: { label: "View case study", link: "#" },
    haloColor: "rgba(34,197,94,0.25)", // green
  },
  {
    title: "AI-Powered Copywriting Platform – Mark Copy AI",
    description:
      "Redesigned Mark Copy AI to reduce friction, improve onboarding, and increase user retention. I revamped the brand identity, removed barriers to sign-up, and introduced gamified features like product tours and journal quests to boost engagement.",
    image: "/Portfolio/3.avif",
    metrics: [
      { label: "Sign-ups", value: "+30%" },
      { label: "Churn", value: "-8%" },
    ],
    tags: ["SaaS", "Web App"],
    button: { label: "View case study", link: "#" },
    haloColor: "rgba(34,211,238,0.25)", // cyan
  },
  {
    title: "UX Overhaul for Psychological Profiling Tool – MyProfilia",
    description:
      "Redesigned MyProfilia to boost adoption in a market unfamiliar with psychological profiling. I clarified the value proposition, streamlined onboarding, and introduced flexible pricing tiers — all while aligning the product with evolving business needs.",
    image: "/Portfolio/4.avif",
    metrics: [
      { label: "Acquired by", value: "HumanLinker" },
    ],
    tags: ["SaaS", "AI", "Web App"],
    button: { label: "View case study", link: "#" },
    haloColor: "rgba(253,224,71,0.25)", // yellow
  },
  {
    title: "AI Learning & Creativity App – Lia 27",
    description:
      "Designed Lia 27, an AI-powered mobile companion for homework help, translation, and creative tasks. I led UX strategy, modular UI design, and onboarding flows to ensure accessibility and ease of use across a diverse user base.",
    image: "/Portfolio/5.avif",
    metrics: [
      { label: "Rating", value: "4.2*" },
      { label: "Day-7 retention", value: "67%" },
    ],
    tags: ["AI", "Mobile App"],
    button: { label: "View case study", link: "#" },
    haloColor: "rgba(168,85,247,0.25)", // purple
  },
  {
    title: "Coaching Session Booking Redesign – Simundia",
    description:
      "Redesigned Simundia’s session booking flow to reduce friction, improve clarity, and empower users to manage their coaching appointments independently. Delivered a faster, more intuitive process based on real user feedback.",
    image: "/Portfolio/6.avif",
    metrics: [
      { label: "Booking time", value: "-40%" },
      { label: "Session bookings", value: "+22%" },
    ],
    tags: ["AI", "Chatbot", "UI"],
    button: { label: "View case study", link: "#" },
    haloColor: "rgba(34,197,94,0.25)", // green
  },
];

const CARD_HEIGHT = 500; // px
const CARD_MARGIN = 40; // px (increased)

const StackedPortfolioCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numCards = cardsData.length;
  const stickyHeight = '100vh';
  const minHeight = ((CARD_HEIGHT + CARD_MARGIN) * (numCards - 1)) + window.innerHeight;

  // Framer Motion scroll progress for the section
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Precompute y transforms for each card (fix React Hooks rule)
  const yTransforms = cardsData.map((_, i) => {
    const overlap = 0.2;
    const start = Math.max(0, i / numCards - overlap);
    const end = (i + 1) / numCards;
    return useTransform(
      scrollYProgress,
      [start, end],
      [(CARD_HEIGHT + CARD_MARGIN) * i, CARD_MARGIN * i],
      { clamp: true }
    );
  });

  // Pin the section for the duration of the stack animation
  // The sticky wrapper is as tall as the stack, and released after
  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: minHeight,
        position: "relative",
        background: "transparent",
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          height: stickyHeight,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "visible"
        }}
        className=""
      >
        {/* Centered block: text + cards */}
        <div style={{ width: '100%', marginTop: 'auto', marginBottom: 'auto' }}>
          {/* Heading/Subheading/Pill */}
          <div className="w-full">
            <div className="text-center">
              <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold shadow-sm border border-white/20 backdrop-blur-md">Portfolio Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-2 text-center text-white">
              Every pixel with <span className="italic font-serif">purpose</span>.
            </h2>
            <p className="text-white/80 text-center text-base sm:text-lg max-w-xl mx-auto mb-0 sm:mb-2">
              From early research to polished interfaces, each case study reflects a design process rooted in purpose, empathy, and measurable outcomes.
            </p>
          </div>
          {/* Cards Stack (pinned) */}
          <div style={{ position: "relative", width: "100%", height: CARD_HEIGHT, marginTop: 80 }}>
            {cardsData.map((card, i) => {
              const y = yTransforms[i];
              const zIndex = 10 + i;
              return (
                <React.Fragment key={i}>
                  {/* Glowing background behind each card */}
                  <motion.div
                    style={{
                      position: "absolute",
                      left: '50%',
                      top: 0,
                      width: '80%',
                      height: CARD_HEIGHT,
                      y,
                      zIndex: zIndex - 1,
                      transform: 'translateX(-50%)',
                      pointerEvents: 'none',
                      background: `radial-gradient(ellipse at center, ${card.haloColor} 0%, rgba(0,0,0,0) 80%)`,
                      opacity: 0.7,
                      filter: 'blur(8px)'
                    }}
                  />
                  <motion.div
                    key={i}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                      height: CARD_HEIGHT,
                      y,
                      zIndex,
                      opacity: 1,
                      pointerEvents: "auto",
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  >
                    <PortfolioProjectCard {...card} haloColor="transparent" />
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StackedPortfolioCards; 