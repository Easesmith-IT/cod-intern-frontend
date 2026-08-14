import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { previewImage } from "@/lib/utils";

export const ConnectWithUs = ({ data }) => {
  const { content, images } = data || {};

  return (
    <section
      style={{ backgroundImage: "url(/connect-with-us-bg.jpg)" }}
      className="h-[383px] my-24 overflow-hidden"
    >
      <div className="section-container flex justify-between items-center">
        <div className="py-16">
          <h3 className="text-2xl font-stolzl leading-9 md:text-4xl  font-medium lg:leading-[60px] text-white max-w-[900px]">
            Connect with Confidence — We’re Ready to Build What’s Next.
          </h3>
          <p className="font-stolzl max-w-[710px] text-xs md:text-sm text-[#FFFFFFCC] mt-4 mb-6 font-book">
            {content?.desc}
          </p>
          <Button className="rounded-md text-xs md:text-sm">Read More</Button>
        </div>
        <div className="hidden md:block">
          <Image
            src={previewImage(images?.[0]?.image, "/connect-with-us-img.svg")}
            className="mt-14"
            width={156}
            height={312}
            alt="connect-with-us"
          />
        </div>
      </div>
    </section>
  );
};
