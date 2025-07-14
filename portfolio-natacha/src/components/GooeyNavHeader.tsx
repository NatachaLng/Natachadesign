"use client";
import GooeyNav from "../blocks/Components/GooeyNav/GooeyNav";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function GooeyNavHeader() {
  return (
    <header className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-white/10 bg-black z-10">
      <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-widest">NATACHA DESIGN</span>
      <div className="hidden lg:block">
        <GooeyNav items={navItems} />
      </div>
      <MobileMenu />
    </header>
  );
} 