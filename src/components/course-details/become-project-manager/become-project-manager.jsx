import Image from "next/image";
import React from "react";
import { Step } from "./step";
import { StepLeftImg } from "./step-left-img";
import { StepSeperator } from "./step-seperator";

export const BecomeProjectManager = () => {
  return (
    <section className="pt-12 md:pt-24 section-container">
      <div className="flex justify-center text-center section-container max-w-[830px]">
        <h2 className="text-2xl leading-9 lg:leading-14 md:text-4xl lg:text-[46px] font-medium capitalize">
          <span className="text-main">Path to Becoming</span> a Certified
          Project Manager
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
      </div>
      <div className="flex flex-col items-center sm:flex-row flex-wrap justify-center lg:flex-nowrap sm:items-start gap-5 sm:gap-10 lg:gap-2 mt-10">
        <StepLeftImg className="mb-4 sm:hidden lg:block" />

        <Step
          icon="/step.svg"
          title="Learn"
          desc="Start learning with CodIntern's masterclass curriculum. Our interactive modules present core project management concepts, methodologies, and practices, establishing a solid theoretical framework."
          index="1"
        />

        <StepSeperator className="sm:hidden lg:block" />

        <Step
          icon="/step-1.svg"
          title="Study"
          desc="Enrich your knowledge through detailed study guides and interactive tools. Reinforce important concepts, analyze case studies, and solidify your knowledge with our systematic learning process."
          index="2"
        />

        <StepSeperator className="rotate-180 sm:hidden lg:block" />

        <Step
          icon="/step-2.svg"
          title="Practice"
          desc="Practice your knowledge in hands-on simulations and actual project scenarios. Our practical classes and capstone projects offer rich experience, getting you ready for real project obstacles."
          index="3"
        />

        <StepSeperator className="sm:hidden lg:block" />

        <Step
          icon="/step-3.svg"
          title="Get Certified"
          className="text-main"
          desc="Complete the course successfully and get your globally accepted certification. With CodIntern's support, you'll obtain the credentials and self-belief to become a certified Project Manager."
          index="4"
        />

        <StepLeftImg
          className="mt-4 sm:mt-16 rotate-180 sm:hidden lg:block"
          alt="Step Right Img"
        />
      </div>
    </section>
  );
};
