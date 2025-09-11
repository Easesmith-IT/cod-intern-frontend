"use client";

import Image from "next/image";

const cards = [
  {
    title: "Burger",
    price: "₹99.00",
    image:
      "https://hubble.cdn.chittiapp.com/cdn/2025/7/551e8aa0-6df7-11f0-87e3-c3cec9b31d15_burger_min.webp",
    bg: "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(3, 18, 13, 0) 100%)",
    tickIcon:
      "/workshop/tick.svg",
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
    bg: "linear-gradient(rgb(5, 150, 105) 0%, rgba(3, 18, 13, 0) 100%)",
    tickIcon:
      "https://hubble.cdn.chittiapp.com/cdn_uploads/a05b2a80-6b6a-11f0-bf6c-e151f03705cf_tick-white.svg",
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
    <section className="bg-[#03120D]">
      <div className="relative w-full bg-[#03120D] px-5 py-11 md:px-10 lg:py-20 xl:max-w-[1180px] xl:px-0 mx-auto">
        <h2
          className="text-2xl font-bold leading-8 text-white lg:text-[40px] lg:leading-[48px] text-center mb-5"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Spend ₹99 on Burger.. or ₹9 on your Future?
        </h2>
        <p className="mt-5 text-xl font-semibold leading-7 text-center text-white"></p>

        <div className="flex flex-col gap-6 mt-9 md:flex-row lg:mt-14">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col w-full gap-5 p-5 rounded-2xl lg:p-6 lg:flex-row lg:items-center relative"
              style={{
                background: card.bg,
                boxShadow: "rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
              }}
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
                <div className="text-3xl font-extrabold leading-9 text-white mt-2">
                  {card.price}
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mt-4 lg:mt-0 lg:ml-6">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Image
                      src={card.tickIcon}
                      alt="tick"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    <span className="text-base font-book leading-7 text-[rgba(255,255,255,0.8)]">
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
