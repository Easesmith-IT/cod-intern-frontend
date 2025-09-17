import { ContactUsClient } from "@/components/contact-us/contact-us-client";

export const metadata = {
  title: "Contact Us - Codintern",
  description:
    "Get in touch with Codintern for inquiries, support, or collaborations.",
};

const ContactUs = () => {
  return (
    <section>
      <ContactUsClient />
    </section>
  );
};

export default ContactUs;
