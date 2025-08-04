"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { LoginInSchema } from "@/schemas/SignInSchema";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSetLogin } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useApiMutation } from "@/hooks/useApiMutation";
import { POST } from "@/constants/apiMethods";
import Spinner from "../Spinner";
import { setAuthCookies } from "@/lib/setCookies";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useSetLogin();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const { reset, handleSubmit, control } = form;

  const handleGoogleLogin = () => {
    const url = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL;

    window.location.href = `${url}?intent=login`; // redirect to Node backend
  };

  const {
    mutateAsync: submitForm,
    isPending: isSubmitFormLoading,
    data: result,
  } = useApiMutation({
    url: "/student/auth/login",
    method: POST,
    invalidateKey: ["login"],
    // isToast: false,
  });

  console.log("login result", result);

  const onSubmit = async (data) => {
    console.log("Login attempt:", data);
    const apiData = {
      ...data,
      emailId: data.email,
    };

    await submitForm(apiData);
  };

  useEffect(() => {
    if (result) {
      const { accessToken, refreshToken, userInfo } = result.cookies;
      setAuthCookies({ accessToken, refreshToken, userInfo });
      login();
      reset();
      router.push("/");
    }
  }, [result]);

  return (
    <div className="bg-white flex flex-col justify-center py-5 px-7 sm:px-14 gap-4">
      <div className="">
        <h2 className="font-stolzl text-2xl md:text-3xl font-medium">Login</h2>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 mt-8 sm:mt-10"
          >
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal font-stolzl">
                    Email
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#84818C] h-4 w-4" />
                      <Input
                        placeholder="Enter email address"
                        className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal font-stolzl">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#84818C] h-4 w-4" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        className="pl-10 pr-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 cursor-pointer" />
                        ) : (
                          <Eye className="h-4 w-4 cursor-pointer" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between my-8">
              <FormField
                control={control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-1 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="border-black border-2"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel className="text-sm font-medium cursor-pointer">
                        Remember Me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <a
                href="#"
                className="text-sm text-[#FF0000] hover:text-[#e50000] font-medium"
              >
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              variant="linearGradient"
              className="w-full h-12"
            >
              {isSubmitFormLoading ? (
                <Spinner spinnerClassName="size-6" />
              ) : (
                "Log in"
              )}
            </Button>
          </form>
        </Form>

        <div className="relative mt-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm sm:text-base">
            <span className="px-2 bg-white font-stolzl font-book">
              or continue with
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center mt-6">
          <Button
            onClick={handleGoogleLogin}
            variant="ghost"
            className="size-14 shadow flex justify-center items-center border border-[#EBEBEB] rounded-full"
          >
            <Image src="/google.svg" width={30} height={30} alt="Google" />
          </Button>
          {/* <Button
            variant="ghost"
            className="size-14 shadow flex justify-center items-center border border-[#EBEBEB] rounded-full"
          >
            <Image
              src="/sign-in/apple.svg"
              width={30}
              height={30}
              alt="apple"
            />
          </Button> */}
          {/* <Button
            variant="ghost"
            className="size-14 shadow p-0 flex justify-center items-center border border-[#EBEBEB] rounded-full"
          >
            <Image
              src="/sign-in/facebook.svg"
              width={30}
              height={30}
              alt="facebook"
            />
          </Button> */}
        </div>
        <p className="mt-4 font-stolzl text-xs sm:text-sm md:text-base font-book text-center">
          Don’t have an account?
          <Link href="/sign-up" className="text-main ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
