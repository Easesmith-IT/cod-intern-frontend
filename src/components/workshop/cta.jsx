import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="relative w-full bg-[#03120D] px-5 py-11 md:px-10 lg:py-20">
      <div
        className="mx-auto flex max-w-[1180px] flex-col items-center justify-center rounded-[20px] px-6 py-8 lg:px-10 lg:py-12"
        style={{
          background:
            "linear-gradient(119deg, rgba(3,18,13,0) 0.05%, rgba(5,150,105,0.3) 50.05%, rgba(3,18,13,0) 100.05%)",
          boxShadow: "rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        }}
      >
        {/* Heading */}
        <h2
          className="text-center text-3xl font-bold leading-9 text-white lg:text-[52px] lg:leading-[60px]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Ready to Level Up? Join Now!
        </h2>

        {/* Button */}
        <Button
          asChild
          variant="codIntern"
          className="h-12 mt-6"
          // className="bg-emerald-700 h-12 rounded-[10px] w-full px-6 py-3 mt-6 lg:mt-12 flex justify-center"
        >
          <Link href="/workshop/generative-ai/registration">
            <span className="!font-normal text-base">Book Your Spot Now</span>
          </Link>
        </Button>

        {/* Reviews */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/workshop/star.svg"
                alt="star"
                width={16}
                height={16}
                className="h-4 w-4"
              />
            ))}
          </div>
          <p className="text-sm font-book leading-5 text-white lg:text-base">
            14K+ reviews (4.9 of 5)
          </p>
        </div>
      </div>
    </section>
  );
};
