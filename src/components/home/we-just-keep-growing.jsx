import Image from "next/image";
import React from "react";

export const WeJustKeepGrowing = ({ data }) => {
  const { content, images } = data || {};
  return (
    <div className="section-container flex flex-col items-center">
      <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium">
        <span className="text-main">We Just</span> Keep Growing
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <p className="text-para text-center mt-4 text-xs lg:text-base font-stolzl font-book max-w-[814px] mx-auto">
        {content?.desc}
      </p>

      <Image
        src={images?.[0]?.image || "/we-just-keep-growing.jpg"}
        className="mt-12"
        width={1000}
        height={340}
        alt="we just keep growing"
      />
    </div>
  );
};
