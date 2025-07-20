import Image from "next/image";
import React from "react";
import { Step } from "./step";

export const ThreeStepApproach = () => {
  return (
    <section className="py-24 section-container">
      <div className="flex justify-center text-center section-container max-w-[900px]">
        <h2 className="text-[46px] font-medium leading-14">
          <span className="text-main">Our 3-Step </span> AI-Enhanced Recruitment
          Approach
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <Step
          title="AI-Powered Profile Optimization"
          className="text-main"
          arr={[
            "AI-Enhanced Resume Crafting",
            "Intelligent LinkedIn Optimization",
            "Automated Multi-Platform Presence",
          ]}
        />
        <Step
          title="Elite Interview Preparation"
          className="text-black"
          arr={[
            "Identified Growth Areas",
            "Specialized Technical Drills",
            "Customized Company Simulations",
          ]}
        />
        <Step
          title="Strategic Opportunity Alignment"
          className="text-main"
          arr={[
            "Precise Competency Assessment",
            "Advanced Technical Proficiency Drills",
            "Tailored Enterprise Simulations",
          ]}
        />
      </div>
    </section>
  );
};
