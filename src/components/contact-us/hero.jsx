import React from "react";

export const HeroSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(100.43deg, #E3E7FF 0%, #FFE7FC 100%)",
      }}
    >
      <div className="section-container py-14 md:py-28">
        {" "}
        {/* h-[420px] flex flex-col justify-center */}
        <h1 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl lg:text-5xl font-medium font-stolzl text-center text-para-3">
          Connect With <span className="text-main">Us</span>
        </h1>
        <p className="text-center text-para max-w-[970px] mx-auto font-stolzl text-xs sm:text-sm md:text-base lg:text-lg mt-2">
          Need assistance or more details about our AI-accelerated programs?
          Contact CodIntern. Our team is dedicated to helping you achieve your
          learning and career goals.
        </p>
      </div>
    </div>
  );
};
