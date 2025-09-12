"use client";

export const WhatStopingYou = () => {
  const items = [
    {
      title: "IT Professionals",
      text: "Future-proof your career. Upskill in AI, data science, and cloud computing to stay ahead of the curve.",
      side: "left",
    },
    {
      title: "NON-IT Professionals",
      text: "Think AI is too technical? Scared to switch careers? Want to break into IT without coding fear?",
      side: "right",
    },
    {
      title: "Freelancers",
      text: "Losing clients because you don’t know AI tools? Struggling to keep up with demand.",
      side: "left",
    },
    {
      title: "Students & Fresh Graduates",
      text: "Just finished college? No job-ready skills? Want to impress recruiters with AI projects?",
      side: "right",
    },
  ];

  return (
    // <section className="py-12 md:py-24 section-container max-w-4xl">
    //   <div className="mt-2 lg:mt-3 text-[28px] lg:text-5xl text-center lg:leading-[48px] font-bold text-black leading-9 mb-12">
    //     <p>What’s Stopping You?</p>
    //   </div>

    //   <VerticalTimeline lineColor="black">
    //     <VerticalTimelineElement
    //       contentStyle={{
    //         background: "linear-gradient(90deg, var(--para-3), rgb(139, 0, 0))",
    //         color: "#fff",
    //         borderRadius: "20px",
    //       }}
    //       contentArrowStyle={{ display: "none" }}
    //       iconStyle={{
    //         background: "#fff",
    //         color: "#000",
    //         width: "20px",
    //         height: "20px",
    //         marginLeft: "-10px", // recenter after resizing
    //       }}
    //     >
    //       <h3 className="font-bold text-xl">IT Professionals</h3>
    //       <p>
    //         Future-proof your career. Upskill in AI, data science, and cloud
    //         computing to stay ahead of the curve.
    //       </p>
    //     </VerticalTimelineElement>

    //     <VerticalTimelineElement
    //       contentStyle={{
    //         background: "rgb(139, 0, 0)",
    //         color: "#fff",
    //         borderRadius: "20px",
    //       }}
    //       contentArrowStyle={{ display: "none" }}
    //       iconStyle={{
    //         background: "#fff",
    //         color: "#000",
    //         width: "20px",
    //         height: "20px",
    //         marginLeft: "-10px", // recenter after resizing
    //       }}
    //     >
    //       <h3 className="font-bold text-xl">NON-IT Professionals</h3>
    //       <p>
    //         Think AI is too technical? Scared to switch careers? Want to break
    //         into IT without coding fear?
    //       </p>
    //     </VerticalTimelineElement>
    //     <VerticalTimelineElement
    //       contentStyle={{
    //         background: "rgb(139, 0, 0)",
    //         color: "#fff",
    //         borderRadius: "20px",
    //       }}
    //       contentArrowStyle={{ display: "none" }}
    //       iconStyle={{
    //         background: "#fff",
    //         color: "#000",
    //         width: "20px",
    //         height: "20px",
    //         marginLeft: "-10px", // recenter after resizing
    //       }}
    //     >
    //       <h3 className="font-bold text-xl">Freelancers</h3>
    //       <p>
    //         Losing clients because you don’t know AI tools? Struggling to keep
    //         up with demand
    //       </p>
    //     </VerticalTimelineElement>
    //     <VerticalTimelineElement
    //       contentStyle={{
    //         background: "rgb(139, 0, 0)",
    //         color: "#fff",
    //         borderRadius: "20px",
    //       }}
    //       contentArrowStyle={{ display: "none" }}
    //       iconStyle={{
    //         background: "#fff",
    //         color: "#000",
    //         width: "20px",
    //         height: "20px",
    //         marginLeft: "-10px", // recenter after resizing
    //       }}
    //     >
    //       <h3 className="font-bold text-xl">Students & Fresh Graduates</h3>
    //       <p>
    //         Just finished college? No job-ready skills? Want to impress
    //         recruiters with AI projects?
    //       </p>
    //     </VerticalTimelineElement>
    //   </VerticalTimeline>
    // </section>
    <section
      className="relative w-full"
      // style={{
      //   background:
      //     "linear-gradient(rgb(3,18,13) 0%, rgb(10,2,1) 50%, rgb(3,18,13) 100%)",
      // }}
    >
      <div className="px-5 py-11 md:px-10 lg:py-20 xl:px-0 xl:max-w-[1180px] xl:mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl font-bold leading-9 lg:text-5xl text-center lg:leading-[48px] xl:text-[52px] xl:leading-[60px]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          What’s Stopping You?
        </h2>

        {/* Timeline */}
        <div className="mt-9 lg:mt-14 lg:max-w-[816px] mx-auto xl:max-w-[900px] relative">
          {/* Vertical Line */}
          {/* <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-[1px] h-full bg-white/20"></div> */}

          <div className="flex flex-col gap-14 relative">
            {/* Vertical line */}
            <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-[1px] h-full bg-black/20"></div>

            {items.map((item, idx) => (
              <div key={idx} className="relative flex items-start">
                {/* Circle (always on line) */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-6 z-10">
                  <div className="border border-black/20 p-1.5 md:p-2 rounded-full bg-transparent">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex flex-col bg-main gap-2 p-5 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] w-full md:w-[46%] ${
                    item.side === "left"
                      ? "ml-10 md:ml-0 md:mr-auto"
                      : "ml-10 md:ml-auto"
                  } ${
                    item.side === ""
                      ? "bg-[linear-gradient(121deg,rgba(220,38,38,0.5)_0%,rgba(3,18,13,0)_100%)] md:bg-[linear-gradient(80deg,rgba(3,18,13,0)_0%,rgba(220,38,38,0.5)_100%)]"
                      : "bg-[linear-gradient(121deg,rgba(220,38,38,0.5)_0%,rgba(3,18,13,0)_100%)]"
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
