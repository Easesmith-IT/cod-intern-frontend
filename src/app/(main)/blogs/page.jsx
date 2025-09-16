import { BlogsClient } from "@/components/blogs/blogs-client";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { Suspense } from "react";

export const metadata = {
  title: "Blogs - Codintern",
  description:
    "Read the latest blogs from Codintern on career tips, internships, fresher jobs, and skill development.",
};

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/categories`,
    { next: { revalidate: 60 } } // ISR: refresh every 60s
  );
  if (!res.ok) return [];
  return res.json();
}

const BlogsPage = async () => {
  const categories = await getCategories();

  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Blog Page", url: "", isLink: false },
        ]}
      />

      <Suspense fallback={<p>Loading...</p>}>
        <BlogsClient categories={categories} />
      </Suspense>
    </section>
  );
};

export default BlogsPage;
