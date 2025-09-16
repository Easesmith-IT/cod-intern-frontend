"use client";

import Image from "next/image";

export const SatisfactionSection = () => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col px-5 pt-10 gap-9 md:px-10 lg:pt-14 lg:gap-14 xl:max-w-[1180px] xl:px-0 mx-auto">
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
        <div className="mx-auto">
          <Image
            src="/workshop/guaranteed.png"
            alt="100% Satisfaction Guaranteed"
            width={600}
            height={225}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
