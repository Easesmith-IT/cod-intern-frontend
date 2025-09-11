"use client";

import { useWpApiQuery } from "@/hooks/useWpApiQuery";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Blog } from "../blogs/blog";
import parse from "html-react-parser";
import CustomMessage from "../shared/custom-message";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Button } from "../ui/button";
import { TypographyH2 } from "../typography/typography-h2";
import Image from "next/image";

export const NewsUpdatesClient = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(2);

  const handlePrevious = () => {
    setPage((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleNext = () => {
    setPage((prev) => {
      // if (prev < totalPages) return prev + 1;
      return prev + 1;
    });
  };

  const { data, isLoading, error, refetch } = useWpApiQuery({
    url: `/news-and-updates?page=${page}&per_page=8&_embed`,
    queryKeys: ["news-updates", page],
    options: { enabled: true, retry: 1 },
  });
  console.log("news & updates", data);

  useScrollToTop(page);

  return (
    <div className="mt-6 sm:mt-12">
      <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium">
        News and Updates
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2 max-[380px]:hidden"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 sm:mt-10">
        {data?.map((post) => (
          <Blog
            key={post?.id}
            href={`/news-updates/${post?.slug}`}
            title={post?.title?.rendered}
            desc={post?.excerpt?.rendered && parse(post?.excerpt.rendered)}
            timeStamp={post?.date}
            featured_media={post?.featured_media}
          />
        ))}

        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => <Blog.Skeleton key={i} />)}
      </div>

      {error && <CustomMessage message="News & Updates not found" />}

      <div className="flex justify-center items-center gap-5 mt-10">
        <Button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={!data}>
          Next
        </Button>
      </div>
    </div>
  );
};
