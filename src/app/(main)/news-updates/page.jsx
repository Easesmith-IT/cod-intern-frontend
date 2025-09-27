export const dynamic = "force-dynamic";

import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { NewsUpdatesClient } from "@/components/new-and-updates/news-updates-client";
import { getSeoByPage } from "@/lib/axiosInstance";

export async function generateMetadata() {
  const seo = await getSeoByPage("news-updates");

  const defaultTitle = "News & Updates - Codintern";
  const defaultDescription =
    "Stay updated with the latest news, announcements, and updates from Codintern on internships, fresher jobs, and career tips.";
  const keywords = [
    "Codintern News",
    "Codintern Updates",
    "Career Announcements",
    "Fresher Job News",
    "Internship Updates",
    "Career Tips",
    "Student Opportunities",
    "Latest Job Updates",
    "Skill Development News",
    "Codintern Announcements",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/news-updates`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const NewsAndUpdates = () => {
  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "News & Updates Page", url: "", isLink: false },
        ]}
      />

      <NewsUpdatesClient />
    </section>
  );
};

export default NewsAndUpdates;
