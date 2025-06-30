"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Header } from "./header";
import Image from "next/image";

export const HeroSectionWithHeader = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <div
          className="relative h-[650px]"
          style={{ backgroundImage: "url(/hero-bg.svg)" }}
        >
          <Header />
          {children}
          <Image
            className="absolute right-0 bottom-0"
            width={562}
            height={750}
            src="/hero-bg-1.svg"
            alt="hero-bg"
          />
        </div>
      ) : (
        <Header />
      )}
    </>
  );
};
