"use client";

export const ThreeHourChanges = () => {
  const items = [
    {
      title: "IT Professionals",
      text: "Automate coding, boost productivity, and stay relevant by learning Generative AI tools",
      side: "left",
    },
    {
      title: "Non IT Professionals",
      text: "Understand AI in simple Tamil, build real use-cases, and gain confidence to shift into IT roles.",
      side: "right",
    },
    {
      title: "Freelancers",
      text: "Deliver faster projects, use AI to design, write, and automate tasks—increase your income.",
      side: "left",
    },
    {
      title: "Students & Fresh Graduates",
      text: "Build AI projects like chatbots & content generators, and stand out easily in interviews.",
      side: "right",
    },
  ];

  return (
    <section
      className="relative w-full"
      style={{
        background:
          "linear-gradient(rgb(3,18,13) 0%, rgb(10,2,1) 50%, rgb(3,18,13) 100%)",
      }}
    >
      <div className="px-5 py-11 md:px-10 lg:py-20 xl:px-0 xl:max-w-[1180px] xl:mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl font-bold leading-9 text-white lg:text-5xl text-center lg:leading-[48px] xl:text-[52px] xl:leading-[60px]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          What Changes in Just 3 Hours?
        </h2>

        {/* Timeline */}
        <div className="mt-9 lg:mt-14 lg:max-w-[816px] mx-auto xl:max-w-[900px] relative">
          {/* Vertical Line */}
          <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-[1px] h-full bg-white/20"></div>

          <div className="flex flex-col gap-10 md:gap-14 relative">
            {items.map((item, idx) => (
              <div key={idx} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-6 z-10">
                  <div className="border border-white/20 p-1.5 md:p-2 rounded-full bg-transparent">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex flex-col gap-2 p-5 w-full md:w-[46%] rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] ${
                    item.side === "left"
                      ? "ml-10 md:ml-0 md:mr-auto"
                      : "ml-10 md:ml-auto"
                  }  ${
                    item.side === "left"
                      ? "bg-[linear-gradient(121deg,rgba(5,150,105,0.5)_0%,rgba(3,18,13,0)_100%)] md:bg-[linear-gradient(80deg,rgba(3,18,13,0)_0%,rgba(5,150,105,0.5)_100%)]"
                      : "bg-[linear-gradient(121deg,rgba(5,150,105,0.5)_0%,rgba(3,18,13,0)_100%)]"
                  }`}
                >
                  <h3 className="text-xl font-bold leading-7 text-white">
                    {item.title}
                  </h3>
                  <p className="text-base font-book leading-7 text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
