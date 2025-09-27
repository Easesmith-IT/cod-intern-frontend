import { GenerativeAIWorkShopRegistrationClient } from "@/components/workshop/generative-ai-workshop-registration-client";
import Script from "next/script";

export const metadata = {
  title: "Prompt Engineering Workshop Registration - CodIntern",
  description:
    "Join CodIntern's Prompt Engineering Workshop to master AI tools, learn practical techniques, and enhance your career skills. Register now to secure your spot.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/workshop/prompt-engineeering/registration`,
  },
};

const WorkShopRegistration = () => {
  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive" // load only on client
      />
      <GenerativeAIWorkShopRegistrationClient />;
    </>
  );
};

export default WorkShopRegistration;
