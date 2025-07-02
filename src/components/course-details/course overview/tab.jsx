import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { act } from "react";

export const Tab = ({ onClick, active, className, title, src, alt }) => {
  return (
    <Button
      onClick={onClick}
      variant={active ? "codIntern" : "secondary"}
      className={cn(
        className,
        "flex gap-2 items-center rounded px-5 h-14 rounded-r-none"
      )}
    >
      <Image src={src} width={17} height={17} alt={alt} />
      <span
        className={cn(
          "font-stolzl font-medium",
          active && "text-white",
          !active && "text-black"
        )}
      >
        {title}
      </span>
    </Button>
  );
};
