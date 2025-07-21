import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const Universities = () => {
  return (
    <section className="bg-[#2C1D43] py-14 md:py-16 w-full">
      <div className="section-container text-white flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm sm:text-lg md:text-xl lg:text-[26px] font-medium font-stolzl sm:max-w-[360px]">
          Programs in Collaboration with world's top Universities & MNC's
        </p>
        <Image
          src="/seperator.svg"
          width={11}
          height={119}
          className="-my-5 sm:my-0 sm:ml-4 rotate-90 sm:rotate-0"
          alt="seperator"
        />

        <Marquee autoFill gradient gradientColor="#2C1D43" gradientWidth={200}>
          <Image
            src="/logitech.svg"
            className="px-5"
            width={100}
            height={30}
            alt="entity"
          />
          <Image
            src="/google-1.svg"
            className="px-5"
            width={100}
            height={30}
            alt="entity"
          />
          <Image
            src="/facebook.svg"
            className="px-5"
            width={100}
            height={30}
            alt="entity"
          />
          <Image
            src="/amazon.svg"
            className="px-5"
            width={100}
            height={30}
            alt="entity"
          />
        </Marquee>
      </div>
    </section>
  );
};
