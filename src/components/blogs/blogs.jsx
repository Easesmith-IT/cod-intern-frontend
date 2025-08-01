import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Blog } from "./blog";
import { cn } from "@/lib/utils";

export const BlogsComp = ({ children, category, className }) => {
  return (
    <div className={cn("mt-6 sm:mt-12", className)}>
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium">
          {children}
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2 max-[380px]:hidden"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
        <Button
          variant="ghost"
          className="text-main text-xs sm:text-sm !px-0 gap-1"
        >
          <span>View More</span>
          <ChevronRight className="size-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 sm:mt-10">
        <Blog
          href="/blogs/1"
          src="/blog/blog1.png"
          title="Code Optimization: Writing Smarter, Faster & Cleaner Code"
          timeStamp="31 July 2025 at 05:54"
          desc="In the fast-paced world of technology, simply writing code that works isn’t enough.
Whether you’re building a mobile app, a website, or a data-heavy backend system — your
users, clients, and teammates expect more than just functionality. They expect"
        />
        <Blog
          href="/blogs/2"
          src="/blog/blog2.png"
          title="When Robots Learn on Their Own: The Rise
of Self-Evolving AI in Robotics"
          timeStamp="31 July 2025 at 05:54"
          desc="In a world where machines are no longer just programmed — but learn, adapt, and evolve
— we are stepping into a new age of robotics powered by artificial intelligence. Gone are
the days when robots could only perform repetitive tasks. Today, they are becoming selflearners, capable of improving their performance without explicit human instructions. This
is not science fiction — it’s the dawn of self-evolving AI in robotics."
        />
        <Blog
          href="/blogs/3"
          src="/blog/blog3.png"
          title="Dynamic Programming: The Smart Way to
Solve Tough Problems"
          timeStamp="01 August 2025 at 10:28"
          desc="Let’s face it — the words “Dynamic Programming” sound technical, maybe even scary.
But what if I told you that it’s actually just a smart way to solve big problems by thinking
ahead and remembering what you’ve already done?"
        />
        <Blog
          href="/blogs/4"
          src="/blog/blog4.png"
          title="Top Robotics Trends That Will Dominate
the Next Decade"
          timeStamp="01 August 2025 at 11:21"
          desc="Robots are no longer just machines in science fiction movies. They are now part of our
everyday lives — helping us in hospitals, factories, homes, and even in space. But what
does the future hold?"
        />
        <Blog
          href="/blogs/5"
          src="/blog/blog5.png"
          title="What is API Integration? A Simple Guide for Everyone"
          timeStamp="01 August 2025 at 12:12"
          desc="In today’s fast-paced digital world, apps and platforms need to work together seamlessly. Think
about reserving a cab, placing an online order, or getting a payment notifcation — all of this
happens because different systems are communicating behind the scenes."
        />
      </div>
    </div>
  );
};
