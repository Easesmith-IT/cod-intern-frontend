import Image from "next/image";
import React from "react";

export const Info = ({ title, desc, icon, alt, width, height }) => {
  return (
    <div className="flex gap-3">
      <div
        className="size-12 shrink-0 rounded-md flex justify-center items-center"
        style={{
          background: "linear-gradient(263.55deg, #F3F1F5 8.66%, #F3F4FF 100%)",
        }}
      >
        <Image src={icon} width={width} height={height} alt={alt} />
      </div>
      <div>
        <h4 className="font-stolzl text-sm sm:text-base text-para-3 font-normal">{title}</h4>
        <p className="bg-gradient-to-r font-stolzl font-normal text-xs sm:text-sm from-main to-para-3 bg-clip-text text-transparent">
          {desc}
        </p>
      </div>
    </div>
  );
};
