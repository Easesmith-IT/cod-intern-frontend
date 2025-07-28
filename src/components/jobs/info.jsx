import Image from "next/image";
import React from "react";

export const Info = ({ img, heading, value }) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <Image src={img} width={16} height={16} alt="info" />
        <p className="font-stolzl font-book text-para text-xs sm:text-sm uppercase">
          {heading}
        </p>
      </div>
      {value && (
        <h5 className="font-stolzl text-sm sm:text-base font-normal mt-1">
          {value}
        </h5>
      )}
    </div>
  );
};
