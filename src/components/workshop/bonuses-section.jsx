"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const bonuses = [
  {
    id: 1,
    title: "Prompt Engineering",
    type: "EBook",
    tag: "Bonus 1",
    price: "₹2,000",
    img: "/workshop/promt-engineer.webp",
  },
  {
    id: 2,
    title: "Certificate of Participation",
    type: "Certificate",
    tag: "Bonus 2",
    price: "₹1,000",
    img: "/workshop/certificate.webp",
  },
  {
    id: 3,
    title: "Blueprint for Powerful Presentation",
    type: "Blueprint",
    tag: "Bonus 3",
    price: "₹2,000",
    img: "/workshop/ppt.webp",
  },
];

export const BonusesSection = () => {
  return (
    <section className="bg-[#03120D]">
      <div className="relative w-full bg-[#03120D] py-11 lg:py-20 xl:max-w-[1180px] mx-auto px-5 md:px-10 xl:px-0">
        {/* Heading */}
        <div className="flex flex-col justify-center gap-2 text-center lg:gap-3">
          <h2
            className="text-3xl font-bold leading-9 text-white lg:text-5xl lg:leading-[48px] xl:text-[52px] xl:leading-[60px]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Unlock bonuses worth{" "}
            <mark className="bg-transparent text-emerald-500">₹5,000</mark>
          </h2>
          <p className="text-lg font-book leading-7 text-white/80 lg:text-xl lg:leading-7 lg:tracking-[0.4px]">
            Attend the workshop to receive exclusive access to our bonuses.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-9 lg:mt-14 xl:mt-16 lg:pb-0">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {bonuses.map((bonus) => (
                <CarouselItem
                  key={bonus.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col h-full border border-white/10 rounded-2xl overflow-hidden">
                    {/* Top Tag */}
                    <div className="bg-emerald-600 px-6 py-2.5 text-center text-base font-book leading-6 text-white lg:text-lg lg:leading-7">
                      {bonus.tag}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col gap-2.5 items-center text-center lg:px-5 lg:py-6 lg:gap-3 flex-grow">
                      <h3 className="text-xl font-medium leading-7 text-white lg:text-3xl lg:leading-9">
                        {bonus.title}
                      </h3>
                      <p className="text-base font-bold leading-6 tracking-[0.64px] text-emerald-600 uppercase">
                        {bonus.type}
                      </p>
                      <Image
                        src={bonus.img}
                        alt={bonus.title}
                        width={180}
                        height={180}
                        className="w-40 h-40 lg:w-[180px] lg:h-[180px] object-contain"
                      />
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between px-6 py-2 bg-white/20 mt-auto">
                      <p className="text-2xl font-medium leading-8 text-white lg:text-3xl lg:leading-9">
                        <s>{bonus.price}</s>
                      </p>
                      <Image
                        src="/workshop/free-gift-badge.svg"
                        alt="Free gift"
                        width={68}
                        height={68}
                        className="h-[60px] w-[60px] lg:w-[68px] lg:h-[68px]"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <div className="flex gap-6 items-center mt-10 justify-center">
              <CarouselPrevious className="size-12 bg-[#012b1d] bg-gradient-to-b from-[#012b1d] to-[#03120D] disabled:bg-[#03120D] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] text-white border-[#03120D] static rounded-lg hover:bg-[#03120D]/80" />
              <CarouselNext className="size-12 bg-[#012b1d] bg-gradient-to-b from-[#012b1d] to-[#03120D] disabled:bg-[#03120D] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] text-white border-[#03120D] static rounded-lg hover:bg-[#03120D]/80" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
