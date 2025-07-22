import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const AchieveYourGoals = () => {
  return (
    <div className="section-container py-24 grid grid-cols-[530px_1fr] items-center gap-14">
      <div>
        <div className="shadow-[0px_0px_15px_0px_#0000001F] max-w-[530px] p-4 rounded-md">
          <div className="flex gap-2 items-center">
            <h3 className="font-medium font-stolzl text-2xl">
              Active User right now
            </h3>
            <Image
              src="/about-us/light-on.svg"
              width={29}
              height={31}
              alt="Light On"
            />
          </div>
          <div className="flex gap-4 mt-5">
            <div className="w-[150px]">
              <h3 class="bg-gradient-to-r text-center font-stolzl font-bold text-3xl from-main to-para-3 bg-clip-text text-transparent">
                89%
              </h3>
              <p className="text-center text-para font-stolzl text-sm">
                of customer say they read reviews before buying a course
              </p>
              <Separator className="my-4" />
              <div className="flex gap-2 items-center">
                <Image
                  src="/about-us/star-fill.svg"
                  width={24}
                  height={24}
                  alt="Star"
                />
                <Image
                  src="/about-us/star-fill.svg"
                  width={24}
                  height={24}
                  alt="Star"
                />
                <Image
                  src="/about-us/star-fill.svg"
                  width={24}
                  height={24}
                  alt="Star"
                />
                <Image
                  src="/about-us/star-fill.svg"
                  width={24}
                  height={24}
                  alt="Star"
                />
                <Image
                  src="/about-us/star-fill.svg"
                  width={24}
                  height={24}
                  alt="Star"
                />
              </div>
            </div>
            <div>
              <Image
                src="/about-us/active-user.jpg"
                width={393}
                height={203}
                alt="Active User"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[46px] font-medium leading-14 capitalize">
          <span className="text-main">Achieve Your Goals </span> With Upgraded
          CodIntern Courses
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
        {/* <p className="font-stolzl text-sm text-para mt-5 font-book">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea
        </p> */}
        <ul className="mt-5 space-y-5">
          <li className="flex gap-2 items-center">
            <Image
              src="/about-us/list-item.svg"
              width={21}
              height={17}
              alt="List Item"
            />
            <span className="text-sm font-stolzl font-book text-para">
              Upskill Your Organization
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src="/about-us/list-item.svg"
              width={21}
              height={17}
              alt="List Item"
            />
            <span className="text-sm font-stolzl font-book text-para">
              Access more then 100K Online Courses
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src="/about-us/list-item.svg"
              width={21}
              height={17}
              alt="List Item"
            />
            <span className="text-sm font-stolzl font-book text-para">
              Learn the latest skills
            </span>
          </li>
        </ul>
        <Button size="xl" className="mt-5" variant="linearGradient">
          View Our Courses
        </Button>
      </div>
    </div>
  );
};
