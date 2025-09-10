import { useWpApiQuery } from "@/hooks/useWpApiQuery";
import React, { useEffect } from "react";
import { Blog } from "./blog";
import parse from "html-react-parser";
import { format } from "date-fns/format";
import CustomMessage from "../shared/custom-message";

export const RelatedBlogs = ({ categoryId, postId }) => {
  // const {categoryId} =
  const { data=[], isLoading, error, refetch } = useWpApiQuery({
    url: `/posts?categories=${categoryId}&exclude=${postId}`,
    queryKeys: ["posts", categoryId],
    options: { enabled: false },
  });
  console.log("posts by category", data);

  useEffect(() => {
    categoryId && refetch();
  }, [categoryId]);
  return (
    <div>
      <h3 className="font-stolzl font-medium text-2xl">Related Blog</h3>
      <div className="flex flex-col gap-5 mt-5">
        {data?.map((post) => (
          <Blog
            key={post?.id}
            href={`/blogs/${post?.slug}`}
            src="/blog/blog1.png"
            title={post?.title.rendered}
            desc={post?.excerpt.rendered && parse(post?.excerpt.rendered)}
            timeStamp={post?.modified}
            featured_media={post?.featured_media}
          />
        ))}
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => <Blog.Skeleton key={i} />)}

          {!isLoading && data.length === 0 && <CustomMessage message="No Related blogs found" />}
      </div>
    </div>
  );
};
