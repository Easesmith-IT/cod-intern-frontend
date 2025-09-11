import Image from "next/image";

export const CTASection=()=> {
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
        <button className="mt-3 w-full rounded-[10px] bg-emerald-700 px-5 py-2.5 lg:mt-8 md:w-fit lg:px-6 lg:py-3">
          <span className="text-lg font-normal leading-7 text-white lg:text-xl lg:leading-8">
            Book Your Spot Now
          </span>
        </button>

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
}
