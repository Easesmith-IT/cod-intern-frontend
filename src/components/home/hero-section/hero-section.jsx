"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useApiQuery } from "@/hooks/useApiQuery";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  const { data: heroSectionData, isLoading } = useApiQuery({
    url: "/student/content/hero-section",
    queryKeys: ["hero-section"],
  });
  // console.log("heroSectionData", heroSectionData);

  const { image1, image2, image3, banner1, banner2, banner3 } =
    heroSectionData?.data || {};

  return (
    <>
      <Carousel
        // plugins={[
        //   Autoplay({
        //     delay: 4000,
        //   }),
        // ]}
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
          <CarouselItem className="relative">
            <img
              // className="h-[70vh] md:size-full"
              src={"/home/Banner 5.png"}
              className="h-[30vh] w-full md:h-[80vh]"
              width={562}
              height={430}
              alt="hero-banner"
            />

            {!isLoading && (
              <div className="hidden md:flex gap-6 px-5 mx-auto absolute bottom-14.5 left-[8%]">
                <div className="max-w-96 w-full px-5 py-3 bg-gradient-to-r from-[#9237E3] to-[#BC7AF6] rounded-md">
                  <h2 className="text-white text-lg md:text-2xl uppercase font-semibold font-sans">
                    {banner1?.card1?.title}
                  </h2>
                  <p className="text-white text-xs w-[60%] font-book mt-2">
                    {banner1?.card1?.desc}
                  </p>
                  <Button
                    asChild
                    className="mt-4 text-xs text-gray-600 h-7 font-book rounded-sm has-[>svg]:px-2 bg-white hover:bg-white/80"
                  >
                    <Link
                      href={banner1?.card1?.button?.link || ""}
                      target="_blank"
                    >
                      <span>{banner1?.card1?.button?.text}</span>
                      <div className="size-4 rounded-full bg-main flex justify-center items-center">
                        <ChevronRightIcon className="text-white size-4" />
                      </div>
                    </Link>
                  </Button>
                </div>

                <div className="max-w-96 w-full px-5 py-3 bg-gradient-to-r from-[#9237E3] to-[#BC7AF6] rounded-md">
                  <h2 className="text-white text-lg md:text-2xl uppercase font-semibold font-sans">
                    {banner1?.card2?.title}
                  </h2>
                  <p className="text-white text-xs w-[60%] font-book mt-2">
                    {banner1?.card2?.desc}
                  </p>
                  <Button
                    asChild
                    className="mt-4 text-xs text-gray-600 h-7 font-book rounded-sm has-[>svg]:px-2 bg-white hover:bg-white/80"
                  >
                    <Link
                      href={banner1?.card2?.button?.link || ""}
                      target="_blank"
                    >
                      <span>{banner1?.card2?.button?.text}</span>
                      <div className="size-4 rounded-full bg-main flex justify-center items-center">
                        <ChevronRightIcon className="text-white size-4" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </CarouselItem>
          <CarouselItem className="relative bg-red-">
            <img
              // className="h-[70vh] md:size-full"
              className="h-[30vh] w-full md:h-[80vh]"
              width={562}
              height={430}
              src={"/home/Banner 1.png"}
              alt="hero-banner"
            />
            {!isLoading && (
              <>
                <Button
                  asChild
                  variant="codIntern"
                  className="absolute bottom-8 hidden md:flex left-[10%] rounded-none bg-gradient-to-r from-[#9237E3] to-[#BF7FF7] bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-500 ease-in-out md:w-40 text-sm font-book"
                >
                  <Link href={banner2?.button1.link || ""} target="_blank">
                    {banner2?.button1.text}
                  </Link>
                </Button>
                <Button
                  asChild
                  className="absolute bottom-8 right-[9%] hidden md:flex rounded-none bg-gradient-to-r from-[#E37E36] to-[#FB6308] hover:bg-[#E37E36] bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-500 ease-in-out md:w-40 text-sm font-book"
                >
                  <Link href={banner2?.button2.link || ""} target="_blank">
                    {banner2?.button2.text}
                  </Link>
                </Button>
              </>
            )}
          </CarouselItem>
          <CarouselItem className="relative">
            <img
              // className="h-[70vh] md:size-full"
              src={"/home/Banner 2.png"}
              className="h-[30vh] w-full md:h-[80vh]"
              width={562}
              height={430}
              alt="hero-banner"
            />
            {!isLoading && (
              <div className="hidden md:flex items-center gap-10 px-5 absolute bottom-14.5 left-[9%]">
                <Button
                  asChild
                  variant="codIntern"
                  className="rounded-none bg-gradient-to-r from-[#9237E3] to-[#BF7FF7] bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-500 ease-in-out md:w-40 text-sm font-book"
                >
                  <Link href={banner3?.button1.link || ""} target="_blank">
                    {banner3?.button1.text}
                  </Link>
                </Button>

                <Button
                  asChild
                  className="rounded-none bg-gradient-to-r from-[#E37E36] to-[#FB6308] bg-[length:200%_200%] hover:bg-[#E37E36] bg-left hover:bg-right transition-all duration-500 ease-in-out md:w-40 text-sm font-book"
                >
                  <Link href={banner3?.button2.link || ""} target="_blank">
                    {banner3?.button2.text}
                  </Link>
                </Button>
              </div>
            )}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};
