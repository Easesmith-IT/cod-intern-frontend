"use client";

import { CircularProgressBar } from "@/components/home/faqs/circular-progress";
import { Button } from "@/components/ui/button";
import React from "react";
import { Cards } from "./cards";
import { useIsMobile } from "@/hooks/use-mobile";

export const WelcomeBack = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section-container pb-24 pt-14">
      <div className="flex flex-col items-center sm:items-start gap-14 sm:flex-row sm:justify-between">
        <div>
          <h2 className="font-stolzl text-2xl sm:text-4xl font-medium">
            <span className="text-main">Welcome</span> back, John!
          </h2>
          <p className="text-para text-xs sm:text-base font-stolzl mt-2">
            You’ve completed 3 out of 5 courses this month. Keep it up!
          </p>
          <Button
            size={isMobile ? "default" : "xl"}
            variant="linearGradient"
            className="rounded text-xs sm:text-sm mt-10"
          >
            Continue Last Course
          </Button>
        </div>
        <div>
          <CircularProgressBar
            value={60}
            size={160}
            colors={["#9237E3", "#2C1D43"]}
            subText="Completed"
            headingClassName="text-main text-xl md:text-3xl"
          />
        </div>
      </div>

      <Cards />
    </section>
  );
};
