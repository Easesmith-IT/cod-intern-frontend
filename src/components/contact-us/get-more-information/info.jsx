import Image from "next/image";
import React from "react";

export const Info = ({ index, icon, width = 44, height = 44, title, desc }) => {
  return (
    <div className="max-w-[380px] flex flex-col items-center md:-translate-y-16 md:-mb-16">
      <div className="size-32 md:size-36 rounded-full bg-gradient-to-r from-main to-para-3 p-[2px]">
        <div className="rounded-full bg-white w-full h-full p-4 relative flex items-center justify-center">
          <div className="size-8 md:*:size-10 absolute top-2 -right-1 text-sm md:text-base rounded-full bg-main text-white font-stolzl flex items-center justify-center">
            {index}
          </div>
          <div className="bg-white size-full flex justify-center items-center rounded-full shadow-[0px_4px_15px_0px_#00000024]">
            <Image src={icon} width={width} height={height} alt={title} />
          </div>
        </div>
      </div>
      <h3 className="font-stolzl text-base md:text-lg text-center font-medium mt-5">
        {title}
      </h3>
      <p className="text-para text-xs sm:text-sm lg:text-base font-stolzl font-book text-center mt-3">
        {desc}
      </p>
    </div>
  );
};

Info.Skeleton = function InfoCardSkeleton() {
  return (
    <div className="max-w-[380px] flex flex-col items-center">
      {/* Icon wrapper */}
      <div className="size-32 md:size-36 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 p-[2px]">
        <div className="rounded-full bg-white w-full h-full p-4 relative flex items-center justify-center">
          {/* Index bubble */}
          {/* <Skeleton className="size-8 md:size-10 absolute top-2 -right-1 rounded-full" /> */}
          {/* Icon placeholder */}
          <Skeleton className="size-full rounded-full" />
        </div>
      </div>

      {/* Title placeholder */}
      <Skeleton className="h-5 w-32 rounded-md mt-5" />

      {/* Description placeholder */}
      <div className="flex flex-col items-center gap-2 mt-3">
        <Skeleton className="h-3 w-60 rounded-md" />
        <Skeleton className="h-3 w-52 rounded-md" />
        <Skeleton className="h-3 w-40 rounded-md" />
      </div>
    </div>
  );
};
