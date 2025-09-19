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
        {/* h-[420px] flex flex-col justify-center */}
        <h1 className="text-2xl leading-9 lg:leading-14 md:text-4xl lg:text-5xl font-medium font-stolzl text-center text-para-3">
          Connect With <span className="text-main">Us</span>
        </h1>
        <div className="text-center text-para max-w-[970px] mx-auto font-stolzl text-xs sm:text-sm md:text-base lg:text-lg mt-2">
          {/* Need assistance or more details about our AI-accelerated programs?
          Contact CodIntern. Our team is dedicated to helping you achieve your
          learning and career goals. */}
          {isLoading ? (
            <div className="space-y-2 mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[70%] mx-auto" />
            </div>
          ) : (
            content?.desc
          )}
        </div>
      </div>
    </div>
  );
};
