import { cn } from '@/lib/utils';
import React from 'react'

export const Stepper = ({ steps, currentStep, className }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors",
              {
                "bg-violet-600 text-white": step.id === currentStep,
                "bg-green-600 text-white": step.completed,
                "bg-gray-400 text-white":
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
              step.id
            )}
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={cn("h-0.5 w-16 transition-colors", {
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
