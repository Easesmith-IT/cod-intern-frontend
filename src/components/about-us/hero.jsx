import React from 'react'

export const HeroSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(100.43deg, #E3E7FF 0%, #FFE7FC 100%)",
      }}
    >
      <div className="section-container py-28"> {/* h-[420px] flex flex-col justify-center */}
        <h1 className="font-medium font-stolzl text-5xl text-center text-[#2C1D43]">
          About <span className="text-main">Us</span>
        </h1>
        <p className="text-center text-para max-w-[970px] mx-auto font-stolzl text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur. Ligula lorem quam at hac elit
          purus egestas malesuada. Rutrum adipiscing metus dictum tellus. Sit
          fusce sit nullam vulputate odio at eu. Pellentesque faucibus dis
          volutpat arcu aenean in aliquet et.{" "}
        </p>
      </div>
    </div>
  );
}
