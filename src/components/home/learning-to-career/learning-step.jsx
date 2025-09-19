import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const LearningStep = ({ title, title1, desc, index, points }) => {
  return (
    <div className="border w-full border-[#D9D9D940] px-4 py-8 space-y-4">
      <div className="flex justify-center items-center mx-auto border-2 size-[68px] rounded-full font-stolzl font-medium text-xl border-main">
        {index}
      </div>
      <div>
        <h4 className="font-stolzl font-medium sm:text-lg text-center">
          {title}
        </h4>
        <h4 className="font-stolzl font-medium sm:text-lg text-center">
          {title1}
        </h4>
      </div>
      <div className="font-stolzl font-book text-xs sm:text-sm text-para text-center">
        {desc}
      </div>
      <ul className="font-stolzl font-book text-xs sm:text-sm text-para space-y-1 mt-2 list-disc ml-4">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

LearningStep.Skeleton = function LearningStepSkeleton({ points = 3 }) {
  return (
    <div className={`border w-full border-[#D9D9D940] px-4 py-8 space-y-4`}>
      {/* Circle index placeholder */}
      <div className="flex justify-center items-center mx-auto border-2 size-[68px] rounded-full">
        <Skeleton className="h-6 w-6 rounded" />
      </div>

      {/* Titles */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-2/3 mx-auto rounded" />
        <Skeleton className="h-5 w-1/2 mx-auto rounded" />
      </div>

      {/* Description */}
      <div className="flex justify-center">
        <Skeleton className="h-4 w-4/5 rounded" />
      </div>

      {/* Points */}
      <ul className="space-y-2 mt-2 ml-4">
        {Array.from({ length: points }).map((_, idx) => (
          <li key={idx} className="">
            <Skeleton className="h-3 w-4/5 rounded" />
          </li>
        ))}
      </ul>
    </div>
  );
};
