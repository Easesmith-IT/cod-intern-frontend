import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupOtpSchema, SignupSchema } from "@/schemas/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock } from "lucide-react";
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

  function onSubmit(values) {
    console.log("Login attempt:", values);
    router.push("/sign-up/information");
  }

  return (
    <div className="">
      <h2 className="font-stolzl text-2xl md:text-3xl font-medium">
        Check your inbox
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 mt-8 sm:mt-10"
        >
          <p className="font-stolzl text-xl font-book leading-7">
            Enter the 6-digit code we sent to email address to finish your sign
            up.
          </p>
          <FormField
            control={form.control}
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
            Sign up
          </Button>
        </form>
      </Form>
      <Button variant="link" className="mt-5 px-0 font-normal">
        Resend Code
      </Button>
    </div>
  );
};
