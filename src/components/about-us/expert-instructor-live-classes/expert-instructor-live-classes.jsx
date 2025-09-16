import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Info } from "./info";
import { Skeleton } from "@/components/ui/skeleton";

export const ExpertInstructorLiveClasses = ({ data, isLoading }) => {
  const { content, images } = data || {};

  return (
    <section className="py-12 md:py-24 section-container flex flex-col lg:flex-row gap-20 items-center">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium capitalize">
          <span className="text-main">Live Skill-Building</span> Sessions by
          Experts
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>

        {isLoading && (
          <div className="space-y-2 mt-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full rounded-md" />
            ))}
          </div>
        )}

        {!isLoading && (
          <div
            className="prose prose-base prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: content?.desc }}
          />
        )}

        <Separator className="mt-5" />
        <div className="flex gap-10 mt-8">
          <Info title="24/7 Support" />
        </div>
      </div>
      <div>
        <Image
          src={images?.[0]?.image || "/about-us/expert-instructor.svg"}
          width={401}
          height={419}
          alt="expert-instructor"
        />
      </div>
    </section>
  );
};
