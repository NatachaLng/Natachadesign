"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Actual logo data from public/logo directory
const logos = [
  { name: "Rexall", logo: "/logo/1 rexall.png" },
  { name: "Sanofi", logo: "/logo/2 sanofi.png" },
  { name: "Novartis", logo: "/logo/3 Novartis.png" },
  { name: "Carebook", logo: "/logo/4 Carebook.png" },
  { name: "Coveo", logo: "/logo/5 coveo.png" },
  { name: "McKesson", logo: "/logo/6 mckesson.png" },
];

export default function LogoCloud() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
            Over 50 projects realized for top brands
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Logo Carousel Container */}
        <div className="relative overflow-hidden py-2">
          {/* Left Blend Gradient */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Blend Gradient */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Logo Carousel */}
          <div className="flex animate-scroll items-center">
            {/* First set of logos */}
            <div className="flex gap-8 sm:gap-12 items-center">
              {logos.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center p-4 sm:p-6 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="relative w-20 h-12 sm:w-24 sm:h-16 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Consistent spacing between loops */}
            <div className="w-8 sm:w-12 flex-shrink-0"></div>

            {/* Duplicate set for seamless loop */}
            <div className="flex gap-8 sm:gap-12 items-center">
              {logos.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center p-4 sm:p-6 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${(index + logos.length) * 50}ms`,
                  }}
                >
                  <div className="relative w-20 h-12 sm:w-24 sm:h-16 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* Removed 'More brands coming soon' */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
} 