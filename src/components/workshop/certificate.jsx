import { BadgeCheck, Crown } from "lucide-react";
import Image from "next/image";

const points = [
  {
    icon: BadgeCheck,
    text: "Work on real-world AI projects and unlock exciting career opportunities.",
  },
  {
    icon: Crown,
    text: "Your success is our promise. 100% Satisfaction Guaranteed — Join Today!",
  },
];

const PointItem = ({ Icon, text }) => (
  <div className="flex items-start gap-3">
    <div className="p-2.5 bg-main/10 rounded-lg lg:p-3">
      <div className="w-6 h-6">
        <Icon className="text-black/80" />
      </div>
    </div>
    <p className="text-base font-light leading-6 text-muted-foreground tracking-[0.32px] lg:text-lg lg:leading-7 lg:tracking-[0.36px]">
      {text}
    </p>
  </div>
);

export const Certification = () => {
  return (
    <section className="relative w-full">
      <div className="max-w-[1180px] mx-auto px-5 py-11 md:px-10 lg:py-20 xl:px-0">
        {/* Heading for mobile */}
        <div className="flex flex-col gap-2 text-center lg:hidden">
          <h2 className="text-3xl font-bold leading-9 text-black lg:text-[52px] lg:leading-[60px]">
            <span className="text-main">Certification</span> The Badge That
            Accelerates Growth
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-14">
          {/* Left Column */}
          <div className="flex flex-col gap-14">
            {/* Heading for desktop */}
            <div className="hidden lg:block">
              <h2 className="text-3xl font-bold leading-9 text-black lg:text-[52px] lg:leading-[60px]">
                <span className="text-main">Certification</span> The Badge That
                Accelerates Growth
              </h2>
              <p className="text-lg font-book leading-7 text-muted-foreground tracking-[0.36px] lg:text-xl lg:leading-8">
                Validate your expertise with a Generative AI certification and
                position yourself as an industry-ready professional.
              </p>
            </div>

            {/* Points */}
            <div className="flex flex-col gap-5">
              {points.map((point, idx) => (
                <PointItem key={idx} Icon={point.icon} text={point.text} />
              ))}
            </div>
          </div>

          {/* Certificate Image */}
          <div className="bg-[rgba(255,255,255,0.1)] rounded-xl flex items-center justify-center w-fit mx-auto p-0 lg:p-8">
            {/* <div className="w-[280px] h-[200px] md:w-[300px] md:h-[214px] lg:w-[420px] lg:h-[300px] xl:w-[500px] xl:h-[375px]">
              <Image
                src="/workshop/certificate.png"
                alt="Certificate"
                width={500}
                height={375}
                priority
                className="w-full h-full aspect-[7/5] rounded-lg"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
