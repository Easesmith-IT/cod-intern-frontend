import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const ShareLink = ({
  href,
  className,
  src,
  children,
  width = 12,
  height = 12,
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={cn(
        "flex justify-center items-center size-[45px] group hover:scale-105 active:scale-100 transition-all p-4 bg-[#FFFFFF14] rounded-full",
        className
      )}
    >
      {children ? (
        children
      ) : (
        <Image src={src} width={width} height={height} alt="social" />
      )}
    </a>
  );
};
