"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { usePersistentCountdown } from "@/hooks/usePersistentCountdown";
import Link from "next/link";

export const HeroScection = () => {
  const { days, hours, minutes, seconds } = usePersistentCountdown({
    durationInSeconds: 200,
    expiryKey: "offer-end",
  });

  return (
    // <div className="flex flex-col items-center">
    //   <div className="px-3 py-2 gap-2 rounded-md bg-[rgba(99,5,150,0.1)] flex items-center mx-auto">
    //     <div className="flex gap-1 items-center">
    //       {Array.from({ length: 5 }).map((_, i) => (
    //         <Star key={i} className="fill-amber-500 text-yellow-500 size-4" />
    //       ))}
    //     </div>
    //     <span className="font-book font-stolzl text-sm">
    //       14K+ reviews (4.9 of 5)
    //     </span>
    //   </div>
    //   <div className="mt-3 lg:mt-5 text-base md:text-lg font-medium leading-7 tracking-[0.36px] uppercase text-main lg:text-lg lg:leading-7 tiptap-text">
    //     <p>Generative AI workshop</p>
    //   </div>
    //   <div className="mt-2 lg:mt-3 text-[28px] lg:text-5xl lg:leading-[48px] font-bold text-black leading-9">
    //     <p>Learn Essential AI tools – In Tamil</p>
    //   </div>

    //   <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row md:justify-between gap-5 mt-10">
    //     <div className="">
    //       <Image src="/test-img.webp" alt="Hero" width={240} height={240} />
    //       <div className="mt-2 text-sm font-semibold leading-5 text-main lg:mt-0 tiptap-text">
    //         <p className="text-center">10+ Years of Experience</p>
    //       </div>
    //       <div className="mt-0.5 text-2xl font-semibold leading-9 text-black text-center lg:mt-1 lg:text-[22px] lg:leading-9 tiptap-text">
    //         <p>Premanand Sethurajan</p>
    //       </div>
    //       <div className="text-base font-normal leading-6 text-muted-foreground text-center mt-0.5 tiptap-text">
    //         <p>Co Founder of LMES Academy</p>
    //       </div>
    //     </div>
    //     <div className="md:w-[50%]">
    //       <div
    //         className="rounded-xl px-3 py-2.5 flex flex-col gap-0.5 col-span-2 lg:px-5 lg:py-4 border bg-gradient-to-t from-main/20 to-custom/30"
    //         // style={{
    //         //   boxShadow: "rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
    //         //   background:
    //         //     "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(3, 18, 13, 0) 100%)",
    //         // }}
    //       >
    //         <div className="flex items-center gap-2">
    //           <div className="w-12 h-[50px] rounded-lg overflow-hidden border border-emerald-700 bg-emerald-700 flex flex-col items-center justify-center">
    //             <div className="py-0.5 text-xs font-semibold leading-4  uppercase tiptap-text">
    //               Sun
    //             </div>
    //             <div className="w-full text-lg font-bold leading-7 text-center bg-white text-neutral-800 tiptap-text">
    //               21
    //             </div>
    //           </div>
    //           <div className="flex flex-col text-left">
    //             <div className="text-lg font-semibold leading-7 lg:text-lg tiptap-text">
    //               Sunday, 21 Sep 2025
    //             </div>
    //             <div className="text-base font-normal leading-6 text-muted-foreground tiptap-text">
    //               10:00 AM IST
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4 items-center mt-5">
    //         <div className="flex flex-col items-center justify-center border py-4 rounded-xl bg-gradient-to-t from-main/20 to-custom/30">
    //           <span className="text-sm font-book">Mode</span>
    //           <h4 className="font-stolzl font-medium mt-1">Online</h4>
    //         </div>
    //         <div className="flex flex-col items-center justify-center border py-4 rounded-xl bg-gradient-to-t from-main/20 to-custom/30">
    //           <span className="text-sm font-book">Language</span>
    //           <h4 className="font-stolzl font-medium mt-1">Tamil</h4>
    //         </div>
    //       </div>
    //       <Button className="mt-5 w-full h-14 text-base" variant="codIntern">
    //         Register Now for <span className="line-through">₹99</span> ₹9
    //       </Button>
    //       <p className="font-stolzl text-sm text-muted-foreground text-center mt-2">
    //         Offer ends in {minutes}:{seconds}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <section className="relative w-full bg-main/10">
      <div className="px-5 pt-8 pb-11 lg:pt-12 lg:pb-14 text-center mx-auto xl:max-w-[1180px] xl:px-0 md:px-10 flex flex-col justify-center">
        {/* Rating */}
        <div className="rounded-lg px-3.5 py-2 lg:px-4 flex gap-2 items-center bg-main/10 mx-auto">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="fill-main/90 text-main/90 size-4" />
            ))}
          </div>
          <p className="text-sm font-normal leading-5  lg:text-base lg:leading-6">
            10K+ reviews (4.8 of 5)
          </p>
        </div>

        {/* Workshop title */}
        <div className="mt-3 lg:mt-5 text-base md:text-lg font-medium leading-7 tracking-[0.36px] uppercase text-main">
          PROMPT ENGINEERING WORKSHOP
        </div>
        <h1
          className="mt-2 lg:mt-3 text-[28px] lg:text-5xl lg:leading-[48px] font-bold  leading-9"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Get Trained on AI Tools - In Hindi
        </h1>

        {/* Content */}
        <div className="flex flex-col items-center gap-6 mt-6 md:flex-row lg:mt-11 xl:gap-7 md:justify-center">
          {/* Speaker */}
          <div className="flex flex-col items-center md:w-[50%]">
            <Image
              src="/workshop/mentor.jpg"
              alt="Hero Image"
              width={280}
              height={280}
              className="w-[240px] h-[240px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] rounded-full object-cover object-top"
            />
            <p className="mt-2 text-sm font-semibold leading-5 text-main lg:mt-0">
              10+ Years of Experience
            </p>
            <p className="mt-0.5 text-2xl font-semibold leading-9  lg:mt-1 lg:text-[22px] lg:leading-9">
              Mrs. Nidhi Grover Raheja
            </p>
            <p className="text-sm font-book text-muted-foreground mt-0.5">
              Technical Trainer & Book Author- Gen AI, Python, ML & NLP Domain
            </p>
          </div>

          {/* Details */}
          <div className="md:w-[50%] xl:w-[40%]">
            <div className="grid w-full grid-cols-2 gap-3 lg:gap-5">
              {/* Date */}
              <div className="rounded-xl px-3 py-2.5 flex flex-col gap-0.5 col-span-2 lg:px-5 lg:py-4 bg-gradient-to-b from-white/40 to-white/20 border">
                <div className="flex items-center gap-4">
                  <div className="w-16.5 rounded-lg overflow-hidden border border-main bg-main flex flex-col items-center justify-center">
                    <div className="py-1 text-xs font-semibold leading-4 text-white uppercase">
                      Sat, Sun
                    </div>
                    <div className="w-full md:text-lg py-1 font-bold leading-7 text-center bg-white text-neutral-800">
                      31, 1
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="text-lg font-semibold leading-7 ">
                      Saturday & Sunday <br /> 31 Oct- 1 Nov 2025
                    </p>
                    <p className="text-base font-normal leading-6">
                      11:00 AM To 03:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Mode */}
              <div className="rounded-xl px-3 py-2.5 flex flex-col gap-0.5 lg:px-5 lg:py-4 bg-gradient-to-b from-white/40 to-white/20 border">
                <p className="text-sm font-normal leading-5 tracking-[0.28px] /80">
                  Mode
                </p>
                <p className="text-lg font-semibold leading-7 tracking-[0.36px] ">
                  Online
                </p>
              </div>

              {/* Language */}
              <div className="rounded-xl px-3 py-2.5 flex flex-col gap-0.5 lg:px-5 lg:py-4 bg-gradient-to-b from-white/40 to-white/20 border">
                <p className="text-sm font-normal leading-5 tracking-[0.28px] /80">
                  Language
                </p>
                <p className="text-lg font-semibold leading-7 tracking-[0.36px] ">
                  Hindi
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Button
                asChild
                variant="codIntern"
                className="h-12 w-full mt-6"
                // className="bg-emerald-700 h-12 rounded-[10px] w-full px-6 py-3 mt-6 lg:mt-12 flex justify-center"
              >
                <Link href="/workshop/prompt-engineering/registration">
                  <div className="flex items-center gap-1 text-base font-normal">
                    <span>Register Now for</span>
                    {/* <span className="line-through">₹189</span> */}
                    <span className="text-xl">₹189</span>
                  </div>
                </Link>
              </Button>
              <div className="text-sm flex items-center gap-2 justify-center font-medium leading-5 text-center mt-2.5 lg:mt-4 /80">
                <span>Offer ends in</span> {minutes}:{seconds}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
