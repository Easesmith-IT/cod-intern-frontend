import Image from "next/image";
import { Info } from "./info";
import { SendUsMessageForm } from "./send-us-message-form";

export const SendUsMessage = () => {
  return (
    <section className="section-container flex justify-between items-center">
      <SendUsMessageForm />
      <div className="h-[660px] w-[340px] flex flex-col justify-center bg-[linear-gradient(263.55deg,_#F3F1F5_8.66%,_#F3F4FF_100%)] relative">
        <div className="w-[355px] rounded-tr-lg rounded-br-lg -translate-x-[50px] bg-white shadow-[0px_8px_25px_0px_#0000001F] p-4">
          <h3 className="font-stolzl font-medium text-2xl text-para-3">
            Contact Information
          </h3>
          <div className="space-y-9 mt-9">
            <Info
              icon="/contact-us/phone.svg"
              alt="Phone"
              width={14}
              height={24}
              title="Feel Free to Contact US"
              desc="+91 12345 67890"
            />
            <Info
              icon="/contact-us/mail.svg"
              alt="Mail"
              width={18}
              height={10}
              title="Get Email"
              desc="enquire@itil.org.uk"
            />
            <Info
              icon="/contact-us/map-pin-2.svg"
              alt="Location"
              width={15}
              height={21}
              title="In the bay area?"
              desc="3rd Floor Regent Street, London, England, W1B 3HH"
            />
          </div>
        </div>
        <Image
          className="-translate-x-[50px]"
          src="/contact-us/contact-icon.svg"
          width={51}
          height={49}
        />
      </div>
    </section>
  );
};
