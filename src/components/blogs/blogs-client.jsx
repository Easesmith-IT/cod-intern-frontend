"use client";

import { useSearchParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import { Blog } from "./blog";
import { BlogsComp } from "./blogs";
// import { BlogsComp } from "./blogs";

export const BlogsClient = ({ categories }) => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const categoryName = searchParams.get("categoryName");
  const isLoading = categories.length === 0;

  return (
    <>
      {categoryId ? (
        <BlogsComp
          showBackButton
          categoryId={categoryId}
          categoryName={categoryName}
        >
          {categoryName}
        </BlogsComp>
      ) : (
        categories?.map((category) =>
          category.count > 0 ? (
            <BlogsComp
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
            >
              {category.name}
            </BlogsComp>
          ) : null
        )
      )}

      {isLoading && (
        <>
          <Skeleton className="h-10 w-72 mt-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 sm:mt-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <Blog.Skeleton key={i} />
            ))}
          </div>
        </>
      )}

      {/* <BlogsComp category="latest">
        <span className="text-main">Latest</span> Articles
      </BlogsComp> */}

      {/* <BlogsComp category="internship-tips">
        <span className="text-main">Internship</span> Tips
      </BlogsComp> */}

      {/* <BlogsComp category="career-advice">
        <span className="text-main">Career</span> Advice
      </BlogsComp> */}
    </>
  );
};
