import { Blog } from "@/components/blogs/blog";
import { InThisArticle } from "@/components/blogs/in-this-article";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Image from "next/image";

export const Blog3 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-6 sm:mt-12">
      <div className="flex-1">
        <div className="relative">
          <Image
            src="/blog/3.png"
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
          Dynamic Programming: The Smart Way to Solve Tough Problems
        </h2>

        <div className="space-y-3 mt-4">
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Let’s face it — the words{" "}
            <b className="italic">“Dynamic Programming”</b> sound technical,
            maybe even scary. But what if I told you that it’s actually just a{" "}
            <b>
              smart way to solve big problems by thinking ahead and remembering
              what you’ve already done
            </b>
            ?
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Dynamic programming (or <b>DP</b>, as most people call it) is not
            just a computer science trick — it’s a life lesson. It’s about
            <b>
              saving time, avoiding repetition, and working smarter, not harder
            </b>
            .
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Let’s make this concept fun and crystal clear.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            What Is Dynamic Programming, Really?
          </h4>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Imagine this:
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            You’re climbing a staircase with 10 steps. You can either take 1 or
            2 steps at a time. Now, someone asks:{" "}
            <span className="italic">
              “How many different ways can you reach the top?”
            </span>
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            You could sit down and try every combination manually, right? But
            wouldn’t it be easier if you just remembered how many ways there
            were to reach step 8 and step 9, and added those to find step 10?
          </p>
          <div>
            <h4 className="font-stolzl font-medium text-base text-para-3">
              That’s Dynamic Programming.
            </h4>
            <p className="font-stolzl text-xs sm:text-sm font-book text-para">
              It’s all about breaking down a problem, solving smaller parts just
              once, remembering the answers, and reusing them when needed.
            </p>
          </div>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            It’s all about <b>breaking down a problem</b>, solving smaller parts
            <b>just once</b>, remembering the answers, and <b>reusing</b> them
            when needed.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            The Core Idea: Don’t Repeat Yourself
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Dynamic Programming is based on a beautiful principle:
          </p>

          <h4 className="font-stolzl font-medium text-base text-para-3">
            Why solve the same thing twice if you’ve already figured it out
            once?
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            It’s like saving a recipe after perfecting it once, so you don’t
            have to reinvent the dish every time you cook. Or like saving your
            friend’s Wi-Fi password instead of typing it in again and again.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Where Is Dynamic Programming Used?
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            You might not realize it, but DP is <b>everywhere</b> — not just in
            textbooks or coding interviews.
          </p>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Here’s where it pops up in real life and tech:
          </p>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>
              <b>Spell Checkers</b>: When you mistype a word, your phone finds
              the closest word — using a smart technique powered by DP.
            </li>
            <li>
              <b>Navigation Apps</b>: When Google Maps finds the shortest route
              from point A to B, it’s often using DP to skip unnecessary
              calculations.
            </li>
            <li>
              <b>Budget Planning</b>: When you want the best outcome within a
              limited budget (say, buying items or planning a trip), DP helps
              figure it out efficiently.
            </li>
            <li>
              <b>DNA Matching</b> in healthcare or crime solving uses DP to
              compare genetic sequences.
            </li>
            <li>
              <b>Games and AI</b>: Many video games use DP to make smarter moves
              or decisions in real-time.
            </li>
          </ul>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Two Secrets That Make DP Work
          </h4>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            DP works only when two things are true:
          </p>

          <ol className="ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>
              <h4 className="font-stolzl font-medium text-base text-para-3">
                1. The problem can be broken into smaller, repeating parts.
              </h4>
              <p className="ml-4">
                a. Example: Climbing 10 steps can be broken into climbing 9 or 8
                steps.
              </p>
            </li>
            <li>
              <h4 className="font-stolzl font-medium text-base text-para-3">
                2. The best solution comes from the best solutions to those
                smaller parts.
              </h4>
              <p className="ml-4">
                a. If you know the best way to reach step 8 and step 9, you can
                find step 10.
              </p>
            </li>
          </ol>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            If both are true — boom! You’ve got a DP problem.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Why Is Dynamic Programming So Powerful?
          </h4>

          <ul className="ml-1 font-stolzl text-xs sm:text-sm space-y-3 font-book text-para">
            <li>
              <h4 className="font-stolzl font-medium text-base text-para-3">
                ✅1. It Saves Time
              </h4>
              <p className="mt-2">
                Instead of solving the same sub-task 100 times, you solve it
                once and reuse the answer.
              </p>
            </li>
            <li>
              <h4 className="font-stolzl font-medium text-base text-para-3">
                ✅2. It Handles Big Tasks
              </h4>
              <p className="mt-2">
                Even when there are thousands of possibilities, DP keeps things
                fast and efficient.
              </p>
            </li>
            <li>
              <h4 className="font-stolzl font-medium text-base text-para-3">
                ✅3. It Makes You Think Logically
              </h4>
              <p className="mt-2">
                It trains your brain to see patterns and make decisions step by
                step — something that helps even outside coding.
              </p>
            </li>
          </ul>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            A Mental Trick to Learn DP
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Here’s a simple trick to understand DP:
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Pretend your brain has a notebook. <br /> Every time you solve a
            part of the problem, <b>write the answer in the notebook</b>. If you
            face that part again — <b>just peek at your notes</b> instead of
            solving it again.
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            That’s all DP is — solving, storing, reusing.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Life and DP: A Fun Perspective
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Believe it or not, we all use DP in life:
          </p>
          <ul className="ml-8 list-disc font-stolzl text-xs sm:text-sm space-y-3 font-book text-para">
            <li>Remembering which shortcut gets us home faster.</li>
            <li>Using last year’s tax file to fill this year’s.</li>
            <li>Repeating the same outfit combo because it just works.</li>
          </ul>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            It’s the same logic: <b>learn once, use forever</b>.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Final Thoughts: Dynamic Programming Is a Super Skill
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Dynamic Programming may sound complicated at first, but once you
            understand the heart of it, it’s like unlocking a secret door to
            smarter thinking.
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            It’s not about being a genius. It’s about being <b>organized</b>,
            <b>observant</b>, and <b>efficient</b>.
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            So next time you face a hard challenge — whether it’s in coding,
            studying, or life — stop and ask yourself:
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            “Have I solved something like this before?” <br />
            If yes, reuse it. <br />
            If no, solve it once and remember it.
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            That’s Dynamic Programming in its most human form
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
              href="/blogs/4"
              src="/blog/blog4.png"
              title="Top Robotics Trends That Will Dominate
            the Next Decade"
              timeStamp="01 August 2025 at 11:21"
              desc="Robots are no longer just machines in science fiction movies. They are now part of our
            everyday lives — helping us in hospitals, factories, homes, and even in space. But what
            does the future hold?"
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
