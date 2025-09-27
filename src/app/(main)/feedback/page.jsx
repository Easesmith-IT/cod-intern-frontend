export const dynamic = "force-dynamic";

import { getSeoByPage } from "@/lib/axiosInstance";
import { FeedbackClient } from "./feedback-client";

export async function generateMetadata() {
  const seo = await getSeoByPage("feedback");

  const defaultTitle = "Workshop Feedback Form - Codintern";
  const defaultDescription =
    "Share your feedback on Codintern's workshops to help us improve future sessions and provide better learning experiences.";
  const keywords = [
    "Codintern workshop feedback",
    "workshop review",
    "training feedback form",
    "online workshop survey",
    "workshop evaluation",
    "learning experience feedback",
    "workshop participant feedback",
    "Codintern courses feedback",
    "training session review",
    "workshop improvement survey",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/feedback`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const Feedback = () => {
  return <FeedbackClient />;
};

export default Feedback;
