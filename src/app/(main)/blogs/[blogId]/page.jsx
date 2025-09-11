"use client";

import { Blog } from "@/components/blogs/blog";
import { Blog1 } from "@/components/blogs/blog1";
import { Blog2 } from "@/components/blogs/blog2";
import { Blog3 } from "@/components/blogs/blog3";
import { Blog4 } from "@/components/blogs/blog4";
import { Blog5 } from "@/components/blogs/blog5";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import axios from "axios";
import Image from "next/image";
import parse from "html-react-parser";
import { useWpApiQuery } from "@/hooks/useWpApiQuery";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { RelatedBlogs } from "@/components/blogs/related-blogs";
import { BlogDetailSkeleton } from "@/components/blogs/blog-detail-skeleton";
import { ImageOff } from "lucide-react";
import he from "he";

const BlogDetails = () => {
  const params = useParams();

  const { data, isLoading, error, refetch } = useWpApiQuery({
    url: `/posts?slug=${params?.blogId}`,
    queryKeys: ["posts", params?.blogId],
    options: { enabled: false },
  });

  const {
    title,
    content,
    featured_media = "",
    categories = [],
    id,
  } = data?.[0] || {};

  useEffect(() => {
    params?.blogId && refetch();
  }, [params?.blogId]);

  const {
    data: imageData,
    isLoading: isImageLoading,
    refetch: refetchImage,
  } = useWpApiQuery({
    url: `/media/${featured_media}`,
    queryKeys: ["media", featured_media],
    options: { enabled: false },
  });

  useEffect(() => {
    featured_media && refetchImage();
  }, [featured_media]);

  return (
    <section className="section-container pt-8 md:pt-12 pb-12 ">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Blog Detail Page", url: "", isLink: false },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-10 mt-6 sm:mt-12">
        <div className="flex-1">
          <div className="relative">
            {isLoading || isImageLoading ? (
              <Skeleton className="aspect-video w-full" />
            ) : imageData?.guid?.rendered ? (
              <Image
                src={imageData?.guid?.rendered || "/blog/1.png"}
                className="aspect-video w-full sm:h-full"
                width={900}
                height={166}
                loading="lazy"
                placeholder="blur"
                blurDataURL={imageData?.guid?.rendered || "/blog/1.png"}
                alt="Blog"
              />
            ) : (
              <div className="aspect-video shadow rounded-2xl w-full h-full flex justify-center items-center">
                <ImageOff className="size-32 text-gray-500" />
              </div>
            )}
          </div>

          {isLoading ? (
            <BlogDetailSkeleton />
          ) : (
            <>
              <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl font-medium mt-10">
                {title?.rendered && he.decode(title?.rendered)}
              </h2>

              <div
                className="prose prose-base prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: content?.rendered }}
              />
            </>
          )}
        </div>
        <div className="max-w-[400px] w-full">
          <RelatedBlogs categoryId={categories?.[0]} postId={id} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
