"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePersistentCountdown } from "@/hooks/usePersistentCountdown";

export const StickyCTA = () => {
  const { days, hours, minutes, seconds } = usePersistentCountdown({
    durationInSeconds: 200,
    expiryKey: "offer-end",
  });

  return (
    <div className="sticky bottom-0 z-10 w-full">
      <div className="z-50 w-full lg:px-10 lg:py-5">
        <div className="xl:mx-auto xl:max-w-[1180px] lg:rounded-2xl">
          <div
            className="flex border w-full flex-col items-center justify-between gap-3 px-5 py-4 md:flex-row md:px-10 lg:rounded-2xl lg:px-5 lg:py-5 xl:mx-auto xl:max-w-[1180px] backdrop-blur-md"
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(3, 18, 13, 0.1) 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            {/* Mobile View Heading */}
            <div className="md:hidden">
              <div>
                <h3 className="text-xl font-medium text-black">
                  Step Up Your Skills — Enroll Today!
                </h3>
                <h4 className="text-base font-medium text-black">
                  Secure Your Seat Now
                </h4>
              </div>
              <p className="text-sm font-book leading-6 text-black/80">
                Trusted by 10,000+ Learners | Rated 4.8/5
              </p>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="rounded-full border border-main p-2.5">
                  <div className="h-[50px] w-[50px] lg:h-[60px] lg:w-[60px]">
                    <Image
                      src="/workshop/mentor.jpg"
                      alt="Mentor"
                      width={60}
                      height={60}
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-medium text-black">
                      Step Up Your Skills — Enroll Today!
                    </h3>
                    <h4 className="text-lg font-medium text-black">
                      Secure Your Seat Now
                    </h4>
                  </div>
                  <p className="text-base font-book leading-6 text-black/80">
                    Trusted by 10,000+ Learners | Rated 4.8/5
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button + Timer */}
            <div className="flex w-full flex-col items-center justify-center gap-2.5 md:w-fit">
              <Button
                asChild
                variant="codIntern"
                className="md:h-12 w-full md:mt-6"
                // className="bg-emerald-700 h-12 rounded-[10px] w-full px-6 py-3 mt-6 lg:mt-12 flex justify-center"
              >
                <Link href="/workshop/prompt-engineering/registration">
                  <div className="flex items-center gap-1 text-sm md:text-base !font-normal leading-6 text-white">
                    <span>Register Now for</span>
                    {/* <span className="line-through">₹99</span> */}
                    <span className="md:text-xl">₹189</span>
                  </div>
                </Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-center text-xs md:text-sm font-book leading-5 text-black/80">
                <span>Offer ends in</span>
                <span>
                  {minutes}:{seconds}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
