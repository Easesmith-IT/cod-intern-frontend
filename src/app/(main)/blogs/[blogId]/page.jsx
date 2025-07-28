import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import Image from "next/image";
import React from "react";

const BlogDetails = () => {
  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Blog Detail Page", url: "", isLink: false },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-10 mt-6 sm:mt-12">
        <div className="flex-1">
          <Image
            src="/blog/blog-1.jpg"
            className="w-full"
            width={900}
            height={166}
          />
        </div>
        <div className="max-w-[400px] w-full">ddd</div>
      </div>
    </section>
  );
};

export default BlogDetails;
