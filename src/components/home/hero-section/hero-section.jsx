import Image from "next/image";
import React from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Info } from "./info";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <>
      <section
        className="relative h-[550px] hidden"
        style={{ backgroundImage: "url(/hero-bg.svg)" }}
      >
        <div className="section-container h-full relative flex gap-4 justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="text-7xl font-bold font-stolzl whitespace-nowrap">
              India’s <span className="text-main">#1</span> Platform
            </h1>
            <p className="font-stolzl text-2xl text-para mt-4">
              For Fresher Jobs, Internships and courses
            </p>
            <div className="flex items-center gap-5 mt-10 mb-2">
              <Button
                size="lg"
                variant="outline"
                className="rounded-sm px-5 h-12"
              >
                <Image src="./google.svg" width={25} height={25} alt="email" />
                Continue With Email
              </Button>
              <Button
                size="lg"
                variant="linearGradient"
                className="rounded-sm px-5 h-12"
              >
                {/* <Image src="./email.svg" width={20} height={20} alt="email" /> */}
                <Mail />
                Continue With Email
              </Button>
            </div>
            <Link
              href="#"
              className="text-sm font-stolzl underline text-[#41414199]"
            >
              By continuing, you agree to our T&C.
            </Link>
            <div className="w-[252px] absolute bottom-8 h-1.5 bg-[#D7C0F8] grid rounded-md grid-cols-3 mt-auto">
              <div></div>
              <div className="bg-[#2C1D43]"></div>
              <div></div>
            </div>
          </div>
          <div className="relative flex justify-center items-end z-10">
            <Image
              width={647}
              height={515}
              src="/hero-img.svg"
              alt="hero-img"
            />
            <Image
              width={117}
              height={172}
              src="/hero-img-1.svg"
              alt="hero-img-1"
              className="absolute right-0 top-10"
            />

            <Info
              title="Affordable & Industry-Ready Courses"
              className="top-20 left-10 w-[216px]"
            />
            <Info
              title="Improve your Personality"
              className="top-40 left-16 w-[130px]"
            />
            <Info
              title="Gain Career Confidence"
              className="top-60 left-10 w-[139px]"
            />
            <Info
              title="Guaranteed Placement Support"
              className="top-80 -left-10 w-[203px]"
            />

            <div className="absolute bottom-32 right-20 w-[138px] h-[129px] shadow-lg shadow-black/10 rounded-md bg-white px-3 py-4">
              <Image width={39} height={36} src="/bars.svg" alt="bars" />
              <h4 className="font-medium text-sm font-stolzl mt-2">
                Students Enroll
              </h4>
              <p className="text-xs font-stolzl">
                100% enroll rating per month
              </p>
            </div>
          </div>
        </div>
        <Image
          className="absolute right-0 -top-1/6"
          width={562}
          height={430}
          src="/hero-bg-1.svg"
          alt="hero-bg"
        />
      </section>
      <Image
        className="w-full"
        width={562}
        height={430}
        src="/Banner.webp"
        alt="hero-banner"
      />
    </>
  );
};
