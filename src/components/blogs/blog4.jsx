import { Blog } from "@/components/blogs/blog";
import { InThisArticle } from "@/components/blogs/in-this-article";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Image from "next/image";

export const Blog4 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-6 sm:mt-12">
      <div className="flex-1">
        <div className="relative">
          <Image
            src="/blog/4.png"
            className="w-full h-[266px] sm:h-full"
            width={900}
            height={166}
            alt="Blog"
          />
          {/* <div
            style={{ backdropFilter: "blur(10px)" }}
            className="absolute bottom-0 w-full left-0 right-0 p-2 sm:p-6"
          >
            <h3 className="font-stolzl text-white font-medium leading-6 text-base sm:text-xl max-w-[650px]">
              How to Write Articles with AI? Include Your Unique Perspective
            </h3>
            <div className="flex gap-1 items-center mt-1">
              <span className="font-stolzl text-xs sm:text-sm font-book text-white">
                Oct 19
              </span>
              <Dot className="text-white" />
              <span className="font-stolzl text-xs sm:text-sm font-book text-white">
                10 min read
              </span>
            </div>
          </div> */}
        </div>

        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium mt-5">
          Top Robotics Trends That Will Dominate the Next Decade
        </h2>

        <div className="space-y-3 mt-4">
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Robots are no longer just machines in science fiction movies. They
            are now part of our everyday lives — helping us in hospitals,
            factories, homes, and even in space. But what does the future hold?
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            As technology grows faster than ever before,{" "}
            <b>robotics is entering a golden era</b>. In the next ten years, we
            will see robots becoming smarter, more human-like, and more helpful
            than ever.
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            In this blog, we’ll explore the{" "}
            <b>top robotics trends that will shape the future</b> — in the
            simplest possible language, so everyone can understand.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            1. Smarter Robots with Artificial Intelligence
          </h4>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            In the coming years, robots won’t just follow instructions. They
            will <b>think, learn, and adapt</b> — thanks to AI (Artificial
            Intelligence).
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            What this means:
          </h4>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>Robots will learn from experience, like humans.</li>
            <li>They will solve problems on their own.</li>
            <li>They will make decisions without needing human help.</li>
          </ul>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Real-world example:
          </h4>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Think about self-driving delivery robots that can find the best path
            on their own. Or robots in hospitals that monitor patients and alert
            doctors if something goes wrong.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            2. Human-Like Robots (Humanoids)
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Humanoid robots are robots designed to look and move like people.
            These robots are being developed for customer service, elderly care,
            and even personal companionship.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            What’s changing:
          </h4>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>More natural facial expressions.</li>
            <li>Better voice understanding.</li>
            <li>More realistic body movements.</li>
          </ul>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Example:
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            <b>Tesla’s Optimus Robot</b> is being designed to walk, talk, and
            help with basic tasks at home or in the office.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            3. Robots Working Together (Swarm Robotics)
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Imagine a group of small robots working as a team, like a swarm of
            bees. That’s exactly what <b>swarm robotics</b> is all about.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Benefits:
          </h4>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>They can complete big tasks faster.</li>
            <li>If one robot fails, the others continue.</li>
            <li>Perfect for search and rescue missions or farming.</li>
          </ul>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Example:
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Tiny drones working together to map large areas during disasters or
            to spray crops efficiently.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            4. Healthcare Robots Will Save Lives
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            The healthcare industry is rapidly adopting robots — and it’s not
            just for surgeries.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Upcoming trends:
          </h4>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>Robots helping nurses in hospitals.</li>
            <li>Robots that remind elderly people to take medicine.</li>
            <li>
              Surgical robots performing complex procedures with precision.
            </li>
          </ul>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Fun fact:
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Some robots now use AI to detect signs of diseases like cancer
            faster than doctors.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            5. Robots That Build, Fix, and Work 24/7
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            In factories, robots already do a lot of repetitive tasks. But in
            the future, <b>they will do much more</b>.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Key trends:
          </h4>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>Self-healing robots that fix themselves.</li>
            <li>Robots that build other robots.</li>
            <li>Fully automated factories with 24/7 robotic workers.</li>
          </ul>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            This means <b>faster production, less human error</b>, and{" "}
            <b>safer workplaces</b>.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            6. Personal Robots for Home and Life
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Soon, it won’t be strange to have a robot in your house — not just
            to clean floors but to help with daily life.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            They will:
          </h4>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>Talk to you.</li>
            <li>Cook simple meals.</li>
            <li>Help kids with studies.</li>
            <li>Assist elderly people with walking or remembering tasks.</li>
          </ul>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Example:
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            <b>Robots like Amazon Astro</b> are early versions of home
            assistants with cameras, speakers, and smart AI.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            7. Space Robots Exploring the Universe
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Space exploration will rely heavily on robots in the next decade.
            Since robots don’t need oxygen or food, they are perfect for long
            missions.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            New advancements:
          </h4>

          <ul className="ml-8 list-disc font-stolzl text-xs sm:text-sm space-y-3 font-book text-para">
            <li>Robots that build structures on the Moon or Mars.</li>
            <li>Rovers that collect samples and send data back to Earth.</li>
            <li>Flying robots that explore atmospheres of other planets.</li>
          </ul>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            <b>NASA</b> and <b>SpaceX</b> are already testing these
            technologies.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            8. Agricultural Robots Feeding the World
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            With the world population growing, we need more food — and robots
            are stepping in to help.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Future farming robots will:
          </h4>

          <ul className="ml-8 list-disc font-stolzl text-xs sm:text-sm space-y-3 font-book text-para">
            <li>Plant seeds and water crops.</li>
            <li>Detect weeds and remove them.</li>
            <li>Monitor crop health using cameras and AI.</li>
          </ul>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            This will lead to <b>higher yields, less waste</b>, and{" "}
            <b>eco-friendly farming</b>.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            9. Security & Military Robots on the Rise
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Robots are being developed for defense and security tasks — both for
            safety and to reduce human risks.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Roles include:
          </h4>

          <ul className="ml-8 list-disc font-stolzl text-xs sm:text-sm space-y-3 font-book text-para">
            <li>Patrolling borders.</li>
            <li>Disarming bombs.</li>
            <li>Surveillance in dangerous areas.</li>
          </ul>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            <b>Important note</b>: This trend must be handled carefully to
            ensure safety, ethics, and control over robot decisions.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            10. Robots That Learn in Real-Time
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Perhaps the biggest breakthrough will be robots that never stop
            learning.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            They will:
          </h4>

          <ul className="ml-8 list-disc font-stolzl text-xs sm:text-sm space-y-3 font-book text-para">
            <li>Improve with every task.</li>
            <li>Remember what went wrong.</li>
            <li>Adjust to new environments on their own.</li>
          </ul>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            This is called <b>continuous learning</b>, and it makes robots
            smarter the longer they work.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Final Thoughts: The Robotic Future is Closer Than You Think
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Over the next decade,{" "}
            <b>
              robots will no longer be a luxury or experiment — they will become
              a necessity
            </b>
            . Whether it’s in hospitals, homes, farms, or outer space, robots
            will change how we live, work, and grow.
          </p>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            But with this great power comes great responsibility. It’s up to us
            — the engineers, scientists, policymakers, and even everyday users —
            to guide this robotic revolution in a way that’s{" "}
            <b>safe, ethical, and human-friendly</b>.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Are You Ready for the Robotic Revolution?
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            If you’re a student, hobbyist, or professional —{" "}
            <b>now is the best time to explore robotics</b>. The next decade
            will be defined by those who understand and shape this powerful
            technology.
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Liked this article?
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Share it with friends, tag us on social media, and let us know which
            robot trend excites you the most!
          </p>
        </div>

        <div className="mt-5 relative w-full p-4 overflow-hidden rounded-md bg-para-3 text-white flex justify-between flex-wrap items-center gap-4">
          <Image
            src="/blog/bg.png"
            className="absolute top-0 left-1 opacity-20"
            width={400}
            height={30}
            alt="bg"
          />
          <h5 className="text-base sm:text-lg font-stolzl font-medium relative">
            Like what you see? Share with a friend.
          </h5>
          <div className="flex gap-4 items-center relative">
            <Image
              src="/blog/facebook.svg"
              width={30}
              height={30}
              alt="Facebook"
            />
            <Image
              src="/blog/twitter.svg"
              width={30}
              height={30}
              alt="Twitter"
            />
            <Image
              src="/blog/linkedin.svg"
              width={30}
              height={30}
              alt="Linkedin"
            />
          </div>
        </div>

        {/* <Separator className="mt-8 md:mt-20" /> */}
      </div>
      <div className="max-w-[400px] w-full">
        {/* <InThisArticle /> */}

        {/* <div className="mt-10"> */}
        <div>
          <h3 className="font-stolzl font-medium text-2xl">Related Blog</h3>
          <div className="flex flex-col gap-5 mt-5">
            <Blog
              href="/blogs/1"
              src="/blog/blog1.png"
              title="Code Optimization: Writing Smarter, Faster & Cleaner Code"
              timeStamp="31 July 2025 at 05:54"
              desc="In the fast-paced world of technology, simply writing code that works isn’t enough.
            Whether you’re building a mobile app, a website, or a data-heavy backend system — your
            users, clients, and teammates expect more than just functionality. They expect"
            />
            <Blog
              href="/blogs/2"
              src="/blog/blog2.png"
              title="When Robots Learn on Their Own: The Rise
            of Self-Evolving AI in Robotics"
              timeStamp="31 July 2025 at 05:54"
              desc="In a world where machines are no longer just programmed — but learn, adapt, and evolve
            — we are stepping into a new age of robotics powered by artificial intelligence. Gone are
            the days when robots could only perform repetitive tasks. Today, they are becoming selflearners, capable of improving their performance without explicit human instructions. This
            is not science fiction — it’s the dawn of self-evolving AI in robotics."
            />
            <Blog
              href="/blogs/3"
              src="/blog/blog3.png"
              title="Dynamic Programming: The Smart Way to
            Solve Tough Problems"
              timeStamp="01 August 2025 at 10:28"
              desc="Let’s face it — the words “Dynamic Programming” sound technical, maybe even scary.
            But what if I told you that it’s actually just a smart way to solve big problems by thinking
            ahead and remembering what you’ve already done?"
            />

            <Blog
              href="/blogs/5"
              src="/blog/blog5.png"
              title="What is API Integration? A Simple Guide for Everyone"
              timeStamp="01 August 2025 at 12:12"
              desc="In today’s fast-paced digital world, apps and platforms need to work together seamlessly. Think
            about reserving a cab, placing an online order, or getting a payment notifcation — all of this
            happens because different systems are communicating behind the scenes."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
