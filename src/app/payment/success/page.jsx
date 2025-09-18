"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, CopyCheckIcon, CopyIcon, Instagram } from "lucide-react";
import {
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { toast } from "sonner";

const SuccessPage = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const link = "https://www.codintern.com/workshop/prompt-engineering";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const shareToWhatsapp = () => {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(
      "Prompt Engineering Workshop:" + " " + link
    )}`;
    window.open(shareUrl, "_blank");
  };

  const shareToMessenger = () => {
    const shareUrl = `fb-messenger://share/?link=${encodeURIComponent(link)}`;
    window.open(shareUrl, "_blank");
  };

  return (
    // <div className="flex h-screen items-center justify-center">
    //   <div className="sm:max-w-md border p-5 rounded-lg">
    //     <div className="text-center">
    //       <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
    //         <CheckCircle className="h-8 w-8 text-green-600" />
    //       </div>
    //       <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-900">
    //         Payment Successful!!
    //       </h2>
    //       <p className="text-gray-600 text-center mt-4">
    //         Thank you for your payment. Your transaction has been completed
    //         successfully, and a confirmation has been sent to your email.
    //       </p>
    //     </div>
    //     <div className="flex sm:justify-center mt-5">
    //       <Button
    //         asChild
    //         className="bg-green-600 hover:bg-green-700 text-white"
    //       >
    //         <Link href="/">Continue</Link>
    //       </Button>
    //     </div>
    //     <p className="text-center text-xs text-muted-foreground mt-2">
    //       Redirecting to home page in {minutes}:{seconds} seconds.
    //     </p>
    //   </div>
    // </div>
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-center items-center mb-10">
        <Link href="/">
          <Image
            className="w-[100px] h-14 sm:w-[140px]"
            src="/logo.svg"
            width={140}
            height={65}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {/* Main Success Message */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-start gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-950 flex gap-2 items-center">
                <MdVerified className="text-green-500 size-8 fill-current" />
                Registration Successful
              </h2>
              <div className="text-muted-foreground text-lg leading-relaxed">
                <span className="inline-block">🎉</span>
                You have successfully reserved your seats for our{" "}
                <strong>Prompt Engineering Workshop</strong>. We have sent you
                all the details to your Registered WhatsApp number.
                <span className="inline-block ml-2">🎉</span>
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex mt-8">
            <div className="bg-secondary px-4 py-2 rounded-lg rounded-r-none">
              <span className="font-medium">31 Oct- 1 Nov 2025</span>
            </div>
            <div className="border border-l-0 px-4 py-2 rounded-lg rounded-l-none">
              <span className="font-medium">11:00 AM To 03:00 PM IST</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* User Profile Card */}

          {/* Share Section */}
          <Card className="border p-6 max-w-lg">
            <h3 className="font-semibold text-muted-foreground mb-4">
              Share with friends & family
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2">
                <Button
                  onClick={handleCopy}
                  variant="secondary"
                  size="icon"
                  className="h-12 w-12"
                >
                  {copied ? (
                    <CopyCheckIcon className="size-4 text-blue-400" />
                  ) : (
                    <CopyIcon className="size-5 text-blue-400" />
                  )}
                </Button>
                <span className="text-xs text-gray-400">Copy Link</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button
                  onClick={shareToWhatsapp}
                  variant="secondary"
                  size="icon"
                  className="h-12 w-12"
                >
                  <IoLogoWhatsapp className="text-green-500 size-6" />
                </Button>
                {/* <WhatsappShareButton
                  url={link}
                  title={"Prompt Engineering Workshop"}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton> */}
                <span className="text-xs text-gray-400">WhatsApp</span>
              </div>
              {/* <div className="flex flex-col items-center gap-2">
                <Button variant="secondary" size="icon" className="h-12 w-12">
                  <Instagram className="size-5 text-pink-500" />
                </Button>
                <span className="text-xs text-gray-400">Instagram</span>
              </div> */}
              <div className="flex flex-col items-center gap-2">
                {/* <div className="h-12 w-12 bg-secondary rounded-md flex justify-center items-center"> */}
                <FacebookMessengerShareButton
                  url={link}
                  appId={""}
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "oklch(0.97 0 0)",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FacebookMessengerIcon size={24} round />
                </FacebookMessengerShareButton>
                {/* </div> */}
                <span className="text-xs text-gray-400">Messenger</span>
              </div>
            </div>
          </Card>

          {/* Support Section */}
          {/* <Card className="p-6">
            <h3 className="font-semibold text-muted-foreground mb-2">
              Uptor Support Page
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              24/7 Support Available (Except Government Holidays)
            </p>
            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-muted-foreground border border-gray-700">
              Visit Page
            </Button>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
