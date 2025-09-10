import { BlogsClient } from "@/components/blogs/blogs-client";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";

export const metadata = {
  title: "Blogs - Codintern",
  description:
    "Read the latest blogs from Codintern on career tips, internships, fresher jobs, and skill development.",
};

const Blogs = ({ searchParams }) => {
  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Blog Page", url: "", isLink: false },
        ]}
      />

      <BlogsClient />
    </section>
  );
};

export default Blogs;
