export const dynamic = "force-dynamic";

import { HomeClient } from "@/components/home/home-client";
import { getSeoByPage } from "@/lib/axiosInstance";

export async function generateMetadata() {
  const seo = await getSeoByPage("home-page");

  const defaultTitle = "Codintern";
  const defaultDescription = "For Fresher Jobs, Internships and courses";
  const keywords = [
    "Codintern",
    "Fresher Jobs",
    "Internships",
    "Online Courses",
    "Career Growth",
    "Job Portal",
    "LMS Platform",
    "Student Internships",
    "Skill Development",
    "Career Opportunities",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

export default function Home() {
  return (
    <section>
      <HomeClient />
    </section>
  );
}
