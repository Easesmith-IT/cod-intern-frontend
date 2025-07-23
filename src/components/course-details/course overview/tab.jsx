import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { act } from "react";

export const Tab = ({ onClick, active, className, title, src, src1, alt }) => {
  return (
    <Button
      onClick={onClick}
      variant={active ? "codIntern" : "secondary"}
      className={cn(
        className,
        "flex gap-2 items-center rounded px-5 h-12 md:h-14 w-[170px] md:w-auto rounded-r-none",
        active && "rounded-r"
      )}
    >
      <Image src={active ? src : src1} width={17} height={17} alt={alt} />
      <span
        className={cn(
          "font-stolzl text-xs md:text-base font-medium",
          active && "text-white",
          !active && "text-black"
        )}
      >
        {title}
      </span>
    </Button>
  );
};
