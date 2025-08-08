import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export const ApplyNowModal = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl text-center font-semibold text-gray-900">
            Apply Now
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-center flex gap-3 mt-4 items-center justify-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-sm px-5 py-2 w-40"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
            <b>Or</b>
            <Button
              size="lg"
              variant="linearGradient"
              className="rounded-sm px-5 py-2 w-40"
              asChild
            >
              <Link href="/sign-up">Register</Link>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
