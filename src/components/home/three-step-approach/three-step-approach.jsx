import Image from "next/image";
import React from "react";
import { Step } from "./step";

export const ThreeStepApproach = () => {
  return (
    <section className="py-28 section-container">
      <div className="flex justify-center text-center section-container max-w-[900px]">
        <h2 className="text-[46px] font-medium leading-14">
          <span className="text-main">Our 3-Step Approach</span> towards
          Providing Recruitment Opportunities
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="step"
          />
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <Step
          title="Profile Building"
          className="text-main"
          arr={[
            "Resume Creation",
            "LinkedIn Profile Optimization",
            "Profile creation on other platforms",
          ]}
        />
        <Step
          title="Mock Interviews"
          className="text-black"
          arr={[
            "Understanding your weak points",
            "Have Problem solving & System design interviews",
            "On-demand company-specific interviews",
          ]}
        />
        <Step
          title="Right Opportunities"
          className="text-main"
          arr={[
            "Understanding your weak points",
            "Have Problem solving & System design interviews",
            "On-demand company-specific interviews",
          ]}
        />
      </div>
    </section>
  );
};
