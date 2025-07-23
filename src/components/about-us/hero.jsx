import React from 'react'

export const HeroSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(100.43deg, #E3E7FF 0%, #FFE7FC 100%)",
      }}
    >
      <div className="section-container py-28">
        {" "}
        {/* h-[420px] flex flex-col justify-center */}
        <h1 className="font-medium font-stolzl text-5xl text-center text-para-3">
          About <span className="text-main">Us</span>
        </h1>
        <p className="text-center text-para max-w-[970px] mx-auto font-stolzl text-lg mt-2">
          CodIntern, a DPIIT-approved EdTech platform and Skill India Training
          Partner, equips students with AI-facilitated learning, experiential
          learning, and career guidance—filling the gap between education and
          employment for a technology-enabled workforce in India.
        </p>
      </div>
    </div>
  );
}
