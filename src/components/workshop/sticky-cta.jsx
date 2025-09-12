import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const StickyCTA = () => {
  return (
    <div className="sticky bottom-0 z-10 w-full">
      <div className="z-50 w-full lg:px-10 lg:py-5">
        <div className="xl:mx-auto xl:max-w-[1180px] lg:rounded-2xl">
          <div
            className="flex w-full flex-col items-center justify-between gap-3 px-5 py-4 md:flex-row md:px-10 lg:rounded-2xl lg:px-5 lg:py-5 xl:mx-auto xl:max-w-[1180px] backdrop-blur-md"
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgba(3, 18, 13, 0.1) 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            {/* Mobile View Heading */}
            <div className="md:hidden">
              <h3 className="text-center text-xl font-medium leading-7 text-white">
                Still confused? You're not alone — Let's fix it together
              </h3>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="rounded-full border border-emerald-600 p-2.5">
                  <div className="h-[50px] w-[50px] lg:h-[60px] lg:w-[60px]">
                    <Image
                      src="/workshop/mentor.webp"
                      alt="Mentor"
                      width={60}
                      height={60}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-8 text-white">
                    Still confused? You're not alone — Let's fix it together
                  </h3>
                  <p className="text-base font-book leading-6 text-white/80">
                    20K+ Students Enrolled
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button + Timer */}
            <div className="flex w-full flex-col items-center justify-center gap-2.5 md:w-fit">
              <Button
                asChild
                variant="codIntern"
                className="h-12 w-full mt-6"
                // className="bg-emerald-700 h-12 rounded-[10px] w-full px-6 py-3 mt-6 lg:mt-12 flex justify-center"
              >
                <Link href="/workshop/generative-ai/registration">
                  <div className="flex items-center gap-1 text-base !font-normal leading-6 text-white">
                    <span>Register Now for</span>
                    <span className="line-through">₹99</span>
                    <span className="text-xl">₹9</span>
                  </div>
                </Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-center text-sm font-book leading-5 text-white/80">
                <span>Offer ends in</span>
                <span>00:42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
