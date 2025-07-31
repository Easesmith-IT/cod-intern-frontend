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
        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl lg:text-[46px] font-medium">
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
      </div>
    </div>
  );
};
