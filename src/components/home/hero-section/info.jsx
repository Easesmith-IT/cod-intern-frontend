import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const Info = ({title, className}) => {
  return (
    <div
      className={cn(
        "absolute flex items-center text-base leading-5 text-right gap-2",
        className
      )}
    >
      <p>{title}</p>
      <Image width={12} height={12} src="/ellipse.svg" alt="ellipse" />
    </div>
  );
};
