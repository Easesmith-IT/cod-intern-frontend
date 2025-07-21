import Image from "next/image";
import React from "react";
import { Info } from "./info";

export const GetMoreInformation = () => {
  return (
    <section className="section-container py-24">
      <h2 className="text-[46px] font-medium text-center">
        <span className="text-main">Get More</span> Information
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <div className="w-full h-[1px] bg-[#C9C9C9] relative mt-32">
        <div className="size-2 rounded-full bg-[#C9C9C9] absolute -left-0.5 -top-1"></div>
        <div className="size-2 rounded-full bg-[#C9C9C9] absolute -right-0.5 -top-1"></div>
      </div>
      <div className="flex gap-[70px] justify-center items-start">
        <Info
          index={1}
          icon="/contact-us/time-saving.svg"
          width={44}
          height={47}
          title="Time Saving"
          desc="Lorem ipsum dolor sit amet consectetur. In tincidunt aliquet maecenas accumsan libero elit orci et. "
        />
        <Image className="-translate-y-2" src="/contact-us/arrow-right.svg" width={15} height={19} alt="Arrow Right" />
        <Info
          index={2}
          icon="/contact-us/cost-effective.svg"
          width={44}
          height={44}
          title="Cost Effective"
          desc="Lorem ipsum dolor sit amet consectetur. In tincidunt aliquet maecenas accumsan libero elit orci et. "
        />
        <Image className="-translate-y-2" src="/contact-us/arrow-right.svg" width={15} height={19} alt="Arrow Right" />
        <Info
          index={3}
          icon="/contact-us/reliable-and-flexible.svg"
          width={44}
          height={41}
          title="Reliable and Flexible"
          desc="Lorem ipsum dolor sit amet consectetur. In tincidunt aliquet maecenas accumsan libero elit orci et. "
        />
      </div>
    </section>
  );
};
