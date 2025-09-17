import { GenerativeAIWorkShopRegistrationClient } from "@/components/workshop/generative-ai-workshop-registration-client";
import Script from "next/script";

export const metadata = {
  title: "Workshop Registration - Codintern",
  description:
    "Register for Codintern's upcoming workshops and enhance your skills with industry experts.",
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
