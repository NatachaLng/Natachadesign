'use client';

import React from 'react';

const InfiniteCategoryNav = () => {
  const categories = [
    'Photography',
    'Design', 
    'Branding',
    'Events',
    'Portraits',
    'Commercial',
    'Weddings',
    'Corporate',
    'Product',
    'Architecture'
  ];

  return (
    <section className="w-full py-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">
          Explore Categories
        </h2>
        
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`#${category.toLowerCase()}`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm flex-shrink-0"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteCategoryNav; 