import Image from "next/image";
import React from "react";
import Info from "./info";

export const ShapingFutures = () => {
  return (
    <section className="section-container pb-24">
      <h2 className="text-[46px] font-medium leading-14 capitalize">
        <span className="text-main">Shaping Futures</span> With Purpose
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>
      <p className="font-stolzl text-sm text-para mt-2 font-book">
        Find precisely the decision makers you need and close the deal.
      </p>

      <div className="grid grid-cols-3 gap-5 mt-7">
        <Info
          img="/about-us/who-we-are.svg"
          title="Who We Are?"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
        />
        <Info
          img="/about-us/our-mission.svg"
          title="Our Mission"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
        />
        <Info
          img="/about-us/our-vision.svg"
          title="Our Vision"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
        />
      </div>
    </section>
  );
};
