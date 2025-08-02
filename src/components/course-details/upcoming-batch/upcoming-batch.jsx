import { CounterItem, CounterSeperator } from "@/components/counter/counter";
import { Button } from "@/components/ui/button";
import { usePersistentCountdown } from "@/hooks/usePersistentCountdown";
import Image from "next/image";

export const UpcomingBatch = () => {
  const { days, hours, minutes, seconds } = usePersistentCountdown();

  return (
    <section className="section-container py-12 md:py-24">
      <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium text-center">
        <span className="text-main">Next Batch</span> Enrollment
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 mt-12">
        <div className="flex gap-5 relative">
          <Image
            src="/upcoming-batch-img.jpg"
            width={543}
            height={388}
            alt="upcoming-batch-img"
            className="relative z-[2] rounded-[21px]"
          />
          <Image
            src="/upcoming-batch-img-1.jpg"
            width={528}
            height={373}
            alt="upcoming-batch-img-1"
            className="absolute -bottom-4 -left-4 z-0"
          />
          <div className="bg-white text-para-3 rounded-2xl px-4 py-1 absolute top-3 left-3 z-[3] text-xs sm:text-sm font-stolzl">
            Data Science and AI Course
          </div>
        </div>
        <div className="">
          <h3 className="font-stolzl font-medium text-para-3 max-w-[667px] text-lg sm:text-2xl lg:text-4xl leading-9 sm:leading-10 lg:leading-11">
            Launch Your Tech Career with CodIntern
          </h3>
          <ul className="mt-5 space-y-4 list-disc ml-5">
            <li className="font-stolzl text-xs sm:text-sm text-para">
              Comprehensive Course Access
            </li>
            <li className="font-stolzl text-xs sm:text-sm text-para">
              Focused Learning Environment
            </li>
            <li className="font-stolzl text-xs sm:text-sm text-para">
              Practical Experience & Credentials
            </li>
            <li className="font-stolzl text-xs sm:text-sm text-para">
              Coding Challenge Practice
            </li>
            <li className="font-stolzl text-xs sm:text-sm text-para">
              Industry Exposure & Support
            </li>
          </ul>

          <div className="flex gap-5 justify-between items-center mt-10">
            <div>
              <h4 className="font-stolzl font-normal sm:text-lg md:text-xl text-para-3">
                Upcoming Batch Starts In
              </h4>
              {/* <div className="flex items-center font-stolzl mt-4">
                <div className="flex justify-center gap-2 border h-12 px-2 py-1 rounded items-center p-2">
                  <span className="text-2xl text-para-3">47</span>
                  <span className="text-sm text-[#A49DAE]">hrs</span>
                </div>
                <p className="px-2">:</p>
                <div className="flex justify-center gap-2 border h-12 px-2 py-1 rounded items-center p-2">
                  <span className="text-2xl text-para-3">59</span>
                  <span className="text-sm text-[#A49DAE]">mins</span>
                </div>
                <p className="px-2">:</p>
                <div className="flex justify-center gap-2 border h-12 px-2 py-1 rounded items-center p-2">
                  <span className="text-2xl text-para-3">45</span>
                  <span className="text-sm text-[#A49DAE]">sec</span>
                </div>
              </div> */}
              <div className="flex items-center font-stolzl text-xs md:text-base mt-4">
                <CounterItem value={days} />
                <CounterSeperator />
                <CounterItem value={hours} />
                <CounterSeperator />
                <CounterItem value={minutes} />
                <CounterSeperator />
                <CounterItem value={seconds} />
              </div>
            </div>
            <div>
              {/* <p className="text-sm font-stolzl text-main">
                Hurry only 2 seats left !!
              </p> */}
              <Button
                size="lg"
                variant="linearGradient"
                className="rounded-sm px-3 h-10 md:px-5 md:h-12 mt-4 text-xs md:text-sm"
              >
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
