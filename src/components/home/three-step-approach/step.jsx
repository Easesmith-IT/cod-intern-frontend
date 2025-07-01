import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

export const Step = ({ title, className, arr }) => {
  return (
    <div className="border rounded p-7">
      <h4 className={cn("font-stolzl font-medium text-2xl", className)}>
        {title}
      </h4>
      <div className="flex flex-col gap-1 mt-5">
        {arr.map((item, i) => (
          <div className="flex items-center gap-2" key={i}>
            <div className="w-4 h-4 rounded-full flex justify-center items-center bg-[#F4F3F5]">
              <Check className="size-2" />
            </div>
            <p className="text-sm text-para font-stolzl">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
