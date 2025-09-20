import { GenerativeAIWorkShopRegistrationClient } from "@/components/workshop/generative-ai-workshop-registration-client";
import Script from "next/script";

export const metadata = {
  title: "Prompt Engineering Workshop Registration - Codintern",
  description:
    "Join Codintern's Prompt Engineering Workshop to master AI tools, learn practical techniques, and enhance your career skills. Register now to secure your spot.",
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
