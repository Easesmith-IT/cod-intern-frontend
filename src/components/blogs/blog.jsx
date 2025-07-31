import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Blog = ({ title, desc, timeStamp, href = "/blogs/1", src }) => {
  return (
    <div className="shadow-[0px_0px_8.24px_0px_#65656517] rounded-md">
      <div className="p-4 bg-[#F6F6F6] rounded-md">
        <Link href={href}>
          <Image
            src={src}
            className="rounded-t-md"
            width={384}
            height={226}
            alt="Blog"
          />
        </Link>

        <div className="text-xs mt-5 font-stolzl font-book flex gap-1 text-[#868686] items-center">
          <Image src="/clock-1.svg" width={13} height={13} alt="Clock" />
          {timeStamp}
        </div>
        <Link className="inline-block mt-4" href={href}>
          <h3 className="font-stolzl font-medium text-para-3 hover:underline text-base sm:text-lg line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="font-stolzl text-xs sm:text-sm text-para font-book line-clamp-3 mt-4">
          {desc}
        </p>
      </div>
    </div>
  );
};
