"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="sm:max-w-md border p-5 rounded-lg">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-900">
            Payment Successful!!
          </h2>
          <p className="text-gray-600 text-center mt-4">
            Thank you for your payment. Your transaction has been completed
            successfully, and a confirmation has been sent to your email.
          </p>
        </div>
        <div className="flex sm:justify-center mt-5">
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Link href="/">Continue</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
