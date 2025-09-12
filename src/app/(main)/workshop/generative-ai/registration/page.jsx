import { WorkShopRegistrationClient } from "@/components/workshop/workshop-registration-client";

export const metadata = {
  title: "Workshop Registration - Codintern",
  description:
    "Register for Codintern's upcoming workshops and enhance your skills with industry experts.",
};

const WorkShopRegistration = () => {
  return (
    <WorkShopRegistrationClient
      title="Generative AI Workshop Registration Form"
      type="generative-ai"
    />
  );
};

export default WorkShopRegistration;
