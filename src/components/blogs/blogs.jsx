import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Blog } from "./blog";
import { cn } from "@/lib/utils";

export const BlogsComp = ({ children, category, className }) => {
  return (
    <div className={cn("mt-12", className)}>
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
        <Button variant="ghost" className="text-main text-xs sm:text-sm !px-0 gap-1">
          <span>View More</span>
          <ChevronRight className="size-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <Blog key={index} />
        ))}
      </div>
    </div>
  );
};
