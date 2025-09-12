"use client";

export const BookYourSpot = () => {
  return (
    <div className="relative w-full">
      <div className="px-5 py-11 md:px-10 lg:py-20 xl:max-w-[1180px] xl:px-0 mx-auto">
        <div className="flex flex-col gap-9 lg:gap-14">
          {/* Heading */}
          <div
            className="text-2xl font-bold leading-8 text-black lg:text-[40px] lg:leading-12 text-center tiptap-text"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            <p>Book Your Spot Now!</p>
          </div>

          {/* Video */}
          <div className="flex justify-center">
            <div className="col-span-2 rounded-2xl">
              <video
                autoPlay
                loop
                preload="none"
                playsInline
                muted
                className="object-cover w-full h-full rounded-2xl"
              >
                <source
                  src="/workshop/book-spot-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
