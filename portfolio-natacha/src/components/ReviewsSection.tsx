import React from "react";

const reviews = [
  {
    name: "SintraAI has been a Game-Changer for My Business!",
    reviewer: "Socrate Concepcion",
    date: "December 29, 2024",
    country: "FR",
    rating: 5,
    initial: "TV",
    text: "Natacha is an exceptional Product Designer with whom I have had the pleasure of collaborating for over a year at Sinéa. Her creativity makes her an invaluable asset to our team. Whether it’s in service delivery or training, she continually brings innovative UX/UI solutions with great responsiveness.",
  },
  {
    name: "Sintra X Saved Me Time",
    reviewer: "Sami Liftoff",
    date: "Dec 10, 2024",
    country: "US",
    rating: 5,
    initial: "OZ",
    text: "Signed up for Sintra X—it felt overwhelming at first, but once it understood how I think, it turned into a creative powerhouse. Support is top-notch, and the daily integrations impress me.",
  },
  {
    name: "Early but satisfied user",
    reviewer: "Bayan Qandil",
    date: "December 30, 2024",
    country: "US",
    rating: 5,
    initial: "B",
    text: "I’ve only been using Sintra for a couple of weeks, but the experience has been great—especially with the social media bot reaching out to me with new ideas. The pull model feels super proactive and makes me more confident in my daily tasks.",
  },
  {
    name: "Creative, reliable, and never afraid to challenge the brief",
    reviewer: "Thomas Vincent",
    date: "October 12, 2023",
    country: "FR",
    rating: 5,
    initial: "TV",
    text: "Natacha is an exceptional product designer. Over the past year at Sinéa, she’s brought smart, innovative solutions across both service and training projects — always with great speed and care. A true partner who elevates every idea.",
  },
  {
    name: "A bold redesign, delivered in record time",
    reviewer: "Claire Guillou",
    date: "July 31, 2022",
    country: "FR",
    rating: 5,
    initial: "CG",
    text: "Working with Natacha on the NEOBRAIN redesign was a real pleasure. In just 3 months, she delivered a bold, fresh website — always proactive, responsive, and truly collaborative. You want her on your team.",
  },
  {
    name: "Design that consistently impresses our clients",
    reviewer: "Anis Moualdi",
    date: "May 17, 2022",
    country: "FR",
    rating: 5,
    initial: "AM",
    text: "Natacha is hands down the best designer I’ve worked with. She created all of Skaly’s Figma designs, and not a single demo goes by without clients praising both the UX and UI. Total game-changer.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-2">
    {Array.from({ length: rating }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#22c55e" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
      </svg>
    ))}
  </div>
);

const ReviewsSection = () => (
  <section className="w-full max-w-6xl mx-auto py-6 px-4 mt-8 font-satoshi relative overflow-visible">
    {/* Section-wide overlay gradient for bottom blending */}
    <div
      className="absolute bottom-0 left-1/2 pointer-events-none"
      style={{
        zIndex: 30,
        width: '120%',
        height: '100%',
        transform: 'translateX(-50%)',
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 98%, rgba(0,0,0,1) 100%)"
      }}
    />
     <div className="mb-8 w-full">
          <div className="mb-6 text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold shadow-sm border border-white/20 backdrop-blur-md">Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">
          What clients say and <span className="italic font-serif">feel</span>.
          </h2>
          <p className="text-white/80 text-center text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8">
          Real words from the teams and founders I’ve collaborated with — highlighting the impact, speed, and clarity I bring to every project.
          </p>
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 overflow-visible">
      {reviews.map((review, i) => (
        <div
          key={i}
          className="relative rounded-2xl p-10 flex flex-col min-h-[260px] font-satoshi"
          style={{
            boxShadow: `0 0 48px 0 rgba(168,85,247,0.25)`,
            background: "rgba(0,0,0,0.92)",
            backgroundImage: "url('https://www.transparenttextures.com/patterns/noise.png')",
            backgroundRepeat: "repeat",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          <div className="flex items-center gap-3 mb-3" style={{position: 'relative', zIndex: 2}}>
            <span className="font-semibold text-white text-base flex-1 truncate">
              {/* Accent the first word of the review name */}
              <span className="font-instrumentSerif italic">
                {review.name.split(' ')[0]}
              </span>{" "}
              {review.name.split(' ').slice(1).join(' ')}
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20">
              {review.initial}
            </span>
          </div>
          <StarRating rating={review.rating} />
          <p className="text-white/90 text-base mb-4 flex-1 font-satoshi" style={{position: 'relative', zIndex: 2}}>{review.text}</p>
          <div className="text-xs text-white/50 mt-auto flex items-center gap-2 font-satoshi" style={{position: 'relative', zIndex: 2}}>
            <span>{review.date}</span>
            <span>•</span>
            <span>{review.reviewer}</span>
            <span>•</span>
            <span>{review.country}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewsSection; 