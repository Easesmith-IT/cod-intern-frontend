"use client";

import Image from "next/image";

export const SatisfactionSection = () => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col px-5 py-11 gap-9 md:px-10 lg:py-20 lg:gap-14 xl:max-w-[1180px] xl:px-0 mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-2 text-center lg:gap-3">
          <p className="text-lg font-semibold leading-7 text-main tracking-[0.36px]">
            Still not sure?
          </p>
          <h2
            className="text-3xl font-bold leading-9 text-black lg:text-[52px] lg:leading-[60px]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            100% Satisfaction Guaranteed
          </h2>
        </div>

        {/* Image */}
        <div className="mx-auto w-[320px] h-[67px] lg:w-[600px] lg:h-[125px]">
          <Image
            src="/workshop/100.webp"
            alt="100% Satisfaction Guaranteed"
            width={600}
            height={125}
            className="object-cover w-full h-full rounded-xl lg:rounded-[22px]"
          />
        </div>
      </div>
    </section>
  );
};
