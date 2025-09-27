export const dynamic = "force-dynamic";

import { AboutUsClient } from "@/components/about-us/about-us-client";
import { getSeoByPage } from "@/lib/axiosInstance";

export async function generateMetadata() {
  const seo = await getSeoByPage("about-us");

  const defaultTitle = "About Us - CodIntern";
  const defaultDescription =
    "Learn more about CodIntern, our mission, and the team behind it.";
  const keywords = [
    "About CodIntern",
    "CodIntern Team",
    "Our Mission",
    "Company Values",
    "CodIntern Story",
    "Career Platform",
    "Internship Platform",
    "Job Portal for Freshers",
    "Skill Development",
    "CodIntern Vision",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/about-us`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const AboutUs = () => {
  return (
    <section>
      <AboutUsClient />
    </section>
  );
};

export default AboutUs;
