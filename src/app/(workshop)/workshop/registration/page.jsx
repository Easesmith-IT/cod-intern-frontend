export const dynamic = "force-dynamic";

import { WorkShopRegistrationClient } from "@/components/workshop/workshop-registration-client";
import { getSeoByPage } from "@/lib/axiosInstance";

export async function generateMetadata() {
  const seo = await getSeoByPage("workshop-registration");

  const defaultTitle = "Workshop Registration - Codintern";
  const defaultDescription =
    "Register for Codintern's upcoming workshops and enhance your skills with industry experts.";
  const keywords = [
    "Workshop Registration",
    "Codintern Workshops",
    "Skill Development",
    "Industry Experts",
    "Career Growth",
    "Online Workshops",
    "Professional Training",
    "Student Workshops",
    "Learning Programs",
    "Register for Workshops",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/workshop/registration`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const WorkShopRegistration = () => {
  return <WorkShopRegistrationClient />;
};

export default WorkShopRegistration;
