"use client"; // Keep this if it's a Next.js client component

import React from 'react';
import { Marquee } from './magicui/marquee'; // Assuming this path is correct
import Image from 'next/image';

// Define your image data with more descriptive names, similar to the old code's text
const billCategories = [
  { url: '/1icon.png', name: 'Landline Bills' },
  { url: '/2icon.png', name: 'Electricity Bills' },
  { url: '/3icon.png', name: 'Gas Bills' },
  { url: '/4icon.png', name: 'Water Bills' },
  { url: '/5icon.png', name: 'Mobile Postpaid' },
  { url: '/6icon.png', name: 'Data Card' },
  // Duplicate them if you want more items visible in the marquee at once
  { url: '/1icon.png', name: 'Landline Bills' },
  { url: '/2icon.png', name: 'Electricity Bills' },
  { url: '/3icon.png', name: 'Gas Bills' },
  { url: '/4icon.png', name: 'Water Bills' },
  { url: '/5icon.png', name: 'Mobile Postpaid' },
  { url: '/6icon.png', name: 'Data Card' },
];

export default function Case() { // Renamed back to Case to match your original component name
  return (
    <div className="w-full py-20 lg:py-40"> {/* Outer container from old code */}
      <div className="container mx-auto"> {/* Centering container from old code */}
        <div className="flex flex-col gap-10"> {/* Gap for title and marquee */}
          <h2 className="text-4xl md:text-5xl ubuntu-bold text-white tracking-tighter lg:max-w-xl font-regular text-left">
            Bharat Bill Payment System {/* Title from old code */}
          </h2>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]"> {/* Marquee from new code */}
              {billCategories.map((category, idx) => (
                // Each item's structure and styling from the old CarouselItem
                // Adapted to fit the Marquee context
                <div key={idx} className="flex rounded-md text-white aspect-square items-center justify-center p-6 mx-8">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src={category.url}
                      width={100} // Keep original width/height for Next/Image internal optimization
                      height={100}
                      alt={category.name} // Descriptive alt text
                      className="rounded-md w-auto h-20" // Control display size with CSS
                    />
                    <p>{category.name}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Case }; // Export the component