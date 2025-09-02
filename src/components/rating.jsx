"use client";

import React from "react";
import { Star } from "lucide-react";

// Custom half star component
const HalfStar = ({ size }) => (
  <div className="relative inline-block" style={{ width: size, height: size }}>
    {/* Gray star (background) */}
    <Star size={size} strokeWidth={0} className="text-gray-300 absolute" />
    {/* Yellow left half */}
    <div
      className="absolute top-0 left-0 overflow-hidden"
      style={{ width: size / 2, height: size }}
    >
      <Star size={size} strokeWidth={0} className="text-yellow-500" />
    </div>
  </div>
);

export const Rating = ({ rating, size = 24, className = "" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex space-x-1 ${className}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          strokeWidth={0}
          className="text-yellow-500"
          fill="currentColor"
        />
      ))}

      {/* Half star */}
      {hasHalfStar && <HalfStar size={size} key="half" />}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <Star
          key={`empty-${i}`}
          size={size}
          strokeWidth={0}
          className="text-gray-300"
          fill="currentColor"
        />
      ))}
    </div>
  );
};
