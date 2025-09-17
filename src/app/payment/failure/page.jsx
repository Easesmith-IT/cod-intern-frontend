"use client";

import { XCircle } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button"; // make sure Button is imported
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCountdownTimer } from "@/hooks/use-countdown";

const FailurePage = () => {
  const router = useRouter();

  const { minutes, seconds, reset } = useCountdownTimer(
    "failure-timer",
    10,
    () => {
      router.push("/");
    }
  );

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="sm:max-w-md mx-auto border p-5 rounded-lg">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Payment Failed
          </h2>

          {/* Message */}
          <p className="mt-2 text-gray-600">
            Unfortunately, your payment could not be processed. Please try again
            or use a different payment method.
          </p>
        </div>

        <div className="mt-6 flex sm:justify-center gap-3">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/workshop/generative-ai">Try Again</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Cancel</Link>
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Redirecting to home page in {minutes}:{seconds} seconds.
        </p>
      </div>
    </div>
  );
};

export default FailurePage;
