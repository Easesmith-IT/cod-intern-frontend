import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { z } from "zod";
import Spinner from "../Spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  otp: z.string().length(6, { message: "OTP must be 6 digits" }),
});

export const OtpModal = ({
  open,
  setOpen,
  phoneNumber,
  onVerify,
  onResend,
  loading = false,
  isPending = false,
  title = "Verify your phone",
  description = "Enter the 6-digit code we sent to your phone.",
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { otp: "" },
  });

  const onSubmit = async (data) => {
    console.log("OTP Submitted:", data);
    await onVerify({ otp: data.otp, mobileNumber: phoneNumber });
    // Handle OTP verification logic here
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {phoneNumber && (
            <p className="mt-1 text-sm text-muted-foreground">
              Code sent to <strong>{phoneNumber}</strong>
            </p>
          )}
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="flex flex-col gap-3">
              <Button type="submit" disabled={loading}>
                {loading ? <Spinner /> : "Verify"}
              </Button>
              {onResend && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => onResend?.({ mobileNumber: phoneNumber })}
                >
                  {isPending ? <Spinner /> : "Resend code"}
                </Button>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
