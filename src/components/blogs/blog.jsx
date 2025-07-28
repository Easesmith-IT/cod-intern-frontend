import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Blog = () => {
  return (
    <div className="max-w-[384px] shadow-[0px_0px_8.24px_0px_#65656517] rounded-t-md">
      <Link href="/blogs/123456">
        <Image src="/blog/blog.jpg" width={384} height={226} alt="Blog" />
      </Link>

      <div className="p-4 bg-[#F6F6F6]">
        <span className="text-xs font-stolzl font-book flex gap-1 text-[#868686] items-center">
          <Image src="/clock-1.svg" width={13} height={13} alt="Clock" />
          17 July 2017 at 16:47
        </span>
        <h3 className="font-stolzl font-medium text-para-3 hover:underline text-base sm:text-lg mt-4 line-clamp-2">
          <Link href="/blogs/123456">
            How to Write Articles with AI? Include Your Unique Perspective
          </Link>
        </h3>
        <p className="font-stolzl text-xs sm:text-sm text-para font-book line-clamp-3 mt-4">
          With increasing privacy regulations and the phasing out of third-party
          cookies, brands are investing in
        </p>
      </div>
    </div>
  );
};
