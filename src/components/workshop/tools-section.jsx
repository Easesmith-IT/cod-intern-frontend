"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const tools = [
  {
    name: "Github",
    src: "/workshop/github.png",
  },
  {
    name: "Langchain",
    src: "/workshop/langchain.png",
  },
  {
    name: "Hugging face",
    src: "/workshop/hugging-face.png",
  },
  {
    name: "Stable Diffusion",
    src: "/workshop/stability.png",
  },
  {
    name: "Suno",
    src: "/workshop/suno.png",
  },
  {
    name: "Stability AI",
    src: "/workshop/stability-ai.png",
  },
];

export const ToolsSection = () => {
  return (
    <section className="relative w-full mx-auto overflow-hidden py-11 lg:py-20 xl:py-24">
      <h2
        className="text-2xl font-bold text-center text-black lg:text-[40px] lg:leading-[48px] mb-9 lg:mb-14 xl:mb-12"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        Tools You Will Learn
      </h2>

      <div className="flex flex-col items-center gap-4">
        {/* First scrolling row (mobile) */}
        <div className="block md:hidden w-full">
          <Marquee autoFill gradient={false} speed={10}>
            <FirstScrollingRow />
          </Marquee>
        </div>

        {/* First scrolling row (desktop) */}
        <div className="hidden md:block">
          <FirstScrollingRow />
        </div>

        {/* Second scrolling row (mobile) */}
        <div className="block md:hidden w-full">
          <Marquee autoFill gradient={false} speed={10} direction="right">
            <SecondScrollingRow />
          </Marquee>
        </div>

        {/* Second scrolling row (desktop) */}
        <div className="hidden md:block">
          <SecondScrollingRow />
        </div>
      </div>
    </section>
  );
};

const FirstScrollingRow = ({ className }) => {
  return (
    <div
      className={cn(
        "flex gap-4 w-max overflow-x-auto scrolling-slider mx-2",
        className
      )}
    >
      {tools.slice(0, 3).map((tool) => (
        <div
          key={tool.name}
          className="rounded-xl px-5 py-4 flex flex-col items-center justify-center gap-1 min-w-[164px] lg:w-[210px] lg:px-8 lg:py-4 bg-gradient-to-b from-main/40 to-main/10 border"
        >
          <Image
            src={tool.src}
            alt={tool.name}
            width={60}
            height={60}
            className="h-12 lg:h-[60px] object-contain"
          />
          <div className="text-base font-book text-black">
            {tool.name}
          </div>
        </div>
      ))}
    </div>
  );
};

const SecondScrollingRow = ({ className }) => {
  return (
    <div
      className={cn(
        "flex gap-4 w-max overflow-x-auto scrolling-slider-reverse mt-4 mx-2",
        className
      )}
    >
      {tools.slice(3).map((tool, i) => (
        <div
          key={tool.name}
          className="rounded-xl px-5 py-4 flex flex-col items-center justify-center gap-1 min-w-[164px] lg:w-[210px] lg:px-8 lg:py-4 bg-gradient-to-b from-main/40 to-main/10 border"
        >
          <Image
            src={tool.src}
            alt={tool.name}
            width={60}
            height={60}
            className={cn(
              "h-12 lg:h-[60px] object-contain",
              i === 2 && " lg:w-[80%]"
            )}
          />
          <div className="text-base font-book text-black">{tool.name}</div>
        </div>
      ))}
    </div>
  );
};
