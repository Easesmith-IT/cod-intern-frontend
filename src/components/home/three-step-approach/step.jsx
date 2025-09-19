import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

export const Step = ({ title, className, arr }) => {
  return (
    <div className="border rounded p-7">
      <h4
        className={cn(
          "font-stolzl font-medium md:text-lg lg:text-xl",
          className
        )}
      >
        {title}
      </h4>
      <div className="flex flex-col gap-1 mt-5">
        {arr.map((item, i) => (
          <div className="flex items-center gap-2" key={i}>
            <div className="w-4 h-4 rounded-full flex justify-center items-center bg-[#F4F3F5]">
              <Check className="size-2" />
            </div>
            <p className="text-xs lg:text-sm text-para font-stolzl">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Step.Skeleton = function StepSkeleton({ lines = 4 }) {
  return (
    <div className="border rounded p-7">
      {/* title */}
      <div className="mb-5">
        <Skeleton className="h-6 w-3/5 md:w-2/5 lg:w-1/3 rounded" />
      </div>

      {/* list */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div className="flex items-center gap-3" key={i}>
            <div className="w-4 h-4 rounded-full flex justify-center items-center bg-[#F4F3F5]">
              {/* circular skeleton for the check icon */}
              <Skeleton className="w-3 h-3 rounded-full" />
            </div>

            {/* text skeleton */}
            <div className="flex-1">
              <Skeleton className="h-3 w-4/5 lg:w-3/5 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
