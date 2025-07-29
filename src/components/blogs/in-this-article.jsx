"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const inThisArticle = [
  "Exploring Generative AI in Content Creation",
  "Steering Clear of Common AI Writing Pitfalls",
  "Understanding ChatGPT Capabilities - Define Your Style",
  "Understand Your Readers",
  "Creating Quality AI-powered Blogs that Stand Out",
  "Conclusion: Embracing AI in Blog Creation",
  "Afterword: The AI Behind This Article",
];
export const InThisArticle = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-[#F7EFFD] py-5 px-6 rounded-md max-h-[500px] overflow-y-auto">
      <h3 className="font-stolzl font-medium text-lg text-para-3">
        In this article
      </h3>
      <div className="mt-4 flex flex-col gap-2">
        {inThisArticle.map((item, index) => (
          <button
            onClick={() => setSelected(index)}
            key={index}
            className={cn(
              "text-[#1B1B1F] cursor-pointer min-h-10 font-stolzl border-l-3 text-sm text-left px-4 border-transparent",
              index === selected && "text-main border-main"
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
