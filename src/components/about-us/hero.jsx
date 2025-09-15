import React from "react";
import { Skeleton } from "../ui/skeleton";

export const HeroSection = ({ data, isLoading }) => {
  const { content } = data || {};

  return (
    <div
      style={{
        background: "linear-gradient(100.43deg, #E3E7FF 0%, #FFE7FC 100%)",
      }}
    >
      <div className="section-container py-14 md:py-28">
        {" "}
        {/* h-[420px] flex flex-col justify-center */}
        <h1 className="text-2xl leading-9 lg:leading-14 md:text-4xl lg:text-5xl font-medium font-stolzl text-center text-para-3">
          About <span className="text-main">Us</span>
        </h1>
        <div className="text-center text-para max-w-[970px] mx-auto font-stolzl text-xs sm:text-sm md:text-base lg:text-lg mt-2">
          {/* CodIntern, a DPIIT-approved EdTech platform and Skill India Training
          Partner, equips students with AI-facilitated learning, experiential
          learning, and career guidance—filling the gap between education and
          employment for a technology-enabled workforce in India. */}
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="w-[80%] mx-auto h-5" />
              <Skeleton className="w-[70%] mx-auto h-5" />
              <Skeleton className="w-[60%] mx-auto h-5" />
            </div>
          ) : (
            content?.desc
          )}
        </div>
      </div>
    </div>
  );
};
