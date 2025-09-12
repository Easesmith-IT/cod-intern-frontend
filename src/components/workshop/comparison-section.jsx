"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Burger",
    price: "₹99.00",
    image:
      "https://hubble.cdn.chittiapp.com/cdn/2025/7/551e8aa0-6df7-11f0-87e3-c3cec9b31d15_burger_min.webp",
    bg: "bg-gradient-to-b from-main/40 to-main/10",
    tickIcon: "/workshop/tick.svg",
    features: [
      'One bite → "Wow!"',
      "But adds calories, not skills",
      "Instagram photo? Okay, Life impact? Zero!!!",
      "Money gone, moment gone.",
    ],
  },
  {
    title: "Workshop",
    price: "₹9.00",
    image:
      "https://hubble.cdn.chittiapp.com/cdn/2025/7/62090bd0-6c32-11f0-8d34-07754ad9d03a_workshop_min.webp",
    bg: "bg-gradient-to-b from-main to-para-3",
    tickIcon: "/workshop/tick.svg",
    features: [
      "Automate Tedious Tasks",
      "Automate Tedious Tasks",
      "Hands-on practical knowledge",
      "Boost Your Career opportunities",
    ],
  },
];

export const ComparisonSection = () => {
  return (
    <section className="">
      <div className="relative w-full px-5 py-11 md:px-10 lg:py-20 xl:max-w-[1180px] xl:px-0 mx-auto">
        <h2
          className="text-2xl font-bold leading-8 text-black lg:text-[40px] lg:leading-[48px] text-center mb-5"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Spend ₹99 on Burger.. or ₹9 on your Future?
        </h2>
        <p className="mt-5 text-xl font-semibold leading-7 text-center text-black"></p>

        <div className="flex flex-col gap-6 mt-9 md:flex-row lg:mt-14">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={cn(
                "flex flex-col w-full gap-5 p-5 rounded-2xl lg:p-6 lg:flex-row lg:items-center relative",
                card.bg
              )}
            >
              {/* Image + Price */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-[128px] lg:w-[180px] lg:h-[144px] relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div
                  className={cn(
                    "text-3xl font-extrabold leading-9 text-white mt-2",
                    index === 0 && "text-black"
                  )}
                >
                  {card.price}
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mt-4 lg:mt-0 lg:ml-6">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check
                      className={cn("size-4 shrink-0 mt-1.5", index === 1 && "text-white")}
                    />
                    <span
                      className={cn(
                        "text-base font-book leading-7 text-[rgba(255,255,255,0.8)]",
                        index === 0 && "text-black"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
