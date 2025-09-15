"use client";

import { BadgeCheck, Crown } from "lucide-react";
import Image from "next/image";

export const CertificationSection = () => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col px-5 py-11 mx-auto md:px-10 lg:py-20 xl:max-w-[1180px] xl:px-0">
        <div className="flex flex-col gap-9 lg:gap-12">
          {/* Mobile Heading */}
          <div className="flex flex-col gap-2 text-center lg:gap-4 lg:hidden">
            <h2
              className="text-3xl font-bold leading-9 text-black lg:text-[52px] lg:leading-[60px]"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              <span className="text-main">Certification</span> The Badge That
              Accelerates Growth
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row lg:gap-14">
            {/* Left Column */}
            <div className="flex flex-col gap-14">
              {/* Desktop Heading */}
              <div className="hidden lg:block">
                <div className="flex flex-col gap-2 text-start lg:gap-3.5">
                  <h2
                    className="text-3xl font-bold leading-9 text-black lg:text-[52px] lg:leading-[60px]"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    <span className="text-main">Certification</span> The Badge
                    That Accelerates Growth
                  </h2>
                  <p className="text-lg font-book leading-7 text-muted-foreground tracking-[0.36px] lg:text-xl lg:leading-8 lg:tracking-[0.36px]">
                    Validate your expertise with a Generative AI certification
                    and position yourself as an industry-ready professional.
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: BadgeCheck,
                    text: "Work on real-world AI projects and unlock exciting career opportunities.",
                  },
                  {
                    icon: Crown,
                    text: "Your success is our promise. 100% Satisfaction Guaranteed — Join Today!",
                  },
                ].map(({ text, icon: Icon }, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2.5 bg-main/10 rounded-lg lg:p-3">
                      <div className="w-6 h-6">
                        <Icon className="text-black/80" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-base font-light leading-6 text-muted-foreground tracking-[0.32px] lg:text-lg lg:leading-7 lg:tracking-[0.36px]">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Image */}
            <div className="bg-[rgba(255,255,255,0.1)] rounded-xl p-5 flex items-center justify-center lg:p-8 w-fit mx-auto h-fit">
              <div className="w-[280px] h-[200px] md:w-[300px] md:h-[214px] lg:w-[420px] lg:h-[300px] xl:w-[500px] xl:h-[375px]">
                <Image
                  src="/workshop/certificate.webp"
                  alt="Certificate"
                  width={500}
                  height={375}
                  className="w-full h-full aspect-[7/5] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
