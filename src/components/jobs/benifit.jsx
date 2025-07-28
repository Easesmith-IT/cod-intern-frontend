import Image from "next/image";
import React from "react";

export const Benifit = ({ benifit }) => {
  return (
    <div className="flex gap-2 items-center border px-4 py-3 rounded-sm">
      <Image src={benifit.icon} width={20} height={20} alt="benifit" />
      <span>{benifit.title}</span>
    </div>
  );
};
