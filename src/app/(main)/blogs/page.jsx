export const dynamic = "force-dynamic";

import { BlogsClient } from "@/components/blogs/blogs-client";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { getSeoByPage } from "@/lib/axiosInstance";
import { Suspense } from "react";

export async function generateMetadata() {
  const seo = await getSeoByPage("blogs");

  const defaultTitle = "Blogs - Codintern";
  const defaultDescription =
    "Read the latest blogs from Codintern on career tips, internships, fresher jobs, and skill development.";
  const keywords = [
    "Codintern blogs",
    "career tips for freshers",
    "internship guidance",
    "fresher jobs 2025",
    "skill development tips",
    "career growth blogs",
    "interview preparation",
    "resume building",
    "internship opportunities",
    "student career advice",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

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
