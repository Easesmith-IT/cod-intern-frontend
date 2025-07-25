import { cn } from "@/lib/utils";
import React from "react";

export const Stepper = ({ steps, currentStep, className }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <div
            className={cn(
              "flex w-9 h-9 sm:h-11 sm:w-11 items-center justify-center rounded-full text-sm font-medium transition-colors",
              {
                "bg-main text-white": step.id === currentStep,
                "bg-green-600 text-white": step.completed,
                "bg-[#ADABB4] text-white":
                  step.id !== currentStep && !step.completed,
              }
            )}
          >
            {step.completed ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <span className="font-stolzl sm:text-lg">{step.id}</span>
            )}
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={cn("h-0.5 w-12 sm:w-16 transition-colors", {
                "bg-green-600": step.completed,
                "bg-gray-300": !step.completed,
              })}
            />
          )}
        </div>
      ))}
    </div>
  );
};
