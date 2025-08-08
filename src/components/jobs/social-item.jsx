import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const SocialItem = ({ icon, alt, title, className, href }) => {
  return (
    <div
      className={cn(
        "max-w-[520px] w-full rounded-sm p-6 flex items-center flex-wrap gap-4",
        className
      )}
    >
      <Image src={icon} className="size-12 sm:size-16" width={64} height={64} alt={alt || title} />
      <div className="text-[#F5F5F5]">
        <p className="font-stolzl text-base sm:text-2xl font-book">Follow Us On</p>
        <h4 className="font-stolzl font-medium text-xl sm:text-4xl">{title}</h4>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-xs sm:text-base"
          href={href}
        >
          {href}
        </a>
      </div>
      <Button className="bg-white text-black font-normal hover:bg-white hover:text-black animate-btn sm:ml-auto px-6 h-9 sm:h-10 rounded-sm">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-base"
          href={href}
        >
          Follow Now
        </a>
      </Button>
    </div>
  );
};
