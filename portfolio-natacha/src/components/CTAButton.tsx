'use client';

import React, { useState } from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ href, children, className = '' }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle = {
    background: "radial-gradient(36% 112.5% at 50% 3.9%, rgb(6, 182, 212) 0%, rgb(236, 72, 153) 100%)",
    boxShadow: "inset 0px 0px 11px 0px rgb(255, 255, 255), 0px 0.6021873017743928px 1.083937143193907px -1.25px rgba(6, 182, 212, 0.71989), 0px 2.288533303243457px 4.119359945838223px -2.5px rgba(6, 182, 212, 0.63557), 0px 10px 18px -3.75px rgba(6, 182, 212, 0.25), 0px 0.6021873017743928px 0.84306222248415px -0.75px rgba(0, 0, 0, 0.20065), 0px 2.288533303243457px 3.20394662454084px -1.5px rgba(0, 0, 0, 0.20807), 0px 10px 14px -2.25px rgba(0, 0, 0, 0.242)"
  };

  const hoverStyle = {
    background: "radial-gradient(36% 112.5% at 50% 3.9%, rgb(8, 145, 178) 0%, rgb(219, 39, 119) 100%)",
    boxShadow: "inset 0px 0px 11px 0px rgb(255, 255, 255), 0px 0.6021873017743928px 1.083937143193907px -1.25px rgba(8, 145, 178, 0.8), 0px 2.288533303243457px 4.119359945838223px -2.5px rgba(8, 145, 178, 0.7), 0px 10px 18px -3.75px rgba(8, 145, 178, 0.35), 0px 0.6021873017743928px 0.84306222248415px -0.75px rgba(0, 0, 0, 0.20065), 0px 2.288533303243457px 3.20394662454084px -1.5px rgba(0, 0, 0, 0.20807), 0px 10px 14px -2.25px rgba(0, 0, 0, 0.242)"
  };

  return (
    <a 
      href={href}
      className={`inline-block px-4 sm:px-5 py-2 rounded-2xl font-semibold text-sm sm:text-base text-white relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl ${className}`}
      style={isHovered ? hoverStyle : defaultStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
} 