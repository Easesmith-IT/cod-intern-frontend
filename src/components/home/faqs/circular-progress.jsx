import { cn } from "@/lib/utils";
import React from "react";

export const CircularProgressBar = ({
  value = 60,
  size = 160,
  strokeWidth = 16,
  gradientId = "progressGradient",
  colors = ["#A855F7", "#3B0764"], // First: top/right, Second: bottom
  trackColor = "#E5E7EB",
  text = `${value}%`,
  subText = "",
  headingClassName,
}) => {
  const isGradient = Array.isArray(colors);
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {isGradient && (
          <defs>
            <linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1={0}
              y1={0}
              x2={size}
              y2={size}
            >
              <stop offset="0%" stopColor={colors[0]} />
              <stop offset="100%" stopColor={colors[1]} />
            </linearGradient>
          </defs>
        )}

        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={isGradient ? `url(#${gradientId})` : colors}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={cn("font-medium font-stolzl text-2xl", headingClassName)}
        >
          {text}
        </span>
        {subText && (
          <span className="text-para font-stolzl text-sm">{subText}</span>
        )}
      </div>
    </div>
  );
};
