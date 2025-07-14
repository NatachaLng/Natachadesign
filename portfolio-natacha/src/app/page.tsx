import GooeyNavHeader from "../components/GooeyNavHeader";
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard";
import LogoCloud from "../components/LogoCloud";
import ProgressiveRevealSection from "../components/ProgressiveRevealSection";
import ChromaGrid from "../blocks/Components/ChromaGrid/ChromaGrid";

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
          <div className="flex items-center justify-center w-full flex-grow" style={{minHeight: 0}}>
            <div className="w-full max-w-sm sm:max-w-md mx-auto flex items-center justify-center h-full" style={{height: '100%', maxHeight: '100%', minHeight: 0}}>
              <ProfileCard
                behindGradient={undefined}
                innerGradient={undefined}
                miniAvatarUrl={undefined}
              />
            </div>
          </div>
          {/* LogoCloud bottom */}
          <div className="w-full flex items-center justify-center mt-6 flex-shrink-0" style={{minHeight: '120px'}}>
            <LogoCloud />
          </div>
        </div>
      </section>

      {/* Spacer to prevent overlap */}
      <div style={{height: '2vh', minHeight: 8}} />

      {/* Progressive Reveal Section */}
      <ProgressiveRevealSection />

      {/* Portfolio Gallery Section */}
      <section className="w-full py-4 sm:py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold shadow-sm border border-white/20 backdrop-blur-md">Portfolio Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">
            Every pixel with <span className="italic font-serif">purpose</span>.
          </h2>
          <p className="text-white/80 text-center text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8">
            From early research to polished interfaces, each case study reflects a design process rooted in purpose, empathy, and measurable outcomes.
          </p>
                  <ChromaGrid
            items={[
              {
                image: "/Portfolio/1.avif",
                title: "Brand Identity for Acme Co.",
                subtitle: "2024 · Branding, Logo, Print",
                handle: "@acmeco",
                date: "2024-03-12",
                tags: ["Branding", "Logo", "Print"],
                url: "#"
              },
              {
                image: "/Portfolio/2.avif",
                title: "Mobile App UI/UX",
                subtitle: "2023 · UI/UX, Mobile",
                handle: "@mobileapp",
                date: "2023-11-05",
                tags: ["UI/UX", "Mobile"],
                url: "#"
              },
              {
                image: "/Portfolio/3.avif",
                title: "E-commerce Website Redesign",
                subtitle: "2023 · Web, E-commerce",
                handle: "@shopnow",
                date: "2023-08-21",
                tags: ["Web", "E-commerce"],
                url: "#"
              },
              {
                image: "/Portfolio/4.avif",
                title: "Photography for Event X",
                subtitle: "2022 · Photography, Event",
                handle: "@eventx",
                date: "2022-10-14",
                tags: ["Photography", "Event"],
                url: "#"
              },
              {
                image: "/Portfolio/5.avif",
                title: "Product Launch Campaign",
                subtitle: "2022 · Campaign, Social Media",
                handle: "@productlaunch",
                date: "2022-06-30",
                tags: ["Campaign", "Social Media"],
                url: "#"
              },
              {
                image: "/Portfolio/6.avif",
                title: "Corporate Website",
                subtitle: "2021 · Web, Corporate",
                handle: "@corporate",
                date: "2021-12-18",
                tags: ["Web", "Corporate"],
                url: "#"
              }
            ]}
          />
        </div>
      </section>
    </div>
  );
}
