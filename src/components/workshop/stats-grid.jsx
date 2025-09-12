"use client";

export const StatsGrid = () => {
  const stats = [
    { value: "20k+", label: "Attendess" },
    { value: "100%", label: "Practical" },
    { value: "3Hrs", label: "Learning" },
    { value: "4.9/5", label: "Ratings" },
  ];

  return (
    <section className="relative w-full">
      <div className="px-5 py-11 md:px-10 lg:py-20 xl:px-0 xl:max-w-[1180px] mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="px-5 py-3 rounded-xl lg:p-5 text-start shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] bg-gradient-to-r from-main to-para-3"
            >
              <div className="flex items-end">
                <div className="text-[35px] font-semibold leading-[48px] text-white lg:text-[40px] lg:leading-[48px]">
                  {stat.value.includes("/")
                    ? stat.value.split("/")[0]
                    : stat.value}
                </div>
                {stat.value.includes("/") && (
                  <span className="text-2xl font-extrabold leading-8 lg:text-3xl lg:leading-9 text-white">
                    /{stat.value.split("/")[1]}
                  </span>
                )}
              </div>
              <div className="text-sm font-book leading-6 tracking-[0.32px] text-white/80 lg:text-base lg:leading-7 lg:tracking-[0.36px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
