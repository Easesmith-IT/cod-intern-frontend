import Image from "next/image";
import React from "react";

export const StepLeftImg = ({ className = "mt-10", alt = "Step Left Img" }) => {
  return (
    <Image
      src="/step-left-img.svg"
      width={70}
      height={48}
      className={className}
      alt={alt}
    />
  );
};
