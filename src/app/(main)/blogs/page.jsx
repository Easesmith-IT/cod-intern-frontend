import { BlogsComp } from "@/components/blogs/blogs";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";

export const metadata = {
  title: "Blogs - Cod Intern",
  description:
    "Read the latest blogs from Cod Intern on career tips, internships, fresher jobs, and skill development.",
};

const Blogs = () => {
  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Blog Page", url: "", isLink: false },
        ]}
      />

      <BlogsComp category="recent">
        <span className="text-main">Our</span> Recent Blogs
      </BlogsComp>

      {/* <BlogsComp category="latest">
        <span className="text-main">Latest</span> Articles
      </BlogsComp>

      <BlogsComp category="internship-tips">
        <span className="text-main">Internship</span> Tips
      </BlogsComp>

      <BlogsComp category="career-advice">
        <span className="text-main">Career</span> Advice
      </BlogsComp> */}
    </section>
  );
};

export default Blogs;
