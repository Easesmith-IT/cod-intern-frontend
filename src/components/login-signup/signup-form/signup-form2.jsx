import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { POST } from "@/constants/apiMethods";
import { useApiMutation } from "@/hooks/useApiMutation";
import { SignupOtpSchema } from "@/schemas/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const SignupForm2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(SignupOtpSchema),
    defaultValues: {
      code: "",
    },
  });

  const { reset, handleSubmit, control } = form;
  const email = localStorage.getItem("cod-intern-email");

  const { mutateAsync: submitForm, isPending: isSubmitFormLoading } =
    useApiMutation({
      url: "/student/auth/verify-otp",
      method: POST,
      invalidateKey: ["verify-otp"],
      // isToast: false,
    });

  const { mutateAsync: resendOtp, isPending: isResendOtpLoading } =
    useApiMutation({
      url: "/student/auth/resend-otp",
      method: POST,
      invalidateKey: ["resend-otp"],
      // isToast: false,
    });

  const handleResendOtp = async () => {
    await resendOtp({ email });
  };

  const onSubmit = async (data) => {
    console.log("Login attempt:", data);
    const apiData = {
      otp: data.code,
      email,
    };

    await submitForm(apiData);

    reset();
    router.push("/sign-up/information");
  };

  return (
    <div className="">
      <h2 className="font-stolzl text-2xl md:text-3xl font-medium">
        Check your inbox
      </h2>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 mt-8 sm:mt-10"
        >
          <p className="font-stolzl text-xl font-book leading-7">
            Enter the 6-digit code we sent to email address to finish your sign
            up.
          </p>
          <FormField
            control={control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="6-digit code"
                      className="pr-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#84818C] h-4 w-4" />
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="linearGradient"
            className="w-full h-12"
          >
            {isSubmitFormLoading ? (
              <Spinner spinnerClassName="size-6" />
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      </Form>
      <Button
        onClick={handleResendOtp}
        variant="link"
        className="mt-5 px-0 font-normal"
        disabled={isResendOtpLoading}
      >
        Resend Code
      </Button>
    </div>
  );
};
