import Image from "next/image";
import React from "react";

export const Info = ({ index, icon, width=44, height=44, title, desc }) => {
  return (
    <div className="max-w-[380px] flex flex-col items-center -translate-y-16 -mb-16">
      <div className="size-36 rounded-full bg-gradient-to-r from-main to-para-3 p-[2px]">
        <div className="rounded-full bg-white w-full h-full p-4 relative flex items-center justify-center">
          <div className="size-10 absolute top-2 -right-1 rounded-full bg-main text-white font-stolzl flex items-center justify-center">
            {index}
          </div>
          <div className="bg-white size-full flex justify-center items-center rounded-full shadow-[0px_4px_15px_0px_#00000024]">
            <Image src={icon} width={width} height={height} alt={title} />
          </div>
        </div>
      </div>
      <h3 className="font-stolzl text-lg font-medium mt-5">{title}</h3>
      <p className="text-para font-stolzl font-book text-center mt-3">
        {desc}
      </p>
    </div>
  );
};
