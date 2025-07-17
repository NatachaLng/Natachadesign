import React from "react";
import { useCursor } from "./CursorContext";

export interface PortfolioProjectCardProps {
  title: string;
  description: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
  button: { label: string; link: string };
  tags?: string[];
  haloColor?: string; // Optional prop for the halo color
}

const PortfolioProjectCard: React.FC<PortfolioProjectCardProps> = ({
  title,
  description,
  image,
  metrics,
  button,
  tags = [],
  haloColor = "rgba(168,85,247,0.25)", // Default: purple halo (Tailwind purple-400)
}) => {
  const { setVariant } = useCursor();
  return (
    <a
      href={button.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full p-px rounded-2xl h-full block group cursor-none"
      style={{}}
      onMouseEnter={() => setVariant("view")}
      onMouseLeave={() => setVariant("dot")}
    >
      <div
        className="relative w-full h-[500px] flex flex-col md:flex-row rounded-[22px] border-[1px] border-white/20 p-8 md:p-14 text-white shadow-2xl shadow-black/40 group-hover:scale-[1.02] transition-transform duration-200"
        style={{
          position: 'relative',
          background: "#000",
          border: '1px solid rgba(255,255,255,0.12)',
          overflow: 'hidden',
        }}
      >
        {/* Blurred gradient overlay inside the card, below content */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            borderRadius: 22,
            pointerEvents: 'none',
            overflow: 'hidden',
            filter: 'blur(24px) saturate(180%)',
            WebkitFilter: 'blur(24px) saturate(180%)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `radial-gradient(ellipse at 60% 80%, ${haloColor} 0%, rgba(0,0,0,0) 80%)`,
              borderRadius: 22,
              opacity: 1,
            }}
          />
        </div>
        {/* Card content above overlays */}
        <div style={{position: 'relative', zIndex: 2, width: '100%', height: '100%'}}>
          <div>
            <h3 className="font-bold text-[30px]">{title}</h3>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-[18px] mb-[18px]">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/20 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="text-white/80 max-w-2xl text-[18px] mt-0 mb-0">{description}</p>
          </div>
        </div>
        {/* Right: Image (top), Metrics (below) */}
        <div className="flex flex-col justify-between h-full md:w-1/2 h-full">
          <div className="w-full h-[260px] md:h-[340px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-row gap-16 md:gap-24 w-full justify-center md:justify-end mt-6">
            {metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center md:items-end">
                <span className="text-white/80 text-[18px] mb-2">{metric.label}</span>
                <span className="text-3xl font-bold font-serif italic">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default PortfolioProjectCard; 