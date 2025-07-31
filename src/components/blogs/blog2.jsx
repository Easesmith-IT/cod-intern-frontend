import { Blog } from "@/components/blogs/blog";
import { InThisArticle } from "@/components/blogs/in-this-article";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Image from "next/image";

export const Blog2 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-6 sm:mt-12">
      <div className="flex-1">
        <div className="relative">
          <Image
            src="/blog/2.png"
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

        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl lg:text-[40px] font-medium mt-5">
          When Robots Learn on Their Own: The Rise of Self-Evolving AI in
          Robotics
        </h2>

        <div className="space-y-3 mt-4">
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            In a world where machines are no longer just programmed — but learn,
            adapt, and evolve — we are stepping into a new age of robotics
            powered by artificial intelligence. Gone are the days when robots
            could only perform repetitive tasks. Today, they are becoming{" "}
            <b>self-learners</b>, capable of improving their performance without
            explicit human instructions. This is not science fiction — it’s the
            dawn of <b>self-evolving AI in robotics</b>.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            What Does “Self-Evolving AI” Mean?
          </h4>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Self-evolving AI refers to{" "}
            <b>AI systems that can learn, adapt, and improve autonomously</b>.
            Unlike traditional AI models that rely heavily on static datasets
            and fixed programming, self-evolving systems continuously absorb new
            data from their environments and experiences. They{" "}
            <b>retrain themselves</b>, evolve strategies, and optimize behavior
            — all on the fly.
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            In robotics, this capability changes everything. Instead of relying
            on programmers to update behavior manually, robots can now{" "}
            <b>figure things out themselves</b> in real time.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            From Commands to Curiosity: A Shift in Robotics
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Conventional robots operate on pre-defined instructions — do this,
            then that. But with self-evolving AI, robots begin to{" "}
            <b>resemble living organisms</b>, developing behaviors through:
          </p>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>
              <b>Reinforcement Learning</b> – Like training a dog, robots
              receive rewards or penalties based on their actions.
            </li>
            <li>
              <b>Imitation Learning</b> – Observing and mimicking human or peer
              behavior.
            </li>
            <li>
              <b>Evolutionary Algorithms</b> – Trying thousands of solutions and
              “evolving” the best ones over generations.
            </li>
            <li>
              <b>Neural Adaptive Models</b> – Changing internal neural pathways
              as they gather new input.
            </li>
          </ul>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            This means robots can navigate unknown terrain, respond to
            unpredictable changes, or even learn new skills without
            reprogramming.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Real-World Examples That Are Changing the Game
          </h4>

          <h4 className="font-stolzl font-medium text-base sm:text-lg text-para-3">
            1. Boston Dynamics' Atlas
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Atlas, the humanoid robot, can now perform backflips, parkour, and
            navigate through obstacles — much of it learned through AI and
            sensor feedback.
          </p>

          <h4 className="font-stolzl font-medium text-base sm:text-lg text-para-3">
            2. DeepMind’s AlphaZero Influence
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Although AlphaZero was built for games, its self-learning framework
            inspired robotic systems that can teach themselves complex
            strategies, like warehouse picking or drone navigation.
          </p>

          <h4 className="font-stolzl font-medium text-base sm:text-lg text-para-3">
            3. Tesla’s Optimus Robot
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Elon Musk’s humanoid robot aims to use Tesla’s AI brain to
            continuously learn tasks — from lifting objects to navigating homes
            and workplaces.
          </p>

          <h4 className="font-stolzl font-medium text-base sm:text-lg text-para-3">
            4. DARPA’s Robotic Challenges
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Autonomous rescue bots trained with self-evolving AI can adapt
            during disasters, deciding how to move debris, climb stairs, or open
            valves.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            The Role of Neural Networks and Continuous Learning
          </h4>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            Neural networks allow machines to make decisions similar to a human
            brain. When combined with continuous learning models, robots become
            capable of:
          </p>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>Recognizing unfamiliar objects.</li>
            <li>Predicting human behavior in shared spaces.</li>
            <li>There are long loading or response times.</li>
            <li>Improving task efficiency over time.</li>
            <li>
              Adapting to new environments, from Mars missions to home
              caregiving
            </li>
          </ul>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Challenges on the Road to Self-Evolving Robots
          </h4>

          <ul className="list-disc ml-8 font-stolzl text-xs sm:text-sm font-book text-para">
            <li>
              <b>Ethical Concerns</b>: How much autonomy is too much? Who is
              responsible for a robot’s decisions?
            </li>
            <li>
              <b>Safety & Control</b>: How do we ensure robots don’t learn
              harmful behaviors? .
            </li>
            <li>
              <b>Computational Cost</b>: Continuous learning requires vast
              processing power and memory.
            </li>
            <li>
              <b>Bias in Learning</b>: If AI learns from flawed data, it may
              develop flawed decisionmaking patterns.
            </li>
          </ul>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            The Future: Robots Teaching Robots?
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            One of the most exciting possibilities is{" "}
            <b>collaborative robotic learning</b>, where robots{" "}
            <b>teach each other</b>. Imagine a robot that learns a new task and
            then uploads that knowledge to a shared cloud, allowing hundreds of
            other robots to instantly replicate that skill.
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            This concept, often called <b>"collective learning"</b>, could
            accelerate global robot intelligence far beyond human speed —
            pushing industries, healthcare, space exploration, and daily life
            into a new dimension.
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            Conclusion: A New Era Has Begun
          </h4>

          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            The rise of self-evolving AI in robotics marks a dramatic shift in
            how we design, interact with, and depend on machines. No longer mere
            tools, these intelligent systems are becoming <b>partners</b>,
            capable of independent learning and innovation.
          </p>
          <p className="font-stolzl text-xs sm:text-sm font-book text-para">
            As we move forward, the question is no longer{" "}
            <span className="italic">“Can robots learn on their own?”</span> —
            it’s <span className="italic">“How far will they go?”</span>
          </p>
        </div>

        <div className="space-y-3 mt-4">
          <h4 className="font-stolzl font-medium text-base sm:text-xl text-para-3">
            If you found this blog interesting, don’t forget to share it!
          </h4>
          <h5 className="font-stolzl font-medium text-sm sm:text-base text-para-3">
            Let’s spark a conversation — because the future is already learning.
          </h5>
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
        <InThisArticle />

        <div className="mt-10">
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
          </div>
        </div>
      </div>
    </div>
  );
};
