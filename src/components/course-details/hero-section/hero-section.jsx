import React from "react";
import { HeroSectionContent } from "./hero-section-content";
import { ApplyNowForm } from "./apply-now-form";
import Image from "next/image";

export const HeroSection = ({ course }) => {
  return (
    <section
      style={{ backgroundImage: "url(/hero-bg.svg)" }}
      // className="h-[600px]"
    >
      <div className="section-container relative flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-5 py-10">
        <HeroSectionContent course={course} />
        <ApplyNowForm />
        <Image
          width={117}
          height={172}
          src="/hero-img-1.svg"
          alt="hero-img-1"
          className="absolute right-0 top-10 z-[2]"
        />
      </div>
      <Image
        className="absolute right-0 top-5 bottom-0 hidden lg:block"
        width={562}
        height={630}
        src="/hero-bg-1.svg"
        alt="hero-bg"
      />
    </section>
  );
};
