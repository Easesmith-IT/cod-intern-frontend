import Image from "next/image";
import React from "react";

export const Info = ({ src, alt, title, desc }) => {
  return (
    <div className="flex justify-between gap-4 items-center py-3 border-b border-[#BEBEBE]">
      <div className="flex items-center gap-2">
        <Image src={src} width={14} height={14} alt={alt} />
        <p className="text-sm font-stolzl">{title} :</p>
      </div>
      <span className="text-[#9D9D9D] text-sm font-medium">{desc}</span>
    </div>
  );
};
