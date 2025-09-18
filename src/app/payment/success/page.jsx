"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Copy,
  CopyCheckIcon,
  CopyIcon,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
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

  const onCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };

  const shareToWhatsapp = () => {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(
      "Prompt Engineering Workshop:" + " " + link
    )}`;
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
                <strong>Prompt Engineering Workshop</strong>. <br /> We have
                sent you all the details to your Registered WhatsApp number.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

          <Card className="border bg-white/90">
            <CardContent className="p-6 py-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                CodIntern Support
              </h3>
              <div className="space-y-2">
                {/* Phone */}
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:+917311155738"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      +91 7311155738
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopy("+917311155738")}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <CopyIcon className="w-4 h-4" />
                  </Button>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:info@codintern.com"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      info@codintern.com
                    </a>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopy("info@codintern.com")}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <CopyIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <div className="">
            <p>CodIntern Support</p>
            <p className="text-muted-foreground">+91 7311155738</p>
            <p className="text-muted-foreground">info@codintern.com</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
