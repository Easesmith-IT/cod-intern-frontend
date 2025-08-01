"use client";

import { Blog } from "@/components/blogs/blog";
import { Blog1 } from "@/components/blogs/blog1";
import { Blog2 } from "@/components/blogs/blog2";
import { Blog3 } from "@/components/blogs/blog3";
import { Blog4 } from "@/components/blogs/blog4";
import { Blog5 } from "@/components/blogs/blog5";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const params = useParams();

  console.log("params", params);

  return (
    <section className="section-container pt-8 md:pt-12 pb-12 ">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Blog Detail Page", url: "", isLink: false },
        ]}
      />

      {params.blogId === "1" && <Blog1 />}
      {params.blogId === "2" && <Blog2 />}
      {params.blogId === "3" && <Blog3 />}
      {params.blogId === "4" && <Blog4 />}
      {params.blogId === "5" && <Blog5 />}

      {/* <h2 className="text-2xl font-stolzl mt-12 md:mt-32 text-center leading-9 lg:leading-14 md:text-4xl  font-medium">
        <span className="text-main">Related</span> Blogs
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2 max-[380px]:hidden"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 sm:mt-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <Blog key={index} />
        ))}
      </div> */}
    </section>
  );
};

export default BlogDetails;
