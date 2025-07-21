import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-para-3">
      <div className="section-container flex flex-col md:flex-row">
        <div className="pb-6 pt-10 sm:py-10 sm:mr-16 flex justify-center items-center">
          <Image
            src="/cod-intern-logo.svg"
            className="w-48 sm:w-[274px]"
            width={274}
            height={80}
            alt="logo"
          />
        </div>
        <Separator
          orientation="vertical"
          className="bg-[#FFFFFF66] hidden md:data-[orientation=vertical]:h-60 xl:data-[orientation=vertical]:h-48"
        />
        <div className="py-8 sm:py-10 sm:mx-16 xl:mx-28 flex flex-col xl:flex-row xl:items-center gap-5 sm:gap-10 justify-between">
          <h4 className="font-stolzl sm:max-w-[332px] font-medium text-lg sm:text-2xl text-white">
            Subscribe Our Newsletter For Latest Updates
          </h4>

          <div className="flex gap-1 bg-white h-12 p-0.5 w-full lg:w-[400px] rounded">
            <input
              className="h-full w-full text-xs px-4 focus:border-none focus:outline-none"
              placeholder="Enter email address..."
            />
            <Button className="h-full px-2 sm:px-4" variant="linearGradient">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-[#FFFFFF66]" />

      <div className="section-container py-12 flex flex-col sm:flex-row gap-10 sm:gap-20 sm:items-center sm:justify-between">
        <div className="">
          <h3 className="font-stolzl font-medium text-lg sm:text-2xl text-white">
            About Company
          </h3>
          <Image
            src="/horizontal-line.svg"
            className="mt-1"
            width={66}
            height={3}
            alt="horizontal-line"
          />
          <p className="max-w-[380px] w-full mt-4 font-stolzl font-book text-sm text-white">
            Continually optimize backward manufactured products whereas
            communities negotiate life compelling alignments
          </p>

          <h5 className="font-stolzl font-medium text-base sm:text-xl text-white mt-10">
            FOLLOW US ON:
          </h5>
          <div className="flex gap-2 items-center mt-3">
            <div className="flex justify-center items-center size-[45px] p-4 bg-[#FFFFFF14] rounded-full">
              <Image
                src="/social-1.svg"
                width={12}
                height={12}
                alt="social-1"
              />
            </div>
            <div className="flex justify-center items-center size-[45px] bg-[#FFFFFF14] rounded-full">
              <Image
                src="/social-2.svg"
                width={14}
                height={14}
                alt="social-2"
              />
            </div>
            <div className="flex justify-center items-center size-[45px] bg-[#FFFFFF14] rounded-full">
              <Image
                src="/social-3.svg"
                width={14}
                height={14}
                alt="social-3"
              />
            </div>
            <div className="flex justify-center items-center size-[45px] bg-[#FFFFFF14] rounded-full">
              <Image
                src="/social-4.svg"
                width={14}
                height={14}
                alt="social-4"
              />
            </div>
            <div className="flex justify-center items-center size-[45px] bg-[#FFFFFF14] rounded-full">
              <Image
                src="/social-5.svg"
                width={14}
                height={14}
                alt="social-5"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-7  text-white">
          <div>
            <h3 className="font-stolzl font-medium text-lg sm:text-2xl text-white">
              Get in touch!
            </h3>
            <Image
              src="/horizontal-line.svg"
              className="mt-1"
              width={66}
              height={3}
              alt="horizontal-line"
            />
            <p className="mt-5 font-stolzl font-book text-sm max-w-[350px]">
              Fusce varius, dolor tempor interdum tristiquei bibendum service
              life.
            </p>
            <p className="mt-5 flex gap-3 items-start max-w-[280px] font-stolzl font-book text-sm">
              <Image src="/map-pin-1.svg" width={12} height={12} alt="pin" />
              147/I, Green Road, Gulshan Avenue, Panthapath, Dhaka
            </p>
            <p className="mt-5 flex gap-3 items-center max-w-[280px] font-stolzl font-book text-sm">
              <Image src="/email.svg" width={16} height={12} alt="email" />
              info@edura.com
            </p>
            <p className="mt-5 flex gap-3 items-start max-w-[280px] font-stolzl font-book text-sm">
              <Image src="/phone.svg" width={14} height={14} alt="pin" />
              +256 214 203 215
            </p>
          </div>
        </div>
      </div>

      <div className="bg-main py-5">
        <div className="section-container flex flex-col sm:flex-row justify-between items-center gap-5">
          <div className="flex flex-wrap justify-center gap-4">
            <p className="font-stolzl font-book text-sm text-white">
              Copyright © 2023
            </p>
            <p className="font-stolzl font-book text-sm text-white">
              All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="font-stolzl hover:underline font-book text-sm text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-stolzl hover:underline font-book text-sm text-white"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
