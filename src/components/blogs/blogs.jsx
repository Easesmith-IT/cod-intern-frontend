import { useWpApiQuery } from "@/hooks/useWpApiQuery";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CustomMessage from "../shared/custom-message";
import { Button } from "../ui/button";
import { Blog } from "./blog";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export const BlogsComp = ({
  children,
  categoryId,
  categoryName,
  className,
  showBackButton = false,
}) => {
  const searchParams = useSearchParams();
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
    url: `/posts?categories=${categoryId}&page=${page}&per_page=8&_embed`,
    queryKeys: ["posts", categoryId, page],
    options: { enabled: false, retry: 1 },
  });
  console.log("posts", data);

  useEffect(() => {
    categoryId && refetch();
  }, [categoryId, page]);

  const handleViewMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", categoryId);
    params.set("categoryName", categoryName);
    router.push(`/blogs?${params.toString()}`);
  };

  useScrollToTop(page);

  return (
    <div className={cn("mt-6 sm:mt-12", className)}>
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-1">
          {showBackButton && (
            <Link href="/blogs" className="flex gap-1 items-center">
              <ArrowLeft className="text-3xl cursor-pointer" />
              {/* <TypographyH2 heading="All Pages" /> */}
            </Link>
          )}
          <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium">
            {children}
            <Image
              src="/ellipse-group.svg"
              className="inline-block ml-2 max-[380px]:hidden"
              width={46}
              height={16}
              alt="Ellipse"
            />
          </h2>
        </div>
        {!showBackButton && (
          <Button
            variant="ghost"
            className="text-main text-xs sm:text-sm gap-1"
            onClick={handleViewMore}
          >
            <span>View More</span>
            <ChevronRight className="size-5" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 sm:mt-10">
        {data?.map((post) => (
          <Blog
            key={post?.id}
            href={`/blogs/${post?.slug}`}
            src="/blog/blog1.png"
            title={post?.title.rendered}
            desc={post?.excerpt.rendered && parse(post?.excerpt.rendered)}
            timeStamp={post?.date}
            featured_media={post?.featured_media}
          />
        ))}

        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => <Blog.Skeleton key={i} />)}

      </div>

      {error && <CustomMessage message="Blogs not found" />}

      {/* {showBackButton && (
        <PaginationComp
          page={page}
          pageCount={pageCount}
          setPage={setPage}
          href="/jobs"
          className="mt-10"
        />
      )} */}

      {showBackButton && (
        <div className="flex justify-center items-center gap-5 mt-10">
          <Button onClick={handlePrevious} disabled={page === 1}>
            Previous
          </Button>
          <Button onClick={handleNext} disabled={!data}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
