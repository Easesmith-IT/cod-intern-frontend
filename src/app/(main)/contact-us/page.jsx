export const dynamic = "force-dynamic";

import { ContactUsClient } from "@/components/contact-us/contact-us-client";
import { getSeoByPage } from "@/lib/axiosInstance";

export async function generateMetadata() {
  const seo = await getSeoByPage("contact-us");

  const defaultTitle = "Contact Us - CodIntern";
  const defaultDescription =
    "Get in touch with CodIntern for inquiries, support, or collaborations.";
  const keywords = [
    "CodIntern contact",
    "CodIntern support",
    "CodIntern inquiries",
    "CodIntern collaborations",
    "CodIntern help",
    "CodIntern customer service",
    "CodIntern email",
    "CodIntern phone",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/contact-us`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const ContactUs = () => {
  return (
    <section>
      <ContactUsClient />
    </section>
  );
};

export default ContactUs;
