"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Info } from "./info";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

export const HeroSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      {/* <section
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
              <div className="bg-para-3"></div>
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
      </section> */}

      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{ loop: true }}
        setApi={setApi}
        className="w-full relative"
      >
        <div className="w-48 xl:w-[252px] hidden md:grid absolute bottom-3 left-1/12 z-10 h-1.5 bg-[#D7C0F8] rounded-md grid-cols-3">
          <div
            onClick={() => api.scrollTo(0)}
            className={cn("rounded-md", current === 1 && "bg-para-3")}
          ></div>
          <div
            onClick={() => api.scrollTo(1)}
            className={cn("rounded-md", current === 2 && "bg-para-3")}
          ></div>
          <div
            onClick={() => api.scrollTo(2)}
            className={cn("rounded-md", current === 3 && "bg-para-3")}
          ></div>
        </div>

        <CarouselContent>
          <CarouselItem>
            <img
              // className="h-[70vh] md:size-full"
              className="h-[30vh] w-full md:h-[80vh]"
              width={562}
              height={430}
              src="/home/banner-1.png"
              alt="hero-banner"
            />
          </CarouselItem>
          <CarouselItem className="">
            <img
              // className="h-[70vh] md:size-full"
              className="h-[30vh] w-full md:h-[80vh]"
              width={562}
              height={430}
              src="/home/banner-2.png"
              alt="hero-banner"
            />
          </CarouselItem>
          <CarouselItem className="">
            <img
              // className="h-[70vh] md:size-full"
              className="h-[30vh] w-full md:h-[80vh]"
              width={562}
              height={430}
              src="/home/banner-3.png"
              alt="hero-banner"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};
