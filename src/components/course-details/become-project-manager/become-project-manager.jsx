import Image from "next/image";
import React from "react";
import { Step } from "./step";
import { StepLeftImg } from "./step-left-img";
import { StepSeperator } from "./step-seperator";

export const BecomeProjectManager = () => {
  return (
    <section className="pt-28 section-container">
      <div className="flex justify-center text-center section-container max-w-[830px]">
        <h2 className="text-[46px] font-medium leading-14 capitalize">
          <span className="text-main">Process to become</span> a certified
          Project Manager Course
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="step"
          />
        </h2>
      </div>
      <div className="flex items-start gap-2 mt-10">
        <StepLeftImg />

        <Step icon="/step.svg" title="Learn" desc="" index="1" />

        <StepSeperator />

        <Step icon="/step-1.svg" title="Study" desc="" index="2" />

        <StepSeperator className="rotate-180" />

        <Step icon="/step-2.svg" title="Practice" desc="" index="3" />

        <StepSeperator />

        <Step
          icon="/step-3.svg"
          title="Get Certified"
          className="text-main"
          desc=""
          index="1"
        />

        <StepLeftImg className="mt-16 rotate-180" alt="Step Right Img" />
      </div>
    </section>
  );
};
