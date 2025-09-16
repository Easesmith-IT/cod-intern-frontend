import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative w-full px-5 py-11 md:px-10 lg:py-20 ">
      <div
        className="mx-auto flex max-w-[1180px] border flex-col items-center justify-center rounded-[20px] px-6 py-8 lg:px-10 lg:py-12"
        style={{
          background:
            "linear-gradient(119deg, rgba(3, 18, 13, 0) 0.05%, rgba(146, 55, 227, .7) 50.05%, rgba(3, 18, 13, 0) 100.05%)",
        }}
      >
        {/* Heading */}
        <div>
          <h2
            className="text-center text-2xl font-bold leading-9 text-black lg:text-[52px] lg:leading-[60px]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            {/* Ready to Level Up? Join Now! */}
            Step Up Your Skills — Enroll Today!
          </h2>
          {/* <h4 className="text-base font-medium text-black text-center">
            Secure Your Seat Now
          </h4> */}
          {/* <p className="text-sm font-book leading-6 text-black/80 text-center">
            Trusted by 10,000+ Learners
          </p> */}
        </div>

        {/* Button */}
        <Button
          asChild
          variant="codIntern"
          className="h-12 mt-6"
          // className="bg-emerald-700 h-12 rounded-[10px] w-full px-6 py-3 mt-6 lg:mt-12 flex justify-center"
        >
          <Link href="/workshop/generative-ai/registration">
            <span className="!font-normal text-base">
              {/* Book Your Spot Now */}
              Secure Your Seat Now
            </span>
          </Link>
        </Button>

        {/* Reviews */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="fill-main/90 text-main/90 size-4" />
            ))}
          </div>
          <p className="text-sm font-book leading-5 text-black lg:text-base">
            10K+ reviews (4.8 of 5) | Trusted by 10,000+ Learners
          </p>
        </div>
      </div>
    </section>
  );
};
