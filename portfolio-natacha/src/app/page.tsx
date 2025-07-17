"use client";
import React from "react";
import GooeyNavHeader from "../components/GooeyNavHeader";
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard";
import LogoCloud from "../components/LogoCloud";
import ProgressiveRevealSection from "../components/ProgressiveRevealSection";
import StackedPortfolioCards from "../components/StackedPortfolioCards";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      {/* Header & Nav */}
      <GooeyNavHeader />

      {/* Hero Section: ProfileCard + LogoCloud with image and radial fade */}
      <section className="relative w-full flex flex-col justify-between items-center h-[120vh] min-h-[700px] max-h-[1100px] bg-black" style={{zIndex: 1}}>
        {/* Blurred, dark radial overlay for seamless fade */}
        <div
          className="absolute left-1/2 top-1/2 z-0 pointer-events-none select-none"
          style={{
            width: '100vw',
            height: '120vh',
            maxWidth: 1600,
            maxHeight: 1920,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 100%)',
            filter: 'blur(32px)',
            opacity: 1
          }}
        />
        {/* Centered background image with strong radial fade and blur */}
        <div
          className="absolute left-1/2 top-1/2 z-10 pointer-events-none select-none"
          style={{
            width: '90vw',
            height: '110vh',
            maxWidth: 1200,
            maxHeight: 1400,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: `center/cover no-repeat url('/background2.avif')`,
            maskImage: 'radial-gradient(ellipse 60% 30% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 30% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)',
            opacity: 1,
            filter: 'blur(12px)'
          }}
        />
        {/* Right-to-left linear gradient overlay to hide right edge */}
        <div
          className="absolute inset-0 z-20 pointer-events-none select-none"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.0) 60%)',
            width: '100%',
            height: '100%'
          }}
        />
        {/* Content flex column */}
        <div className="relative z-30 flex flex-col justify-between items-center w-full h-full py-8">
          {/* Pill, Title, Subtext */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0" style={{minHeight: '120px'}}>
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold shadow-sm border border-white/20 backdrop-blur-md mt-10">Hello World</span>
            <h1 className="text-3xl sm:text-5xl font-bold text-center text-white">
              Designing with <span className="italic font-serif">purpose</span>. Delivering with <span className="italic font-serif">impact</span>.
            </h1>
            <p className="text-white/80 text-center text-base sm:text-lg max-w-xl mb-20">
              From concept to execution — every detail counts.
            </p>
          </div>
          {/* ProfileCard center, grows to fill available space */}
          <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-sm sm:max-w-md mx-auto flex items-center justify-center">
              <ProfileCard
                behindGradient={undefined}
                innerGradient={undefined}
                miniAvatarUrl={undefined}
              />
            </div>
          </div>
          {/* LogoCloud bottom */}
          <div className="w-full flex items-center justify-center mt-20 flex-shrink-0" style={{minHeight: '120px'}}>
            <LogoCloud />
          </div>
        </div>
      </section>

      {/* Spacer to prevent overlap */}
      <div style={{height: '2vh', minHeight: 8}} />

      {/* Progressive Reveal Section */}
      <ProgressiveRevealSection />

      {/* Portfolio Gallery Section Heading (restored for context) */}
      <StackedPortfolioCards />
      
       {/* Reviews Section */}
       <ReviewsSection />
    </div>
  );
}
