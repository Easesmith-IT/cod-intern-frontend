"use client";

import Image from "next/image";

export const BeforeAfter = () => {
  return (
    <section className="relative w-full">
      <div className="px-5 py-11 mx-auto md:px-10 lg:py-20 xl:max-w-[1180px] xl:px-0">
        {/* Title */}
        <h2
          className="text-3xl font-bold leading-9 text-center text-black lg:text-[48px] lg:leading-[49px] xl:text-[52px] xl:leading-[60px]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Before and After
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-6 mt-9 md:flex-row lg:mt-14">
          {/* Before Card */}
          <div
            className="w-full overflow-hidden rounded-2xl border"
            style={{
              boxShadow: "rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
              background:
                "linear-gradient(rgba(220, 38, 38, 0.5) 0%, rgba(3, 18, 13, 0) 100%)",
            }}
          >
            <div
              className="px-6 py-3.5 flex justify-center items-center gap-2.5"
              style={{ backgroundColor: "rgba(220, 38, 38, 0.5)" }}
            >
              <div className="w-6 h-6">
                <Image
                  src="/workshop/thermometer-face.webp"
                  alt="Before"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-lg font-semibold leading-7 text-black">
                Frustration Before
              </span>
            </div>

            <div className="flex flex-col gap-5 p-5">
              {[
                "I don’t know how to use ChatGPT beyond basic",
                "AI tools confuse me",
                "I waste hours doing repetitive work",
                "I’m scared AI will replace me",
                "I don’t know where to start in AI/ML",
                "My profile looks outdated compared to peers",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Image
                    src="/workshop/x-mark.svg"
                    alt="cross"
                    width={22}
                    height={22}
                  />
                  <span className="text-base font-book leading-6 text-black">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* After Card */}
          <div
            className="w-full overflow-hidden rounded-2xl border"
            style={{
              boxShadow: "rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
              background:
                "linear-gradient(rgba(5, 150, 105, 0.5) 0%, rgba(3, 18, 13, 0) 100%)",
            }}
          >
            <div
              className="px-6 py-3.5 flex justify-center items-center gap-2.5"
              style={{ backgroundColor: "rgba(5, 150, 105, 0.5)" }}
            >
              <div className="w-6 h-6">
                <Image
                  src="/workshop/star-struck.webp"
                  alt="After"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-lg font-semibold leading-7 text-black">
                Freedom After
              </span>
            </div>

            <div className="flex flex-col gap-5 p-5">
              {[
                "I can write powerful prompts with confidence",
                "I use AI tools daily for coding, content & tasks",
                "I save hours by automating my work",
                "I’m AI-ready and secure in my career",
                "I build real AI projects for my portfolio",
                "I stand out in interviews with future-ready skills",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Image
                    src="/workshop/check.svg"
                    alt="check"
                    width={22}
                    height={22}
                  />
                  <span className="text-base font-book leading-6 text-black">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
