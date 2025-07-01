import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const Universities = () => {
  return (
    <section className="bg-[#2C1D43] py-16 w-full">
      <div className="section-container text-white flex gap-4">
        <p className="text-[26px] font-medium font-stolzl max-w-[360px]">
          Programs in Collaboration with world's top Universities & MNC's
        </p>
        <Image
          src="/seperator.svg"
          width={11}
          height={119}
          className="ml-4"
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
