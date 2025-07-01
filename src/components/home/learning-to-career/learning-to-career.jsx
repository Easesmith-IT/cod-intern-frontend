import Image from "next/image";
import React from "react";
import { LearningStep } from "./learning-step";

export const LearningToCareer = () => {
  return (
    <div className="section-container">
      <h2 className="text-[46px] text-center capitalize w-full font-medium leading-14">
        <span className="text-main">Turn your learning</span> into a career that
        you’re proud of
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="step"
        />
      </h2>

      <div className="flex justify-center shrink-0 flex-wrap mt-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <LearningStep
            key={index}
            index={index}
            title="Follow 3A"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. do eiusmod tempor incididunt."
          />
        ))}
      </div>
    </div>
  );
};
